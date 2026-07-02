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
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {about.title[locale]}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
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
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-semibold text-accent">
              {about.arsenalTitle[locale]}
            </h3>
            <div className="mt-6 space-y-6">
              {skillCategories.map((cat) => (
                <div key={cat.title.en}>
                  <p className="text-sm font-semibold uppercase tracking-wide text-white">
                    {cat.title[locale]}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {cat.items.map((item) => item.label).join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
