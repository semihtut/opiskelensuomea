import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 56/kaivaa (verb type 1), no gradation.
// Present maksan, imperfect maksoin (a → o), past participle maksanut. Means both
// "to pay" and "to cost".
const maksaa: Word = {
  fi: "maksaa",
  slug: "maksaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to pay; to cost",
  selitys:
    "Antaa rahaa jostakin (maksaa lasku) tai olla jonkin hintainen (paljonko se maksaa?). Tyyppi 1, ei astevaihtelua.",
  kuva: { emoji: "💳", alt: "maksaa – maksukortti" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-a); vartalo maksa-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "maksan", merkitys: "I pay" },
      { sija: "imperfekti (minä)", muoto: "maksoin", merkitys: "I paid" },
      { sija: "kielto (minä)", muoto: "en maksa", merkitys: "I don't pay" },
    ],
    huom:
      "Imperfektissä a → o: maksan → maksoin. Kaksi merkitystä: 'maksaa lasku' (to pay) ja 'Paljonko tämä maksaa?' (to cost).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "maksan" },
          { label: "sinä", form: "maksat" },
          { label: "hän", form: "maksaa" },
          { label: "me", form: "maksamme" },
          { label: "te", form: "maksatte" },
          { label: "he", form: "maksavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en maksa" },
          { label: "sinä", form: "et maksa" },
          { label: "hän", form: "ei maksa" },
          { label: "me", form: "emme maksa" },
          { label: "te", form: "ette maksa" },
          { label: "he", form: "eivät maksa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "maksoin" },
          { label: "sinä", form: "maksoit" },
          { label: "hän", form: "maksoi" },
          { label: "me", form: "maksoimme" },
          { label: "te", form: "maksoitte" },
          { label: "he", form: "maksoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en maksanut" },
          { label: "sinä", form: "et maksanut" },
          { label: "hän", form: "ei maksanut" },
          { label: "me", form: "emme maksaneet" },
          { label: "te", form: "ette maksaneet" },
          { label: "he", form: "eivät maksaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen maksanut" },
          { label: "sinä", form: "olet maksanut" },
          { label: "hän", form: "on maksanut" },
          { label: "me", form: "olemme maksaneet" },
          { label: "te", form: "olette maksaneet" },
          { label: "he", form: "ovat maksaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole maksanut" },
          { label: "hän", form: "ei ole maksanut" },
          { label: "he", form: "eivät ole maksaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "maksa!" },
          { label: "te", form: "maksakaa!" },
          { label: "kielto (sinä)", form: "älä maksa" },
          { label: "kielto (te)", form: "älkää maksako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maksu",
      en: "payment, fee",
      taso: "A2",
      esim: { fi: "Maksu erääntyy kuun lopussa.", en: "The payment is due at the end of the month." },
    },
    {
      fi: "maksullinen",
      en: "paid, requiring payment",
      taso: "B1",
      esim: { fi: "Pysäköinti on maksullista.", en: "Parking requires payment." },
    },
    {
      fi: "maksaja",
      en: "payer",
      taso: "B2",
      esim: { fi: "Lopullinen maksaja on kuluttaja.", en: "The final payer is the consumer." },
    },
  ],
  synonyymit: [
    { fi: "suorittaa", en: "to settle, make (a payment)" },
    { fi: "kustantaa", en: "to cost; to fund" },
  ],
  esimerkit: {
    A2: { fi: "Paljonko tämä maksaa?", en: "How much does this cost?" },
    B1: { fi: "Maksoin laskun verkkopankissa.", en: "I paid the bill in the online bank." },
    B2: {
      fi: "Virhe maksoi yritykselle paljon rahaa.",
      en: "The mistake cost the company a lot of money.",
    },
  },
  updatedAt: "2026-06-04",
};

export default maksaa;
