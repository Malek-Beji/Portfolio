"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/lib/i18n";
import { terminalLines } from "@/data/terminal";

const TYPE_SPEED_MS = 45;
const OUTPUT_DELAY_MS = 350;
const LINE_PAUSE_MS = 1400;
const LOOP_PAUSE_MS = 2600;

export default function Terminal() {
  const { locale } = useLocale();
  const lines = terminalLines[locale];

  const [history, setHistory] = useState<typeof lines>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  // Reset the sequence whenever the language changes.
  useEffect(() => {
    setHistory([]);
    setLineIndex(0);
    setCharIndex(0);
    setShowOutput(false);
  }, [locale]);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      const t = setTimeout(() => {
        setHistory([]);
        setLineIndex(0);
        setCharIndex(0);
        setShowOutput(false);
      }, LOOP_PAUSE_MS);
      return () => clearTimeout(t);
    }

    const current = lines[lineIndex].command;

    if (!showOutput) {
      if (charIndex < current.length) {
        const t = setTimeout(() => setCharIndex((c) => c + 1), TYPE_SPEED_MS);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setShowOutput(true), OUTPUT_DELAY_MS);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setHistory((h) => [...h, lines[lineIndex]]);
      setLineIndex((i) => i + 1);
      setCharIndex(0);
      setShowOutput(false);
    }, LINE_PAUSE_MS);
    return () => clearTimeout(t);
  }, [charIndex, showOutput, lineIndex, lines]);

  const active = lineIndex < lines.length ? lines[lineIndex] : null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-[#0a0a12] shadow-glow">
      <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-muted">malek@portfolio — zsh</span>
      </div>

      <div className="min-h-[220px] p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {history.map((line, i) => (
          <div key={i} className="mb-3">
            <p>
              <span className="text-accent2">$</span> <span className="text-white">{line.command}</span>
            </p>
            {line.output.map((out, j) => (
              <p key={j} className="text-muted">
                {out}
              </p>
            ))}
          </div>
        ))}

        {active && (
          <div>
            <p>
              <span className="text-accent2">$</span>{" "}
              <span className="text-white">{active.command.slice(0, charIndex)}</span>
              {!showOutput && <span className="ml-0.5 inline-block h-4 w-2 animate-blink bg-accent2 align-middle" />}
            </p>
            <AnimatePresence>
              {showOutput &&
                active.output.map((out, j) => (
                  <motion.p
                    key={j}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: j * 0.1 }}
                    className="text-muted"
                  >
                    {out}
                  </motion.p>
                ))}
            </AnimatePresence>
            {showOutput && <span className="mt-1 inline-block h-4 w-2 animate-blink bg-accent2 align-middle" />}
          </div>
        )}
      </div>
    </div>
  );
}
