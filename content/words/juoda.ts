import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 64/juoda (verb type 2, -da), no gradation.
// Imperfect has a vowel change: juon → join. Past participle juonut.
const juoda: Word = {
  fi: "juoda",
  slug: "juoda",
  pos: "verbi (tyyppi 2, -da)",
  posClass: "verbi",
  level: "A1",
  en: "to drink",
  selitys:
    "Nauttia nestettä. Tyyppi 2 (-da), vartalo juo-. Imperfektissä vokaalimuutos: juon → join. Voi tarkoittaa myös alkoholin juomista.",
  kuva: { alt: "juoda – juomamuki pillillä" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-da); vartalo juo-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "juon", merkitys: "I drink" },
      { sija: "imperfekti (minä)", muoto: "join", merkitys: "I drank" },
      { sija: "kielto (minä)", muoto: "en juo", merkitys: "I don't drink" },
    ],
    huom: "Imperfekti join (juo- → joi-). Partisiippi juonut.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "juon" },
          { label: "sinä", form: "juot" },
          { label: "hän", form: "juo" },
          { label: "me", form: "juomme" },
          { label: "te", form: "juotte" },
          { label: "he", form: "juovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en juo" },
          { label: "sinä", form: "et juo" },
          { label: "hän", form: "ei juo" },
          { label: "me", form: "emme juo" },
          { label: "te", form: "ette juo" },
          { label: "he", form: "eivät juo" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "join" },
          { label: "sinä", form: "joit" },
          { label: "hän", form: "joi" },
          { label: "me", form: "joimme" },
          { label: "te", form: "joitte" },
          { label: "he", form: "joivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en juonut" },
          { label: "sinä", form: "et juonut" },
          { label: "hän", form: "ei juonut" },
          { label: "me", form: "emme juoneet" },
          { label: "te", form: "ette juoneet" },
          { label: "he", form: "eivät juoneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen juonut" },
          { label: "sinä", form: "olet juonut" },
          { label: "hän", form: "on juonut" },
          { label: "me", form: "olemme juoneet" },
          { label: "te", form: "olette juoneet" },
          { label: "he", form: "ovat juoneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole juonut" },
          { label: "hän", form: "ei ole juonut" },
          { label: "he", form: "eivät ole juoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "juo!" },
          { label: "te", form: "juokaa!" },
          { label: "kielto (sinä)", form: "älä juo" },
          { label: "kielto (te)", form: "älkää juoko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "juoma",
      en: "drink, beverage",
      taso: "A2",
      esim: { fi: "Mikä on lempijuomasi?", en: "What is your favorite drink?" },
    },
    {
      fi: "juominen",
      en: "drinking",
      taso: "B1",
      esim: { fi: "Veden juominen on tärkeää.", en: "Drinking water is important." },
    },
    {
      fi: "juotava",
      en: "drinkable; something to drink",
      taso: "B2",
      esim: { fi: "Onko sinulla mitään juotavaa?", en: "Do you have anything to drink?" },
    },
  ],
  synonyymit: [
    { fi: "siemaista", en: "to take a sip" },
    { fi: "ryypätä", en: "to swig; to drink alcohol (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Juon vettä.", en: "I drink water." },
    B1: { fi: "Joimme kahvia yhdessä.", en: "We drank coffee together." },
    B2: {
      fi: "Et ole juonut tarpeeksi vettä tänään.",
      en: "You haven't drunk enough water today.",
    },
  },
  updatedAt: "2026-06-04",
};

export default juoda;
