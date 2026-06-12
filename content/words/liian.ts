import type { Word } from "@/lib/content-types";

// Degree adverb "liian" (too, excessively). Invariant (genitive of liika). Pairs with
// "liian … jotta ei" and noun phrase "liikaa".
const liian: Word = {
  fi: "liian",
  slug: "liian",
  pos: "adverbi (asteen adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "too (excessively)",
  selitys:
    "Enemmän kuin sopiva: 'liian iso' = too big. Asteen adverbi adjektiivin/adverbin edellä. Pohjana liika (excess). Määrästä: 'liikaa' = too much.",
  kuva: { alt: "liian – liikaa, yli sopivan" },

  kielioppi: {
    tyyppi: "asteen adverbi (liika-sanan genetiivi); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "liian", merkitys: "too (+ adjective)" },
      { sija: "määrä", muoto: "liikaa", merkitys: "too much (+ partitive)" },
      { sija: "kanta", muoto: "liika", merkitys: "excess (noun/adjective)" },
    ],
    huom:
      "'Liian' tulee adjektiivin EDELLE: 'liian kallis', 'liian myöhään'. Määrästä käytetään 'liikaa': 'Söin liikaa.' Vastakohta 'liian vähän' = too little.",
  },
  johdokset: [
    {
      fi: "liikaa",
      en: "too much",
      taso: "A2",
      esim: { fi: "Join liikaa kahvia.", en: "I drank too much coffee." },
    },
    {
      fi: "liika",
      en: "excess, surplus",
      taso: "B2",
      esim: { fi: "Liika on liikaa.", en: "Enough is enough (excess is excess)." },
    },
    {
      fi: "liiallinen",
      en: "excessive",
      taso: "B2",
      esim: { fi: "Liiallinen sokeri on epäterveellistä.", en: "Excessive sugar is unhealthy." },
    },
  ],
  synonyymit: [
    { fi: "liiaksi", en: "excessively" },
    { fi: "kohtuuttoman", en: "unreasonably" },
  ],
  esimerkit: {
    A2: { fi: "Tämä takki on liian pieni.", en: "This coat is too small." },
    B1: { fi: "Heräsin liian myöhään ja myöhästyin bussista.", en: "I woke up too late and missed the bus." },
    B2: {
      fi: "Kahvi oli liian kuumaa juotavaksi, joten odotin hetken ennen kuin maistoin.",
      en: "The coffee was too hot to drink, so I waited a moment before tasting it.",
    },
  },
  updatedAt: "2026-06-05",
};

export default liian;
