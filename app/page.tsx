import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import SeasonalMenu from './components/SeasonalMenu';
 import MenuSection from './components/MenuSection';
import CarteHiver from './components/CarteHiver';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import carteData from './data/carte.json';
import pizzaData from './data/cartePizza.json';

export default function Home() {
    // Change `saisonActive` dans app/data/carte.json ("ete" ou "hiver")
    const saison = carteData.saisons[carteData.saisonActive as 'ete' | 'hiver'];
    const menuCategories = saison.categories;

    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Presentation />
            {carteData.saisonActive === 'hiver' ? (
                <CarteHiver
                    titre={carteData.saisons.hiver.titre_mise_en_avant}
                    label={carteData.saisons.hiver.label}
                    miseEnAvant={carteData.saisons.hiver.mise_en_avant}
                    ardoise={carteData.saisons.hiver.categories[0]}
                    pizzas={[...pizzaData.pizza.left, ...pizzaData.pizza.right]}
                />
            ) : (
                <>
                    <SeasonalMenu />
                    <MenuSection categories={menuCategories} />
                </>
            )}
            <Reviews />
            <Footer />
        </main>
    );
}
