"use client";
import { FadeInUp, FadeInLeft, SectionHeading } from "./Animations";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const STEPS = [
    {
        number: "01",
        title: "Discovery & Consultation",
        desc: "We begin with in-depth conversations to understand your lifestyle, present requirements of the designs, and materials within your budget. After the discussion, a site visit is required to understand the practical interior solutions for the entire house.",
    },
    {
        number: "02",
        title: "Design & Planning",
        desc: "Our expert designers create detailed 2D/3D layouts, material mood boards, and a comprehensive design proposal tailored to your vision.",
    },
    {
        number: "03",
        title: "Approval & Coordination",
        desc: "We walk you through every detail for your approval, finalize material selections, and coordinate with vendors and craftsmen for a seamless execution.",
    },
    {
        number: "04",
        title: "Execution & Fabrication",
        desc: "Our skilled teams get to work — fabricating modular units, coordinating civil work, electrical, and plumbing with precision and on-schedule delivery.",
    },
    {
        number: "05",
        title: "Installation & Finishing",
        desc: "Every element is meticulously installed and finished. From paint touch-ups to final styling, we ensure perfection in every detail.",
    },
    {
        number: "06",
        title: "Inspection & Handover",
        desc: "A thorough quality inspection is done before handover. We walk you through your dream space and ensure your complete satisfaction.",
    },
];

function TimelineStep({ step, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            className="relative pl-16 pb-12 last:pb-0 group"
        >
            {/* Connector line */}
            {index < STEPS.length - 1 && (
                <div className="absolute left-[23px] top-[52px] bottom-0 w-[2px] bg-gradient-to-b from-gold to-gold-muted" />
            )}

            {/* Step number circle */}
            <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-white font-bold text-sm premium-shadow group-hover:scale-110 transition-transform duration-300">
                {step.number}
            </div>

            {/* Content */}
            <div className="bg-white rounded-2xl p-6 premium-shadow border border-gold/5 hover:border-gold/15 transition-all duration-500 group-hover:-translate-y-0.5">
                <h4
                    className="text-lg font-semibold text-charcoal mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {step.title}
                </h4>
                <p className="text-soft-grey text-sm leading-relaxed">{step.desc}</p>
            </div>
        </motion.div>
    );
}

export default function Process() {
    return (
        <section id="process" className="py-24 lg:py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label="Our Process"
                    title="How We Work"
                    subtitle="A transparent, six-step workflow designed to deliver your dream interiors — on time and on budget."
                />

                <div className="max-w-2xl mx-auto">
                    {STEPS.map((step, i) => (
                        <TimelineStep key={step.number} step={step} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
