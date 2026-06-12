import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem riisi-.
// Genitive riisin, partitive riisiä, illative riisiin, partitive pl riisejä. Usually singular (mass noun).
const riisi: Word = {
  fi: "riisi",
  slug: "riisi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "rice",
  selitys:
    "Vaalea jyväkasvi ja sen siemenet ruokana: 'keittää riisiä'. Tyyppi 5, ei astevaihtelua. Käytetään useimmiten yksikössä (ainesana). Vrt. riisipuuro, jasmiiniriisi.",
  kuva: { alt: "riisi – vaalea jyväkasvi ruokana" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "riisin", merkitys: "of the rice" },
      { sija: "partitiivi (yks.)", muoto: "riisiä", merkitys: "rice (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "riisiin", merkitys: "into the rice" },
    ],
    huom:
      "Käytetään useimmiten yksikössä (ainesana). Partitiivi riisiä = some rice. Tyyppi 5, ei astevaihtelua. Vrt. riisipuuro = rice porridge, täysjyväriisi = whole-grain rice.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "riisi" },
          { label: "Partitiivi", form: "riisiä" },
          { label: "Genetiivi", form: "riisin" },
          { label: "Inessiivi", form: "riisissä" },
          { label: "Elatiivi", form: "riisistä" },
          { label: "Illatiivi", form: "riisiin" },
          { label: "Adessiivi", form: "riisillä" },
          { label: "Ablatiivi", form: "riisiltä" },
          { label: "Allatiivi", form: "riisille" },
          { label: "Essiivi", form: "riisinä" },
          { label: "Translatiivi", form: "riisiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "riisit" },
          { label: "Partitiivi", form: "riisejä" },
          { label: "Genetiivi", form: "riisien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "riisipuuro",
      en: "rice porridge",
      taso: "B1",
      esim: { fi: "Jouluna syödään riisipuuroa.", en: "At Christmas we eat rice porridge." },
    },
    {
      fi: "täysjyväriisi",
      en: "whole-grain rice",
      taso: "B2",
      esim: { fi: "Täysjyväriisi on terveellisempää.", en: "Whole-grain rice is healthier." },
    },
    {
      fi: "riisinjyvä",
      en: "grain of rice",
      taso: "B2",
      esim: { fi: "Lautaselle jäi yksi riisinjyvä.", en: "One grain of rice was left on the plate." },
    },
  ],
  synonyymit: [
    { fi: "riisiryyni", en: "rice grain/groat" },
  ],
  esimerkit: {
    A2: { fi: "Haluatko riisiä vai perunoita?", en: "Do you want rice or potatoes?" },
    B1: { fi: "Keitä riisi pakkauksen ohjeen mukaan.", en: "Cook the rice according to the package instructions." },
    B2: {
      fi: "Riisi on monen aasialaisen ruokavalion perusta.",
      en: "Rice is the basis of many Asian diets.",
    },
  },
  updatedAt: "2026-06-07",
};

export default riisi;
