"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { contact, siteMeta } from "@/data/content";

export default function Contact() {
  const { locale } = useLocale();

  const infoCards = [
    { icon: Mail, label: contact.emailLabel[locale], value: siteMeta.email, href: `mailto:${siteMeta.email}` },
    { icon: Phone, label: contact.phoneLabel[locale], value: siteMeta.phone, href: `tel:${siteMeta.phone.replace(/\s/g, "")}` },
    { icon: MapPin, label: contact.locationLabel[locale], value: siteMeta.location[locale], href: undefined },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent2">{contact.eyebrow[locale]}</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            {contact.title[locale]}
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">{contact.intro[locale]}</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-muted">{card.label}</p>
                    <p className="text-sm font-medium text-white">{card.value}</p>
                  </div>
                </div>
              );
              return card.href ? (
                <a key={card.label} href={card.href} data-cursor-hover>
                  {content}
                </a>
              ) : (
                <div key={card.label}>{content}</div>
              );
            })}

            <div className="flex gap-3 pt-2">
              <a
                href={siteMeta.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Github size={18} />
              </a>
              <a
                href={siteMeta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.form
            action={siteMeta.formspree}
            method="POST"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                placeholder={contact.form.name[locale]}
                className="rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <input
                type="email"
                name="email"
                required
                placeholder={contact.form.email[locale]}
                className="rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder={contact.form.subject[locale]}
              className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder={contact.form.message[locale]}
              className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
            />
            <button
              type="submit"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg transition-transform hover:scale-105"
            >
              {contact.form.submit[locale]}
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
