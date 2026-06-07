import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 6/paperi, no gradation, stem pippuri-.
// Genitive pippurin, partitive pippuria, partitive pl pippureita.
const pippuri: Word = {
  fi: "pippuri",
  slug: "pippuri",
  pos: "substantiivi (tyyppi 6/paperi)",
  posClass: "substantiivi",
  level: "B1",
  en: "pepper (spice)",
  selitys:
    "Yleinen voimakas mauste: 'suolaa ja pippuria'. Tyyppi 6/paperi, ei astevaihtelua; partitiivin monikko pippureita. Vrt. mauste, suola, chili.",
  kuva: { emoji: "🌶️", alt: "pippuri – yleinen voimakas mauste" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 6/paperi; ei astevaihtelua (vartalo pippuri-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pippurin", merkitys: "of the pepper" },
      { sija: "partitiivi (yks.)", muoto: "pippuria", merkitys: "pepper (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pippureita", merkitys: "peppers (partitive pl.)" },
    ],
    huom:
      "Tyyppi 6/paperi (-ri): partitiivin monikko -eita (pippureita), genetiivin monikko -eiden. Mustapippuri = black pepper. Vrt. mauste, suola.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pippuri" },
          { label: "Partitiivi", form: "pippuria" },
          { label: "Genetiivi", form: "pippurin" },
          { label: "Inessiivi", form: "pippurissa" },
          { label: "Elatiivi", form: "pippurista" },
          { label: "Illatiivi", form: "pippuriin" },
          { label: "Adessiivi", form: "pippurilla" },
          { label: "Ablatiivi", form: "pippurilta" },
          { label: "Allatiivi", form: "pippurille" },
          { label: "Essiivi", form: "pippurina" },
          { label: "Translatiivi", form: "pippuriksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pippurit" },
          { label: "Partitiivi", form: "pippureita" },
          { label: "Genetiivi", form: "pippureiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mustapippuri",
      en: "black pepper",
      taso: "B1",
      esim: { fi: "Rouhi päälle mustapippuria.", en: "Grind some black pepper on top." },
    },
    {
      fi: "pippurimylly",
      en: "pepper mill",
      taso: "B2",
      esim: { fi: "Pöydällä on pippurimylly.", en: "There is a pepper mill on the table." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Lisää suolaa ja pippuria.", en: "Add salt and pepper." },
    B1: { fi: "Pippuri tekee ruoasta tulisen.", en: "Pepper makes the food hot." },
    B2: {
      fi: "Tuoreesta myllystä rouhittu pippuri maistuu paremmalta kuin valmiiksi jauhettu.",
      en: "Pepper ground from a fresh mill tastes better than pre-ground.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pippuri;
