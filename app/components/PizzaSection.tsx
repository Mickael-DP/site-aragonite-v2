'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Pizza } from 'lucide-react';

interface PizzaItem {
    name: string;
    ingrédients: string[];
    prix: string;
}

interface PizzaSectionProps {
    pizzas: {
        left: PizzaItem[];
        right: PizzaItem[];
    };
}

export default function PizzaSection({ pizzas }: PizzaSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const allPizzas = [...pizzas.left, ...pizzas.right];

    return (
        <section
            id="pizzas"
            ref={ref}
            className="py-20 px-4 bg-[#FBF9F4] relative overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
                <img
                    src="/images/pizza-bg.jpg"
                    alt="Pizza Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#993F1E]">
                        Nos Pizzas
                    </h2>
                    <div className="w-32 h-1 bg-[#993F1E] rounded-full mx-auto mb-6" />
                    <p className="text-[#2C2416] text-lg max-w-2xl mx-auto">
                        Pizzas artisanales préparées avec des ingrédients frais
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allPizzas.map((pizza, index) => (
                        <motion.div
                            key={pizza.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#993F1E]/20 hover:border-[#993F1E]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#993F1E]/20 group"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="p-2 bg-[#993F1E] rounded-lg group-hover:scale-110 transition-transform">
                                        <Pizza size={20} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#993F1E]">
                                        {pizza.name}
                                    </h3>
                                </div>
                                <span className="text-2xl font-bold text-[#B8563A] ml-2">
                                    {pizza.prix}
                                </span>
                            </div>

                            <p className="text-sm text-[#6B5D4F] leading-relaxed">
                                {pizza.ingrédients.join(', ')}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
