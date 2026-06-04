import Link from "next/link";

export interface Crumb {
  label: string;
  href: string;
}

export interface PrevNext {
  label: string;
  href: string;
}

// Breadcrumb trail + optional prev/next navigation. The visible trail mirrors the
// BreadcrumbList JSON-LD emitted on the page (added in Phase 5).
export function Breadcrumbs({
  crumbs,
  prev,
  next,
}: {
  crumbs: Crumb[];
  prev?: PrevNext;
  next?: PrevNext;
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-ink-soft">
      <nav aria-label="Murupolku">
        <ol className="flex flex-wrap items-center gap-1">
          {crumbs.map((crumb, i) => {
            const isLast = i === crumbs.length - 1;
            return (
              <li key={crumb.href} className="flex items-center gap-1">
                {isLast ? (
                  <span aria-current="page" className="text-ink">
                    {crumb.label}
                  </span>
                ) : (
                  <>
                    <Link href={crumb.href} className="text-link no-underline hover:underline">
                      {crumb.label}
                    </Link>
                    <span aria-hidden="true" className="text-line">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      {(prev || next) && (
        <nav aria-label="Edellinen ja seuraava" className="flex items-center gap-3">
          {prev && (
            <Link href={prev.href} className="no-underline hover:underline" rel="prev">
              ← {prev.label}
            </Link>
          )}
          {next && (
            <Link href={next.href} className="no-underline hover:underline" rel="next">
              {next.label} →
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
