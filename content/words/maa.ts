import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 18/maa, no gradation, monosyllabic stem maa-.
// Genitive maan, partitive maata, illative maahan, partitive pl maita.
const maa: Word = {
  fi: "maa",
  slug: "maa",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A2",
  en: "country; land, ground, earth, soil",
  selitys:
    "Valtio, maaperä tai maan pinta: 'vieras maa' / 'kaivaa maata'. Tyyppi 18, ei astevaihtelua. Partitiivi maata, partitiivin monikko maita. Vrt. maailma, maaperä, ulkomaa, kotimaa.",
  kuva: { emoji: "🌍", alt: "maa – valtio, maaperä tai maan pinta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "maan", merkitys: "of the country/land" },
      { sija: "partitiivi (yks.)", muoto: "maata", merkitys: "country/land (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "maita", merkitys: "countries (partitive pl.)" },
    ],
    huom:
      "Tyyppi 18: partitiivi maata, illatiivi maahan, partitiivin monikko maita. Monta merkitystä: maa = country (valtio), land/ground (maaperä), the Earth. Vrt. ulkomaa = foreign country, maailma = world.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "maa" },
          { label: "Partitiivi", form: "maata" },
          { label: "Genetiivi", form: "maan" },
          { label: "Inessiivi", form: "maassa" },
          { label: "Elatiivi", form: "maasta" },
          { label: "Illatiivi", form: "maahan" },
          { label: "Adessiivi", form: "maalla" },
          { label: "Ablatiivi", form: "maalta" },
          { label: "Allatiivi", form: "maalle" },
          { label: "Essiivi", form: "maana" },
          { label: "Translatiivi", form: "maaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "maat" },
          { label: "Partitiivi", form: "maita" },
          { label: "Genetiivi", form: "maiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ulkomaa",
      en: "foreign country",
      taso: "B1",
      esim: { fi: "Hän asuu ulkomailla.", en: "She lives abroad." },
    },
    {
      fi: "kotimaa",
      en: "home country, native land",
      taso: "B1",
      esim: { fi: "Suomi on minun kotimaani.", en: "Finland is my home country." },
    },
    {
      fi: "maaperä",
      en: "soil, ground",
      taso: "B2",
      esim: { fi: "Maaperä on täällä hedelmällinen.", en: "The soil is fertile here." },
    },
  ],
  synonyymit: [
    { fi: "valtio", en: "state, country" },
    { fi: "maaperä", en: "soil, ground" },
  ],
  esimerkit: {
    A2: { fi: "Mistä maasta sinä olet?", en: "What country are you from?" },
    B1: { fi: "Olen käynyt monessa maassa.", en: "I have visited many countries." },
    B2: {
      fi: "Jokaisella maalla on omat tapansa ja perinteensä.",
      en: "Every country has its own customs and traditions.",
    },
  },
  updatedAt: "2026-06-07",
};

export default maa;
