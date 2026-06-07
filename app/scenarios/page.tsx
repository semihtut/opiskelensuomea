import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LevelBadge } from "@/components/LevelBadge";
import { Tldr } from "@/components/Tldr";
import {
  SCENARIO_CATEGORY_LABEL,
  allScenarios,
} from "@/lib/content";
import type { ScenarioCategory } from "@/lib/content-types";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tilanteet — arjen suomea tositilanteissa",
  description:
    "Suomenkielisiä arjen tilanteita: terveysasema, vuokra-asunto, virastossa asiointi ja muut. Napauta sanoja nähdäksesi käännökset. Osa Suomi 90 -ohjelmaa.",
  path: "/scenarios",
});

export default function ScenariosPage() {
  const scenarios = allScenarios();
  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Tilanteet", href: "/scenarios" },
  ];

  // Group scenarios by category, preserving the label-map order.
  const byCategory = (Object.keys(SCENARIO_CATEGORY_LABEL) as ScenarioCategory[])
    .map((category) => ({
      category,
      label: SCENARIO_CATEGORY_LABEL[category],
      items: scenarios.filter((s) => s.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />

      <h1 className="mt-6 font-display text-3xl font-semibold text-accent" lang="fi">
        Tilanteet
      </h1>
      <p className="mt-1 text-ink-soft">Arjen suomea tositilanteissa</p>

      <div className="mt-6">
        <Tldr>
          Tilanteet ovat lyhyitä, tosielämän suomenkielisiä tekstejä ja dialogeja –
          esimerkiksi terveysasemalla, virastossa tai uudessa työpaikassa. Napauta
          korostettuja sanoja nähdäksesi niiden merkityksen. Jokainen tilanne liittyy
          yhteen Suomi 90 -ohjelman viikkoon.
        </Tldr>
      </div>

      {byCategory.map((group) => (
        <section key={group.category} className="mt-8">
          <h2 className="text-xl text-accent" lang="fi">
            {group.label}
          </h2>
          <ul className="mt-3 flex flex-col gap-3">
            {group.items.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/scenarios/${s.slug}`}
                  className="flex items-center justify-between gap-4 rounded-card border border-line bg-surface p-4 no-underline shadow-soft hover:border-accent"
                >
                  <span>
                    <span
                      className="font-display text-lg font-semibold text-accent"
                      lang="fi"
                    >
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">
                      {s.titleEn} · viikko {s.week} ·{" "}
                      {s.format === "dialogi" ? "dialogi" : "kerronta"}
                    </span>
                  </span>
                  <span className="flex items-center gap-3">
                    <LevelBadge level={s.level} />
                    <span aria-hidden="true" className="text-accent">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
