"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
    return (
        <motion.a
            href="https://wa.me/918421119083"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float flex items-center gap-3 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.5, type: "spring" }}
            aria-label="Chat on WhatsApp"
        >
            {/* Tooltip */}
            <span className="hidden sm:block bg-white text-charcoal text-sm font-medium px-4 py-2 rounded-full premium-shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                Chat with us!
            </span>
            {/* Button */}
            <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-shadow">
                <FaWhatsapp size={28} className="text-white" />
            </div>
        </motion.a>
    );
}
