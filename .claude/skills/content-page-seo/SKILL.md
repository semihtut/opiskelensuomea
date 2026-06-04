---
name: content-page-seo
description: >
  Build or update any public-facing page on Opiskelen Suomea (word pages, week/day pages,
  the program pillar page, grammar guides, reading texts, articles) so it ranks in search
  and gets cited by AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews).
  Use this skill WHENEVER creating, editing, or reviewing a route under app/, adding a new
  content type, touching page metadata or JSON-LD, or whenever SEO, GEO, AEO, schema markup,
  meta tags, sitemap, or "getting found / cited" comes up — even if not explicitly named.
  It encodes the answer-first structure, schema blocks, and crawl requirements.
---

# Content Page SEO / GEO

Goal: be both indexable (SEO) and quotable by AI answer engines (GEO). Traditional SEO
authority is still the primary credibility signal AI uses, so do both — never one alone.
Full strategy + copy-paste schema in `docs/SEO-GEO.md`.

## Apply to EVERY public page

1. **Answer-first.** First visible block is a 2–3 sentence TL;DR that directly answers the
   page's core question. This is what AI extracts. Put the conclusion first, evidence after.
2. **One H1**, descriptive, keyword-bearing (`talo — "house" in Finnish`). Logical H2/H3.
3. **Descriptive slug** matching the lemma/topic; set a **canonical** URL.
4. **Structured data (JSON-LD)** for the page type:
   - Word page → `DefinedTerm` (+ `inDefinedTermSet`) **and** a `FAQPage` block.
   - Program → `Course` (+ `syllabusSections`, `hasCourseInstance`).
   - Lists/index → `ItemList`. Reading text/article → `Article`/`LearningResource`.
   - Always add `BreadcrumbList` and an `author` (`Person`) + `Organization`.
   - Keep `dateModified` in sync with the content's `updatedAt`.
5. **FAQ section** (visible) mirroring the `FAQPage` schema — 2–4 real questions a learner
   would ask ("What is the partitive of X?", "How do you say 'into the house'?").
6. **Data tables** for anything tabular (declension/conjugation). AI cites tables heavily.
7. **Visible E-E-A-T:** author byline + published date + updated date in the footer.
8. **Internal links:** prev/next word, up to its day/week, related words. Build the mesh.
9. **Next.js metadata:** implement `generateMetadata` (title, description, canonical,
   openGraph, `article:modified_time`). Static-render where possible.

## Crawl & infra (verify once, then keep intact)

- `public/robots.txt` keeps AI bots **allowed** (GPTBot, OAI-SearchBot, PerplexityBot,
  ClaudeBot, Google-Extended, Applebot). Never disallow them.
- `sitemap.xml` generated and submitted to **Google Search Console AND Bing Webmaster Tools**
  (ChatGPT's live search is Bing-backed — Bing indexing is a prerequisite for ChatGPT citations).
- `public/llms.txt` kept short (20–50 curated links). Do NOT generate indexable markdown
  copies of every page (duplicate content hurts rankings).

## Page checklist (before shipping)

- [ ] Answer-first TL;DR present and accurate.
- [ ] Single descriptive H1; canonical set.
- [ ] Correct JSON-LD type + FAQPage + Breadcrumb + author/Organization.
- [ ] Visible FAQ; data tables where relevant.
- [ ] Author + published + updated visible; `dateModified` synced.
- [ ] Internal links to neighbours; metadata via `generateMetadata`.
- [ ] No AI bot is blocked in robots.txt.

Note: GEO is fast-moving. Re-check `docs/SEO-GEO.md` assumptions (engine behaviour,
llms.txt status) roughly quarterly.
