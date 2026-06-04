import type { Word } from "@/lib/content-types";
import { getPartitives } from "@/lib/forms";

// Highlighted partitive box — the partitive is the priority case to teach, so it
// gets a first-class callout. Renders only when the word has partitive forms.
export function PartitiveBox({ word }: { word: Word }) {
  const { sg, pl } = getPartitives(word);
  if (!sg && !pl) return null;

  return (
    <aside
      className="rounded-card border border-line bg-surface p-5 shadow-soft"
      aria-label="Partitiivi"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wide text-ink-soft">
        Partitiivi
      </h2>
      <dl className="mt-3 flex flex-wrap gap-x-10 gap-y-3">
        {sg && (
          <div>
            <dt className="text-xs text-ink-soft">yksikkö</dt>
            <dd className="font-display text-2xl text-accent" lang="fi">
              {sg}
            </dd>
          </div>
        )}
        {pl && (
          <div>
            <dt className="text-xs text-ink-soft">monikko</dt>
            <dd className="font-display text-2xl text-accent" lang="fi">
              {pl}
            </dd>
          </div>
        )}
      </dl>
    </aside>
  );
}
