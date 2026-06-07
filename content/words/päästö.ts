import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem päästö-.
// Genitive päästön, partitive päästöä, partitive pl päästöjä.
const paasto: Word = {
  fi: "päästö",
  slug: "päästö",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "emission",
  selitys:
    "Ympäristöön vapautuva haitallinen aine, esim. pakokaasu: 'hiilidioksidipäästöt'. Tyyppi 1/valo, ei astevaihtelua (st säilyy); partitiivin monikko päästöjä. Johdettu verbistä päästää. Vrt. saaste, päästää, hiilijalanjälki.",
  kuva: { emoji: "💨", alt: "päästö – ympäristöön vapautuva haitallinen aine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo päästö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "päästön", merkitys: "of the emission" },
      { sija: "partitiivi (yks.)", muoto: "päästöä", merkitys: "emission (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "päästöjä", merkitys: "emissions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1 (-stö): partitiivin monikko -jä (päästöjä), ei astevaihtelua (st säilyy). Usein monikossa: päästöt. Johdettu verbistä päästää. 'Vähentää päästöjä' = to cut emissions. Vrt. saaste = pollution.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "päästö" },
          { label: "Partitiivi", form: "päästöä" },
          { label: "Genetiivi", form: "päästön" },
          { label: "Inessiivi", form: "päästössä" },
          { label: "Elatiivi", form: "päästöstä" },
          { label: "Illatiivi", form: "päästöön" },
          { label: "Adessiivi", form: "päästöllä" },
          { label: "Ablatiivi", form: "päästöltä" },
          { label: "Allatiivi", form: "päästölle" },
          { label: "Essiivi", form: "päästönä" },
          { label: "Translatiivi", form: "päästöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "päästöt" },
          { label: "Partitiivi", form: "päästöjä" },
          { label: "Genetiivi", form: "päästöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päästää",
      en: "to let, release",
      taso: "B1",
      esim: { fi: "Päästä minut sisään.", en: "Let me in." },
    },
    {
      fi: "päästötön",
      en: "emission-free",
      taso: "B2",
      esim: { fi: "Sähköauto on päästötön.", en: "An electric car is emission-free." },
    },
  ],
  synonyymit: [
    { fi: "saaste", en: "pollutant" },
    { fi: "pakokaasu", en: "exhaust gas" },
  ],
  esimerkit: {
    A2: { fi: "Autot tuottavat päästöjä.", en: "Cars produce emissions." },
    B1: { fi: "Päästöjä on vähennettävä.", en: "Emissions must be reduced." },
    B2: {
      fi: "Maa sitoutui leikkaamaan päästöjä puoleen vuoteen 2035 mennessä.",
      en: "The country committed to cutting emissions in half by 2035.",
    },
  },
  updatedAt: "2026-06-07",
};

export default paasto;
