import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 67/tulla (verb type 3), no gradation,
// stem opiskele-. Present opiskelen, past opiskelin/opiskeli, participle opiskellut.
const opiskella: Word = {
  fi: "opiskella",
  slug: "opiskella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A1",
  en: "to study",
  selitys:
    "Hankkia tietoa tai taitoa, esim. koulussa. Tyyppi 3 (-lla → -e-), vartalo opiskele-, ei astevaihtelua. Vrt. oppia (= learn) ja lukea (= study for).",
  kuva: { alt: "opiskella – kirjojen ääressä opiskelu" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); vartalo opiskele-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "opiskelen", merkitys: "I study" },
      { sija: "imperfekti (minä)", muoto: "opiskelin", merkitys: "I studied" },
      { sija: "kielto (minä)", muoto: "en opiskele", merkitys: "I don't study" },
    ],
    huom:
      "Partisiippi opiskellut, monikko opiskelleet. Oppiaine partitiivissa: 'Opiskelen suomea.' Vrt. oppia (saavuttaa taito) ja opettaa (= teach).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "opiskelen" },
          { label: "sinä", form: "opiskelet" },
          { label: "hän", form: "opiskelee" },
          { label: "me", form: "opiskelemme" },
          { label: "te", form: "opiskelette" },
          { label: "he", form: "opiskelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en opiskele" },
          { label: "sinä", form: "et opiskele" },
          { label: "hän", form: "ei opiskele" },
          { label: "me", form: "emme opiskele" },
          { label: "te", form: "ette opiskele" },
          { label: "he", form: "eivät opiskele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "opiskelin" },
          { label: "sinä", form: "opiskelit" },
          { label: "hän", form: "opiskeli" },
          { label: "me", form: "opiskelimme" },
          { label: "te", form: "opiskelitte" },
          { label: "he", form: "opiskelivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en opiskellut" },
          { label: "sinä", form: "et opiskellut" },
          { label: "hän", form: "ei opiskellut" },
          { label: "me", form: "emme opiskelleet" },
          { label: "te", form: "ette opiskelleet" },
          { label: "he", form: "eivät opiskelleet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen opiskellut" },
          { label: "sinä", form: "olet opiskellut" },
          { label: "hän", form: "on opiskellut" },
          { label: "me", form: "olemme opiskelleet" },
          { label: "te", form: "olette opiskelleet" },
          { label: "he", form: "ovat opiskelleet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole opiskellut" },
          { label: "hän", form: "ei ole opiskellut" },
          { label: "he", form: "eivät ole opiskelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "opiskele!" },
          { label: "te", form: "opiskelkaa!" },
          { label: "kielto (sinä)", form: "älä opiskele" },
          { label: "kielto (te)", form: "älkää opiskelko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "opiskelija",
      en: "student",
      taso: "A1",
      esim: { fi: "Hän on yliopiston opiskelija.", en: "She is a university student." },
    },
    {
      fi: "opiskelu",
      en: "studying, studies",
      taso: "A2",
      esim: { fi: "Opiskelu vie paljon aikaa.", en: "Studying takes a lot of time." },
    },
    {
      fi: "opintolaina",
      en: "student loan",
      taso: "B2",
      esim: { fi: "Otin opintolainaa.", en: "I took out a student loan." },
    },
  ],
  synonyymit: [
    { fi: "opetella", en: "to learn, study (by practicing)" },
    { fi: "lukea", en: "to study (for an exam)" },
  ],
  esimerkit: {
    A2: { fi: "Opiskelen suomea joka päivä.", en: "I study Finnish every day." },
    B1: { fi: "Hän opiskeli lääkäriksi viisi vuotta.", en: "She studied to become a doctor for five years." },
    B2: {
      fi: "Olen opiskellut kolmea kieltä samanaikaisesti.",
      en: "I have studied three languages at the same time.",
    },
  },
  updatedAt: "2026-06-04",
};

export default opiskella;
