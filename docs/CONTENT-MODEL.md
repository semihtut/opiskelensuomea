# Content Model

All teaching content is **typed data**. Pages are derived from it. Never hard-code
linguistic content in components. Types live in `lib/content-types.ts`; data in `content/`.

## Word (the atomic unit) — `content/words/<slug>.ts`

```ts
export type Pos =
  | "verbi" | "substantiivi" | "adjektiivi" | "adverbi"
  | "konjunktio" | "pronomini" | "prepositio" | "fraasi";

export type Level = "A1" | "A2" | "B1" | "B2";

export interface FormRow { sija: string; muoto: string; merkitys: string; } // summary row
export interface TableRow { label: string; form: string; }                  // full-table row
export interface Section { title: string; rows: TableRow[]; }
export interface Example { fi: string; en: string; }
export interface Johdos { fi: string; en: string; taso: Level; esim: Example; }
export interface Synonym { fi: string; en: string; }

export interface Word {
  fi: string;                 // lemma (dictionary form)
  slug: string;               // url slug, ä/ö preserved, e.g. "syödä"
  pos: string;                // e.g. "verbi (tyyppi 2)", "substantiivi"
  posClass: Pos;              // coarse class for filtering/schema
  level: Level;
  en: string;                 // English meaning(s)
  selitys: string;            // short FINNISH definition

  kielioppi: {                // always-visible summary
    tyyppi: string;           // short type/gradation note
    muodot: FormRow[];        // 3–4 key forms (incl. partitive for nominals)
    huom?: string;            // one usage/irregularity note
  };

  taivutus?: { sections: Section[] }; // full tables (verbs/nominals); omit for invariants

  johdokset: Johdos[];        // 3–4 derived/related words, each with an A2/B1 example
  synonyymit: Synonym[];      // 2–4 near-synonyms

  esimerkit: { A2: Example; B1: Example; B2: Example };

  updatedAt: string;          // ISO date; drives JSON-LD dateModified
}
```

Conventions:
- Verbs: `taivutus.sections` = Preesens, Preesens·kielto, Imperfekti, Imperfekti·kielto,
  Perfekti, Perfekti·kielto, Imperatiivi.
- Nouns/adjectives: a "Yksikkö (sijat)" section (full singular) + "Monikko (avainmuodot)"
  (key plural forms). The UI auto-extracts partitive sg/pl from these sections.
- Adverbs/conjunctions/phrases: no `taivutus`; put usage in `kielioppi.muodot` + `huom`.

## Program structure — `content/weeks/`

```ts
export type Phase = "Reaktivointi" | "Laajennus" | "Sujuvuus";

export interface Day { day: number; theme: string; wordSlugs: string[]; } // refs to words

export interface ReadingText {            // "Viikon teksti"
  title: string; level: Level; topic: string;
  paragraph: string;     // target words wrapped in [[...]] for highlighting
  translation: string;
  targets: string[];     // lemmas highlighted in the paragraph
}

export interface Week {
  week: number;          // 1..13
  phase: Phase;          // weeks 1–4 / 5–8 / 9–13
  theme: string;
  days: Day[];           // 6 learning days (Kertaus/review derived from these)
  teksti: ReadingText;
}

export interface Program { name: "Suomi 90"; weeks: Week[]; }
```

Pace: ~12 words/day × 6 days + weekly review; 13 weeks ≈ 90 days; ~900 unique words total.

## Future content types (stub now, build later — see ROADMAP)

```ts
export interface GrammarLesson { slug: string; title: string; level: Level; bodyMdx: string; relatedWords: string[]; updatedAt: string; }
export interface Exercise { slug: string; type: "cloze" | "match" | "conjugate"; level: Level; items: unknown[]; }
export interface Article { slug: string; title: string; bodyMdx: string; author: string; publishedAt: string; updatedAt: string; } // SEO/blog
```

Keep these forward-compatible: prose content uses MDX; structured content uses typed objects.
Every content object exposes `slug`, `updatedAt`, and (where public) renders with the
SEO/GEO requirements in the content-page-seo skill.
