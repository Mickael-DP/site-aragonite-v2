import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: "swap",
});

const lato = Lato({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    variable: "--font-lato",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://www.restaurantlaragonite.com'),
    title: {
      default: "Restaurant L'Aragonite - Pizzeria & Cuisine Provençale à Saint-Cézaire-sur-Siagne",
      template: `%s | Restaurant L'Aragonite`,
    },
    description: "Découvrez L'Aragonite, restaurant et pizzeria à Saint-Cézaire-sur-Siagne. Profitez de notre cuisine provençale traditionnelle, de nos pizzas au feu de bois et de notre cadre unique dans un parc boisé.",
    keywords: ["restaurant Saint-Cézaire-sur-Siagne", "pizzeria Saint-Cézaire-sur-Siagne", "cuisine provençale", "restaurant parc boisé", "produits frais", "L'Aragonite", "manger à Saint-Cézaire"],
    authors: [{ name: "Restaurant L'Aragonite" }],
    creator: 'Mickael-DP',
    openGraph: {
      title: "Restaurant L'Aragonite - Pizzeria & Cuisine Provençale",
      description: "Cuisine traditionnelle, pizzas savoureuses et cadre exceptionnel à Saint-Cézaire-sur-Siagne.",
      url: 'https://www.restaurantlaragonite.com',
      siteName: "Restaurant L'Aragonite",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: "Le cadre du restaurant L'Aragonite",
        },
      ],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Restaurant L'Aragonite - Pizzeria & Cuisine Provençale",
      description: "Cuisine traditionnelle, pizzas savoureuses et cadre exceptionnel à Saint-Cézaire-sur-Siagne.",
      images: ['/og-image.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${playfair.variable} ${lato.variable}`}>{children}</body>
        </html>
    );
}
