"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { sectionTitles } from "@/data/content";
import { workExperience, education } from "@/data/experience";

export default function Experience() {
  const { locale } = useLocale();

  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent2">{sectionTitles.experience.eyebrow[locale]}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {sectionTitles.experience.title[locale]}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-2 text-accent">
              <Briefcase size={18} />
              <h3 className="font-display text-lg font-semibold">
                {locale === "en" ? "Work Experience" : "Expérience professionnelle"}
              </h3>
            </div>
            <div className="space-y-8 border-l border-border pl-6">
              {workExperience.map((job, i) => (
                <motion.div
                  key={`${job.company}-${job.period.en}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-bg" />
                  <p className="font-mono text-xs text-accent2">{job.period[locale]}</p>
                  <h4 className="mt-1 font-display text-lg font-semibold text-white">
                    {job.role[locale]}
                  </h4>
                  <p className="text-sm font-medium text-accent">{job.company}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {job.description[locale]}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {job.bullets.map((b) => (
                      <li key={b.en} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {b[locale]}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-2 text-accent2">
              <GraduationCap size={18} />
              <h3 className="font-display text-lg font-semibold">
                {locale === "en" ? "Education" : "Formation"}
              </h3>
            </div>
            <div className="space-y-8 border-l border-border pl-6">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.degree.en}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-accent2 bg-bg" />
                  <p className="font-mono text-xs text-accent2">{ed.period[locale]}</p>
                  <h4 className="mt-1 font-display text-base font-semibold text-white">
                    {ed.degree[locale]}
                  </h4>
                  <p className="text-sm font-medium text-accent">{ed.field[locale]}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {ed.description[locale]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
