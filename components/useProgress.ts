"use client";

import { useCallback, useEffect, useState } from "react";
import type { CardStatus, UserProgress } from "@/lib/content-types";
import { loadProgress, markWord, resetProgress, saveProgress } from "@/lib/progress";

/**
 * React hook over the localStorage progress store. `mounted` is false during SSR
 * and the first client render (avoids hydration mismatch) — render zeros/skeleton
 * until it's true. Listens to cross-tab `storage` events to stay in sync.
 */
export function useProgress() {
  const [progress, setProgress] = useState<UserProgress | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
    const onStorage = () => setProgress(loadProgress());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const mark = useCallback((slug: string, status: CardStatus) => {
    setProgress((prev) => {
      const next = markWord(prev ?? loadProgress(), slug, status);
      saveProgress(next);
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    resetProgress();
    setProgress(loadProgress());
  }, []);

  return { progress, mounted: progress !== null, mark, reset };
}
