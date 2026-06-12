"use client";

import Link from "next/link";
import { useState } from "react";

export interface NavItem {
  href: string;
  label: string;
}

/**
 * Mobile disclosure menu (shown below the md breakpoint; the desktop nav handles
 * wider viewports). A single hamburger button toggles a full-width panel under the
 * header. Keyboard-accessible: real <button> with aria-expanded, links close on tap.
 */
export function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Sulje valikko" : "Avaa valikko"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink transition hover:bg-bg hover:text-accent"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          className="h-5 w-5"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-40 border-b border-line bg-surface shadow-soft">
          <nav aria-label="Päävalikko (mobiili)">
            <ul className="mx-auto flex max-w-page-wide flex-col px-6 py-2">
              {items.map((item) => (
                <li key={item.href} className="border-b border-line last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-ink no-underline hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
