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
  words/[slug]/page.tsx   per-word page (DefinedTerm + FAQPage)  ← long-tail + citation
  grammar/[slug]/page.tsx grammar guide (MDX)        [future]
  blog/[slug]/page.tsx    article (MDX)              [future]
  about/page.tsx          author / E-E-A-T page

content/
  words/<slug>.ts         one Word per file (source of truth)
  weeks/<n>.ts            Week (days reference word slugs) + ReadingText
  articles/*.mdx          prose                       [future]

lib/
  content-types.ts        the interfaces from docs/CONTENT-MODEL.md
  content.ts              loaders (getWord, getWeek, allWords, neighbours)
  schema.ts               JSON-LD builders (course, definedTerm, faq, itemList, breadcrumb)
  seo.ts                  generateMetadata helpers

components/               WordCard, DeclensionTable, ReadingText, Faq, Breadcrumbs, …
public/                   robots.txt, llms.txt, favicon, og images
docs/                     this folder
.claude/                  CLAUDE.md(root), skills/, rules/
```

## Rendering & performance

- Prefer **static generation** (`generateStaticParams`) for all content pages — fast,
  cacheable, great Core Web Vitals (a ranking + GEO factor).
- Keep client JS minimal; the word card's interactivity (expand, "mark learned") can be a
  small client island; the linguistic content itself is server-rendered HTML (crawlable).
- Persisted user progress (learned words) is optional and client-side first; a synced
  account is a later milestone (see ROADMAP).

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
