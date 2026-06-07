import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem peruutta- ~ peruuta-.
// Present minä peruutan, hän peruuttaa; imperfect peruutin; NUT peruuttanut.
const peruuttaa: Word = {
  fi: "peruuttaa",
  slug: "peruuttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to cancel; to reverse, back up",
  selitys:
    "1) Perua sovittu asia: 'peruuttaa aika', 'peruuttaa varaus'. 2) Ajaa taaksepäin: 'peruuttaa autolla'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (peruutan). Sanasta perua. Vrt. perua, peruutus, varata.",
  kuva: { emoji: "↩️", alt: "peruuttaa – perua sovittu asia tai ajaa taaksepäin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (peruuta- ~ peruutta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "peruutan", merkitys: "I cancel" },
      { sija: "imperfekti (minä)", muoto: "peruutin", merkitys: "I cancelled" },
      { sija: "NUT-partisiippi", muoto: "peruuttanut", merkitys: "(have) cancelled" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva peruutta- (peruuttaa, peruuttanut), heikko peruuta- (peruutan, peruutin). Transitiivinen: 'peruuttaa varaus'. Intransitiivisesti autosta: 'auto peruuttaa'. Vrt. perua, peruutus = cancellation.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "peruutan" },
          { label: "sinä", form: "peruutat" },
          { label: "hän", form: "peruuttaa" },
          { label: "me", form: "peruutamme" },
          { label: "te", form: "peruutatte" },
          { label: "he", form: "peruuttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en peruuta" },
          { label: "hän", form: "ei peruuta" },
          { label: "he", form: "eivät peruuta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "peruutin" },
          { label: "sinä", form: "peruutit" },
          { label: "hän", form: "peruutti" },
          { label: "me", form: "peruutimme" },
          { label: "te", form: "peruutitte" },
          { label: "he", form: "peruuttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen peruuttanut" },
          { label: "hän", form: "on peruuttanut" },
          { label: "he", form: "ovat peruuttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "peruuta!" },
          { label: "te", form: "peruuttakaa!" },
          { label: "kielto (sinä)", form: "älä peruuta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "peruutus",
      en: "cancellation",
      taso: "B1",
      esim: { fi: "Peruutus on maksuton.", en: "Cancellation is free of charge." },
    },
    {
      fi: "perua",
      en: "to call off, take back",
      taso: "B1",
      esim: { fi: "Jouduin peruamaan tapaamisen.", en: "I had to call off the meeting." },
    },
  ],
  synonyymit: [
    { fi: "perua", en: "to cancel, take back" },
  ],
  esimerkit: {
    A2: { fi: "Minun täytyy peruuttaa aika.", en: "I have to cancel the appointment." },
    B1: { fi: "He peruuttivat matkan sään takia.", en: "They cancelled the trip because of the weather." },
    B2: {
      fi: "Varauksen voi peruuttaa veloituksetta vuorokautta ennen saapumista.",
      en: "The reservation can be cancelled free of charge a day before arrival.",
    },
  },
  updatedAt: "2026-06-07",
};

export default peruuttaa;
