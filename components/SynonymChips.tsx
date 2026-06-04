import type { Synonym } from "@/lib/content-types";

// Near-synonyms as chips. Finnish word emphasized, English gloss alongside.
export function SynonymChips({ synonyms }: { synonyms: Synonym[] }) {
  if (!synonyms.length) return null;

  return (
    <ul className="flex flex-wrap gap-2">
      {synonyms.map((s) => (
        <li
          key={s.fi}
          className="inline-flex items-baseline gap-2 rounded-chip border border-line bg-surface px-3 py-1.5 text-sm"
        >
          <span className="font-medium text-ink" lang="fi">
            {s.fi}
          </span>
          <span className="text-ink-soft" lang="en">
            {s.en}
          </span>
        </li>
      ))}
    </ul>
  );
}
