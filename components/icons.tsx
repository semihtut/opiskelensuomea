/**
 * Small UI icons (inline SVG, currentColor) — the project ships NO emoji, so these
 * replace the 🔥/⭐/✓/🔒/↻ glyphs in the dashboard, roadmap, and flashcard controls.
 * Decorative by default (aria-hidden); the surrounding text carries the meaning.
 */
type IconProps = { className?: string };

const STROKE = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function FlameIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.5c.9 2.2 2.6 3.2 3.8 4.8 1 1.4 1.7 2.8 1.7 4.5a5.5 5.5 0 1 1-11 0c0-1 .3-1.9.8-2.7.4 1.1 1.2 1.6 2 1.6 1.3 0 1.8-1 1.5-2.6-.3-1.8-.2-3.7 1.2-5.6z" />
    </svg>
  );
}

export function StarIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.2l2.5 5.2 5.7.7-4.2 3.9 1.1 5.6L12 21.9 6.9 18.6 8 13l-4.2-3.9 5.7-.7z" />
    </svg>
  );
}

export function CheckIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...STROKE} className={className} aria-hidden="true">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function AgainIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...STROKE} className={className} aria-hidden="true">
      <path d="M20 12a8 8 0 1 1-2.3-5.6M20 4v4h-4" />
    </svg>
  );
}

export function LockIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...STROKE} className={className} aria-hidden="true">
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function BookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...STROKE} className={className} aria-hidden="true">
      <path d="M12 6c-1.6-1-4-1.5-6-1.5V18c2 0 4.4.5 6 1.5 1.6-1 4-1.5 6-1.5V4.5c-2 0-4.4.5-6 1.5z" />
      <path d="M12 6v13.5" />
    </svg>
  );
}

export function TargetIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...STROKE} className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

export function TrophyIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...STROKE} className={className} aria-hidden="true">
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4z" />
      <path d="M8 6H5v1a3 3 0 0 0 3 3M16 6h3v1a3 3 0 0 1-3 3" />
      <path d="M10.5 13h3l-.5 3h-2zM9 19h6" />
    </svg>
  );
}
