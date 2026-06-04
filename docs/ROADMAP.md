# Roadmap

The product starts as vocabulary but is designed to become a full Finnish-learning platform
for stuck intermediates. Build in order; each milestone should ship to production.

## Milestone 0 — Foundation (this repo)

- Next.js + TS + Tailwind on **Cloudflare Workers (OpenNext)**; content-as-data pipeline; SEO/GEO baseline.
- `robots.txt` (AI bots allowed), `sitemap.xml`, `llms.txt`, JSON-LD builders.
- Word, Week, ReadingText types; shared components (WordCard, DeclensionTable, Faq).

> **Direction change (2026):** the product is becoming a **gamified, visual learning app**.
> New priority order — accuracy → engagement → accessibility → SEO (see docs/DESIGN-SYSTEM.md).
> The engagement layer is pulled forward (was Milestone 3) because delight is now the point.

## Milestone 1 — Engagement core (visual + gamified) ★ now in parallel with content

- **Flashcard UI** replacing plain word lists: icon (dual coding) + serif headword + flip to
  inflection/examples (`Flashcard`, `/learn` session). See DESIGN-SYSTEM.md.
- **New palette + tokens** (Cozy Nordic EdTech) wired into tailwind.config + globals.css.
- **Gamification**: daily-12 `ProgressRing`, streak, XP, badge catalogue (`content/badges.ts`),
  serpentine **roadmap**; client-side progress store (`lib/progress.ts`) + SRS (`lib/srs.ts`).
- **Dashboard** (`/dashboard`): Today's 12 / Review mistakes / Continue.
- Add `kuva` icons to existing words; `lib/icons.tsx` SVG set.

## Milestone 2 — Suomi 90 content (vocabulary)

- All ~900 verified words as `content/words/*.ts` (built in small, verified batches).
- 13 weeks wired (6 days + review + weekly reading text each).
- `/words`, `/words/[slug]` kept server-rendered + indexed (SEO/GEO acquisition asset).
- Submit sitemap to Google + Bing.

## Milestone 3 — Beyond words

- **Grammar guides** (`/grammar/*`, MDX): cases, verb types, partitive, negation, tenses —
  cross-linked from the words that exercise them.
- **Reading texts** expanded per week, with glossary links into word pages.
- **Pronunciation/audio**: IPA already in data; add audio clips per word.

## Milestone 4 — Practice & accounts

- **Exercises**: cloze, matching, conjugation drills generated from existing word data.
- Deepen **spaced repetition** (started in M1) with smarter scheduling + analytics.
- Optional **accounts** for cross-device progress sync (Supabase or similar).

## Milestone 5 — Growth & authority

- **Blog/articles** (`/blog/*`, MDX) targeting question-intent + GEO ("how to get unstuck
  in Finnish", "Finnish cases explained simply").
- Localized UI variants (e.g. Turkish) once English core is solid.
- Quarterly GEO audit (30-query baseline) and content refresh.

## Always-on principles

- Accuracy first (FINNISH-ACCURACY.md), then engagement, then accessibility, then SEO.
- Public **reference** pages still meet the content-page-seo checklist; **learning** surfaces
  optimise for delight (DESIGN-SYSTEM.md).
- Extend the existing data→page pattern; don't fork it per content type.
- Ship small, verified increments — this is live and public.
