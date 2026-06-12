import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem käsittä- ~ käsitä-.
// Present minä käsitän, hän käsittää; imperfect minä käsitin; NUT käsittänyt.
const kasittaa: Word = {
  fi: "käsittää",
  slug: "käsittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to understand, grasp; to comprise, include",
  selitys:
    "1) Ymmärtää, tajuta: 'en käsitä tätä'. 2) Sisältää, kattaa: 'kurssi käsittää viisi osaa'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (käsitän). Vrt. käsite, käsitys, ymmärtää.",
  kuva: { alt: "käsittää – ymmärtää tai sisältää" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (käsitä- ~ käsittä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "käsitän", merkitys: "I understand" },
      { sija: "imperfekti (minä)", muoto: "käsitin", merkitys: "I understood" },
      { sija: "NUT-partisiippi", muoto: "käsittänyt", merkitys: "(have) understood" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva käsittä- (käsittää, käsittänyt), heikko käsitä- (käsitän, käsitin). Kaksi merkitystä: ymmärtää JA sisältää/kattaa. Vrt. käsite = concept, käsitys = conception, ymmärtää = to understand.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "käsitän" },
          { label: "sinä", form: "käsität" },
          { label: "hän", form: "käsittää" },
          { label: "me", form: "käsitämme" },
          { label: "te", form: "käsitätte" },
          { label: "he", form: "käsittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en käsitä" },
          { label: "hän", form: "ei käsitä" },
          { label: "he", form: "eivät käsitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "käsitin" },
          { label: "sinä", form: "käsitit" },
          { label: "hän", form: "käsitti" },
          { label: "me", form: "käsitimme" },
          { label: "te", form: "käsititte" },
          { label: "he", form: "käsittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen käsittänyt" },
          { label: "hän", form: "on käsittänyt" },
          { label: "he", form: "ovat käsittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "käsitä!" },
          { label: "te", form: "käsittäkää!" },
          { label: "kielto (sinä)", form: "älä käsitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käsite",
      en: "concept",
      taso: "B2",
      esim: { fi: "Se on abstrakti käsite.", en: "It is an abstract concept." },
    },
    {
      fi: "käsittämätön",
      en: "incomprehensible",
      taso: "B2",
      esim: { fi: "Se on minulle käsittämätöntä.", en: "It is incomprehensible to me." },
    },
  ],
  synonyymit: [
    { fi: "ymmärtää", en: "to understand" },
    { fi: "sisältää", en: "to contain, comprise" },
  ],
  esimerkit: {
    A2: { fi: "En käsitä, mitä tarkoitat.", en: "I don't understand what you mean." },
    B1: { fi: "Paketti käsittää kaikki tarvittavat osat.", en: "The package comprises all the necessary parts." },
    B2: {
      fi: "Vasta myöhemmin käsitin, kuinka tärkeä tuo päätös oli.",
      en: "Only later did I grasp how important that decision was.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kasittaa;
