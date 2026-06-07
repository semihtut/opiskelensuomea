import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem johtopäätökse-.
// Genitive johtopäätöksen, partitive johtopäätöstä, partitive pl johtopäätöksiä.
const johtopaatos: Word = {
  fi: "johtopäätös",
  slug: "johtopäätös",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B2",
  en: "conclusion, inference",
  selitys:
    "Lopputulos, johon päädytään päättelemällä: 'tehdä johtopäätös'. Tyyppi 39/vastaus, ei astevaihtelua (-ös → -ökse-). Yhdyssana johto + päätös. Vrt. päätellä, päätös, lopputulos.",
  kuva: { emoji: "🎯", alt: "johtopäätös – lopputulos johon päädytään päättelemällä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo johtopäätökse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "johtopäätöksen", merkitys: "of the conclusion" },
      { sija: "partitiivi (yks.)", muoto: "johtopäätöstä", merkitys: "conclusion (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "johtopäätöksiä", merkitys: "conclusions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ös): genetiivi -ökse-n, partitiivi -ös-tä, partitiivin monikko -öksiä. Yhdyssana johto + päätös. 'Tehdä/vetää johtopäätös' = to draw a conclusion. Vrt. päätellä = to infer.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "johtopäätös" },
          { label: "Partitiivi", form: "johtopäätöstä" },
          { label: "Genetiivi", form: "johtopäätöksen" },
          { label: "Inessiivi", form: "johtopäätöksessä" },
          { label: "Elatiivi", form: "johtopäätöksestä" },
          { label: "Illatiivi", form: "johtopäätökseen" },
          { label: "Adessiivi", form: "johtopäätöksellä" },
          { label: "Ablatiivi", form: "johtopäätökseltä" },
          { label: "Allatiivi", form: "johtopäätökselle" },
          { label: "Essiivi", form: "johtopäätöksenä" },
          { label: "Translatiivi", form: "johtopäätökseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "johtopäätökset" },
          { label: "Partitiivi", form: "johtopäätöksiä" },
          { label: "Genetiivi", form: "johtopäätöksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päätellä",
      en: "to deduce, conclude",
      taso: "B1",
      esim: { fi: "Mitä voimme päätellä?", en: "What can we conclude?" },
    },
    {
      fi: "päätös",
      en: "decision",
      taso: "B1",
      esim: { fi: "Teimme päätöksen.", en: "We made a decision." },
    },
  ],
  synonyymit: [
    { fi: "päätelmä", en: "inference" },
    { fi: "lopputulos", en: "outcome" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on sinun johtopäätöksesi?", en: "What is your conclusion?" },
    B1: { fi: "Älä tee hätäisiä johtopäätöksiä.", en: "Don't jump to hasty conclusions." },
    B2: {
      fi: "Tutkimuksen johtopäätökset herättivät paljon keskustelua alalla.",
      en: "The study's conclusions sparked a lot of discussion in the field.",
    },
  },
  updatedAt: "2026-06-07",
};

export default johtopaatos;
