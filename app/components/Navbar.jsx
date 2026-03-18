"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const NAV_LINKS = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Projects", href: "/#projects" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [mobileOpen]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "nav-blur bg-white/90 shadow-lg shadow-black/[0.03]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2 group">
                        <Image
                            src="/eus-logo.png"
                            alt="EUS Interior Logo"
                            width={48}
                            height={48}
                            className="rounded-lg object-contain"
                            priority
                        />
                        <div className="flex flex-col">
                            <span
                                className={`text-lg font-semibold tracking-tight transition-colors ${scrolled ? "text-charcoal" : "text-white"
                                    }`}
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                EUS Interior
                            </span>
                            <span
                                className={`text-[10px] uppercase tracking-[0.2em] -mt-1 transition-colors ${scrolled ? "text-gold" : "text-gold-light"
                                    }`}
                            >
                                Design &amp; Execution
                            </span>
                        </div>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold relative group ${scrolled ? "text-dark-grey" : "text-white/90"
                                    }`}
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
                            </a>
                        ))}
                        <a
                            href="/#contact"
                            className="btn-gold text-white text-sm font-semibold px-6 py-2.5 rounded-full"
                        >
                            Get Free Consultation
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled
                            ? "text-charcoal hover:bg-cream"
                            : "text-white hover:bg-white/10"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden fixed inset-0 top-20 bg-white/98 nav-blur z-40"
                    >
                        <div className="flex flex-col items-center justify-center h-full gap-8 -mt-20">
                            {NAV_LINKS.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-2xl font-medium text-charcoal hover:text-gold transition-colors"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="/#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={() => setMobileOpen(false)}
                                className="btn-gold text-white text-lg font-semibold px-8 py-3 rounded-full mt-4"
                            >
                                Get Free Consultation
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
