import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. Genitive mustan,
// partitive mustaa, illative mustaan, partitive pl mustia.
const musta: Word = {
  fi: "musta",
  slug: "musta",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A1",
  en: "black",
  selitys:
    "Yön ja hiilen väri, valon puute. Tyyppi 10, ei astevaihtelua. Vastakohta valkoinen.",
  kuva: { emoji: "⚫", alt: "musta – musta väri" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "mustan", merkitys: "of the black" },
      { sija: "partitiivi (yks.)", muoto: "mustaa", merkitys: "black (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "mustia", merkitys: "black (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Monikon partitiivi mustia. Vertailu mustempi/mustin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "musta" },
          { label: "Partitiivi", form: "mustaa" },
          { label: "Genetiivi", form: "mustan" },
          { label: "Inessiivi", form: "mustassa" },
          { label: "Illatiivi", form: "mustaan" },
          { label: "Adessiivi", form: "mustalla" },
          { label: "Essiivi", form: "mustana" },
          { label: "Translatiivi", form: "mustaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "mustat" },
          { label: "Partitiivi", form: "mustia" },
          { label: "Genetiivi", form: "mustien" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "mustempi" },
          { label: "Komparatiivi (gen.)", form: "mustemman" },
          { label: "Superlatiivi (nom.)", form: "mustin" },
          { label: "Superlatiivi (gen.)", form: "mustimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mustua",
      en: "to turn black, blacken",
      taso: "B2",
      esim: { fi: "Hopea mustui ajan myötä.", en: "The silver blackened over time." },
    },
    {
      fi: "mustelma",
      en: "bruise",
      taso: "B2",
      esim: { fi: "Polveen tuli mustelma.", en: "A bruise formed on the knee." },
    },
    {
      fi: "mustasukkainen",
      en: "jealous",
      taso: "B2",
      esim: { fi: "Hän on hieman mustasukkainen.", en: "He is a bit jealous." },
    },
  ],
  synonyymit: [
    { fi: "pikimusta", en: "pitch-black" },
    { fi: "tumma", en: "dark" },
  ],
  esimerkit: {
    A2: { fi: "Hänellä on musta auto.", en: "He has a black car." },
    B1: { fi: "Pukeuduin mustaan juhlia varten.", en: "I dressed in black for the party." },
    B2: {
      fi: "Taivas muuttui mustaksi ennen myrskyä.",
      en: "The sky turned black before the storm.",
    },
  },
  updatedAt: "2026-06-04",
};

export default musta;
