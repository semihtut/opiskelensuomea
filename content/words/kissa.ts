import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem kissa-.
// Genitive kissan, partitive kissaa, partitive pl kissoja.
const kissa: Word = {
  fi: "kissa",
  slug: "kissa",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "cat",
  selitys:
    "Yleinen kotieläin ja lemmikki: 'kissa kehrää'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko kissoja. Lainattu ruotsista (kisse). Vrt. koira, lemmikki, eläin.",
  kuva: { alt: "kissa – yleinen kotieläin ja lemmikki" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo kissa-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kissan", merkitys: "of the cat" },
      { sija: "partitiivi (yks.)", muoto: "kissaa", merkitys: "cat (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kissoja", merkitys: "cats (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: ei astevaihtelua. Partitiivin monikko kissoja (a → o), ei 'kissia'. Vrt. koira (tyyppi 10, partitiivin monikko koiria). Vrt. lemmikki.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kissa" },
          { label: "Partitiivi", form: "kissaa" },
          { label: "Genetiivi", form: "kissan" },
          { label: "Inessiivi", form: "kissassa" },
          { label: "Elatiivi", form: "kissasta" },
          { label: "Illatiivi", form: "kissaan" },
          { label: "Adessiivi", form: "kissalla" },
          { label: "Ablatiivi", form: "kissalta" },
          { label: "Allatiivi", form: "kissalle" },
          { label: "Essiivi", form: "kissana" },
          { label: "Translatiivi", form: "kissaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kissat" },
          { label: "Partitiivi", form: "kissoja" },
          { label: "Genetiivi", form: "kissojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kissanpentu",
      en: "kitten",
      taso: "A2",
      esim: { fi: "Kissanpentu on söpö.", en: "The kitten is cute." },
    },
    {
      fi: "lemmikki",
      en: "pet",
      taso: "A2",
      esim: { fi: "Kissa on suosittu lemmikki.", en: "The cat is a popular pet." },
    },
  ],
  synonyymit: [
    { fi: "kisu", en: "kitty (childish)" },
  ],
  esimerkit: {
    A2: { fi: "Kissa nukkuu sohvalla.", en: "The cat is sleeping on the sofa." },
    B1: { fi: "Naapurin kissa käy meidän pihalla.", en: "The neighbour's cat visits our yard." },
    B2: {
      fi: "Kissa on itsenäinen lemmikki, joka ei vaadi yhtä paljon huomiota kuin koira.",
      en: "A cat is an independent pet that does not require as much attention as a dog.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kissa;
