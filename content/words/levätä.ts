import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, p:v gradation, stem lepää- ~ levä-.
// Present minä lepään, hän lepää; imperfect minä lepäsin; NUT levännyt.
const levata: Word = {
  fi: "levätä",
  slug: "levätä",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to rest, take a break",
  selitys:
    "Olla rauhassa ja palauttaa voimia: 'levätä hetki'. Tyyppi 4 (-ätä), Kotus 73/salata, astevaihtelu p:v (lepään vahva, levätä/levännyt heikko). Vrt. lepo, levollinen, väsyä.",
  kuva: { emoji: "🛌", alt: "levätä – olla rauhassa ja palauttaa voimia" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ätä), Kotus 73/salata; astevaihtelu p:v (lepää- ~ levä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "lepään", merkitys: "I rest" },
      { sija: "imperfekti (minä)", muoto: "lepäsin", merkitys: "I rested" },
      { sija: "NUT-partisiippi", muoto: "levännyt", merkitys: "(have) rested" },
    ],
    huom:
      "Astevaihtelu p:v: vahva lepää- (lepään, lepäsin), heikko infinitiivissä ja NUT-muodossa (levätä, levännyt). Vrt. lepo = rest, levollinen = peaceful, väsyä = to get tired.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lepään" },
          { label: "sinä", form: "lepäät" },
          { label: "hän", form: "lepää" },
          { label: "me", form: "lepäämme" },
          { label: "te", form: "lepäätte" },
          { label: "he", form: "lepäävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en lepää" },
          { label: "hän", form: "ei lepää" },
          { label: "he", form: "eivät lepää" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "lepäsin" },
          { label: "sinä", form: "lepäsit" },
          { label: "hän", form: "lepäsi" },
          { label: "me", form: "lepäsimme" },
          { label: "te", form: "lepäsitte" },
          { label: "he", form: "lepäsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen levännyt" },
          { label: "hän", form: "on levännyt" },
          { label: "he", form: "ovat levänneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "lepää!" },
          { label: "te", form: "levätkää!" },
          { label: "kielto (sinä)", form: "älä lepää" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lepo",
      en: "rest",
      taso: "B1",
      esim: { fi: "Tarvitsen lepoa.", en: "I need rest." },
    },
    {
      fi: "levollinen",
      en: "peaceful, restful",
      taso: "B2",
      esim: { fi: "Yö oli levollinen.", en: "The night was peaceful." },
    },
  ],
  synonyymit: [
    { fi: "rentoutua", en: "to relax" },
    { fi: "pitää taukoa", en: "to take a break" },
  ],
  esimerkit: {
    A2: { fi: "Lepään hetken.", en: "I'll rest for a moment." },
    B1: { fi: "Lepäsimme matkan jälkeen koko päivän.", en: "We rested all day after the trip." },
    B2: {
      fi: "Keho ja mieli tarvitsevat lepoa palautuakseen rasituksesta.",
      en: "The body and mind need rest to recover from strain.",
    },
  },
  updatedAt: "2026-06-07",
};

export default levata;
