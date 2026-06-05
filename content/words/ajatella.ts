import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 67/tulla (verb type 3), tt:t gradation,
// stem ajattele-. Present ajattelen, past ajattelin, past participle ajatellut.
const ajatella: Word = {
  fi: "ajatella",
  slug: "ajatella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to think",
  selitys:
    "Käyttää järkeä, pohtia. Tyyppi 3 (-lla), astevaihtelu tt:t (ajattele- → ajatel-). Juuri substantiivista ajatus.",
  kuva: { emoji: "🤔", alt: "ajatella – ajattelemisen ele" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); astevaihtelu tt:t (ajattele- ↔ ajatel-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "ajattelen", merkitys: "I think" },
      { sija: "imperfekti (minä)", muoto: "ajattelin", merkitys: "I thought" },
      { sija: "kielto (minä)", muoto: "en ajattele", merkitys: "I don't think" },
    ],
    huom:
      "Persoonamuodoissa vahva aste tt (ajattelen), infinitiivissä ja partisiipissa heikko aste t (ajatella, ajatellut). 'Ajatella jotakin' = think about (partitiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ajattelen" },
          { label: "sinä", form: "ajattelet" },
          { label: "hän", form: "ajattelee" },
          { label: "me", form: "ajattelemme" },
          { label: "te", form: "ajattelette" },
          { label: "he", form: "ajattelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ajattele" },
          { label: "sinä", form: "et ajattele" },
          { label: "hän", form: "ei ajattele" },
          { label: "me", form: "emme ajattele" },
          { label: "te", form: "ette ajattele" },
          { label: "he", form: "eivät ajattele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ajattelin" },
          { label: "sinä", form: "ajattelit" },
          { label: "hän", form: "ajatteli" },
          { label: "me", form: "ajattelimme" },
          { label: "te", form: "ajattelitte" },
          { label: "he", form: "ajattelivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en ajatellut" },
          { label: "sinä", form: "et ajatellut" },
          { label: "hän", form: "ei ajatellut" },
          { label: "me", form: "emme ajatelleet" },
          { label: "te", form: "ette ajatelleet" },
          { label: "he", form: "eivät ajatelleet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ajatellut" },
          { label: "sinä", form: "olet ajatellut" },
          { label: "hän", form: "on ajatellut" },
          { label: "me", form: "olemme ajatelleet" },
          { label: "te", form: "olette ajatelleet" },
          { label: "he", form: "ovat ajatelleet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole ajatellut" },
          { label: "hän", form: "ei ole ajatellut" },
          { label: "he", form: "eivät ole ajatelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ajattele!" },
          { label: "te", form: "ajatelkaa!" },
          { label: "kielto (sinä)", form: "älä ajattele" },
          { label: "kielto (te)", form: "älkää ajatelko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ajatus",
      en: "thought, idea",
      taso: "A2",
      esim: { fi: "Minulla on yksi ajatus.", en: "I have one idea." },
    },
    {
      fi: "ajattelija",
      en: "thinker",
      taso: "B2",
      esim: { fi: "Hän on syvällinen ajattelija.", en: "He is a profound thinker." },
    },
    {
      fi: "ajatella ääneen",
      en: "to think aloud",
      taso: "B1",
      esim: { fi: "Anteeksi, ajattelin vain ääneen.", en: "Sorry, I was just thinking aloud." },
    },
  ],
  synonyymit: [
    { fi: "pohtia", en: "to ponder, consider" },
    { fi: "miettiä", en: "to think over, mull" },
  ],
  esimerkit: {
    A2: { fi: "Mitä sinä ajattelet?", en: "What are you thinking?" },
    B1: { fi: "Ajattelin lähteä aikaisin.", en: "I thought I'd leave early." },
    B2: {
      fi: "Olen ajatellut asiaa pitkään enkä ole vieläkään varma.",
      en: "I've thought about the matter for a long time and I'm still not sure.",
    },
  },
  updatedAt: "2026-06-05",
};

export default ajatella;
