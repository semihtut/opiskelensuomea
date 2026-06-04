# Design System — Opiskelen Suomea 2.0 ("Cozy Nordic EdTech")

This document defines the **engagement-first** visual system for the product's shift from a
text-heavy reference site into a modern, gamified learning app centred on **visual memory,
active recall, and motivation**. It supersedes the prior "calm Nordic editorial" tokens while
keeping that warmth as the base.

> Priority order (changed): **1) Finnish accuracy → 2) Learner delight & engagement →
> 3) Accessibility (WCAG 2.2 AA) → 4) SEO/GEO.** SEO is no longer allowed to make the
> experience feel sparse or text-dumpy. Public reference pages (word pages) still ship
> server-rendered, schema-rich HTML for discovery; the *learning* surfaces (dashboard,
> flashcard sessions, roadmap) are app-like and may be client-rendered. See "SEO balance".

---

## 1. Visual concept & palette

**Concept:** _A warm Nordic study desk that quietly celebrates progress._ Spacious, paper-warm
canvas (Scandinavian calm) + a confident **teal** for action and a **terracotta** for warmth,
plus a small, disciplined gamification spectrum (green/amber/gold) used only to reward.
Illustration-forward: every word carries a minimalist icon so meaning is dual-coded.

### Light theme (default) — all pairs WCAG 2.2 AA-verified
```
/* Base — Scandinavian calm */
--canvas:      #F4F1E9   /* warm paper page background */
--surface:     #FFFDF8   /* cards / sheets */
--elevated:    #FFFFFF   /* raised interactive cards (flashcards) */
--ink:         #1C2533   /* primary text — 15.2:1 on surface */
--ink-soft:    #545E6F   /* secondary text — 6.4:1 */
--line:        #E7E1D4   /* hairlines */

/* Brand & interactive (warm/cool duality) */
--accent:      #B8472B   /* terracotta — brand warmth, headwords, emphasis (5.2:1) */
--primary:     #0E7C86   /* teal — actions, links, focus, progress (4.9:1) */

/* Gamification spectrum (reward only, never decoration overload) */
--success:     #2C7F54   /* "osaan / correct" green (4.8:1 text, 4.9:1 white-on) */
--amber:       #E8913C   /* streak / energy — FILL with ink text only */
--amber-deep:  #A86326   /* amber as text/icon/line on light (4.6:1) */
--gold:        #D8A53C   /* XP / medal shine — FILL with ink text only */
--again:       #C2503A   /* mistake / "kertaa" — soft clay, non-punishing (4.6:1) */

/* CEFR level accents (badges, roadmap phases) — a journey gradient */
--lvl-a1: #0E7C86  /* teal  */
--lvl-a2: #2C7F54  /* green */
--lvl-b1: #2F6AA8  /* blue  */
--lvl-b2: #B8472B  /* terracotta */
```

### Dark theme — verified
```
--canvas:#14181D  --surface:#1E242B  --elevated:#262E36
--ink:#ECE7DA  --ink-soft:#A6B0BD  --line:#333C45
--accent:#E0744E  --primary:#4FB3BE
--success:#5FB888  --amber:#F0A85A  --gold:#E6C168  --again:#E07A5F
--lvl-a1:#4FB3BE  --lvl-a2:#5FB888  --lvl-b1:#86B4E6  --lvl-b2:#E0744E
```

**Contrast rules (non-negotiable):** body text ≥4.5:1, large/icon/UI ≥3:1. `--ink` is the safe
body color. `--amber`/`--gold` are **fills with ink text only** (white-on-amber fails); for amber
as text/icon use `--amber-deep`. Re-run the checker (`/tmp/palette.mjs` pattern) on any change.

### Usage intent
- **Teal `--primary`** = "do something" (buttons, links, progress rings, focus ring).
- **Terracotta `--accent`** = identity & emphasis (logo, headwords, section headings).
- **Green** = success/known. **Amber** = streak/energy. **Gold** = milestone/XP. **Clay** = retry.
- Keep gamification color < ~10% of any screen — it pops *because* the base is calm.

---

## 2. Typography

Keep the distinctive editorial pairing (already loaded, full latin-ext for ä/ö/å):

