import type { Word } from "@/lib/content-types";

// Verified against Wiktionary (äly): Kotus type 1/valo, no gradation, stem tekoäly-.
// Genitive tekoälyn, partitive tekoälyä, partitive pl tekoälyjä.
const tekoaly: Word = {
  fi: "tekoäly",
  slug: "tekoäly",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B2",
  en: "artificial intelligence (AI)",
  selitys:
    "Koneen tai ohjelman kyky toimia älykkäästi: 'tekoäly auttaa työssä'. Tyyppi 1/valo, ei astevaihtelua; partitiivin monikko tekoälyjä. Yhdyssana teko + äly. Vrt. äly, älykäs, kone.",
  kuva: { emoji: "🤖", alt: "tekoäly – koneen kyky toimia älykkäästi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo tekoäly-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tekoälyn", merkitys: "of the AI" },
      { sija: "partitiivi (yks.)", muoto: "tekoälyä", merkitys: "AI (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tekoälyjä", merkitys: "AIs (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1 (-y): partitiivin monikko -jä (tekoälyjä), ei astevaihtelua. Yhdyssana teko + äly. Lyhenne 'tekoäly' = AI; vrt. äly = intelligence, älykäs = intelligent, kone = machine.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tekoäly" },
          { label: "Partitiivi", form: "tekoälyä" },
          { label: "Genetiivi", form: "tekoälyn" },
          { label: "Inessiivi", form: "tekoälyssä" },
          { label: "Elatiivi", form: "tekoälystä" },
          { label: "Illatiivi", form: "tekoälyyn" },
          { label: "Adessiivi", form: "tekoälyllä" },
          { label: "Ablatiivi", form: "tekoälyltä" },
          { label: "Allatiivi", form: "tekoälylle" },
          { label: "Essiivi", form: "tekoälynä" },
          { label: "Translatiivi", form: "tekoälyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tekoälyt" },
          { label: "Partitiivi", form: "tekoälyjä" },
          { label: "Genetiivi", form: "tekoälyjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "äly",
      en: "intelligence, intellect",
      taso: "B2",
      esim: { fi: "Hänellä on terävä äly.", en: "He has a sharp intellect." },
    },
    {
      fi: "älykäs",
      en: "intelligent, smart",
      taso: "B1",
      esim: { fi: "Se on älykäs ratkaisu.", en: "It's an intelligent solution." },
    },
  ],
  synonyymit: [
    { fi: "keinoäly", en: "artificial intelligence (older term)" },
  ],
  esimerkit: {
    A2: { fi: "Tekoäly kiinnostaa minua.", en: "AI interests me." },
    B1: { fi: "Tekoäly kääntää tekstin nopeasti.", en: "AI translates the text quickly." },
    B2: {
      fi: "Tekoäly muuttaa monia ammatteja, mutta luo myös uusia työpaikkoja.",
      en: "AI is changing many professions, but also creating new jobs.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tekoaly;
