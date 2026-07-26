"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const COLS = 10;
const ROWS = 20;

const SHAPES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
};

const COLORS = {
  I: { fill: "#22d3ee", glow: "#22d3ee", edge: "#67e8f9" },
  O: { fill: "#facc15", glow: "#facc15", edge: "#fde68a" },
  T: { fill: "#a855f7", glow: "#a855f7", edge: "#c4b5fd" },
  S: { fill: "#22c55e", glow: "#22c55e", edge: "#86efac" },
  Z: { fill: "#ef4444", glow: "#ef4444", edge: "#fca5a5" },
  J: { fill: "#3b82f6", glow: "#3b82f6", edge: "#93c5fd" },
  L: { fill: "#f97316", glow: "#f97316", edge: "#fdba74" },
};

const PIECES = Object.keys(SHAPES);

const LINE_SCORES = [0, 100, 300, 500, 800];

const createEmptyBoard = () =>
  Array.from({ length: ROWS }, () => Array(COLS).fill(null));

const randomPiece = () => {
  const type = PIECES[Math.floor(Math.random() * PIECES.length)];
  return {
    type,
    shape: SHAPES[type].map((row) => [...row]),
    x: Math.floor(COLS / 2) - Math.ceil(SHAPES[type][0].length / 2),
    y: 0,
  };
};

const rotate = (shape) => {
  const N = shape.length;
  const result = Array.from({ length: N }, () => Array(N).fill(0));
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      result[c][N - 1 - r] = shape[r][c];
    }
  }
  return result;
};

const isValid = (board, shape, x, y) => {
  for (let r = 0; r < shape.length; r++) {
    for (let c = 0; c < shape[r].length; c++) {
      if (!shape[r][c]) continue;
      const nx = x + c;
      const ny = y + r;
      if (nx < 0 || nx >= COLS || ny >= ROWS) return false;
      if (ny >= 0 && board[ny][nx]) return false;
    }
  }
  return true;
};

const mergePiece = (board, piece) => {
  const next = board.map((row) => [...row]);
  piece.shape.forEach((row, r) => {
    row.forEach((v, c) => {
      if (v && piece.y + r >= 0) {
        next[piece.y + r][piece.x + c] = piece.type;
      }
    });
  });
  return next;
};

const clearLines = (board) => {
  const remaining = board.filter((row) => row.some((cell) => !cell));
  const cleared = ROWS - remaining.length;
  const empties = Array.from({ length: cleared }, () => Array(COLS).fill(null));
  return { board: [...empties, ...remaining], cleared };
};

const dropDistance = (board, piece) => {
  let dy = 0;
  while (isValid(board, piece.shape, piece.x, piece.y + dy + 1)) dy++;
  return dy;
};

function Cell({ type, ghost = false, size = 28 }) {
  if (!type) {
    return (
      <div
        style={{ width: size, height: size }}
        className="border border-white/[0.04] bg-white/[0.015]"
      />
    );
  }
  const c = COLORS[type];
  return (
    <div
      style={{
        width: size,
        height: size,
        background: ghost
          ? `transparent`
          : `linear-gradient(135deg, ${c.edge} 0%, ${c.fill} 50%, ${c.fill} 100%)`,
        boxShadow: ghost
          ? `inset 0 0 0 2px ${c.fill}55`
          : `inset 0 0 0 1px ${c.edge}, inset 0 -3px 6px rgba(0,0,0,0.35), 0 0 12px ${c.glow}40`,
        opacity: ghost ? 0.35 : 1,
      }}
      className="rounded-[3px] transition-opacity"
    />
  );
}

