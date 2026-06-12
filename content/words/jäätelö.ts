import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 2/palvelu, no gradation, stem jäätelö-.
// Genitive jäätelön, partitive jäätelöä, partitive pl jäätelöjä.
const jaatelo: Word = {
  fi: "jäätelö",
  slug: "jäätelö",
  pos: "substantiivi (tyyppi 2/palvelu)",
  posClass: "substantiivi",
  level: "A2",
  en: "ice cream",
  selitys:
    "Jäädytetty makea jälkiruoka: 'suklaajäätelö'. Tyyppi 2/palvelu, ei astevaihtelua. Sanasta jäätää. Vrt. jää, jälkiruoka, kerma.",
  kuva: { alt: "jäätelö – jäädytetty makea jälkiruoka" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 2/palvelu; ei astevaihtelua (vartalo jäätelö-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "jäätelön", merkitys: "of the ice cream" },
      { sija: "partitiivi (yks.)", muoto: "jäätelöä", merkitys: "ice cream (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "jäätelöjä", merkitys: "ice creams (partitive pl.)" },
    ],
    huom:
      "Tyyppi 2/palvelu: ei astevaihtelua. Sanasta jäätää = to freeze. Puhekielessä jätski. Suklaajäätelö, vaniljajäätelö. Vrt. jää, kerma.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "jäätelö" },
          { label: "Partitiivi", form: "jäätelöä" },
          { label: "Genetiivi", form: "jäätelön" },
          { label: "Inessiivi", form: "jäätelössä" },
          { label: "Elatiivi", form: "jäätelöstä" },
          { label: "Illatiivi", form: "jäätelöön" },
          { label: "Adessiivi", form: "jäätelöllä" },
          { label: "Ablatiivi", form: "jäätelöltä" },
          { label: "Allatiivi", form: "jäätelölle" },
          { label: "Essiivi", form: "jäätelönä" },
          { label: "Translatiivi", form: "jäätelöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "jäätelöt" },
          { label: "Partitiivi", form: "jäätelöjä" },
          { label: "Genetiivi", form: "jäätelöjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jäätelötötterö",
      en: "ice cream cone",
      taso: "B1",
      esim: { fi: "Ostin jäätelötötterön.", en: "I bought an ice cream cone." },
    },
    {
      fi: "jää",
      en: "ice",
      taso: "A2",
      esim: { fi: "Järvellä on jää.", en: "There is ice on the lake." },
    },
  ],
  synonyymit: [
    { fi: "jätski", en: "ice cream (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Haluan suklaajäätelöä.", en: "I want chocolate ice cream." },
    B1: { fi: "Kesällä syömme paljon jäätelöä.", en: "In summer we eat a lot of ice cream." },
    B2: {
      fi: "Jäätelö suli nopeasti helteessä, joten söimme sen kiireellä.",
      en: "The ice cream melted quickly in the heat, so we ate it in a hurry.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jaatelo;
