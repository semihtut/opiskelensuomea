/**
 * Content model — the typed contract behind every page.
 * Mirrors docs/CONTENT-MODEL.md exactly. Content lives in content/; pages
 * are derived from it. Never hard-code linguistic content in a component.
 */

// ---- Word (the atomic unit) — content/words/<slug>.ts ----

export type Pos =
  | "verbi"
  | "substantiivi"
  | "adjektiivi"
  | "adverbi"
  | "konjunktio"
  | "pronomini"
  | "prepositio"
  | "fraasi";

export type Level = "A1" | "A2" | "B1" | "B2";

export interface FormRow {
  sija: string;
  muoto: string;
  merkitys: string;
} // summary row

export interface TableRow {
  label: string;
  form: string;
} // full-table row

export interface Section {
  title: string;
  rows: TableRow[];
}

export interface Example {
  fi: string;
  en: string;
}

export interface Johdos {
  fi: string;
  en: string;
  taso: Level;
  esim: Example;
}

export interface Synonym {
  fi: string;
  en: string;
}

export interface Word {
  fi: string; // lemma (dictionary form)
  slug: string; // url slug, ä/ö preserved, e.g. "syödä"
  pos: string; // e.g. "verbi (tyyppi 2)", "substantiivi"
  posClass: Pos; // coarse class for filtering/schema
  level: Level;
  en: string; // English meaning(s)
  selitys: string; // short FINNISH definition

  kuva?: {
    // visual for dual-coding on the flashcard (icon-first) — see docs/DESIGN-SYSTEM.md
    icon?: string; // icon key (mapped to inline SVG in lib/icons)
    emoji?: string; // quick fallback glyph until a vector exists
    alt: string; // accessible description of the illustration
  };

  kielioppi: {
    // always-visible summary
    tyyppi: string; // short type/gradation note
    muodot: FormRow[]; // 3–4 key forms (incl. partitive for nominals)
    huom?: string; // one usage/irregularity note
  };

  taivutus?: { sections: Section[] }; // full tables (verbs/nominals); omit for invariants

  johdokset: Johdos[]; // 3–4 derived/related words, each with an A2/B1 example
  synonyymit: Synonym[]; // 2–4 near-synonyms

  esimerkit: { A2: Example; B1: Example; B2: Example };

  updatedAt: string; // ISO date; drives JSON-LD dateModified
}

// ---- Program structure — content/weeks/ ----

export type Phase = "Reaktivointi" | "Laajennus" | "Sujuvuus";

export interface Day {
  day: number;
  theme: string;
  wordSlugs: string[];
} // refs to words

export interface ReadingText {
  // "Viikon teksti"
  title: string;
  level: Level;
  topic: string;
  paragraph: string; // target words wrapped in [[...]] for highlighting
  translation: string;
  targets: string[]; // lemmas highlighted in the paragraph
}

export interface Week {
  week: number; // 1..13
  phase: Phase; // weeks 1–4 / 5–8 / 9–13
  theme: string;
  days: Day[]; // 6 learning days (Kertaus/review derived from these)
  teksti: ReadingText;
}

export interface Program {
  name: "Suomi 90";
  weeks: Week[];
}

// ---- Future content types (stub now, build later — see ROADMAP) ----

export interface GrammarLesson {
  slug: string;
  title: string;
  level: Level;
  bodyMdx: string;
  relatedWords: string[];
  updatedAt: string;
}

export interface Exercise {
  slug: string;
  type: "cloze" | "match" | "conjugate";
  level: Level;
  items: unknown[];
}

export interface Article {
  slug: string;
  title: string;
  bodyMdx: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
}

// ---- Gamification & progress (engagement layer — see docs/DESIGN-SYSTEM.md) ----

export type CardStatus = "new" | "learning" | "known" | "again";

export interface WordProgress {
  slug: string;
  status: CardStatus;
  seen: number; // times reviewed
  lastReviewed?: string; // ISO
  dueAt?: string; // ISO — next review (spaced repetition)
}

export interface DailyStat {
  date: string; // ISO yyyy-mm-dd
  learned: number;
  goal: number; // default 12
}

export interface UserProgress {
  words: Record<string, WordProgress>;
  daily: DailyStat[];
  streak: number; // consecutive days the goal was met
  xp: number;
  unlockedBadges: string[]; // badge ids
  currentWeek: number;
  currentDay: number;
}

export type BadgeKind = "lukuteksti" | "phase" | "streak" | "words" | "perfect";

export interface Badge {
  id: string;
  kind: BadgeKind;
  title: string; // FINNISH name, e.g. "Viikon lukija"
  description: string; // unlock criteria, FINNISH
  icon: string; // icon key
  threshold?: number; // e.g. streak 7 / words 100 / week n
}
