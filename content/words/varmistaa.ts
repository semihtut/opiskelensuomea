import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st stays), stem varmista-.
// Present minä varmistan, hän varmistaa; imperfect varmistin; NUT varmistanut.
const varmistaa: Word = {
  fi: "varmistaa",
  slug: "varmistaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to ensure, make sure; to confirm; to secure",
  selitys:
    "Tehdä jokin varmaksi tai tarkistaa, että asia on kunnossa: 'varmistaa, että ovi on lukossa'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Johdettu adjektiivista varma. Vrt. varma, varmistus, tarkistaa.",
  kuva: { alt: "varmistaa – tehdä jokin varmaksi tai tarkistaa että asia on kunnossa" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua (st-yhtymä säilyy)",
    muodot: [
      { sija: "preesens (minä)", muoto: "varmistan", merkitys: "I make sure" },
      { sija: "imperfekti (minä)", muoto: "varmistin", merkitys: "I made sure" },
      { sija: "NUT-partisiippi", muoto: "varmistanut", merkitys: "(have) ensured" },
    ],
    huom:
      "Ei astevaihtelua: st-yhtymä säilyy kaikissa muodoissa (varmistan, varmistin, varmistanut). Rektio: 'varmistaa, että…' = to make sure that…. Sanasta varma. Vrt. varmistus, tarkistaa = to check.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "varmistan" },
          { label: "sinä", form: "varmistat" },
          { label: "hän", form: "varmistaa" },
          { label: "me", form: "varmistamme" },
          { label: "te", form: "varmistatte" },
          { label: "he", form: "varmistavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en varmista" },
          { label: "hän", form: "ei varmista" },
          { label: "he", form: "eivät varmista" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "varmistin" },
          { label: "sinä", form: "varmistit" },
          { label: "hän", form: "varmisti" },
          { label: "me", form: "varmistimme" },
          { label: "te", form: "varmistitte" },
          { label: "he", form: "varmistivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen varmistanut" },
          { label: "hän", form: "on varmistanut" },
          { label: "he", form: "ovat varmistaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "varmista!" },
          { label: "te", form: "varmistakaa!" },
          { label: "kielto (sinä)", form: "älä varmista" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "varmistus",
      en: "confirmation; backup",
      taso: "B2",
      esim: { fi: "Otin tiedostoista varmistuksen.", en: "I made a backup of the files." },
    },
    {
      fi: "varma",
      en: "sure, certain",
      taso: "A2",
      esim: { fi: "Oletko varma?", en: "Are you sure?" },
    },
  ],
  synonyymit: [
    { fi: "tarkistaa", en: "to check" },
    { fi: "vahvistaa", en: "to confirm" },
  ],
  esimerkit: {
    A2: { fi: "Varmista, että ovi on lukossa.", en: "Make sure the door is locked." },
    B1: { fi: "Haluan varmistaa varauksen.", en: "I want to confirm the reservation." },
    B2: {
      fi: "Varmistin etukäteen, että kaikki tarvittavat asiakirjat olivat mukana.",
      en: "I made sure in advance that all the necessary documents were included.",
    },
  },
  updatedAt: "2026-06-07",
};

export default varmistaa;
