"use client";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading, ScaleIn } from "./Animations";
import { FiArrowRight } from "react-icons/fi";

const PROJECTS = [
    {
        src: "/kitchen.png",
        alt: "Modular Kitchen Design by EUS Interior",
        title: "Modular Kitchen",
        slug: "modular-kitchen",
        desc: "Sleek, functional kitchens built to perfection.",
    },
    {
        src: "/full-home-interior.jpg",
        alt: "Full Home Interior Design by EUS Interior",
        title: "Full Home Interior",
        slug: "full-home-interior",
        desc: "End-to-end interior transformation for your home.",
    },
    {
        src: "/luxury-home-interior.jpg",
        alt: "Luxury Interior Design by EUS Interior",
        title: "Luxury Interior",
        slug: "luxury-interior",
        desc: "Opulent spaces crafted with premium materials.",
    },
    {
        src: "/renovation.png",
        alt: "Renovation Services by EUS Interior",
        title: "Renovation",
        slug: "renovation",
        desc: "Breathe new life into your existing spaces.",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 lg:py-32 bg-warm-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label="Our Portfolio"
                    title="Projects That Speak"
                    subtitle="Explore our portfolio of stunning interior design projects across India."
                />

                {/* 4-Tile Grid */}
                <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                    {PROJECTS.map((project, i) => (
                        <ScaleIn key={project.slug} delay={i * 0.1}>
                            <Link href={`/projects/${project.slug}`} className="block group">
                                <div className="relative rounded-2xl overflow-hidden premium-shadow">
                                    <div className="relative h-[320px] sm:h-[360px] lg:h-[400px]">
                                        <Image
                                            src={project.src}
                                            alt={project.alt}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Permanent gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-gold-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        {/* Text */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                                            <h4
                                                className="text-white font-semibold text-xl sm:text-2xl mb-1.5"
                                                style={{ fontFamily: "var(--font-display)" }}
                                            >
                                                {project.title}
                                            </h4>
                                            <p className="text-white/70 text-sm mb-4">
                                                {project.desc}
                                            </p>
                                            <span className="inline-flex items-center gap-2 text-gold-light text-sm font-medium group-hover:gap-3 transition-all duration-300">
                                                View Projects
                                                <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
