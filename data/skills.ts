import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiPhp,
  SiSymfony,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiSupabase,
  SiDocker,
  SiWordpress,
  SiFigma,
  SiAnthropic,
  SiLangchain,
} from "react-icons/si";
import { Cloud, Sparkles } from "lucide-react";

export type Skill = {
  label: string;
  icon: IconType;
};

export type SkillCategory = {
  title: { en: string; fr: string };
  items: {
    label: string;
    description: { en: string; fr: string };
  }[];
};

// Icon strip shown at the top of the Skills section.
export const skillIcons: Skill[] = [
  { label: "Next.js", icon: SiNextdotjs },
  { label: "React", icon: SiReact },
  { label: "TypeScript", icon: SiTypescript },
  { label: "Flutter", icon: SiFlutter },
  { label: "Dart", icon: SiDart },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "Claude API", icon: SiAnthropic },
  { label: "OpenAI API", icon: Sparkles },
  { label: "LangChain", icon: SiLangchain },
  { label: "MongoDB", icon: SiMongodb },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "Firebase", icon: SiFirebase },
  { label: "Docker", icon: SiDocker },
  { label: "AWS", icon: Cloud },
  { label: "WordPress", icon: SiWordpress },
  { label: "Tailwind CSS", icon: SiTailwindcss },
];

// Detailed "Technical Arsenal" breakdown.
export const skillCategories: SkillCategory[] = [
  {
    title: { en: "Web Frontend", fr: "Frontend Web" },
    items: [
      { label: "Next.js & React", description: { en: "App Router, Server Components, SSR/SSG", fr: "App Router, Server Components, SSR/SSG" } },
      { label: "TypeScript", description: { en: "Type-safe apps at scale", fr: "Applications typées à grande échelle" } },
      { label: "Tailwind CSS", description: { en: "Utility-first, responsive UI", fr: "UI responsive, utility-first" } },
      { label: "Framer Motion", description: { en: "Motion design & micro-interactions", fr: "Motion design & micro-interactions" } },
    ],
  },
  {
    title: { en: "Mobile", fr: "Mobile" },
    items: [
      { label: "Flutter & Dart", description: { en: "Cross-platform iOS & Android apps", fr: "Applications cross-platform iOS & Android" } },
      { label: "State Management", description: { en: "Provider, Riverpod, Bloc", fr: "Provider, Riverpod, Bloc" } },
      { label: "Native Integrations", description: { en: "Push notifications, device APIs, deep links", fr: "Notifications push, APIs natives, deep links" } },
    ],
  },
  {
    title: { en: "AI & LLMs", fr: "IA & LLMs" },
    items: [
      { label: "Claude API (Anthropic)", description: { en: "Tool use, agents, structured output", fr: "Tool use, agents, sorties structurées" } },
      { label: "OpenAI / GPT API", description: { en: "Chat, embeddings, assistants", fr: "Chat, embeddings, assistants" } },
      { label: "LangChain & AI Agents", description: { en: "Agentic workflows & orchestration", fr: "Workflows agentiques & orchestration" } },
      { label: "RAG Pipelines", description: { en: "Vector search & retrieval-augmented generation", fr: "Recherche vectorielle & RAG" } },
    ],
  },
  {
    title: { en: "Backend", fr: "Backend" },
    items: [
      { label: "Node.js", description: { en: "REST & real-time APIs", fr: "APIs REST & temps réel" } },
      { label: "PHP & Symfony", description: { en: "Enterprise-grade backend apps", fr: "Applications backend robustes" } },
      { label: "RESTful APIs", description: { en: "Design, docs & integration", fr: "Conception, docs & intégration" } },
      { label: "GraphQL", description: { en: "Schema design & resolvers", fr: "Conception de schémas & resolvers" } },
    ],
  },
  {
    title: { en: "Database & Cloud", fr: "Base de données & Cloud" },
    items: [
      { label: "MongoDB", description: { en: "NoSQL data modeling", fr: "Modélisation de données NoSQL" } },
      { label: "PostgreSQL & MySQL", description: { en: "Relational design & optimization", fr: "Conception & optimisation relationnelle" } },
      { label: "Firebase & Supabase", description: { en: "Auth, realtime DB, storage", fr: "Auth, base temps réel, stockage" } },
      { label: "Docker & AWS", description: { en: "Containerization & cloud deployment", fr: "Conteneurisation & déploiement cloud" } },
    ],
  },
  {
    title: { en: "Design & CMS", fr: "Design & CMS" },
    items: [
      { label: "WordPress", description: { en: "Custom themes & ACF Pro", fr: "Thèmes sur mesure & ACF Pro" } },
      { label: "Figma to Code", description: { en: "Pixel-perfect implementation", fr: "Implémentation pixel-perfect" } },
      { label: "UI/UX Design", description: { en: "Responsive, mobile-first design", fr: "Design responsive, mobile-first" } },
      { label: "SEO & Performance", description: { en: "Core Web Vitals, technical SEO", fr: "Core Web Vitals, SEO technique" } },
    ],
  },
];
