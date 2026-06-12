import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem nenä-.
// Genitive nenän, partitive nenää, partitive pl neniä.
const nena: Word = {
  fi: "nenä",
  slug: "nenä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "nose",
  selitys:
    "Kasvojen osa, jolla haistetaan ja hengitetään: 'nenä vuotaa'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko neniä. Vrt. haistaa, kasvot, hengittää.",
  kuva: { alt: "nenä – kasvojen osa jolla haistetaan ja hengitetään" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo nenä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "nenän", merkitys: "of the nose" },
      { sija: "partitiivi (yks.)", muoto: "nenää", merkitys: "nose (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "neniä", merkitys: "noses (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko neniä (a katoaa). Idiomi 'per nenä' = per person/head. Vrt. kasvot, haistaa.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "nenä" },
          { label: "Partitiivi", form: "nenää" },
          { label: "Genetiivi", form: "nenän" },
          { label: "Inessiivi", form: "nenässä" },
          { label: "Elatiivi", form: "nenästä" },
          { label: "Illatiivi", form: "nenään" },
          { label: "Adessiivi", form: "nenällä" },
          { label: "Ablatiivi", form: "nenältä" },
          { label: "Allatiivi", form: "nenälle" },
          { label: "Essiivi", form: "nenänä" },
          { label: "Translatiivi", form: "nenäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nenät" },
          { label: "Partitiivi", form: "neniä" },
          { label: "Genetiivi", form: "nenien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nenäliina",
      en: "handkerchief, tissue",
      taso: "A2",
      esim: { fi: "Tarvitsen nenäliinan.", en: "I need a tissue." },
    },
    {
      fi: "sieraimet",
      en: "nostrils",
      taso: "B2",
      esim: { fi: "Hengitä sieraimien kautta.", en: "Breathe through the nostrils." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Nenäni vuotaa, kun olen kipeä.", en: "My nose runs when I'm sick." },
    B1: { fi: "Älä työnnä nenääsi toisten asioihin.", en: "Don't stick your nose into other people's business." },
    B2: { fi: "Tuoreen leivän tuoksu sai nenäni veteen.", en: "The smell of fresh bread made my mouth water (lit. brought water to my nose)." },
  },
  updatedAt: "2026-06-07",
};

export default nena;
