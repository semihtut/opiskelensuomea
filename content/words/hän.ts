import type { Word } from "@/lib/content-types";

// Personal pronoun, 3rd person singular (gender-neutral). Verified against
// Wiktionary: genitive hänen, partitive häntä, illative häneen. Plural is "he".
const han: Word = {
  fi: "hän",
  slug: "hän",
  pos: "pronomini (persoonapronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "he, she (gender-neutral)",
  selitys:
    "Yksikön 3. persoonan pronomini ihmisestä; ei sukupuolta (he ja she yhdessä). Genetiivi hänen. Monikko on he. Puhekielessä ihmisestä usein 'se'.",
  kuva: { alt: "hän – yksittäinen henkilö" },

  kielioppi: {
    tyyppi: "persoonapronomini, yksikön 3. persoona",
    muodot: [
      { sija: "genetiivi", muoto: "hänen", merkitys: "his, her" },
      { sija: "partitiivi", muoto: "häntä", merkitys: "him, her (partitive)" },
      { sija: "allatiivi", muoto: "hänelle", merkitys: "to him/her" },
    ],
    huom:
      "'Hän' viittaa vain ihmiseen (ja joskus lemmikkiin); eläimestä ja esineestä käytetään 'se'. Ei erottele sukupuolta. Puhekielessä ihmisestäkin usein 'se'.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "hän" },
          { label: "Genetiivi", form: "hänen" },
          { label: "Partitiivi", form: "häntä" },
          { label: "Inessiivi", form: "hänessä" },
          { label: "Elatiivi", form: "hänestä" },
          { label: "Illatiivi", form: "häneen" },
          { label: "Adessiivi", form: "hänellä" },
          { label: "Ablatiivi", form: "häneltä" },
          { label: "Allatiivi", form: "hänelle" },
        ],
      },
      {
        title: "Monikko (he)",
        rows: [
          { label: "Nominatiivi", form: "he" },
          { label: "Genetiivi", form: "heidän" },
          { label: "Partitiivi", form: "heitä" },
          { label: "Illatiivi", form: "heihin" },
          { label: "Adessiivi", form: "heillä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "he",
      en: "they (the plural of hän)",
      taso: "A1",
      esim: { fi: "He asuvat naapurissa.", en: "They live next door." },
    },
    {
      fi: "hänen",
      en: "his, her (genitive)",
      taso: "A1",
      esim: { fi: "Tämä on hänen autonsa.", en: "This is his/her car." },
    },
    {
      fi: "itse",
      en: "himself, herself",
      taso: "B1",
      esim: { fi: "Hän teki sen itse.", en: "He/she did it himself/herself." },
    },
  ],
  synonyymit: [
    { fi: "se", en: "he/she (colloquial, of a person)" },
    { fi: "tämä", en: "this one (referring to a present person)" },
  ],
  esimerkit: {
    A2: { fi: "Hän on minun ystäväni.", en: "He/she is my friend." },
    B1: { fi: "Annoin kirjan hänelle.", en: "I gave the book to him/her." },
    B2: {
      fi: "Hänestä tuntui, ettei kukaan kuunnellut.",
      en: "He/she felt that no one was listening.",
    },
  },
  updatedAt: "2026-06-05",
};

export default han;
