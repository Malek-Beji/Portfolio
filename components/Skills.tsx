"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { sectionTitles } from "@/data/content";
import { skillIcons, skillCategories } from "@/data/skills";

// Bento spans for each category card, matched by index to skillCategories order:
// [Web Frontend, Mobile, AI & LLMs, Backend, Database & Cloud, Design & CMS]
const spans = [
  "sm:col-span-3 lg:col-span-4",
  "sm:col-span-3 lg:col-span-2",
  "sm:col-span-6 lg:col-span-6",
  "sm:col-span-3 lg:col-span-3",
  "sm:col-span-3 lg:col-span-3",
  "sm:col-span-6 lg:col-span-6",
];

export default function Skills() {
  const { locale } = useLocale();

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent2">{sectionTitles.skills.eyebrow[locale]}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {sectionTitles.skills.title[locale]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8"
        >
          {skillIcons.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.label}
                data-cursor-hover
                className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-glow"
              >
                <Icon className="h-6 w-6 text-muted transition-colors group-hover:text-accent2" />
                <span className="text-center text-[11px] leading-tight text-muted">
                  {skill.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className={`rounded-2xl border p-6 transition-colors ${spans[i] ?? "sm:col-span-3"} ${
                i === 2
                  ? "border-accent/40 bg-gradient-to-br from-accent/10 via-surface to-surface hover:border-accent"
                  : "border-border bg-surface hover:border-accent2/50"
              }`}
            >
              <h3 className="font-display text-lg font-semibold text-gradient">
                {cat.title[locale]}
              </h3>
              <ul
                className={`mt-4 gap-x-6 gap-y-3 ${
                  i === 2 || i === 5 ? "grid sm:grid-cols-2" : "space-y-3"
                }`}
              >
                {cat.items.map((item) => (
                  <li key={item.label}>
                    <p className="text-sm font-medium text-white">{item.label}</p>
                    <p className="text-xs text-muted">{item.description[locale]}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
