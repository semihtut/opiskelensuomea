import type { Config } from "tailwindcss";

// Phase 1 placeholder — the full brand token system (colors, type scale, fonts,
// radius, shadows, dark theme) is implemented in Phase 2 via the site-design skill.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
