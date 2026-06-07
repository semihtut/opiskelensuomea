import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem maahanmuuttaja-.
// Genitive maahanmuuttajan, partitive maahanmuuttajaa, partitive pl maahanmuuttajia.
const maahanmuuttaja: Word = {
  fi: "maahanmuuttaja",
  slug: "maahanmuuttaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "immigrant",
  selitys:
    "Henkilö, joka on muuttanut toiseen maahan asumaan: 'kotouttaa maahanmuuttajia'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko maahanmuuttajia. Yhdyssana maahan + muuttaja. Vrt. muuttaa, maahanmuutto, ulkomaalainen.",
  kuva: { emoji: "🧳", alt: "maahanmuuttaja – henkilö joka on muuttanut toiseen maahan asumaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo maahanmuuttaja-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "maahanmuuttajan", merkitys: "of the immigrant" },
      { sija: "partitiivi (yks.)", muoto: "maahanmuuttajaa", merkitys: "immigrant (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "maahanmuuttajia", merkitys: "immigrants (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko maahanmuuttajia (-ja-agenttisana). Yhdyssana maahan + muuttaja. Vrt. maahanmuutto, ulkomaalainen, kotoutua.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "maahanmuuttaja" },
          { label: "Partitiivi", form: "maahanmuuttajaa" },
          { label: "Genetiivi", form: "maahanmuuttajan" },
          { label: "Inessiivi", form: "maahanmuuttajassa" },
          { label: "Elatiivi", form: "maahanmuuttajasta" },
          { label: "Illatiivi", form: "maahanmuuttajaan" },
          { label: "Adessiivi", form: "maahanmuuttajalla" },
          { label: "Ablatiivi", form: "maahanmuuttajalta" },
          { label: "Allatiivi", form: "maahanmuuttajalle" },
          { label: "Essiivi", form: "maahanmuuttajana" },
          { label: "Translatiivi", form: "maahanmuuttajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "maahanmuuttajat" },
          { label: "Partitiivi", form: "maahanmuuttajia" },
          { label: "Genetiivi", form: "maahanmuuttajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kotoutua",
      en: "to integrate (into society)",
      taso: "B2",
      esim: { fi: "Hän kotoutui nopeasti Suomeen.", en: "She integrated into Finland quickly." },
    },
    {
      fi: "ulkomaalainen",
      en: "foreigner",
      taso: "B1",
      esim: { fi: "Kaupungissa asuu paljon ulkomaalaisia.", en: "Many foreigners live in the city." },
    },
  ],
  synonyymit: [
    { fi: "siirtolainen", en: "migrant" },
  ],
  esimerkit: {
    A2: { fi: "Olen maahanmuuttaja.", en: "I am an immigrant." },
    B1: { fi: "Maahanmuuttaja opettelee uutta kieltä.", en: "The immigrant is learning a new language." },
    B2: {
      fi: "Moni maahanmuuttaja tuo mukanaan arvokasta osaamista ja uusia näkökulmia.",
      en: "Many immigrants bring valuable expertise and new perspectives with them.",
    },
  },
  updatedAt: "2026-06-07",
};

export default maahanmuuttaja;
