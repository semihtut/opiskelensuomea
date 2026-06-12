import {
  BookIcon,
  FlameIcon,
  LockIcon,
  StarIcon,
  TargetIcon,
  TrophyIcon,
} from "@/components/icons";
import type { Badge as BadgeType, BadgeKind } from "@/lib/content-types";

// Each badge kind maps to one inline SVG (no emoji, per brand rules). The title +
// description distinguish thresholds within a kind (e.g. 100 vs 1000 words).
const KIND_ICON: Record<BadgeKind, (props: { className?: string }) => React.ReactNode> = {
  streak: FlameIcon,
  words: StarIcon,
  perfect: TargetIcon,
  lukuteksti: BookIcon,
  phase: TrophyIcon,
};

// Achievement medallion. Locked = grayscale + dimmed; unlocked = gold ring + color.
// Meaning isn't carried by color alone — the lock icon + label + aria state convey it.
export function BadgeMedallion({
  badge,
  unlocked,
}: {
  badge: BadgeType;
  unlocked: boolean;
}) {
  const Icon = KIND_ICON[badge.kind];

  return (
    <div
      className="flex flex-col items-center gap-2 text-center"
      title={`${badge.title} — ${badge.description}${unlocked ? "" : " (lukittu)"}`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-pill border-2 ${
          unlocked
            ? "border-gold bg-surface text-accent shadow-soft"
            : "border-line bg-surface text-ink-soft opacity-50 grayscale"
        }`}
        role="img"
        aria-label={`${badge.title}: ${unlocked ? "avattu" : "lukittu"}`}
      >
        {unlocked ? <Icon className="h-7 w-7" /> : <LockIcon className="h-7 w-7" />}
      </div>
      <span className={`text-2xs font-semibold ${unlocked ? "text-ink" : "text-ink-soft"}`}>
        {badge.title}
      </span>
    </div>
  );
}
