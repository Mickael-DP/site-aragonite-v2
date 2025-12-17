'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Presentation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="presentation"
            ref={ref}
            className="py-20 px-4 bg-[#FBF9F4]"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#993F1E]">
                        L'ARAGONITE...
                    </h2>
                    <div className="w-32 h-1 bg-[#993F1E] rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-[#2C2416] text-lg leading-relaxed"
                    >
                        <p>
                            vous invite à déguster une <strong className="text-[#993F1E]">cuisine traditionnelle</strong> simple et variée,
                            aux couleurs des produits provençaux et aux mille saveurs
                            méridionales. Rosario le chef de cuisine travaille sur le principe de
                            l'Ardoise. Notre offre est volontairement plus réduite car elle
                            implique des produits faits maison cuisinés sur place.
                        </p>
                        <p>
                            Ce soin a été apporté à toutes les étapes de votre repas des entrées aux desserts
                            ainsi que pour les menus enfants. C'est dans un <strong className="text-[#993F1E]">cadre paisible</strong> en
                            plein cœur d'un parc boisé de 6 hectares que vous êtes accueillis.
                        </p>
                        <p>
                            Déjeuner à L'Aragonite, c'est aussi imaginer les galeries, les
                            stalactites et stalagmites millénaires, les concrétions formées goutte
                            à goutte sur des roches calcaires,… juste sous nos pieds. En intérieur
                            climatisé ou en terrasse ombragée, le restaurant l'Aragonite propose
                            des formules pour tous.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#993F1E]/20">
                            <img
                                src="/images/restaurant-exterior.png"
                                alt="Restaurant L'Aragonite - Extérieur"
                                className="w-full h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
