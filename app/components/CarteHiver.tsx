'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Utensils, Pizza, CalendarDays } from 'lucide-react';

interface Item {
    name: string;
    price: string;
    ingredients: string[];
}

interface Category {
    name: string;
    note?: string;
    products: Item[];
}

interface Highlight {
    sousTitre: string;
    titre: string;
    prix: string;
}

interface PizzaItem {
    name: string;
    ingrédients: string[];
    prix: string;
}

interface CarteHiverProps {
    titre: string;
    label: string;
    miseEnAvant: Highlight[];
    ardoise: Category;
    pizzas: PizzaItem[];
}

// "L'ARAGONITE" -> "L'Aragonite", "4 FROMAGES" -> "4 Fromages"
const titleCase = (text: string) =>
    text.toLowerCase().replace(/(^|[\s'])([a-zà-ÿ])/g, (_, sep, letter) => sep + letter.toUpperCase());

function MenuLine({ name, price, ingredients, roomy }: Item & { roomy?: boolean }) {
    return (
        <div className={roomy ? 'py-5' : 'py-3.5'}>
            <div className="flex items-baseline gap-3">
                <h4 className={`text-[#2C2416] font-semibold ${roomy ? 'text-xl' : 'text-lg'}`}>{name}</h4>
                <span className="flex-1 border-b border-dotted border-[#993F1E]/40 translate-y-[-4px]" />
                <span className={`text-[#993F1E] font-bold whitespace-nowrap ${roomy ? 'text-lg' : ''}`}>{price}</span>
            </div>
            {ingredients.length > 0 && (
                <p className="text-sm text-[#6B5D4F] mt-1 pr-12 leading-relaxed">
                    {ingredients.join(', ')}
                </p>
            )}
        </div>
    );
}

function Column({
    icon,
    title,
    footer,
    delay,
    inView,
    children,
}: {
    icon: React.ReactNode;
    title: string;
    footer?: string;
    delay: number;
    inView: boolean;
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
            className="bg-white/85 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-[#993F1E]/10 shadow-lg shadow-[#993F1E]/5"
        >
            <div className="flex items-center justify-center gap-3 mb-4 pb-5 border-b-2 border-[#993F1E]/15">
                <div className="p-2 bg-[#993F1E] rounded-lg text-white">{icon}</div>
                <h3 className="text-3xl font-bold text-[#993F1E]">{title}</h3>
            </div>
            <div>{children}</div>
            {footer && (
                <p className="mt-6 pt-4 border-t-2 border-[#993F1E]/15 text-center text-[#993F1E] font-semibold">
                    {footer}
                </p>
            )}
        </motion.div>
    );
}

export default function CarteHiver({ titre, label, miseEnAvant, ardoise, pizzas }: CarteHiverProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="menu-saison" ref={ref} className="py-20 px-4 bg-[#F5F1E8] relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <img src="/images/menu-bg.png" alt="" className="w-full h-full object-cover" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#993F1E]">{label}</h2>
                    <div className="w-32 h-1 bg-[#993F1E] rounded-full mx-auto" />
                </motion.div>

                {/* Plats de la semaine */}
                <div className="mb-10">
                    <p className="flex items-center justify-center gap-2 mb-4 text-[#993F1E] uppercase tracking-widest text-xs font-semibold">
                        <CalendarDays size={16} />
                        {titre}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {miseEnAvant.map((plat, index) => (
                            <motion.div
                                key={plat.titre}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                                className="bg-white/85 backdrop-blur-sm rounded-2xl border-2 border-[#993F1E]/20 hover:border-[#993F1E]/50 transition-colors duration-300 px-6 py-5 text-center shadow-md shadow-[#993F1E]/5"
                            >
                                <p className="italic text-[#6B5D4F] text-sm mb-1">{plat.sousTitre}</p>
                                <p className="text-2xl font-bold text-[#993F1E] tracking-wide">{plat.titre}</p>
                                <p className="text-xl font-bold text-[#2C2416] mt-1">{plat.prix}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <Column
                        icon={<Utensils size={22} />}
                        title="L'Ardoise"
                        footer={ardoise.note}
                        delay={0.2}
                        inView={isInView}
                    >
                        {ardoise.products.map((plat) => (
                            <MenuLine key={plat.name} {...plat} roomy />
                        ))}
                    </Column>

                    <div id="pizzas" className="scroll-mt-28">
                        <Column icon={<Pizza size={22} />} title="Les Pizzas" delay={0.3} inView={isInView}>
                            {pizzas.map((pizza) => (
                                <MenuLine
                                    key={pizza.name}
                                    name={titleCase(pizza.name)}
                                    price={pizza.prix}
                                    ingredients={pizza.ingrédients}
                                />
                            ))}
                        </Column>
                    </div>
                </div>
            </div>
        </section>
    );
}
