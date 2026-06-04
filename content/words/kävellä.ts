import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 67/tulla (verb type 3), no gradation,
// stem kävele-. Present kävelen, past kävelin/käveli, past participle kävellyt.
const kavella: Word = {
  fi: "kävellä",
  slug: "kävellä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A1",
  en: "to walk",
  selitys:
    "Liikkua jalan rauhallisesti. Tyyppi 3 (-llä → -e-), vartalo kävele-, ei astevaihtelua. Substantiivi: kävely.",
  kuva: { emoji: "🚶‍♀️", alt: "kävellä – ihminen kävelemässä" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä); vartalo kävele-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "kävelen", merkitys: "I walk" },
      { sija: "imperfekti (minä)", muoto: "kävelin", merkitys: "I walked" },
      { sija: "kielto (minä)", muoto: "en kävele", merkitys: "I don't walk" },
    ],
    huom:
      "Partisiippi kävellyt, monikko kävelleet. Vrt. juosta (= run), joka on tyyppi 4.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kävelen" },
          { label: "sinä", form: "kävelet" },
          { label: "hän", form: "kävelee" },
          { label: "me", form: "kävelemme" },
          { label: "te", form: "kävelette" },
          { label: "he", form: "kävelevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kävele" },
          { label: "sinä", form: "et kävele" },
          { label: "hän", form: "ei kävele" },
          { label: "me", form: "emme kävele" },
          { label: "te", form: "ette kävele" },
          { label: "he", form: "eivät kävele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kävelin" },
          { label: "sinä", form: "kävelit" },
          { label: "hän", form: "käveli" },
          { label: "me", form: "kävelimme" },
          { label: "te", form: "kävelitte" },
          { label: "he", form: "kävelivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en kävellyt" },
          { label: "sinä", form: "et kävellyt" },
          { label: "hän", form: "ei kävellyt" },
          { label: "me", form: "emme kävelleet" },
          { label: "te", form: "ette kävelleet" },
          { label: "he", form: "eivät kävelleet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kävellyt" },
          { label: "sinä", form: "olet kävellyt" },
          { label: "hän", form: "on kävellyt" },
          { label: "me", form: "olemme kävelleet" },
          { label: "te", form: "olette kävelleet" },
          { label: "he", form: "ovat kävelleet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole kävellyt" },
          { label: "hän", form: "ei ole kävellyt" },
          { label: "he", form: "eivät ole kävelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kävele!" },
          { label: "te", form: "kävelkää!" },
          { label: "kielto (sinä)", form: "älä kävele" },
          { label: "kielto (te)", form: "älkää kävelkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kävely",
      en: "a walk, walking",
      taso: "A2",
      esim: { fi: "Lähdetään kävelylle.", en: "Let's go for a walk." },
    },
    {
      fi: "kävelijä",
      en: "walker, pedestrian",
      taso: "B1",
      esim: { fi: "Kävelijöitä varten on oma tie.", en: "There's a separate path for pedestrians." },
    },
    {
      fi: "kävelykatu",
      en: "pedestrian street",
      taso: "B1",
      esim: { fi: "Keskustassa on pitkä kävelykatu.", en: "Downtown has a long pedestrian street." },
    },
  ],
  synonyymit: [
    { fi: "astella", en: "to stride, pace" },
    { fi: "kulkea", en: "to go, move (on foot)" },
  ],
  esimerkit: {
    A2: { fi: "Kävelen töihin joka päivä.", en: "I walk to work every day." },
    B1: { fi: "Kävelimme rannalla auringonlaskussa.", en: "We walked on the beach at sunset." },
    B2: {
      fi: "Olemme kävelleet jo kymmenen kilometriä emmekä ole vielä perillä.",
      en: "We've already walked ten kilometers and we're still not there.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kavella;
