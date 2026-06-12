import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, tt:t gradation, stem petty- ~ pety-.
// Present minä petyn, hän pettyy; imperfect minä petyin, hän pettyi; NUT pettynyt.
const pettyä: Word = {
  fi: "pettyä",
  slug: "pettyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to be disappointed",
  selitys:
    "Tuntea pettymystä, kun odotukset eivät täyty: 'pettyä lopputulokseen'. Tyyppi 1 (-yä), tyyppi 52/sanoa, astevaihtelu tt:t (petyn ~ pettyy). Johdettu verbistä pettää. Vrt. pettymys (disappointment).",
  kuva: { alt: "pettyä – tuntea pettymystä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; astevaihtelu tt:t (petyn ↔ pettyy)",
    muodot: [
      { sija: "preesens (minä)", muoto: "petyn", merkitys: "I am disappointed" },
      { sija: "imperfekti (minä)", muoto: "petyin", merkitys: "I was disappointed" },
      { sija: "NUT-partisiippi", muoto: "pettynyt", merkitys: "(have been) disappointed" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (petyn, petyin), vahva aste tt hän/he- ja perusmuodossa (pettyy, pettyi, pettynyt). 'Pettyä johonkin' (illatiivi) = to be disappointed in. Vrt. pettymys = disappointment.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "petyn" },
          { label: "sinä", form: "petyt" },
          { label: "hän", form: "pettyy" },
          { label: "me", form: "petymme" },
          { label: "te", form: "petytte" },
          { label: "he", form: "pettyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pety" },
          { label: "hän", form: "ei pety" },
          { label: "he", form: "eivät pety" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "petyin" },
          { label: "sinä", form: "petyit" },
          { label: "hän", form: "pettyi" },
          { label: "me", form: "petyimme" },
          { label: "te", form: "petyitte" },
          { label: "he", form: "pettyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pettynyt" },
          { label: "hän", form: "on pettynyt" },
          { label: "he", form: "ovat pettyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pety!" },
          { label: "te", form: "pettykää!" },
          { label: "kielto (sinä)", form: "älä pety" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pettymys",
      en: "disappointment, letdown",
      taso: "B1",
      esim: { fi: "Tulos oli suuri pettymys.", en: "The result was a big disappointment." },
    },
    {
      fi: "pettää",
      en: "to betray, deceive, fail",
      taso: "B1",
      esim: { fi: "Muisti petti pahasti.", en: "My memory failed badly." },
    },
    {
      fi: "pettynyt",
      en: "disappointed",
      taso: "B1",
      esim: { fi: "Olin pettynyt elokuvaan.", en: "I was disappointed with the film." },
    },
  ],
  synonyymit: [
    { fi: "tulla pettyneeksi", en: "to become disappointed" },
    { fi: "lannistua", en: "to be discouraged" },
  ],
  esimerkit: {
    A2: { fi: "Petyin, kun juhlat peruttiin.", en: "I was disappointed when the party was cancelled." },
    B1: { fi: "Älä petty, jos et onnistu heti.", en: "Don't be disappointed if you don't succeed right away." },
    B2: {
      fi: "Hän petyi pahasti huomatessaan, ettei lupauksia pidetty.",
      en: "He was deeply disappointed when he noticed the promises weren't kept.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pettyä;
