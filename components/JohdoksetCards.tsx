import type { Johdos } from "@/lib/content-types";
import { LevelBadge } from "./LevelBadge";

// Derived/related words ("johdokset"), each with a level badge and one example.
export function JohdoksetCards({ johdokset }: { johdokset: Johdos[] }) {
  if (!johdokset.length) return null;

  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {johdokset.map((j) => (
        <li
          key={j.fi}
          className="flex flex-col gap-2 rounded-card border border-line bg-surface p-4 shadow-soft"
        >
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-display text-lg font-semibold text-accent" lang="fi">
              {j.fi}
            </span>
            <LevelBadge level={j.taso} />
          </div>
          <span className="text-sm text-ink-soft" lang="en">
            {j.en}
          </span>
          <p className="mt-1 border-t border-line pt-2 text-sm text-ink" lang="fi">
            {j.esim.fi}
            <span className="mt-0.5 block text-ink-soft" lang="en">
              {j.esim.en}
            </span>
          </p>
        </li>
      ))}
    </ul>
  );
}
