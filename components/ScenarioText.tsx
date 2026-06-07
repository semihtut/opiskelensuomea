"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { Scenario, ScenarioLine } from "@/lib/content-types";

// Parses a Finnish string into plain text and glossed tokens. A glossed token is
// written [[surface|english]]; tapping it reveals ONLY the English meaning.
type Token = { text: string } | { surface: string; en: string };

function tokenize(fi: string): Token[] {
  return fi.split(/(\[\[[^\]]+?\]\])/g).map((part) => {
    const m = part.match(/^\[\[(.+?)\|(.+?)\]\]$/);
    if (m) return { surface: m[1], en: m[2] };
    // A bare [[surface]] with no gloss falls back to plain emphasis-less text.
    const bare = part.match(/^\[\[(.+?)\]\]$/);
    if (bare) return { text: bare[1] };
    return { text: part };
  });
}

// A single tappable word that reveals its English meaning in an accessible popover.
function GlossWord({
  surface,
  en,
  open,
  onToggle,
}: {
  surface: string;
  en: string;
  open: boolean;
  onToggle: () => void;
}) {
  const popoverId = useId();
  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-describedby={open ? popoverId : undefined}
        className="cursor-pointer border-0 border-b border-dotted border-accent/60 bg-transparent p-0 font-semibold text-accent"
        lang="fi"
      >
        {surface}
      </button>
      {open && (
        <span
          id={popoverId}
          role="note"
          className="absolute left-0 top-full z-10 mt-1 w-max max-w-[16rem] rounded-card border border-line bg-surface px-3 py-2 text-sm font-normal text-ink shadow-soft"
          lang="en"
        >
          {en}
        </span>
      )}
    </span>
  );
}

// Renders one Finnish string with tappable glossed words.
function GlossedText({
  fi,
  keyPrefix,
  openKey,
  setOpenKey,
}: {
  fi: string;
  keyPrefix: string;
  openKey: string | null;
  setOpenKey: (k: string | null) => void;
}) {
  return (
    <>
      {tokenize(fi).map((tok, i) => {
        if ("surface" in tok) {
          const key = `${keyPrefix}-${i}`;
          return (
            <GlossWord
              key={key}
              surface={tok.surface}
              en={tok.en}
              open={openKey === key}
              onToggle={() => setOpenKey(openKey === key ? null : key)}
            />
          );
        }
        return <span key={`${keyPrefix}-${i}`}>{tok.text}</span>;
      })}
    </>
  );
}

function DialogueLines({
  lines,
  openKey,
  setOpenKey,
}: {
  lines: ScenarioLine[];
  openKey: string | null;
  setOpenKey: (k: string | null) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      {lines.map((line, i) => (
        <div key={i} className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {line.speaker}
          </span>
          <p className="max-w-prose text-lg leading-relaxed text-ink" lang="fi">
            <GlossedText
              fi={line.fi}
              keyPrefix={`line-${i}`}
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          </p>
        </div>
      ))}
    </div>
  );
}

// Interactive scenario text: narrative or dialogue, with tap-to-reveal English glosses
// and a full translation behind a toggle. No emoji, keyboard- and screen-reader-friendly.
export function ScenarioText({ scenario }: { scenario: Scenario }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  // Close the open gloss on Escape or when clicking/tapping outside the text.
  useEffect(() => {
    if (!openKey) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenKey(null);
    }
    function onPointer(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenKey(null);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [openKey]);

  return (
    <article
      ref={rootRef}
      className="rounded-card border border-line bg-surface p-6 shadow-soft"
    >
      <p className="text-sm text-ink-soft">
        Napauta korostettua sanaa nähdäksesi sen merkityksen.
      </p>

      <div className="mt-4">
        {scenario.format === "dialogi" && scenario.lines ? (
          <DialogueLines
            lines={scenario.lines}
            openKey={openKey}
            setOpenKey={setOpenKey}
          />
        ) : (
          <p className="max-w-prose text-lg leading-relaxed text-ink" lang="fi">
            <GlossedText
              fi={scenario.paragraph ?? ""}
              keyPrefix="para"
              openKey={openKey}
              setOpenKey={setOpenKey}
            />
          </p>
        )}
      </div>

      <details className="group mt-6">
        <summary className="cursor-pointer text-sm text-link marker:hidden">
          <span className="group-open:hidden">Näytä käännös</span>
          <span className="hidden group-open:inline">Piilota käännös</span>
        </summary>
        {scenario.format === "dialogi" && scenario.lines ? (
          <div className="mt-2 flex flex-col gap-2">
            {scenario.lines.map((line, i) => (
              <p key={i} className="max-w-prose text-ink-soft" lang="en">
                <span className="font-semibold">{line.speaker}: </span>
                {line.en}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-2 max-w-prose text-ink-soft" lang="en">
            {scenario.translation}
          </p>
        )}
      </details>
    </article>
  );
}
