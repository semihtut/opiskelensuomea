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
 * WordIcon — renders the word's illustration. Prefers an inline SVG (by `kuva.icon`
 * key), then an emoji, then a typographic fallback (first letter). Decorative vs.
 * meaningful is handled via aria: the alt text comes from `kuva.alt`.
 */
export function WordIcon({
  word,
  className = "",
}: {
  word: Word;
  className?: string;
}) {
  const svg = word.kuva?.icon ? SVGS[word.kuva.icon] : undefined;
  const label = word.kuva?.alt ?? word.fi;

  if (svg) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        role="img"
        aria-label={label}
        className={className}
      >
        {svg}
      </svg>
    );
  }

  if (word.kuva?.emoji) {
    return (
      <span role="img" aria-label={label} className={className}>
        {word.kuva.emoji}
      </span>
    );
  }

  // Typographic fallback — first letter in the display serif.
  return (
    <span aria-hidden="true" className={`font-display ${className}`}>
      {word.fi.charAt(0).toUpperCase()}
    </span>
  );
}
