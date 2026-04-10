import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import SeasonalMenu from './components/SeasonalMenu';
 import MenuSection from './components/MenuSection';
import PizzaSection from './components/PizzaSection';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import carteData from './data/carte.json';
import pizzaData from './data/cartePizza.json';

export default function Home() {
    

    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Presentation />
            <SeasonalMenu />
            {/*   <PizzaSection pizzas={pizzaData.pizza} />*/}
            <MenuSection categories={carteData.laCarte.categories} /> 
            <Reviews />
            <Footer />
        </main>
    );
}
