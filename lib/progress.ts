import type { CardStatus, DailyStat, UserProgress, WordProgress } from "./content-types";

/**
 * Client-side progress store (localStorage). Pure functions, no React — the
 * useProgress hook wraps these. Account-synced backend is a later milestone.
 * See docs/CONTENT-MODEL.md (UserProgress) and docs/DESIGN-SYSTEM.md.
 */
export const DAILY_GOAL = 12;
export const XP_PER_WORD = 10;
const STORAGE_KEY = "os_progress_v1";

// Spaced-repetition interval (days) by status — simple, refined in a later milestone.
const DUE_DAYS: Record<CardStatus, number> = { new: 0, learning: 1, known: 3, again: 0 };

function todayIso(): string {
  return new Date().toISOString().slice(0, 10);
}

function isoDaysAgo(n: number): string {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

export function emptyProgress(): UserProgress {
  return {
    words: {},
    daily: [],
    streak: 0,
    xp: 0,
    unlockedBadges: [],
    currentWeek: 1,
    currentDay: 1,
  };
}

export function loadProgress(): UserProgress {
  if (typeof window === "undefined") return emptyProgress();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? { ...emptyProgress(), ...JSON.parse(raw) } : emptyProgress();
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(p: UserProgress): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* storage full / blocked — progress is best-effort */
  }
}

/** Today's DailyStat (read-only; not persisted unless something is marked). */
export function todayStat(p: UserProgress): DailyStat {
  return (
    p.daily.find((d) => d.date === todayIso()) ?? {
      date: todayIso(),
      learned: 0,
      goal: DAILY_GOAL,
    }
  );
}

function metGoal(p: UserProgress, dateStr: string): boolean {
  const s = p.daily.find((d) => d.date === dateStr);
  return !!s && s.learned >= s.goal;
}

// Streak = consecutive days meeting the goal, ending today (or yesterday for grace).
function recomputeStreak(p: UserProgress): void {
  let streak = 0;
  let offset = metGoal(p, todayIso()) ? 0 : 1;
  while (metGoal(p, isoDaysAgo(offset))) {
    streak += 1;
    offset += 1;
  }
  p.streak = streak;
}

/** Record an answer for a word; returns a NEW progress object (immutable). */
export function markWord(prev: UserProgress, slug: string, status: CardStatus): UserProgress {
  const p: UserProgress = JSON.parse(JSON.stringify(prev));
  const before = p.words[slug];
  const wasKnown = before?.status === "known";

  const wp: WordProgress = {
    slug,
    status,
    seen: (before?.seen ?? 0) + 1,
    lastReviewed: todayIso(),
    dueAt: isoDaysAgoToFuture(DUE_DAYS[status]),
  };
  p.words[slug] = wp;

  // Count toward the daily goal + XP only on first transition into "known" today.
  if (status === "known" && !wasKnown) {
    let stat = p.daily.find((d) => d.date === todayIso());
    if (!stat) {
      stat = { date: todayIso(), learned: 0, goal: DAILY_GOAL };
      p.daily.push(stat);
    }
    stat.learned += 1;
    p.xp += XP_PER_WORD;
    recomputeStreak(p);
  }
  return p;
}

function isoDaysAgoToFuture(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function isKnown(p: UserProgress, slug: string): boolean {
  return p.words[slug]?.status === "known";
}

export function knownCount(p: UserProgress): number {
  return Object.values(p.words).filter((w) => w.status === "known").length;
}

export function againSlugs(p: UserProgress): string[] {
  return Object.values(p.words)
    .filter((w) => w.status === "again")
    .map((w) => w.slug);
}

export function resetProgress(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
