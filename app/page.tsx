import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { LevelBadge } from "@/components/LevelBadge";
import { Tldr } from "@/components/Tldr";
import { getWord } from "@/lib/content";
import type { Word } from "@/lib/content-types";
import { getPartitives } from "@/lib/forms";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Opi suomea Suomi 90 -ohjelmalla",
  description:
    "Ilmainen ja selkeä tapa oppia suomea. Suomi 90 kattaa noin 1000 yleisintä sanaa: selitykset, taivutukset, johdokset ja esimerkit tasoilla A2–B2.",
  path: "/",
});

// Pull one form from a word's full tables by section + case label (data-driven).
function formIn(word: Word, sectionNeedle: string, labelNeedle: string): string {
  const section = word.taivutus?.sections.find((s) => s.title.includes(sectionNeedle));
  return section?.rows.find((r) => r.label.startsWith(labelNeedle))?.form ?? "";
}

// Three program phases, each in its own level accent color.
const PHASES = [
  {
    name: "Reaktivointi",
    weeks: "viikot 1–4",
    level: "A1–A2",
    kuvaus: "Herätetään olemassa oleva suomi: yleisimmät sanat ja perusrakenteet.",
    ring: "border-level-a2",
    text: "text-level-a2",
  },
  {
    name: "Laajennus",
    weeks: "viikot 5–8",
    level: "A2–B1",
    kuvaus: "Laajennetaan sanavarastoa ja kielioppia kohti B1-tasoa.",
    ring: "border-level-b1",
    text: "text-level-b1",
  },
  {
    name: "Sujuvuus",
    weeks: "viikot 9–13",
    level: "B1–B2",
    kuvaus: "Vahvistetaan sujuvuutta pidemmillä teksteillä ja vivahteilla.",
    ring: "border-level-b2",
    text: "text-level-b2",
  },
];

const STATS = [
  "~1000 sanaa",
  "13 viikkoa",
  "~12 sanaa/päivä",
  "viikoittainen lukuteksti",
];

export default function HomePage() {
  const talo = getWord("talo")!;
  const { sg: partSg, pl: partPl } = getPartitives(talo);

  // Mini declension rows for the sample card (singular + plural).
  const declension = [
    { sija: "Nominatiivi", yks: formIn(talo, "Yksikkö", "Nominatiivi"), mon: formIn(talo, "Monikko", "Nominatiivi") },
    { sija: "Genetiivi", yks: formIn(talo, "Yksikkö", "Genetiivi"), mon: formIn(talo, "Monikko", "Genetiivi") },
    { sija: "Partitiivi", yks: formIn(talo, "Yksikkö", "Partitiivi"), mon: formIn(talo, "Monikko", "Partitiivi") },
  ];

  return (
    <main className="mx-auto max-w-page-wide px-6 py-12">
      {/* Hero: benefit headline + CTAs on the left, sample word card on the right */}
      <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h1 className="font-display text-display font-semibold text-ink hyphenate" lang="fi">
            Opi suomen 1000 yleisintä sanaa{" "}
            <span className="text-accent">kolmessa kuukaudessa.</span>
          </h1>
          <p className="mt-4 max-w-prose text-lg text-ink-soft" lang="fi">
            Tehty oppijoille, jotka osaavat jo vähän mutta haluavat eteenpäin.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/program">Aloita Suomi 90</ButtonLink>
            <ButtonLink href="/words" variant="secondary">
              Selaa sanoja
            </ButtonLink>
          </div>

          <div className="mt-8">
            <Tldr>
              Suomi 90 on 13 viikon ohjelma, joka kattaa noin 1000 yleisintä suomen sanaa.
              Jokaisella sanalla on oma sivunsa: selitys, koko taivutus, johdokset ja
              esimerkit tasoilla A2–B2. Kaikki muodot on tarkistettu.
            </Tldr>
          </div>
        </div>

        {/* Sample word card — the distinctive product showcase, from real data */}
        <article
          className="rounded-card border border-line bg-surface p-6 shadow-soft"
          aria-label={`Esimerkkisana: ${talo.fi}`}
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">
            Esimerkkisana
          </p>
          <div className="mt-1 flex items-baseline gap-3">
            <span className="font-display text-4xl font-semibold text-accent hyphenate" lang="fi">
              {talo.fi}
            </span>
            <span className="text-lg text-ink-soft" lang="en">
              {talo.en}
            </span>
          </div>

          {/* Terracotta partitive box */}
          <div className="mt-4 rounded-card border-l-4 border-accent bg-bg p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Partitiivi
            </p>
            <dl className="mt-1 flex gap-8">
              <div>
                <dt className="text-xs text-ink-soft">yks.</dt>
                <dd className="font-display text-xl text-accent" lang="fi">{partSg}</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-soft">mon.</dt>
                <dd className="font-display text-xl text-accent" lang="fi">{partPl}</dd>
              </div>
            </dl>
          </div>

          {/* Mini declension table */}
          <table className="mt-4 w-full border-collapse text-sm">
            <caption className="sr-only">talo-sanan taivutus</caption>
            <thead>
              <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-ink-soft">
                <th scope="col" className="py-1.5 font-semibold">Sija</th>
                <th scope="col" className="py-1.5 text-right font-semibold">Yksikkö</th>
                <th scope="col" className="py-1.5 text-right font-semibold">Monikko</th>
              </tr>
            </thead>
            <tbody>
              {declension.map((row) => (
                <tr key={row.sija} className="border-b border-line last:border-0">
                  <th scope="row" className="py-1.5 text-left font-normal text-ink-soft">
                    {row.sija}
                  </th>
                  <td className="py-1.5 text-right font-display font-medium text-accent" lang="fi">
                    {row.yks}
                  </td>
                  <td className="py-1.5 text-right font-display font-medium text-accent" lang="fi">
                    {row.mon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* One A2 example */}
          <div className="mt-4 border-t border-line pt-4">
            <LevelBadge level="A2" />
            <p className="mt-2 font-display text-lg text-ink" lang="fi">
              {talo.esimerkit.A2.fi}
            </p>
            <p className="mt-0.5 text-sm text-ink-soft" lang="en">
              {talo.esimerkit.A2.en}
            </p>
          </div>

          <Link
            href={`/words/${talo.slug}`}
            className="mt-4 inline-block text-sm font-semibold text-link"
          >
            Katso koko taivutus →
          </Link>
        </article>
      </section>

      {/* How it works — three phase tiles in their level colors + a stat row */}
      <section className="mt-16">
        <h2 className="font-display text-2xl">Kolme vaihetta kohti sujuvuutta</h2>
        <p className="mt-1 text-ink-soft">
          13 viikkoa, jaettuna kolmeen vaiheeseen — alkeista kohti sujuvaa suomea.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PHASES.map((phase) => (
            <div
              key={phase.name}
              className={`rounded-card border border-l-4 border-line bg-surface p-5 shadow-soft ${phase.ring}`}
            >
              <h3 className={`font-display text-xl font-semibold ${phase.text}`} lang="fi">
                {phase.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {phase.weeks} · {phase.level}
              </p>
              <p className="mt-2 text-sm text-ink" lang="fi">
                {phase.kuvaus}
              </p>
            </div>
          ))}
        </div>

        {/* Stat row */}
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-card border border-line bg-surface px-5 py-4 text-sm text-ink shadow-soft">
          {STATS.map((stat, i) => (
            <li key={stat} className="flex items-center gap-4">
              {i > 0 && <span aria-hidden="true" className="text-line">·</span>}
              <span className="font-medium">{stat}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
