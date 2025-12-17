'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils } from 'lucide-react';

interface MenuItem {
    name: string;
    price: string;
    ingredients: string[];
}

interface MenuCategory {
    name: string;
    products: MenuItem[];
}

interface MenuSectionProps {
    categories: MenuCategory[];
}

export default function MenuSection({ categories }: MenuSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            id="menu"
            ref={ref}
            className="py-20 px-4 bg-slate-800"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#993F1E]">
                        Notre Menu
                    </h2>
                    <div className="w-32 h-1 bg-[#993F1E] rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-[#993F1E]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#993F1E]/20"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-[#993F1E] rounded-lg">
                                    <Utensils size={20} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#993F1E]">
                                    {category.name}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.products.map((product, productIndex) => (
                                    <div
                                        key={productIndex}
                                        className="border-b border-slate-700/50 pb-4 last:border-0"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-slate-200 font-semibold flex-1">
                                                {product.name}
                                            </h4>
                                            {product.price && (
                                                <span className="text-[#993F1E] font-bold ml-2">
                                                    {product.price}
                                                </span>
                                            )}
                                        </div>
                                        {product.ingredients.length > 0 && (
                                            <p className="text-sm text-slate-400">
                                                {product.ingredients.join(', ')}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
