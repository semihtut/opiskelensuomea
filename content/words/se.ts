import type { Word } from "@/lib/content-types";

// Demonstrative pronoun (neutral) / "it". Verified against Wiktionary: genitive sen,
// partitive sitä, inessive siinä, illative siihen; plural ne/niiden/niitä.
const se: Word = {
  fi: "se",
  slug: "se",
  pos: "pronomini (demonstratiivipronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "it; that",
  selitys:
    "Neutraali osoittava pronomini (it / that). Genetiivi sen, partitiivi sitä. Monikko ne. Puhekielessä myös ihmisestä (= hän) ja eläimistä/esineistä.",
  kuva: { emoji: "📦", alt: "se – viitataan esineeseen tai asiaan" },

  kielioppi: {
    tyyppi: "demonstratiivipronomini (neutraali); epäsäännöllinen vartalo si-/se-",
    muodot: [
      { sija: "genetiivi", muoto: "sen", merkitys: "of it / its" },
      { sija: "partitiivi", muoto: "sitä", merkitys: "it (partitive)" },
      { sija: "illatiivi", muoto: "siihen", merkitys: "into/to it" },
    ],
    huom:
      "Vartalo vaihtelee: inessiivi siinä, illatiivi siihen, partitiivi sitä, mutta genetiivi sen, adessiivi sillä. Monikko ne, niiden, niitä. Esineistä ja eläimistä 'se/ne'; puhekielessä myös ihmisestä.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "se" },
          { label: "Genetiivi", form: "sen" },
          { label: "Partitiivi", form: "sitä" },
          { label: "Inessiivi", form: "siinä" },
          { label: "Elatiivi", form: "siitä" },
          { label: "Illatiivi", form: "siihen" },
          { label: "Adessiivi", form: "sillä" },
          { label: "Ablatiivi", form: "siltä" },
          { label: "Allatiivi", form: "sille" },
        ],
      },
      {
        title: "Monikko (ne)",
        rows: [
          { label: "Nominatiivi", form: "ne" },
          { label: "Genetiivi", form: "niiden" },
          { label: "Partitiivi", form: "niitä" },
          { label: "Inessiivi", form: "niissä" },
          { label: "Illatiivi", form: "niihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ne",
      en: "they / those (plural of se)",
      taso: "A1",
      esim: { fi: "Ne ovat minun kenkäni.", en: "Those are my shoes." },
    },
    {
      fi: "sellainen",
      en: "such, that kind of",
      taso: "B1",
      esim: { fi: "Haluan sellaisen puhelimen.", en: "I want that kind of phone." },
    },
    {
      fi: "siksi",
      en: "therefore (translative as adverb)",
      taso: "B1",
      esim: { fi: "Satoi, ja siksi jäin kotiin.", en: "It rained, so I stayed home." },
    },
  ],
  synonyymit: [
    { fi: "tämä", en: "this (nearby)" },
    { fi: "tuo", en: "that (over there)" },
  ],
  esimerkit: {
    A2: { fi: "Mikä se on?", en: "What is it?" },
    B1: { fi: "En tiedä, mistä se johtuu.", en: "I don't know what it's caused by." },
    B2: {
      fi: "Se, mitä sanoit, sai minut ajattelemaan.",
      en: "What you said made me think.",
    },
  },
  updatedAt: "2026-06-05",
};

export default se;
