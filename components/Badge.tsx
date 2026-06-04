import type { Badge as BadgeType } from "@/lib/content-types";

// Achievement medallion. Locked = grayscale + dimmed; unlocked = gold ring + color.
// Meaning isn't carried by color alone — the lock icon + label + aria state convey it.
export function BadgeMedallion({
  badge,
  unlocked,
}: {
  badge: BadgeType;
  unlocked: boolean;
}) {
  return (
    <div
      className="flex flex-col items-center gap-2 text-center"
      title={`${badge.title} — ${badge.description}${unlocked ? "" : " (lukittu)"}`}
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-pill border-2 text-2xl ${
          unlocked
            ? "border-gold bg-surface shadow-soft"
            : "border-line bg-surface opacity-50 grayscale"
        }`}
        role="img"
        aria-label={`${badge.title}: ${unlocked ? "avattu" : "lukittu"}`}
      >
        <span aria-hidden="true">{unlocked ? badge.icon : "🔒"}</span>
      </div>
      <span className={`text-2xs font-semibold ${unlocked ? "text-ink" : "text-ink-soft"}`}>
        {badge.title}
      </span>
    </div>
  );
}
