"use client";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-charcoal text-white/70">
            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-gold-dark via-gold to-gold-light">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <h3
                            className="text-2xl sm:text-3xl font-semibold text-white mb-1"
                            style={{ fontFamily: "var(--font-display)" }}
                        >
                            Ready to Design Your Dream Home?
                        </h3>
                        <p className="text-white/80 text-sm">
                            Book your free consultation today and take the first step.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <a
                            href="tel:+918421119083"
                            className="bg-white text-gold-dark font-semibold px-6 py-3 rounded-full text-sm hover:bg-cream transition-colors flex items-center gap-2"
                        >
                            <FiPhone size={15} />
                            Call Now
                        </a>
                        <a
                            href="https://wa.me/918421119083"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-white/30 transition-colors flex items-center gap-2 backdrop-blur-sm"
                        >
                            <FaWhatsapp size={16} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="/eus-logo.png"
                                alt="EUS Interior Logo"
                                width={44}
                                height={44}
                                className="rounded-lg object-contain"
                            />
                            <div>
                                <span
                                    className="text-lg font-semibold text-white block"
                                    style={{ fontFamily: "var(--font-display)" }}
                                >
                                    EUS Interior
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light -mt-1 block">
                                    Design &amp; Execution
                                </span>
                            </div>
                        </div>
                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                            Premium interior design services nationwide. Designing Dreams, Executing Excellence.
                        </p>
                        <div className="flex gap-3">
                            {[FaInstagram, FaFacebookF, FaLinkedinIn].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors"
                                >
                                    <Icon size={14} className="text-white/60 hover:text-gold" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {["About Us", "Our Services", "Projects", "Our Process", "Contact"].map(
                                (link) => (
                                    <li key={link}>
                                        <a
                                            href={`#${link.toLowerCase().replace(/\s+/g, "").replace("our", "").replace("us", "about")}`}
                                            className="text-sm text-white/50 hover:text-gold transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Services</h4>
                        <ul className="space-y-2.5">
                            {[
                                "Modular Kitchen",
                                "Wardrobes",
                                "TV Unit",
                                "False Ceiling",
                                "Full Home Interior",
                            ].map((s) => (
                                <li key={s}>
                                    <a
                                        href="#services"
                                        className="text-sm text-white/50 hover:text-gold transition-colors"
                                    >
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white font-semibold mb-4 text-sm">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <FiPhone size={14} className="text-gold mt-0.5 flex-shrink-0" />
                                <div className="text-sm">
                                    <a href="tel:+918421119083" className="hover:text-gold transition-colors block">
                                        +91 84211 19083
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMail size={14} className="text-gold mt-0.5 flex-shrink-0" />
                                <a
                                    href="mailto:eusinterior@gmail.com"
                                    className="text-sm hover:text-gold transition-colors"
                                >
                                    eusinterior@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <FiMapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                                <span className="text-sm">
                                    426, Vardhaman Moonstone,
                                    <br />
                                    Tathawade, Pune
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-white/40">
                        © {year} EUS Interiors. All rights reserved.
                    </p>
                    <p className="text-xs text-white/40">
                        <a
                            href="https://www.eusinterior.in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gold transition-colors"
                        >
                            www.eusinterior.in
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
