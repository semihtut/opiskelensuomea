import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56 (nauraa-type), no gradation, stem naura-.
// Present minä nauran, hän nauraa; imperfect minä nauroin, hän nauroi; NUT nauranut.
const nauraa: Word = {
  fi: "nauraa",
  slug: "nauraa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to laugh",
  selitys:
    "Ilmaista iloa nauramalla: 'nauraa ääneen'. Tyyppi 1 (-aa), tyyppi 56, ei astevaihtelua; imperfektissä a → o (nauroin). Vrt. nauru (laughter), naurattaa (to make laugh).",
  kuva: { emoji: "😄", alt: "nauraa – ilmaista iloa nauramalla" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 56; ei astevaihtelua; imperfektissä a → o",
    muodot: [
      { sija: "preesens (minä)", muoto: "nauran", merkitys: "I laugh" },
      { sija: "imperfekti (minä)", muoto: "nauroin", merkitys: "I laughed" },
      { sija: "NUT-partisiippi", muoto: "nauranut", merkitys: "(have) laughed" },
    ],
    huom:
      "Imperfektissä vartalon a muuttuu o:ksi: nauran → nauroin (vrt. saada-tyyppi). Kohde: 'nauraa jollekin' (allatiivi) = to laugh at; 'nauraa jollekin asialle'. Vrt. nauru = laughter.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "nauran" },
          { label: "sinä", form: "naurat" },
          { label: "hän", form: "nauraa" },
          { label: "me", form: "nauramme" },
          { label: "te", form: "nauratte" },
          { label: "he", form: "nauravat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en naura" },
          { label: "hän", form: "ei naura" },
          { label: "he", form: "eivät naura" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "nauroin" },
          { label: "sinä", form: "nauroit" },
          { label: "hän", form: "nauroi" },
          { label: "me", form: "nauroimme" },
          { label: "te", form: "nauroitte" },
          { label: "he", form: "nauroivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen nauranut" },
          { label: "hän", form: "on nauranut" },
          { label: "he", form: "ovat nauraneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "naura!" },
          { label: "te", form: "naurakaa!" },
          { label: "kielto (sinä)", form: "älä naura" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nauru",
      en: "laughter, laugh",
      taso: "A2",
      esim: { fi: "Kuulin iloista naurua.", en: "I heard cheerful laughter." },
    },
    {
      fi: "naurattaa",
      en: "to make (someone) laugh",
      taso: "B2",
      esim: { fi: "Vitsi nauratti kaikkia.", en: "The joke made everyone laugh." },
    },
    {
      fi: "naurahtaa",
      en: "to chuckle, give a laugh",
      taso: "B2",
      esim: { fi: "Hän naurahti hiljaa.", en: "She chuckled quietly." },
    },
  ],
  synonyymit: [
    { fi: "hihittää", en: "to giggle" },
    { fi: "hörähtää", en: "to guffaw" },
  ],
  esimerkit: {
    A2: { fi: "Lapset nauravat leikkiessään.", en: "The children laugh while playing." },
    B1: { fi: "Nauroimme koko illan vanhoille jutuille.", en: "We laughed all evening at old stories." },
    B2: {
      fi: "Hän nauroi niin kovaa, että silmistä valui kyyneleet.",
      en: "He laughed so hard that tears ran from his eyes.",
    },
  },
  updatedAt: "2026-06-06",
};

export default nauraa;
