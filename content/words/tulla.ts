import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 67/tulla (verb type 3), no gradation,
// stem tule-. Present tulen, past tulin/tuli, past participle tullut/tulleet.
const tulla: Word = {
  fi: "tulla",
  slug: "tulla",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A1",
  en: "to come; to become",
  selitys:
    "Liikkua puhujaa kohti; myös 'tulla joksikin' (= become). Tyyppi 3, vartalo tule-, ei astevaihtelua. Vastakohta 'mennä'.",
  kuva: { alt: "tulla – ihminen tulossa kohti" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); vartalo tule-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "tulen", merkitys: "I come" },
      { sija: "imperfekti (minä)", muoto: "tulin", merkitys: "I came" },
      { sija: "kielto (minä)", muoto: "en tule", merkitys: "I don't come" },
    ],
    huom:
      "'Tulla' + translatiivi = become: 'Hänestä tuli lääkäri.' NB-partisiippi tullut, monikko tulleet.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tulen" },
          { label: "sinä", form: "tulet" },
          { label: "hän", form: "tulee" },
          { label: "me", form: "tulemme" },
          { label: "te", form: "tulette" },
          { label: "he", form: "tulevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tule" },
          { label: "sinä", form: "et tule" },
          { label: "hän", form: "ei tule" },
          { label: "me", form: "emme tule" },
          { label: "te", form: "ette tule" },
          { label: "he", form: "eivät tule" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tulin" },
          { label: "sinä", form: "tulit" },
          { label: "hän", form: "tuli" },
          { label: "me", form: "tulimme" },
          { label: "te", form: "tulitte" },
          { label: "he", form: "tulivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en tullut" },
          { label: "sinä", form: "et tullut" },
          { label: "hän", form: "ei tullut" },
          { label: "me", form: "emme tulleet" },
          { label: "te", form: "ette tulleet" },
          { label: "he", form: "eivät tulleet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tullut" },
          { label: "sinä", form: "olet tullut" },
          { label: "hän", form: "on tullut" },
          { label: "me", form: "olemme tulleet" },
          { label: "te", form: "olette tulleet" },
          { label: "he", form: "ovat tulleet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole tullut" },
          { label: "hän", form: "ei ole tullut" },
          { label: "he", form: "eivät ole tulleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tule!" },
          { label: "te", form: "tulkaa!" },
          { label: "kielto (sinä)", form: "älä tule" },
          { label: "kielto (te)", form: "älkää tulko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tulo",
      en: "arrival; (pl. tulot) income",
      taso: "B1",
      esim: { fi: "Junan tulo myöhästyi.", en: "The train's arrival was delayed." },
    },
    {
      fi: "tulevaisuus",
      en: "future",
      taso: "B1",
      esim: { fi: "Mietin usein tulevaisuutta.", en: "I often think about the future." },
    },
    {
      fi: "tuleva",
      en: "coming, upcoming",
      taso: "B1",
      esim: { fi: "Tulevalla viikolla on lomaa.", en: "There's a holiday next week." },
    },
  ],
  synonyymit: [
    { fi: "saapua", en: "to arrive" },
    { fi: "ilmaantua", en: "to appear, turn up" },
  ],
  esimerkit: {
    A2: { fi: "Tule tänne!", en: "Come here!" },
    B1: { fi: "Hän tuli kotiin myöhään.", en: "He came home late." },
    B2: {
      fi: "Hänestä tuli lopulta tunnettu kirjailija.",
      en: "She eventually became a well-known writer.",
    },
  },
  updatedAt: "2026-06-04",
};

export default tulla;
