import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, no gradation, stem pärjä-.
// Present minä pärjään, hän pärjää; imperfect minä pärjäsin; NUT pärjännyt.
const parjata: Word = {
  fi: "pärjätä",
  slug: "pärjätä",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to manage, cope, do well, get along",
  selitys:
    "Selvitä tilanteesta tai menestyä: 'pärjätä yksin', 'pärjätä kokeessa'. Tyyppi 4 (-tä), Kotus 73/salata, ei astevaihtelua. Rektio: inessiivi (pärjätä jossakin). Vrt. selvitä, menestyä, tulla toimeen.",
  kuva: { emoji: "👍", alt: "pärjätä – selvitä tilanteesta tai menestyä" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-tä), Kotus 73/salata; ei astevaihtelua (vartalo pärjä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "pärjään", merkitys: "I manage" },
      { sija: "imperfekti (minä)", muoto: "pärjäsin", merkitys: "I managed" },
      { sija: "NUT-partisiippi", muoto: "pärjännyt", merkitys: "(have) managed" },
    ],
    huom:
      "Tyyppi 73/salata: preesens pärjää- (pärjään, pärjää), imperfekti -si- (pärjäsin), NUT pärjännyt. Rektio: 'pärjätä jossakin' (inessiivi). Lainattu ruotsista. Vrt. selvitä, tulla toimeen.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pärjään" },
          { label: "sinä", form: "pärjäät" },
          { label: "hän", form: "pärjää" },
          { label: "me", form: "pärjäämme" },
          { label: "te", form: "pärjäätte" },
          { label: "he", form: "pärjäävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pärjää" },
          { label: "hän", form: "ei pärjää" },
          { label: "he", form: "eivät pärjää" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pärjäsin" },
          { label: "sinä", form: "pärjäsit" },
          { label: "hän", form: "pärjäsi" },
          { label: "me", form: "pärjäsimme" },
          { label: "te", form: "pärjäsitte" },
          { label: "he", form: "pärjäsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pärjännyt" },
          { label: "hän", form: "on pärjännyt" },
          { label: "he", form: "ovat pärjänneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pärjää!" },
          { label: "te", form: "pärjätkää!" },
          { label: "kielto (sinä)", form: "älä pärjää" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "selvitä",
      en: "to get by, survive",
      taso: "B1",
      esim: { fi: "Selvisin kokeesta hyvin.", en: "I got through the exam well." },
    },
    {
      fi: "tulla toimeen",
      en: "to get along, make ends meet",
      taso: "B2",
      esim: { fi: "Tulemme hyvin toimeen naapureiden kanssa.", en: "We get along well with the neighbours." },
    },
  ],
  synonyymit: [
    { fi: "selvitä", en: "to cope" },
  ],
  esimerkit: {
    A2: { fi: "Pärjään hyvin yksin.", en: "I manage well on my own." },
    B1: { fi: "Hän pärjäsi kokeessa erinomaisesti.", en: "She did excellently in the exam." },
    B2: {
      fi: "Uudessa maassa pärjää paremmin, kun osaa edes vähän kieltä.",
      en: "You manage better in a new country when you know at least a little of the language.",
    },
  },
  updatedAt: "2026-06-07",
};

export default parjata;
