"use client";

import { useEffect, useState } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLocale } from "@/lib/i18n";
import { nav, siteMeta } from "@/data/content";

const links: (keyof typeof nav)[] = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const { locale, toggleLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-semibold tracking-tight">
          Malek<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {nav[key][locale]}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={toggleLocale}
            data-cursor-hover
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Languages size={14} />
            {locale === "en" ? "FR" : "EN"}
          </button>
          <a
            href={`#contact`}
            data-cursor-hover
            className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            {nav.contact[locale]}
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted hover:text-accent"
                >
                  {nav[key][locale]}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={toggleLocale}
                className="flex items-center gap-1.5 text-sm text-muted hover:text-accent"
              >
                <Languages size={14} />
                {locale === "en" ? "Français" : "English"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
