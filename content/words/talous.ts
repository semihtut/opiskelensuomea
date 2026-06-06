import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t–d gradation, stem taloude-.
// Genitive talouden, partitive taloutta, illative talouteen, partitive pl talouksia.
const talous: Word = {
  fi: "talous",
  slug: "talous",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "economy; finances; household",
  selitys:
    "Rahankäytön kokonaisuus tai kotitalous: 'maan talous' / 'oma talous'. Tyyppi 40, astevaihtelu t:d (talous → talouden). Juuri talo + -us. Vrt. raha (money), kotitalous (household).",
  kuva: { emoji: "📊", alt: "talous – rahankäytön kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "talouden", merkitys: "of the economy" },
      { sija: "partitiivi (yks.)", muoto: "taloutta", merkitys: "economy (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "talouksia", merkitys: "economies (partitive pl.)" },
    ],
    huom:
      "Loppu -us → vartalo -ude-: talous → talouden. Astevaihtelu t:d: talouden (d), partitiivi taloutta (t). Monikon partitiivi talouksia. Vrt. taloudellinen = economical, kotitalous = household.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "talous" },
          { label: "Partitiivi", form: "taloutta" },
          { label: "Genetiivi", form: "talouden" },
          { label: "Inessiivi", form: "taloudessa" },
          { label: "Elatiivi", form: "taloudesta" },
          { label: "Illatiivi", form: "talouteen" },
          { label: "Adessiivi", form: "taloudella" },
          { label: "Ablatiivi", form: "taloudelta" },
          { label: "Allatiivi", form: "taloudelle" },
          { label: "Essiivi", form: "taloutena" },
          { label: "Translatiivi", form: "taloudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "taloudet" },
          { label: "Partitiivi", form: "talouksia" },
          { label: "Genetiivi", form: "talouksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "taloudellinen",
      en: "economic; economical",
      taso: "B2",
      esim: { fi: "Se oli taloudellinen ratkaisu.", en: "It was an economical solution." },
    },
    {
      fi: "kotitalous",
      en: "household",
      taso: "B2",
      esim: { fi: "Suomessa on miljoonia kotitalouksia.", en: "Finland has millions of households." },
    },
    {
      fi: "maatalous",
      en: "agriculture",
      taso: "B2",
      esim: { fi: "Maatalous on tärkeä elinkeino.", en: "Agriculture is an important livelihood." },
    },
  ],
  synonyymit: [
    { fi: "rahatilanne", en: "financial situation" },
    { fi: "ekonomia", en: "economics" },
  ],
  esimerkit: {
    A2: { fi: "Maan talous kasvaa.", en: "The country's economy is growing." },
    B1: { fi: "Pidän omasta taloudesta hyvää huolta.", en: "I take good care of my own finances." },
    B2: {
      fi: "Heikko talous vaikuttaa koko yhteiskuntaan.",
      en: "A weak economy affects the whole of society.",
    },
  },
  updatedAt: "2026-06-06",
};

export default talous;
