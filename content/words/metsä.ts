import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. Genitive metsän,
// partitive metsää, illative metsään, partitive pl metsiä.
const metsa: Word = {
  fi: "metsä",
  slug: "metsä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "forest, woods",
  selitys:
    "Laaja puiden peittämä alue. Tyyppi 10, ei astevaihtelua. Keskeinen osa suomalaista luontoa.",
  kuva: { emoji: "🌲", alt: "metsä – havumetsä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "metsän", merkitys: "of the forest" },
      { sija: "partitiivi (yks.)", muoto: "metsää", merkitys: "forest (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "metsiä", merkitys: "forests (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi metsiä. 'Mennä metsään' = go into the forest; myös idiomi 'mennä metsään' = go wrong.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "metsä" },
          { label: "Partitiivi", form: "metsää" },
          { label: "Genetiivi", form: "metsän" },
          { label: "Inessiivi", form: "metsässä" },
          { label: "Elatiivi", form: "metsästä" },
          { label: "Illatiivi", form: "metsään" },
          { label: "Adessiivi", form: "metsällä" },
          { label: "Ablatiivi", form: "metsältä" },
          { label: "Allatiivi", form: "metsälle" },
          { label: "Essiivi", form: "metsänä" },
          { label: "Translatiivi", form: "metsäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "metsät" },
          { label: "Partitiivi", form: "metsiä" },
          { label: "Genetiivi", form: "metsien" },
          { label: "Inessiivi", form: "metsissä" },
          { label: "Illatiivi", form: "metsiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "metsästää",
      en: "to hunt",
      taso: "B1",
      esim: { fi: "Syksyllä metsästetään hirviä.", en: "In autumn they hunt moose." },
    },
    {
      fi: "metsikkö",
      en: "grove, small wood",
      taso: "B2",
      esim: { fi: "Talon takana on pieni metsikkö.", en: "There's a small grove behind the house." },
    },
    {
      fi: "metsäinen",
      en: "wooded, forested",
      taso: "B2",
      esim: { fi: "Seutu on hyvin metsäinen.", en: "The region is very wooded." },
    },
  ],
  synonyymit: [
    { fi: "korpi", en: "deep wilderness forest" },
    { fi: "saloseutu", en: "backwoods" },
  ],
  esimerkit: {
    A2: { fi: "Kävelemme metsässä sunnuntaisin.", en: "We walk in the forest on Sundays." },
    B1: { fi: "Metsä oli täynnä marjoja ja sieniä.", en: "The forest was full of berries and mushrooms." },
    B2: {
      fi: "Suomessa metsä on lähes kaikkialla käden ulottuvilla.",
      en: "In Finland the forest is within reach almost everywhere.",
    },
  },
  updatedAt: "2026-06-04",
};

export default metsa;
