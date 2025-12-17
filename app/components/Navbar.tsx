'use client';

import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';


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

    const mobileMenuVariants = {
        hidden: {
            x: '100%',
            transition: {
                type: 'tween',
                duration: 0.3,
            },
        },
        visible: {
            x: 0,
            transition: {
                type: 'tween',
                duration: 0.3,
                when: 'beforeChildren',
                staggerChildren: 0.1,
            },
        },
    };

    const mobileLinkVariants = {
        hidden: {
            y: 20,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 120,
            },
        },
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? 'bg-white/95 backdrop-blur-lg shadow-lg'
                        : 'bg-gradient-to-b from-black/50 to-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <motion.a
                            href="#"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                        >
                            <Logo className={`h-10 w-auto ${isScrolled ? 'text-[#993F1E]' : 'text-white'}`} />
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                    className={`${
                                        isScrolled ? 'text-[#2C2416]' : 'text-white'
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
                            onClick={() => setIsMobileMenuOpen(true)}
                            className={`md:hidden p-2 ${
                                isScrolled ? 'text-[#2C2416]' : 'text-white'
                            }`}
                            aria-label="Ouvrir le menu"
                        >
                            <Menu size={28} />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#FBF9F4] z-50 p-6 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <a href="#" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Logo className="h-10 w-auto text-[#993F1E]" />
                                </a>
                                <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#2C2416]">
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        variants={mobileLinkVariants}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-[#2C2416] text-2xl font-semibold hover:text-[#993F1E] transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>

                            <div className="mt-auto border-t pt-6">
                                <motion.a
                                    href="tel:0493600061"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="flex items-center justify-center space-x-3 w-full px-4 py-3 rounded-full bg-[#993F1E] text-white font-bold shadow-lg hover:bg-[#7a3218] transition-all duration-300"
                                >
                                    <Phone size={20} />
                                    <span>Appeler</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}