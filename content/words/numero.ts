import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem numero-.
// Genitive numeron, partitive numeroa, illative numeroon, partitive pl numeroja/numeroita.
const numero: Word = {
  fi: "numero",
  slug: "numero",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "A2",
  en: "number, numeral; (magazine) issue",
  selitys:
    "Numeromerkki tai tunnistenumero, esim. puhelinnumero: 'soita tähän numeroon'. Tyyppi 2, ei astevaihtelua. Partitiivin monikko numeroja (tai numeroita). HUOM: numero = digit/ID-luku, kun taas luku = määrä.",
  kuva: { emoji: "🔢", alt: "numero – numeromerkki tai tunnistenumero" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "numeron", merkitys: "of the number" },
      { sija: "partitiivi (yks.)", muoto: "numeroa", merkitys: "number (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "numeroja / numeroita", merkitys: "numbers (partitive pl.)" },
    ],
    huom:
      "Numero = numeromerkki tai tunniste (puhelinnumero, kenkänumero); luku = määrä/arvo. 'Soittaa numeroon' (illatiivi). Vrt. lehden numero = issue of a magazine.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "numero" },
          { label: "Partitiivi", form: "numeroa" },
          { label: "Genetiivi", form: "numeron" },
          { label: "Inessiivi", form: "numerossa" },
          { label: "Elatiivi", form: "numerosta" },
          { label: "Illatiivi", form: "numeroon" },
          { label: "Adessiivi", form: "numerolla" },
          { label: "Ablatiivi", form: "numerolta" },
          { label: "Allatiivi", form: "numerolle" },
          { label: "Essiivi", form: "numerona" },
          { label: "Translatiivi", form: "numeroksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "numerot" },
          { label: "Partitiivi", form: "numeroja / numeroita" },
          { label: "Genetiivi", form: "numeroiden / numerojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "puhelinnumero",
      en: "phone number",
      taso: "A2",
      esim: { fi: "Anna minulle puhelinnumerosi.", en: "Give me your phone number." },
    },
    {
      fi: "numeroida",
      en: "to number",
      taso: "B2",
      esim: { fi: "Sivut on numeroitu.", en: "The pages are numbered." },
    },
    {
      fi: "kenkänumero",
      en: "shoe size",
      taso: "B1",
      esim: { fi: "Mikä on kenkänumerosi?", en: "What is your shoe size?" },
    },
  ],
  synonyymit: [
    { fi: "luku", en: "number, figure (quantity)" },
    { fi: "numeromerkki", en: "digit, numeral" },
  ],
  esimerkit: {
    A2: { fi: "Soita tähän numeroon.", en: "Call this number." },
    B1: { fi: "Unohdin huoneen numeron.", en: "I forgot the room number." },
    B2: {
      fi: "Lehden uusin numero ilmestyy ensi viikolla.",
      en: "The latest issue of the magazine comes out next week.",
    },
  },
  updatedAt: "2026-06-06",
};

export default numero;
