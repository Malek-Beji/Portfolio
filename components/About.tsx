"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { about } from "@/data/content";
import { skillCategories } from "@/data/skills";

export default function About() {
  const { locale } = useLocale();

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent2">{about.eyebrow[locale]}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {about.title[locale]}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card space-y-5 rounded-2xl p-8 lg:col-span-4"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {p[locale]}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-surface to-surface p-6 lg:col-span-2"
          >
            <h3 className="font-display text-lg font-semibold text-gradient">
              {about.arsenalTitle[locale]}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {locale === "en"
                ? "Full lifecycle: discovery, design-to-code, database, API, deployment."
                : "Cycle complet : cadrage, design-to-code, base de données, API, déploiement."}
            </p>
          </motion.div>

          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.07 }}
              className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent2/50 lg:col-span-2"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-white">
                {cat.title[locale]}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {cat.items.map((item) => item.label).join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
