import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: verb type 4 (-ta), no gradation, present stem halua-.
// Present haluan, past halusin/halusi, past participle halunnut/halunneet.
const haluta: Word = {
  fi: "haluta",
  slug: "haluta",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A1",
  en: "to want",
  selitys:
    "Tahtoa tai toivoa jotakin. Tyyppi 4 (-ta), preesensvartalo halua-, partisiippi halunnut (nn). Kohteliaasti haluaisin = I would like.",
  kuva: { emoji: "🙏", alt: "haluta – toive tai halu" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ta); preesensvartalo halua-, partisiippi halunnut",
    muodot: [
      { sija: "preesens (minä)", muoto: "haluan", merkitys: "I want" },
      { sija: "imperfekti (minä)", muoto: "halusin", merkitys: "I wanted" },
      { sija: "kielto (minä)", muoto: "en halua", merkitys: "I don't want" },
    ],
    huom:
      "Kohde partitiivissa tai infinitiivinä: 'Haluan kahvia.' / 'Haluan nukkua.' Kohtelias konditionaali: 'Haluaisin…' = I'd like… Vrt. tahtoa (vahvempi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "haluan" },
          { label: "sinä", form: "haluat" },
          { label: "hän", form: "haluaa" },
          { label: "me", form: "haluamme" },
          { label: "te", form: "haluatte" },
          { label: "he", form: "haluavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en halua" },
          { label: "sinä", form: "et halua" },
          { label: "hän", form: "ei halua" },
          { label: "me", form: "emme halua" },
          { label: "te", form: "ette halua" },
          { label: "he", form: "eivät halua" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "halusin" },
          { label: "sinä", form: "halusit" },
          { label: "hän", form: "halusi" },
          { label: "me", form: "halusimme" },
          { label: "te", form: "halusitte" },
          { label: "he", form: "halusivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en halunnut" },
          { label: "sinä", form: "et halunnut" },
          { label: "hän", form: "ei halunnut" },
          { label: "me", form: "emme halunneet" },
          { label: "te", form: "ette halunneet" },
          { label: "he", form: "eivät halunneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen halunnut" },
          { label: "sinä", form: "olet halunnut" },
          { label: "hän", form: "on halunnut" },
          { label: "me", form: "olemme halunneet" },
          { label: "te", form: "olette halunneet" },
          { label: "he", form: "ovat halunneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole halunnut" },
          { label: "hän", form: "ei ole halunnut" },
          { label: "he", form: "eivät ole halunneet" },
        ],
      },
      {
        title: "Konditionaali (kohtelias)",
        rows: [
          { label: "minä", form: "haluaisin" },
          { label: "sinä", form: "haluaisit" },
          { label: "hän", form: "haluaisi" },
          { label: "me", form: "haluaisimme" },
          { label: "te", form: "haluaisitte" },
          { label: "he", form: "haluaisivat" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "halu",
      en: "desire, wish",
      taso: "B1",
      esim: { fi: "Minulla ei ole halua lähteä.", en: "I have no desire to leave." },
    },
    {
      fi: "haluttu",
      en: "wanted, desired",
      taso: "B2",
      esim: { fi: "Se on haluttu työpaikka.", en: "It's a sought-after job." },
    },
    {
      fi: "halukas",
      en: "willing, eager",
      taso: "B2",
      esim: { fi: "Hän oli halukas auttamaan.", en: "She was willing to help." },
    },
  ],
  synonyymit: [
    { fi: "tahtoa", en: "to want (stronger)" },
    { fi: "toivoa", en: "to wish, hope" },
  ],
  esimerkit: {
    A2: { fi: "Haluan kupin kahvia.", en: "I want a cup of coffee." },
    B1: { fi: "Haluaisin varata pöydän kahdelle.", en: "I'd like to book a table for two." },
    B2: {
      fi: "He eivät halunneet kertoa, mitä oli tapahtunut.",
      en: "They didn't want to tell what had happened.",
    },
  },
  updatedAt: "2026-06-05",
};

export default haluta;
