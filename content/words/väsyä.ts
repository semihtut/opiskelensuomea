import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem väsy-.
// Present minä väsyn, hän väsyy; imperfect minä väsyin; NUT väsynyt.
const vasya: Word = {
  fi: "väsyä",
  slug: "väsyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to get tired, become fatigued",
  selitys:
    "Tulla väsyneeksi: 'väsyä pitkän päivän jälkeen'. Tyyppi 1 (-yä), Kotus 52/sanoa, ei astevaihtelua. Voi myös tarkoittaa kyllästymistä (väsyä johonkin, illatiivi). Vrt. väsynyt, levätä, jaksaa.",
  kuva: { alt: "väsyä – tulla väsyneeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; ei astevaihtelua (vartalo väsy-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "väsyn", merkitys: "I get tired" },
      { sija: "imperfekti (minä)", muoto: "väsyin", merkitys: "I got tired" },
      { sija: "NUT-partisiippi", muoto: "väsynyt", merkitys: "(have) gotten tired" },
    ],
    huom:
      "Tyyppi 52/sanoa: ei astevaihtelua. Intransitiivinen. 'Väsyä johonkin' (illat.) = to get fed up with. Partisiippi väsynyt toimii myös adjektiivina (= tired). Vrt. levätä, jaksaa, väsyttää.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "väsyn" },
          { label: "sinä", form: "väsyt" },
          { label: "hän", form: "väsyy" },
          { label: "me", form: "väsymme" },
          { label: "te", form: "väsytte" },
          { label: "he", form: "väsyvät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en väsy" },
          { label: "hän", form: "ei väsy" },
          { label: "he", form: "eivät väsy" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "väsyin" },
          { label: "sinä", form: "väsyit" },
          { label: "hän", form: "väsyi" },
          { label: "me", form: "väsyimme" },
          { label: "te", form: "väsyitte" },
          { label: "he", form: "väsyivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen väsynyt" },
          { label: "hän", form: "on väsynyt" },
          { label: "he", form: "ovat väsyneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "väsy!" },
          { label: "te", form: "väsykää!" },
          { label: "kielto (sinä)", form: "älä väsy" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "väsynyt",
      en: "tired",
      taso: "A2",
      esim: { fi: "Olen tosi väsynyt.", en: "I'm really tired." },
    },
    {
      fi: "väsyttää",
      en: "to make tired; (impersonal) to feel sleepy",
      taso: "B1",
      esim: { fi: "Minua väsyttää.", en: "I feel sleepy." },
    },
  ],
  synonyymit: [
    { fi: "uupua", en: "to become exhausted" },
  ],
  esimerkit: {
    A2: { fi: "Väsyn iltaisin.", en: "I get tired in the evenings." },
    B1: { fi: "Väsyin kävelystä.", en: "I got tired from walking." },
    B2: {
      fi: "Aloin väsyä jatkuvaan kiireeseen ja päätin pitää lomaa.",
      en: "I started to get tired of the constant rush and decided to take a holiday.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vasya;
