---
name: site-design
description: >
  Design, style, and build the visual layer of Opiskelen Suomea — colors, typography,
  spacing, components, layouts, motion, AND the gamified learning UI (flashcards, progress
  rings, roadmap, badges, dashboard). Use this skill WHENEVER creating or editing any UI:
  a page or route under app/, a component, the Tailwind theme/tokens, CSS, choosing fonts or
  colors, building flashcards/cards/tables/navigation/landing sections, progress/gamification
  bits, or whenever "design, style, look, UI, UX, layout, theme, dark mode, responsive,
  accessible, gamification, flashcard, animation, brand" comes up — even if not named.
  It defines the committed brand aesthetic and tokens that keep the live app consistent,
  distinctive, engaging, accessible (WCAG 2.2 AA), and fast. Full spec: docs/DESIGN-SYSTEM.md.
---

# Site Design — Opiskelen Suomea 2.0 ("Cozy Nordic EdTech")

The product is shifting from a text-heavy reference site to a **gamified, visual learning app**.
Aesthetic: **warm Nordic calm + earned motivation** — spacious paper canvas, a confident teal
for action, a terracotta for warmth, illustration-forward cards, and a disciplined reward
spectrum. Full rationale, wireframes, and component inventory live in **`docs/DESIGN-SYSTEM.md`**
— read it before building learning/gamification UI.

> **Priority order (NEW):** 1) Finnish accuracy → 2) Learner delight & engagement →
> 3) Accessibility (WCAG 2.2 AA) → 4) SEO/GEO. Never let SEO make a screen feel like a text
> dump. Public word pages stay server-rendered + schema-rich; learning surfaces are app-like.
> Core principle: a **brand-owned** system, clean structure PLUS character. Never the generic-AI
> look (no Inter/Roboto/system defaults, no purple-gradient-on-white, no decoration overload).

## Tokens (single source of truth → tailwind.config + CSS vars) — all AA-verified

### Light
```
--canvas:#F4F1E9  --surface:#FFFDF8  --elevated:#FFFFFF
--ink:#1C2533  --ink-soft:#545E6F  --line:#E7E1D4
--accent:#B8472B (terracotta: brand/headwords/emphasis)
--primary:#0E7C86 (teal: actions/links/focus/progress)
--success:#2C7F54  --amber:#E8913C (+ --amber-deep:#A86326 for text)  --gold:#D8A53C  --again:#C2503A
level: A1 #0E7C86 · A2 #2C7F54 · B1 #2F6AA8 · B2 #B8472B
```
### Dark
```
--canvas:#14181D --surface:#1E242B --elevated:#262E36 --ink:#ECE7DA --ink-soft:#A6B0BD --line:#333C45
--accent:#E0744E --primary:#4FB3BE --success:#5FB888 --amber:#F0A85A --gold:#E6C168 --again:#E07A5F
level: A1 #4FB3BE · A2 #5FB888 · B1 #86B4E6 · B2 #E0744E
```
**Contrast (non-negotiable, CHECK don't assume):** body ≥4.5:1, large/icon/UI ≥3:1. `--ink` is
the safe body color. `--amber`/`--gold` are **fills with ink text only** (white-on-amber fails);
use `--amber-deep` for amber as text/icon. Re-run a contrast checker on every color change.

### Typography
- **Display / headwords / big numbers:** **Fraunces** (variable serif; Finnish lemmas, headlines).
- **UI / body:** **Hanken Grotesk** (humanist sans; 800 weight for streak/XP numbers).
- Fonts MUST include **latin-ext** (ä/ö/å). Scale 1.25: 13/14/16/20/25/31/39/49/61. Body 16–18px,
  reading 65–75ch. `tabular-nums` on counters/tables.

### Shape · depth · motion
```
radius: card 16 · flashcard 20 · chip/button 10 · pill 999
shadow: rest 0 6px 18px rgba(28,37,51,.07) · hover 0 14px 34px /.12 · lift 0 20px 48px /.16
motion: micro 120ms · standard 200ms · flip 480ms · easing cubic-bezier(.2,.8,.2,1)
```
ALWAYS honor `prefers-reduced-motion` (flip→cross-fade, no confetti) and `prefers-color-scheme`.

## Signature components (see DESIGN-SYSTEM.md for full inventory & wireframes)
- **Flashcard**: icon + serif headword + audio on front; partitive callout + inflection table +
  level-badged examples + Again/Osaan controls on back. 3D flip on click (rotateY 180°,
  preserve-3d, backface-hidden, perspective 1200px); hover lift + slight tilt; swipe in sessions.
- **ProgressRing** (daily 12), **RoadmapNode/Path** (serpentine 13-week, 3 phase colors,
  locked/current/completed), **StreakFlame**, **XpBar**, **Badge/Medallion** (locked grayscale →
  unlocked color + shine), **DailyGoalCard / ContinueCard / ReviewMistakesCard** (dashboard CTAs).
- **WordIcon**: one minimalist vector per word (dual coding). **LevelBadge**: filled chip, color
  + text label (never color alone).

## Layout & UX patterns
- **Dashboard-first for returning users:** top fold = three CTAs in priority order — *Today's 12*
  (largest), *Review mistakes*, *Continue where you left off* — plus streak/XP/ring in the header.
- **Landing/Hero:** benefit headline + two CTAs + a live demo flashcard; phase tiles + roadmap peek below.
- **Word reference page:** keep it, render as a static flashcard-styled card (server-rendered,
  schema-rich, canonical www). Interactive flip/sessions live at `/learn`.
- Mobile-first, ≥44px targets, tables scroll (never squash), respect safe-area.

## Accessibility (release gate, not optional)
- Semantic HTML; ARIA only where needed. Cards/controls are real buttons with **visible focus ring**
  (2px `--primary` + offset). Flip/swipe have keyboard parity (Space/Enter, Again/Osaan buttons).
- Contrast per rule above. Meaning never by color alone (badges + reward states carry text/icon).
- `prefers-reduced-motion`, dark mode, 200% zoom all work. Tag Finnish `lang="fi"`, glosses `lang="en"`.

## Performance (keep CWV green)
- Interactivity as **islands**; learning content/illustrations server-render where public.
- Variable fonts subset latin+latin-ext, `font-display: swap`, preload display face.
- Reserve space for icons/cards (no layout shift); lazy-load below the fold; SVG icons (tiny).

## Checklist (before shipping any UI)
- [ ] Uses the tokens above; on-brand, not generic-AI; engagement-forward (not a text dump).
- [ ] Fraunces + Hanken; ä/ö render; `tabular-nums` on numbers.
- [ ] All text/UI passes WCAG 2.2 AA contrast (checked, not assumed).
- [ ] Keyboard + focus rings; flip/swipe have button parity; meaning not by color alone.
- [ ] Dark mode + reduced-motion + 200% zoom work.
- [ ] Mobile-first; ≥44px targets; tables scroll; minimal JS islands; no layout shift.

> When a brand decision is genuinely new (final font licensing, illustration style/source),
> surface it to the owner rather than guessing. Re-confirm token contrast whenever a color changes.
