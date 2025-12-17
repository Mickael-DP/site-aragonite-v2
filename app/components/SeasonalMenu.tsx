'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils, Calendar } from 'lucide-react';

export default function SeasonalMenu() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="menu-saison"
            ref={ref}
            className="py-20 px-4 bg-[#F5F1E8]"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#993F1E]">
                        Menu
                    </h2>
                    <div className="w-32 h-1 bg-[#993F1E] rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {/* Plat du jour */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#993F1E]/20 hover:border-[#993F1E]/50 transition-all duration-300 text-center shadow-lg"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-[#993F1E] rounded-full">
                                <Utensils size={28} className="text-white" />
                            </div>
                        </div>
                        <p className="text-[#6B5D4F] italic mb-3 text-sm">Tous les jours</p>
                        <h3 className="text-2xl font-bold text-[#993F1E] mb-4">
                            PLAT DU JOUR
                        </h3>
                        <p className="text-3xl font-bold text-[#2C2416]">15,00€</p>
                    </motion.div>

                    {/* Spécial Aïoli */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#993F1E]/20 hover:border-[#993F1E]/50 transition-all duration-300 text-center shadow-lg"
                    >
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-[#993F1E] rounded-full">
                                <Calendar size={28} className="text-white" />
                            </div>
                        </div>
                        <p className="text-[#6B5D4F] italic mb-3 text-sm">Tous les vendredis</p>
                        <h3 className="text-2xl font-bold text-[#993F1E] mb-4">
                            SPECIAL AÏOLI
                        </h3>
                        <p className="text-3xl font-bold text-[#2C2416]">15,00€</p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center text-[#2C2416] text-lg max-w-3xl mx-auto"
                >
                    Une ardoise est également disponible tous les jours avec nos suggestions
                    du moment.
                </motion.p>
            </div>
        </section>
    );
}
