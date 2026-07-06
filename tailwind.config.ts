import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0b14",
        surface: "#13131f",
        surface2: "#191927",
        border: "#26263a",
        accent: "#6c5ce7",
        accent2: "#22d3ee",
        muted: "#9694a8",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        sans: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "mesh-pan": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-3%, 2%) scale(1.05)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "mesh-pan": "mesh-pan 14s ease-in-out infinite",
        blink: "blink 1s steps(1) infinite",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(108, 92, 231, 0.45)",
        "glow-cyan": "0 0 40px -8px rgba(34, 211, 238, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
