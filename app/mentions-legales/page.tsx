'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function MentionsLegales() {
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
                            Mentions Légales
                        </h1>

                        <div className="space-y-8 text-[#2C2416] leading-relaxed">
                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>1. Présentation du site</h2>
                                <p>
                                    En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                                </p>
                                <ul className="list-disc ml-6 mt-4 space-y-2">
                                    <li><strong>Propriétaire :</strong> SAS L'ARAGONITE au capital de 1 000€ – 1481 route des Grottes, 06530 Saint-Cézaire-sur-Siagne</li>
                                    <li><strong>SIREN :</strong> 922 973 367</li>
                                    <li><strong>Responsable publication :</strong> Marjorie LEVAILLANT</li>
                                    <li><strong>Hébergeur :</strong> Vercel Inc. – 440 N Barranca Ave #4133 Covina, CA 91723, USA</li>
                                    <li><strong>Domaine :</strong> OVH SAS – 2 rue Kellermann - 59100 Roubaix, France</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>2. Conditions générales d’utilisation du site et des services proposés</h2>
                                <p>
                                    L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>3. Description des services fournis</h2>
                                <p>
                                    Le site a pour objet de fournir une information concernant l’ensemble des activités de la société. Le propriétaire s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, il ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>4. Propriété intellectuelle et contrefaçons</h2>
                                <p>
                                    Le propriétaire est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold mb-4 text-[#993F1E]" style={{ fontFamily: 'var(--font-playfair)' }}>5. Limitations de responsabilité</h2>
                                <p>
                                    Le propriétaire ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site.
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
