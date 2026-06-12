import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo with t:d gradation. Strong t in
// open syllables (maitoa, maitoon), weak d in closed (maidon, maidossa). Mass noun
// — used mostly in the singular.
const maito: Word = {
  fi: "maito",
  slug: "maito",
  pos: "substantiivi (tyyppi: valo)",
  posClass: "substantiivi",
  level: "A1",
  en: "milk",
  selitys:
    "Valkoinen juoma, jota saadaan esimerkiksi lehmästä. Astevaihtelu t:d (maito → maidon). Ainesana — esiintyy enimmäkseen yksikössä.",
  kuva: { alt: "maito – lasi maitoa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (maito → maidon)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "maitoa", merkitys: "milk (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "maidon", merkitys: "of the milk" },
      { sija: "illatiivi (yks.)", muoto: "maitoon", merkitys: "into the milk" },
    ],
    huom:
      "Vahva t avotavussa (maitoa, maitoon), heikko d umpitavussa (maidon, maidossa). Ainesanana monikko on harvinainen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "maito" },
          { label: "Partitiivi", form: "maitoa" },
          { label: "Genetiivi", form: "maidon" },
          { label: "Inessiivi", form: "maidossa" },
          { label: "Elatiivi", form: "maidosta" },
          { label: "Illatiivi", form: "maitoon" },
          { label: "Adessiivi", form: "maidolla" },
          { label: "Ablatiivi", form: "maidolta" },
          { label: "Allatiivi", form: "maidolle" },
          { label: "Essiivi", form: "maitona" },
          { label: "Translatiivi", form: "maidoksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maitokahvi",
      en: "coffee with milk, café au lait",
      taso: "A2",
      esim: { fi: "Tilaan ison maitokahvin.", en: "I'll order a large coffee with milk." },
    },
    {
      fi: "maitotuote",
      en: "dairy product",
      taso: "B1",
      esim: { fi: "Juusto on maitotuote.", en: "Cheese is a dairy product." },
    },
    {
      fi: "maidoton",
      en: "dairy-free, milk-free",
      taso: "B2",
      esim: { fi: "Hän noudattaa maidotonta ruokavaliota.", en: "She follows a dairy-free diet." },
    },
  ],
  synonyymit: [
    { fi: "täysmaito", en: "whole milk" },
    { fi: "kevytmaito", en: "low-fat milk" },
  ],
  esimerkit: {
    A2: { fi: "Juon maitoa joka päivä.", en: "I drink milk every day." },
    B1: { fi: "Kaada maitoa lasiin.", en: "Pour milk into the glass." },
    B2: {
      fi: "Maidon hinta on noussut viime vuonna.",
      en: "The price of milk has risen over the past year.",
    },
  },
  updatedAt: "2026-06-04",
};

export default maito;
