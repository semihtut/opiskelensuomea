import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem kehittä-.
// Present kehitän, past kehitin, past participle kehittänyt.
const kehittaa: Word = {
  fi: "kehittää",
  slug: "kehittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to develop, improve",
  selitys:
    "Saada jokin paremmaksi tai luoda uutta: 'kehittää taitoja'. Astevaihtelu tt:t (kehittää → kehitän). Vrt. kehittyä = to develop (intransitiivinen), kehitys (development).",
  kuva: { emoji: "📈", alt: "kehittää – saada paremmaksi, luoda uutta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t; vartalo kehittä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kehitän", merkitys: "I develop" },
      { sija: "imperfekti (minä)", muoto: "kehitin", merkitys: "I developed" },
      { sija: "NUT-partisiippi", muoto: "kehittänyt", merkitys: "(have) developed" },
    ],
    huom:
      "Astevaihtelu tt:t: kehitän, kehität, kehitti. Transitiivinen: kehittää jotain. Vrt. kehittyä = to develop oneself, kehitys = development, kehittynyt = developed/advanced.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kehitän" },
          { label: "sinä", form: "kehität" },
          { label: "hän", form: "kehittää" },
          { label: "me", form: "kehitämme" },
          { label: "te", form: "kehitätte" },
          { label: "he", form: "kehittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kehitä" },
          { label: "hän", form: "ei kehitä" },
          { label: "he", form: "eivät kehitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kehitin" },
          { label: "sinä", form: "kehitit" },
          { label: "hän", form: "kehitti" },
          { label: "me", form: "kehitimme" },
          { label: "te", form: "kehititte" },
          { label: "he", form: "kehittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kehittänyt" },
          { label: "hän", form: "on kehittänyt" },
          { label: "he", form: "ovat kehittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kehitä!" },
          { label: "te", form: "kehittäkää!" },
          { label: "kielto (sinä)", form: "älä kehitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kehitys",
      en: "development, progress",
      taso: "B1",
      esim: { fi: "Tekniikan kehitys on nopeaa.", en: "The development of technology is fast." },
    },
    {
      fi: "kehittyä",
      en: "to develop, evolve (oneself)",
      taso: "B1",
      esim: { fi: "Kielitaito kehittyy harjoittelemalla.", en: "Language skills develop with practice." },
    },
    {
      fi: "kehittynyt",
      en: "developed, advanced",
      taso: "B2",
      esim: { fi: "Se on kehittynyt talous.", en: "It is a developed economy." },
    },
  ],
  synonyymit: [
    { fi: "parantaa", en: "to improve" },
    { fi: "edistää", en: "to advance, promote" },
  ],
  esimerkit: {
    A2: { fi: "Haluan kehittää suomen kieltäni.", en: "I want to develop my Finnish." },
    B1: { fi: "Yritys kehitti uuden tuotteen.", en: "The company developed a new product." },
    B2: {
      fi: "Hän kehitti menetelmän, joka säästää paljon aikaa.",
      en: "She developed a method that saves a lot of time.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kehittaa;
