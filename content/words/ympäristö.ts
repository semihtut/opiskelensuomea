import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem ympäristö-.
// Genitive ympäristön, partitive ympäristöä, illative ympäristöön, partitive pl ympäristöjä.
const ymparisto: Word = {
  fi: "ympäristö",
  slug: "ympäristö",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "environment, surroundings",
  selitys:
    "Ympäröivä alue ja olosuhteet: 'puhdas ympäristö'. Tyyppi 1, ei astevaihtelua. Johdettu sanasta ympäri (+ -stö). Vrt. ympäristönsuojelu (environmental protection), työympäristö (work environment).",
  kuva: { alt: "ympäristö – ympäröivä alue ja olosuhteet" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ympäristön", merkitys: "of the environment" },
      { sija: "partitiivi (yks.)", muoto: "ympäristöä", merkitys: "environment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ympäristöjä", merkitys: "environments (partitive pl.)" },
    ],
    huom:
      "Kollektiivijohdos -stö. 'Suojella ympäristöä.' Vrt. ympäri = around, ympäröidä = to surround, asuinympäristö = living environment.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ympäristö" },
          { label: "Partitiivi", form: "ympäristöä" },
          { label: "Genetiivi", form: "ympäristön" },
          { label: "Inessiivi", form: "ympäristössä" },
          { label: "Elatiivi", form: "ympäristöstä" },
          { label: "Illatiivi", form: "ympäristöön" },
          { label: "Adessiivi", form: "ympäristöllä" },
          { label: "Ablatiivi", form: "ympäristöltä" },
          { label: "Allatiivi", form: "ympäristölle" },
          { label: "Essiivi", form: "ympäristönä" },
          { label: "Translatiivi", form: "ympäristöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ympäristöt" },
          { label: "Partitiivi", form: "ympäristöjä" },
          { label: "Genetiivi", form: "ympäristöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ympäristönsuojelu",
      en: "environmental protection",
      taso: "B2",
      esim: { fi: "Ympäristönsuojelu koskee meitä kaikkia.", en: "Environmental protection concerns us all." },
    },
    {
      fi: "ympäristöystävällinen",
      en: "environmentally friendly",
      taso: "B2",
      esim: { fi: "Valitsin ympäristöystävällisen tuotteen.", en: "I chose an environmentally friendly product." },
    },
    {
      fi: "lähiympäristö",
      en: "immediate surroundings",
      taso: "B2",
      esim: { fi: "Tunnen lähiympäristöni hyvin.", en: "I know my immediate surroundings well." },
    },
  ],
  synonyymit: [
    { fi: "luonto", en: "nature" },
    { fi: "miljöö", en: "milieu, setting" },
  ],
  esimerkit: {
    A2: { fi: "Pidetään ympäristö puhtaana.", en: "Let's keep the environment clean." },
    B1: { fi: "Auton pakokaasut saastuttavat ympäristöä.", en: "Car exhaust pollutes the environment." },
    B2: {
      fi: "Rauhallinen työympäristö parantaa keskittymistä huomattavasti.",
      en: "A calm work environment improves concentration considerably.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ymparisto;
