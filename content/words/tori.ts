import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation. Genitive torin,
// partitive toria, illative toriin, partitive pl toreja.
const tori: Word = {
  fi: "tori",
  slug: "tori",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "market square; square",
  selitys:
    "Avoin paikka kaupungissa, jossa myydään tavaraa. Tyyppi 5, ei astevaihtelua.",
  kuva: { alt: "tori – torikojuja kauppatorilla" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "torin", merkitys: "of the market square" },
      { sija: "partitiivi (yks.)", muoto: "toria", merkitys: "square (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "toreja", merkitys: "squares (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Torilla' = at the market square. Monikon partitiivi toreja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tori" },
          { label: "Partitiivi", form: "toria" },
          { label: "Genetiivi", form: "torin" },
          { label: "Inessiivi", form: "torissa" },
          { label: "Elatiivi", form: "torista" },
          { label: "Illatiivi", form: "toriin" },
          { label: "Adessiivi", form: "torilla" },
          { label: "Ablatiivi", form: "torilta" },
          { label: "Allatiivi", form: "torille" },
          { label: "Essiivi", form: "torina" },
          { label: "Translatiivi", form: "toriksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "torit" },
          { label: "Partitiivi", form: "toreja" },
          { label: "Genetiivi", form: "torien" },
          { label: "Inessiivi", form: "toreissa" },
          { label: "Illatiivi", form: "toreihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kauppatori",
      en: "market square",
      taso: "A2",
      esim: { fi: "Kauppatorilla myydään kalaa.", en: "They sell fish at the market square." },
    },
    {
      fi: "torikauppa",
      en: "market trade",
      taso: "B1",
      esim: { fi: "Torikauppa vilkastuu kesällä.", en: "Market trade picks up in the summer." },
    },
    {
      fi: "toripäivä",
      en: "market day",
      taso: "B1",
      esim: { fi: "Lauantai on vilkas toripäivä.", en: "Saturday is a busy market day." },
    },
  ],
  synonyymit: [
    { fi: "kauppapaikka", en: "marketplace" },
    { fi: "aukio", en: "open square, plaza" },
  ],
  esimerkit: {
    A2: { fi: "Ostin marjoja torilta.", en: "I bought berries at the market." },
    B1: { fi: "Tori on keskellä kaupunkia.", en: "The market square is in the middle of the city." },
    B2: {
      fi: "Kesäaamuisin tori täyttyy tuoreista vihanneksista.",
      en: "On summer mornings the market fills with fresh vegetables.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tori;
