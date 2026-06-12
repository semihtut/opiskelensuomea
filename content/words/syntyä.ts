import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa (type 1), nt:nn gradation,
// stem synty-. Present synnyn, past synnyin, past participle syntynyt.
const syntya: Word = {
  fi: "syntyä",
  slug: "syntyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to be born; to come into being",
  selitys:
    "Tulla maailmaan; saada alkunsa. Tyyppi 1, astevaihtelu nt:nn: syntyä → synnyn. Vastakohta kuolla. Substantiivi syntymäpäivä = birthday.",
  kuva: { alt: "syntyä – vauva syntyy" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-tyä); astevaihtelu nt:nn",
    muodot: [
      { sija: "preesens (minä)", muoto: "synnyn", merkitys: "I am born" },
      { sija: "imperfekti (minä)", muoto: "synnyin", merkitys: "I was born" },
      { sija: "NUT-partisiippi", muoto: "syntynyt", merkitys: "(have been) born" },
    ],
    huom:
      "Heikossa asteessa nt → nn: synnyn, synnyit (mutta syntyä, syntyy, syntyi). 'Synnyin vuonna 1990.' Myös abstraktisti: 'syntyi idea'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "synnyn" },
          { label: "sinä", form: "synnyt" },
          { label: "hän", form: "syntyy" },
          { label: "me", form: "synnymme" },
          { label: "te", form: "synnytte" },
          { label: "he", form: "syntyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en synny" },
          { label: "hän", form: "ei synny" },
          { label: "he", form: "eivät synny" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "synnyin" },
          { label: "sinä", form: "synnyit" },
          { label: "hän", form: "syntyi" },
          { label: "me", form: "synnyimme" },
          { label: "te", form: "synnyitte" },
          { label: "he", form: "syntyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen syntynyt" },
          { label: "hän", form: "on syntynyt" },
          { label: "he", form: "ovat syntyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "synny!" },
          { label: "te", form: "syntykää!" },
          { label: "kielto (sinä)", form: "älä synny" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "syntymä",
      en: "birth",
      taso: "B1",
      esim: { fi: "Lapsen syntymä oli iloinen hetki.", en: "The child's birth was a joyful moment." },
    },
    {
      fi: "syntymäpäivä",
      en: "birthday",
      taso: "A1",
      esim: { fi: "Hyvää syntymäpäivää!", en: "Happy birthday!" },
    },
    {
      fi: "synnyttää",
      en: "to give birth; to generate",
      taso: "B2",
      esim: { fi: "Hän synnytti terveen pojan.", en: "She gave birth to a healthy boy." },
    },
  ],
  synonyymit: [
    { fi: "tulla maailmaan", en: "to come into the world" },
    { fi: "saada alkunsa", en: "to originate" },
  ],
  esimerkit: {
    A2: { fi: "Synnyin Helsingissä.", en: "I was born in Helsinki." },
    B1: { fi: "Vauva syntyi viime viikolla.", en: "The baby was born last week." },
    B2: {
      fi: "Hyvä idea syntyi keskustelun aikana, vaikka kukaan ei sitä etukäteen suunnitellut.",
      en: "A good idea was born during the conversation, even though no one had planned it in advance.",
    },
  },
  updatedAt: "2026-06-05",
};

export default syntya;
