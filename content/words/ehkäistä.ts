import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 66/rohkaista, no gradation, stem ehkäise-.
// Present minä ehkäisen, hän ehkäisee; imperfect minä ehkäisin; NUT ehkäissyt; passive ehkäistään.
const ehkaista: Word = {
  fi: "ehkäistä",
  slug: "ehkäistä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to prevent, avert",
  selitys:
    "Estää jonkin ei-toivotun syntyminen etukäteen: 'ehkäistä sairauksia'. Tyyppi 3 (-stä), Kotus 66/rohkaista, ei astevaihtelua; vartalo ehkäise-. NUT-partisiippi ehkäissyt, passiivi ehkäistään. Vrt. ehkäisy, estää.",
  kuva: { alt: "ehkäistä – estää ongelman syntyminen etukäteen" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-stä), Kotus 66/rohkaista; ei astevaihtelua; vartalo ehkäise-",
    muodot: [
      { sija: "preesens (minä)", muoto: "ehkäisen", merkitys: "I prevent" },
      { sija: "imperfekti (minä)", muoto: "ehkäisin", merkitys: "I prevented" },
      { sija: "NUT-partisiippi", muoto: "ehkäissyt", merkitys: "(have) prevented" },
    ],
    huom:
      "Tyyppi 66 (kuten ratkaista, rohkaista): vartalo ehkäise-, preesens ehkäisen, imperfekti ehkäisin. NUT-partisiipissa s kahdentuu: ehkäissyt. Passiivi ehkäistään. Vrt. estää (yleisempi), ehkäisy = prevention.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "ehkäisen" },
          { label: "sinä", form: "ehkäiset" },
          { label: "hän", form: "ehkäisee" },
          { label: "me", form: "ehkäisemme" },
          { label: "te", form: "ehkäisette" },
          { label: "he", form: "ehkäisevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en ehkäise" },
          { label: "hän", form: "ei ehkäise" },
          { label: "he", form: "eivät ehkäise" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "ehkäisin" },
          { label: "sinä", form: "ehkäisit" },
          { label: "hän", form: "ehkäisi" },
          { label: "me", form: "ehkäisimme" },
          { label: "te", form: "ehkäisitte" },
          { label: "he", form: "ehkäisivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen ehkäissyt" },
          { label: "hän", form: "on ehkäissyt" },
          { label: "he", form: "ovat ehkäisseet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "ehkäise!" },
          { label: "te", form: "ehkäiskää!" },
          { label: "kielto (sinä)", form: "älä ehkäise" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ehkäisy",
      en: "prevention; contraception",
      taso: "B1",
      esim: { fi: "Sairauksien ehkäisy on tärkeää.", en: "Prevention of diseases is important." },
    },
    {
      fi: "ehkäisevä",
      en: "preventive",
      taso: "B2",
      esim: { fi: "Ehkäisevä hoito säästää kuluja.", en: "Preventive care saves costs." },
    },
  ],
  synonyymit: [
    { fi: "estää", en: "to prevent, block" },
    { fi: "torjua", en: "to ward off, repel" },
  ],
  esimerkit: {
    A2: { fi: "Käsien pesu ehkäisee tauteja.", en: "Washing hands prevents diseases." },
    B1: { fi: "Liikunta ehkäisee monia sairauksia.", en: "Exercise prevents many illnesses." },
    B2: {
      fi: "Ongelmat olisi voitu ehkäistä paremmalla suunnittelulla.",
      en: "The problems could have been prevented with better planning.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ehkaista;
