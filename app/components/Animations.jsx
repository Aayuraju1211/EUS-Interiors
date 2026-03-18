"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

// Reusable scroll-triggered animation wrapper
export function FadeInUp({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInLeft({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function FadeInRight({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function ScaleIn({ children, delay = 0, className = "" }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
            }
            transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

// Section heading component
export function SectionHeading({ label, title, subtitle, light = false }) {
    return (
        <FadeInUp className="text-center mb-16">
            {label && (
                <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-4">
                    {label}
                </span>
            )}
            <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 ${light ? "text-white" : "text-charcoal"
                    }`}
                style={{ fontFamily: "var(--font-display)" }}
            >
                {title}
            </h2>
            <div className="section-divider mx-auto mb-5" />
            {subtitle && (
                <p
                    className={`max-w-2xl mx-auto text-base sm:text-lg leading-relaxed ${light ? "text-white/70" : "text-soft-grey"
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </FadeInUp>
    );
}
