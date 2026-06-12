import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LevelBadge } from "@/components/LevelBadge";
import { Tldr } from "@/components/Tldr";
import { allWeeks, getWeek, scenariosForWeek, wordsForDay } from "@/lib/content";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allWeeks().map((w) => ({ n: String(w.week) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  const week = getWeek(Number(n));
  if (!week) return {};
  return pageMetadata({
    title: `Viikko ${week.week}: ${week.theme} — Suomi 90`,
    description: `Suomi 90, viikko ${week.week} (${week.phase}): ${week.theme}. Päivittäiset sanat ja viikon lukuteksti ”${week.teksti.title}”.`,
    path: `/week/${week.week}`,
  });
}

export default async function WeekPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const week = getWeek(Number(n));
  if (!week) notFound();

  const totalWords = week.days.reduce((sum, d) => sum + d.wordSlugs.length, 0);
  const scenarios = scenariosForWeek(week.week);
  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Ohjelma", href: "/program" },
    { label: `Viikko ${week.week}`, href: `/week/${week.week}` },
  ];

  return (
    <main className="mx-auto max-w-page px-6 py-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />

      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">
        {week.phase} · Viikko {week.week}
      </p>
      <h1 className="mt-1 font-display text-title font-semibold text-accent hyphenate" lang="fi">
        {week.theme}
      </h1>

      <div className="mt-6">
        <Tldr>
          Viikko {week.week} kuuluu {week.phase}-vaiheeseen. Se sisältää kuusi
          opiskelupäivää ({totalWords} sanaa tällä hetkellä) ja viikon lukutekstin
          ”{week.teksti.title}”.
        </Tldr>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl">Päivät</h2>
        <ol className="stagger-children mt-4 divide-y divide-line border-y border-line">
          {week.days.map((day) => {
            const dayWords = wordsForDay(day);
            return (
              <li key={day.day} className="py-4">
                <h3 className="font-semibold text-ink">
                  Päivä {day.day}: <span lang="fi">{day.theme}</span>
                </h3>
                {dayWords.length > 0 ? (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {dayWords.map((word) => (
                      <li key={word.slug}>
                        <Link
                          href={`/words/${word.slug}`}
                          className="inline-flex items-center gap-2 rounded-chip border border-line bg-surface px-3 py-1 text-sm no-underline hover:border-accent"
                        >
                          <span className="font-medium text-accent" lang="fi">
                            {word.fi}
                          </span>
                          <LevelBadge level={word.level} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-ink-soft">Sanat tulossa.</p>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl">Viikon teksti</h2>
        <Link
          href={`/week/${week.week}/text`}
          className="group mt-3 flex items-center justify-between gap-4 border-y border-line py-4 no-underline"
        >
          <span>
            <span
              className="font-display text-lg font-semibold text-ink transition group-hover:text-accent"
              lang="fi"
            >
              {week.teksti.title}
            </span>
            <span className="mt-1 block text-sm text-ink-soft">{week.teksti.topic}</span>
          </span>
          <span className="flex items-center gap-3">
            <LevelBadge level={week.teksti.level} />
            <span
              aria-hidden="true"
              className="text-ink-soft transition group-hover:text-accent"
            >
              →
            </span>
          </span>
        </Link>
      </section>

      {scenarios.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl">Viikon tilanne</h2>
          <p className="mt-1 text-sm text-ink-soft">
            Arjen tilanne, jossa viikon sanat tulevat käyttöön. Napauta korostettuja
            sanoja nähdäksesi niiden merkityksen.
          </p>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {scenarios.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/scenarios/${s.slug}`}
                  className="group flex items-center justify-between gap-4 py-4 no-underline"
                >
                  <span>
                    <span
                      className="font-display text-lg font-semibold text-ink transition group-hover:text-accent"
                      lang="fi"
                    >
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">{s.topic}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <LevelBadge level={s.level} />
                    <span
                      aria-hidden="true"
                      className="text-ink-soft transition group-hover:text-accent"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
