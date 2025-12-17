'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
    const address = "1481 route des Grottes, 06530 Saint-Cézaire-sur-Siagne";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <footer id="contact" className="bg-[#E8E2D5] text-[#2C2416] py-16 px-4 border-t-2 border-[#993F1E]/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold text-[#993F1E] mb-6">Contact</h3>
                        <div className="space-y-4">
                            <a
                                href="tel:+33492602582"
                                className="flex items-center gap-3 hover:text-[#993F1E] transition-colors"
                            >
                                <Phone size={20} />
                                <span>04 92 60 25 82</span>
                            </a>
                            <a
                                href="mailto:aragonite06530@gmail.com"
                                className="flex items-center gap-3 hover:text-[#993F1E] transition-colors"
                            >
                                <Mail size={20} />
                                <span>aragonite06530@gmail.com</span>
                            </a>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 hover:text-[#993F1E] transition-colors"
                            >
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>
                                    1481 route des Grottes <br />
                                    06530 Saint-Cézaire-sur-Siagne
                                </span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-2xl font-bold text-[#993F1E] mb-6">Horaires</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Clock size={20} className="mt-1" />
                                <div>
                                    <p className="font-semibold">Lundi - Dimanche</p>
                                    <p className="text-[#6B5D4F]">12h00 - 15h00</p>
                                    <p className="text-[#6B5D4F]">19h00 - 22h00</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* About */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-[#993F1E] mb-6">
                            L'Aragonite
                        </h3>
                        <p className="text-[#6B5D4F] leading-relaxed">
                            Situé au cœur d'un parc boisé de 6 hectares, notre restaurant vous propose une cuisine provençale authentique dans un cadre paisible et naturel.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#993F1E]/20 pt-8 text-center text-[#6B5D4F]">
                    <p>
                        &copy; {new Date().getFullYear()} Restaurant L'Aragonite. Tous
                        droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}
