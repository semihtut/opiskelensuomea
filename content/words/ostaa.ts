import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), no gradation.
// Present ostan, imperfect ostin, past participle ostanut.
const ostaa: Word = {
  fi: "ostaa",
  slug: "ostaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to buy",
  selitys: "Hankkia jotakin rahalla. Tyyppi 1, vartalo osta-, ei astevaihtelua.",
  kuva: { emoji: "🛍️", alt: "ostaa – ostoskassi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-a); vartalo osta-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "ostan", merkitys: "I buy" },
      { sija: "imperfekti (minä)", muoto: "ostin", merkitys: "I bought" },
      { sija: "kielto (minä)", muoto: "en osta", merkitys: "I don't buy" },
    ],
    huom: "Ostettava tavara on usein partitiivissa tai genetiivissä: 'ostan leipää' / 'ostan auton'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ostan" },
          { label: "sinä", form: "ostat" },
          { label: "hän", form: "ostaa" },
          { label: "me", form: "ostamme" },
          { label: "te", form: "ostatte" },
          { label: "he", form: "ostavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en osta" },
          { label: "sinä", form: "et osta" },
          { label: "hän", form: "ei osta" },
          { label: "me", form: "emme osta" },
          { label: "te", form: "ette osta" },
          { label: "he", form: "eivät osta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ostin" },
          { label: "sinä", form: "ostit" },
          { label: "hän", form: "osti" },
          { label: "me", form: "ostimme" },
          { label: "te", form: "ostitte" },
          { label: "he", form: "ostivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en ostanut" },
          { label: "sinä", form: "et ostanut" },
          { label: "hän", form: "ei ostanut" },
          { label: "me", form: "emme ostaneet" },
          { label: "te", form: "ette ostaneet" },
          { label: "he", form: "eivät ostaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ostanut" },
          { label: "sinä", form: "olet ostanut" },
          { label: "hän", form: "on ostanut" },
          { label: "me", form: "olemme ostaneet" },
          { label: "te", form: "olette ostaneet" },
          { label: "he", form: "ovat ostaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole ostanut" },
          { label: "hän", form: "ei ole ostanut" },
          { label: "he", form: "eivät ole ostaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "osta!" },
          { label: "te", form: "ostakaa!" },
          { label: "kielto (sinä)", form: "älä osta" },
          { label: "kielto (te)", form: "älkää ostako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ostos",
      en: "purchase",
      taso: "A2",
      esim: { fi: "Teen ostokset lauantaina.", en: "I do the shopping on Saturday." },
    },
    {
      fi: "ostoskeskus",
      en: "shopping center, mall",
      taso: "A2",
      esim: { fi: "Tapaamme ostoskeskuksessa.", en: "We'll meet at the shopping center." },
    },
    {
      fi: "ostaja",
      en: "buyer, purchaser",
      taso: "B1",
      esim: { fi: "Ostaja ja myyjä sopivat hinnasta.", en: "The buyer and seller agreed on the price." },
    },
  ],
  synonyymit: [
    { fi: "hankkia", en: "to acquire, obtain" },
    { fi: "lunastaa", en: "to redeem, buy out" },
  ],
  esimerkit: {
    A2: { fi: "Ostan kaupasta ruokaa.", en: "I buy food from the shop." },
    B1: { fi: "Ostin eilen uudet kengät.", en: "I bought new shoes yesterday." },
    B2: {
      fi: "Olemme ostaneet asunnon keskustasta.",
      en: "We have bought an apartment downtown.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ostaa;
