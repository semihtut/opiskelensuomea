import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation. For "on Monday" the
// essive maanantaina is used; "on Mondays" = maanantaisin. Partitive maanantaita.
const maanantai: Word = {
  fi: "maanantai",
  slug: "maanantai",
  pos: "substantiivi (tyyppi: maa)",
  posClass: "substantiivi",
  level: "A1",
  en: "Monday",
  selitys:
    "Viikon ensimmäinen päivä. Ei astevaihtelua. 'Maanantaina' = on Monday, 'maanantaisin' = on Mondays.",
  kuva: { alt: "maanantai – viikon ensimmäinen päivä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "essiivi (yks.)", muoto: "maanantaina", merkitys: "on Monday" },
      { sija: "partitiivi (yks.)", muoto: "maanantaita", merkitys: "Monday (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "maanantain", merkitys: "of Monday" },
    ],
    huom:
      "Viikonpäivistä käytetään essiiviä ajankohdasta puhuttaessa: maanantaina (on Monday). Toistuvasti: maanantaisin (on Mondays).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "maanantai" },
          { label: "Partitiivi", form: "maanantaita" },
          { label: "Genetiivi", form: "maanantain" },
          { label: "Inessiivi", form: "maanantaissa" },
          { label: "Elatiivi", form: "maanantaista" },
          { label: "Illatiivi", form: "maanantaihin" },
          { label: "Adessiivi", form: "maanantailla" },
          { label: "Ablatiivi", form: "maanantailta" },
          { label: "Allatiivi", form: "maanantaille" },
          { label: "Essiivi", form: "maanantaina" },
          { label: "Translatiivi", form: "maanantaiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "maanantait" },
          { label: "Partitiivi", form: "maanantaita" },
          { label: "Genetiivi", form: "maanantaiden" },
          { label: "Illatiivi", form: "maanantaihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maanantaina",
      en: "on Monday (essive)",
      taso: "A2",
      esim: { fi: "Tapaamme maanantaina.", en: "We'll meet on Monday." },
    },
    {
      fi: "maanantaisin",
      en: "on Mondays (habitually)",
      taso: "B1",
      esim: { fi: "Maanantaisin käyn salilla.", en: "On Mondays I go to the gym." },
    },
    {
      fi: "maanantaiaamu",
      en: "Monday morning",
      taso: "A2",
      esim: { fi: "Maanantaiaamu on usein kiireinen.", en: "Monday morning is often busy." },
    },
  ],
  synonyymit: [
    { fi: "alkuviikko", en: "the start of the week" },
    { fi: "arkipäivä", en: "weekday" },
  ],
  esimerkit: {
    A2: { fi: "Tänään on maanantai.", en: "Today is Monday." },
    B1: { fi: "Loma loppuu ja maanantaina alkaa työ.", en: "The holiday ends and work begins on Monday." },
    B2: {
      fi: "Maanantai tuntui raskaalta pitkän viikonlopun jälkeen.",
      en: "Monday felt heavy after the long weekend.",
    },
  },
  updatedAt: "2026-06-04",
};

export default maanantai;
