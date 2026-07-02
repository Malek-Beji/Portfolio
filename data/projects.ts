export type Project = {
  title: string;
  url: string;
  image: string;
  description: { en: string; fr: string };
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "TileO Dubai",
    url: "https://en.tileo.ae/",
    image: "/tileo.PNG",
    description: {
      en: "Premium e-commerce platform for tiles, slabs, and sanitary ware in Dubai. Features multilingual support, advanced product catalog with filtering, custom WordPress theme, and integrated e-catalog browsing system.",
      fr: "Plateforme e-commerce premium pour carrelage, dalles et sanitaire à Dubaï. Support multilingue, catalogue produits avancé avec filtres, thème WordPress sur mesure et système de navigation e-catalogue intégré.",
    },
    tags: ["WordPress", "E-commerce", "Multilingual", "Custom Theme", "Product Catalog"],
  },
  {
    title: "Karma Fitout",
    url: "https://karmafitout.ae/",
    image: "/karmafitout.PNG",
    description: {
      en: "Professional fitout company website showcasing interior design services and completed projects, with a custom project gallery and booking system.",
      fr: "Site vitrine pour une société d'aménagement d'intérieur, avec galerie de projets sur mesure et système de réservation.",
    },
    tags: ["WordPress", "Custom Theme", "Project Gallery", "Booking System", "Responsive"],
  },
  {
    title: "Light My Web",
    url: "https://lightmyweb.fr/",
    image: "/LMW.PNG",
    description: {
      en: "Modern web agency portfolio showcasing strategy, UX design, and development services with custom animations and a fully responsive layout.",
      fr: "Portfolio moderne d'agence web mettant en avant stratégie, UX et développement, avec animations sur mesure et mise en page entièrement responsive.",
    },
    tags: ["Portfolio", "Agency Website", "Custom Design", "Animations", "Responsive"],
  },
  {
    title: "Besimmo Real Estate",
    url: "https://besimmo.be/",
    image: "/bessimo.PNG",
    description: {
      en: "Full-featured real estate platform for property listings in Belgium and international markets, with advanced search and multilingual support.",
      fr: "Plateforme immobilière complète pour des annonces en Belgique et à l'international, avec recherche avancée et support multilingue.",
    },
    tags: ["Real Estate", "WordPress", "Property Listings", "Search System", "Multilingual"],
  },
  {
    title: "AI Dragonfly",
    url: "https://ai.dragonflygroup.fr",
    image: "/ai-dgf.PNG",
    description: {
      en: "Innovative AI-powered platform developed with a React frontend and Symfony backend, integrating AI features into a modern, production-grade UI.",
      fr: "Plateforme innovante propulsée par l'IA, développée avec un frontend React et un backend Symfony, intégrant des fonctionnalités IA dans une interface moderne et production-ready.",
    },
    tags: ["React", "Symfony", "AI Integration", "Full-Stack", "Modern UI"],
  },
  {
    title: "Laboratoires Roncey",
    url: "https://laboratoires-roncey.com/fr/",
    image: "/roncey-pic.PNG",
    description: {
      en: "A fully responsive pharmaceutical laboratory website with a custom admin interface and multilingual support.",
      fr: "Site web entièrement responsive pour un laboratoire pharmaceutique, avec interface d'administration sur mesure et support multilingue.",
    },
    tags: ["WordPress", "Custom Theme", "Multilingual", "Responsive"],
  },
  {
    title: "Gintzburger",
    url: "https://gintzburger.com/",
    image: "/ja-pic.PNG",
    description: {
      en: "Modern e-commerce platform with an optimized user experience and a seamless checkout process.",
      fr: "Plateforme e-commerce moderne avec une expérience utilisateur optimisée et un parcours de commande fluide.",
    },
    tags: ["E-commerce", "WooCommerce", "SEO", "Custom"],
  },
  {
    title: "Joulie Avocats",
    url: "https://www.joulieavocats.com/",
    image: "/ja-pic-1.PNG",
    description: {
      en: "Professional law firm website with an elegant design and optimized content structure.",
      fr: "Site professionnel pour un cabinet d'avocats, au design élégant et à la structure de contenu optimisée.",
    },
    tags: ["WordPress", "Custom Theme", "SEO", "Professional"],
  },
];
