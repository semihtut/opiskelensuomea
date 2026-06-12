import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 52/sanoa (verb type 1), no gradation,
// stem asu-. Present asun, past asuin, past participle asunut.
const asua: Word = {
  fi: "asua",
  slug: "asua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to live, reside, dwell",
  selitys:
    "Olla jonkin paikan asukas, esim. kaupungissa tai talossa. Tyyppi 1, vartalo asu-, ei astevaihtelua. Erota 'elää' (= olla elossa).",
  kuva: { alt: "asua – koti, jossa asutaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-a); vartalo asu-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "asun", merkitys: "I live" },
      { sija: "imperfekti (minä)", muoto: "asuin", merkitys: "I lived" },
      { sija: "kielto (minä)", muoto: "en asu", merkitys: "I don't live" },
    ],
    huom:
      "Vaatii usein paikan inessiivissä: 'Asun Helsingissä.' Erota 'asua' (= reside) ja 'elää' (= be alive, live a life).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "asun" },
          { label: "sinä", form: "asut" },
          { label: "hän", form: "asuu" },
          { label: "me", form: "asumme" },
          { label: "te", form: "asutte" },
          { label: "he", form: "asuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en asu" },
          { label: "sinä", form: "et asu" },
          { label: "hän", form: "ei asu" },
          { label: "me", form: "emme asu" },
          { label: "te", form: "ette asu" },
          { label: "he", form: "eivät asu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "asuin" },
          { label: "sinä", form: "asuit" },
          { label: "hän", form: "asui" },
          { label: "me", form: "asuimme" },
          { label: "te", form: "asuitte" },
          { label: "he", form: "asuivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en asunut" },
          { label: "sinä", form: "et asunut" },
          { label: "hän", form: "ei asunut" },
          { label: "me", form: "emme asuneet" },
          { label: "te", form: "ette asuneet" },
          { label: "he", form: "eivät asuneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen asunut" },
          { label: "sinä", form: "olet asunut" },
          { label: "hän", form: "on asunut" },
          { label: "me", form: "olemme asuneet" },
          { label: "te", form: "olette asuneet" },
          { label: "he", form: "ovat asuneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole asunut" },
          { label: "hän", form: "ei ole asunut" },
          { label: "he", form: "eivät ole asuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "asu!" },
          { label: "te", form: "asukaa!" },
          { label: "kielto (sinä)", form: "älä asu" },
          { label: "kielto (te)", form: "älkää asuko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "asunto",
      en: "apartment, dwelling",
      taso: "A2",
      esim: { fi: "Ostimme uuden asunnon keskustasta.", en: "We bought a new apartment downtown." },
    },
    {
      fi: "asukas",
      en: "resident, inhabitant",
      taso: "B1",
      esim: { fi: "Talossa on kaksikymmentä asukasta.", en: "There are twenty residents in the building." },
    },
    {
      fi: "asuinpaikka",
      en: "place of residence",
      taso: "B1",
      esim: { fi: "Ilmoita uusi asuinpaikkasi.", en: "Report your new place of residence." },
    },
  ],
  synonyymit: [
    { fi: "majailla", en: "to stay, lodge (temporarily)" },
    { fi: "oleskella", en: "to stay, reside" },
  ],
  esimerkit: {
    A2: { fi: "Asun pienessä kaupungissa.", en: "I live in a small town." },
    B1: { fi: "He asuivat ennen Ruotsissa.", en: "They used to live in Sweden." },
    B2: {
      fi: "Olen asunut samassa talossa kymmenen vuotta.",
      en: "I have lived in the same house for ten years.",
    },
  },
  updatedAt: "2026-06-04",
};

export default asua;
