"use client";
import { FadeInUp, SectionHeading } from "./Animations";
import {
    MdVerified,
    MdDiamond,
    MdPriceCheck,
    MdSchedule,
    MdWorkspacePremium,
    MdPeople,
} from "react-icons/md";

const BENEFITS = [
    {
        icon: MdVerified,
        title: "Free Consultation",
        desc: "Start your journey with a complimentary design consultation and site visit — no obligations whatsoever.",
    },
    {
        icon: MdDiamond,
        title: "Premium Materials",
        desc: "We use only top-grade hardware, laminates, and finishes from trusted brands for lasting quality.",
    },
    {
        icon: MdPriceCheck,
        title: "Transparent Pricing",
        desc: "Detailed, itemized quotations with zero hidden costs. Know exactly what you're paying for — upfront.",
    },
    {
        icon: MdSchedule,
        title: "On-Time Delivery",
        desc: "We guarantee project completion within the committed timeline — typically 45 days for full interiors.",
    },
    {
        icon: MdWorkspacePremium,
        title: "25+ Years Experience",
        desc: "Over two decades of expertise serving homeowners across India with consistently excellent results.",
    },
    {
        icon: MdPeople,
        title: "Client-Centric Approach",
        desc: "Your vision is our priority. We listen, adapt, and deliver spaces that truly reflect your personality.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 lg:py-32 bg-charcoal relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <SectionHeading
                    label="Why Choose Us"
                    title="The Elite Difference"
                    subtitle="Why choose us for your interior design needs?"
                    light
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BENEFITS.map((benefit, i) => (
                        <FadeInUp key={benefit.title} delay={i * 0.08}>
                            <div className="group rounded-2xl p-6 border border-white/10 hover:border-gold/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 h-full">
                                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-500">
                                    <benefit.icon size={28} className="text-gold-light" />
                                </div>
                                <h3
                                    className="text-lg font-semibold text-white mb-2"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {benefit.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {benefit.desc}
                                </p>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
