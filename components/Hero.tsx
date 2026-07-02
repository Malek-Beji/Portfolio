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
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="grid-fade absolute inset-0 -z-10" />
      <div className="absolute -right-40 top-24 -z-10 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="absolute -left-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-accent2/10 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 animate-glow rounded-full bg-accent" />
            {hero.badge[locale]}
          </span>

          <p className="mt-6 font-mono text-sm text-accent2">{hero.label[locale]}</p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {hero.titleLine1[locale]}{" "}
            <span className="text-gradient">{hero.titleHighlight[locale]}</span>
            <br />
            {hero.titleLine2[locale]}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {hero.subtitle[locale]}
          </p>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" />
            {siteMeta.location[locale]}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105"
            >
              {hero.ctaPrimary[locale]}
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
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

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {hero.stats.map((stat) => (
              <div key={stat.label.en}>
                <div className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs leading-snug text-muted">
                  {stat.label[locale]}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="animate-float relative aspect-square overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl shadow-black/40">
            <Image
              src="/img-1.jpeg"
              alt="Malek Beji"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-surface2/90 px-5 py-3 backdrop-blur-sm">
            <p className="font-mono text-xs text-accent">Next.js · React · Flutter</p>
            <p className="mt-0.5 text-xs text-muted">Claude · OpenAI · LangChain</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
