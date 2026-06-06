import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t–d gradation, stem rakkaude-.
// Genitive rakkauden, partitive rakkautta, illative rakkauteen, partitive pl rakkauksia.
const rakkaus: Word = {
  fi: "rakkaus",
  slug: "rakkaus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "love, affection",
  selitys:
    "Syvä lämmin tunne toista kohtaan: 'äidin rakkaus'. Tyyppi 40, astevaihtelu t:d (rakkaus → rakkauden). Juuri adjektiivista rakas (dear). Vrt. rakastaa (to love).",
  kuva: { emoji: "💕", alt: "rakkaus – syvä lämmin tunne toista kohtaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rakkauden", merkitys: "of love" },
      { sija: "partitiivi (yks.)", muoto: "rakkautta", merkitys: "love (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rakkauksia", merkitys: "loves (partitive pl.)" },
    ],
    huom:
      "Loppu -us → vartalo -ude-: rakkaus → rakkauden. Astevaihtelu t:d: rakkauden (d), mutta partitiivi rakkautta (t). Vrt. rakas = dear, rakastaa = to love, rakastua = to fall in love.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "rakkaus" },
          { label: "Partitiivi", form: "rakkautta" },
          { label: "Genetiivi", form: "rakkauden" },
          { label: "Inessiivi", form: "rakkaudessa" },
          { label: "Elatiivi", form: "rakkaudesta" },
          { label: "Illatiivi", form: "rakkauteen" },
          { label: "Adessiivi", form: "rakkaudella" },
          { label: "Ablatiivi", form: "rakkaudelta" },
          { label: "Allatiivi", form: "rakkaudelle" },
          { label: "Essiivi", form: "rakkautena" },
          { label: "Translatiivi", form: "rakkaudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rakkaudet" },
          { label: "Partitiivi", form: "rakkauksia" },
          { label: "Genetiivi", form: "rakkauksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rakastaa",
      en: "to love",
      taso: "A2",
      esim: { fi: "Rakastan sinua.", en: "I love you." },
    },
    {
      fi: "rakastua",
      en: "to fall in love",
      taso: "B1",
      esim: { fi: "He rakastuivat heti.", en: "They fell in love immediately." },
    },
    {
      fi: "rakkauselokuva",
      en: "romance film",
      taso: "B2",
      esim: { fi: "Katsoimme klassisen rakkauselokuvan.", en: "We watched a classic romance film." },
    },
  ],
  synonyymit: [
    { fi: "lempi", en: "love (poetic)" },
    { fi: "kiintymys", en: "affection, attachment" },
  ],
  esimerkit: {
    A2: { fi: "Rakkaus on tärkeää.", en: "Love is important." },
    B1: { fi: "Heidän rakkautensa kesti vuosikymmeniä.", en: "Their love lasted decades." },
    B2: {
      fi: "Sodassa ja rakkaudessa kaikki on sallittua.",
      en: "All's fair in love and war.",
    },
  },
  updatedAt: "2026-06-06",
};

export default rakkaus;
