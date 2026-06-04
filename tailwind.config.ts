import type { Config } from "tailwindcss";

/**
 * Brand token system for Opiskelen Suomea — "calm Nordic editorial".
 * Colors map to CSS custom properties (defined in app/globals.css) so the
 * light/dark themes switch via prefers-color-scheme with zero client JS.
 * Token values + WCAG 2.2 AA reasoning live in .claude/skills/site-design/SKILL.md.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "var(--color-ink-soft)",
        },
        line: "var(--color-line)",
        accent: "var(--color-accent)",
        link: "var(--color-link)",
        // Level accents — consistent across the app (badges, emphasis).
        level: {
          a2: "var(--color-a2)",
          b1: "var(--color-b1)",
          b2: "var(--color-b2)",
        },
      },
      fontFamily: {
        // Display serif for H1/H2 and Finnish lemmas; humanist sans for body/UI.
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // ~1.25 modular scale: 14 / 16 / 20 / 25 / 31 / 39 / 49
        xs: ["0.875rem", { lineHeight: "1.5" }], // 14
        base: ["1rem", { lineHeight: "1.65" }], // 16
        lg: ["1.25rem", { lineHeight: "1.5" }], // 20
        xl: ["1.5625rem", { lineHeight: "1.35" }], // 25
        "2xl": ["1.9375rem", { lineHeight: "1.25" }], // 31
        "3xl": ["2.4375rem", { lineHeight: "1.15" }], // 39
        "4xl": ["3.0625rem", { lineHeight: "1.1" }], // 49
      },
      borderRadius: {
        // cards 10–14px; chips/buttons 6–8px
        card: "12px",
        chip: "7px",
      },
      boxShadow: {
        // soft & low — no heavy drop shadows
        soft: "0 8px 22px rgba(28, 37, 51, 0.08)",
        "soft-lg": "0 12px 32px rgba(28, 37, 51, 0.10)",
      },
      maxWidth: {
        // comfortable reading measure (~65–75ch) for prose / reading texts
        prose: "70ch",
      },
      transitionDuration: {
        DEFAULT: "180ms",
      },
    },
  },
  plugins: [],
};

export default config;
