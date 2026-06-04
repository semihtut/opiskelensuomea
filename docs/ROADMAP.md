# Roadmap

The product starts as vocabulary but is designed to become a full Finnish-learning platform
for stuck intermediates. Build in order; each milestone should ship to production.

## Milestone 0 — Foundation (this repo)

- Next.js + TS + Tailwind on **Cloudflare Workers (OpenNext)**; content-as-data pipeline; SEO/GEO baseline.
- `robots.txt` (AI bots allowed), `sitemap.xml`, `llms.txt`, JSON-LD builders.
- Word, Week, ReadingText types; shared components (WordCard, DeclensionTable, Faq).

## Milestone 1 — Suomi 90 core (vocabulary)

- All ~900 verified words as `content/words/*.ts` (built in small, verified batches).
- 13 weeks wired (6 days + review + weekly reading text each).
- `/program`, `/week/[n]`, `/words`, `/words/[slug]` live and indexed.
- Submit sitemap to Google + Bing.

## Milestone 2 — Beyond words

- **Grammar guides** (`/grammar/*`, MDX): cases, verb types, partitive, negation, tenses —
  cross-linked from the words that exercise them.
- **Reading texts** expanded per week, with glossary links into word pages.
- **Pronunciation/audio**: IPA already in data; add audio clips per word.

## Milestone 3 — Practice & retention

- **Exercises**: cloze, matching, conjugation drills generated from existing word data.
- **Spaced repetition** review (client-side first), building on the "learned" tracking.
- Optional **accounts** for cross-device progress sync (Supabase or similar).

## Milestone 4 — Growth & authority

- **Blog/articles** (`/blog/*`, MDX) targeting question-intent + GEO ("how to get unstuck
  in Finnish", "Finnish cases explained simply").
- Localized UI variants (e.g. Turkish) once English core is solid.
- Quarterly GEO audit (30-query baseline) and content refresh.

## Always-on principles

- Accuracy first (FINNISH-ACCURACY.md). Every public page meets the SEO/GEO checklist.
- Extend the existing data→page pattern; don't fork it per content type.
- Ship small, verified increments — this is live and public.
