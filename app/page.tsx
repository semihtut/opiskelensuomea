import Link from "next/link";
import { Tldr } from "@/components/Tldr";
import { allWords } from "@/lib/content";

// Home / landing. A calm editorial hero + a small bento grid of entry points.
export default function HomePage() {
  const wordCount = allWords().length;

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <section className="text-center">
        <h1 className="font-display text-4xl font-semibold text-accent sm:text-[3.5rem]">
          Opiskelen Suomea
        </h1>
        <p className="mx-auto mt-3 max-w-prose text-lg text-ink-soft" lang="fi">
          Selkeä ja tarkka tapa oppia suomea — tehty oppijoille, jotka osaavat jo vähän
          mutta haluavat eteenpäin.
        </p>
      </section>

      <div className="mx-auto mt-8 max-w-prose">
        <Tldr>
          Suomi 90 on 13 viikon ohjelma, joka kattaa noin 1000 yleisintä suomen sanaa.
          Jokaisella sanalla on oma sivunsa: selitys, koko taivutus, johdokset ja
          esimerkit tasoilla A2–B2. Kaikki muodot on tarkistettu.
        </Tldr>
      </div>

      {/* Bento grid of entry points */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <Link
          href="/program"
          className="rounded-card border border-line bg-surface p-6 no-underline shadow-soft transition hover:border-accent sm:col-span-2 sm:row-span-2"
        >
          <h2 className="font-display text-2xl text-accent">Suomi 90 -ohjelma</h2>
          <p className="mt-2 text-ink-soft">
            13 viikkoa, kolme vaihetta: Reaktivointi, Laajennus, Sujuvuus. Noin 12 sanaa
            päivässä ja viikoittainen lukuteksti.
          </p>
          <span className="mt-4 inline-block font-semibold text-link">
            Katso ohjelma →
          </span>
        </Link>

        <Link
          href="/words"
          className="rounded-card border border-line bg-surface p-6 no-underline shadow-soft transition hover:border-accent"
        >
          <h2 className="font-display text-xl text-accent">Sanat</h2>
          <p className="mt-1 text-sm text-ink-soft">
            {wordCount} tarkistettua sanaa, koko taivutus mukana.
          </p>
        </Link>

        <Link
          href="/week/1"
          className="rounded-card border border-line bg-surface p-6 no-underline shadow-soft transition hover:border-accent"
        >
          <h2 className="font-display text-xl text-accent">Viikko 1</h2>
          <p className="mt-1 text-sm text-ink-soft">
            Arjen sanat ja perusverbit + lukuteksti.
          </p>
        </Link>
      </div>
    </main>
  );
}