function MiniPiece({ type, size = 18 }) {
  if (!type) return null;
  const shape = SHAPES[type];
  const rows = shape.length;
  const cols = shape[0].length;
  return (
    <div
      className="grid gap-[2px]"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`,
      }}
    >
      {shape.flatMap((row, r) =>
        row.map((v, c) => (
          <div key={`${r}-${c}`}>
            {v ? <Cell type={type} size={size} /> : <div style={{ width: size, height: size }} />}
          </div>
        ))
      )}
    </div>
  );
}

export default function TetrisGame() {
  const [board, setBoard] = useState(createEmptyBoard);
  const [piece, setPiece] = useState(randomPiece);
  const [nextPiece, setNextPiece] = useState(randomPiece);
  const [holdPiece, setHoldPiece] = useState(null);
  const [canHold, setCanHold] = useState(true);
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const [flashRows, setFlashRows] = useState([]);

  const boardRef = useRef(board);
  const pieceRef = useRef(piece);
  const nextRef = useRef(nextPiece);
  const holdRef = useRef(holdPiece);
  const canHoldRef = useRef(canHold);
  const stateRef = useRef({ gameOver, paused, started });

  useEffect(() => {
    boardRef.current = board;
  }, [board]);
  useEffect(() => {
    pieceRef.current = piece;
  }, [piece]);
  useEffect(() => {
    nextRef.current = nextPiece;
  }, [nextPiece]);
  useEffect(() => {
    holdRef.current = holdPiece;
  }, [holdPiece]);
  useEffect(() => {
    canHoldRef.current = canHold;
  }, [canHold]);
  useEffect(() => {
    stateRef.current = { gameOver, paused, started };
  }, [gameOver, paused, started]);

  const reset = useCallback(() => {
    setBoard(createEmptyBoard());
    setPiece(randomPiece());
    setNextPiece(randomPiece());
    setHoldPiece(null);
    setCanHold(true);
    setScore(0);
    setLines(0);
    setLevel(1);
    setGameOver(false);
    setPaused(false);
    setStarted(true);
    setFlashRows([]);
  }, []);

  const lockAndAdvance = useCallback((finalPiece) => {
    const merged = mergePiece(boardRef.current, finalPiece);

    const fullRows = [];
    merged.forEach((row, i) => {
      if (row.every((c) => c)) fullRows.push(i);
    });

    if (fullRows.length > 0) {
      setFlashRows(fullRows);
      setBoard(merged);
      setTimeout(() => {
        const { board: cleared, cleared: count } = clearLines(merged);
        setBoard(cleared);
        setFlashRows([]);
        setLines((l) => {
          const newLines = l + count;
          setLevel(Math.floor(newLines / 10) + 1);
          return newLines;
        });
        setScore((s) => s + LINE_SCORES[count] * (Math.floor(lines / 10) + 1));

        const spawned = nextRef.current;
        if (!isValid(cleared, spawned.shape, spawned.x, spawned.y)) {
          setGameOver(true);
          setStarted(false);
        } else {
          setPiece(spawned);
          setNextPiece(randomPiece());
          setCanHold(true);
        }
      }, 220);
    } else {
      setBoard(merged);
      const spawned = nextRef.current;
      if (!isValid(merged, spawned.shape, spawned.x, spawned.y)) {
        setGameOver(true);
        setStarted(false);
      } else {
        setPiece(spawned);
        setNextPiece(randomPiece());
        setCanHold(true);
      }
    }
  }, [lines]);

  const move = useCallback((dx, dy) => {
    const p = pieceRef.current;
    if (isValid(boardRef.current, p.shape, p.x + dx, p.y + dy)) {
      setPiece({ ...p, x: p.x + dx, y: p.y + dy });
      return true;
    }
    return false;
  }, []);

  const softDrop = useCallback(() => {
    const moved = move(0, 1);
    if (!moved) {
      lockAndAdvance(pieceRef.current);
    } else {
      setScore((s) => s + 1);
    }
  }, [move, lockAndAdvance]);

  const hardDrop = useCallback(() => {
    const p = pieceRef.current;
    const dy = dropDistance(boardRef.current, p);
    const dropped = { ...p, y: p.y + dy };
    setScore((s) => s + dy * 2);
    lockAndAdvance(dropped);
  }, [lockAndAdvance]);

  const rotatePiece = useCallback(() => {
    const p = pieceRef.current;
    if (p.type === "O") return;
    const rotated = rotate(p.shape);
    const kicks = [0, -1, 1, -2, 2];
    for (const k of kicks) {
      if (isValid(boardRef.current, rotated, p.x + k, p.y)) {
        setPiece({ ...p, shape: rotated, x: p.x + k });
        return;
      }
    }
  }, []);

  const swapHold = useCallback(() => {
    if (!canHoldRef.current) return;
    const p = pieceRef.current;
    const fresh = SHAPES[p.type].map((row) => [...row]);
    if (holdRef.current) {
      const heldType = holdRef.current;
      const newPiece = {
        type: heldType,
        shape: SHAPES[heldType].map((row) => [...row]),
        x: Math.floor(COLS / 2) - Math.ceil(SHAPES[heldType][0].length / 2),
        y: 0,
      };
      if (!isValid(boardRef.current, newPiece.shape, newPiece.x, newPiece.y)) return;
      setHoldPiece(p.type);
      setPiece(newPiece);
    } else {
      setHoldPiece(p.type);
      const spawned = nextRef.current;
      if (!isValid(boardRef.current, spawned.shape, spawned.x, spawned.y)) {
        setGameOver(true);
        setStarted(false);
        return;
      }
      setPiece(spawned);
      setNextPiece(randomPiece());
    }
    setCanHold(false);
    void fresh;
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const { gameOver: go, paused: ps, started: st } = stateRef.current;
      if (e.key === "Enter" && (go || !st)) {
        reset();
        return;
      }
      if (!st) return;
      if (e.key.toLowerCase() === "p") {
        setPaused((p) => !p);
        return;
      }
      if (ps || go) return;

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          move(-1, 0);
          break;
        case "ArrowRight":
          e.preventDefault();
          move(1, 0);
          break;
        case "ArrowDown":
          e.preventDefault();
          softDrop();
          break;
        case "ArrowUp":
        case "x":
        case "X":
          e.preventDefault();
          rotatePiece();
          break;
        case " ":
          e.preventDefault();
          hardDrop();
          break;
        case "c":
        case "C":
        case "Shift":
          e.preventDefault();
          swapHold();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [move, softDrop, hardDrop, rotatePiece, swapHold, reset]);

  useEffect(() => {
    if (!started || gameOver || paused) return;
    const speed = Math.max(80, 1000 - (level - 1) * 80);
    const id = setInterval(() => {
      const p = pieceRef.current;
      if (isValid(boardRef.current, p.shape, p.x, p.y + 1)) {
        setPiece({ ...p, y: p.y + 1 });
      } else {
        lockAndAdvance(p);
      }
    }, speed);
    return () => clearInterval(id);
  }, [started, gameOver, paused, level, lockAndAdvance]);

  const renderBoard = () => {
    const display = board.map((row) => [...row]);
    const ghostY = piece.y + dropDistance(board, piece);

    if (started && !gameOver) {
      piece.shape.forEach((row, r) => {
        row.forEach((v, c) => {
          if (v) {
            const gy = ghostY + r;
            const gx = piece.x + c;
            if (gy >= 0 && gy < ROWS && gx >= 0 && gx < COLS && !display[gy][gx]) {
              display[gy][gx] = { ghost: true, type: piece.type };
            }
          }
        });
      });

      piece.shape.forEach((row, r) => {
        row.forEach((v, c) => {
          if (v) {
            const py = piece.y + r;
            const px = piece.x + c;
            if (py >= 0 && py < ROWS && px >= 0 && px < COLS) {
              display[py][px] = piece.type;
            }
          }
        });
      });
    }

    return display.map((row, r) => (
      <div key={r} className="flex">
        {row.map((cell, c) => {
          const flashing = flashRows.includes(r);
          if (cell && typeof cell === "object" && cell.ghost) {
            return (
              <div key={c}>
                <Cell type={cell.type} ghost />
              </div>
            );
          }
          return (
            <div
              key={c}
              style={{
                background: flashing ? "rgba(255,255,255,0.9)" : undefined,
                transition: flashing ? "background 80ms ease" : undefined,
              }}
            >
              <Cell type={cell} />
            </div>
          );
        })}
      </div>
    ));
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0f] text-white relative overflow-hidden font-[var(--font-body)]">
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 20% 10%, rgba(99,102,241,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 80% 90%, rgba(236,72,153,0.12) 0%, transparent 60%), radial-gradient(40% 40% at 50% 50%, rgba(34,211,238,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-8 md:py-12">
        <header className="flex items-center justify-between mb-8">
          <div>
            <div className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-1">
              Arcade
            </div>
            <h1 className="text-3xl md:text-4xl font-light tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">
                TETRIS
              </span>
            </h1>
          </div>
          <a
            href="/"
            className="text-xs tracking-widest uppercase text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-4 py-2 rounded-full"
          >
            ← Home
          </a>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
          <aside className="flex lg:flex-col gap-4 lg:w-44 w-full justify-center lg:justify-start">
            <Panel label="Hold">
              <div className="h-20 flex items-center justify-center">
                {holdPiece ? <MiniPiece type={holdPiece} /> : (
                  <span className="text-white/20 text-xs tracking-widest">EMPTY</span>
                )}
              </div>
            </Panel>
            <Panel label="Score">
              <div className="text-2xl font-light tabular-nums">{score.toLocaleString()}</div>
            </Panel>
          </aside>

          <main className="relative">
            <div
              className="relative rounded-2xl p-2"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(99,102,241,0.25), inset 0 1px 0 rgba(255,255,255,0.04)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div className="rounded-xl overflow-hidden bg-black/60 p-[2px]">
                <div className="flex flex-col">{renderBoard()}</div>
              </div>

              {!started && !gameOver && (
                <Overlay>
                  <div className="text-center">
                    <div className="text-xs tracking-[0.5em] text-white/40 mb-3">READY</div>
                    <button
                      onClick={reset}
                      className="px-8 py-3 rounded-full bg-white text-black text-sm tracking-widest uppercase font-medium hover:bg-cyan-200 transition-colors"
                    >
                      Press Enter to Play
                    </button>
                    <div className="mt-6 text-[11px] text-white/40 tracking-wider">
                      ←→ move · ↑ rotate · ↓ soft drop · space hard drop · C hold · P pause
                    </div>
                  </div>
                </Overlay>
              )}

              {paused && started && !gameOver && (
                <Overlay>
                  <div className="text-center">
                    <div className="text-xs tracking-[0.5em] text-white/40 mb-2">PAUSED</div>
                    <div className="text-sm text-white/70">Press P to resume</div>
                  </div>
                </Overlay>
              )}

              {gameOver && (
                <Overlay>
                  <div className="text-center">
                    <div className="text-xs tracking-[0.5em] text-pink-300/80 mb-2">GAME OVER</div>
                    <div className="text-3xl font-light mb-1 tabular-nums">{score.toLocaleString()}</div>
                    <div className="text-xs text-white/40 tracking-widest mb-6">
                      {lines} LINES · LEVEL {level}
                    </div>
                    <button
                      onClick={reset}
                      className="px-8 py-3 rounded-full bg-white text-black text-sm tracking-widest uppercase font-medium hover:bg-cyan-200 transition-colors"
                    >
                      Play Again
                    </button>
                  </div>
                </Overlay>
              )}
            </div>
          </main>

          <aside className="flex lg:flex-col gap-4 lg:w-44 w-full justify-center lg:justify-start">
            <Panel label="Next">
              <div className="h-20 flex items-center justify-center">
                <MiniPiece type={nextPiece.type} />
              </div>
            </Panel>
            <Panel label="Lines">
              <div className="text-2xl font-light tabular-nums">{lines}</div>
            </Panel>
            <Panel label="Level">
              <div className="text-2xl font-light tabular-nums">{level}</div>
            </Panel>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-[10px] tracking-[0.25em] uppercase text-white/30">
          <Key>←</Key><span>move</span>
          <span className="mx-2">·</span>
          <Key>↑</Key><span>rotate</span>
          <span className="mx-2">·</span>
          <Key>↓</Key><span>soft</span>
          <span className="mx-2">·</span>
          <Key>Space</Key><span>hard drop</span>
          <span className="mx-2">·</span>
          <Key>C</Key><span>hold</span>
          <span className="mx-2">·</span>
          <Key>P</Key><span>pause</span>
        </div>
      </div>
    </div>
  );
}

function Panel({ label, children }) {
  return (
    <div
      className="flex-1 lg:flex-none rounded-xl px-4 py-3"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 100%)",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="text-[10px] tracking-[0.3em] text-white/40 uppercase mb-2">
        {label}
      </div>
      {children}
    </div>
  );
}

function Overlay({ children }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center rounded-2xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.85) 100%)",
        backdropFilter: "blur(6px)",
      }}
    >
      {children}
    </div>
  );
}

function Key({ children }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[24px] h-6 px-2 rounded-md border border-white/15 bg-white/5 text-white/70 text-[10px] font-mono tracking-normal">
      {children}
    </kbd>
  );
}
