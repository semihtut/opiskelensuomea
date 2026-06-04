// Circular progress ring (SVG). Tracks a value toward a goal (e.g. daily 12 words).
// At/over goal it switches to the gold "complete" color. Decorative ring is aria-hidden;
// the center text conveys the value, and an aria-label states it for screen readers.
export function ProgressRing({
  value,
  max,
  size = 96,
  stroke = 9,
  label,
  complete,
}: {
  value: number;
  max: number;
  size?: number;
  stroke?: number;
  label?: string;
  complete?: boolean;
}) {
  const clamped = Math.max(0, Math.min(value, max));
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = max > 0 ? clamped / max : 0;
  const isDone = complete ?? clamped >= max;
  const dash = circumference * pct;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${value} / ${max}${label ? ` ${label}` : ""}`}
    >
      <svg width={size} height={size} aria-hidden="true" className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-line)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={isDone ? "var(--color-gold)" : "var(--color-primary)"}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          className="transition-[stroke-dasharray] duration-500 ease-standard"
        />
      </svg>
      <span className="absolute flex flex-col items-center leading-none">
        <span className="font-display text-xl font-semibold text-ink tnum">
          {clamped}
          <span className="text-ink-soft">/{max}</span>
        </span>
        {label && <span className="mt-0.5 text-2xs text-ink-soft">{label}</span>}
      </span>
    </div>
  );
}
