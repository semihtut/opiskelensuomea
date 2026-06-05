import type { Word } from "@/lib/content-types";

// Demonstrative pronoun (distal). Verified against Wiktionary: genitive tuon,
// partitive tuota, illative tuohon; plural nuo/noiden/noita.
const tuo: Word = {
  fi: "tuo",
  slug: "tuo",
  pos: "pronomini (demonstratiivipronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "that (over there)",
  selitys:
    "Osoittava pronomini kauempana näkyvästä (that over there). Genetiivi tuon, partitiivi tuota. Monikko nuo. Sarja: tämä – tuo – se.",
  kuva: { emoji: "👈", alt: "tuo – osoitetaan kauempana näkyvää" },

  kielioppi: {
    tyyppi: "demonstratiivipronomini (etäinen); epäsäännöllinen monikko nuo",
    muodot: [
      { sija: "genetiivi", muoto: "tuon", merkitys: "of that" },
      { sija: "partitiivi", muoto: "tuota", merkitys: "that (partitive)" },
      { sija: "illatiivi", muoto: "tuohon", merkitys: "into/to that" },
    ],
    huom:
      "Illatiivi on tuohon. Monikko on nuo, noiden, noita. 'Tuo' viittaa johonkin, jonka puhuja näkee mutta joka on kauempana kuin 'tämä'.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "tuo" },
          { label: "Genetiivi", form: "tuon" },
          { label: "Partitiivi", form: "tuota" },
          { label: "Inessiivi", form: "tuossa" },
          { label: "Elatiivi", form: "tuosta" },
          { label: "Illatiivi", form: "tuohon" },
          { label: "Adessiivi", form: "tuolla" },
          { label: "Ablatiivi", form: "tuolta" },
          { label: "Allatiivi", form: "tuolle" },
        ],
      },
      {
        title: "Monikko (nuo)",
        rows: [
          { label: "Nominatiivi", form: "nuo" },
          { label: "Genetiivi", form: "noiden" },
          { label: "Partitiivi", form: "noita" },
          { label: "Inessiivi", form: "noissa" },
          { label: "Illatiivi", form: "noihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nuo",
      en: "those (plural of tuo)",
      taso: "A1",
      esim: { fi: "Nuo talot ovat vanhoja.", en: "Those houses are old." },
    },
    {
      fi: "tuolla",
      en: "over there (adessive as adverb)",
      taso: "A2",
      esim: { fi: "Kauppa on tuolla.", en: "The shop is over there." },
    },
    {
      fi: "tuollainen",
      en: "that kind of",
      taso: "B1",
      esim: { fi: "Haluaisin tuollaisen takin.", en: "I'd like that kind of coat." },
    },
  ],
  synonyymit: [
    { fi: "se", en: "it, that (neutral)" },
    { fi: "tämä", en: "this (nearby)" },
  ],
  esimerkit: {
    A2: { fi: "Mikä tuo on?", en: "What is that?" },
    B1: { fi: "Näetkö tuon linnun puussa?", en: "Do you see that bird in the tree?" },
    B2: {
      fi: "Tuohon aikaan asuimme vielä maalla.",
      en: "At that time we still lived in the countryside.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tuo;
