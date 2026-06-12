import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem edisty-.
// Present minä edistyn, hän edistyy; imperfect minä edistyin; NUT edistynyt. Intransitive.
const edistya: Word = {
  fi: "edistyä",
  slug: "edistyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to progress, advance, improve",
  selitys:
    "Mennä eteenpäin, kehittyä paremmaksi: 'edistyä suomen kielessä'. Tyyppi 1 (-yä), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen pari verbille edistää. Vrt. edistää, edistys, kehittyä, edetä.",
  kuva: { alt: "edistyä – mennä eteenpäin, kehittyä paremmaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; ei astevaihtelua (vartalo edisty-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "edistyn", merkitys: "I progress" },
      { sija: "imperfekti (minä)", muoto: "edistyin", merkitys: "I progressed" },
      { sija: "NUT-partisiippi", muoto: "edistynyt", merkitys: "(have) progressed" },
    ],
    huom:
      "Tyyppi 52/sanoa: ei astevaihtelua. Intransitiivinen: 'minä edistyn' (≠ transitiivinen edistää = to advance something). Rektio: 'edistyä jossakin' (iness.: edistyä työssä). Vrt. edistys, edistää, kehittyä.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "edistyn" },
          { label: "sinä", form: "edistyt" },
          { label: "hän", form: "edistyy" },
          { label: "me", form: "edistymme" },
          { label: "te", form: "edistytte" },
          { label: "he", form: "edistyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en edisty" },
          { label: "hän", form: "ei edisty" },
          { label: "he", form: "eivät edisty" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "edistyin" },
          { label: "sinä", form: "edistyit" },
          { label: "hän", form: "edistyi" },
          { label: "me", form: "edistyimme" },
          { label: "te", form: "edistyitte" },
          { label: "he", form: "edistyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen edistynyt" },
          { label: "hän", form: "on edistynyt" },
          { label: "he", form: "ovat edistyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "edisty!" },
          { label: "te", form: "edistykää!" },
          { label: "kielto (sinä)", form: "älä edisty" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "edistys",
      en: "progress",
      taso: "B1",
      esim: { fi: "Olen tehnyt edistystä.", en: "I have made progress." },
    },
    {
      fi: "edistää",
      en: "to advance, promote (something)",
      taso: "B2",
      esim: { fi: "Liikunta edistää terveyttä.", en: "Exercise promotes health." },
    },
  ],
  synonyymit: [
    { fi: "kehittyä", en: "to develop" },
    { fi: "edetä", en: "to advance" },
  ],
  esimerkit: {
    A2: { fi: "Edistyn suomessa hitaasti.", en: "I'm progressing slowly in Finnish." },
    B1: { fi: "Projekti edistyy hyvin.", en: "The project is progressing well." },
    B2: {
      fi: "Kun harjoittelee säännöllisesti, edistyy huomaamattaan yllättävän nopeasti.",
      en: "When you practice regularly, you progress surprisingly fast without noticing.",
    },
  },
  updatedAt: "2026-06-07",
};

export default edistya;
