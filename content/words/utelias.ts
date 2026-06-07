import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation, stem utelia(a)-.
// Genitive uteliaan, partitive uteliasta, illative uteliaaseen, partitive pl uteliaita.
const utelias: Word = {
  fi: "utelias",
  slug: "utelias",
  pos: "adjektiivi (tyyppi 41/vieras)",
  posClass: "adjektiivi",
  level: "B1",
  en: "curious, inquisitive",
  selitys:
    "Sellainen, joka haluaa tietää ja kysellä: 'utelias lapsi'. Tyyppi 41/vieras, ei astevaihtelua; vartalo uteliaa-. Vrt. uteliaisuus, udella. Voi olla myös hieman kielteinen (tunkeileva).",
  kuva: { emoji: "🐱", alt: "utelias – tiedonhaluinen ja kyselevä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; ei astevaihtelua (vartalo uteliaa-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "uteliaan", merkitys: "of curious" },
      { sija: "partitiivi (yks.)", muoto: "uteliasta", merkitys: "curious (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "uteliaita", merkitys: "curious (partitive pl.)" },
    ],
    huom:
      "Tyyppi 41 (-as): nominatiivi utelias, genetiivi uteliaan (pitkä vokaali), partitiivi uteliasta, monikon partitiivi uteliaita. Vrt. uteliaisuus = curiosity, udella = to pry.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "utelias" },
          { label: "Partitiivi", form: "uteliasta" },
          { label: "Genetiivi", form: "uteliaan" },
          { label: "Inessiivi", form: "uteliaassa" },
          { label: "Elatiivi", form: "uteliaasta" },
          { label: "Illatiivi", form: "uteliaaseen" },
          { label: "Adessiivi", form: "uteliaalla" },
          { label: "Allatiivi", form: "uteliaalle" },
          { label: "Translatiivi", form: "uteliaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "uteliaat" },
          { label: "Partitiivi", form: "uteliaita" },
          { label: "Genetiivi", form: "uteliaiden" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "utelias" },
          { label: "Komparatiivi", form: "uteliaampi" },
          { label: "Superlatiivi", form: "uteliain" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "uteliaisuus",
      en: "curiosity",
      taso: "B2",
      esim: { fi: "Uteliaisuus on hyvä ominaisuus.", en: "Curiosity is a good quality." },
    },
    {
      fi: "uteliaasti",
      en: "curiously, inquisitively",
      taso: "B2",
      esim: { fi: "Lapsi katsoi uteliaasti.", en: "The child looked on curiously." },
    },
  ],
  synonyymit: [
    { fi: "tiedonhaluinen", en: "eager to know" },
    { fi: "kiinnostunut", en: "interested" },
  ],
  esimerkit: {
    A2: { fi: "Olen utelias tietämään lisää.", en: "I'm curious to know more." },
    B1: { fi: "Uteliaat lapset kyselevät paljon.", en: "Curious children ask a lot of questions." },
    B2: {
      fi: "Hyvä tutkija on luonnostaan utelias ja avoin uusille ajatuksille.",
      en: "A good researcher is naturally curious and open to new ideas.",
    },
  },
  updatedAt: "2026-06-07",
};

export default utelias;
