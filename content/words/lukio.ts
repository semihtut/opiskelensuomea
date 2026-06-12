import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem lukio-.
// Genitive lukion, partitive lukiota, illative lukioon, partitive pl lukioita.
const lukio: Word = {
  fi: "lukio",
  slug: "lukio",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "B1",
  en: "upper secondary school, high school",
  selitys:
    "Peruskoulun jälkeinen, yleensä kolmivuotinen yleissivistävä koulu (n. 16–18-vuotiaille): 'mennä lukioon'. Tyyppi 3/valtio, ei astevaihtelua. Sanasta lukea. Vaihtoehto lukiolle on ammattikoulu. Vrt. lukea, peruskoulu, yliopisto.",
  kuva: { alt: "lukio – peruskoulun jälkeinen yleissivistävä koulu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua (vartalo lukio-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lukion", merkitys: "of the upper secondary school" },
      { sija: "partitiivi (yks.)", muoto: "lukiota", merkitys: "upper secondary school (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lukioita", merkitys: "upper secondary schools (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3/valtio: ei astevaihtelua. Partitiivi lukiota, partitiivin monikko lukioita, illatiivi lukioon. 'Käydä lukiota' = to attend upper secondary school. Vrt. peruskoulu, ammattikoulu.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lukio" },
          { label: "Partitiivi", form: "lukiota" },
          { label: "Genetiivi", form: "lukion" },
          { label: "Inessiivi", form: "lukiossa" },
          { label: "Elatiivi", form: "lukiosta" },
          { label: "Illatiivi", form: "lukioon" },
          { label: "Adessiivi", form: "lukiolla" },
          { label: "Ablatiivi", form: "lukiolta" },
          { label: "Allatiivi", form: "lukiolle" },
          { label: "Essiivi", form: "lukiona" },
          { label: "Translatiivi", form: "lukioksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lukiot" },
          { label: "Partitiivi", form: "lukioita" },
          { label: "Genetiivi", form: "lukioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lukiolainen",
      en: "upper secondary student",
      taso: "B2",
      esim: { fi: "Lukiolaiset kirjoittavat ylioppilaskokeen.", en: "Upper secondary students sit the matriculation exam." },
    },
    {
      fi: "ylioppilas",
      en: "matriculated student, graduate of lukio",
      taso: "B2",
      esim: { fi: "Hänestä tuli ylioppilas keväällä.", en: "She became a matriculated graduate in the spring." },
    },
  ],
  synonyymit: [
    { fi: "kymppiluokka", en: "(no exact synonym; sometimes 'keskikoulu' historically)" },
  ],
  esimerkit: {
    A2: { fi: "Aloitan lukion syksyllä.", en: "I'm starting upper secondary school in the autumn." },
    B1: { fi: "Hän opiskelee toista vuotta lukiossa.", en: "She is in her second year of upper secondary school." },
    B2: {
      fi: "Lukio antaa laajan yleissivistyksen ja valmiudet yliopisto-opintoihin.",
      en: "Upper secondary school provides a broad general education and readiness for university studies.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lukio;
