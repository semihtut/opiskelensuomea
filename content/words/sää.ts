import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation. Genitive sään,
// partitive säätä, illative säähän, partitive pl säitä.
const saa: Word = {
  fi: "sää",
  slug: "sää",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A1",
  en: "weather",
  selitys:
    "Ilmakehän tila tiettynä aikana (esim. aurinkoinen, sateinen). Tyyppi 18, ei astevaihtelua.",
  kuva: { emoji: "🌤️", alt: "sää – sääilmiöitä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sään", merkitys: "of the weather" },
      { sija: "partitiivi (yks.)", muoto: "säätä", merkitys: "weather (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "säitä", merkitys: "weathers (partitive pl.)" },
    ],
    huom:
      "Illatiivi säähän, monikko säät/säitä. Erota sää (weather) ja ilma (air; myös arkikielessä weather).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sää" },
          { label: "Partitiivi", form: "säätä" },
          { label: "Genetiivi", form: "sään" },
          { label: "Inessiivi", form: "säässä" },
          { label: "Elatiivi", form: "säästä" },
          { label: "Illatiivi", form: "säähän" },
          { label: "Adessiivi", form: "säällä" },
          { label: "Ablatiivi", form: "säältä" },
          { label: "Allatiivi", form: "säälle" },
          { label: "Essiivi", form: "säänä" },
          { label: "Translatiivi", form: "sääksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "säät" },
          { label: "Partitiivi", form: "säitä" },
          { label: "Genetiivi", form: "säiden" },
          { label: "Inessiivi", form: "säissä" },
          { label: "Illatiivi", form: "säihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sääennuste",
      en: "weather forecast",
      taso: "A2",
      esim: { fi: "Katsoin sääennusteen aamulla.", en: "I checked the weather forecast in the morning." },
    },
    {
      fi: "säätila",
      en: "weather conditions",
      taso: "B1",
      esim: { fi: "Säätila vaihteli nopeasti.", en: "The weather conditions changed quickly." },
    },
    {
      fi: "huonosää",
      en: "bad weather",
      taso: "B1",
      esim: { fi: "Lento peruttiin huonon sään takia.", en: "The flight was cancelled due to bad weather." },
    },
  ],
  synonyymit: [
    { fi: "ilma", en: "weather (colloquial)" },
    { fi: "sääolot", en: "weather conditions" },
  ],
  esimerkit: {
    A2: { fi: "Tänään on kaunis sää.", en: "Today the weather is beautiful." },
    B1: { fi: "Sää muuttui sateiseksi iltapäivällä.", en: "The weather turned rainy in the afternoon." },
    B2: {
      fi: "Hyvän sään ansiosta saimme vietettyä koko päivän ulkona.",
      en: "Thanks to the good weather we got to spend the whole day outside.",
    },
  },
  updatedAt: "2026-06-04",
};

export default saa;
