import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation. Genitive pään,
// partitive päätä, illative päähän, partitive pl päitä, genitive pl päiden.
const paa: Word = {
  fi: "pää",
  slug: "pää",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A1",
  en: "head; end, tip",
  selitys:
    "Kehon ylin osa, jossa ovat aivot ja kasvot; myös 'pää' = jonkin ääripää. Tyyppi 18, ei astevaihtelua.",
  kuva: { alt: "pää – ihmisen pää" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pään", merkitys: "of the head" },
      { sija: "partitiivi (yks.)", muoto: "päätä", merkitys: "head (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "päitä", merkitys: "heads (partitive pl.)" },
    ],
    huom:
      "Illatiivi päähän, monikko päät/päitä/päiden. Idiomeja: 'päässä' (in one's head), 'pää kipeä' (headache), 'matkan pää' (end of the road).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pää" },
          { label: "Partitiivi", form: "päätä" },
          { label: "Genetiivi", form: "pään" },
          { label: "Inessiivi", form: "päässä" },
          { label: "Elatiivi", form: "päästä" },
          { label: "Illatiivi", form: "päähän" },
          { label: "Adessiivi", form: "päällä" },
          { label: "Ablatiivi", form: "päältä" },
          { label: "Allatiivi", form: "päälle" },
          { label: "Essiivi", form: "päänä" },
          { label: "Translatiivi", form: "pääksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "päät" },
          { label: "Partitiivi", form: "päitä" },
          { label: "Genetiivi", form: "päiden" },
          { label: "Inessiivi", form: "päissä" },
          { label: "Illatiivi", form: "päihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päänsärky",
      en: "headache",
      taso: "A2",
      esim: { fi: "Minulla on kova päänsärky.", en: "I have a bad headache." },
    },
    {
      fi: "pääkaupunki",
      en: "capital city",
      taso: "A2",
      esim: { fi: "Helsinki on pääkaupunki.", en: "Helsinki is the capital." },
    },
    {
      fi: "päättää",
      en: "to decide; to end (related root)",
      taso: "A2",
      esim: { fi: "Päätin lähteä aikaisin.", en: "I decided to leave early." },
    },
  ],
  synonyymit: [
    { fi: "kallo", en: "skull (colloquial for head)" },
    { fi: "kärki", en: "tip, point (for 'end')" },
  ],
  esimerkit: {
    A2: { fi: "Minun pää on kipeä.", en: "My head hurts." },
    B1: { fi: "Laske pää tyynylle ja lepää.", en: "Put your head on the pillow and rest." },
    B2: {
      fi: "Hän osaa laskea vaikeatkin summat päässä.",
      en: "He can do even hard sums in his head.",
    },
  },
  updatedAt: "2026-06-04",
};

export default paa;
