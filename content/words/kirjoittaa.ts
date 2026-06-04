import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 53/muistaa (verb type 1), tt:t gradation,
// stem kirjoitta-. Present kirjoitan (tt:t), past kirjoitin/kirjoitti, participle kirjoittanut.
const kirjoittaa: Word = {
  fi: "kirjoittaa",
  slug: "kirjoittaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to write",
  selitys:
    "Tuottaa tekstiä kirjaimin. Tyyppi 1, astevaihtelu tt:t (kirjoitta- → kirjoita-). Juuri sanasta kirja.",
  kuva: { emoji: "✍️", alt: "kirjoittaa – kynällä kirjoittaminen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa); astevaihtelu tt:t (kirjoitta- → kirjoita-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kirjoitan", merkitys: "I write" },
      { sija: "imperfekti (minä)", muoto: "kirjoitin", merkitys: "I wrote" },
      { sija: "kielto (minä)", muoto: "en kirjoita", merkitys: "I don't write" },
    ],
    huom:
      "Astevaihtelu tt:t heikossa asteessa: kirjoitan, kirjoitat (mutta kirjoittaa, kirjoittavat). Imperatiivi kirjoita! on heikossa asteessa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kirjoitan" },
          { label: "sinä", form: "kirjoitat" },
          { label: "hän", form: "kirjoittaa" },
          { label: "me", form: "kirjoitamme" },
          { label: "te", form: "kirjoitatte" },
          { label: "he", form: "kirjoittavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kirjoita" },
          { label: "sinä", form: "et kirjoita" },
          { label: "hän", form: "ei kirjoita" },
          { label: "me", form: "emme kirjoita" },
          { label: "te", form: "ette kirjoita" },
          { label: "he", form: "eivät kirjoita" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kirjoitin" },
          { label: "sinä", form: "kirjoitit" },
          { label: "hän", form: "kirjoitti" },
          { label: "me", form: "kirjoitimme" },
          { label: "te", form: "kirjoititte" },
          { label: "he", form: "kirjoittivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en kirjoittanut" },
          { label: "sinä", form: "et kirjoittanut" },
          { label: "hän", form: "ei kirjoittanut" },
          { label: "me", form: "emme kirjoittaneet" },
          { label: "te", form: "ette kirjoittaneet" },
          { label: "he", form: "eivät kirjoittaneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kirjoittanut" },
          { label: "sinä", form: "olet kirjoittanut" },
          { label: "hän", form: "on kirjoittanut" },
          { label: "me", form: "olemme kirjoittaneet" },
          { label: "te", form: "olette kirjoittaneet" },
          { label: "he", form: "ovat kirjoittaneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole kirjoittanut" },
          { label: "hän", form: "ei ole kirjoittanut" },
          { label: "he", form: "eivät ole kirjoittaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kirjoita!" },
          { label: "te", form: "kirjoittakaa!" },
          { label: "kielto (sinä)", form: "älä kirjoita" },
          { label: "kielto (te)", form: "älkää kirjoittako" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kirjoitus",
      en: "a writing, text, piece",
      taso: "B1",
      esim: { fi: "Luin hänen kirjoituksensa lehdestä.", en: "I read his piece in the paper." },
    },
    {
      fi: "kirjailija",
      en: "author, writer",
      taso: "B1",
      esim: { fi: "Hän on tunnettu kirjailija.", en: "She is a well-known author." },
    },
    {
      fi: "allekirjoittaa",
      en: "to sign (one's name)",
      taso: "B1",
      esim: { fi: "Allekirjoita tähän, kiitos.", en: "Sign here, please." },
    },
  ],
  synonyymit: [
    { fi: "kirjata", en: "to record, note down" },
    { fi: "laatia", en: "to draw up, compose" },
  ],
  esimerkit: {
    A2: { fi: "Kirjoitan kirjeen ystävälleni.", en: "I'm writing a letter to my friend." },
    B1: { fi: "Kirjoitin koko esseen yhdessä yössä.", en: "I wrote the whole essay in one night." },
    B2: {
      fi: "Hän on kirjoittanut useita kirjoja lapsille.",
      en: "She has written several books for children.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kirjoittaa;
