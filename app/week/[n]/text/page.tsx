import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ReadingText } from "@/components/ReadingText";
import { Tldr } from "@/components/Tldr";
import { allWeeks, getWeek } from "@/lib/content";
import { breadcrumbSchema, readingTextSchema } from "@/lib/schema";
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
    title: `”${week.teksti.title}” — viikon ${week.week} lukuteksti (${week.teksti.level})`,
    description: `${week.teksti.topic} Viikon ${week.week} lukuteksti suomeksi, taso ${week.teksti.level}, käännös mukana.`,
    path: `/week/${week.week}/text`,
    type: "article",
  });
}

export default async function WeekTextPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const week = getWeek(Number(n));
  if (!week) notFound();

  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Ohjelma", href: "/program" },
    { label: `Viikko ${week.week}`, href: `/week/${week.week}` },
    { label: "Teksti", href: `/week/${week.week}/text` },
  ];

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <JsonLd data={[readingTextSchema(week), breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <h1 className="mt-6 font-display text-3xl font-semibold text-accent" lang="fi">
        {week.teksti.title}
      </h1>
      <p className="mt-1 text-ink-soft">
        Viikon {week.week} lukuteksti · taso {week.teksti.level}
      </p>

      <div className="mt-6">
        <Tldr>
          ”{week.teksti.title}” on viikon {week.week} lukuteksti (taso {week.teksti.level}).
          Korostetut sanat ovat viikon kohdesanoja; käännös avautuu tekstin alta.
        </Tldr>
      </div>

      <div className="mt-6">
        <ReadingText teksti={week.teksti} />
      </div>
    </main>
  );
}
