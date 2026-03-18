"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

export default function ProjectDetailLayout({
    title,
    subtitle,
    heroImage,
    overview,
    process,
    materials,
    galleryImages,
}) {
    return (
        <main className="bg-warm-white min-h-screen">
            {/* Hero Header */}
            <section className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-end">
                <div className="absolute inset-0">
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 sm:pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/70 hover:text-gold-light text-sm font-medium mb-6 transition-colors duration-300"
                        >
                            <FiArrowLeft size={16} />
                            Back to Home
                        </Link>
                        <h1
                            className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-3"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-white/60 text-lg sm:text-xl max-w-2xl">
                                {subtitle}
                            </p>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="py-16 sm:py-20 lg:py-24 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-gold/30 px-4 py-1.5 rounded-full">
                            Project Overview
                        </span>
                        <p
                            className="text-dark-grey text-lg sm:text-xl leading-relaxed"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            {overview}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-16 sm:py-20 lg:py-24 bg-warm-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-gold/30 px-4 py-1.5 rounded-full">
                            Our Process
                        </span>
                        <h2
                            className="text-3xl sm:text-4xl font-semibold text-charcoal"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            How We Bring It to Life
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {process.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="bg-white rounded-2xl p-6 sm:p-8 premium-shadow border border-gold/5 text-center relative"
                            >
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-white font-bold text-lg">
                                    {i + 1}
                                </div>
                                <h4
                                    className="text-charcoal font-semibold text-lg mb-2"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {step.title}
                                </h4>
                                <p className="text-soft-grey text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials Used */}
            <section className="py-16 sm:py-20 lg:py-24 bg-cream">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <span className="inline-block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-gold/30 px-4 py-1.5 rounded-full">
                            Premium Quality
                        </span>
                        <h2
                            className="text-3xl sm:text-4xl font-semibold text-charcoal"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Materials We Use
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-2xl p-8 sm:p-10 premium-shadow"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            {materials.map((material, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3 py-2.5"
                                >
                                    <div className="w-6 h-6 rounded-full bg-gold-subtle flex items-center justify-center flex-shrink-0">
                                        <FiCheck size={14} className="text-gold-dark" />
                                    </div>
                                    <span className="text-dark-grey text-sm font-medium">
                                        {material}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-16 sm:py-20 lg:py-24 bg-warm-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <span className="inline-block text-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4 border border-gold/30 px-4 py-1.5 rounded-full">
                            Gallery
                        </span>
                        <h2
                            className="text-3xl sm:text-4xl font-semibold text-charcoal"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Our Work in Detail
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group"
                            >
                                <div className="relative h-[260px] sm:h-[280px] rounded-2xl overflow-hidden premium-shadow">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back to Home CTA */}
            <section className="py-16 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3
                        className="text-2xl sm:text-3xl font-semibold text-white mb-3"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-white/80 text-sm mb-8 max-w-lg mx-auto">
                        Get in touch with us for a free consultation and let&apos;s bring your vision to life.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="bg-white text-gold-dark font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-cream transition-colors flex items-center gap-2"
                        >
                            <FiArrowLeft size={15} />
                            Back to Home
                        </Link>
                        <a
                            href="https://wa.me/918421119083"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-sm hover:bg-white/30 transition-colors backdrop-blur-sm"
                        >
                            Get Free Quote on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
