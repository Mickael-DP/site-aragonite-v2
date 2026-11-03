'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils } from 'lucide-react';
import carteData from '../data/carte.json';

export default function SeasonalMenu() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const saison = carteData.saisons[carteData.saisonActive as 'ete' | 'hiver'];
    const cartes = saison.mise_en_avant;

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
                        {saison.titre_mise_en_avant}
                    </h2>
                    <div className="w-32 h-1 bg-[#993F1E] rounded-full mx-auto" />
                </motion.div>
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {cartes.map((carte, index) => (
                        <motion.div
                            key={carte.titre}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#993F1E]/20 hover:border-[#993F1E]/50 transition-all duration-300 text-center shadow-lg"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-[#993F1E] rounded-full">
                                    <Utensils size={28} className="text-white" />
                                </div>
                            </div>
                            <p className="text-[#6B5D4F] italic mb-3 text-sm">{carte.sousTitre}</p>
                            <h3 className="text-2xl font-bold text-[#993F1E] mb-4">
                                {carte.titre}
                            </h3>
                            {carte.detail && (
                                <p className="text-[#6B5D4F] mb-3 text-sm">{carte.detail}</p>
                            )}
                            {carte.prix && (
                                <p className="text-3xl font-bold text-[#2C2416]">{carte.prix}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

               {/*  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center text-[#2C2416] text-lg max-w-3xl mx-auto"
                >
                    Une ardoise est également disponible tous les jours avec nos suggestions
                    du moment.
                </motion.p> */}
            </div>
        </section>
    );
}
