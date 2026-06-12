import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem luotettava-. Participle of luottaa.
// Genitive luotettavan, partitive luotettavaa, partitive pl luotettavia.
const luotettava: Word = {
  fi: "luotettava",
  slug: "luotettava",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "reliable, trustworthy, dependable",
  selitys:
    "Sellainen, johon voi luottaa: 'luotettava lähde'. Tyyppi 10/koira, ei astevaihtelua. Verbin luottaa partisiippi. Vastakohta epäluotettava. Vrt. luottaa, luotettavuus.",
  kuva: { alt: "luotettava – sellainen johon voi luottaa" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua (vartalo luotettava-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "luotettavan", merkitys: "of reliable" },
      { sija: "partitiivi (yks.)", muoto: "luotettavaa", merkitys: "reliable (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "luotettavia", merkitys: "reliable (partitive pl.)" },
    ],
    huom:
      "Verbin luottaa partisiippi, käytetään adjektiivina. Partitiivin monikko luotettavia. Vastakohta epäluotettava. Vrt. luottaa = to trust, luotettavuus = reliability.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "luotettava" },
          { label: "Partitiivi", form: "luotettavaa" },
          { label: "Genetiivi", form: "luotettavan" },
          { label: "Inessiivi", form: "luotettavassa" },
          { label: "Elatiivi", form: "luotettavasta" },
          { label: "Illatiivi", form: "luotettavaan" },
          { label: "Adessiivi", form: "luotettavalla" },
          { label: "Allatiivi", form: "luotettavalle" },
          { label: "Translatiivi", form: "luotettavaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "luotettavat" },
          { label: "Partitiivi", form: "luotettavia" },
          { label: "Genetiivi", form: "luotettavien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "luotettava" },
          { label: "Komparatiivi", form: "luotettavampi" },
          { label: "Superlatiivi", form: "luotettavin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luotettavuus",
      en: "reliability",
      taso: "B2",
      esim: { fi: "Tiedon luotettavuus on tärkeää.", en: "The reliability of information is important." },
    },
    {
      fi: "epäluotettava",
      en: "unreliable",
      taso: "B2",
      esim: { fi: "Lähde oli epäluotettava.", en: "The source was unreliable." },
    },
  ],
  synonyymit: [
    { fi: "varma", en: "sure, dependable" },
    { fi: "uskottava", en: "credible" },
  ],
  esimerkit: {
    A2: { fi: "Hän on luotettava ystävä.", en: "She is a reliable friend." },
    B1: { fi: "Käytä vain luotettavia lähteitä.", en: "Use only reliable sources." },
    B2: {
      fi: "Auto on vanha mutta yhä erittäin luotettava.",
      en: "The car is old but still very reliable.",
    },
  },
  updatedAt: "2026-06-07",
};

export default luotettava;
