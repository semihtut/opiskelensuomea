/**
 * Site-wide constants. Canonical host is the www form everywhere (CLAUDE.md).
 * NOTE: `author` is the public E-E-A-T byline — owner should confirm/replace the
 * name here; it is the single source for the byline, /about page, and Person JSON-LD.
 */
export const SITE = {
  name: "Opiskelen Suomea",
  url: "https://www.opiskelensuomea.com",
  tagline: "Opi suomea — Suomi 90",
  description:
    "Free, structured way to learn Finnish, made for learners who already have some Finnish but feel stuck. Flagship: Suomi 90, a 13-week program covering the ~1000 most common Finnish words.",
  locale: "fi-FI",
  author: {
    name: "Semih Tut",
    url: "https://www.opiskelensuomea.com/about",
  },
} as const;

/** Build an absolute URL on the canonical host from a root-relative path. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${clean === "/" ? "" : clean}`;
}
