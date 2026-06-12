import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: no gradation, stem päivä-. Partitive sg päivää,
// partitive pl päiviä, genitive pl päivien.
const päivä: Word = {
  fi: "päivä",
  slug: "päivä",
  pos: "substantiivi",
  posClass: "substantiivi",
  level: "A1",
  en: "day",
  selitys:
    "Vuorokauden valoisa osa tai kokonainen vuorokausi. Esiintyy tavallisessa tervehdyksessä 'hyvää päivää'. Ei astevaihtelua.",
  kuva: { alt: "päivä – aurinko" },

  kielioppi: {
    tyyppi: "substantiivi; ei astevaihtelua (vartalo päivä-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "päivää", merkitys: "day (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "päivän", merkitys: "of the day" },
      { sija: "partitiivi (mon.)", muoto: "päiviä", merkitys: "days (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Illatiivi päivään, monikon genetiivi päivien. Tervehdys 'hyvää päivää' on partitiivissa.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "päivä" },
          { label: "Partitiivi", form: "päivää" },
          { label: "Genetiivi", form: "päivän" },
          { label: "Inessiivi", form: "päivässä" },
          { label: "Elatiivi", form: "päivästä" },
          { label: "Illatiivi", form: "päivään" },
          { label: "Adessiivi", form: "päivällä" },
          { label: "Ablatiivi", form: "päivältä" },
          { label: "Allatiivi", form: "päivälle" },
          { label: "Essiivi", form: "päivänä" },
          { label: "Translatiivi", form: "päiväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "päivät" },
          { label: "Partitiivi", form: "päiviä" },
          { label: "Genetiivi", form: "päivien" },
          { label: "Inessiivi", form: "päivissä" },
          { label: "Illatiivi", form: "päiviin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päivittäin",
      en: "daily, every day",
      taso: "A2",
      esim: { fi: "Käyn kuntosalilla päivittäin.", en: "I go to the gym daily." },
    },
    {
      fi: "päiväkoti",
      en: "daycare, kindergarten",
      taso: "A2",
      esim: { fi: "Lapsi on päiväkodissa.", en: "The child is at daycare." },
    },
    {
      fi: "päiväys",
      en: "date (of a document)",
      taso: "B1",
      esim: { fi: "Kirjeessä ei ollut päiväystä.", en: "There was no date on the letter." },
    },
  ],
  synonyymit: [
    { fi: "vuorokausi", en: "24-hour day (day and night)" },
    { fi: "päiväsaika", en: "daytime" },
  ],
  esimerkit: {
    A2: { fi: "Tänään on kaunis päivä.", en: "Today is a beautiful day." },
    B1: { fi: "Vietin koko päivän kirjastossa.", en: "I spent the whole day at the library." },
    B2: { fi: "Päivä päivältä hänen suomensa parani.", en: "Day by day, his Finnish improved." },
  },
  updatedAt: "2026-06-04",
};

export default päivä;
