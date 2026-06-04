import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReadingText } from "@/components/ReadingText";
import { Tldr } from "@/components/Tldr";
import { allWeeks, getWeek } from "@/lib/content";

export function generateStaticParams() {
  return allWeeks().map((w) => ({ n: String(w.week) }));
}

export default async function WeekTextPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const week = getWeek(Number(n));
  if (!week) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-8">
      <Breadcrumbs
        crumbs={[
          { label: "Etusivu", href: "/" },
          { label: "Ohjelma", href: "/program" },
          { label: `Viikko ${week.week}`, href: `/week/${week.week}` },
          { label: "Teksti", href: `/week/${week.week}/text` },
        ]}
      />

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
