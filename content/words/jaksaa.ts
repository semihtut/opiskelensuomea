import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa, no gradation, stem jaksa-.
// Present minä jaksan, hän jaksaa; imperfect minä jaksoin; NUT jaksanut.
const jaksaa: Word = {
  fi: "jaksaa",
  slug: "jaksaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to have the energy/strength; to manage; to be bothered",
  selitys:
    "Olla voimia tai jaksamista tehdä jotakin: 'en jaksa enää'. Tyyppi 1 (-aa), Kotus 56/kaivaa, ei astevaihtelua; imperfektissä vartalovokaali a→o (jaksoin). Vrt. jaksaminen, voima, väsyä.",
  kuva: { emoji: "🔋", alt: "jaksaa – olla voimia tehdä jotakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 56/kaivaa; ei astevaihtelua; imperfektin a→o (jaksoin)",
    muodot: [
      { sija: "preesens (minä)", muoto: "jaksan", merkitys: "I have the energy" },
      { sija: "imperfekti (minä)", muoto: "jaksoin", merkitys: "I had the energy" },
      { sija: "NUT-partisiippi", muoto: "jaksanut", merkitys: "(have) managed" },
    ],
    huom:
      "Ei astevaihtelua (ks säilyy), mutta imperfektissä vartalon a muuttuu o:ksi (jaksoin, hän jaksoi), kuten kaivaa→kaivoin. 'En jaksa' = I can't be bothered / I'm too tired. Vrt. jaksaminen = coping, väsyä = to tire.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "jaksan" },
          { label: "sinä", form: "jaksat" },
          { label: "hän", form: "jaksaa" },
          { label: "me", form: "jaksamme" },
          { label: "te", form: "jaksatte" },
          { label: "he", form: "jaksavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en jaksa" },
          { label: "hän", form: "ei jaksa" },
          { label: "he", form: "eivät jaksa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "jaksoin" },
          { label: "sinä", form: "jaksoit" },
          { label: "hän", form: "jaksoi" },
          { label: "me", form: "jaksoimme" },
          { label: "te", form: "jaksoitte" },
          { label: "he", form: "jaksoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen jaksanut" },
          { label: "hän", form: "on jaksanut" },
          { label: "he", form: "ovat jaksaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "jaksa!" },
          { label: "te", form: "jaksakaa!" },
          { label: "kielto (sinä)", form: "älä jaksa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jaksaminen",
      en: "coping, having energy",
      taso: "B2",
      esim: { fi: "Työssä jaksaminen on tärkeää.", en: "Coping at work is important." },
    },
    {
      fi: "jaksava",
      en: "energetic, able to cope",
      taso: "B2",
      esim: { fi: "Hän on yllättävän jaksava.", en: "She is surprisingly energetic." },
    },
  ],
  synonyymit: [
    { fi: "pärjätä", en: "to manage, cope" },
    { fi: "kestää", en: "to endure" },
  ],
  esimerkit: {
    A2: { fi: "En jaksa enää.", en: "I can't go on anymore." },
    B1: { fi: "Jaksatko auttaa hetken?", en: "Do you have the energy to help for a moment?" },
    B2: {
      fi: "Hyvä uni auttaa jaksamaan kiireisenkin viikon läpi.",
      en: "Good sleep helps one get through even a busy week.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jaksaa;
