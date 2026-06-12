import type { Word } from "./content-types";

/**
 * Minimalist inline SVGs for dual-coding word icons (WordIcon). Stroke uses
 * currentColor so the icon inherits its container's text color. Add new keys here
 * and reference them from a word's `kuva.icon`. Emoji is the quick fallback.
 */
const SVGS: Record<string, React.ReactNode> = {
  house: (
    <>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9h14v-9" />
      <path d="M10 19v-5h4v5" />
    </>
  ),
};

/**
 * WordIcon — renders a word's illustration ONLY when a real inline SVG exists for its
 * `kuva.icon` key; otherwise renders nothing. The card design is typographic-first
 * (the lemma is the hero), so there is no first-letter fallback, and emoji are never
 * rendered (project rule — no emoji). When an icon exists it is a small accent.
 */
export function WordIcon({
  word,
  className = "",
}: {
  word: Word;
  className?: string;
}) {
  const svg = word.kuva?.icon ? SVGS[word.kuva.icon] : undefined;
  if (!svg) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={word.kuva?.alt ?? word.fi}
      className={className}
    >
      {svg}
    </svg>
  );
}
