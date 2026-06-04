"use client";

import { BadgeMedallion } from "@/components/Badge";
import { useProgress } from "@/components/useProgress";
import { allBadges, isUnlocked } from "@/lib/badges";
import { emptyProgress } from "@/lib/progress";

// Grid of achievement medallions. `limit` shows just the first N (dashboard peek);
// unlocked badges are sorted first so progress is visible at a glance.
export function BadgeShelf({ limit }: { limit?: number }) {
  const { progress, mounted } = useProgress();
  const p = mounted && progress ? progress : emptyProgress();

  const ranked = allBadges()
    .map((badge) => ({ badge, unlocked: isUnlocked(badge, p) }))
    .sort((a, b) => Number(b.unlocked) - Number(a.unlocked));

  const shown = limit ? ranked.slice(0, limit) : ranked;

  return (
    <ul className="grid grid-cols-3 gap-4 sm:grid-cols-5">
      {shown.map(({ badge, unlocked }) => (
        <li key={badge.id}>
          <BadgeMedallion badge={badge} unlocked={unlocked} />
        </li>
      ))}
    </ul>
  );
}
