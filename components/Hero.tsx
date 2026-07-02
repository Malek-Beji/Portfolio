"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { hero, siteMeta } from "@/data/content";

export default function Hero() {
  const { locale } = useLocale();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="grid-fade absolute inset-0 -z-20" />
      <div className="mesh-bg animate-mesh-pan absolute inset-0 -z-10" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-border shadow-glow sm:h-28 sm:w-28">
            <Image src="/img-1.jpeg" alt="Malek Beji" fill priority className="object-cover" />
          </div>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 animate-glow rounded-full bg-accent" />
            {hero.badge[locale]}
          </span>

          <p className="mt-5 font-mono text-sm text-accent2">{hero.label[locale]}</p>

          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {hero.titleLine1[locale]}{" "}
            <span className="text-gradient">{hero.titleHighlight[locale]}</span>
            <br />
            {hero.titleLine2[locale]}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle[locale]}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent2" />
            {siteMeta.location[locale]}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
            >
              {hero.ctaPrimary[locale]}
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent2 hover:text-accent2"
            >
              {hero.ctaSecondary[locale]}
            </a>
            <a
              href={siteMeta.resume}
              download
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-muted transition-colors hover:text-accent2"
            >
              <Download size={16} />
              {hero.ctaResume[locale]}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid w-full grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {hero.stats.map((stat, i) => (
            <div
              key={stat.label.en}
              className={`glass-card rounded-2xl p-5 text-left ${i === 0 ? "col-span-2 sm:col-span-2" : "col-span-1"}`}
            >
              <div className="font-display text-2xl font-semibold text-gradient sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-muted">{stat.label[locale]}</div>
            </div>
          ))}
          <div className="glass-card col-span-2 flex flex-col justify-center rounded-2xl p-5 text-left sm:col-span-4">
            <p className="font-mono text-xs text-accent2">Next.js · React · Flutter</p>
            <p className="mt-1 font-mono text-xs text-muted">Claude · OpenAI · LangChain</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
