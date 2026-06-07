import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa (pää), no gradation, stem olkapää-.
// Genitive olkapään, partitive olkapäätä, illative olkapäähän, partitive pl olkapäitä.
const olkapaa: Word = {
  fi: "olkapää",
  slug: "olkapää",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "B1",
  en: "shoulder",
  selitys:
    "Käsivarren ja vartalon yhdistävä nivel: 'olkapää on jäykkä'. Tyyppi 18/maa, ei astevaihtelua. Yhdyssana olka + pää. Synonyymi hartia. Vrt. käsi, hartia, nivel.",
  kuva: { emoji: "🤷", alt: "olkapää – käsivarren ja vartalon yhdistävä nivel" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua (vartalo olkapää-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "olkapään", merkitys: "of the shoulder" },
      { sija: "partitiivi (yks.)", muoto: "olkapäätä", merkitys: "shoulder (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "olkapäitä", merkitys: "shoulders (partitive pl.)" },
    ],
    huom:
      "Tyyppi 18/maa (kuten pää): partitiivi olkapäätä, illatiivi olkapäähän, partitiivin monikko olkapäitä. Yhdyssana olka + pää. Synonyymi hartia. Vrt. pää, hartia.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "olkapää" },
          { label: "Partitiivi", form: "olkapäätä" },
          { label: "Genetiivi", form: "olkapään" },
          { label: "Inessiivi", form: "olkapäässä" },
          { label: "Elatiivi", form: "olkapäästä" },
          { label: "Illatiivi", form: "olkapäähän" },
          { label: "Adessiivi", form: "olkapäällä" },
          { label: "Ablatiivi", form: "olkapäältä" },
          { label: "Allatiivi", form: "olkapäälle" },
          { label: "Essiivi", form: "olkapäänä" },
          { label: "Translatiivi", form: "olkapääksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "olkapäät" },
          { label: "Partitiivi", form: "olkapäitä" },
          { label: "Genetiivi", form: "olkapäiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hartia",
      en: "shoulder (the broader area)",
      taso: "B1",
      esim: { fi: "Hänellä on leveät hartiat.", en: "He has broad shoulders." },
    },
    {
      fi: "olkapäälihas",
      en: "shoulder muscle",
      taso: "B2",
      esim: { fi: "Olkapäälihas on kipeä.", en: "The shoulder muscle is sore." },
    },
  ],
  synonyymit: [
    { fi: "hartia", en: "shoulder" },
  ],
  esimerkit: {
    A2: { fi: "Olkapääni on kipeä.", en: "My shoulder hurts." },
    B1: { fi: "Nostin laukun olkapäälle.", en: "I lifted the bag onto my shoulder." },
    B2: {
      fi: "Pitkä työpäivä tietokoneella jännittää niskan ja olkapäiden lihaksia.",
      en: "A long workday at the computer tenses the muscles of the neck and shoulders.",
    },
  },
  updatedAt: "2026-06-07",
};

export default olkapaa;
