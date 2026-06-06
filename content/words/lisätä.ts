import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata (type 4), no gradation, stem lisää-.
// Present lisään, past lisäsin, past participle lisännyt.
const lisata: Word = {
  fi: "lisätä",
  slug: "lisätä",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to add; to increase",
  selitys:
    "Panna jotain lisää: 'lisää suolaa'. Tyyppi 4 (-ätä): lisätä → lisään. Kohde illatiivissa: 'lisään vettä kattilaan'. Vrt. vähentää (to reduce), lisä (addition).",
  kuva: { emoji: "➕", alt: "lisätä – panna jotain lisää" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ätä); ei astevaihtelua; vartalo lisää-",
    muodot: [
      { sija: "preesens (minä)", muoto: "lisään", merkitys: "I add" },
      { sija: "imperfekti (minä)", muoto: "lisäsin", merkitys: "I added" },
      { sija: "NUT-partisiippi", muoto: "lisännyt", merkitys: "(have) added" },
    ],
    huom:
      "Tyypin 4 imperfekti -si: lisäsin, lisäsit, lisäsi. Kohde illatiivissa: 'lisää vettä lasiin'. Vastakohta vähentää. Vrt. lisä = extra, lisäksi = in addition, lisääntyä = to increase (intr.).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lisään" },
          { label: "sinä", form: "lisäät" },
          { label: "hän", form: "lisää" },
          { label: "me", form: "lisäämme" },
          { label: "te", form: "lisäätte" },
          { label: "he", form: "lisäävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lisää" },
          { label: "hän", form: "ei lisää" },
          { label: "he", form: "eivät lisää" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lisäsin" },
          { label: "sinä", form: "lisäsit" },
          { label: "hän", form: "lisäsi" },
          { label: "me", form: "lisäsimme" },
          { label: "te", form: "lisäsitte" },
          { label: "he", form: "lisäsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen lisännyt" },
          { label: "hän", form: "on lisännyt" },
          { label: "he", form: "ovat lisänneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lisää!" },
          { label: "te", form: "lisätkää!" },
          { label: "kielto (sinä)", form: "älä lisää" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lisä",
      en: "addition, extra",
      taso: "B1",
      esim: { fi: "Saitko palkkaan lisää?", en: "Did you get a raise?" },
    },
    {
      fi: "lisäksi",
      en: "in addition, moreover",
      taso: "A2",
      esim: { fi: "Lisäksi tarvitsemme leipää.", en: "In addition, we need bread." },
    },
    {
      fi: "lisääntyä",
      en: "to increase, multiply (intransitive)",
      taso: "B2",
      esim: { fi: "Virheet lisääntyivät väsymyksen myötä.", en: "Mistakes increased with fatigue." },
    },
  ],
  synonyymit: [
    { fi: "kasvattaa", en: "to increase, grow" },
    { fi: "täydentää", en: "to supplement" },
  ],
  esimerkit: {
    A2: { fi: "Lisää vähän sokeria.", en: "Add a little sugar." },
    B1: { fi: "Lisäsimme budjettiin tuhat euroa.", en: "We added a thousand euros to the budget." },
    B2: {
      fi: "Liikunnan lisääminen arkeen paransi hänen vointiaan.",
      en: "Adding exercise to daily life improved her well-being.",
    },
  },
  updatedAt: "2026-06-06",
};

export default lisata;
