"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp, SectionHeading } from "./Animations";
import { FiStar } from "react-icons/fi";

const REVIEWS = [
    {
        name: "Priya & Aditya Sharma",
        location: "3BHK, Baner",
        text: "EUS Interiors transformed our 3BHK into a stunning contemporary home. The modular kitchen is absolutely gorgeous, and the attention to detail in every room exceeded our expectations. Delivered on time and within budget!",
        rating: 5,
    },
    {
        name: "Rajesh Kulkarni",
        location: "Villa, Tathawade",
        text: "I was blown away by the professionalism and design sensibility of the team. They understood our vision for a minimalist yet warm villa interior and executed it flawlessly. The false ceiling and TV unit are works of art!",
        rating: 5,
    },
    {
        name: "Sneha & Vikram Patil",
        location: "2BHK, Hinjewadi",
        text: "From consultation to handover, the experience was seamless. The wardrobe designs are incredibly functional and beautiful. What impressed us most was the transparent pricing — no surprises at all. Highly recommended!",
        rating: 5,
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <section className="py-24 lg:py-32 bg-warm-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label="Testimonials"
                    title="What Our Clients Say"
                    subtitle="Hear from our happy clients nationwide."
                />

                <div className="max-w-3xl mx-auto">
                    <FadeInUp>
                        <div className="relative">
                            {/* Quote mark */}
                            <div
                                className="absolute -top-6 left-8 text-8xl text-gold/10 font-serif leading-none select-none"
                                aria-hidden="true"
                            >
                                &ldquo;
                            </div>

                            <div className="bg-white rounded-3xl p-8 sm:p-12 premium-shadow border border-gold/5 relative overflow-hidden min-h-[280px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {/* Stars */}
                                        <div className="flex gap-1 mb-6">
                                            {Array.from({ length: REVIEWS[current].rating }).map(
                                                (_, i) => (
                                                    <FiStar
                                                        key={i}
                                                        size={18}
                                                        className="text-gold fill-gold"
                                                    />
                                                )
                                            )}
                                        </div>

                                        {/* Review text */}
                                        <p
                                            className="text-dark-grey text-lg sm:text-xl leading-relaxed mb-8 italic"
                                            style={{ fontFamily: "var(--font-display)" }}
                                        >
                                            &ldquo;{REVIEWS[current].text}&rdquo;
                                        </p>

                                        {/* Author */}
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center">
                                                <span className="text-white font-bold text-lg">
                                                    {REVIEWS[current].name.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="text-charcoal font-semibold">
                                                    {REVIEWS[current].name}
                                                </h4>
                                                <p className="text-soft-grey text-sm">
                                                    {REVIEWS[current].location}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {REVIEWS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className={`carousel-dot h-2 rounded-full transition-all duration-300 ${i === current
                                            ? "bg-gold w-6"
                                            : "bg-gold-muted w-2 hover:bg-gold-light"
                                        }`}
                                    aria-label={`Go to review ${i + 1}`}
                                />
                            ))}
                        </div>
                    </FadeInUp>
                </div>
            </div>
        </section>
    );
}
