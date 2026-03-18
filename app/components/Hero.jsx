"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
    const scrollToContact = (e) => {
        e.preventDefault();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-banner.png"
                    alt="Premium Interior Design"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="hero-overlay absolute inset-0" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="inline-block text-gold-light text-xs font-semibold tracking-[0.3em] uppercase mb-6 border border-gold-light/30 px-4 py-1.5 rounded-full">
                            25+ Years of Excellence Nationwide
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-[1.1] mb-6"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Premium Interior Design for{" "}
                        <span className="text-gold-gradient">Modern Homes</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-white/70 text-lg sm:text-xl mb-10 max-w-xl leading-relaxed"
                    >
                        Free Consultation &nbsp;|&nbsp; Transparent Pricing &nbsp;|&nbsp;
                        45 Days Delivery
                    </motion.p>

                    {/* Get Quote CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a
                            href="#contact"
                            onClick={scrollToContact}
                            className="btn-gold inline-flex items-center gap-3 text-white font-semibold px-10 py-4 rounded-full text-base sm:text-lg shadow-2xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            Get Your Free Quote
                            <FiArrowDown size={20} className="animate-bounce" />
                        </a>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                        className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 mt-12 text-white/50 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gold" />
                            500+ Projects
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gold" />
                            Happy Clients
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-gold" />
                            Pan India
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
