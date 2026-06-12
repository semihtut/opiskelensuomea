import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem teoria-.
// Genitive teorian, partitive teoriaa, partitive pl teorioita.
const teoria: Word = {
  fi: "teoria",
  slug: "teoria",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "B1",
  en: "theory",
  selitys:
    "Perusteltu selitysmalli jollekin ilmiölle; myös ajatus ilman käytäntöä: 'teoriassa hyvä'. Tyyppi 12/kulkija, ei astevaihtelua; partitiivin monikko teorioita. Vastakohta käytäntö. Vrt. teoreettinen, käytäntö.",
  kuva: { alt: "teoria – perusteltu selitysmalli ilmiölle" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua (vartalo teoria-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "teorian", merkitys: "of the theory" },
      { sija: "partitiivi (yks.)", muoto: "teoriaa", merkitys: "theory (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "teorioita", merkitys: "theories (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12 (-ia, kolmitavuinen): partitiivin monikko -oita (teorioita), ei astevaihtelua. Vastakohta käytäntö. 'Teoriassa' = in theory; 'käytännössä' = in practice. Vrt. teoreettinen = theoretical.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "teoria" },
          { label: "Partitiivi", form: "teoriaa" },
          { label: "Genetiivi", form: "teorian" },
          { label: "Inessiivi", form: "teoriassa" },
          { label: "Elatiivi", form: "teoriasta" },
          { label: "Illatiivi", form: "teoriaan" },
          { label: "Adessiivi", form: "teorialla" },
          { label: "Ablatiivi", form: "teorialta" },
          { label: "Allatiivi", form: "teorialle" },
          { label: "Essiivi", form: "teoriana" },
          { label: "Translatiivi", form: "teoriaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "teoriat" },
          { label: "Partitiivi", form: "teorioita" },
          { label: "Genetiivi", form: "teorioiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "teoreettinen",
      en: "theoretical",
      taso: "B2",
      esim: { fi: "Se on vain teoreettinen mahdollisuus.", en: "It's only a theoretical possibility." },
    },
    {
      fi: "käytäntö",
      en: "practice",
      taso: "B1",
      esim: { fi: "Teoria ja käytäntö eroavat.", en: "Theory and practice differ." },
    },
  ],
  synonyymit: [
    { fi: "selitysmalli", en: "explanatory model" },
    { fi: "oppi", en: "doctrine" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on teoria.", en: "I have a theory." },
    B1: { fi: "Teoriassa se toimii hyvin.", en: "In theory it works well." },
    B2: {
      fi: "Uusi teoria selittää ilmiön aiempaa paremmin.",
      en: "The new theory explains the phenomenon better than before.",
    },
  },
  updatedAt: "2026-06-07",
};

export default teoria;
