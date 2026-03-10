'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        name: "Alexandra FAUVERTEIX",
        rating: 5,
        date: "il y a un an",
        text: "Petit restaurant où l'on mange des petites merveilles, plat du jour succulent et copieux pour un prix très abordable... burger au poulet délicieux et desserts fait maison 🤩 une véritable pépite 👍 je recommande à 100%"
    },
    {
        name: "Élodie LAHAXE",
        rating: 4,
        date: "il y a 7 mois",
        text: "Une journée à la grotte, au paca aventure ainsi quà l'accrobranche. Nous avons mangé au restaurant qui est sur place. La cuisine est bonne. Nous avons été servis en moins de 10 min, mais nous avons attendu pour les desserts. On nous avait un peu oublié mais le personnel est resté très agréable."
    },
    {
        name: "Sharone FAURE",
        rating: 5,
        date: "il y a 6 mois",
        text: "C'est un superbe restaurant, nous avons été servis en moins de 10 min, les serveuses sont très agréables, la nourriture est très présentable. Le cadre est plutôt beau et les prix sont abordables. Je recommande vivement !"
    },
    {
        name: "Christian PRUVOT",
        rating: 4,
        date: "il y a 2 ans",
        text: "Bon restaurant, plats simples, il y avait la canicule donc pas évident pour manger à midi, mais je recommande quand même. Accueil sympathique et cadre agréable."
    },
    {
        name: "Mélanie LEFEBVRE",
        rating: 5,
        date: "il y a 5 mois",
        text: "Un excellent moment, accueil chaleureux, produits frais et de qualité, environnement calme et reposant ! Tout est réuni pour un repas réussi ! Un grand merci 🤩"
    },
    {
        name: "Jo SEPH",
        rating: 4,
        date: "il y a un an",
        text: "Bonne expérience globale. La cuisine est de qualité, le service est efficace et l'ambiance est très agréable au cœur du parc. Un bon rapport qualité prix pour une pause déjeuner."
    }
];

export default function Reviews() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    // Group reviews by 3 for desktop
    const desktopGroups = [
        reviews.slice(0, 3),
        reviews.slice(3, 6)
    ];

    const nextStep = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    };

    const prevStep = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? 1 : 0));
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            nextStep();
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 500 : -500,
            opacity: 0
        })
    };

    return (
        <section
            id="avis"
            ref={ref}
            className="py-12 px-4 bg-[#FBF9F4] overflow-hidden"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#993F1E]">
                        Vos Avis
                    </h2>
                    <div className="flex items-center justify-center gap-2 text-[#993F1E]">
                        <div className="flex">
                            {[...Array(4)].map((_, i) => (
                                <Star key={i} size={18} fill="#993F1E" />
                            ))}
                            <div className="relative">
                                <Star size={18} className="text-[#993F1E]" />
                                <div className="absolute inset-0 overflow-hidden w-[40%]">
                                    <Star size={18} fill="#993F1E" className="text-[#993F1E]" />
                                </div>
                            </div>
                        </div>
                        <span className="font-bold text-sm md:text-base">4.4/5 sur Google</span>
                    </div>
                </motion.div>

                {/* Desktop Carousel (3 by 3) */}
                <div className="relative hidden lg:block h-[280px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0 grid grid-cols-3 gap-6"
                        >
                            {desktopGroups[currentIndex].map((review, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-5 rounded-xl shadow-sm border border-[#993F1E]/5 flex flex-col relative"
                                >
                                    <Quote className="absolute top-3 right-3 text-[#993F1E]/10" size={24} />
                                    <div className="flex gap-1 mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                fill={i < review.rating ? "#993F1E" : "transparent"}
                                                className="text-[#993F1E]"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-[#2C2416] mb-4 flex-grow italic leading-relaxed text-sm">
                                        "{review.text}"
                                    </p>
                                    <div>
                                        <p className="font-bold text-[#993F1E] text-sm">{review.name}</p>
                                        <p className="text-xs text-[#6B5D4F]">{review.date}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Mobile/Tablet Carousel (1 by 1) */}
                <div className="relative lg:hidden h-[240px]">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute inset-0"
                        >
                            <div className="bg-white p-5 rounded-xl shadow-sm border border-[#993F1E]/5 flex flex-col relative h-full">
                                <Quote className="absolute top-3 right-3 text-[#993F1E]/10" size={24} />
                                <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            fill={i < reviews[currentIndex].rating ? "#993F1E" : "transparent"}
                                            className="text-[#993F1E]"
                                        />
                                    ))}
                                </div>
                                <p className="text-[#2C2416] mb-4 flex-grow italic leading-relaxed text-sm">
                                    "{reviews[currentIndex].text}"
                                </p>
                                <div>
                                    <p className="font-bold text-[#993F1E] text-sm">{reviews[currentIndex].name}</p>
                                    <p className="text-xs text-[#6B5D4F]">{reviews[currentIndex].date}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls & Pagination */}
                <div className="flex flex-col items-center gap-4 mt-2">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={prevStep}
                            className="p-1.5 rounded-full border border-[#993F1E]/20 text-[#993F1E] hover:bg-[#993F1E] hover:text-white transition-all"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex gap-2">
                            {[0, 1].map((dot) => (
                                <button
                                    key={dot}
                                    onClick={() => setCurrentIndex(dot)}
                                    className={`w-2 h-2 rounded-full transition-all ${currentIndex === dot ? 'w-6 bg-[#993F1E]' : 'bg-[#993F1E]/20'}`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextStep}
                            className="p-1.5 rounded-full border border-[#993F1E]/20 text-[#993F1E] hover:bg-[#993F1E] hover:text-white transition-all"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    <a
                        href="https://www.google.com/maps/place/Restaurant+L'Aragonite/@43.6599388,6.8052161,17z/data=!4m8!3m7!1s0x12cc271777d9539d:0x8797b5e47854e488!8m2!3d43.6599388!4d6.807791!9m1!1b1!16s%2Fg%2F1tf7602f?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#993F1E] font-bold text-sm border-b border-[#993F1E]/20 hover:border-[#993F1E] transition-all tracking-wider"
                    >
                        VOIR TOUS LES AVIS SUR GOOGLE
                    </a>
                </div>
            </div>
        </section>
    );
}
