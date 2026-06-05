import type { Word } from "@/lib/content-types";

// Personal pronoun, 1st person singular. Verified against Wiktionary: genitive
// minun, partitive minua, illative minuun. Plural counterpart is "me".
const mina: Word = {
  fi: "minä",
  slug: "minä",
  pos: "pronomini (persoonapronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "I, me",
  selitys:
    "Yksikön 1. persoonan pronomini (puhuja). Genetiivi minun = my/mine. Monikko on me. Puhekielessä usein 'mä'.",
  kuva: { emoji: "🙋", alt: "minä – puhuja osoittaa itseään" },

  kielioppi: {
    tyyppi: "persoonapronomini, yksikön 1. persoona",
    muodot: [
      { sija: "genetiivi", muoto: "minun", merkitys: "my, mine" },
      { sija: "partitiivi", muoto: "minua", merkitys: "me (partitive)" },
      { sija: "allatiivi", muoto: "minulle", merkitys: "to me" },
    ],
    huom:
      "Verbi taipuu persoonassa, joten 'minä' jätetään usein pois: '(Minä) olen täällä.' Omistus: minun + possessiivisuffiksi (minun kirjani). Puhekieli: mä, mun, mua.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "minä" },
          { label: "Genetiivi", form: "minun" },
          { label: "Partitiivi", form: "minua" },
          { label: "Inessiivi", form: "minussa" },
          { label: "Elatiivi", form: "minusta" },
          { label: "Illatiivi", form: "minuun" },
          { label: "Adessiivi", form: "minulla" },
          { label: "Ablatiivi", form: "minulta" },
          { label: "Allatiivi", form: "minulle" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "me",
      en: "we (the plural of minä)",
      taso: "A1",
      esim: { fi: "Me olemme kotona.", en: "We are at home." },
    },
    {
      fi: "minun",
      en: "my, mine (genitive)",
      taso: "A1",
      esim: { fi: "Tämä on minun kirjani.", en: "This is my book." },
    },
    {
      fi: "itse",
      en: "myself, oneself",
      taso: "B1",
      esim: { fi: "Tein sen itse.", en: "I did it myself." },
    },
  ],
  synonyymit: [
    { fi: "mä", en: "I (colloquial)" },
    { fi: "allekirjoittanut", en: "the undersigned (formal 'I')" },
  ],
  esimerkit: {
    A2: { fi: "Minä asun Helsingissä.", en: "I live in Helsinki." },
    B1: { fi: "Minulla on hyvä idea.", en: "I have a good idea." },
    B2: {
      fi: "Minusta tuntuu, että olemme tavanneet aiemmin.",
      en: "I feel that we have met before.",
    },
  },
  updatedAt: "2026-06-05",
};

export default mina;
