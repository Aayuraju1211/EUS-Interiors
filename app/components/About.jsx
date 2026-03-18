"use client";
import Image from "next/image";
import { FadeInLeft, FadeInRight, SectionHeading } from "./Animations";
import { FiCheck } from "react-icons/fi";

const HIGHLIGHTS = [
    "End-to-end interior design & execution",
    "25+ years of experience across India",
    "Premium quality materials & craftsmanship",
    "Transparent pricing with no hidden costs",
];

export default function About() {
    return (
        <section id="about" className="py-24 lg:py-32 bg-warm-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label="About Us"
                    title="Crafting Spaces That Inspire"
                    subtitle="We offer premium interior design services nationwide."
                />

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-8">
                    {/* Image */}
                    <FadeInLeft>
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden premium-shadow">
                                <Image
                                    src="/about-living-room.png"
                                    alt="Modern living room by EUS Interiors"
                                    width={640}
                                    height={480}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -right-4 sm:right-4 glass-card rounded-xl p-4 premium-shadow">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">25+</span>
                                    </div>
                                    <div>
                                        <p className="text-charcoal font-semibold text-sm">
                                            Years of
                                        </p>
                                        <p className="text-gold text-xs font-medium">
                                            Excellence
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeInLeft>

                    {/* Content */}
                    <FadeInRight>
                        <div>
                            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-3 block">
                                Welcome to EUS Interiors
                            </span>
                            <h3
                                className="text-2xl sm:text-3xl font-semibold text-charcoal mb-5 leading-snug"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Designing Dreams,
                                <br />
                                <span className="text-gold-gradient">Executing Excellence</span>
                            </h3>
                            <p className="text-soft-grey leading-relaxed mb-5">
                                At <strong className="text-charcoal">EUS Interiors</strong>,
                                we are committed to delivering end-to-end interior design and execution
                                solutions with uncompromising quality and precision. With over 25 years
                                of experience serving homeowners across India, we transform ordinary
                                spaces into extraordinary living experiences.
                            </p>
                            <p className="text-soft-grey leading-relaxed mb-8">
                                From modern modular kitchens to bespoke wardrobes and full home
                                interiors, every project reflects our dedication to craftsmanship,
                                innovation, and a client-centric approach that puts your vision first.
                            </p>

                            {/* Highlights */}
                            <div className="space-y-3 mb-8">
                                {HIGHLIGHTS.map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gold-subtle flex items-center justify-center flex-shrink-0">
                                            <FiCheck className="text-gold-dark" size={12} />
                                        </div>
                                        <span className="text-dark-grey text-sm font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className="btn-gold inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full text-sm"
                            >
                                Let&apos;s Discuss Your Project
                            </a>
                        </div>
                    </FadeInRight>
                </div>
            </div>
        </section>
    );
}
