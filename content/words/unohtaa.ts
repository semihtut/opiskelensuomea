import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), ht:hd gradation,
// stem unohta-. Present unohdan (ht:hd), past unohdin/unohti, participle unohtanut.
const unohtaa: Word = {
  fi: "unohtaa",
  slug: "unohtaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to forget",
  selitys:
    "Olla muistamatta; jättää vahingossa. Tyyppi 1, astevaihtelu ht:hd (unohta- → unohda-). Vastakohta muistaa.",
  kuva: { alt: "unohtaa – unohtamisen ele" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu ht:hd (unohta- → unohda-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "unohdan", merkitys: "I forget" },
      { sija: "imperfekti (minä)", muoto: "unohdin", merkitys: "I forgot" },
      { sija: "kielto (minä)", muoto: "en unohda", merkitys: "I don't forget" },
    ],
    huom:
      "Heikossa asteessa ht → hd: unohdan, unohdat, unohdin (mutta unohtaa, unohtavat, unohtanut). Myös 'jättää vahingossa': 'Unohdin puhelimen kotiin.'",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "unohdan" },
          { label: "sinä", form: "unohdat" },
          { label: "hän", form: "unohtaa" },
          { label: "me", form: "unohdamme" },
          { label: "te", form: "unohdatte" },
          { label: "he", form: "unohtavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en unohda" },
          { label: "sinä", form: "et unohda" },
          { label: "hän", form: "ei unohda" },
          { label: "me", form: "emme unohda" },
          { label: "te", form: "ette unohda" },
          { label: "he", form: "eivät unohda" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "unohdin" },
          { label: "sinä", form: "unohdit" },
          { label: "hän", form: "unohti" },
          { label: "me", form: "unohdimme" },
          { label: "te", form: "unohditte" },
          { label: "he", form: "unohtivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en unohtanut" },
          { label: "sinä", form: "et unohtanut" },
          { label: "hän", form: "ei unohtanut" },
          { label: "me", form: "emme unohtaneet" },
          { label: "te", form: "ette unohtaneet" },
          { label: "he", form: "eivät unohtaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen unohtanut" },
          { label: "sinä", form: "olet unohtanut" },
          { label: "hän", form: "on unohtanut" },
          { label: "me", form: "olemme unohtaneet" },
          { label: "te", form: "olette unohtaneet" },
          { label: "he", form: "ovat unohtaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole unohtanut" },
          { label: "hän", form: "ei ole unohtanut" },
          { label: "he", form: "eivät ole unohtaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "unohda!" },
          { label: "te", form: "unohtakaa!" },
          { label: "kielto (sinä)", form: "älä unohda" },
          { label: "kielto (te)", form: "älkää unohtako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "unohdus",
      en: "oblivion, a lapse of memory",
      taso: "B2",
      esim: { fi: "Asia painui unohduksiin.", en: "The matter faded into oblivion." },
    },
    {
      fi: "unohtua",
      en: "to be forgotten",
      taso: "B1",
      esim: { fi: "Avaimet unohtuivat pöydälle.", en: "The keys were left on the table." },
    },
    {
      fi: "unohtumaton",
      en: "unforgettable",
      taso: "B2",
      esim: { fi: "Se oli unohtumaton ilta.", en: "It was an unforgettable evening." },
    },
  ],
  synonyymit: [
    { fi: "unohtua", en: "to slip one's mind" },
    { fi: "jättää", en: "to leave (behind)" },
  ],
  esimerkit: {
    A2: { fi: "Unohdin avaimet kotiin.", en: "I forgot the keys at home." },
    B1: { fi: "Älä unohda soittaa äidille.", en: "Don't forget to call mom." },
    B2: {
      fi: "Olin unohtanut, kuinka kaunis tämä paikka on.",
      en: "I had forgotten how beautiful this place is.",
    },
  },
  updatedAt: "2026-06-05",
};

export default unohtaa;
