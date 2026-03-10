'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
    const address = "1481 route des Grottes, 06530 Saint-Cézaire-sur-Siagne";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    const socialLinks = [
        { icon: <Instagram size={18} />, href: "https://www.instagram.com/restaurantaragonite", label: "Instagram" },
        { icon: <Facebook size={18} />, href: "https://www.facebook.com/people/Restaurant-lAragonite/61552127035708/", label: "Facebook" },
    ];

    return (
        <footer id="contact" className="bg-[#EFE9DD] text-[#2C2416] pt-16 pb-8 px-4 border-t border-[#993F1E]/10">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-[#993F1E] tracking-tight italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                                L'Aragonite
                            </span>
                            <span className="text-xs uppercase tracking-[0.2em] text-[#6B5D4F] mt-1 font-bold">Restaurant Traditionnel</span>
                        </div>
                        <p className="text-[#6B5D4F] leading-relaxed text-sm max-w-xs">
                            Une parenthèse enchantée au cœur de la Provence. Cuisine authentique dans un cadre naturel exceptionnel.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 rounded-full border border-[#993F1E]/20 flex items-center justify-center text-[#993F1E] hover:bg-[#993F1E] hover:text-white transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[#993F1E] relative inline-block" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Navigation
                            <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#993F1E]/30 rounded-full" />
                        </h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Notre Restaurant", href: "#presentation" },
                                { name: "Notre Menu", href: "#menu-saison" },
                                { name: "Nos Pizzas", href: "#pizzas" },
                                { name: "Avis Clients", href: "#avis" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-[#6B5D4F] hover:text-[#993F1E] flex items-center gap-2 transition-all group text-sm font-medium"
                                    >
                                        <ArrowRight size={12} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#993F1E]" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Accurate Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[#993F1E] relative inline-block" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Horaires
                            <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#993F1E]/30 rounded-full" />
                        </h3>
                        <div className="space-y-4 text-sm">
                            <div className="flex flex-col gap-1">
                                <div className="space-y-1.5">
                                    <div className="flex justify-between border-b border-[#993F1E]/5 pb-1">
                                        <span className="text-[#6B5D4F]">Lun - Ven</span>
                                        <span className="font-bold">10:00 – 14:00</span>
                                    </div>
                                    <div className="flex justify-between border-b border-[#993F1E]/5 pb-1 text-red-600">
                                        <span className="">Samedi</span>
                                        <span className="font-bold">Fermé</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-[#6B5D4F]">Dimanche</span>
                                        <span className="font-bold">10:00 – 14:00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Detail */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[#993F1E] relative inline-block" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Contact
                            <span className="absolute -bottom-1.5 left-0 w-8 h-0.5 bg-[#993F1E]/30 rounded-full" />
                        </h3>
                        <div className="space-y-4 text-sm">
                            <a href="tel:+33492602582" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-[#993F1E]/5 flex items-center justify-center text-[#993F1E] group-hover:bg-[#993F1E] group-hover:text-white transition-all">
                                    <Phone size={15} />
                                </div>
                                <span className="font-bold group-hover:text-[#993F1E] transition-colors">04 92 60 25 82</span>
                            </a>
                            <a href="mailto:aragonite06530@gmail.com" className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-[#993F1E]/5 flex items-center justify-center text-[#993F1E] group-hover:bg-[#993F1E] group-hover:text-white transition-all">
                                    <Mail size={15} />
                                </div>
                                <span className="font-bold group-hover:text-[#993F1E] transition-colors truncate max-w-[180px]">aragonite06530@gmail.com</span>
                            </a>
                            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                                <div className="w-8 h-8 rounded-lg bg-[#993F1E]/5 flex items-center justify-center text-[#993F1E] group-hover:bg-[#993F1E] group-hover:text-white transition-all flex-shrink-0">
                                    <MapPin size={15} />
                                </div>
                                <span className="font-bold group-hover:text-[#993F1E] transition-colors line-height-tight">
                                    1481 route des Grottes<br />06530 Saint-Cézaire
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#993F1E]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B5D4F] text-[10px] uppercase tracking-[0.2em] font-bold">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <p>&copy; {new Date().getFullYear()} L'Aragonite — Tous droits réservés</p>
                        <p className="text-[#993F1E]/60 tracking-widest md:border-l md:border-[#993F1E]/10 md:pl-8">
                            Site réalisé par <a href="https://www.mdallepasqualine.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#993F1E] transition-colors underline underline-offset-4">MDP Développeur freelance</a>
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a href="/mentions-legales" className="hover:text-[#993F1E] transition-colors">Mentions Légales</a>
                        <a href="/politique-confidentialite" className="hover:text-[#993F1E] transition-colors">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
