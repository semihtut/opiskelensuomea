import { words } from "@/content/words";
import { weeks } from "@/content/weeks";
import { scenarios } from "@/content/scenarios";
import type { Day, Scenario, ScenarioCategory, Week, Word } from "./content-types";

const wordBySlug = new Map<string, Word>(words.map((w) => [w.slug, w]));
const weekByNumber = new Map<number, Week>(weeks.map((w) => [w.week, w]));
const scenarioBySlug = new Map<string, Scenario>(scenarios.map((s) => [s.slug, s]));

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

// ---- Scenarios ("Viikon tilanne") ----

/** Finnish display labels for scenario categories. */
export const SCENARIO_CATEGORY_LABEL: Record<ScenarioCategory, string> = {
  terveys: "Terveys",
  asuminen: "Asuminen",
  liikenne: "Liikenne",
  ruoka: "Ruoka ja kauppa",
  raha: "Raha",
  tyo: "Työ ja opiskelu",
  asiointi: "Asiointi",
  "vapaa-aika": "Vapaa-aika",
  teknologia: "Teknologia",
  matka: "Matka",
  sosiaalinen: "Sosiaalinen",
};

/** All scenarios, ordered by week then title. */
export function allScenarios(): Scenario[] {
  return [...scenarios].sort(
    (a, b) => a.week - b.week || a.title.localeCompare(b.title, "fi"),
  );
}

/** Look up one scenario by slug. */
export function getScenario(slug: string): Scenario | undefined {
  return scenarioBySlug.get(slug);
}

/** Decoded-slug lookup helper (route params may arrive URL-encoded). */
export function getScenarioByParam(param: string): Scenario | undefined {
  return getScenario(decodeURIComponent(param));
}

/** Scenarios that belong to a given week (the "Viikon tilanne" of that week). */
export function scenariosForWeek(n: number): Scenario[] {
  return allScenarios().filter((s) => s.week === n);
}
