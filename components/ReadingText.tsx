import type { ReadingText as ReadingTextData } from "@/lib/content-types";
import { LevelBadge } from "./LevelBadge";

// Splits a paragraph on [[target]] markers, emphasizing target words in the accent.
function renderParagraph(paragraph: string) {
  const parts = paragraph.split(/(\[\[.+?\]\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[\[(.+?)\]\]$/);
    if (match) {
      return (
        <mark key={i} className="bg-transparent font-semibold text-accent">
          {match[1]}
        </mark>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// Weekly reading text ("Viikon teksti"). Comfortable measure, target words in the
// accent, translation behind a quiet native toggle.
export function ReadingText({ teksti }: { teksti: ReadingTextData }) {
  return (
    <article className="rounded-card border border-line bg-surface p-6 shadow-soft">
      <div className="flex items-center gap-3">
        <h2 className="font-display text-2xl text-accent" lang="fi">
          {teksti.title}
        </h2>
        <LevelBadge level={teksti.level} />
      </div>
      <p className="mt-1 text-sm text-ink-soft">{teksti.topic}</p>

      <p className="mt-4 max-w-prose text-lg leading-relaxed text-ink" lang="fi">
        {renderParagraph(teksti.paragraph)}
      </p>

      <details className="group mt-4">
        <summary className="cursor-pointer text-sm text-link marker:hidden">
          <span className="group-open:hidden">Näytä käännös</span>
          <span className="hidden group-open:inline">Piilota käännös</span>
        </summary>
        <p className="mt-2 max-w-prose text-ink-soft" lang="en">
          {teksti.translation}
        </p>
      </details>
    </article>
  );
}
