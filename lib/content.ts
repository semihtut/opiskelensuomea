import { words } from "@/content/words";
import { weeks } from "@/content/weeks";
import type { Day, Week, Word } from "./content-types";

const wordBySlug = new Map<string, Word>(words.map((w) => [w.slug, w]));
const weekByNumber = new Map<number, Week>(weeks.map((w) => [w.week, w]));

// ---- Words ----

/** All words in canonical learning-sequence order. */
export function allWords(): Word[] {
  return words;
}

/** All words sorted alphabetically by lemma (for the index page). */
export function allWordsAlphabetical(): Word[] {
  return [...words].sort((a, b) => a.fi.localeCompare(b.fi, "fi"));
}

/** Look up one word by slug, or undefined if not found. */
export function getWord(slug: string): Word | undefined {
  return wordBySlug.get(slug);
}

/** Decoded-slug lookup helper (Next route params may arrive URL-encoded). */
export function getWordByParam(param: string): Word | undefined {
  return getWord(decodeURIComponent(param));
}

/** Previous/next word in the learning sequence, for breadcrumb navigation. */
export function neighbours(slug: string): { prev?: Word; next?: Word } {
  const i = words.findIndex((w) => w.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? words[i - 1] : undefined,
    next: i < words.length - 1 ? words[i + 1] : undefined,
  };
}

// ---- Weeks ----

/** All weeks in order. */
export function allWeeks(): Week[] {
  return [...weeks].sort((a, b) => a.week - b.week);
}

/** Look up one week by its number (1..13). */
export function getWeek(n: number): Week | undefined {
  return weekByNumber.get(n);
}

/** Resolve the Word objects referenced by a day's wordSlugs (skips missing). */
export function wordsForDay(day: Day): Word[] {
  return day.wordSlugs
    .map((slug) => wordBySlug.get(slug))
    .filter((w): w is Word => Boolean(w));
}
