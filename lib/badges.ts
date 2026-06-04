import { badges } from "@/content/badges";
import type { Badge, UserProgress } from "./content-types";
import { knownCount } from "./progress";

/** Whether a badge is unlocked given current progress. */
export function isUnlocked(badge: Badge, p: UserProgress): boolean {
  switch (badge.kind) {
    case "words":
      return knownCount(p) >= (badge.threshold ?? 1);
    case "streak":
      return p.streak >= (badge.threshold ?? 1);
    case "perfect":
      return p.daily.some((d) => d.learned >= d.goal);
    // lukuteksti / phase are event-driven — unlocked ids are stored on progress.
    default:
      return p.unlockedBadges.includes(badge.id);
  }
}

export function allBadges(): Badge[] {
  return badges;
}

export function unlockedCount(p: UserProgress): number {
  return badges.filter((b) => isUnlocked(b, p)).length;
}
