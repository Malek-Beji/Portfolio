"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { sectionTitles } from "@/data/content";
import { skillIcons, skillCategories } from "@/data/skills";

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
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {sectionTitles.skills.title[locale]}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid grid-cols-4 gap-4 sm:grid-cols-6 lg:grid-cols-8"
        >
          {skillIcons.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.label}
                data-cursor-hover
                className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-accent"
              >
                <Icon className="h-6 w-6 text-muted transition-colors group-hover:text-accent" />
                <span className="text-center text-[11px] leading-tight text-muted">
                  {skill.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-display text-lg font-semibold text-accent">
                {cat.title[locale]}
              </h3>
              <ul className="mt-4 space-y-3">
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
