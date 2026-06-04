import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 58/laskea (verb type 1), k:∅ gradation,
// stem luke-. Present luen (k drops), past luin/luki, past participle lukenut.
const lukea: Word = {
  fi: "lukea",
  slug: "lukea",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to read; to study (for)",
  selitys:
    "Tulkita kirjoitettua tekstiä; myös 'lukea kokeeseen' = study for an exam. Tyyppi 1, astevaihtelu k:∅ (luke- → lue-).",
  kuva: { emoji: "📖", alt: "lukea – avoin kirja lukemista varten" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ea); astevaihtelu k:∅ (luke- → lue-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "luen", merkitys: "I read" },
      { sija: "imperfekti (minä)", muoto: "luin", merkitys: "I read (past)" },
      { sija: "kielto (minä)", muoto: "en lue", merkitys: "I don't read" },
    ],
    huom:
      "Astevaihtelu k:∅ heikossa asteessa: luen, luet, luemme (mutta lukee, lukevat). Partisiippi lukenut, monikko lukeneet.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "luen" },
          { label: "sinä", form: "luet" },
          { label: "hän", form: "lukee" },
          { label: "me", form: "luemme" },
          { label: "te", form: "luette" },
          { label: "he", form: "lukevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lue" },
          { label: "sinä", form: "et lue" },
          { label: "hän", form: "ei lue" },
          { label: "me", form: "emme lue" },
          { label: "te", form: "ette lue" },
          { label: "he", form: "eivät lue" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "luin" },
          { label: "sinä", form: "luit" },
          { label: "hän", form: "luki" },
          { label: "me", form: "luimme" },
          { label: "te", form: "luitte" },
          { label: "he", form: "lukivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en lukenut" },
          { label: "sinä", form: "et lukenut" },
          { label: "hän", form: "ei lukenut" },
          { label: "me", form: "emme lukeneet" },
          { label: "te", form: "ette lukeneet" },
          { label: "he", form: "eivät lukeneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen lukenut" },
          { label: "sinä", form: "olet lukenut" },
          { label: "hän", form: "on lukenut" },
          { label: "me", form: "olemme lukeneet" },
          { label: "te", form: "olette lukeneet" },
          { label: "he", form: "ovat lukeneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole lukenut" },
          { label: "hän", form: "ei ole lukenut" },
          { label: "he", form: "eivät ole lukeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lue!" },
          { label: "te", form: "lukekaa!" },
          { label: "kielto (sinä)", form: "älä lue" },
          { label: "kielto (te)", form: "älkää lukeko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lukija",
      en: "reader",
      taso: "A2",
      esim: { fi: "Kirjalla on paljon lukijoita.", en: "The book has many readers." },
    },
    {
      fi: "lukeminen",
      en: "reading (the activity)",
      taso: "A2",
      esim: { fi: "Pidän lukemisesta.", en: "I like reading." },
    },
    {
      fi: "lukutaito",
      en: "literacy, reading ability",
      taso: "B2",
      esim: { fi: "Lukutaito on tärkeä taito.", en: "Literacy is an important skill." },
    },
  ],
  synonyymit: [
    { fi: "selailla", en: "to browse, skim" },
    { fi: "opiskella", en: "to study (for)" },
  ],
  esimerkit: {
    A2: { fi: "Luen lehteä aamulla.", en: "I read the paper in the morning." },
    B1: { fi: "Luin koko kirjan yhdessä illassa.", en: "I read the whole book in one evening." },
    B2: {
      fi: "Olen lukenut tähän kokeeseen koko viikon.",
      en: "I have been studying for this exam all week.",
    },
  },
  updatedAt: "2026-06-04",
};

export default lukea;
