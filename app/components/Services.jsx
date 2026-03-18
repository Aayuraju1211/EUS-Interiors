"use client";
import { FadeInUp, SectionHeading } from "./Animations";
import {
    MdHome,
    MdBusiness,
    MdDesignServices,
    MdSpaceBar,
    MdStar,
    MdSchedule,
} from "react-icons/md";

const SERVICES = [
    {
        icon: MdHome,
        title: "End-to-end interiors solutions",
        desc: "Complete project management from initial concept to final installation for a seamless experience.",
    },
    {
        icon: MdBusiness,
        title: "Residential and commercial expertise",
        desc: "Transforming both living spaces and professional workspaces to suit your specific needs.",
    },
    {
        icon: MdDesignServices,
        title: "Customized design",
        desc: "Personalized design concepts crafted to reflect your unique style and practical requirements.",
    },
    {
        icon: MdSpaceBar,
        title: "Smart space planning",
        desc: "Optimizing every square foot to ensure your space is highly functional and visually balanced.",
    },
    {
        icon: MdStar,
        title: "Premium materials and finishes",
        desc: "Sourcing high-quality, durable materials to give your interiors a flawless and long-lasting finish.",
    },
    {
        icon: MdSchedule,
        title: "On time delivery",
        desc: "Strict adherence to project timelines, ensuring your space is handed over exactly as scheduled.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label="Our Services"
                    title="What We Offer"
                    subtitle="We provide end-to-end interior design services nationwide."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, i) => (
                        <FadeInUp key={service.title} delay={i * 0.08}>
                            <div className="group bg-white rounded-2xl p-6 premium-shadow hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-transparent hover:border-gold/20 h-full">
                                <div className="w-14 h-14 rounded-xl bg-gold-subtle flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-gold-dark group-hover:to-gold transition-all duration-500">
                                    <service.icon
                                        size={26}
                                        className="text-gold group-hover:text-white transition-colors duration-500"
                                    />
                                </div>
                                <h3
                                    className="text-lg font-semibold text-charcoal mb-2 group-hover:text-gold-dark transition-colors"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    {service.title}
                                </h3>
                                <p className="text-soft-grey text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        </FadeInUp>
                    ))}
                </div>
            </div>
        </section>
    );
}
