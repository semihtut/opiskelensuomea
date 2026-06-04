import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DeclensionTable } from "@/components/DeclensionTable";
import { ExampleList } from "@/components/ExampleList";
import { Faq } from "@/components/Faq";
import { Flashcard } from "@/components/Flashcard";
import { JohdoksetCards } from "@/components/JohdoksetCards";
import { JsonLd } from "@/components/JsonLd";
import { LevelBadge } from "@/components/LevelBadge";
import { PartitiveBox } from "@/components/PartitiveBox";
import { SummaryForms } from "@/components/SummaryForms";
import { SynonymChips } from "@/components/SynonymChips";
import { Tldr } from "@/components/Tldr";
import { allWords, getWordByParam, neighbours } from "@/lib/content";
import { breadcrumbSchema, faqSchema, wordSchema } from "@/lib/schema";
import { wordMetadata } from "@/lib/seo";
import { wordFaq, wordTldr } from "@/lib/word-copy";

// Statically generate one page per word (great Core Web Vitals + crawlability).
export function generateStaticParams() {
  return allWords().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const word = getWordByParam(slug);
  return word ? wordMetadata(word) : {};
}

export default async function WordPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const word = getWordByParam(slug);
  if (!word) notFound();

  const { prev, next } = neighbours(word.slug);
  const faq = wordFaq(word);
  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Sanat", href: "/words" },
    { label: word.fi, href: `/words/${word.slug}` },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-8">
      <JsonLd data={[wordSchema(word), faqSchema(faq), breadcrumbSchema(crumbs)]} />
      <Breadcrumbs
        crumbs={crumbs}
        prev={prev ? { label: prev.fi, href: `/words/${prev.slug}` } : undefined}
        next={next ? { label: next.fi, href: `/words/${next.slug}` } : undefined}
      />

      {/* Hero: single H1 + meaning + TL;DR on the left, interactive flashcard on the right */}
      <section className="mt-6 grid items-start gap-8 lg:grid-cols-[1fr_22rem]">
        <div>
          <header>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-4xl font-semibold text-accent" lang="fi">
                {word.fi}
              </h1>
              <LevelBadge level={word.level} />
            </div>
            <p className="mt-1 text-xl text-ink" lang="en">
              {word.en}
            </p>
            <p className="mt-1 text-sm text-ink-soft">{word.pos}</p>
          </header>

          <p className="mt-4 max-w-prose text-ink" lang="fi">
            {word.selitys}
          </p>

          <div className="mt-6">
            <Tldr>{wordTldr(word)}</Tldr>
          </div>
        </div>

        <div className="lg:sticky lg:top-6">
          <Flashcard word={word} trackProgress />
        </div>
      </section>

      {/* Key forms (always visible) + partitive callout for nominals */}
      <section className="mt-8">
        <h2 className="text-xl text-accent">Avainmuodot</h2>
        <div className="mt-3 grid gap-4">
          <SummaryForms muodot={word.kielioppi.muodot} />
          <PartitiveBox word={word} />
        </div>
        {word.kielioppi.huom && (
          <p className="mt-3 rounded-card border border-line bg-bg p-3 text-sm text-ink-soft">
            <span className="font-semibold text-ink">Huom. </span>
            {word.kielioppi.huom}
          </p>
        )}
      </section>

      {/* Full conjugation/declension tables, collapsed */}
      {word.taivutus && word.taivutus.sections.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl text-accent">Taivutus</h2>
          <div className="mt-3">
            <DeclensionTable sections={word.taivutus.sections} />
          </div>
        </section>
      )}

      {/* Example sentences by level */}
      <section className="mt-8">
        <h2 className="text-xl text-accent">Esimerkkilauseet</h2>
        <div className="mt-3">
          <ExampleList examples={word.esimerkit} />
        </div>
      </section>

      {/* Derived words */}
      {word.johdokset.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl text-accent">Johdokset ja sukulaissanat</h2>
          <div className="mt-3">
            <JohdoksetCards johdokset={word.johdokset} />
          </div>
        </section>
      )}

      {/* Synonyms */}
      {word.synonyymit.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl text-accent">Synonyymit</h2>
          <div className="mt-3">
            <SynonymChips synonyms={word.synonyymit} />
          </div>
        </section>
      )}

      {/* FAQ (mirrors FAQPage JSON-LD added in Phase 5) */}
      <section className="mt-10">
        <Faq items={faq} />
      </section>

      {/* Author + updated date (E-E-A-T) */}
      <p className="mt-10 border-t border-line pt-4 text-sm text-ink-soft">
        Päivitetty{" "}
        <time dateTime={word.updatedAt}>{word.updatedAt}</time>. Muodot tarkistettu
        Kielitoimiston sanakirjasta ja Wiktionarysta.
      </p>
    </main>
  );
}
