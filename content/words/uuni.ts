import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem uuni-.
// Genitive uunin, partitive uunia, illative uuniin, partitive pl uuneja.
const uuni: Word = {
  fi: "uuni",
  slug: "uuni",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "oven; stove, furnace",
  selitys:
    "Laite ruoan paistamiseen tai lämmittämiseen: 'paistaa uunissa'. Tyyppi 5, ei astevaihtelua. Partitiivin monikko uuneja. Lainasana ruotsista. Vrt. mikroaaltouuni, leivinuuni.",
  kuva: { alt: "uuni – laite ruoan paistamiseen tai lämmittämiseen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "uunin", merkitys: "of the oven" },
      { sija: "partitiivi (yks.)", muoto: "uunia", merkitys: "oven (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "uuneja", merkitys: "ovens (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5, ei astevaihtelua. Partitiivin monikko uuneja (e-vartalo). 'Uunissa' = in the oven (inessiivi). Vrt. mikroaaltouuni = microwave oven, leivinuuni = baking oven.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "uuni" },
          { label: "Partitiivi", form: "uunia" },
          { label: "Genetiivi", form: "uunin" },
          { label: "Inessiivi", form: "uunissa" },
          { label: "Elatiivi", form: "uunista" },
          { label: "Illatiivi", form: "uuniin" },
          { label: "Adessiivi", form: "uunilla" },
          { label: "Ablatiivi", form: "uunilta" },
          { label: "Allatiivi", form: "uunille" },
          { label: "Essiivi", form: "uunina" },
          { label: "Translatiivi", form: "uuniksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "uunit" },
          { label: "Partitiivi", form: "uuneja" },
          { label: "Genetiivi", form: "uunien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mikroaaltouuni",
      en: "microwave oven",
      taso: "B1",
      esim: { fi: "Lämmitin ruoan mikroaaltouunissa.", en: "I heated the food in the microwave." },
    },
    {
      fi: "uunilämpötila",
      en: "oven temperature",
      taso: "B2",
      esim: { fi: "Tarkista uunilämpötila reseptistä.", en: "Check the oven temperature from the recipe." },
    },
    {
      fi: "leivinuuni",
      en: "baking oven, masonry oven",
      taso: "B2",
      esim: { fi: "Vanhassa talossa oli leivinuuni.", en: "The old house had a masonry oven." },
    },
  ],
  synonyymit: [
    { fi: "paistinuuni", en: "baking oven" },
    { fi: "liesi", en: "stove, cooker" },
  ],
  esimerkit: {
    A2: { fi: "Pizza on uunissa.", en: "The pizza is in the oven." },
    B1: { fi: "Laita uuni lämpenemään 200 asteeseen.", en: "Set the oven to heat to 200 degrees." },
    B2: {
      fi: "Kakku jäi uuniin liian pitkäksi aikaa ja paloi pohjasta.",
      en: "The cake stayed in the oven too long and burned at the bottom.",
    },
  },
  updatedAt: "2026-06-06",
};

export default uuni;
