import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem kuolema-.
// Genitive kuoleman, partitive kuolemaa, partitive pl kuolemia.
const kuolema: Word = {
  fi: "kuolema",
  slug: "kuolema",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "death",
  selitys:
    "Elämän päättyminen: 'läheisen kuolema'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko kuolemia. Johdettu verbistä kuolla. Vastakohta syntymä. Vrt. kuolla, syntymä, hautajaiset.",
  kuva: { alt: "kuolema – elämän päättyminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo kuolema-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kuoleman", merkitys: "of death" },
      { sija: "partitiivi (yks.)", muoto: "kuolemaa", merkitys: "death (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kuolemia", merkitys: "deaths (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Johdettu verbistä kuolla. Kuolemantuomio = death sentence. Vastakohta syntymä. Vrt. kuolla, hautajaiset.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kuolema" },
          { label: "Partitiivi", form: "kuolemaa" },
          { label: "Genetiivi", form: "kuoleman" },
          { label: "Inessiivi", form: "kuolemassa" },
          { label: "Elatiivi", form: "kuolemasta" },
          { label: "Illatiivi", form: "kuolemaan" },
          { label: "Adessiivi", form: "kuolemalla" },
          { label: "Ablatiivi", form: "kuolemalta" },
          { label: "Allatiivi", form: "kuolemalle" },
          { label: "Essiivi", form: "kuolemana" },
          { label: "Translatiivi", form: "kuolemaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kuolemat" },
          { label: "Partitiivi", form: "kuolemia" },
          { label: "Genetiivi", form: "kuolemien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuolla",
      en: "to die",
      taso: "A2",
      esim: { fi: "Kasvi kuoli ilman vettä.", en: "The plant died without water." },
    },
    {
      fi: "kuolinsyy",
      en: "cause of death",
      taso: "B2",
      esim: { fi: "Kuolinsyy jäi epäselväksi.", en: "The cause of death remained unclear." },
    },
  ],
  synonyymit: [
    { fi: "menehtyminen", en: "passing, demise" },
  ],
  esimerkit: {
    A2: { fi: "Kuolema on luonnollinen osa elämää.", en: "Death is a natural part of life." },
    B1: { fi: "Läheisen kuolema oli suuri suru.", en: "The death of a loved one was a great sorrow." },
    B2: {
      fi: "Kuoleman kohtaaminen saa monet pohtimaan elämän tarkoitusta.",
      en: "Facing death makes many people reflect on the meaning of life.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kuolema;
