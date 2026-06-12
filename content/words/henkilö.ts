import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: no gradation, stem henkilö-. Partitive sg henkilöä,
// partitive pl henkilöitä (also henkilöjä), genitive pl henkilöiden.
const henkilö: Word = {
  fi: "henkilö",
  slug: "henkilö",
  pos: "substantiivi",
  posClass: "substantiivi",
  level: "A2",
  en: "person, individual",
  selitys:
    "Yksittäinen ihminen, usein virallisemmassa sävyssä kuin 'ihminen' (esim. lomakkeissa ja tilastoissa). Ei astevaihtelua.",
  kuva: { alt: "henkilö – ihminen" },

  kielioppi: {
    tyyppi: "substantiivi; ei astevaihtelua (vartalo henkilö-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "henkilöä", merkitys: "person (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "henkilön", merkitys: "of the person" },
      { sija: "partitiivi (mon.)", muoto: "henkilöitä", merkitys: "persons (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi henkilöitä (myös henkilöjä), genetiivi henkilöiden. Lukumäärän kanssa partitiivi: 'kymmenen henkilöä'.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "henkilö" },
          { label: "Partitiivi", form: "henkilöä" },
          { label: "Genetiivi", form: "henkilön" },
          { label: "Inessiivi", form: "henkilössä" },
          { label: "Elatiivi", form: "henkilöstä" },
          { label: "Illatiivi", form: "henkilöön" },
          { label: "Adessiivi", form: "henkilöllä" },
          { label: "Ablatiivi", form: "henkilöltä" },
          { label: "Allatiivi", form: "henkilölle" },
          { label: "Essiivi", form: "henkilönä" },
          { label: "Translatiivi", form: "henkilöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "henkilöt" },
          { label: "Partitiivi", form: "henkilöitä" },
          { label: "Genetiivi", form: "henkilöiden" },
          { label: "Inessiivi", form: "henkilöissä" },
          { label: "Illatiivi", form: "henkilöihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "henkilökunta",
      en: "staff, personnel",
      taso: "B1",
      esim: { fi: "Hotellin henkilökunta oli ystävällinen.", en: "The hotel staff were friendly." },
    },
    {
      fi: "henkilökohtainen",
      en: "personal",
      taso: "B1",
      esim: { fi: "Tämä on henkilökohtainen asia.", en: "This is a personal matter." },
    },
    {
      fi: "henkilöllisyys",
      en: "identity",
      taso: "B2",
      esim: { fi: "Poliisi tarkisti henkilöllisyyteni.", en: "The police checked my identity." },
    },
  ],
  synonyymit: [
    { fi: "ihminen", en: "human, person" },
    { fi: "yksilö", en: "individual" },
  ],
  esimerkit: {
    A2: { fi: "Hän on mukava henkilö.", en: "He/she is a nice person." },
    B1: { fi: "Huoneeseen mahtuu kymmenen henkilöä.", en: "Ten people fit in the room." },
    B2: {
      fi: "Jokainen henkilö on vastuussa omista teoistaan.",
      en: "Each person is responsible for their own actions.",
    },
  },
  updatedAt: "2026-06-04",
};

export default henkilö;
