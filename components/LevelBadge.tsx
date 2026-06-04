import type { Level } from "@/lib/content-types";

// Level badge — a filled chip. Color carries meaning AND the text label is shown
// (never color alone). Colors reference theme vars so contrast holds in light + dark.
const LEVEL_CLASS: Record<Level, string> = {
  A1: "bg-ink-soft",
  A2: "bg-level-a2",
  B1: "bg-level-b1",
  B2: "bg-level-b2",
};

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span
      className={`inline-flex items-center rounded-chip px-2 py-0.5 text-xs font-semibold text-surface ${LEVEL_CLASS[level]}`}
    >
      {level}
    </span>
  );
}
