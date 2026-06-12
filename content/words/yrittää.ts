import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa (type 1), tt:t gradation,
// stem yrittä-. Present yritän, past yritin, past participle yrittänyt.
const yrittaa: Word = {
  fi: "yrittää",
  slug: "yrittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to try, attempt",
  selitys:
    "Tehdä parhaansa jonkin saavuttamiseksi. Tyyppi 1, astevaihtelu tt:t: yrittää → yritän. Seuraava verbi infinitiivissä: 'yritän tehdä'.",
  kuva: { alt: "yrittää – yritetään parhaansa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttää); astevaihtelu tt:t",
    muodot: [
      { sija: "preesens (minä)", muoto: "yritän", merkitys: "I try" },
      { sija: "imperfekti (minä)", muoto: "yritin", merkitys: "I tried" },
      { sija: "kielto (minä)", muoto: "en yritä", merkitys: "I don't try" },
    ],
    huom:
      "Heikossa asteessa tt → t: yritän, yritin (mutta yrittää, yrittävät). Seuraava verbi 1. infinitiivissä: 'yritän muistaa', 'yritin avata oven'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "yritän" },
          { label: "sinä", form: "yrität" },
          { label: "hän", form: "yrittää" },
          { label: "me", form: "yritämme" },
          { label: "te", form: "yritätte" },
          { label: "he", form: "yrittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en yritä" },
          { label: "hän", form: "ei yritä" },
          { label: "he", form: "eivät yritä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "yritin" },
          { label: "sinä", form: "yritit" },
          { label: "hän", form: "yritti" },
          { label: "me", form: "yritimme" },
          { label: "te", form: "yrititte" },
          { label: "he", form: "yrittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen yrittänyt" },
          { label: "hän", form: "on yrittänyt" },
          { label: "he", form: "ovat yrittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "yritä!" },
          { label: "te", form: "yrittäkää!" },
          { label: "kielto (sinä)", form: "älä yritä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yritys",
      en: "attempt; company, business",
      taso: "A2",
      esim: { fi: "Ensimmäinen yritys epäonnistui.", en: "The first attempt failed." },
    },
    {
      fi: "yrittäjä",
      en: "entrepreneur",
      taso: "B1",
      esim: { fi: "Hän on menestyvä yrittäjä.", en: "She is a successful entrepreneur." },
    },
    {
      fi: "yritteliäs",
      en: "enterprising, hard-trying",
      taso: "B2",
      esim: { fi: "Hän on yritteliäs nuori.", en: "He is an enterprising young person." },
    },
  ],
  synonyymit: [
    { fi: "koettaa", en: "to try, attempt" },
    { fi: "pyrkiä", en: "to strive, aim" },
  ],
  esimerkit: {
    A2: { fi: "Yritän puhua suomea.", en: "I try to speak Finnish." },
    B1: { fi: "Yritin soittaa sinulle, mutta et vastannut.", en: "I tried to call you, but you didn't answer." },
    B2: {
      fi: "Vaikka tehtävä oli vaikea, hän yritti loppuun asti eikä luovuttanut kertaakaan.",
      en: "Although the task was hard, he tried to the end and never once gave up.",
    },
  },
  updatedAt: "2026-06-05",
};

export default yrittaa;
