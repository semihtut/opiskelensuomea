import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 61/sallia (verb type 1), no gradation,
// stem etsi-. Present etsin, past etsin/etsi, past participle etsinyt/etsineet.
const etsia: Word = {
  fi: "etsiä",
  slug: "etsiä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to look for, search",
  selitys:
    "Yrittää löytää jotakin. Tyyppi 1, vartalo etsi-, ei astevaihtelua. Kohde partitiivissa. Vrt. löytää (= find, tulos).",
  kuva: { alt: "etsiä – etsiminen taskulampulla" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-iä); vartalo etsi-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "etsin", merkitys: "I look for" },
      { sija: "imperfekti (minä)", muoto: "etsin", merkitys: "I looked for" },
      { sija: "kielto (minä)", muoto: "en etsi", merkitys: "I don't look for" },
    ],
    huom:
      "Preesensin ja imperfektin yks. 1. persoona ovat samannäköiset (etsin). Kohde partitiivissa: 'Etsin avaimia.' Vrt. löytää (= the result).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "etsin" },
          { label: "sinä", form: "etsit" },
          { label: "hän", form: "etsii" },
          { label: "me", form: "etsimme" },
          { label: "te", form: "etsitte" },
          { label: "he", form: "etsivät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en etsi" },
          { label: "sinä", form: "et etsi" },
          { label: "hän", form: "ei etsi" },
          { label: "me", form: "emme etsi" },
          { label: "te", form: "ette etsi" },
          { label: "he", form: "eivät etsi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "etsin" },
          { label: "sinä", form: "etsit" },
          { label: "hän", form: "etsi" },
          { label: "me", form: "etsimme" },
          { label: "te", form: "etsitte" },
          { label: "he", form: "etsivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en etsinyt" },
          { label: "sinä", form: "et etsinyt" },
          { label: "hän", form: "ei etsinyt" },
          { label: "me", form: "emme etsineet" },
          { label: "te", form: "ette etsineet" },
          { label: "he", form: "eivät etsineet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen etsinyt" },
          { label: "sinä", form: "olet etsinyt" },
          { label: "hän", form: "on etsinyt" },
          { label: "me", form: "olemme etsineet" },
          { label: "te", form: "olette etsineet" },
          { label: "he", form: "ovat etsineet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole etsinyt" },
          { label: "hän", form: "ei ole etsinyt" },
          { label: "he", form: "eivät ole etsineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "etsi!" },
          { label: "te", form: "etsikää!" },
          { label: "kielto (sinä)", form: "älä etsi" },
          { label: "kielto (te)", form: "älkää etsikö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "etsintä",
      en: "search",
      taso: "B1",
      esim: { fi: "Poliisi aloitti etsinnän.", en: "The police started a search." },
    },
    {
      fi: "etsivä",
      en: "detective",
      taso: "B1",
      esim: { fi: "Etsivä ratkaisi tapauksen.", en: "The detective solved the case." },
    },
    {
      fi: "hakea",
      en: "to fetch, seek",
      taso: "A2",
      esim: { fi: "Haen lapset koulusta.", en: "I'll pick up the kids from school." },
    },
  ],
  synonyymit: [
    { fi: "hakea", en: "to seek, fetch" },
    { fi: "etsiskellä", en: "to search around" },
  ],
  esimerkit: {
    A2: { fi: "Etsin sanaa sanakirjasta.", en: "I look up a word in the dictionary." },
    B1: { fi: "Etsimme uutta asuntoa.", en: "We're looking for a new apartment." },
    B2: {
      fi: "Hän on etsinyt töitä jo kuukausia.",
      en: "He has been looking for work for months.",
    },
  },
  updatedAt: "2026-06-05",
};

export default etsia;
