import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 15/korkea, no gradation. Genitive tärkeän,
// partitive tärkeää, illative tärkeään, partitive pl tärkeitä. Comp tärkeämpi, superl tärkein.
const tarkea: Word = {
  fi: "tärkeä",
  slug: "tärkeä",
  pos: "adjektiivi (tyyppi 15/korkea)",
  posClass: "adjektiivi",
  level: "A1",
  en: "important, significant",
  selitys:
    "Suuri merkitys tai arvo. Tyyppi 15, ei astevaihtelua. Monikon partitiivi tärkeitä.",
  kuva: { alt: "tärkeä – tärkeä, merkityksellinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 15/korkea; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tärkeän", merkitys: "of the important" },
      { sija: "partitiivi (yks.)", muoto: "tärkeää", merkitys: "important (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tärkeitä", merkitys: "important (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi tärkeitä. Vertailu tärkeämpi/tärkein. 'On tärkeää, että…' = it is important that…",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "tärkeä" },
          { label: "Partitiivi", form: "tärkeää" },
          { label: "Genetiivi", form: "tärkeän" },
          { label: "Inessiivi", form: "tärkeässä" },
          { label: "Illatiivi", form: "tärkeään" },
          { label: "Adessiivi", form: "tärkeällä" },
          { label: "Essiivi", form: "tärkeänä" },
          { label: "Translatiivi", form: "tärkeäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tärkeät" },
          { label: "Partitiivi", form: "tärkeitä" },
          { label: "Genetiivi", form: "tärkeiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "tärkeämpi" },
          { label: "Komparatiivi (gen.)", form: "tärkeämmän" },
          { label: "Komparatiivi (part.)", form: "tärkeämpää" },
          { label: "Superlatiivi (nom.)", form: "tärkein" },
          { label: "Superlatiivi (gen.)", form: "tärkeimmän" },
          { label: "Superlatiivi (part.)", form: "tärkeintä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tärkeys",
      en: "importance",
      taso: "B2",
      esim: { fi: "Ymmärrän asian tärkeyden.", en: "I understand the importance of the matter." },
    },
    {
      fi: "tärkeästi",
      en: "importantly",
      taso: "B2",
      esim: { fi: "Hän esiintyi tärkeästi.", en: "He carried himself with importance." },
    },
    {
      fi: "elintärkeä",
      en: "vital, essential",
      taso: "B2",
      esim: { fi: "Vesi on elintärkeää.", en: "Water is vital." },
    },
  ],
  synonyymit: [
    { fi: "merkittävä", en: "significant" },
    { fi: "olennainen", en: "essential" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on tärkeä asia.", en: "This is an important matter." },
    B1: { fi: "Terveys on tärkeämpää kuin raha.", en: "Health is more important than money." },
    B2: {
      fi: "Tärkeintä on, että kaikki pääsivät turvallisesti kotiin.",
      en: "The most important thing is that everyone got home safely.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tarkea;