- **Display / headwords / big numbers:** **Fraunces** (variable serif). Finnish lemmas on
  flashcards, hero headline, large gamified counts. Optical size + slight `WONK` gives character.
- **UI / body / labels:** **Hanken Grotesk** (humanist sans). Buttons, tables, captions, stats.
  Use **800 weight** for streak/XP numbers to feel energetic without a third font.

Scale (1.25): `13 / 14 / 16(body) / 20 / 25 / 31 / 39 / 49 / 61px`. Body 16–18px; reading
measure 65–75ch. Numerals: enable `tabular-nums` on counters/tables so digits don't jitter.

> Alternative app-forward pairing if a fresher feel is wanted later: **Clash Display**
> (headwords) + **Hanken Grotesk** (UI). Default stays Fraunces+Hanken for brand continuity.

---

## 3. Shape, depth, motion

```
radius:  card 16px · flashcard 20px · chip/button 10px · pill 999px
shadow:  rest  0 6px 18px rgba(28,37,51,.07)
         hover 0 14px 34px rgba(28,37,51,.12)
         flashcard-lift 0 20px 48px rgba(28,37,51,.16)
motion:  micro 120ms · standard 200ms · flip 480ms · spring for celebrate
easing:  standard cubic-bezier(.2,.8,.2,1) ; flip cubic-bezier(.2,.7,.2,1)
texture: thin --line borders + paper canvas (no skeuomorphism)
```
**Always** honor `prefers-reduced-motion` — replace 3D flips with a 150ms cross-fade, disable
confetti, keep progress fills instant.

---

## 4. Component inventory

**Primitives:** `Button` (primary/secondary/ghost/icon/destructive), `Chip`, `LevelBadge`,
`Tag`, `Tooltip`, `Modal`, `Sheet` (mobile bottom-sheet), `Toast`, `Confetti` (celebrate),
`IconTile`, `AudioButton`, `Tabs`, `Segmented`, `Skeleton`.

**Learning:** `Flashcard` (+ `FlashcardFront`, `FlashcardBack`, `FlipShell`), `DeckProgress`,
`SessionBar`, `AnswerControls` (Again / Hard / Good / Easy), `WordIcon` (illustration),
`ExampleRow` (level-badged), `InflectionTable`, `PartitiveCallout`.

**Gamification:** `ProgressRing` (daily 12), `StreakFlame`, `XpBar`, `Badge`/`Medallion`
(locked/unlocked), `BadgeShelf`, `RoadmapNode`, `RoadmapPath`, `PhaseHeader`, `LevelUpModal`,
`StatTile`.

**Dashboard/shell:** `Header` (with streak + XP), `Footer`, `Breadcrumbs`, `Hero`,
`DailyGoalCard`, `ContinueCard`, `ReviewMistakesCard`, `WeekStrip`, `Greeting`.

---

## 5. Flashcard UI (the centerpiece)

Replace plain word lists with a **two-sided learning card**. One concept per card; minimal text
on the front to force recall.

### Front (recall prompt)
```
┌──────────────────────────────┐
│                       [A2]   │   ← level badge (top-right)
│         ╭────────╮           │
│         │  🏠    │           │   ← WordIcon: minimalist vector for meaning
│         ╰────────╯           │
│                              │
│          talo                │   ← Fraunces, 49px, --accent
│        🔊 (kuuntele)         │   ← AudioButton (IPA/audio)
│                              │
│   Napauta → näe taivutus     │   ← hint, --ink-soft
└──────────────────────────────┘
```

### Back (full info, revealed on flip)
```
┌──────────────────────────────┐
│ talo  ·  house        [A2]   │
│ ── Partitiivi ──────────────  │
│  yks. taloa    mon. taloja   │  ← terracotta PartitiveCallout
│ ── Taivutus ────────────────  │
│  Nom.  talo     talot        │
│  Gen.  talon    talojen      │  ← InflectionTable (sg | pl)
│  Part. taloa    taloja       │
│ ── Esimerkit ───────────────  │
│  [A2] Tämä on iso talo.      │
│  [B1] Muutimme uuteen taloon.│  ← ExampleRow ×3, level-badged
│ ─────────────────────────────│
│  [ Kertaa ]  [ Osaan ✓ ]     │  ← AnswerControls (clay / success)
└──────────────────────────────┘
```

