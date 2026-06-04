import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti with nt:nn gradation. Strong nt
// in open syllables (tuntia, tuntiin), weak nn in closed (tunnin, tunnilla).
const tunti: Word = {
  fi: "tunti",
  slug: "tunti",
  pos: "substantiivi (tyyppi: risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "hour; (school) lesson",
  selitys:
    "Kuudenkymmenen minuutin ajanjakso; myös oppitunti. Astevaihtelu nt:nn (tunti → tunnin).",
  kuva: { emoji: "⏱️", alt: "tunti – ajanotto, tunti aikaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu nt:nn (tunti → tunnin)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "tuntia", merkitys: "hour (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "tunnin", merkitys: "of the hour" },
      { sija: "partitiivi (mon.)", muoto: "tunteja", merkitys: "hours (partitive pl.)" },
    ],
    huom:
      "Vahva nt avotavussa (tuntia, tuntiin), heikko nn umpitavussa (tunnin, tunnilla). Tarkoittaa myös oppituntia (esim. matematiikan tunti).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tunti" },
          { label: "Partitiivi", form: "tuntia" },
          { label: "Genetiivi", form: "tunnin" },
          { label: "Inessiivi", form: "tunnissa" },
          { label: "Elatiivi", form: "tunnista" },
          { label: "Illatiivi", form: "tuntiin" },
          { label: "Adessiivi", form: "tunnilla" },
          { label: "Ablatiivi", form: "tunnilta" },
          { label: "Allatiivi", form: "tunnille" },
          { label: "Essiivi", form: "tuntina" },
          { label: "Translatiivi", form: "tunniksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tunnit" },
          { label: "Partitiivi", form: "tunteja" },
          { label: "Genetiivi", form: "tuntien" },
          { label: "Illatiivi", form: "tunteihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "oppitunti",
      en: "(school) lesson, class",
      taso: "A2",
      esim: { fi: "Oppitunti kestää 45 minuuttia.", en: "The lesson lasts 45 minutes." },
    },
    {
      fi: "tunnin",
      en: "hourly (in compounds: tuntipalkka)",
      taso: "B1",
      esim: { fi: "Tuntipalkka on viisitoista euroa.", en: "The hourly wage is fifteen euros." },
    },
    {
      fi: "varttitunti",
      en: "quarter of an hour",
      taso: "B1",
      esim: { fi: "Odotin varttitunnin.", en: "I waited a quarter of an hour." },
    },
  ],
  synonyymit: [
    { fi: "oppitunti", en: "lesson (in the school sense)" },
    { fi: "tovi", en: "a while, a moment" },
  ],
  esimerkit: {
    A2: { fi: "Matka kestää tunnin.", en: "The trip takes an hour." },
    B1: { fi: "Odotin bussia puoli tuntia.", en: "I waited half an hour for the bus." },
    B2: {
      fi: "Kokous venyi kahden tunnin mittaiseksi.",
      en: "The meeting stretched to two hours long.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tunti;
