import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem ilmasto-.
// Genitive ilmaston, partitive ilmastoa, illative ilmastoon, partitive pl ilmastoja.
const ilmasto: Word = {
  fi: "ilmasto",
  slug: "ilmasto",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "B1",
  en: "climate",
  selitys:
    "Alueen pitkän ajan säätila: 'lämmin ilmasto'. Tyyppi 2, ei astevaihtelua. Johdettu sanasta ilma (+ -sto). Vrt. ilmastonmuutos (climate change), sää (weather — lyhyt aika).",
  kuva: { emoji: "🌡️", alt: "ilmasto – alueen pitkän ajan säätila" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ilmaston", merkitys: "of the climate" },
      { sija: "partitiivi (yks.)", muoto: "ilmastoa", merkitys: "climate (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ilmastoja", merkitys: "climates (partitive pl.)" },
    ],
    huom:
      "Ilmasto = pitkän ajan keskimääräinen sää; sää = sen hetken tila. 'Ilmastonmuutos' = climate change. Vrt. ilma = air/weather, ilmastointi = air conditioning.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ilmasto" },
          { label: "Partitiivi", form: "ilmastoa" },
          { label: "Genetiivi", form: "ilmaston" },
          { label: "Inessiivi", form: "ilmastossa" },
          { label: "Elatiivi", form: "ilmastosta" },
          { label: "Illatiivi", form: "ilmastoon" },
          { label: "Adessiivi", form: "ilmastolla" },
          { label: "Ablatiivi", form: "ilmastolta" },
          { label: "Allatiivi", form: "ilmastolle" },
          { label: "Essiivi", form: "ilmastona" },
          { label: "Translatiivi", form: "ilmastoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ilmastot" },
          { label: "Partitiivi", form: "ilmastoja" },
          { label: "Genetiivi", form: "ilmastojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilmastonmuutos",
      en: "climate change",
      taso: "B1",
      esim: { fi: "Ilmastonmuutos on vakava uhka.", en: "Climate change is a serious threat." },
    },
    {
      fi: "ilmastollinen",
      en: "climatic",
      taso: "B2",
      esim: { fi: "Alueella on erityiset ilmastolliset olot.", en: "The area has special climatic conditions." },
    },
    {
      fi: "ilmastointi",
      en: "air conditioning",
      taso: "B2",
      esim: { fi: "Autossa on ilmastointi.", en: "The car has air conditioning." },
    },
  ],
  synonyymit: [
    { fi: "sääolot", en: "weather conditions" },
    { fi: "ilmasto-olot", en: "climatic conditions" },
  ],
  esimerkit: {
    A2: { fi: "Suomessa on kylmä ilmasto.", en: "Finland has a cold climate." },
    B1: { fi: "Etelässä ilmasto on lämpimämpi.", en: "In the south the climate is warmer." },
    B2: {
      fi: "Ilmaston lämpeneminen vaikuttaa sekä luontoon että talouteen.",
      en: "The warming of the climate affects both nature and the economy.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ilmasto;
