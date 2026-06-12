import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem kuvittele- ~ kuvitel-.
// Present minä kuvittelen, hän kuvittelee; imperfect minä kuvittelin; NUT kuvitellut.
const kuvitella: Word = {
  fi: "kuvitella",
  slug: "kuvitella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to imagine, picture",
  selitys:
    "Luoda mielessä kuva jostakin tai luulla virheellisesti: 'kuvitella tulevaisuutta'. Tyyppi 3 (-lla), astevaihtelu tt:t (kuvittelen ~ kuvitella). Johdettu verbistä kuvittaa. Vrt. kuvitelma (fantasy), kuva.",
  kuva: { alt: "kuvitella – luoda mielessä kuva jostakin" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla); astevaihtelu tt:t (kuvittele- ↔ kuvitel-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "kuvittelen", merkitys: "I imagine" },
      { sija: "imperfekti (minä)", muoto: "kuvittelin", merkitys: "I imagined" },
      { sija: "NUT-partisiippi", muoto: "kuvitellut", merkitys: "(have) imagined" },
    ],
    huom:
      "Vahva aste tt taipuvissa muodoissa (kuvittelen, kuvittelin, kuvittele!), heikko aste t perusmuodossa ja NUT-partisiipissa (kuvitella, kuvitellut, kuvitelkaa). 'Kuvittele, että…' = imagine that…",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kuvittelen" },
          { label: "sinä", form: "kuvittelet" },
          { label: "hän", form: "kuvittelee" },
          { label: "me", form: "kuvittelemme" },
          { label: "te", form: "kuvittelette" },
          { label: "he", form: "kuvittelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kuvittele" },
          { label: "hän", form: "ei kuvittele" },
          { label: "he", form: "eivät kuvittele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kuvittelin" },
          { label: "sinä", form: "kuvittelit" },
          { label: "hän", form: "kuvitteli" },
          { label: "me", form: "kuvittelimme" },
          { label: "te", form: "kuvittelitte" },
          { label: "he", form: "kuvittelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kuvitellut" },
          { label: "hän", form: "on kuvitellut" },
          { label: "he", form: "ovat kuvitelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kuvittele!" },
          { label: "te", form: "kuvitelkaa!" },
          { label: "kielto (sinä)", form: "älä kuvittele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuvitelma",
      en: "fantasy, figment of imagination",
      taso: "B2",
      esim: { fi: "Se oli pelkkä kuvitelma.", en: "It was just a figment of imagination." },
    },
    {
      fi: "mielikuvitus",
      en: "imagination",
      taso: "B1",
      esim: { fi: "Lapsella on vilkas mielikuvitus.", en: "The child has a vivid imagination." },
    },
    {
      fi: "kuviteltu",
      en: "imagined, imaginary",
      taso: "B2",
      esim: { fi: "Pelko oli täysin kuviteltu.", en: "The fear was entirely imaginary." },
    },
  ],
  synonyymit: [
    { fi: "kuvailla mielessä", en: "to picture in one's mind" },
    { fi: "haaveilla", en: "to daydream" },
  ],
  esimerkit: {
    A2: { fi: "Kuvittele kaunis ranta.", en: "Imagine a beautiful beach." },
    B1: { fi: "En voi kuvitella elämää ilman musiikkia.", en: "I can't imagine life without music." },
    B2: {
      fi: "Hän kuvitteli tilanteen paljon pahemmaksi kuin se todellisuudessa oli.",
      en: "She imagined the situation to be much worse than it really was.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kuvitella;
