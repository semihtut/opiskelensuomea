import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation (same paradigm as
// maanantai). Essive lauantaina = on Saturday; lauantaisin = on Saturdays.
const lauantai: Word = {
  fi: "lauantai",
  slug: "lauantai",
  pos: "substantiivi (tyyppi: maa)",
  posClass: "substantiivi",
  level: "A1",
  en: "Saturday",
  selitys:
    "Viikon kuudes päivä, viikonlopun ensimmäinen päivä. Ei astevaihtelua. 'Lauantaina' = on Saturday.",
  kuva: { alt: "lauantai – vapaapäivä viikonloppuna" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "essiivi (yks.)", muoto: "lauantaina", merkitys: "on Saturday" },
      { sija: "partitiivi (yks.)", muoto: "lauantaita", merkitys: "Saturday (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "lauantain", merkitys: "of Saturday" },
    ],
    huom:
      "Kuten muutkin viikonpäivät, essiivissä ajankohtaa ilmaistaessa: lauantaina. Toistuvasti: lauantaisin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lauantai" },
          { label: "Partitiivi", form: "lauantaita" },
          { label: "Genetiivi", form: "lauantain" },
          { label: "Inessiivi", form: "lauantaissa" },
          { label: "Elatiivi", form: "lauantaista" },
          { label: "Illatiivi", form: "lauantaihin" },
          { label: "Adessiivi", form: "lauantailla" },
          { label: "Ablatiivi", form: "lauantailta" },
          { label: "Allatiivi", form: "lauantaille" },
          { label: "Essiivi", form: "lauantaina" },
          { label: "Translatiivi", form: "lauantaiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lauantait" },
          { label: "Partitiivi", form: "lauantaita" },
          { label: "Genetiivi", form: "lauantaiden" },
          { label: "Illatiivi", form: "lauantaihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lauantaina",
      en: "on Saturday (essive)",
      taso: "A2",
      esim: { fi: "Menemme lauantaina kauppaan.", en: "We'll go to the store on Saturday." },
    },
    {
      fi: "lauantaisin",
      en: "on Saturdays (habitually)",
      taso: "B1",
      esim: { fi: "Lauantaisin siivoan kotia.", en: "On Saturdays I clean the house." },
    },
    {
      fi: "lauantai-ilta",
      en: "Saturday evening",
      taso: "A2",
      esim: { fi: "Lauantai-iltana katsomme elokuvan.", en: "On Saturday evening we watch a movie." },
    },
  ],
  synonyymit: [
    { fi: "viikonloppu", en: "weekend (incl. Saturday)" },
    { fi: "vapaapäivä", en: "day off" },
  ],
  esimerkit: {
    A2: { fi: "Lauantaina ei tarvitse mennä töihin.", en: "On Saturday you don't have to go to work." },
    B1: { fi: "Vietämme lauantain ystävien kanssa.", en: "We'll spend Saturday with friends." },
    B2: {
      fi: "Lauantai oli täynnä menoa aamusta iltaan.",
      en: "Saturday was full of activity from morning to evening.",
    },
  },
  updatedAt: "2026-06-04",
};

export default lauantai;
