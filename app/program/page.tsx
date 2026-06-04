import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Tldr } from "@/components/Tldr";
import { getWeek } from "@/lib/content";
import type { Phase } from "@/lib/content-types";
import { breadcrumbSchema, courseSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Suomi 90 — 13 viikon ohjelma suomen oppimiseen",
  description:
    "Suomi 90 on 13 viikon ohjelma, joka kattaa noin 1000 yleisintä suomen sanaa kolmessa vaiheessa: Reaktivointi, Laajennus ja Sujuvuus.",
  path: "/program",
});

// Suomi 90 pillar page. Course JSON-LD is added in Phase 5; this renders the
// 3-phase / 13-week structure from content data.
const PHASES: { phase: Phase; weeks: number[]; kuvaus: string }[] = [
  {
    phase: "Reaktivointi",
    weeks: [1, 2, 3, 4],
    kuvaus: "Herätetään olemassa oleva suomi: yleisimmät sanat ja perusrakenteet.",
  },
  {
    phase: "Laajennus",
    weeks: [5, 6, 7, 8],
    kuvaus: "Laajennetaan sanavarastoa ja kielioppia kohti B1-tasoa.",
  },
  {
    phase: "Sujuvuus",
    weeks: [9, 10, 11, 12, 13],
    kuvaus: "Vahvistetaan sujuvuutta pidemmillä teksteillä ja vivahteilla.",
  },
];

export default function ProgramPage() {
  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Ohjelma", href: "/program" },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <JsonLd
        data={[
          courseSchema({
            weeks: 13,
            syllabus: PHASES.map((p) => ({ phase: p.phase, kuvaus: p.kuvaus })),
          }),
          breadcrumbSchema(crumbs),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />

      <h1 className="mt-6 font-display text-4xl font-semibold text-accent">
        Suomi 90
      </h1>
      <p className="mt-1 text-lg text-ink-soft">
        Kolmen kuukauden ohjelma suomen oppimiseen
      </p>

      <div className="mt-6">
        <Tldr>
          Suomi 90 on 13 viikon (noin 90 päivän) ohjelma, joka kattaa ~1000 yleisintä
          suomen sanaa. Tahti on noin 12 sanaa päivässä, kuusi opiskelupäivää viikossa
          ja yksi kertauspäivä. Ohjelma jakautuu kolmeen vaiheeseen: Reaktivointi,
          Laajennus ja Sujuvuus.
        </Tldr>
      </div>

      <div className="mt-10 flex flex-col gap-8">
        {PHASES.map((p) => (
          <section key={p.phase}>
            <h2 className="text-2xl text-accent">{p.phase}</h2>
            <p className="mt-1 text-ink-soft">{p.kuvaus}</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {p.weeks.map((n) => {
                const week = getWeek(n);
                return (
                  <li key={n}>
                    {week ? (
                      <Link
                        href={`/week/${n}`}
                        className="block rounded-card border border-line bg-surface p-4 no-underline shadow-soft hover:border-accent"
                      >
                        <span className="text-sm font-semibold text-ink">Viikko {n}</span>
                        <span className="mt-1 block text-ink-soft" lang="fi">
                          {week.theme}
                        </span>
                      </Link>
                    ) : (
                      <div className="block rounded-card border border-dashed border-line p-4 text-ink-soft">
                        <span className="text-sm font-semibold">Viikko {n}</span>
                        <span className="mt-1 block text-sm">Tulossa</span>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
