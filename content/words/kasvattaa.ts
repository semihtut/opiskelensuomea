import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt–t gradation, stem kasvatta-.
// Present kasvatan, past kasvatin, past participle kasvattanut.
const kasvattaa: Word = {
  fi: "kasvattaa",
  slug: "kasvattaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to grow, raise; to increase",
  selitys:
    "Saada kasvamaan tai suuremmaksi: 'kasvattaa lapsia' / 'kasvattaa myyntiä'. Astevaihtelu tt:t (kasvattaa → kasvatan). Vrt. kasvaa = to grow (intransitiivinen).",
  kuva: { emoji: "🌱", alt: "kasvattaa – saada kasvamaan tai suuremmaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ttaa); astevaihtelu tt:t; vartalo kasvatta-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kasvatan", merkitys: "I grow/raise" },
      { sija: "imperfekti (minä)", muoto: "kasvatin", merkitys: "I grew/raised" },
      { sija: "NUT-partisiippi", muoto: "kasvattanut", merkitys: "(have) raised" },
    ],
    huom:
      "Transitiivinen (kausatiivi verbistä kasvaa): kasvattaa jotain. Astevaihtelu tt:t: kasvatan, kasvatat, kasvatti. Vrt. kasvaa = to grow (intr.), kasvatus = upbringing/education.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kasvatan" },
          { label: "sinä", form: "kasvatat" },
          { label: "hän", form: "kasvattaa" },
          { label: "me", form: "kasvatamme" },
          { label: "te", form: "kasvatatte" },
          { label: "he", form: "kasvattavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kasvata" },
          { label: "hän", form: "ei kasvata" },
          { label: "he", form: "eivät kasvata" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kasvatin" },
          { label: "sinä", form: "kasvatit" },
          { label: "hän", form: "kasvatti" },
          { label: "me", form: "kasvatimme" },
          { label: "te", form: "kasvatitte" },
          { label: "he", form: "kasvattivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kasvattanut" },
          { label: "hän", form: "on kasvattanut" },
          { label: "he", form: "ovat kasvattaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kasvata!" },
          { label: "te", form: "kasvattakaa!" },
          { label: "kielto (sinä)", form: "älä kasvata" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kasvatus",
      en: "upbringing, education",
      taso: "B2",
      esim: { fi: "Lasten kasvatus vaatii kärsivällisyyttä.", en: "Raising children requires patience." },
    },
    {
      fi: "kasvaa",
      en: "to grow (intransitive)",
      taso: "A2",
      esim: { fi: "Lapset kasvavat nopeasti.", en: "Children grow fast." },
    },
    {
      fi: "kasvattaja",
      en: "breeder; educator",
      taso: "B2",
      esim: { fi: "Hän on tunnettu koirien kasvattaja.", en: "She is a well-known dog breeder." },
    },
  ],
  synonyymit: [
    { fi: "lisätä", en: "to increase" },
    { fi: "viljellä", en: "to cultivate, grow (plants)" },
  ],
  esimerkit: {
    A2: { fi: "He kasvattavat vihanneksia.", en: "They grow vegetables." },
    B1: { fi: "Yritys kasvatti liikevaihtoaan.", en: "The company grew its turnover." },
    B2: {
      fi: "Hänet kasvatettiin arvostamaan rehellisyyttä.",
      en: "She was raised to value honesty.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kasvattaa;
