"use client";

import { useState } from "react";
import { CheckIcon, AgainIcon } from "@/components/icons";
import type { CardStatus, Word } from "@/lib/content-types";
import { getPartitives, isNominal } from "@/lib/forms";
import { WordIcon } from "@/lib/icons";
import { loadProgress, markWord, saveProgress } from "@/lib/progress";
import { LevelBadge } from "./LevelBadge";

/**
 * Interactive learning flashcard with a 3D flip (docs/DESIGN-SYSTEM.md).
 * Front = a typographic recall prompt: the lemma is the hero (Fraunces), with the
 * part of speech as quiet metadata and a small icon accent only where one exists.
 * The front face IS a <button> (keyboard + screen-reader operable); the back holds
 * the partitive callout, key forms, an A2 example and the Again/Osaan controls.
 * `inert` is toggled on the hidden face so off-screen controls aren't focusable.
 * prefers-reduced-motion turns the flip into an instant change (global CSS rule).
 */
export function Flashcard({
  word,
  trackProgress = false,
  onAnswer,
}: {
  word: Word;
  trackProgress?: boolean;
  onAnswer?: (status: CardStatus) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState<CardStatus | null>(null);
  const toggle = () => setFlipped((f) => !f);

  function answer(status: CardStatus) {
    saveProgress(markWord(loadProgress(), word.slug, status));
    // In a session, advance immediately; on a word page, show the confirmation.
    if (onAnswer) onAnswer(status);
    else setAnswered(status);
  }

  const { sg, pl } = getPartitives(word);
  const showPartitive = isNominal(word) && (sg || pl);

  return (
    <div className="perspective">
      <div
        className={`relative min-h-[24rem] transition-transform duration-flip ease-flip preserve-3d sm:min-h-[26rem] ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT — typographic recall prompt; the whole face is the flip control */}
        <button
          type="button"
          onClick={toggle}
          aria-hidden={flipped}
          inert={flipped}
          aria-pressed={flipped}
          className="absolute inset-0 flex w-full flex-col items-center justify-center gap-3 rounded-flashcard border border-line bg-elevated p-8 text-center shadow-soft backface-hidden transition hover:shadow-lift"
        >
          <span className="absolute right-4 top-4">
            <LevelBadge level={word.level} />
          </span>
          {/* Icon accent only when a real vector exists (most cards are typographic). */}
          <WordIcon word={word} className="h-12 w-12 text-primary" />
          <span className="font-display text-5xl font-semibold text-accent hyphenate" lang="fi">
            {word.fi}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            {word.pos}
          </span>
          <span className="mt-2 text-sm font-semibold text-primary">Näytä taivutus →</span>
        </button>

        {/* BACK — full info; flip-back is the real "Takaisin" button (not the body) */}
        <div
          aria-hidden={!flipped}
          inert={!flipped}
          className="absolute inset-0 flex flex-col gap-3 overflow-y-auto rounded-flashcard border border-line bg-elevated p-6 shadow-soft backface-hidden rotate-y-180"
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

          {/* Answer controls — record progress (spaced repetition) when enabled */}
          {trackProgress &&
            (answered ? (
              <p
                className={`flex items-center justify-center gap-2 rounded-chip px-3 py-2 text-center text-sm font-semibold text-surface ${
                  answered === "known" ? "bg-success" : "bg-again"
                }`}
                role="status"
              >
                {answered === "known" ? (
                  <>
                    <CheckIcon className="h-4 w-4" /> Merkitty opituksi
                  </>
                ) : (
                  <>
                    <AgainIcon className="h-4 w-4" /> Lisätty kertauslistalle
                  </>
                )}
              </p>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => answer("again")}
                  className="flex flex-1 items-center justify-center gap-2 rounded-chip border border-again px-3 py-2 text-sm font-semibold text-again transition hover:bg-again hover:text-surface"
                >
                  <AgainIcon className="h-4 w-4" /> Kertaa
                </button>
                <button
                  type="button"
                  onClick={() => answer("known")}
                  className="flex flex-1 items-center justify-center gap-2 rounded-chip bg-success px-3 py-2 text-sm font-semibold text-surface transition hover:opacity-90"
                >
                  <CheckIcon className="h-4 w-4" /> Osaan
                </button>
              </div>
            ))}

          <button
            type="button"
            onClick={toggle}
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
