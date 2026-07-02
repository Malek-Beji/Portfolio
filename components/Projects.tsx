"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { sectionTitles } from "@/data/content";
import { projects } from "@/data/projects";

// Bento mosaic spans (out of a 6-col grid on large screens) + matching image aspect ratio.
const layout = [
  { span: "lg:col-span-4", aspect: "aspect-[16/9]" },
  { span: "lg:col-span-2", aspect: "aspect-[4/5]" },
  { span: "lg:col-span-2", aspect: "aspect-[4/5]" },
  { span: "lg:col-span-2", aspect: "aspect-[4/5]" },
  { span: "lg:col-span-2", aspect: "aspect-[4/5]" },
  { span: "lg:col-span-6", aspect: "aspect-[21/9]" },
  { span: "lg:col-span-3", aspect: "aspect-[4/3]" },
  { span: "lg:col-span-3", aspect: "aspect-[4/3]" },
];

export default function Projects() {
  const { locale } = useLocale();

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent2">{sectionTitles.projects.eyebrow[locale]}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {sectionTitles.projects.title[locale]}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {projects.map((project, i) => {
            const { span, aspect } = layout[i] ?? { span: "lg:col-span-3", aspect: "aspect-[4/3]" };
            return (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.07 }}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent2/60 hover:shadow-glow-cyan ${span}`}
              >
                <div className={`relative overflow-hidden ${aspect}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-70" />
                  <div className="absolute inset-0 flex items-center justify-center bg-bg/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-2 text-xs font-semibold text-white">
                      {locale === "en" ? "Visit Site" : "Voir le site"}
                      <ExternalLink size={14} />
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description[locale]}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
