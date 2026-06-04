"use client";

import Link from "next/link";
import { useProgress } from "@/components/useProgress";
import { getWeek } from "@/lib/content";
import { emptyProgress, isKnown } from "@/lib/progress";

const PHASES = [
  { name: "Reaktivointi", weeks: [1, 2, 3, 4], node: "bg-level-a2", ring: "border-level-a2 text-level-a2", text: "text-level-a2", bar: "bg-level-a2" },
  { name: "Laajennus", weeks: [5, 6, 7, 8], node: "bg-level-b1", ring: "border-level-b1 text-level-b1", text: "text-level-b1", bar: "bg-level-b1" },
  { name: "Sujuvuus", weeks: [9, 10, 11, 12, 13], node: "bg-level-b2", ring: "border-level-b2 text-level-b2", text: "text-level-b2", bar: "bg-level-b2" },
];

export function Roadmap() {
  const { progress, mounted } = useProgress();
  const p = mounted && progress ? progress : emptyProgress();

  // First week that has content but isn't complete = "current".
  let currentWeek = 0;
  for (let n = 1; n <= 13; n++) {
    const week = getWeek(n);
    const total = week ? week.days.reduce((s, d) => s + d.wordSlugs.length, 0) : 0;
    const known = week ? week.days.flatMap((d) => d.wordSlugs).filter((s) => isKnown(p, s)).length : 0;
    if (total > 0 && known < total) {
      currentWeek = n;
      break;
    }
  }

  return (
    <div className="flex flex-col gap-8">
      {PHASES.map((phase) => (
        <section key={phase.name}>
          <h2 className={`font-display text-xl font-semibold ${phase.text}`}>{phase.name}</h2>
          <div className="mt-3 ml-3 space-y-3 border-l-2 border-line pl-6">
            {phase.weeks.map((n) => {
              const week = getWeek(n);
              const total = week ? week.days.reduce((s, d) => s + d.wordSlugs.length, 0) : 0;
              const known = week ? week.days.flatMap((d) => d.wordSlugs).filter((s) => isKnown(p, s)).length : 0;
              const hasContent = total > 0;
              const completed = hasContent && known === total;
              const isCurrent = n === currentWeek;
              const pct = total > 0 ? Math.round((known / total) * 100) : 0;

              return (
                <div key={n} className="relative">
                  {/* Node marker on the rail */}
                  <span
                    className={`absolute -left-[2.05rem] top-1 flex h-7 w-7 items-center justify-center rounded-pill border-2 text-xs font-semibold ${
                      completed
                        ? `${phase.node} border-transparent text-surface`
                        : isCurrent
                          ? `bg-surface ${phase.ring} animate-pulse`
                          : hasContent
                            ? `bg-surface ${phase.ring}`
                            : "border-line bg-surface text-ink-soft"
                    }`}
                    aria-hidden="true"
                  >
                    {completed ? "✓" : hasContent ? n : "🔒"}
                  </span>

                  <div
                    className={`rounded-card border bg-surface p-4 shadow-soft ${
                      isCurrent ? "border-accent" : "border-line"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-semibold text-ink">
                        Viikko {n}
                        {week ? (
                          <span className="font-normal text-ink-soft" lang="fi">
                            {" "}· {week.theme}
                          </span>
                        ) : null}
                      </h3>
                      {hasContent ? (
                        <span className="text-2xs text-ink-soft tnum">
                          {known}/{total}
                        </span>
                      ) : (
                        <span className="text-2xs text-ink-soft">Tulossa</span>
                      )}
                    </div>

                    {hasContent && (
                      <>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-pill bg-line">
                          <div className={`h-full rounded-pill ${phase.bar}`} style={{ width: `${pct}%` }} />
                        </div>
                        {(isCurrent || (hasContent && !completed)) && (
                          <Link href="/learn" className="mt-3 inline-block text-sm font-semibold text-primary">
                            Harjoittele →
                          </Link>
                        )}
                        {completed && (
                          <p className="mt-2 text-sm font-semibold text-success">Valmis ✓</p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
