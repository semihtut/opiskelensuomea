import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), no gradation
// (no gradating consonant), stem muista-. Present muistan, past muistin/muisti.
const muistaa: Word = {
  fi: "muistaa",
  slug: "muistaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to remember",
  selitys:
    "Pitää mielessä; palauttaa mieleen. Tyyppi 1, vartalo muista-, ei astevaihtelua. Tämä on koko taivutustyypin mallisana. Vastakohta unohtaa.",
  kuva: { alt: "muistaa – muistamisen ele" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); vartalo muista-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "muistan", merkitys: "I remember" },
      { sija: "imperfekti (minä)", muoto: "muistin", merkitys: "I remembered" },
      { sija: "kielto (minä)", muoto: "en muista", merkitys: "I don't remember" },
    ],
    huom:
      "Kohde partitiivissa tai että-lauseena: 'Muistan sinut.' / 'Muistan, että…'. Vastakohta unohtaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "muistan" },
          { label: "sinä", form: "muistat" },
          { label: "hän", form: "muistaa" },
          { label: "me", form: "muistamme" },
          { label: "te", form: "muistatte" },
          { label: "he", form: "muistavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en muista" },
          { label: "sinä", form: "et muista" },
          { label: "hän", form: "ei muista" },
          { label: "me", form: "emme muista" },
          { label: "te", form: "ette muista" },
          { label: "he", form: "eivät muista" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "muistin" },
          { label: "sinä", form: "muistit" },
          { label: "hän", form: "muisti" },
          { label: "me", form: "muistimme" },
          { label: "te", form: "muistitte" },
          { label: "he", form: "muistivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en muistanut" },
          { label: "sinä", form: "et muistanut" },
          { label: "hän", form: "ei muistanut" },
          { label: "me", form: "emme muistaneet" },
          { label: "te", form: "ette muistaneet" },
          { label: "he", form: "eivät muistaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen muistanut" },
          { label: "sinä", form: "olet muistanut" },
          { label: "hän", form: "on muistanut" },
          { label: "me", form: "olemme muistaneet" },
          { label: "te", form: "olette muistaneet" },
          { label: "he", form: "ovat muistaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole muistanut" },
          { label: "hän", form: "ei ole muistanut" },
          { label: "he", form: "eivät ole muistaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "muista!" },
          { label: "te", form: "muistakaa!" },
          { label: "kielto (sinä)", form: "älä muista" },
          { label: "kielto (te)", form: "älkää muistako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "muisti",
      en: "memory (faculty)",
      taso: "B1",
      esim: { fi: "Hänellä on hyvä muisti.", en: "She has a good memory." },
    },
    {
      fi: "muisto",
      en: "memory, recollection",
      taso: "B1",
      esim: { fi: "Matkasta jäi hyviä muistoja.", en: "The trip left good memories." },
    },
    {
      fi: "muistuttaa",
      en: "to remind; to resemble",
      taso: "B1",
      esim: { fi: "Muistuta minua huomenna.", en: "Remind me tomorrow." },
    },
  ],
  synonyymit: [
    { fi: "painaa mieleen", en: "to commit to memory" },
    { fi: "palauttaa mieleen", en: "to recall" },
  ],
  esimerkit: {
    A2: { fi: "Muistatko hänen nimensä?", en: "Do you remember his name?" },
    B1: { fi: "En muistanut sulkea ovea.", en: "I didn't remember to close the door." },
    B2: {
      fi: "Muistan yhä päivän, jolloin tapasimme ensimmäisen kerran.",
      en: "I still remember the day we first met.",
    },
  },
  updatedAt: "2026-06-05",
};

export default muistaa;
