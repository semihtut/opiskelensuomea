---
name: site-design
description: >
  Design, style, and build the visual layer of Opiskelen Suomea — colors, typography,
  spacing, components, layouts, motion. Use this skill WHENEVER creating or editing any UI:
  a page or route under app/, a component, the Tailwind theme/tokens, CSS, choosing fonts or
  colors, building tables/cards/navigation/landing sections, or whenever "design, style, look,
  UI, layout, theme, dark mode, responsive, accessible, brand" comes up — even if not named.
  It defines the committed brand aesthetic and the design tokens that keep the live site
  consistent, distinctive (not generic AI-template), accessible (WCAG 2.2 AA), and fast.
---

# Site Design — Opiskelen Suomea

The aesthetic is **calm Nordic editorial**: a quiet study space, not a flashy app. Warm
paper background, deep ink text, one warm accent, generous whitespace, strong reading
typography, and data tables (declensions) treated as first-class. Reflects the existing
Suomi 90 look — keep the live site consistent with it.

> Core principle (2026): a **brand-owned visual system**, not generic template polish.
> Minimalism alone is not enough — clean structure PLUS character (expressive type, a full
> color system, subtle texture/warmth), applied with discipline. Craft over effect-piling.
> NEVER ship the generic-AI look: no Inter/Roboto/Arial/system-font defaults, no
> purple-gradient-on-white, no decoration overload.

## Design tokens (single source of truth → map into `tailwind.config` + CSS vars)

### Color — light (default, "paper")
```
--bg:        #f4f1e9   /* warm paper page background (not stark white) */
--surface:   #fffdf8   /* cards / raised surfaces */
--ink:       #1c2533   /* primary text — safe AA body color */
--ink-soft:  #4f5a6b   /* secondary text (verify AA on --bg) */
--line:      #e2dccd   /* hairline borders */
--accent:    #b04a2f   /* terracotta: brand, headings, emphasis */
--link:      #285c93   /* link blue (darkened for AA on paper) */
```
### Color — level accents (consistent across the app)
```
A2 = #5a7d4f (sage)   B1 = #2f6aa8 (blue)   B2 = #b04a2f (terracotta)
```
### Color — dark theme (offer it; 2026 expectation). Verify every pair for contrast.
```
--bg:#1a2026  --surface:#232b33  --ink:#ece7da  --ink-soft:#aab3c0
--line:#374049  --accent:#d8744f  --link:#86b4e6
```

**Contrast rule (non-negotiable):** WCAG 2.2 **AA** — ≥4.5:1 for body text, ≥3:1 for large
text (≥24px or ≥19px bold) and UI/non-text. `--ink` is the safe body color. `--accent` and
`--link` are for headings, links, large text, and UI accents — **run a contrast checker**
before using either for small body text; darken if it fails.

### Typography
- **Display / headwords:** a characterful variable serif — **Fraunces** (or Source Serif 4).
  Used for H1/H2 and Finnish lemmas. Gives the editorial, human feel.
- **Body / UI:** a legible humanist sans with character — **Hanken Grotesk** (or Public Sans).
  NOT Inter/Roboto/system.
- **Finnish coverage:** the chosen fonts MUST include Latin-Extended (ä, ö, å). Verify glyphs.
- **Scale** (~1.25 ratio): 14 / 16(body) / 20 / 25 / 31 / 39 / 49px. Body 16–18px.
- **Reading:** line-height 1.6–1.8 for prose; measure ~65–75ch for reading texts/articles.

### Spacing / shape / depth / motion
```
space: 4px base scale (4,8,12,16,24,32,48,64)
radius: 10–14px (cards), 6–8px (chips/buttons)
shadow: soft & low (e.g. 0 8px 22px rgba(28,37,51,.08)); avoid heavy drop shadows
texture: thin --line borders + paper bg create depth — no skeuomorphism
motion: 150–250ms ease; micro-interactions only (hover, expand). Platform-native CSS, not
        heavy JS. NO autoplay video, NO aggressive parallax. ALWAYS honor
        @media (prefers-reduced-motion: reduce).
```

## Layout & component patterns

- **Landing / program overview:** modular **bento grid** (varied-size tiles) over uniform cards.
- **Word page:** the established card pattern — serif lemma, partitive highlight box,
  collapsible full-forms tables, level-badged examples, johdokset, synonyms. Keep it.
- **Declension/conjugation tables:** first-class. Clear header, generous cell padding,
  horizontal scroll on mobile (never squash); the accent color marks the form, ink the label.
- **Reading texts:** comfortable measure, target words emphasized in `--accent`, translation
  in a quiet toggle.
- **Navigation:** week strip + day/section tabs; clear current-state; sticky only if it helps.
- Build **mobile-first**, then enhance; respect safe-area and ≥44px touch targets.

## Accessibility (WCAG 2.2 AA — part of "done", not optional)

- Semantic HTML first; ARIA only where semantics fall short.
- Full **keyboard navigability**; **visible focus ring** (2px `--accent` outline + offset) on
  every interactive element — never `outline:none` without a replacement.
- Contrast per the rule above. Body ≥16px. Don't convey meaning by color alone (badges carry
  a text label too).
- `prefers-reduced-motion`, `prefers-color-scheme` (dark mode), and zoom to 200% all work.
- **Language tagging:** wrap Finnish text in `lang="fi"` and English glosses in `lang="en"`
  so screen readers pronounce correctly (important on a bilingual learning site).

## Performance (a ranking + GEO factor — see SEO-GEO)

- Static-render pages; ship minimal client JS (interactive bits as small islands only).
- Variable fonts, **subset to latin + latin-ext**, `font-display: swap`, preload the display face.
- Reserve space for media (no layout shift); lazy-load below the fold. Target green Core Web Vitals.

## Checklist (before shipping any UI)

- [ ] Uses the tokens above (no ad-hoc colors/fonts); on-brand, not generic-AI.
- [ ] Display serif + humanist sans pairing; ä/ö render correctly.
- [ ] All text/UI passes WCAG 2.2 AA contrast (checked, not assumed).
- [ ] Keyboard works; focus rings visible; meaning not by color alone.
- [ ] Dark mode + reduced-motion + 200% zoom all work.
- [ ] Finnish/English `lang` attributes set.
- [ ] Mobile-first; tables scroll, don't squash; ≥44px targets.
- [ ] Minimal JS; fonts subset; no layout shift; motion subtle and native.

> Design references the existing Suomi 90 prototype for visual continuity. Re-confirm token
> contrast whenever a color changes. When a brand decision is genuinely new (e.g. final font
> licensing), surface it to the owner rather than guessing.
