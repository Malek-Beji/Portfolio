"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { footer, siteMeta, nav } from "@/data/content";

const links: (keyof typeof nav)[] = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Footer() {
  const { locale } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold">
              Malek<span className="text-accent">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {footer.description[locale]}
            </p>
            <div className="mt-4 flex gap-3">
              <a href={`mailto:${siteMeta.email}`} data-cursor-hover className="text-muted transition-colors hover:text-accent">
                <Mail size={18} />
              </a>
              <a href={siteMeta.github} target="_blank" rel="noopener noreferrer" data-cursor-hover className="text-muted transition-colors hover:text-accent">
                <Github size={18} />
              </a>
              <a href={siteMeta.linkedin} target="_blank" rel="noopener noreferrer" data-cursor-hover className="text-muted transition-colors hover:text-accent">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{locale === "en" ? "Navigation" : "Navigation"}</p>
            <ul className="mt-3 space-y-2">
              {links.map((key) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-sm text-muted transition-colors hover:text-accent">
                    {nav[key][locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">{locale === "en" ? "Contact" : "Contact"}</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>{siteMeta.email}</li>
              <li>{siteMeta.phone}</li>
              <li>{siteMeta.location[locale]}</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row">
          <p>&copy; {year} Malek Beji. {footer.rights[locale]}</p>
        </div>
      </div>
    </footer>
  );
}
