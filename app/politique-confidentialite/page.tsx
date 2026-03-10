'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function PolitiqueConfidentialite() {
    return (
        <main className="min-h-screen bg-[#FBF9F4]">
            <Navbar />

            <div className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-[#993F1E]/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl font-bold text-[#993F1E] mb-8 italic" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Politique de Confidentialité
                        </h1>

                        <div className="space-y-8 text-[#2C2416] leading-relaxed">
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>1. Introduction</h2>
                                <p>
                                    La protection de vos données à caractère personnel est une priorité pour le Restaurant L'Aragonite. Dans le cadre de l'exploitation de notre site internet, nous sommes amenés à collecter et traiter certaines de vos données. Cette politique a pour but de vous informer sur la manière dont nous utilisons ces données.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>2. Collecte des données</h2>
                                <p>
                                    Nous collectons les données que vous nous communiquez directement, par exemple lorsque vous nous contactez par email ou par téléphone pour une réservation. Ces données peuvent inclure votre nom, votre numéro de téléphone et votre adresse email.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>3. Utilisation des données</h2>
                                <p>
                                    Vos données sont utilisées exclusivement pour :
                                </p>
                                <ul className="list-disc ml-6 mt-4 space-y-2">
                                    <li>Gérer vos réservations et répondre à vos demandes.</li>
                                    <li>Améliorer votre expérience sur notre site.</li>
                                    <li>Assurer la sécurité de notre site.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>4. Cookies</h2>
                                <p>
                                    Le site peut utiliser des cookies pour améliorer la navigation. Vous pouvez configurer votre navigateur pour refuser les cookies, bien que cela puisse affecter certaines fonctionnalités du site.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>5. Vos droits</h2>
                                <p>
                                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit d’accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez exercer ces droits en nous contactant à l'adresse email mentionnée dans la section Contact.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>6. Contact</h2>
                                <p>
                                    Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à : aragonite06530@gmail.com
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
