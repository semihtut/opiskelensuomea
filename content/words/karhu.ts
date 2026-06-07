import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem karhu-.
// Genitive karhun, partitive karhua, partitive pl karhuja.
const karhu: Word = {
  fi: "karhu",
  slug: "karhu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "bear",
  selitys:
    "Suuri metsäeläin, Suomen kansalliseläin: 'karhu nukkuu talviunta'. Tyyppi 1/valo, ei astevaihtelua. Vrt. metsä, eläin, susi.",
  kuva: { emoji: "🐻", alt: "karhu – suuri metsäeläin, Suomen kansalliseläin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo karhu-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "karhun", merkitys: "of the bear" },
      { sija: "partitiivi (yks.)", muoto: "karhua", merkitys: "bear (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "karhuja", merkitys: "bears (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1/valo: ei astevaihtelua. Karhu on Suomen kansalliseläin; sillä on monta kiertoilmaisua (otso, mesikämmen). Vrt. metsä, susi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "karhu" },
          { label: "Partitiivi", form: "karhua" },
          { label: "Genetiivi", form: "karhun" },
          { label: "Inessiivi", form: "karhussa" },
          { label: "Elatiivi", form: "karhusta" },
          { label: "Illatiivi", form: "karhuun" },
          { label: "Adessiivi", form: "karhulla" },
          { label: "Ablatiivi", form: "karhulta" },
          { label: "Allatiivi", form: "karhulle" },
          { label: "Essiivi", form: "karhuna" },
          { label: "Translatiivi", form: "karhuksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "karhut" },
          { label: "Partitiivi", form: "karhuja" },
          { label: "Genetiivi", form: "karhujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jääkarhu",
      en: "polar bear",
      taso: "B1",
      esim: { fi: "Jääkarhu elää arktisilla alueilla.", en: "The polar bear lives in arctic regions." },
    },
    {
      fi: "nallekarhu",
      en: "teddy bear",
      taso: "A2",
      esim: { fi: "Lapsi nukkuu nallekarhun kanssa.", en: "The child sleeps with a teddy bear." },
    },
  ],
  synonyymit: [
    { fi: "otso", en: "bear (poetic byname)" },
  ],
  esimerkit: {
    A2: { fi: "Karhu on iso eläin.", en: "The bear is a big animal." },
    B1: { fi: "Karhu nukkuu talven pesässään.", en: "The bear sleeps in its den for the winter." },
    B2: {
      fi: "Karhu välttää yleensä ihmistä, jos saa olla rauhassa.",
      en: "A bear usually avoids humans if it is left in peace.",
    },
  },
  updatedAt: "2026-06-07",
};

export default karhu;