### Interaction states
- **Rest:** `--elevated` surface, `--line` border, rest shadow.
- **Hover (pointer):** lift `translateY(-4px)` + hover shadow + 1.5° tilt toward cursor (subtle,
  capped); icon scales 1.04. Signals "interactive, flippable."
- **Focus:** 2px `--primary` focus ring + offset (keyboard parity; card is a `button`/`[role]`).
- **Click / Space / Enter:** **3D flip** — `transform: rotateY(180deg)` on an inner wrapper with
  `transform-style: preserve-3d`, faces `backface-visibility: hidden`, `perspective: 1200px`,
  480ms `cubic-bezier(.2,.7,.2,1)`. Front and back are absolutely stacked.
- **Mobile swipe (in a session):** swipe-right = "Osaan" (success glow + card flies right),
  swipe-left = "Kertaa" (clay glow). Buttons mirror this for non-swipe users.
- **Known:** green check stamp + card de-emphasizes; **Again:** clay edge, re-queued sooner.
- **Reduced motion:** no rotate/tilt/swipe-fly — cross-fade faces (150ms), keep all controls.

Cognitive-load reductions: one prompt per card; image before text; reveal-on-demand (back hidden
until recall attempted); max 3 examples; tables scroll, never squash.

---

## 6. Gamification & progress

