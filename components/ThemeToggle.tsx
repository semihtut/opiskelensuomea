"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Light/dark toggle. The actual switch is a `data-theme` attribute on <html>
 * (see app/globals.css). An inline script in app/layout.tsx applies the stored
 * choice before paint (no flash); this control reads/writes it after mount.
 * Inline SVG icons (currentColor) — no emoji, per brand rules.
 */
export function ThemeToggle() {
  // null until mounted, so the server and first client render match (no hydration
  // mismatch); the resolved theme is read from the DOM/OS in the effect.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      return;
    }
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage unavailable (private mode etc.) — the in-session toggle still works.
    }
  }

  const isDark = theme === "dark";
  const label = isDark ? "Vaihda vaaleaan tilaan" : "Vaihda tummaan tilaan";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink-soft transition hover:bg-bg hover:text-accent"
    >
      {/* Before mount, a fixed-size placeholder keeps layout stable. */}
      {theme === null ? (
        <span className="h-5 w-5" aria-hidden="true" />
      ) : isDark ? (
        <SunIcon />
      ) : (
        <MoonIcon />
      )}
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}
