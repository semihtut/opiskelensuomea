import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem uudistu-.
// Present minä uudistun, hän uudistuu; imperfect minä uudistuin; NUT uudistunut. Intransitive.
const uudistua: Word = {
  fi: "uudistua",
  slug: "uudistua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to be renewed, get modernized, reform",
  selitys:
    "Muuttua uudeksi tai uudenaikaiseksi: 'ala uudistuu jatkuvasti'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen (transit. uudistaa). Johdettu sanasta uusi. Vrt. uudistus, uudistaa, uusi.",
  kuva: { emoji: "🔄", alt: "uudistua – muuttua uudeksi tai uudenaikaiseksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo uudistu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "uudistun", merkitys: "I am renewed" },
      { sija: "imperfekti (minä)", muoto: "uudistuin", merkitys: "I was renewed" },
      { sija: "NUT-partisiippi", muoto: "uudistunut", merkitys: "(have) been renewed" },
    ],
    huom:
      "Ei astevaihtelua (st-yhtymä säilyy). Intransitiivinen; transitiivinen pari on uudistaa. Johdettu sanasta uusi. 'Uudistua jatkuvasti' = to keep renewing itself. Vrt. uudistus = reform.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "uudistun" },
          { label: "sinä", form: "uudistut" },
          { label: "hän / se", form: "uudistuu" },
          { label: "me", form: "uudistumme" },
          { label: "te", form: "uudistutte" },
          { label: "he / ne", form: "uudistuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en uudistu" },
          { label: "se", form: "ei uudistu" },
          { label: "ne", form: "eivät uudistu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "uudistuin" },
          { label: "hän / se", form: "uudistui" },
          { label: "ne", form: "uudistuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen uudistunut" },
          { label: "se", form: "on uudistunut" },
          { label: "ne", form: "ovat uudistuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "uudistaa",
      en: "to reform, renew (sth)",
      taso: "B2",
      esim: { fi: "Hallitus uudistaa lakia.", en: "The government is reforming the law." },
    },
    {
      fi: "uudistus",
      en: "reform, renewal",
      taso: "B2",
      esim: { fi: "Uudistus astuu voimaan ensi vuonna.", en: "The reform takes effect next year." },
    },
    {
      fi: "uusi",
      en: "new",
      taso: "A1",
      esim: { fi: "Sain uuden puhelimen.", en: "I got a new phone." },
    },
  ],
  synonyymit: [
    { fi: "nykyaikaistua", en: "to become modern" },
    { fi: "muuttua", en: "to change" },
  ],
  esimerkit: {
    A2: { fi: "Sopimus uudistuu automaattisesti.", en: "The contract renews automatically." },
    B1: { fi: "Kauppakeskus uudistui täysin.", en: "The shopping centre was completely renewed." },
    B2: {
      fi: "Pärjätäkseen kilpailussa yrityksen on uudistuttava jatkuvasti.",
      en: "To cope in the competition, the company must keep renewing itself.",
    },
  },
  updatedAt: "2026-06-07",
};

export default uudistua;
