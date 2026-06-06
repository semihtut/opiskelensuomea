import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem pan-.
// Present panen, past panin, past participle pannut.
const panna: Word = {
  fi: "panna",
  slug: "panna",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to put, place, set",
  selitys:
    "Asettaa jotain johonkin: 'panen kirjan pöydälle'. Tyyppi 3 (-nna). Yleiskielessä usein laittaa tai asettaa kohteliaampia. Kohde tulosijassa (mihin).",
  kuva: { emoji: "📥", alt: "panna – asettaa jotain johonkin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-nna); ei astevaihtelua; vartalo pan-",
    muodot: [
      { sija: "preesens (minä)", muoto: "panen", merkitys: "I put" },
      { sija: "imperfekti (minä)", muoto: "panin", merkitys: "I put (past)" },
      { sija: "NUT-partisiippi", muoto: "pannut", merkitys: "(have) put" },
    ],
    huom:
      "Kohde tulosijassa: 'panen maidon jääkaappiin' (illatiivi). Arkikielessä usein 'laittaa' on neutraalimpi vaihtoehto. Vrt. pano = deposit, panostaa = to invest in.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "panen" },
          { label: "sinä", form: "panet" },
          { label: "hän", form: "panee" },
          { label: "me", form: "panemme" },
          { label: "te", form: "panette" },
          { label: "he", form: "panevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pane" },
          { label: "hän", form: "ei pane" },
          { label: "he", form: "eivät pane" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "panin" },
          { label: "sinä", form: "panit" },
          { label: "hän", form: "pani" },
          { label: "me", form: "panimme" },
          { label: "te", form: "panitte" },
          { label: "he", form: "panivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pannut" },
          { label: "hän", form: "on pannut" },
          { label: "he", form: "ovat panneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pane!" },
          { label: "te", form: "pankaa!" },
          { label: "kielto (sinä)", form: "älä pane" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "panostaa",
      en: "to invest in, put effort into",
      taso: "B2",
      esim: { fi: "Panostamme laatuun.", en: "We invest in quality." },
    },
    {
      fi: "pano",
      en: "input; deposit; stake",
      taso: "B2",
      esim: { fi: "Hänen työpanoksensa oli suuri.", en: "His work contribution was great." },
    },
    {
      fi: "panna merkille",
      en: "to take note of",
      taso: "B1",
      esim: { fi: "Panin merkille hänen ystävällisyytensä.", en: "I took note of his kindness." },
    },
  ],
  synonyymit: [
    { fi: "laittaa", en: "to put (neutral)" },
    { fi: "asettaa", en: "to place, set" },
  ],
  esimerkit: {
    A2: { fi: "Panen avaimet taskuun.", en: "I put the keys in my pocket." },
    B1: { fi: "Panin ruoan jääkaappiin.", en: "I put the food in the fridge." },
    B2: {
      fi: "Hän pani kaiken peliin saavuttaakseen tavoitteensa.",
      en: "She put everything on the line to reach her goal.",
    },
  },
  updatedAt: "2026-06-06",
};

export default panna;
