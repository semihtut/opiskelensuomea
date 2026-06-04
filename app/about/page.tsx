import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { Tldr } from "@/components/Tldr";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Tietoa sivustosta ja kirjoittajasta",
  description: `${SITE.name} on ilmainen sivusto suomen oppimiseen. Sisältö tarkistetaan Kielitoimiston sanakirjasta ja Wiktionarysta.`,
  path: "/about",
});

// Author / E-E-A-T page.
export default function AboutPage() {
  const crumbs = [
    { label: "Etusivu", href: "/" },
    { label: "Tietoa", href: "/about" },
  ];

  return (
    <main className="mx-auto max-w-prose px-6 py-8">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs crumbs={crumbs} />

      <h1 className="mt-6 font-display text-3xl font-semibold text-accent">
        Tietoa sivustosta
      </h1>

      <div className="mt-6">
        <Tldr>
          {SITE.name} on ilmainen sivusto suomen oppimiseen. Sen tekee {SITE.author.name},
          ja sisältö tarkistetaan Kielitoimiston sanakirjasta ja Wiktionarysta ennen
          julkaisua. Tavoite: tarkka ja selkeä materiaali jo vähän suomea osaaville.
        </Tldr>
      </div>

      <h2 className="mt-10 text-xl text-accent">Kenelle</h2>
      <p className="mt-2 text-ink">
        Sivusto on tehty oppijoille, jotka osaavat jo vähän suomea mutta tuntevat
        jääneensä jumiin. Suomi 90 -ohjelma vie järjestelmällisesti tasolta A2 kohti B1:tä
        noin tuhannen yleisimmän sanan kautta.
      </p>

      <h2 className="mt-8 text-xl text-accent">Tarkkuus</h2>
      <p className="mt-2 text-ink">
        Kielellinen tarkkuus on tärkein periaate. Jokainen taivutusmuoto — astevaihtelut,
        epäsäännölliset vertailut, -ida-verbit — tarkistetaan auktoritatiivisista lähteistä:
        Kielitoimiston sanakirjasta ja Wiktionarysta. Mitään muotoa ei arvata.
      </p>

      <h2 className="mt-8 text-xl text-accent">Kirjoittaja</h2>
      <p className="mt-2 text-ink">
        Sisällöstä vastaa {SITE.author.name}. Palautetta ja korjauksia otetaan
        kiitollisena vastaan — virheiden korjaaminen pitää materiaalin luotettavana.
      </p>
    </main>
  );
}
