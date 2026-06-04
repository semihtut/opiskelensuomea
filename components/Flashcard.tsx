"use client";

import { useState } from "react";
import type { Word } from "@/lib/content-types";
import { getPartitives, isNominal } from "@/lib/forms";
import { WordIcon } from "@/lib/icons";
import { LevelBadge } from "./LevelBadge";

/**
 * Interactive learning flashcard with a 3D flip (docs/DESIGN-SYSTEM.md).
 * Front = recall prompt (icon + serif headword + level). Back = partitive callout
 * (nominals) + key forms + an A2 example. The flip is a real <button> (keyboard +
 * screen-reader accessible); clicking the card body also flips for pointer users.
 * prefers-reduced-motion turns the flip into an instant change (global CSS rule).
 */
export function Flashcard({ word }: { word: Word }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  const { sg, pl } = getPartitives(word);
  const showPartitive = isNominal(word) && (sg || pl);

  return (
    <div className="perspective">
      <div
        className={`relative min-h-[24rem] transition-transform duration-flip ease-flip preserve-3d sm:min-h-[26rem] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div
          onClick={toggle}
          aria-hidden={flipped}
          className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-4 rounded-flashcard border border-line bg-elevated p-8 text-center shadow-soft backface-hidden transition hover:shadow-lift"
        >
          <span className="absolute right-4 top-4">
            <LevelBadge level={word.level} />
          </span>
          <WordIcon word={word} className="h-16 w-16 text-primary" />
          <span className="font-display text-4xl font-semibold text-accent sm:text-5xl" lang="fi">
            {word.fi}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            className="mt-2 rounded-pill border border-line px-4 py-2 text-sm font-semibold text-primary transition hover:bg-primary hover:text-surface"
            aria-pressed={flipped}
          >
            Näytä taivutus →
          </button>
        </div>

        {/* BACK */}
        <div
          onClick={toggle}
          aria-hidden={!flipped}
          className="absolute inset-0 flex cursor-pointer flex-col gap-3 overflow-y-auto rounded-flashcard border border-line bg-elevated p-6 shadow-soft backface-hidden rotate-y-180"
        >
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-display text-2xl font-semibold text-accent" lang="fi">
              {word.fi}
            </span>
            <span className="text-sm text-ink-soft" lang="en">
              {word.en}
            </span>
          </div>

          {showPartitive && (
            <div className="rounded-card border-l-4 border-accent bg-bg p-3">
              <p className="text-2xs font-semibold uppercase tracking-wide text-accent">
                Partitiivi
              </p>
              <dl className="mt-1 flex gap-6">
                {sg && (
                  <div>
                    <dt className="text-2xs text-ink-soft">yks.</dt>
                    <dd className="font-display text-lg text-accent tnum" lang="fi">{sg}</dd>
                  </div>
                )}
                {pl && (
                  <div>
                    <dt className="text-2xs text-ink-soft">mon.</dt>
                    <dd className="font-display text-lg text-accent tnum" lang="fi">{pl}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          {/* Key forms (always present) */}
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">{word.fi} — avainmuodot</caption>
            <tbody>
              {word.kielioppi.muodot.slice(0, 4).map((row) => (
                <tr key={`${row.sija}-${row.muoto}`} className="border-b border-line last:border-0">
                  <th scope="row" className="py-1 pr-3 text-left font-normal text-ink-soft">
                    {row.sija}
                  </th>
                  <td className="py-1 text-right font-display font-medium text-accent" lang="fi">
                    {row.muoto}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* One A2 example */}
          <div className="mt-auto border-t border-line pt-3">
            <LevelBadge level="A2" />
            <p className="mt-1 font-display text-ink" lang="fi">
              {word.esimerkit.A2.fi}
            </p>
            <p className="text-sm text-ink-soft" lang="en">
              {word.esimerkit.A2.en}
            </p>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}
            className="self-start text-sm font-semibold text-primary"
            aria-pressed={flipped}
          >
            ← Takaisin
          </button>
        </div>
      </div>
    </div>
  );
}
