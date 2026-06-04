# Architecture

## Principle

**Content is data; pages are derived; everything is built for discoverability.**
Structured content (words, weeks) lives as typed TS objects; prose (articles, grammar)
as MDX. Next.js statically generates pages from this content. No runtime CMS yet.

## Directory layout

```
app/
  layout.tsx              root layout (Organization JSON-LD, fonts, nav, footer w/ author)
  page.tsx                home
  program/page.tsx        Suomi 90 pillar page (Course schema)
  method/page.tsx         "how the program works" (pace, phases)
  week/[n]/page.tsx       week overview (days + review)
  week/[n]/text/page.tsx  weekly reading text (Article/LearningResource)
  words/page.tsx          word index (ItemList, filter by type/level)
  words/[slug]/page.tsx   per-word page (DefinedTerm + FAQPage)  ← long-tail + citation, SEO-kept
  dashboard/page.tsx      returning-learner home (Today's 12, Review, Continue) [engagement]
  learn/page.tsx          flashcard SESSION (client island; flip, swipe, Again/Osaan) [engagement]
  roadmap/page.tsx        gamified 13-week serpentine path (or fold into /program) [engagement]
  grammar/[slug]/page.tsx grammar guide (MDX)        [future]
  blog/[slug]/page.tsx    article (MDX)              [future]
  about/page.tsx          author / E-E-A-T page

content/
  words/<slug>.ts         one Word per file (source of truth; now incl. optional `kuva` icon)
  weeks/<n>.ts            Week (days reference word slugs) + ReadingText
  badges.ts               Badge catalogue (typed)     [engagement]
  articles/*.mdx          prose                       [future]

lib/
  content-types.ts        the interfaces from docs/CONTENT-MODEL.md
  content.ts              loaders (getWord, getWeek, allWords, neighbours)
  schema.ts               JSON-LD builders (course, definedTerm, faq, itemList, breadcrumb)
  seo.ts                  generateMetadata helpers
  icons.tsx               icon-key → inline SVG map (WordIcon dual-coding) [engagement]
  progress.ts             client-side progress store (localStorage; UserProgress) [engagement]
  srs.ts                  spaced-repetition scheduling (due/again queue)         [engagement]

components/               Flashcard, ProgressRing, RoadmapNode/Path, Badge, StreakFlame,
                          DeclensionTable, ReadingText, Faq, Breadcrumbs, LevelBadge, …
public/                   robots.txt, llms.txt, favicon, og images
docs/                     this folder
.claude/                  CLAUDE.md(root), skills/, rules/
```

## Rendering & performance — two surface types

The app now has **two kinds of surface**, with different rendering strategies:

- **Reference / acquisition (SEO-kept):** `/`, `/words`, `/words/[slug]`, `/program`,
  `/week/[n]`, `/week/[n]/text`, `/about`. **Statically generated** (`generateStaticParams`),
  server-rendered, schema-rich, canonical-www. These are the long-tail + GEO citation asset and
  keep the content-page-seo checklist. Word pages render as a static *flashcard-styled* card.
- **Learning / engagement (app-like):** `/dashboard`, `/learn`, `/roadmap`. Interactive client
  **islands** (flip, swipe, rings, confetti). Fine to be client-heavy and `noindex` when they
  depend on local progress state. Built for delight first (see docs/DESIGN-SYSTEM.md).

Performance discipline still applies to both: ship interactivity as islands, keep Core Web
Vitals green, subset variable fonts (latin-ext), reserve space for icons (no layout shift),
SVG `WordIcon`s (tiny). Progress is **client-side first** (`lib/progress.ts`, localStorage);
account sync is a later milestone (see ROADMAP).

## Content pipeline (adding a word, end to end)

1. Author `content/words/<slug>.ts` via the **finnish-word-entry** skill (verify forms).
2. Reference its slug from the relevant `content/weeks/<n>.ts` day.
3. `words/[slug]/page.tsx` renders it through shared components + `lib/schema.ts`.
4. The **content-page-seo** skill checklist is satisfied (TL;DR, schema, FAQ, dates, links).
5. Page enters `sitemap.xml`; submitted to Google + Bing.

## Extensibility

New content types (grammar lessons, exercises, articles, audio) plug in the same way:
typed object or MDX in `content/`, a route in `app/`, JSON-LD via `lib/schema.ts`, and the
SEO/GEO checklist. Do not fork the pattern per type — extend it.
