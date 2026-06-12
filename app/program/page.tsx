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
    <main className="mx-auto max-w-page px-6 py-8">
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

      <h1 className="mt-6 font-display text-title font-semibold text-accent">
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
            <h2 className="text-2xl">{p.phase}</h2>
            <p className="mt-1 text-ink-soft">{p.kuvaus}</p>
            <ul className="stagger-children mt-4 divide-y divide-line border-y border-line">
              {p.weeks.map((n) => {
                const week = getWeek(n);
                return (
                  <li key={n}>
                    {week ? (
                      <Link
                        href={`/week/${n}`}
                        className="group flex items-baseline gap-4 py-4 no-underline"
                      >
                        <span className="font-display text-2xl text-ink-soft tnum transition group-hover:text-accent">
                          {n}
                        </span>
                        <span className="flex-1">
                          <span className="block font-medium text-ink" lang="fi">
                            {week.theme}
                          </span>
                          <span className="text-sm text-ink-soft">Viikko {n}</span>
                        </span>
                        <span
                          aria-hidden="true"
                          className="self-center text-ink-soft transition group-hover:text-accent"
                        >
                          →
                        </span>
                      </Link>
                    ) : (
                      <div className="flex items-baseline gap-4 py-4 text-ink-soft">
                        <span className="font-display text-2xl tnum">{n}</span>
                        <span className="flex-1">
                          <span className="block">Viikko {n}</span>
                          <span className="text-sm">Tulossa</span>
                        </span>
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
