import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, k:∅ gradation, stem aiko- ~ aio-.
// Present minä aion, hän aikoo; imperfect minä aioin; NUT aikonut.
const aikoa: Word = {
  fi: "aikoa",
  slug: "aikoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to intend, plan, be going to",
  selitys:
    "Suunnitella tekevänsä jotakin, olla aikeissa: 'aion lähteä huomenna'. Tyyppi 1 (-oa), Kotus 52/sanoa, astevaihtelu k:∅ (aion). Käytetään 1. infinitiivin kanssa: 'aion tehdä'. Vrt. aikomus, aie.",
  kuva: { alt: "aikoa – suunnitella tekevänsä jotakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa), Kotus 52/sanoa; astevaihtelu k:∅ (aiko- ~ aio-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "aion", merkitys: "I intend" },
      { sija: "imperfekti (minä)", muoto: "aioin", merkitys: "I intended" },
      { sija: "NUT-partisiippi", muoto: "aikonut", merkitys: "(have) intended" },
    ],
    huom:
      "Astevaihtelu k:∅: vahva aiko- (aikoa, aikoo, aikonut), heikko aio- (aion, aioin). Käytetään 1. infinitiivin kanssa: 'aion matkustaa'. Ilmaisee vahvaa aikomusta. Vrt. aikomus = intention.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "aion" },
          { label: "sinä", form: "aiot" },
          { label: "hän", form: "aikoo" },
          { label: "me", form: "aiomme" },
          { label: "te", form: "aiotte" },
          { label: "he", form: "aikovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en aio" },
          { label: "hän", form: "ei aio" },
          { label: "he", form: "eivät aio" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "aioin" },
          { label: "sinä", form: "aioit" },
          { label: "hän", form: "aikoi" },
          { label: "me", form: "aioimme" },
          { label: "te", form: "aioitte" },
          { label: "he", form: "aikoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen aikonut" },
          { label: "hän", form: "on aikonut" },
          { label: "he", form: "ovat aikoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "(harvinainen)" },
          { label: "kielto (sinä)", form: "älä aio" },
          { label: "huom.", form: "imperatiivi käytännössä vain kieltomuodossa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aikomus",
      en: "intention, plan",
      taso: "B1",
      esim: { fi: "Minulla on hyvät aikomukset.", en: "I have good intentions." },
    },
    {
      fi: "aie",
      en: "intention, design",
      taso: "B2",
      esim: { fi: "Hänen aikeensa olivat epäselvät.", en: "His intentions were unclear." },
    },
  ],
  synonyymit: [
    { fi: "suunnitella", en: "to plan" },
    { fi: "olla aikeissa", en: "to be about to" },
  ],
  esimerkit: {
    A2: { fi: "Aion oppia suomea.", en: "I intend to learn Finnish." },
    B1: { fi: "Mitä aiot tehdä viikonloppuna?", en: "What are you going to do at the weekend?" },
    B2: {
      fi: "Olin aikonut soittaa sinulle, mutta päivä meni kiireessä.",
      en: "I had intended to call you, but the day went by in a rush.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aikoa;
