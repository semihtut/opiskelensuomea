import type { Example, Level } from "@/lib/content-types";
import { LevelBadge } from "./LevelBadge";

// A2/B1/B2 example sentences, each tagged with a visible level badge. Finnish and
// English are language-tagged for correct screen-reader pronunciation.
export function ExampleList({
  examples,
}: {
  examples: { A2: Example; B1: Example; B2: Example };
}) {
  const order: Level[] = ["A2", "B1", "B2"];
  return (
    <ul className="flex flex-col gap-4">
      {order.map((level) => {
        const ex = examples[level as "A2" | "B1" | "B2"];
        return (
          <li
            key={level}
            className="rounded-card border border-line bg-surface p-4 shadow-soft"
          >
            <div className="mb-2">
              <LevelBadge level={level} />
            </div>
            <p className="font-display text-lg text-ink" lang="fi">
              {ex.fi}
            </p>
            <p className="mt-1 text-sm text-ink-soft" lang="en">
              {ex.en}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
