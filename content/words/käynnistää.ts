import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation, stem käynnistä-.
// Present minä käynnistän, hän käynnistää; imperfect minä käynnistin; NUT käynnistänyt.
const kaynnistaa: Word = {
  fi: "käynnistää",
  slug: "käynnistää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to start, start up, launch",
  selitys:
    "Saada kone, ohjelma tai hanke käyntiin: 'käynnistää tietokone'. Tyyppi 1 (-ää), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Johdettu sanasta käynti/käydä. Vrt. käynnistyä, käydä, aloittaa.",
  kuva: { alt: "käynnistää – saada kone tai hanke käyntiin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; ei astevaihtelua; vartalo käynnistä-",
    muodot: [
      { sija: "preesens (minä)", muoto: "käynnistän", merkitys: "I start" },
      { sija: "imperfekti (minä)", muoto: "käynnistin", merkitys: "I started" },
      { sija: "NUT-partisiippi", muoto: "käynnistänyt", merkitys: "(have) started" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (käynnistän, käynnistin, käynnistänyt). Transitiivinen; intransitiivinen pari käynnistyä. 'Käynnistää uudelleen' = to restart. Vrt. käydä = to run/go, aloittaa = to begin.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "käynnistän" },
          { label: "sinä", form: "käynnistät" },
          { label: "hän", form: "käynnistää" },
          { label: "me", form: "käynnistämme" },
          { label: "te", form: "käynnistätte" },
          { label: "he", form: "käynnistävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en käynnistä" },
          { label: "hän", form: "ei käynnistä" },
          { label: "he", form: "eivät käynnistä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "käynnistin" },
          { label: "sinä", form: "käynnistit" },
          { label: "hän", form: "käynnisti" },
          { label: "me", form: "käynnistimme" },
          { label: "te", form: "käynnistitte" },
          { label: "he", form: "käynnistivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen käynnistänyt" },
          { label: "hän", form: "on käynnistänyt" },
          { label: "he", form: "ovat käynnistäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "käynnistä!" },
          { label: "te", form: "käynnistäkää!" },
          { label: "kielto (sinä)", form: "älä käynnistä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käynnistyä",
      en: "to start (intransitive)",
      taso: "B2",
      esim: { fi: "Kone käynnistyi hitaasti.", en: "The machine started slowly." },
    },
    {
      fi: "käynnistys",
      en: "startup, launch",
      taso: "B2",
      esim: { fi: "Käynnistys vie hetken.", en: "The startup takes a moment." },
    },
  ],
  synonyymit: [
    { fi: "aloittaa", en: "to begin" },
    { fi: "panna käyntiin", en: "to set going" },
  ],
  esimerkit: {
    A2: { fi: "Käynnistä tietokone.", en: "Start the computer." },
    B1: { fi: "Yritys käynnisti uuden hankkeen.", en: "The company launched a new project." },
    B2: {
      fi: "Jos ohjelma jumittuu, käynnistä se uudelleen.",
      en: "If the program freezes, restart it.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kaynnistaa;
