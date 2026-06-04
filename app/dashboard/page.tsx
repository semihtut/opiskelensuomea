"use client";

import Link from "next/link";
import { BadgeShelf } from "@/components/BadgeShelf";
import { ProgressRing } from "@/components/ProgressRing";
import { useProgress } from "@/components/useProgress";
import { allWords } from "@/lib/content";
import { againSlugs, isKnown, knownCount, todayStat } from "@/lib/progress";

export default function DashboardPage() {
  const { progress, mounted, reset } = useProgress();
  const words = allWords();

  // Skeleton until the client store has loaded (avoids hydration mismatch).
  if (!mounted || !progress) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="h-40 animate-pulse rounded-card bg-surface shadow-soft" />
      </main>
    );
  }

  const stat = todayStat(progress);
  const remaining = Math.max(0, stat.goal - stat.learned);
  const done = remaining === 0;
  const known = knownCount(progress);
  const again = againSlugs(progress);
  const nextWord = words.find((w) => !isKnown(progress, w.slug)) ?? null;
  const reviewWord = again[0] ?? null;

  return (
    <main className="mx-auto max-w-4xl px-6 py-10">
      {/* Greeting + glanceable stats */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-accent">
            Tervetuloa! 👋
          </h1>
          <p className="mt-1 text-ink-soft">
            Viikko {progress.currentWeek} · Päivä {progress.currentDay}
          </p>
        </div>
        <ul className="flex gap-3 text-sm">
          <li className="rounded-chip border border-line bg-surface px-3 py-2">
            🔥 <span className="font-semibold tnum">{progress.streak}</span> päivää
          </li>
          <li className="rounded-chip border border-line bg-surface px-3 py-2">
            ⭐ <span className="font-semibold tnum">{progress.xp}</span> XP
          </li>
          <li className="rounded-chip border border-line bg-surface px-3 py-2">
            ✓ <span className="font-semibold tnum">{known}</span> opittu
          </li>
        </ul>
      </div>

      {/* Daily goal — the primary CTA */}
      <section className="mt-8 flex flex-col items-center gap-6 rounded-card border border-line bg-surface p-6 shadow-soft sm:flex-row sm:items-center">
        <ProgressRing value={stat.learned} max={stat.goal} size={120} label="tänään" />
        <div className="flex-1 text-center sm:text-left">
          <h2 className="font-display text-2xl text-accent">
            {done ? "Päivän tavoite valmis! 🎉" : "Tänään: 12 sanaa"}
          </h2>
          <p className="mt-1 text-ink-soft">
            {done
              ? "Hienoa työtä — tule huomenna jatkamaan putkea."
              : `${stat.learned}/${stat.goal} opittu. ${remaining} sanaa jäljellä.`}
          </p>
          <Link
            href="/learn"
            className="mt-4 inline-flex items-center rounded-chip bg-accent px-5 py-2.5 font-semibold text-bg no-underline transition hover:opacity-90"
          >
            {done ? "Harjoittele lisää →" : `Aloita harjoitus — ${remaining} jäljellä →`}
          </Link>
        </div>
      </section>

      {/* Secondary CTAs */}
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {/* Review mistakes */}
        {reviewWord ? (
          <Link
            href="/learn?mode=review"
            className="rounded-card border border-line bg-surface p-5 no-underline shadow-soft transition hover:border-accent"
          >
            <h3 className="font-display text-xl text-accent">Kertaa virheet ({again.length})</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Palaa sanoihin, jotka merkitsit kerrattaviksi.
            </p>
          </Link>
        ) : (
          <div className="rounded-card border border-dashed border-line p-5 text-ink-soft">
            <h3 className="font-display text-xl">Kertaa virheet</h3>
            <p className="mt-1 text-sm">Ei kerrattavia juuri nyt 🎉</p>
          </div>
        )}

        {/* Continue */}
        {nextWord ? (
          <Link
            href="/learn"
            className="rounded-card border border-line bg-surface p-5 no-underline shadow-soft transition hover:border-accent"
          >
            <h3 className="font-display text-xl text-accent">Jatka kohdasta</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Seuraava sana:{" "}
              <span className="font-display font-semibold text-accent" lang="fi">
                {nextWord.fi}
              </span>{" "}
              — {nextWord.en}
            </p>
          </Link>
        ) : (
          <div className="rounded-card border border-dashed border-line p-5 text-ink-soft">
            <h3 className="font-display text-xl">Jatka kohdasta</h3>
            <p className="mt-1 text-sm">Kaikki tämänhetkiset sanat opittu! 🎉</p>
          </div>
        )}
      </div>

      {/* Badges + path peek */}
      <section className="mt-8">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="font-display text-xl text-accent">Rozetit</h2>
          <Link href="/roadmap" className="text-sm font-semibold text-primary">
            Edistymispolku →
          </Link>
        </div>
        <div className="mt-4">
          <BadgeShelf limit={5} />
        </div>
      </section>

      <p className="mt-8 rounded-card border border-line bg-surface p-4 text-sm text-ink-soft shadow-soft">
        Vinkki: avaa sanakortti ja käännä se — paina{" "}
        <span className="font-semibold text-success">Osaan ✓</span> kerätäksesi edistymistä.
      </p>

      <button
        type="button"
        onClick={reset}
        className="mt-8 text-sm text-ink-soft underline-offset-2 hover:text-accent hover:underline"
      >
        Nollaa edistyminen
      </button>
    </main>
  );
}
