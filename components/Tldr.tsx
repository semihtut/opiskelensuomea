// Answer-first TL;DR — the first visible block on every public page. This is what
// AI answer engines extract, so it states the conclusion directly (SEO-GEO skill).
export function Tldr({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-card border-l-4 border-accent bg-surface p-4 text-ink shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        Lyhyesti
      </p>
      <p className="mt-1 text-lg leading-relaxed">{children}</p>
    </div>
  );
}
