import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem aineisto-.
// Genitive aineiston, partitive aineistoa, partitive pl aineistoja.
const aineisto: Word = {
  fi: "aineisto",
  slug: "aineisto",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "material, data, body of sources",
  selitys:
    "Kerätty tieto tai materiaali, jota käytetään esim. tutkimuksessa: 'tutkimusaineisto'. Tyyppi 1/valo, ei astevaihtelua (st säilyy). Johdettu sanasta aine. Vrt. aine, materiaali, data.",
  kuva: { alt: "aineisto – kerätty tieto tai materiaali tutkimusta varten" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo aineisto-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "aineiston", merkitys: "of the material" },
      { sija: "partitiivi (yks.)", muoto: "aineistoa", merkitys: "material (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "aineistoja", merkitys: "materials (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1 (-sto): partitiivin monikko -ja (aineistoja), ei astevaihtelua (st säilyy). Johdettu sanasta aine. 'Tutkimusaineisto' = research data. Vrt. aine = substance, subject; materiaali.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "aineisto" },
          { label: "Partitiivi", form: "aineistoa" },
          { label: "Genetiivi", form: "aineiston" },
          { label: "Inessiivi", form: "aineistossa" },
          { label: "Elatiivi", form: "aineistosta" },
          { label: "Illatiivi", form: "aineistoon" },
          { label: "Adessiivi", form: "aineistolla" },
          { label: "Ablatiivi", form: "aineistolta" },
          { label: "Allatiivi", form: "aineistolle" },
          { label: "Essiivi", form: "aineistona" },
          { label: "Translatiivi", form: "aineistoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "aineistot" },
          { label: "Partitiivi", form: "aineistoja" },
          { label: "Genetiivi", form: "aineistojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aine",
      en: "substance; subject; essay",
      taso: "B1",
      esim: { fi: "Lempiaineeni on matematiikka.", en: "My favourite subject is maths." },
    },
    {
      fi: "raaka-aine",
      en: "raw material, ingredient",
      taso: "B2",
      esim: { fi: "Puu on tärkeä raaka-aine.", en: "Wood is an important raw material." },
    },
  ],
  synonyymit: [
    { fi: "materiaali", en: "material" },
    { fi: "data", en: "data" },
  ],
  esimerkit: {
    A2: { fi: "Keräsin paljon aineistoa.", en: "I collected a lot of material." },
    B1: { fi: "Aineisto analysoidaan keväällä.", en: "The data will be analysed in spring." },
    B2: {
      fi: "Tutkimuksen aineisto koostui sadoista haastatteluista.",
      en: "The study's data consisted of hundreds of interviews.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aineisto;
