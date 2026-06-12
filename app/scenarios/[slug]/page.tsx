import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LevelBadge } from "@/components/LevelBadge";
import { ScenarioText } from "@/components/ScenarioText";
import { Tldr } from "@/components/Tldr";
import {
  SCENARIO_CATEGORY_LABEL,
  allScenarios,
  getScenarioByParam,
} from "@/lib/content";
import { breadcrumbSchema, scenarioSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allScenarios().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getScenarioByParam(slug);
  if (!scenario) return {};
  return pageMetadata({
    title: `”${scenario.title}” — arjen tilanne suomeksi (${scenario.level})`,
    description: `${scenario.topic} Suomenkielinen tilanne (taso ${scenario.level}); napauta korostettuja sanoja nähdäksesi käännökset, koko käännös mukana.`,
    path: `/scenarios/${scenario.slug}`,
    type: "article",
    modifiedTime: scenario.updatedAt,
  });
}

export default async function ScenarioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const scenario = getScenarioByParam(slug);
  if (!scenario) notFound();

  const categoryLabel = SCENARIO_CATEGORY_LABEL[scenario.category];
  const formatLabel = scenario.format === "dialogi" ? "Dialogi" : "Kerronta";
  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Tilanteet", href: "/scenarios" },
    { label: scenario.title, href: `/scenarios/${scenario.slug}` },
  ];

  return (
    <main className="mx-auto max-w-page px-6 py-8">
      <JsonLd data={[scenarioSchema(scenario), breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-ink-soft">
        {categoryLabel} · {formatLabel}
      </p>
      <div className="mt-1 flex items-center gap-3">
        <h1 className="font-display text-title font-semibold text-accent hyphenate" lang="fi">
          {scenario.title}
        </h1>
        <LevelBadge level={scenario.level} />
      </div>
      <p className="mt-1 text-ink-soft">{scenario.titleEn}</p>

      <div className="mt-6">
        <Tldr>
          ”{scenario.title}” on arjen tilanne suomeksi (taso {scenario.level}).
          Napauta korostettuja sanoja nähdäksesi niiden englanninkielisen merkityksen;
          koko käännös avautuu tekstin alta. Tilanne kuuluu Suomi 90 -ohjelman viikkoon{" "}
          {scenario.week}.
        </Tldr>
      </div>

      <div className="mt-6">
        <ScenarioText scenario={scenario} />
      </div>

      <section className="mt-8">
        <h2 className="text-2xl">Avainsanat</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {scenario.focus.map((f) => (
            <li
              key={f.fi}
              className="rounded-chip border border-line bg-bg px-3 py-1 text-sm"
            >
              <span className="font-medium text-accent" lang="fi">
                {f.fi}
              </span>
              <span className="text-ink-soft"> — {f.en}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <Link
          href={`/week/${scenario.week}`}
          className="text-link hover:underline"
        >
          ← Viikko {scenario.week} ja sen sanat
        </Link>
      </section>
    </main>
  );
}
