# Opiskelen Suomea

Free, public website for learning Finnish — www.opiskelensuomea.com.
Flagship: **Suomi 90**, a structured 3-month program covering the ~1000 most common Finnish
words, made for learners who already have some Finnish but feel stuck. Live and evolving.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS · content as typed data / MDX ·
Cloudflare Workers (via OpenNext `@opennextjs/cloudflare`). Domain/DNS on Cloudflare Registrar.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm run typecheck && npm run lint
```

## How it's organized

- `content/` — source-of-truth teaching data (words, weeks, reading texts).
- `app/` — routes; pages are derived from `content/`.
- `lib/` — types, loaders, JSON-LD/SEO helpers.
- `docs/` — architecture, content model, Finnish-accuracy rules, SEO/GEO, roadmap.
- `.claude/` — Claude Code config: project memory (`../CLAUDE.md`), skills, rules.

## Working on this project (with Claude Code)

Claude Code reads `CLAUDE.md` automatically. Key rules:

1. **Finnish accuracy is non-negotiable** — verify forms against Kielitoimiston sanakirja &
   Wiktionary; never guess. See `docs/FINNISH-ACCURACY.md`. Use the **finnish-word-entry** skill.
2. **Every public page is built for SEO + GEO** — use the **content-page-seo** skill.
3. **Don't block AI crawlers** in `public/robots.txt`.
4. **Content is data; pages are derived.**

New here? Read in this order: `CLAUDE.md` → `docs/ARCHITECTURE.md` → `docs/CONTENT-MODEL.md`
→ `docs/FINNISH-ACCURACY.md` → `docs/SEO-GEO.md` → `docs/ROADMAP.md`.

## License / content

Original teaching content. Source word frequency list informed by public lists (e.g.
wordmastery.org) but independently de-duplicated and corrected — see FINNISH-ACCURACY.md.
