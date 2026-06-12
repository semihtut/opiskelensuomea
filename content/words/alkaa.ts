import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 56/kaivaa (verb type 1), lk:l (k:∅)
// gradation, stem alka-. Present alan, past aloin/alkoi, past participle alkanut.
const alkaa: Word = {
  fi: "alkaa",
  slug: "alkaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to begin, start",
  selitys:
    "Saada alkunsa; ruveta tekemään. Tyyppi 1, astevaihtelu k:∅ (lk → l): alkaa → alan. Vastakohta loppua.",
  kuva: { alt: "alkaa – jokin alkaa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu k:∅ (lk → l)",
    muodot: [
      { sija: "preesens (minä)", muoto: "alan", merkitys: "I begin" },
      { sija: "imperfekti (minä)", muoto: "aloin", merkitys: "I began" },
      { sija: "kielto (minä)", muoto: "en ala", merkitys: "I don't begin" },
    ],
    huom:
      "Heikossa asteessa k katoaa: alan, aloin (mutta alkaa, alkavat, alkoi). 'Alkaa tehdä' tai 'alkaa tekemään' (molemmat sallittuja). Vastakohta loppua.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "alan" },
          { label: "sinä", form: "alat" },
          { label: "hän", form: "alkaa" },
          { label: "me", form: "alamme" },
          { label: "te", form: "alatte" },
          { label: "he", form: "alkavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ala" },
          { label: "sinä", form: "et ala" },
          { label: "hän", form: "ei ala" },
          { label: "me", form: "emme ala" },
          { label: "te", form: "ette ala" },
          { label: "he", form: "eivät ala" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "aloin" },
          { label: "sinä", form: "aloit" },
          { label: "hän", form: "alkoi" },
          { label: "me", form: "aloimme" },
          { label: "te", form: "aloitte" },
          { label: "he", form: "alkoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en alkanut" },
          { label: "sinä", form: "et alkanut" },
          { label: "hän", form: "ei alkanut" },
          { label: "me", form: "emme alkaneet" },
          { label: "te", form: "ette alkaneet" },
          { label: "he", form: "eivät alkaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen alkanut" },
          { label: "sinä", form: "olet alkanut" },
          { label: "hän", form: "on alkanut" },
          { label: "me", form: "olemme alkaneet" },
          { label: "te", form: "olette alkaneet" },
          { label: "he", form: "ovat alkaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole alkanut" },
          { label: "hän", form: "ei ole alkanut" },
          { label: "he", form: "eivät ole alkaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ala!" },
          { label: "te", form: "alkakaa!" },
          { label: "kielto (sinä)", form: "älä ala" },
          { label: "kielto (te)", form: "älkää alkako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "alku",
      en: "beginning, start",
      taso: "A2",
      esim: { fi: "Hyvä alku on tärkeä.", en: "A good start is important." },
    },
    {
      fi: "alkaen",
      en: "starting from",
      taso: "B1",
      esim: { fi: "Kauppa on auki yhdeksästä alkaen.", en: "The shop is open from nine onward." },
    },
    {
      fi: "aloittaa",
      en: "to begin (something), commence",
      taso: "A2",
      esim: { fi: "Aloitin uuden työn.", en: "I started a new job." },
    },
  ],
  synonyymit: [
    { fi: "aloittaa", en: "to begin (transitive)" },
    { fi: "käynnistyä", en: "to get going, start up" },
  ],
  esimerkit: {
    A2: { fi: "Koulu alkaa elokuussa.", en: "School begins in August." },
    B1: { fi: "Elokuva alkoi myöhässä.", en: "The movie started late." },
    B2: {
      fi: "Sade alkoi juuri, kun olimme lähdössä ulos.",
      en: "The rain began just as we were about to go out.",
    },
  },
  updatedAt: "2026-06-05",
};

export default alkaa;
