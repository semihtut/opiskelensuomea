"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Button, ButtonLink } from "@/components/Button";
import { Flashcard } from "@/components/Flashcard";
import { useProgress } from "@/components/useProgress";
import { allWords, getWord } from "@/lib/content";
import type { CardStatus } from "@/lib/content-types";
import { loadProgress } from "@/lib/progress";
import { buildQueue } from "@/lib/srs";

function Session() {
  const { mounted } = useProgress();
  const params = useSearchParams();
  const mode = params.get("mode") === "review" ? "review" : "default";
  const words = allWords();

  const [queue, setQueue] = useState<string[] | null>(null);
  const [index, setIndex] = useState(0);
  const [results, setResults] = useState<CardStatus[]>([]);

  // Build the queue once the client store is available.
  useEffect(() => {
    if (mounted && queue === null) {
      setQueue(buildQueue(loadProgress(), words, { mode }));
    }
  }, [mounted, queue, mode, words]);

  function restart() {
    setQueue(buildQueue(loadProgress(), words, { mode }));
    setIndex(0);
    setResults([]);
  }

  if (!mounted || queue === null) {
    return <div className="h-[26rem] animate-pulse rounded-flashcard bg-surface shadow-soft" />;
  }

  // Empty deck
  if (queue.length === 0) {
    return (
      <div className="rounded-card border border-line bg-surface p-8 text-center shadow-soft">
        <p className="font-display text-2xl text-accent">Ei harjoiteltavaa juuri nyt.</p>
        <p className="mt-2 text-ink-soft">
          {mode === "review"
            ? "Sinulla ei ole kerrattavia sanoja."
            : "Olet käynyt kaikki sanat läpi. Tule myöhemmin kertaamaan!"}
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <ButtonLink href="/dashboard">Oma sivu</ButtonLink>
          <ButtonLink href="/words" variant="secondary">
            Selaa sanoja
          </ButtonLink>
        </div>
      </div>
    );
  }

  // Finished
  if (index >= queue.length) {
    const learned = results.filter((r) => r === "known").length;
    return (
      <div className="rounded-card border border-line bg-surface p-8 text-center shadow-soft">
        <h1 className="font-display text-3xl font-semibold text-accent">Seansi valmis!</h1>
        <p className="mt-2 text-ink-soft">
          Harjoittelit {queue.length} korttia · {learned} merkitty opituksi · +{learned * 10} XP.
        </p>
        <div className="mt-5 flex justify-center gap-3">
          <ButtonLink href="/dashboard">Oma sivu →</ButtonLink>
          <Button variant="secondary" onClick={restart}>
            Harjoittele lisää
          </Button>
        </div>
      </div>
    );
  }

  const slug = queue[index];
  const word = getWord(slug);
  // Queue slugs always resolve (built from the word list); guard defensively only.
  if (!word) return null;

  const pct = Math.round((index / queue.length) * 100);

  return (
    <div>
      {/* Session progress bar */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-pill bg-line">
          <div
            className="h-full rounded-pill bg-primary transition-[width] duration-300 ease-standard"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-sm text-ink-soft tnum">
          {index + 1}/{queue.length}
        </span>
      </div>

      <Flashcard
        key={slug}
        word={word}
        trackProgress
        onAnswer={(status) => {
          setResults((r) => [...r, status]);
          setIndex((i) => i + 1);
        }}
      />

      <p className="mt-3 text-center text-sm text-ink-soft">
        Käännä kortti ja arvioi: <span className="font-semibold text-success">Osaan</span> tai{" "}
        <span className="font-semibold text-accent">Kertaa</span>.
      </p>
    </div>
  );
}

export default function LearnPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-10">
      <Suspense
        fallback={<div className="h-[26rem] animate-pulse rounded-flashcard bg-surface shadow-soft" />}
      >
        <Session />
      </Suspense>
    </main>
  );
}
