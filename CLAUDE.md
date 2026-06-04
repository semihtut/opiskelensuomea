# CLAUDE.md — Opiskelen Suomea

> Claude Code loads this file at the start of every session. It is the project's
> source of truth. Keep it short and factual. Multi-step procedures live in
> `.claude/skills/`; deep reference lives in `docs/`. CLAUDE.md wins on conflicts.

## Project

**Opiskelen Suomea** (www.opiskelensuomea.com) is a free, public website for learning Finnish.
Its flagship is **Suomi 90** — a structured 3-month (13-week / 90-day) program covering the
~1000 most common Finnish words, built for "false beginners": people who already have some
Finnish but feel stuck and never quite proficient. This is a **live, evolving product** —
it will grow well beyond vocabulary (grammar guides, reading texts, exercises, audio, articles).
Build for extension, not a one-off.

## Tech stack (decided — do not change without asking)

- **Next.js 15 (App Router) + TypeScript**, statically generated where possible.
- **Tailwind CSS** for styling.
- **Content as typed data**: TS/JSON modules for structured content (words, weeks);
  MDX for prose (articles, grammar guides). No CMS yet.
- **Cloudflare** for everything: domain + DNS on **Cloudflare Registrar**, hosting on
  **Cloudflare Workers** via the **OpenNext adapter** (`@opennextjs/cloudflare`). CI via
  **Workers Builds** (connect the GitHub repo). NOT Vercel, NOT Cloudflare Pages
  (`next-on-pages` is deprecated). Deploy details: `docs/DEPLOYMENT.md`.
- Aim for excellent **Core Web Vitals** (static pages, no client JS where not needed).

## Commands

```
npm run dev        # local dev server (next dev)
npm run build      # production build (next build)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm test           # tests, if/when present
npm run preview    # opennextjs-cloudflare build && wrangler dev  (run on Workers locally)
npm run deploy     # opennextjs-cloudflare build && wrangler deploy
```
(Adjust if the repo uses pnpm/bun. Prefer running a single file's tests over the full suite.
 Cloudflare deploy specifics — OpenNext config, nodejs_compat, image loader — in docs/DEPLOYMENT.md.)

## Repo layout

```
app/                 Next.js routes (App Router)
  program/           /program pillar page
  week/[n]/          week pages (+ /week/[n]/text reading text)
  words/             /words index + /words/[slug] per-word pages
content/             typed content data (see docs/CONTENT-MODEL.md)
  words/             one source of truth per word
  weeks/             week definitions + reading texts
components/          shared UI
lib/                 schema (JSON-LD), data loaders, helpers
public/              robots.txt, llms.txt, static assets
docs/                architecture, content model, SEO/GEO, roadmap, accuracy
.claude/             skills + path-scoped rules
```

## Non-negotiable rules

1. **Finnish correctness comes before everything.** This is a public teaching product;
   a wrong case ending or conjugation embarrasses the owner and misleads learners.
   - NEVER invent or guess a form. If a paradigm is non-trivial (consonant gradation,
     irregular comparison, `-ida` verbs, etc.), **verify it** against Kielitoimiston
     sanakirja and Wiktionary before committing.
   - The source word list (wordmastery.org) contains duplicates and errors — never copy
     it blindly. See `docs/FINNISH-ACCURACY.md` for the verification protocol and the
     catalogue of known source errors to avoid.
   - When creating word entries, use the **finnish-word-entry** skill.
2. **Every public page is built for SEO + GEO and on-brand.** Answer-first TL;DR, correct
   single H1, JSON-LD schema, FAQ block, visible author + published/updated dates, internal
   links, canonical URL. When creating/editing a public page, use the **content-page-seo**
   skill; for its visual layer use the **site-design** skill (brand tokens, WCAG 2.2 AA, fast).
3. **Do not block AI crawlers.** `public/robots.txt` must keep GPTBot, OAI-SearchBot,
   PerplexityBot, ClaudeBot, Google-Extended, Applebot allowed. Blocking = invisible to
   that engine. Do not edit robots.txt to disallow them.
4. **Content is data, pages are derived.** Add/maintain a word in `content/`, never
   hard-code linguistic content inside a React component. Pages render from the typed data.

## Conventions

- **Canonical host is `https://www.opiskelensuomea.com` (with `www`).** Use it everywhere:
  every canonical tag, JSON-LD `url`/`@id`, `sitemap.xml` entries, the robots.txt `Sitemap:`
  line, OpenGraph URLs, and internal absolute links. 301-redirect the bare apex
  (`opiskelensuomea.com`) → `www` with a **Cloudflare Redirect Rule** (Rules → Redirect
  Rules in the dashboard). Never mix hosts (it splits SEO/GEO authority).
- TypeScript strict. No `any` in content/data types.
- Word entries follow the `Word` interface in `docs/CONTENT-MODEL.md` exactly.
- Slugs: lowercase Finnish lemma, ä/ö preserved (`/words/talo`, `/words/syödä`).
- Each content item carries `updatedAt`; surface it on the page and in JSON-LD `dateModified`.
- Commit messages: imperative mood, scope prefix (`words:`, `seo:`, `ui:`, `docs:`).

## Where to look

- How to add a word → `.claude/skills/finnish-word-entry/SKILL.md`
- How to ship an optimized page → `.claude/skills/content-page-seo/SKILL.md`
- How to design/style any UI → `.claude/skills/site-design/SKILL.md`
- Data shapes → `docs/CONTENT-MODEL.md`
- Linguistic rules + verification → `docs/FINNISH-ACCURACY.md`
- Site structure / pipeline → `docs/ARCHITECTURE.md`
- Hosting / deploy (Cloudflare Workers + OpenNext) → `docs/DEPLOYMENT.md`
- Discoverability strategy → `docs/SEO-GEO.md`
- What to build next → `docs/ROADMAP.md`
