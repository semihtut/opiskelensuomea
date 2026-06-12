import type { Config } from "tailwindcss";

/**
 * Brand token system — "Cozy Nordic EdTech" (docs/DESIGN-SYSTEM.md).
 * Colors map to CSS custom properties (app/globals.css) so light/dark switch via
 * prefers-color-scheme with zero client JS. All pairs are WCAG 2.2 AA-verified.
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
        bg: "var(--color-bg)", // warm paper canvas
        surface: "var(--color-surface)", // cards / sheets
        elevated: "var(--color-elevated)", // raised interactive cards (flashcards)
        ink: {
          DEFAULT: "var(--color-ink)",
          soft: "var(--color-ink-soft)",
        },
        line: "var(--color-line)",
        accent: "var(--color-accent)", // terracotta — brand / headwords / emphasis
        primary: "var(--color-primary)", // teal — actions / focus / progress
        link: "var(--color-link)", // = primary (kept for base <a> styling)
        // gamification reward spectrum
        success: "var(--color-success)",
        amber: {
          DEFAULT: "var(--color-amber)", // fills (with ink text)
          deep: "var(--color-amber-deep)", // amber as text/icon on light
        },
        gold: "var(--color-gold)",
        again: "var(--color-again)",
        // CEFR level accents
        level: {
          a1: "var(--color-a1)",
          a2: "var(--color-a2)",
          b1: "var(--color-b1)",
          b2: "var(--color-b2)",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // ~1.25 scale: 13 / 14 / 16 / 20 / 25 / 31 / 39 / 49 / 61
        "2xs": ["0.8125rem", { lineHeight: "1.5" }], // 13
        xs: ["0.875rem", { lineHeight: "1.5" }], // 14
        base: ["1rem", { lineHeight: "1.65" }], // 16
        lg: ["1.25rem", { lineHeight: "1.5" }], // 20
        xl: ["1.5625rem", { lineHeight: "1.35" }], // 25
        "2xl": ["1.9375rem", { lineHeight: "1.25" }], // 31
        "3xl": ["2.4375rem", { lineHeight: "1.15" }], // 39
        "4xl": ["3.0625rem", { lineHeight: "1.1" }], // 49
        "5xl": ["3.8125rem", { lineHeight: "1.05" }], // 61
        // Fluid editorial display tier — scales between two scale-steps with the
        // viewport (clamp), so headlines are confident on desktop without overflowing
        // mobile. Tight tracking + optical line-height for large Fraunces settings.
        display: [
          "clamp(2.4375rem, 1.2rem + 5vw, 3.8125rem)", // 39 → 61, hero
          { lineHeight: "1.0", letterSpacing: "-0.02em" },
        ],
        title: [
          "clamp(1.9375rem, 1.1rem + 3.6vw, 3.0625rem)", // 31 → 49, page H1
          { lineHeight: "1.08", letterSpacing: "-0.015em" },
        ],
      },
      borderRadius: {
        card: "16px",
        flashcard: "20px",
        chip: "10px",
        pill: "9999px",
      },
      boxShadow: {
        soft: "0 6px 18px rgba(28, 37, 51, 0.07)", // rest
        "soft-lg": "0 14px 34px rgba(28, 37, 51, 0.12)", // hover
        lift: "0 20px 48px rgba(28, 37, 51, 0.16)", // flashcard lift
      },
      maxWidth: {
        // Named content measures (one deliberate width per surface type) so the
        // content column doesn't jump size page-to-page.
        prose: "70ch", // inline reading measure for body paragraphs
        page: "48rem", // index / list pages (words, program, week, scenarios, roadmap)
        "page-wide": "64rem", // hero + sidebar layouts and the page chrome (home, word, dashboard)
      },
      transitionDuration: {
        DEFAULT: "200ms",
        flip: "480ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(.2,.8,.2,1)",
        flip: "cubic-bezier(.2,.7,.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
