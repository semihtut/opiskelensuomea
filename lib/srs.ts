import type { UserProgress, Word } from "./content-types";

/**
 * Build a study queue (spaced repetition, simple). Ordering:
 *   1) "again" words (highest priority — recently missed)
 *   2) brand-new words (never seen)
 *   3) due "learning"/"known" words (dueAt on/before today)
 * `mode: "review"` returns only the "again" words. Capped at `limit`.
 * Refined scheduling comes in a later milestone (see ROADMAP).
 */
export function buildQueue(
  progress: UserProgress,
  words: Word[],
  opts: { limit?: number; mode?: "default" | "review" } = {},
): string[] {
  const { limit = 12, mode = "default" } = opts;
  const today = new Date().toISOString().slice(0, 10);

  const again = words.filter((w) => progress.words[w.slug]?.status === "again");
  if (mode === "review") return again.slice(0, limit).map((w) => w.slug);

  const fresh = words.filter((w) => !progress.words[w.slug]);
  const dueRest = words.filter((w) => {
    const wp = progress.words[w.slug];
    if (!wp || wp.status === "again") return false;
    return (wp.dueAt ?? "9999-99-99") <= today;
  });

  return [...again, ...fresh, ...dueRest].slice(0, limit).map((w) => w.slug);
}
