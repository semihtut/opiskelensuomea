import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa (type 1), no gradation,
// stem elä-. Present elän, past elin, past participle elänyt.
const elaa: Word = {
  fi: "elää",
  slug: "elää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to live, be alive",
  selitys:
    "Olla elossa; viettää elämää. Tyyppi 1, ei astevaihtelua: elää → elän. Vrt. asua (live somewhere) ja elämä (life). Vastakohta kuolla.",
  kuva: { emoji: "🌱", alt: "elää – elävä, kasvava elämä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "elän", merkitys: "I live / am alive" },
      { sija: "imperfekti (minä)", muoto: "elin", merkitys: "I lived" },
      { sija: "kielto (minä)", muoto: "en elä", merkitys: "I don't live" },
    ],
    huom:
      "Elää = olla elossa, viettää elämää: 'elän terveellisesti'. Vrt. asua = asua jossakin paikassa. Vastakohta kuolla.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "elän" },
          { label: "sinä", form: "elät" },
          { label: "hän", form: "elää" },
          { label: "me", form: "elämme" },
          { label: "te", form: "elätte" },
          { label: "he", form: "elävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en elä" },
          { label: "hän", form: "ei elä" },
          { label: "he", form: "eivät elä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "elin" },
          { label: "sinä", form: "elit" },
          { label: "hän", form: "eli" },
          { label: "me", form: "elimme" },
          { label: "te", form: "elitte" },
          { label: "he", form: "elivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen elänyt" },
          { label: "hän", form: "on elänyt" },
          { label: "he", form: "ovat eläneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "elä!" },
          { label: "te", form: "eläkää!" },
          { label: "kielto (sinä)", form: "älä elä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "elämä",
      en: "life",
      taso: "A1",
      esim: { fi: "Elämä on kaunista.", en: "Life is beautiful." },
    },
    {
      fi: "elävä",
      en: "alive, living",
      taso: "B1",
      esim: { fi: "Kala oli vielä elävä.", en: "The fish was still alive." },
    },
    {
      fi: "eläin",
      en: "animal",
      taso: "A2",
      esim: { fi: "Koira on kotieläin.", en: "A dog is a pet (domestic animal)." },
    },
  ],
  synonyymit: [
    { fi: "olla elossa", en: "to be alive" },
    { fi: "viettää elämää", en: "to lead a life" },
  ],
  esimerkit: {
    A2: { fi: "Isovanhempani elävät vielä.", en: "My grandparents are still alive." },
    B1: { fi: "Hän eli pitkän ja onnellisen elämän.", en: "She lived a long and happy life." },
    B2: {
      fi: "Monet eläimet elävät metsässä, jota ihminen ei ole koskaan nähnyt.",
      en: "Many animals live in a forest that no human has ever seen.",
    },
  },
  updatedAt: "2026-06-05",
};

export default elaa;
