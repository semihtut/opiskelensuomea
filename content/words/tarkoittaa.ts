import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem tarkoitta-.
// Present tarkoitan, past tarkoitin, past participle tarkoittanut.
const tarkoittaa: Word = {
  fi: "tarkoittaa",
  slug: "tarkoittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to mean, to intend",
  selitys:
    "Olla merkitykseltään jotain, tai aikoa: 'Mitä tämä sana tarkoittaa?' / 'En tarkoittanut sitä' (I didn't mean it). Astevaihtelu tt:t (tarkoittaa → tarkoitan).",
  kuva: { alt: "tarkoittaa – merkitä jotain, aikoa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttaa); astevaihtelu tt:t; vartalo tarkoitta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "tarkoitan", merkitys: "I mean" },
      { sija: "imperfekti (minä)", muoto: "tarkoitin", merkitys: "I meant" },
      { sija: "NUT-partisiippi", muoto: "tarkoittanut", merkitys: "(have) meant" },
    ],
    huom:
      "Astevaihtelu tt:t heikossa asteessa: tarkoitan, tarkoitat, tarkoitti. Vrt. tarkoitus = purpose. 'Tarkoitatko, että…?' = Do you mean that…?",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tarkoitan" },
          { label: "sinä", form: "tarkoitat" },
          { label: "hän", form: "tarkoittaa" },
          { label: "me", form: "tarkoitamme" },
          { label: "te", form: "tarkoitatte" },
          { label: "he", form: "tarkoittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tarkoita" },
          { label: "hän", form: "ei tarkoita" },
          { label: "he", form: "eivät tarkoita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tarkoitin" },
          { label: "sinä", form: "tarkoitit" },
          { label: "hän", form: "tarkoitti" },
          { label: "me", form: "tarkoitimme" },
          { label: "te", form: "tarkoititte" },
          { label: "he", form: "tarkoittivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tarkoittanut" },
          { label: "hän", form: "on tarkoittanut" },
          { label: "he", form: "ovat tarkoittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tarkoita!" },
          { label: "te", form: "tarkoittakaa!" },
          { label: "kielto (sinä)", form: "älä tarkoita" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tarkoitus",
      en: "purpose, intention, meaning",
      taso: "B1",
      esim: { fi: "Mikä on tämän tarkoitus?", en: "What is the purpose of this?" },
    },
    {
      fi: "tarkoituksella",
      en: "on purpose, deliberately",
      taso: "B1",
      esim: { fi: "En tehnyt sitä tarkoituksella.", en: "I didn't do it on purpose." },
    },
    {
      fi: "tarkoituksenmukainen",
      en: "appropriate, purposeful",
      taso: "B2",
      esim: { fi: "Ratkaisu oli tarkoituksenmukainen.", en: "The solution was appropriate." },
    },
  ],
  synonyymit: [
    { fi: "merkitä", en: "to signify" },
    { fi: "aikoa", en: "to intend" },
  ],
  esimerkit: {
    A2: { fi: "Mitä sana 'kiva' tarkoittaa?", en: "What does the word 'kiva' mean?" },
    B1: { fi: "Anteeksi, en tarkoittanut loukata.", en: "Sorry, I didn't mean to offend." },
    B2: {
      fi: "Se, että hän vaikenee, ei tarkoita, että hän on samaa mieltä.",
      en: "The fact that he stays silent doesn't mean he agrees.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tarkoittaa;
