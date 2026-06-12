import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LevelBadge } from "@/components/LevelBadge";
import { Tldr } from "@/components/Tldr";
import { allWordsAlphabetical } from "@/lib/content";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Suomen sanat — taivutukset ja merkitykset",
  description:
    "Selaa suomen yleisimpiä sanoja. Jokaisella sanalla oma sivunsa: selitys, taivutus, johdokset ja esimerkit tasoilla A2–B2.",
  path: "/words",
});

export default function WordsIndexPage() {
  const words = allWordsAlphabetical();
  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Sanat", href: "/words" },
  ];

  return (
    <main className="mx-auto max-w-page px-6 py-8">
      <JsonLd data={[itemListSchema(words), breadcrumbSchema(crumbs)]} />
      <Breadcrumbs crumbs={crumbs} />

      <h1 className="mt-6 font-display text-title font-semibold text-accent">
        Suomen sanat
      </h1>

      <div className="mt-4">
        <Tldr>
          Jokaisesta sanasta on oma sivunsa: suomenkielinen selitys, englanninkielinen
          merkitys, koko taivutus, johdokset ja esimerkkilauseet tasoilla A2–B2.
          Tällä hetkellä listassa on {words.length} tarkistettua sanaa.
        </Tldr>
      </div>

      <ul className="mt-8 divide-y divide-line rounded-card border border-line bg-surface shadow-soft">
        {words.map((word) => (
          <li key={word.slug}>
            <Link
              href={`/words/${word.slug}`}
              className="flex items-center justify-between gap-4 px-5 py-3 no-underline hover:bg-bg"
            >
              <span className="flex items-baseline gap-3">
                <span className="font-display text-lg font-semibold text-accent" lang="fi">
                  {word.fi}
                </span>
                <span className="text-sm text-ink-soft" lang="en">
                  {word.en}
                </span>
              </span>
              <span className="flex items-center gap-3">
                <span className="hidden text-xs text-ink-soft sm:inline">
                  {word.posClass}
                </span>
                <LevelBadge level={word.level} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
