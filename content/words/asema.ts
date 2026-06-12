import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 11/omena, no gradation. Genitive aseman,
// partitive asemaa, illative asemaan, partitive pl asemia.
const asema: Word = {
  fi: "asema",
  slug: "asema",
  pos: "substantiivi (tyyppi 11/omena)",
  posClass: "substantiivi",
  level: "A1",
  en: "station; position, status",
  selitys:
    "Paikka, jossa juna tai bussi pysähtyy; myös 'asema' = sijainti tai yhteiskunnallinen status. Tyyppi 11, ei astevaihtelua.",
  kuva: { alt: "asema – juna-asema laitureineen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 11/omena; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "aseman", merkitys: "of the station" },
      { sija: "partitiivi (yks.)", muoto: "asemaa", merkitys: "station (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "asemia", merkitys: "stations (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi asemia ~ asemoita. Yhdyssanoissa: rautatieasema, bussiasema, poliisiasema.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "asema" },
          { label: "Partitiivi", form: "asemaa" },
          { label: "Genetiivi", form: "aseman" },
          { label: "Inessiivi", form: "asemassa" },
          { label: "Elatiivi", form: "asemasta" },
          { label: "Illatiivi", form: "asemaan" },
          { label: "Adessiivi", form: "asemalla" },
          { label: "Ablatiivi", form: "asemalta" },
          { label: "Allatiivi", form: "asemalle" },
          { label: "Essiivi", form: "asemana" },
          { label: "Translatiivi", form: "asemaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "asemat" },
          { label: "Partitiivi", form: "asemia" },
          { label: "Genetiivi", form: "asemien" },
          { label: "Inessiivi", form: "asemissa" },
          { label: "Illatiivi", form: "asemiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rautatieasema",
      en: "railway station",
      taso: "A2",
      esim: { fi: "Tapaamme rautatieasemalla.", en: "We'll meet at the railway station." },
    },
    {
      fi: "asemapaikka",
      en: "posting, station (place of duty)",
      taso: "B2",
      esim: { fi: "Hänen asemapaikkansa on Lapissa.", en: "His posting is in Lapland." },
    },
    {
      fi: "yhteiskunnallinen asema",
      en: "social status",
      taso: "B2",
      esim: { fi: "Koulutus paransi hänen asemaansa.", en: "Education improved her status." },
    },
  ],
  synonyymit: [
    { fi: "terminaali", en: "terminal" },
    { fi: "sijainti", en: "location, position" },
  ],
  esimerkit: {
    A2: { fi: "Asema on aivan keskustassa.", en: "The station is right downtown." },
    B1: { fi: "Odotin junaa asemalla puoli tuntia.", en: "I waited for the train at the station for half an hour." },
    B2: {
      fi: "Hänen asemansa yrityksessä vahvistui vuosien myötä.",
      en: "Her position in the company strengthened over the years.",
    },
  },
  updatedAt: "2026-06-04",
};

export default asema;
