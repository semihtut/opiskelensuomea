import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (varma): Kotus type 9/kala, no gradation, stem itsevarma-.
// Genitive itsevarman, partitive itsevarmaa, partitive pl itsevarmoja.
const itsevarma: Word = {
  fi: "itsevarma",
  slug: "itsevarma",
  pos: "adjektiivi (tyyppi 9/kala)",
  posClass: "adjektiivi",
  level: "B2",
  en: "self-confident, self-assured",
  selitys:
    "Sellainen, joka luottaa itseensä: 'itsevarma esiintyjä'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko itsevarmoja. Yhdyssana itse + varma. Vrt. varma, itsevarmuus, itseluottamus.",
  kuva: { alt: "itsevarma – itseensä luottava" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 9/kala; ei astevaihtelua (vartalo itsevarma-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "itsevarman", merkitys: "of self-confident" },
      { sija: "partitiivi (yks.)", muoto: "itsevarmaa", merkitys: "self-confident (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "itsevarmoja", merkitys: "self-confident (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: partitiivin monikko -oja (itsevarmoja, a→o). Yhdyssana itse + varma. Vrt. varma = sure, itsevarmuus = self-confidence, itseluottamus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "itsevarma" },
          { label: "Partitiivi", form: "itsevarmaa" },
          { label: "Genetiivi", form: "itsevarman" },
          { label: "Inessiivi", form: "itsevarmassa" },
          { label: "Elatiivi", form: "itsevarmasta" },
          { label: "Illatiivi", form: "itsevarmaan" },
          { label: "Adessiivi", form: "itsevarmalla" },
          { label: "Allatiivi", form: "itsevarmalle" },
          { label: "Translatiivi", form: "itsevarmaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "itsevarmat" },
          { label: "Partitiivi", form: "itsevarmoja" },
          { label: "Genetiivi", form: "itsevarmojen" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "itsevarma" },
          { label: "Komparatiivi", form: "itsevarmempi" },
          { label: "Superlatiivi", form: "itsevarmin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "itsevarmuus",
      en: "self-confidence",
      taso: "B2",
      esim: { fi: "Hän esiintyi itsevarmuutta huokuen.", en: "She performed exuding self-confidence." },
    },
    {
      fi: "itseluottamus",
      en: "self-confidence, self-esteem",
      taso: "B2",
      esim: { fi: "Onnistuminen kasvatti itseluottamusta.", en: "Success boosted self-confidence." },
    },
  ],
  synonyymit: [
    { fi: "varma", en: "sure, confident" },
    { fi: "vakuuttava", en: "assured, convincing" },
  ],
  esimerkit: {
    A2: { fi: "Hän on hyvin itsevarma.", en: "He is very self-confident." },
    B1: { fi: "Itsevarma esiintyjä rauhoitti yleisön.", en: "The confident performer calmed the audience." },
    B2: {
      fi: "Liiallinen itsevarmuus voi joskus johtaa huolimattomiin päätöksiin.",
      en: "Excessive self-confidence can sometimes lead to careless decisions.",
    },
  },
  updatedAt: "2026-06-07",
};

export default itsevarma;
