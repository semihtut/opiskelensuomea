import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem toistu-.
// Present hän toistuu; imperfect hän toistui; NUT toistunut. Intransitive, mostly 3rd person.
const toistua: Word = {
  fi: "toistua",
  slug: "toistua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to recur, repeat itself, happen again",
  selitys:
    "Tapahtua uudelleen tai toistuvasti: 'sama virhe toistuu'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen, useimmiten 3. persoonassa (toistuu, toistui). Johdettu verbistä toistaa. Vrt. toisto, jatkua.",
  kuva: { emoji: "🔁", alt: "toistua – tapahtua uudelleen ja uudelleen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo toistu-",
    muodot: [
      { sija: "preesens (hän)", muoto: "toistuu", merkitys: "(it) recurs" },
      { sija: "imperfekti (hän)", muoto: "toistui", merkitys: "(it) recurred" },
      { sija: "NUT-partisiippi", muoto: "toistunut", merkitys: "(has) recurred" },
    ],
    huom:
      "Intransitiivinen ja useimmiten yksikön/monikon 3. persoonassa (asia toistuu, asiat toistuvat). Ei astevaihtelua. Johdettu transitiivisesta toistaa = to repeat. Vrt. toistuva = recurring, toisto = repetition.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "toistuu" },
          { label: "ne / asiat", form: "toistuvat" },
          { label: "kielto", form: "ei toistu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "toistui" },
          { label: "ne / asiat", form: "toistuivat" },
          { label: "kielto", form: "ei toistunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on toistunut" },
          { label: "ne / asiat", form: "ovat toistuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "toistaa",
      en: "to repeat",
      taso: "B1",
      esim: { fi: "Toista perässäni.", en: "Repeat after me." },
    },
    {
      fi: "toistuva",
      en: "recurring, repeated",
      taso: "B2",
      esim: { fi: "Kyse on toistuvasta ongelmasta.", en: "It is a recurring problem." },
    },
    {
      fi: "toisto",
      en: "repetition",
      taso: "B1",
      esim: { fi: "Oppiminen vaatii toistoa.", en: "Learning requires repetition." },
    },
  ],
  synonyymit: [
    { fi: "tapahtua uudelleen", en: "to happen again" },
    { fi: "uusiutua", en: "to recur, renew" },
  ],
  esimerkit: {
    A2: { fi: "Sama uni toistuu usein.", en: "The same dream recurs often." },
    B1: { fi: "Virhe toistui useita kertoja.", en: "The error recurred several times." },
    B2: {
      fi: "Historia toistuu, jos menneisyydestä ei oteta opiksi.",
      en: "History repeats itself if no lessons are learned from the past.",
    },
  },
  updatedAt: "2026-06-07",
};

export default toistua;
