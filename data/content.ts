import type { Locale } from "@/lib/i18n";

export const siteMeta = {
  name: "Malek Beji",
  email: "bejimalek137@gmail.com",
  phone: "+216 53 695 990",
  location: { en: "Tunisia", fr: "Tunisie" },
  github: "https://github.com/Malek-Beji",
  linkedin: "https://www.linkedin.com/in/malek-beji-a76260254/",
  resume: "/cv-malek-beji-ats-eng.pdf",
  formspree: "https://formspree.io/f/xjvnqzao",
};

type Dict = Record<Locale, string>;

export const nav: Record<
  "home" | "about" | "skills" | "experience" | "projects" | "contact",
  Dict
> = {
  home: { en: "Home", fr: "Accueil" },
  about: { en: "About", fr: "À propos" },
  skills: { en: "Skills", fr: "Compétences" },
  experience: { en: "Experience", fr: "Expérience" },
  projects: { en: "Projects", fr: "Projets" },
  contact: { en: "Contact", fr: "Contact" },
};

export const hero = {
  badge: {
    en: "Open To — Opportunities",
    fr: "Disponible — Nouvelles opportunités",
  },
  label: {
    en: "Full-Stack (Next.js/React) & Mobile (Flutter) Developer",
    fr: "Développeur Full-Stack (Next.js/React) & Mobile (Flutter)",
  },
  titleLine1: { en: "Crafting Digital", fr: "Je conçois des expériences" },
  titleHighlight: { en: "Experiences", fr: "numériques" },
  titleLine2: {
    en: "Across Web, Mobile & AI",
    fr: "sur le web, le mobile et l'IA",
  },
  subtitle: {
    en: "I design and ship high-performance web apps with Next.js and React, cross-platform mobile apps with Flutter, and AI-powered features using Claude, GPT and LangChain. Based in Tunisia, working with clients worldwide.",
    fr: "Je conçois et livre des applications web performantes avec Next.js et React, des applications mobiles cross-platform avec Flutter, et des fonctionnalités IA avec Claude, GPT et LangChain. Basé en Tunisie, je travaille avec des clients partout dans le monde.",
  },
  ctaPrimary: { en: "Hire Me", fr: "Me contacter" },
  ctaSecondary: { en: "View Projects", fr: "Voir mes projets" },
  ctaResume: { en: "Download CV", fr: "Télécharger le CV" },
  stats: [
    { value: "3+", label: { en: "Years Experience", fr: "Ans d'expérience" } },
    { value: "30+", label: { en: "Projects Delivered", fr: "Projets livrés" } },
    { value: "3", label: { en: "Platforms — Web, Mobile, AI", fr: "Domaines — Web, Mobile, IA" } },
  ],
};

export const about = {
  eyebrow: { en: "About Me", fr: "À propos de moi" },
  title: { en: "Who I Am", fr: "Qui je suis" },
  paragraphs: [
    {
      en: "I'm Malek Beji, a Full-Stack and Mobile App Developer based in Tunisia, passionate about building fast, elegant, and intelligent digital products.",
      fr: "Je suis Malek Beji, développeur Full-Stack et mobile basé en Tunisie, passionné par la création de produits numériques rapides, élégants et intelligents.",
    },
    {
      en: "My core stack is Next.js, React and TypeScript for the web, and Flutter/Dart for cross-platform mobile apps, backed by Node.js, Symfony and PHP APIs. I also design and ship AI-powered features using the Claude and OpenAI APIs, LangChain agents, and RAG pipelines — turning LLMs into real product value rather than a demo.",
      fr: "Ma stack principale est Next.js, React et TypeScript pour le web, et Flutter/Dart pour le mobile cross-platform, appuyée par des APIs Node.js, Symfony et PHP. Je conçois aussi des fonctionnalités IA avec les APIs Claude et OpenAI, des agents LangChain et des pipelines RAG — pour transformer les LLMs en vraie valeur produit, pas de simples démos.",
    },
    {
      en: "From pixel-perfect UI to scalable backend architecture and cloud deployment, I own the full lifecycle: client discovery, design-to-code, database design, API integration, and production deployment on Vercel, AWS and Docker.",
      fr: "De l'interface pixel-perfect à l'architecture backend scalable et au déploiement cloud, je gère l'ensemble du cycle : cadrage client, intégration design, conception de base de données, intégration d'API et mise en production sur Vercel, AWS et Docker.",
    },
  ],
  arsenalTitle: { en: "Technical Arsenal", fr: "Arsenal technique" },
};

export const contact = {
  eyebrow: { en: "Get In Touch", fr: "Contactez-moi" },
  title: { en: "Let's Build Something", fr: "Construisons quelque chose" },
  intro: {
    en: "Have a project in mind? I'm based in Tunisia and available for remote web, mobile and AI-integration work worldwide — let's talk about it.",
    fr: "Un projet en tête ? Je suis basé en Tunisie et disponible pour des missions web, mobile et intégration IA en remote, partout dans le monde — parlons-en.",
  },
  emailLabel: { en: "Email", fr: "Email" },
  phoneLabel: { en: "Phone", fr: "Téléphone" },
  locationLabel: { en: "Location", fr: "Localisation" },
  form: {
    name: { en: "Your Name", fr: "Votre nom" },
    email: { en: "Your Email", fr: "Votre email" },
    subject: { en: "Subject", fr: "Sujet" },
    message: { en: "Your Message", fr: "Votre message" },
    submit: { en: "Send Message", fr: "Envoyer le message" },
  },
};

export const footer = {
  description: {
    en: "Full-Stack (Next.js/React) & Mobile (Flutter) Developer based in Tunisia, building web, mobile and AI-powered products for clients worldwide.",
    fr: "Développeur Full-Stack (Next.js/React) & Mobile (Flutter) basé en Tunisie, je construis des produits web, mobile et IA pour des clients partout dans le monde.",
  },
  rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
};

export const sectionTitles = {
  skills: { eyebrow: { en: "What I Do", fr: "Ce que je fais" }, title: { en: "Skills & Tools", fr: "Compétences & Outils" } },
  experience: { eyebrow: { en: "My Journey", fr: "Mon parcours" }, title: { en: "Experience & Education", fr: "Expérience & Formation" } },
  projects: { eyebrow: { en: "My Work", fr: "Mes réalisations" }, title: { en: "Featured Projects", fr: "Projets phares" } },
};
