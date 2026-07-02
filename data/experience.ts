export type ExperienceItem = {
  company: string;
  role: { en: string; fr: string };
  period: { en: string; fr: string };
  description: { en: string; fr: string };
  bullets: { en: string; fr: string }[];
};

export const workExperience: ExperienceItem[] = [
  {
    company: "AppWeb Plus",
    role: { en: "Freelance Full-Stack & Mobile Developer", fr: "Développeur Full-Stack & Mobile Freelance" },
    period: { en: "Mar 2025 — Present", fr: "Mars 2025 — Présent" },
    description: {
      en: "Working as an independent freelance developer, building full-stack web applications and mobile apps end-to-end for clients worldwide, from architecture and API design to deployment.",
      fr: "Développeur freelance indépendant, je conçois des applications web full-stack et des applications mobiles de bout en bout pour des clients à l'international, de l'architecture au déploiement.",
    },
    bullets: [
      { en: "Built and shipped production Next.js/React applications with TypeScript and Tailwind CSS", fr: "Conception et livraison d'applications Next.js/React en production avec TypeScript et Tailwind CSS" },
      { en: "Developed cross-platform mobile apps using Flutter and Dart", fr: "Développement d'applications mobiles cross-platform avec Flutter et Dart" },
      { en: "Integrated AI-powered features using the Claude API, OpenAI API and LangChain agents", fr: "Intégration de fonctionnalités IA avec l'API Claude, l'API OpenAI et des agents LangChain" },
      { en: "Delivered custom CMS and full-stack solutions end-to-end, from client consultation to deployment", fr: "Livraison de solutions CMS et full-stack sur mesure, de la consultation client au déploiement" },
    ],
  },
  {
    company: "AI Dragonfly",
    role: { en: "Fullstack Developer", fr: "Développeur Fullstack" },
    period: { en: "Dec 2024 — Mar 2025", fr: "Déc 2024 — Mars 2025" },
    description: {
      en: "Contributed to an AI-powered platform, working across the React frontend and Symfony backend.",
      fr: "Contribution à une plateforme propulsée par l'IA, sur le frontend React et le backend Symfony.",
    },
    bullets: [
      { en: "Developed UIs with React and integrated APIs", fr: "Développement d'interfaces avec React et intégration d'APIs" },
      { en: "Built backend services using Symfony", fr: "Développement de services backend avec Symfony" },
      { en: "Collaborated on AI-powered web features", fr: "Collaboration sur des fonctionnalités web propulsées par l'IA" },
    ],
  },
  {
    company: "Light My Web",
    role: { en: "Web Developer / Integrator", fr: "Développeur Web / Intégrateur" },
    period: { en: "Apr 2024 — Jun 2024", fr: "Avr 2024 — Juin 2024" },
    description: {
      en: "Converted design mockups into fully responsive, production-ready WordPress websites.",
      fr: "Conversion de maquettes en sites WordPress responsives et prêts pour la production.",
    },
    bullets: [
      { en: "Converted AI/PSD/Figma mockups into responsive websites", fr: "Conversion de maquettes AI/PSD/Figma en sites responsives" },
      { en: "Created 100% custom WordPress themes", fr: "Création de thèmes WordPress 100% sur mesure" },
      { en: "Developed manageable admin interfaces", fr: "Développement d'interfaces d'administration ergonomiques" },
    ],
  },
  {
    company: "Light My Web",
    role: { en: "Web Developer / Integrator", fr: "Développeur Web / Intégrateur" },
    period: { en: "Sep 2023 — Dec 2023", fr: "Sept 2023 — Déc 2023" },
    description: {
      en: "Focused on SEO strategy and pixel-perfect conversion of design mockups.",
      fr: "Focus sur la stratégie SEO et la conversion pixel-perfect de maquettes.",
    },
    bullets: [
      { en: "Implemented SEO strategies and optimization", fr: "Mise en place de stratégies SEO et d'optimisation" },
      { en: "Converted mockups (AI, XD, Sketch, Figma) to HTML/CSS/JS", fr: "Conversion de maquettes (AI, XD, Sketch, Figma) en HTML/CSS/JS" },
      { en: "Delivered high-quality responsive websites", fr: "Livraison de sites responsives de haute qualité" },
    ],
  },
  {
    company: "AppWeb Plus",
    role: { en: "Web Developer / Integrator", fr: "Développeur Web / Intégrateur" },
    period: { en: "Jun 2023 — Sep 2023", fr: "Juin 2023 — Sept 2023" },
    description: {
      en: "Built fully customized WordPress themes and implemented SEO best practices.",
      fr: "Développement de thèmes WordPress sur mesure et application des bonnes pratiques SEO.",
    },
    bullets: [
      { en: "Developed SEO strategies", fr: "Développement de stratégies SEO" },
      { en: "Integrated AI/PSD/Figma mockups", fr: "Intégration de maquettes AI/PSD/Figma" },
      { en: "Built fully customized WordPress themes", fr: "Développement de thèmes WordPress entièrement sur mesure" },
    ],
  },
];

export type EducationItem = {
  degree: { en: string; fr: string };
  field: { en: string; fr: string };
  period: { en: string; fr: string };
  description: { en: string; fr: string };
};

export const education: EducationItem[] = [
  {
    degree: { en: "Advanced Technician Certificate (BTS)", fr: "Brevet de Technicien Supérieur (BTS)" },
    field: { en: "Marketing and Multimedia", fr: "Marketing et Multimédia" },
    period: { en: "2022 — 2025", fr: "2022 — 2025" },
    description: {
      en: "Focused on digital marketing strategies and multimedia content creation, enhancing understanding of user experience and client needs in web development.",
      fr: "Formation axée sur les stratégies de marketing digital et la création de contenu multimédia, renforçant la compréhension de l'expérience utilisateur et des besoins clients.",
    },
  },
  {
    degree: { en: "High School Diploma", fr: "Baccalauréat" },
    field: { en: "Economics and Management", fr: "Économie et Gestion" },
    period: { en: "2018 — 2022", fr: "2018 — 2022" },
    description: {
      en: "Built a strong foundation in analytical thinking and business concepts, which helps understand client business needs when developing websites.",
      fr: "Base solide en pensée analytique et en concepts business, utile pour comprendre les besoins métier des clients.",
    },
  },
];