### Daily goal — `ProgressRing`
Circular SVG ring for the "12 sanaa/päivä" goal. Center shows `7/12` (Fraunces) + label
"tänään". Track `--line`, fill `--primary` (or the active week's level color), 0→100% animates
on mount (goal-gradient nudge). At 12/12 → ring pulses gold + `Confetti` + toast "Päivän tavoite
valmis! 🎉". Sizes: 40px (header mini), 96px (dashboard), 160px (session complete).

### Program — `RoadmapNode` + `RoadmapPath`
A professional, **vertical serpentine path** (not childish bubbles) of 13 week-nodes, grouped
under 3 `PhaseHeader`s tinted by phase level color. Each week-node expands to 6 day-dots + a
review star.
```
   ◉ Reaktivointi  (teal)
   │
   ●──1  Arjen sanat        ✓✓✓✓✓✓★   ← completed (filled, check)
   │
   ●──2  Ihmiset & perhe    ●●●○○○ ·   ← current (ring pulse, "Jatka →")
   │
   ◌──3  Koti & arki        locked     ← locked (muted, lock icon)
   ⋮
   ◉ Laajennus     (blue)
   ⋮
   ◉ Sujuvuus      (terracotta)
```
Node states: `locked` (muted `--ink-soft`, lock), `current` (pulsing `--primary` ring, primary
CTA), `completed` (filled level color + check). Connector fills as you advance (visible momentum).

### Streak, XP, badges
- **`StreakFlame`**: amber flame + day count (Fraunces 800). Lit when today's goal met; a faded
  flame + "Älä katkaise! " nudge protects the streak (loss-aversion, used gently).
- **`XpBar`**: thin pill, fills `--gold`; +XP per word learned / text finished; small level-up.
- **`Badge`/`Medallion`**: circular medal. **Locked** = grayscale + low opacity + lock.
  **Unlocked** = level/gold color, thin shine sweep on unlock, name + criteria in a `Modal`.
  Triggers: finish a weekly **lukuteksti** ("Viikon lukija"), complete a phase ("Reaktivointi
  suoritettu"), streak milestones (7/30/90 days), 100/500/1000 words. `BadgeShelf` on dashboard
  + /about-style profile.

---

## 7. Dashboard & Hero layout

### Logged-out Hero (acquisition)
```
┌─────────────────────────────────────────────────────────────┐
│  Opi suomen 1000 yleisintä sanaa          ┌───────────────┐  │
│  kolmessa kuukaudessa.                    │  LIVE flashcard│  │
│  Tehty oppijoille, jotka osaavat jo       │  (flips on     │  │
│  vähän mutta haluavat eteenpäin.          │   hover/tap)   │  │
│                                           │   🏠 talo  [A2]│  │
│  [ Aloita ilmaiseksi ]  [ Selaa sanoja ]  └───────────────┘  │
│  ~1000 sanaa · 13 viikkoa · 12 sanaa/päivä · lukutekstit     │
└─────────────────────────────────────────────────────────────┘
        ↓ below: 3 phase tiles · sample roadmap peek · "näin se toimii"
```

### Logged-in Dashboard (the home for returning learners)
Primary actions dominate the top fold; progress is glanceable.
```
┌─────────────────────────────────────────────────────────────┐
│  Header:  logo        ProgressRing(7/12)  🔥12  XP▓▓▓░  ☾    │
├─────────────────────────────────────────────────────────────┤
│  Hei, Semih! 👋   ┌───────────────────────────────────────┐ │
│  Viikko 2, Päivä 3│   BUGÜN / TÄNÄÄN                       │ │
│                   │   ◐ 7/12 sanaa   [ Jatka — 5 jäljellä]│ │  ← DailyGoalCard (hero CTA)
│                   └───────────────────────────────────────┘ │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────┐    │
│  │ Kertaa      │ │ Viikon      │ │ Jatka kohdasta:     │    │
│  │ virheet (4) │ │ lukuteksti  │ │ "Ihmiset & perhe" → │    │  ← Review / Reading / Continue
│  └─────────────┘ └─────────────┘ └─────────────────────┘    │
│  Edistyminen ─ RoadmapPath (compact, current week centered)  │
│  Rozetit ─ BadgeShelf (recent 4 + "katso kaikki")           │
└─────────────────────────────────────────────────────────────┘
```
Three top CTAs, in priority order: **Today's 12** (biggest), **Review mistakes**, **Continue**.
Reading text + roadmap + badges fill the rest so nothing feels empty.

### Word reference page (kept for SEO, upgraded visually)
Same data, now rendered as a **static Flashcard-styled card** (icon + headword + partitive +
collapsible inflection + examples + FAQ), server-rendered with all JSON-LD intact. The
interactive flip/session lives at `/learn`; the `/words/[slug]` page stays crawlable.

---

## 8. Psychological rationale (why this accelerates learning)

1. **Dual coding (Paivio).** Word + minimalist icon stores the meaning in both verbal and
   visual memory → markedly better recall than text alone. This is the core upgrade.
2. **Active recall + testing effect.** The flip *forces* a retrieval attempt before showing the
   answer; retrieval practice beats re-reading for long-term retention.
3. **Spaced repetition.** Again/Good controls feed a review queue; "Kertaa virheet" resurfaces
   weak items at expanding intervals — the strongest known lever for durable memory.
4. **Goal-gradient + endowed progress.** The 12-word ring and a path that's already partly
   filled increase effort as the goal nears; people finish what looks nearly done.
5. **Chunking & cognitive load.** 12 words/day + one-concept cards keep working memory unloaded,
   so attention goes to learning, not navigating.
6. **Habit via streaks (loss aversion, applied gently).** A visible streak creates a daily cue;
   protecting it drives return visits — for a *mature* audience we nudge, never guilt-trip.
7. **Variable reward & competence (SDT).** Badges and level-ups give intermittent, earned
   rewards that satisfy the need for competence and autonomy, sustaining intrinsic motivation.
8. **Zeigarnik effect.** "Continue where you left off" leverages the pull of unfinished tasks.
9. **Immediate feedback.** Instant correct/again signals tighten the learning loop and reduce
   fossilised errors — critical for a teaching product where accuracy is the brand.

---

## SEO balance (intentional trade-off)

We deliberately prioritise engagement over maximal SEO on *learning* surfaces. Mitigations so we
don't lose discovery:
- **Word reference pages** (`/words`, `/words/[slug]`) remain **server-rendered, schema-rich,
  canonical-www** — they are the long-tail acquisition + GEO citation asset and keep the
  content-page-seo checklist.
- Interactive surfaces (`/dashboard`, `/learn`, roadmap) are app-like; fine to be client-heavy
  and even `noindex` where they require progress state.
- Keep Core Web Vitals green: ship interactivity as **islands**, lazy-load below the fold,
  reserve space for icons/illustrations (no layout shift), variable fonts subset to latin-ext.

> Accuracy remains the #1 non-negotiable. Engagement is #2. Accessibility (AA) is a release gate,
> not optional. SEO is #4 — pursued where it doesn't make the app feel like a document.
