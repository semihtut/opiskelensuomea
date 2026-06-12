import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem väittä- ~ väitä-.
// Present minä väitän, hän väittää; imperfect minä väitin; NUT väittänyt.
const vaittaa: Word = {
  fi: "väittää",
  slug: "väittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to claim, assert, argue",
  selitys:
    "Esittää jotakin todeksi, vaikka asia ei olisi varma: 'hän väittää olevansa oikeassa'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (väitän). Usein että-lauseen kanssa. Vrt. väite, väittely.",
  kuva: { alt: "väittää – esittää jotakin todeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (väitä- ~ väittä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "väitän", merkitys: "I claim" },
      { sija: "imperfekti (minä)", muoto: "väitin", merkitys: "I claimed" },
      { sija: "NUT-partisiippi", muoto: "väittänyt", merkitys: "(have) claimed" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva vartalo väittä- (väittää, väittänyt), heikko väitä- (väitän, väitin). 'Väittää, että…' = to claim that…; 'väittää vastaan' = to argue back, contradict. Vrt. väite = claim.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "väitän" },
          { label: "sinä", form: "väität" },
          { label: "hän", form: "väittää" },
          { label: "me", form: "väitämme" },
          { label: "te", form: "väitätte" },
          { label: "he", form: "väittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en väitä" },
          { label: "hän", form: "ei väitä" },
          { label: "he", form: "eivät väitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "väitin" },
          { label: "sinä", form: "väitit" },
          { label: "hän", form: "väitti" },
          { label: "me", form: "väitimme" },
          { label: "te", form: "väititte" },
          { label: "he", form: "väittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen väittänyt" },
          { label: "hän", form: "on väittänyt" },
          { label: "he", form: "ovat väittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "väitä!" },
          { label: "te", form: "väittäkää!" },
          { label: "kielto (sinä)", form: "älä väitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "väite",
      en: "claim, statement, assertion",
      taso: "B1",
      esim: { fi: "Väite oli rohkea mutta perusteltu.", en: "The claim was bold but justified." },
    },
    {
      fi: "väittely",
      en: "debate, argument",
      taso: "B1",
      esim: { fi: "He kävivät kiivaan väittelyn.", en: "They had a heated debate." },
    },
    {
      fi: "väitellä",
      en: "to debate, argue; to defend a doctoral thesis",
      taso: "B2",
      esim: { fi: "Hän väitteli tohtoriksi viime vuonna.", en: "She defended her doctorate last year." },
    },
  ],
  synonyymit: [
    { fi: "vakuuttaa", en: "to insist, assert" },
    { fi: "esittää", en: "to put forward, present" },
  ],
  esimerkit: {
    A2: { fi: "Hän väittää, että sää paranee.", en: "He claims that the weather will improve." },
    B1: { fi: "Älä väitä vastaan koko ajan.", en: "Don't argue back all the time." },
    B2: {
      fi: "Tutkija väitti, että tulokset olivat merkittäviä, mutta ei perustellut niitä.",
      en: "The researcher claimed the results were significant but did not justify them.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaittaa;
