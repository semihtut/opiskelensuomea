import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 35/lämmin, mp:mm gradation, stem lämmin ~ lämpimä-.
// Genitive lämpimän, partitive lämmintä, partitive pl lämpimiä. Comparative lämpimämpi, superlative lämpimin.
const lämmin: Word = {
  fi: "lämmin",
  slug: "lämmin",
  pos: "adjektiivi (tyyppi 35/lämmin)",
  posClass: "adjektiivi",
  level: "A2",
  en: "warm",
  selitys:
    "Sopivan kuuma, miellyttävän lämpöinen: 'lämmin sää'. Tyyppi 35, astevaihtelu mp:mm; vartalo lämpimä-. Partitiivi lämmintä, genetiivi lämpimän. Vertailu lämpimämpi – lämpimin. Vastakohta kylmä.",
  kuva: { emoji: "🌡️", alt: "lämmin – miellyttävän lämpöinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 35/lämmin; astevaihtelu mp:mm (lämmin ↔ lämpimä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lämpimän", merkitys: "of the warm (one)" },
      { sija: "partitiivi (yks.)", muoto: "lämmintä", merkitys: "warm (partitive)" },
      { sija: "komparatiivi", muoto: "lämpimämpi", merkitys: "warmer" },
    ],
    huom:
      "Nominatiivi lämmin (mm), vartalo lämpimä- (genetiivi lämpimän, partitiivi lämmintä). Vertailu lämpimämpi – lämpimin. Substantiivina lämmin = warmth. Vastakohta kylmä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lämmin" },
          { label: "Partitiivi", form: "lämmintä" },
          { label: "Genetiivi", form: "lämpimän" },
          { label: "Inessiivi", form: "lämpimässä" },
          { label: "Elatiivi", form: "lämpimästä" },
          { label: "Illatiivi", form: "lämpimään" },
          { label: "Adessiivi", form: "lämpimällä" },
          { label: "Ablatiivi", form: "lämpimältä" },
          { label: "Allatiivi", form: "lämpimälle" },
          { label: "Essiivi", form: "lämpimänä" },
          { label: "Translatiivi", form: "lämpimäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lämpimät" },
          { label: "Partitiivi", form: "lämpimiä" },
          { label: "Genetiivi", form: "lämpimien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "lämmin" },
          { label: "Komparatiivi", form: "lämpimämpi" },
          { label: "Superlatiivi", form: "lämpimin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lämmittää",
      en: "to warm, heat",
      taso: "B1",
      esim: { fi: "Lämmitän saunan illaksi.", en: "I'll heat the sauna for the evening." },
    },
    {
      fi: "lämpötila",
      en: "temperature",
      taso: "B1",
      esim: { fi: "Lämpötila nousi viiteen asteeseen.", en: "The temperature rose to five degrees." },
    },
    {
      fi: "lämminhenkinen",
      en: "warm-hearted",
      taso: "B2",
      esim: { fi: "Hän on lämminhenkinen ihminen.", en: "She is a warm-hearted person." },
    },
  ],
  synonyymit: [
    { fi: "lauha", en: "mild (of weather)" },
    { fi: "leuto", en: "mild, gentle (climate)" },
  ],
  esimerkit: {
    A2: { fi: "Tänään on lämmin sää.", en: "Today the weather is warm." },
    B1: { fi: "Kahvi on vielä lämmintä.", en: "The coffee is still warm." },
    B2: {
      fi: "Huhtikuu oli tavallista lämpimämpi koko maassa.",
      en: "April was warmer than usual across the whole country.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lämmin;
