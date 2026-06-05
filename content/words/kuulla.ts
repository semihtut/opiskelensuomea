import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 67/tulla (verb type 3), no gradation,
// stem kuule-. Present kuulen, past kuulin/kuuli, past participle kuullut/kuulleet.
const kuulla: Word = {
  fi: "kuulla",
  slug: "kuulla",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A1",
  en: "to hear",
  selitys:
    "Aistia ääniä korvilla; saada tietää. Tyyppi 3 (-lla → -e-), vartalo kuule-, ei astevaihtelua. Vrt. kuunnella (= listen, aktiivinen).",
  kuva: { emoji: "👂", alt: "kuulla – ääntä kuuleva korva" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); vartalo kuule-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuulen", merkitys: "I hear" },
      { sija: "imperfekti (minä)", muoto: "kuulin", merkitys: "I heard" },
      { sija: "kielto (minä)", muoto: "en kuule", merkitys: "I don't hear" },
    ],
    huom:
      "Partisiippi kuullut, monikko kuulleet. Erota kuulla (= hear, aisti) ja kuunnella (= listen, tarkoituksellinen). 'Kuulla jostakin' = hear about something.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuulen" },
          { label: "sinä", form: "kuulet" },
          { label: "hän", form: "kuulee" },
          { label: "me", form: "kuulemme" },
          { label: "te", form: "kuulette" },
          { label: "he", form: "kuulevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuule" },
          { label: "sinä", form: "et kuule" },
          { label: "hän", form: "ei kuule" },
          { label: "me", form: "emme kuule" },
          { label: "te", form: "ette kuule" },
          { label: "he", form: "eivät kuule" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuulin" },
          { label: "sinä", form: "kuulit" },
          { label: "hän", form: "kuuli" },
          { label: "me", form: "kuulimme" },
          { label: "te", form: "kuulitte" },
          { label: "he", form: "kuulivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en kuullut" },
          { label: "sinä", form: "et kuullut" },
          { label: "hän", form: "ei kuullut" },
          { label: "me", form: "emme kuulleet" },
          { label: "te", form: "ette kuulleet" },
          { label: "he", form: "eivät kuulleet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuullut" },
          { label: "sinä", form: "olet kuullut" },
          { label: "hän", form: "on kuullut" },
          { label: "me", form: "olemme kuulleet" },
          { label: "te", form: "olette kuulleet" },
          { label: "he", form: "ovat kuulleet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole kuullut" },
          { label: "hän", form: "ei ole kuullut" },
          { label: "he", form: "eivät ole kuulleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuule!" },
          { label: "te", form: "kuulkaa!" },
          { label: "kielto (sinä)", form: "älä kuule" },
          { label: "kielto (te)", form: "älkää kuulko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuulo",
      en: "hearing (sense)",
      taso: "B1",
      esim: { fi: "Hänen kuulonsa on heikentynyt.", en: "His hearing has weakened." },
    },
    {
      fi: "kuuluisa",
      en: "famous",
      taso: "B1",
      esim: { fi: "Hän on kuuluisa laulaja.", en: "She is a famous singer." },
    },
    {
      fi: "kuulua",
      en: "to be heard; to belong",
      taso: "B1",
      esim: { fi: "Mitä kuuluu?", en: "How are you? (lit. what is heard?)" },
    },
  ],
  synonyymit: [
    { fi: "kuunnella", en: "to listen (actively)" },
    { fi: "havaita", en: "to perceive" },
  ],
  esimerkit: {
    A2: { fi: "Kuuletko sinä tuon äänen?", en: "Do you hear that sound?" },
    B1: { fi: "Kuulin uutisen radiosta.", en: "I heard the news on the radio." },
    B2: {
      fi: "Olen kuullut, että muutatte ulkomaille.",
      en: "I've heard that you're moving abroad.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kuulla;
