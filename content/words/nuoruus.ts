import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem nuoruude- ~ nuoruute-.
// Genitive nuoruuden, partitive nuoruutta, partitive pl nuoruuksia.
const nuoruus: Word = {
  fi: "nuoruus",
  slug: "nuoruus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "youth",
  selitys:
    "Elämänvaihe, jolloin ihminen on nuori: 'nuoruuden muistot'. Tyyppi 40/kalleus, astevaihtelu t:d (nuoruus → nuoruuden). Adjektiivista nuori. Vrt. nuori, lapsuus, vanhuus.",
  kuva: { alt: "nuoruus – elämänvaihe jolloin ihminen on nuori" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (nuoruute- ~ nuoruude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "nuoruuden", merkitys: "of youth" },
      { sija: "partitiivi (yks.)", muoto: "nuoruutta", merkitys: "youth (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "nuoruuksia", merkitys: "youths (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-uus): genetiivi -uuden (t:d), partitiivi -uutta. Ominaisuudennimi adjektiivista nuori. Yleensä yksikössä. Vrt. nuori, lapsuus, vanhuus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "nuoruus" },
          { label: "Partitiivi", form: "nuoruutta" },
          { label: "Genetiivi", form: "nuoruuden" },
          { label: "Inessiivi", form: "nuoruudessa" },
          { label: "Elatiivi", form: "nuoruudesta" },
          { label: "Illatiivi", form: "nuoruuteen" },
          { label: "Adessiivi", form: "nuoruudella" },
          { label: "Ablatiivi", form: "nuoruudelta" },
          { label: "Allatiivi", form: "nuoruudelle" },
          { label: "Essiivi", form: "nuoruutena" },
          { label: "Translatiivi", form: "nuoruudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nuoruudet" },
          { label: "Partitiivi", form: "nuoruuksia" },
          { label: "Genetiivi", form: "nuoruuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nuori",
      en: "young; a young person",
      taso: "A2",
      esim: { fi: "Hän on vielä nuori.", en: "She is still young." },
    },
    {
      fi: "nuoruusvuodet",
      en: "the years of youth",
      taso: "B2",
      esim: { fi: "Vietin nuoruusvuoteni maalla.", en: "I spent my youth in the countryside." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Muistan nuoruuteni hyvin.", en: "I remember my youth well." },
    B1: { fi: "Nuoruudessa on paljon mahdollisuuksia.", en: "In youth there are many possibilities." },
    B2: {
      fi: "Hän aloitti soittamisen jo varhaisessa nuoruudessa.",
      en: "He started playing already in his early youth.",
    },
  },
  updatedAt: "2026-06-07",
};

export default nuoruus;
