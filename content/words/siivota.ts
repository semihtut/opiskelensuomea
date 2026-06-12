import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 75/selvitä (verb type 4), no gradation.
// Present stem siivoa-, imperfect siivo-si-, past participle siivonnut.
const siivota: Word = {
  fi: "siivota",
  slug: "siivota",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to clean, tidy up",
  selitys:
    "Puhdistaa ja järjestää tila siistiksi. Tyyppi 4 (-ota), ei astevaihtelua.",
  kuva: { alt: "siivota – luuta siivoamiseen" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ota); ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "siivoan", merkitys: "I clean" },
      { sija: "imperfekti (minä)", muoto: "siivosin", merkitys: "I cleaned" },
      { sija: "kielto (minä)", muoto: "en siivoa", merkitys: "I don't clean" },
    ],
    huom:
      "Preesensvartalo siivoa-, imperfekti siivo-si-, partisiippi siivonnut. Konnegatiivi (kieltomuoto) on siivoa: en siivoa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "siivoan" },
          { label: "sinä", form: "siivoat" },
          { label: "hän", form: "siivoaa" },
          { label: "me", form: "siivoamme" },
          { label: "te", form: "siivoatte" },
          { label: "he", form: "siivoavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en siivoa" },
          { label: "sinä", form: "et siivoa" },
          { label: "hän", form: "ei siivoa" },
          { label: "me", form: "emme siivoa" },
          { label: "te", form: "ette siivoa" },
          { label: "he", form: "eivät siivoa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "siivosin" },
          { label: "sinä", form: "siivosit" },
          { label: "hän", form: "siivosi" },
          { label: "me", form: "siivosimme" },
          { label: "te", form: "siivositte" },
          { label: "he", form: "siivosivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en siivonnut" },
          { label: "sinä", form: "et siivonnut" },
          { label: "hän", form: "ei siivonnut" },
          { label: "me", form: "emme siivonneet" },
          { label: "te", form: "ette siivonneet" },
          { label: "he", form: "eivät siivonneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen siivonnut" },
          { label: "sinä", form: "olet siivonnut" },
          { label: "hän", form: "on siivonnut" },
          { label: "me", form: "olemme siivonneet" },
          { label: "te", form: "olette siivonneet" },
          { label: "he", form: "ovat siivonneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole siivonnut" },
          { label: "hän", form: "ei ole siivonnut" },
          { label: "he", form: "eivät ole siivonneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "siivoa!" },
          { label: "te", form: "siivotkaa!" },
          { label: "kielto (sinä)", form: "älä siivoa" },
          { label: "kielto (te)", form: "älkää siivotko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "siivous",
      en: "cleaning",
      taso: "A2",
      esim: { fi: "Lauantai on siivouspäivä.", en: "Saturday is cleaning day." },
    },
    {
      fi: "siivooja",
      en: "cleaner (person)",
      taso: "B1",
      esim: { fi: "Siivooja tyhjensi roskakorit.", en: "The cleaner emptied the trash bins." },
    },
    {
      fi: "siisti",
      en: "tidy, clean (adjective)",
      taso: "A2",
      esim: { fi: "Huone on nyt siisti.", en: "The room is tidy now." },
    },
  ],
  synonyymit: [
    { fi: "puhdistaa", en: "to clean (make clean)" },
    { fi: "järjestää", en: "to organize, tidy" },
  ],
  esimerkit: {
    A2: { fi: "Siivoan asunnon joka lauantai.", en: "I clean the apartment every Saturday." },
    B1: { fi: "Meidän pitää siivota ennen vieraiden tuloa.", en: "We need to clean before the guests arrive." },
    B2: {
      fi: "Kun olin siivonnut koko talon, olin täysin uupunut.",
      en: "After I had cleaned the whole house, I was completely exhausted.",
    },
  },
  updatedAt: "2026-06-04",
};

export default siivota;
