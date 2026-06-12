import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 52/sanoa (verb type 1), no gradation,
// stem katso-. Present katson, past katsoin/katsoi, past participle katsonut.
const katsoa: Word = {
  fi: "katsoa",
  slug: "katsoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to look (at), watch",
  selitys:
    "Suunnata katse johonkin tahallaan; seurata esim. elokuvaa. Tyyppi 1, vartalo katso-, ei astevaihtelua. Vrt. nähdä (= see, aisti).",
  kuva: { alt: "katsoa – katsotaan jotakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa); vartalo katso-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "katson", merkitys: "I look/watch" },
      { sija: "imperfekti (minä)", muoto: "katsoin", merkitys: "I looked/watched" },
      { sija: "kielto (minä)", muoto: "en katso", merkitys: "I don't look/watch" },
    ],
    huom:
      "Kohde usein partitiivissa: 'Katson televisiota.' 'Katsoa jotakin' (watch) vs. 'nähdä jotakin' (see). Puhekielessä imperatiivi: 'kato!'",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "katson" },
          { label: "sinä", form: "katsot" },
          { label: "hän", form: "katsoo" },
          { label: "me", form: "katsomme" },
          { label: "te", form: "katsotte" },
          { label: "he", form: "katsovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en katso" },
          { label: "sinä", form: "et katso" },
          { label: "hän", form: "ei katso" },
          { label: "me", form: "emme katso" },
          { label: "te", form: "ette katso" },
          { label: "he", form: "eivät katso" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "katsoin" },
          { label: "sinä", form: "katsoit" },
          { label: "hän", form: "katsoi" },
          { label: "me", form: "katsoimme" },
          { label: "te", form: "katsoitte" },
          { label: "he", form: "katsoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en katsonut" },
          { label: "sinä", form: "et katsonut" },
          { label: "hän", form: "ei katsonut" },
          { label: "me", form: "emme katsoneet" },
          { label: "te", form: "ette katsoneet" },
          { label: "he", form: "eivät katsoneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen katsonut" },
          { label: "sinä", form: "olet katsonut" },
          { label: "hän", form: "on katsonut" },
          { label: "me", form: "olemme katsoneet" },
          { label: "te", form: "olette katsoneet" },
          { label: "he", form: "ovat katsoneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole katsonut" },
          { label: "hän", form: "ei ole katsonut" },
          { label: "he", form: "eivät ole katsoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "katso!" },
          { label: "te", form: "katsokaa!" },
          { label: "kielto (sinä)", form: "älä katso" },
          { label: "kielto (te)", form: "älkää katsoko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "katse",
      en: "gaze, look",
      taso: "B1",
      esim: { fi: "Hän loi minuun katseen.", en: "She cast a look at me." },
    },
    {
      fi: "katsoja",
      en: "viewer, spectator",
      taso: "B1",
      esim: { fi: "Ottelulla oli tuhansia katsojia.", en: "The match had thousands of spectators." },
    },
    {
      fi: "katsella",
      en: "to watch/look around (leisurely)",
      taso: "B1",
      esim: { fi: "Katselin kauppoja keskustassa.", en: "I browsed the shops downtown." },
    },
  ],
  synonyymit: [
    { fi: "katsella", en: "to watch (leisurely)" },
    { fi: "tähystää", en: "to peer, scan" },
  ],
  esimerkit: {
    A2: { fi: "Katson televisiota illalla.", en: "I watch TV in the evening." },
    B1: { fi: "Katsoimme elokuvan eilen.", en: "We watched a movie yesterday." },
    B2: {
      fi: "Hän katsoi ulos ikkunasta miettien tulevaa.",
      en: "She looked out the window, thinking about the future.",
    },
  },
  updatedAt: "2026-06-05",
};

export default katsoa;
