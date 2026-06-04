import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: type-2 -da verb, stem saa-, no gradation. Past
// (sain, sai) is distinct from present (saan, saa) — contrast with -ida verbs.
const saada: Word = {
  fi: "saada",
  slug: "saada",
  pos: "verbi (tyyppi 2, -da)",
  posClass: "verbi",
  level: "A1",
  en: "to get, receive; to be allowed to, may",
  selitys:
    "Tarkoittaa saamista ja vastaanottamista sekä lupaa ('Saanko tulla?' = 'May I come?'). Vartalo saa-, ei astevaihtelua.",
  kuva: { emoji: "🎁", alt: "saada – lahja (saaminen)" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-da); vartalo saa-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "saan", merkitys: "I get / may" },
      { sija: "imperfekti (minä)", muoto: "sain", merkitys: "I got" },
      { sija: "kielto (minä)", muoto: "en saa", merkitys: "I don't get / may not" },
    ],
    huom:
      "Ilmaisee myös lupaa: 'Saanko…?' = 'May I…?'. Toisin kuin -ida-verbeillä, myönteinen imperfekti sain on eri kuin preesens saan.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "saan" },
          { label: "sinä", form: "saat" },
          { label: "hän", form: "saa" },
          { label: "me", form: "saamme" },
          { label: "te", form: "saatte" },
          { label: "he", form: "saavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en saa" },
          { label: "sinä", form: "et saa" },
          { label: "hän", form: "ei saa" },
          { label: "me", form: "emme saa" },
          { label: "te", form: "ette saa" },
          { label: "he", form: "eivät saa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "sain" },
          { label: "sinä", form: "sait" },
          { label: "hän", form: "sai" },
          { label: "me", form: "saimme" },
          { label: "te", form: "saitte" },
          { label: "he", form: "saivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en saanut" },
          { label: "sinä", form: "et saanut" },
          { label: "hän", form: "ei saanut" },
          { label: "me", form: "emme saaneet" },
          { label: "te", form: "ette saaneet" },
          { label: "he", form: "eivät saaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen saanut" },
          { label: "sinä", form: "olet saanut" },
          { label: "hän", form: "on saanut" },
          { label: "me", form: "olemme saaneet" },
          { label: "te", form: "olette saaneet" },
          { label: "he", form: "ovat saaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole saanut" },
          { label: "hän", form: "ei ole saanut" },
          { label: "he", form: "eivät ole saaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "saa!" },
          { label: "te", form: "saakaa!" },
          { label: "kielto (sinä)", form: "älä saa" },
          { label: "kielto (te)", form: "älkää saako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "saavuttaa",
      en: "to reach, achieve",
      taso: "B1",
      esim: { fi: "Hän saavutti tavoitteensa.", en: "She reached her goal." },
    },
    {
      fi: "saatavilla",
      en: "available",
      taso: "B1",
      esim: { fi: "Lippuja on saatavilla netissä.", en: "Tickets are available online." },
    },
    {
      fi: "saaja",
      en: "recipient",
      taso: "B2",
      esim: { fi: "Kirjeen saaja ei ollut kotona.", en: "The recipient of the letter wasn't home." },
    },
  ],
  synonyymit: [
    { fi: "hankkia", en: "to acquire, obtain" },
    { fi: "vastaanottaa", en: "to receive" },
  ],
  esimerkit: {
    A2: { fi: "Sain lahjan ystävältäni.", en: "I got a gift from my friend." },
    B1: { fi: "Saanko maksaa kortilla?", en: "May I pay by card?" },
    B2: { fi: "Saatuaan tuloksen hän hymyili.", en: "Having received the result, she smiled." },
  },
  updatedAt: "2026-06-04",
};

export default saada;
