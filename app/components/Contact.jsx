"use client";
import { useState } from "react";
import { FadeInLeft, FadeInRight, SectionHeading } from "./Animations";
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiArrowRight,
    FiGlobe,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const CONTACT_INFO = [
    {
        icon: FiPhone,
        label: "Call Us",
        value: "+91 84211 19083",
        href: "tel:+918421119083",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        value: "+91 84211 19083",
        href: "https://wa.me/918421119083",
        isExternal: true,
    },
    {
        icon: FiMail,
        label: "Email",
        value: "eusinterior@gmail.com",
        href: "mailto:eusinterior@gmail.com",
    },
    {
        icon: FiMapPin,
        label: "Visit Us",
        value: "426, Vardhaman Moonstone, Tathawade, Pune",
        href: "#",
    },
    {
        icon: FiGlobe,
        label: "Website",
        value: "www.eusinterior.in",
        href: "https://www.eusinterior.in",
        isExternal: true,
    },
];

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        bhk: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const msg = `Hi! I'd like to discuss my interior design project.\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n✉️ Email: ${form.email}\n📍 Location: ${form.location}\n🏠 BHK: ${form.bhk}\n💰 Budget: ${form.budget}\n💬 Message: ${form.message}`;
        window.open(
            `https://wa.me/918421119083?text=${encodeURIComponent(msg)}`,
            "_blank"
        );
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    label="Get In Touch"
                    title="Start Your Project Today"
                    subtitle="Ready to transform your space? Contact top interior designers today."
                />

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Form */}
                    <FadeInLeft className="lg:col-span-3">
                        <div className="bg-white rounded-2xl p-8 sm:p-10 premium-shadow">
                            <h3
                                className="text-xl font-semibold text-charcoal mb-6"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                Book a Free Consultation
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="text-xs font-medium text-dark-grey mb-1.5 block">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Your full name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 rounded-xl text-sm text-charcoal placeholder:text-soft-grey/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-dark-grey mb-1.5 block">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            placeholder="+91 XXXXX XXXXX"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 rounded-xl text-sm text-charcoal placeholder:text-soft-grey/50"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-medium text-dark-grey mb-1.5 block">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-xl text-sm text-charcoal placeholder:text-soft-grey/50"
                                    />
                                </div>

                                <div className="grid sm:grid-cols-3 gap-5">
                                    <div>
                                        <label className="text-xs font-medium text-dark-grey mb-1.5 block">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            placeholder="Area in Pune"
                                            value={form.location}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 rounded-xl text-sm text-charcoal placeholder:text-soft-grey/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-dark-grey mb-1.5 block">
                                            BHK Type
                                        </label>
                                        <select
                                            name="bhk"
                                            value={form.bhk}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 rounded-xl text-sm text-charcoal appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%238A8A8A%22 stroke-width=%222%22%3e%3cpolyline points=%226 9 12 15 18 9%22%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                                        >
                                            <option value="">Select</option>
                                            <option value="1 BHK">1 BHK</option>
                                            <option value="2 BHK">2 BHK</option>
                                            <option value="3 BHK">3 BHK</option>
                                            <option value="4 BHK">4 BHK</option>
                                            <option value="Villa">Villa</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="text-xs font-medium text-dark-grey mb-1.5 block">
                                            Budget
                                        </label>
                                        <select
                                            name="budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                            className="form-input w-full px-4 py-3 rounded-xl text-sm text-charcoal appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%238A8A8A%22 stroke-width=%222%22%3e%3cpolyline points=%226 9 12 15 18 9%22%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:16px] bg-[right_12px_center] bg-no-repeat"
                                        >
                                            <option value="">Select</option>
                                            <option value="5-10 Lakhs">₹5–10 Lakhs</option>
                                            <option value="10-15 Lakhs">₹10–15 Lakhs</option>
                                            <option value="15-25 Lakhs">₹15–25 Lakhs</option>
                                            <option value="25-50 Lakhs">₹25–50 Lakhs</option>
                                            <option value="50+ Lakhs">₹50+ Lakhs</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs font-medium text-dark-grey mb-1.5 block">
                                        Your Message
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Tell us about your project..."
                                        value={form.message}
                                        onChange={handleChange}
                                        className="form-input w-full px-4 py-3 rounded-xl text-sm text-charcoal placeholder:text-soft-grey/50 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-gold w-full sm:w-auto text-white font-semibold px-10 py-3.5 rounded-full text-sm flex items-center justify-center gap-2"
                                >
                                    Send Enquiry
                                    <FiArrowRight size={16} />
                                </button>
                            </form>
                        </div>
                    </FadeInLeft>

                    {/* Contact Info & Map */}
                    <FadeInRight className="lg:col-span-2">
                        <div className="space-y-6">
                            {/* Contact Cards */}
                            <div className="space-y-4">
                                {CONTACT_INFO.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.isExternal ? "_blank" : undefined}
                                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                                        className="flex items-start gap-4 bg-white rounded-xl p-4 premium-shadow hover:shadow-md transition-all duration-300 group border border-transparent hover:border-gold/10"
                                    >
                                        <div className="w-11 h-11 rounded-lg bg-gold-subtle flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-gold-dark group-hover:to-gold transition-all duration-300">
                                            <item.icon
                                                size={18}
                                                className="text-gold group-hover:text-white transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xs text-soft-grey mb-0.5">
                                                {item.label}
                                            </p>
                                            <p className="text-charcoal font-medium text-sm">
                                                {item.value}
                                            </p>
                                            {item.secondary && (
                                                <a
                                                    href={item.secondaryHref}
                                                    className="text-gold text-xs font-medium hover:underline"
                                                >
                                                    {item.secondary}
                                                </a>
                                            )}
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Google Maps Embed */}
                            <div className="rounded-2xl overflow-hidden premium-shadow h-[280px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.627994791963!2d73.76577857513918!3d18.606879482508273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc49c13e4b7%3A0x4c8f5b8f8f8f8f8f!2sTathawade%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="EUS Interiors Location - Tathawade, Pune"
                                />
                            </div>
                        </div>
                    </FadeInRight>
                </div>
            </div>
        </section>
    );
}
