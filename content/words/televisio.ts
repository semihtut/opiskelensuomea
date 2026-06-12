import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation. Genitive television,
// partitive televisiota, illative televisioon, partitive pl televisioita.
const televisio: Word = {
  fi: "televisio",
  slug: "televisio",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "A1",
  en: "television, TV",
  selitys:
    "Laite, jolla katsotaan kuvaohjelmia. Tyyppi 3, ei astevaihtelua. Puhekielessä lyhyesti telkkari tai tv.",
  kuva: { alt: "televisio – televisiovastaanotin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "television", merkitys: "of the TV" },
      { sija: "partitiivi (yks.)", muoto: "televisiota", merkitys: "TV (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "televisioita", merkitys: "TVs (partitive pl.)" },
    ],
    huom:
      "Partitiivi televisiota (loppuun -ta). 'Katsoa televisiota' = watch TV. Puhekieli: telkkari, tv.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "televisio" },
          { label: "Partitiivi", form: "televisiota" },
          { label: "Genetiivi", form: "television" },
          { label: "Inessiivi", form: "televisiossa" },
          { label: "Elatiivi", form: "televisiosta" },
          { label: "Illatiivi", form: "televisioon" },
          { label: "Adessiivi", form: "televisiolla" },
          { label: "Ablatiivi", form: "televisiolta" },
          { label: "Allatiivi", form: "televisiolle" },
          { label: "Essiivi", form: "televisiona" },
          { label: "Translatiivi", form: "televisioksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "televisiot" },
          { label: "Partitiivi", form: "televisioita" },
          { label: "Genetiivi", form: "televisioiden" },
          { label: "Inessiivi", form: "televisioissa" },
          { label: "Illatiivi", form: "televisioihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "televisio-ohjelma",
      en: "TV program",
      taso: "B1",
      esim: { fi: "Katsoin hyvän televisio-ohjelman.", en: "I watched a good TV program." },
    },
    {
      fi: "telkkari",
      en: "telly (colloquial)",
      taso: "A2",
      esim: { fi: "Laita telkkari päälle.", en: "Turn on the telly." },
    },
    {
      fi: "kaukosäädin",
      en: "remote control",
      taso: "B1",
      esim: { fi: "Missä television kaukosäädin on?", en: "Where is the TV remote?" },
    },
  ],
  synonyymit: [
    { fi: "telkkari", en: "telly (colloquial)" },
    { fi: "tv", en: "TV" },
  ],
  esimerkit: {
    A2: { fi: "Katson televisiota illalla.", en: "I watch television in the evening." },
    B1: { fi: "Ostimme uuden television olohuoneeseen.", en: "We bought a new TV for the living room." },
    B2: {
      fi: "Televisiosta tuli juuri tärkeä uutislähetys.",
      en: "An important news broadcast just came on TV.",
    },
  },
  updatedAt: "2026-06-05",
};

export default televisio;
