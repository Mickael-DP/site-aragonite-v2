'use client';

import { motion } from 'framer-motion';
import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/hero-bg-original.png"
                    alt="Restaurant Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="block text-white">BIENVENUE AU</span>
                        <span className="block text-[#993F1E] drop-shadow-lg">
                            RESTAURANT L'ARAGONITE
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                >
                    Une cuisine traditionnelle aux couleurs provençales, dans un cadre
                    paisible au cœur d'un parc boisé de 6 hectares
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <a
                        href="tel:+33492602582"
                        className="inline-flex items-center gap-3 bg-[#993F1E] hover:bg-[#7A3218] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-[#993F1E]/50 transition-all duration-300 hover:scale-105"
                    >
                        <Phone size={22} />
                        RÉSERVEZ VOTRE TABLE
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ChevronDown size={32} className="text-[#993F1E]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
