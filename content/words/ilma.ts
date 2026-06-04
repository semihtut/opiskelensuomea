import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Genitive ilman,
// partitive ilmaa, illative ilmaan, partitive pl ilmoja.
const ilma: Word = {
  fi: "ilma",
  slug: "ilma",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "air; (colloquial) weather",
  selitys:
    "Kaasuseos, jota hengitämme; arkikielessä myös 'sää'. Tyyppi 9, ei astevaihtelua. HUOM: 'ilman' on myös prepositio (= without).",
  kuva: { emoji: "💨", alt: "ilma – raikas ilma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ilman", merkitys: "of the air" },
      { sija: "partitiivi (yks.)", muoto: "ilmaa", merkitys: "air (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ilmoja", merkitys: "airs/weathers (partitive pl.)" },
    ],
    huom:
      "Genetiivi ilman on samannäköinen kuin prepositio 'ilman' (= without). Arjessa 'kaunis ilma' = nice weather.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ilma" },
          { label: "Partitiivi", form: "ilmaa" },
          { label: "Genetiivi", form: "ilman" },
          { label: "Inessiivi", form: "ilmassa" },
          { label: "Elatiivi", form: "ilmasta" },
          { label: "Illatiivi", form: "ilmaan" },
          { label: "Adessiivi", form: "ilmalla" },
          { label: "Ablatiivi", form: "ilmalta" },
          { label: "Allatiivi", form: "ilmalle" },
          { label: "Essiivi", form: "ilmana" },
          { label: "Translatiivi", form: "ilmaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ilmat" },
          { label: "Partitiivi", form: "ilmoja" },
          { label: "Genetiivi", form: "ilmojen" },
          { label: "Inessiivi", form: "ilmoissa" },
          { label: "Illatiivi", form: "ilmoihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilmasto",
      en: "climate",
      taso: "B1",
      esim: { fi: "Suomen ilmasto on viileä.", en: "Finland's climate is cool." },
    },
    {
      fi: "ilmastointi",
      en: "air conditioning",
      taso: "B2",
      esim: { fi: "Autossa on ilmastointi.", en: "The car has air conditioning." },
    },
    {
      fi: "raitisilma",
      en: "fresh air",
      taso: "B1",
      esim: { fi: "Menen ulos raittiiseen ilmaan.", en: "I'll go out for some fresh air." },
    },
  ],
  synonyymit: [
    { fi: "happi", en: "oxygen (related)" },
    { fi: "sää", en: "weather" },
  ],
  esimerkit: {
    A2: { fi: "Ulkona on raikas ilma.", en: "The air is fresh outside." },
    B1: { fi: "Avaa ikkuna, niin saadaan ilmaa.", en: "Open the window to let in some air." },
    B2: {
      fi: "Vuoristossa ilma on ohutta ja kylmää.",
      en: "In the mountains the air is thin and cold.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ilma;
