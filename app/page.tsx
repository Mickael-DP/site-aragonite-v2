import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import SeasonalMenu from './components/SeasonalMenu';
// import MenuSection from './components/MenuSection';
import PizzaSection from './components/PizzaSection';
import Footer from './components/Footer';
import carteData from './data/carte.json';
import pizzaData from './data/cartePizza.json';

export default function Home() {
    // Extract menu categories from the JSON data
    const menuCategories = [
        ...carteData.cat_01.left,
        ...carteData.cat_01.right,
    ];

    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Presentation />
            <SeasonalMenu />
            {/* <MenuSection categories={menuCategories} /> */}
            <PizzaSection pizzas={pizzaData.pizza} />
            <Footer />
        </main>
    );
}
