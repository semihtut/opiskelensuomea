# SEO & GEO Strategy

Two goals: rank in search (SEO) and get **cited by AI answer engines** (GEO) — ChatGPT,
Perplexity, Gemini, Google AI Overviews. As of early–mid 2026, AI search handles a large and
fast-growing share of informational queries, so both matter. Traditional SEO authority is
still the primary credibility signal AI uses, so never do GEO instead of SEO — do both.

> This is a fast-moving area. Re-validate the specifics (engine behaviour, llms.txt status)
> roughly **quarterly**.

## Don't chase the head term

"learn Finnish" is dominated by incumbents. Win on:
- **Long-tail, per-word pages** — ~900 pages like "talo declension", "partitive of vesi",
  "syödä conjugation". High intent, low competition, and clean citation targets.
- **Program intent** — "3 month Finnish plan", "Finnish A2 to B1", "how to get unstuck in Finnish".
- **GEO** — be the source AI quotes for those questions.

The per-word pages are the core asset; they come free from content we already have.

## On-page (every public page) — see content-page-seo skill

Answer-first TL;DR → single descriptive H1 → JSON-LD (DefinedTerm/Course/Article + FAQPage +
Breadcrumb + author/Organization) → visible FAQ → data tables → visible author + published +
updated → internal links → canonical → `generateMetadata`.

## Technical / crawl

- **Canonical host: `https://www.opiskelensuomea.com` (with `www`).** 301-redirect the bare
  apex to it. Every canonical tag, JSON-LD URL, sitemap entry, robots `Sitemap:` line, and
  absolute internal link uses the `www` host. One host only — mixing www/non-www splits
  ranking and citation authority.
- `public/robots.txt`: **allow** GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot,
  Google-Extended, Applebot. Blocked = invisible to that engine (binary). Never disallow.
- `sitemap.xml` → submit to **Google Search Console AND Bing Webmaster Tools**. ChatGPT's
  live search is Bing-backed, so Bing indexing is a prerequisite for ChatGPT citations.
- Core Web Vitals: static pages, minimal JS.
- `public/llms.txt`: short curated index (20–50 links). Low cost, currently low yield (no
  major provider confirmed using it in production as of Q1 2026) — ship it for optionality,
  but **never** generate indexable per-page markdown copies (duplicate content hurts ranking).

## Off-page — the real GEO lever

Brand mentions are the strongest predictor of AI citation; Reddit and Wikipedia are among the
most-cited sources. So:
- Post genuinely useful answers in r/Finnish, r/LearnFinnish, language forums (link sparingly).
- Get listed in "best resources/sites/apps to learn Finnish" roundups.
- A real author identity (`/about`, byline, dates) — E-E-A-T.

## Measurement

Baseline ~30 queries across ChatGPT / Perplexity / Gemini / Google AI Overviews (mix of word,
program, and question intents). Record where you're cited vs competitors. Re-check monthly;
double down on the page types that start getting cited.

## Schema reference

Builders live in `lib/schema.ts`. Copy-paste JSON-LD blocks (Course, DefinedTerm, FAQPage,
ItemList, Breadcrumb), the robots.txt, and the llms.txt template are in this repo's
`public/` files and were drafted in the SEO/GEO implementation pack.
