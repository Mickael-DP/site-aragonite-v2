'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#presentation', label: 'Notre Restaurant' },
        { href: '#menu-saison', label: 'Notre Menu' },
        { href: '#pizzas', label: 'Pizzas' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-lg shadow-lg'
                : 'bg-gradient-to-b from-black/50 to-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center"
                    >
                        <img
                            src="/logo-aragonite.svg"
                            alt="L'Aragonite"
                            className="h-12 w-auto md:h-16"
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                className={`${isScrolled ? 'text-[#2C2416]' : 'text-white'
                                    } hover:text-[#993F1E] transition-colors duration-200 font-medium`}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                        <motion.a
                            href="tel:+33492602582"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-2 bg-[#993F1E] hover:bg-[#7A3218] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-[#993F1E]/50 transition-all duration-300"
                        >
                            <Phone size={18} />
                            Réserver
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 ${isScrolled ? 'text-[#2C2416]' : 'text-white'
                            }`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/95 backdrop-blur-lg"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-slate-200 hover:text-[#993F1E] transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="tel:+33492602582"
                                className="flex items-center justify-center gap-2 bg-[#993F1E] hover:bg-[#7A3218] text-white px-6 py-3 rounded-full"
                            >
                                <Phone size={18} />
                                Réserver
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
