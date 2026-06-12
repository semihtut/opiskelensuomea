import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 76/taitaa (verb type 1), t:d gradation.
// Present tiedän, IRREGULAR past tiesin/tiesi, irregular participle tiennyt/tienneet.
const tietaa: Word = {
  fi: "tietää",
  slug: "tietää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to know (a fact)",
  selitys:
    "Olla tietoinen jostakin asiasta tai tosiseikasta. Tyyppi 1, astevaihtelu t:d (tiedän). Imperfekti on poikkeava: tiesin. Vrt. tuntea (= know a person).",
  kuva: { alt: "tietää – tietämisen oivallus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); t:d-astevaihtelu; poikkeava imperfekti tiesin",
    muodot: [
      { sija: "preesens (minä)", muoto: "tiedän", merkitys: "I know" },
      { sija: "imperfekti (minä)", muoto: "tiesin", merkitys: "I knew" },
      { sija: "kielto (minä)", muoto: "en tiedä", merkitys: "I don't know" },
    ],
    huom:
      "Imperfektissä t → s: tiedän → tiesin (ei *tiesin tt:stä). Partisiippi on tiennyt (yleisempi kuin vanha tietänyt). Erota tietää (know a fact) ja tuntea (know a person/place).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tiedän" },
          { label: "sinä", form: "tiedät" },
          { label: "hän", form: "tietää" },
          { label: "me", form: "tiedämme" },
          { label: "te", form: "tiedätte" },
          { label: "he", form: "tietävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tiedä" },
          { label: "sinä", form: "et tiedä" },
          { label: "hän", form: "ei tiedä" },
          { label: "me", form: "emme tiedä" },
          { label: "te", form: "ette tiedä" },
          { label: "he", form: "eivät tiedä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tiesin" },
          { label: "sinä", form: "tiesit" },
          { label: "hän", form: "tiesi" },
          { label: "me", form: "tiesimme" },
          { label: "te", form: "tiesitte" },
          { label: "he", form: "tiesivät" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en tiennyt" },
          { label: "sinä", form: "et tiennyt" },
          { label: "hän", form: "ei tiennyt" },
          { label: "me", form: "emme tienneet" },
          { label: "te", form: "ette tienneet" },
          { label: "he", form: "eivät tienneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tiennyt" },
          { label: "sinä", form: "olet tiennyt" },
          { label: "hän", form: "on tiennyt" },
          { label: "me", form: "olemme tienneet" },
          { label: "te", form: "olette tienneet" },
          { label: "he", form: "ovat tienneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole tiennyt" },
          { label: "hän", form: "ei ole tiennyt" },
          { label: "he", form: "eivät ole tienneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tiedä!" },
          { label: "te", form: "tietäkää!" },
          { label: "kielto (sinä)", form: "älä tiedä" },
          { label: "kielto (te)", form: "älkää tietäkö" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tieto",
      en: "knowledge, information, datum",
      taso: "A2",
      esim: { fi: "Tarvitsen lisää tietoa.", en: "I need more information." },
    },
    {
      fi: "tietenkin",
      en: "of course",
      taso: "A2",
      esim: { fi: "Tietenkin autan sinua.", en: "Of course I'll help you." },
    },
    {
      fi: "tietämätön",
      en: "ignorant, unaware",
      taso: "B2",
      esim: { fi: "Olin täysin tietämätön asiasta.", en: "I was completely unaware of the matter." },
    },
  ],
  synonyymit: [
    { fi: "osata", en: "to know how to (a skill)" },
    { fi: "tuntea", en: "to know (a person/place)" },
  ],
  esimerkit: {
    A2: { fi: "Tiedätkö, missä asema on?", en: "Do you know where the station is?" },
    B1: { fi: "En tiennyt, että olit sairas.", en: "I didn't know you were sick." },
    B2: {
      fi: "Olen aina tiennyt, että hänestä tulee opettaja.",
      en: "I have always known that she would become a teacher.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tietaa;
