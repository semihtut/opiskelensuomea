import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem vaikeude-.
// Genitive vaikeuden, partitive vaikeutta, partitive pl vaikeuksia.
const vaikeus: Word = {
  fi: "vaikeus",
  slug: "vaikeus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "difficulty",
  selitys:
    "Se, että jokin on vaikeaa; vaikea tilanne tai ongelma: 'taloudelliset vaikeudet'. Tyyppi 40/kalleus, astevaihtelu t:d (vaikeus → vaikeuden). Johdettu sanasta vaikea. Monikkomuoto vaikeudet = troubles.",
  kuva: { emoji: "🪨", alt: "vaikeus – se, että jokin on vaikeaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vartalo vaikeude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vaikeuden", merkitys: "of the difficulty" },
      { sija: "partitiivi (yks.)", muoto: "vaikeutta", merkitys: "difficulty (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vaikeuksia", merkitys: "difficulties (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40 (-uus/-eus): genetiivi -uden, partitiivi -utta, partitiivin monikko -uksia. Johdettu sanasta vaikea. Monikossa usein 'vaikeudet' = troubles, hardships. 'Olla vaikeuksissa' = to be in trouble.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vaikeus" },
          { label: "Partitiivi", form: "vaikeutta" },
          { label: "Genetiivi", form: "vaikeuden" },
          { label: "Inessiivi", form: "vaikeudessa" },
          { label: "Elatiivi", form: "vaikeudesta" },
          { label: "Illatiivi", form: "vaikeuteen" },
          { label: "Adessiivi", form: "vaikeudella" },
          { label: "Ablatiivi", form: "vaikeudelta" },
          { label: "Allatiivi", form: "vaikeudelle" },
          { label: "Essiivi", form: "vaikeutena" },
          { label: "Translatiivi", form: "vaikeudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vaikeudet" },
          { label: "Partitiivi", form: "vaikeuksia" },
          { label: "Genetiivi", form: "vaikeuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaikea",
      en: "difficult, hard",
      taso: "A2",
      esim: { fi: "Tehtävä oli vaikea.", en: "The task was difficult." },
    },
    {
      fi: "vaikeutua",
      en: "to become more difficult",
      taso: "B2",
      esim: { fi: "Tilanne vaikeutui entisestään.", en: "The situation got even harder." },
    },
  ],
  synonyymit: [
    { fi: "ongelma", en: "problem" },
    { fi: "hankaluus", en: "trouble, inconvenience" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on vaikeuksia unen kanssa.", en: "I have difficulties with sleep." },
    B1: { fi: "Hän selvisi vaikeuksista hyvin.", en: "She got through the difficulties well." },
    B2: {
      fi: "Yritys joutui taloudellisiin vaikeuksiin pandemian aikana.",
      en: "The company ran into financial difficulties during the pandemic.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaikeus;
