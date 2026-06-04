import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 19/suo, no gradation. Plural stem shifts
// yö- → öi-: partitive pl öitä, genitive pl öiden. Adverbial yöllä (at night).
const yö: Word = {
  fi: "yö",
  slug: "yö",
  pos: "substantiivi (tyyppi: suo)",
  posClass: "substantiivi",
  level: "A1",
  en: "night",
  selitys: "Pimeä aika illan ja aamun välissä, nukkumisen aika. Ei astevaihtelua.",
  kuva: { emoji: "🌙", alt: "yö – kuu ja tähdet" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 19/suo; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "yötä", merkitys: "night (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "yön", merkitys: "of the night" },
      { sija: "partitiivi (mon.)", muoto: "öitä", merkitys: "nights (partitive pl.)" },
    ],
    huom:
      "Monikossa vartalo yö- → öi-: öitä, öiden, öihin. 'Yöllä' = at night, essiivi yönä. Illatiivi yks. yöhön.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "yö" },
          { label: "Partitiivi", form: "yötä" },
          { label: "Genetiivi", form: "yön" },
          { label: "Inessiivi", form: "yössä" },
          { label: "Elatiivi", form: "yöstä" },
          { label: "Illatiivi", form: "yöhön" },
          { label: "Adessiivi", form: "yöllä" },
          { label: "Ablatiivi", form: "yöltä" },
          { label: "Allatiivi", form: "yölle" },
          { label: "Essiivi", form: "yönä" },
          { label: "Translatiivi", form: "yöksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "yöt" },
          { label: "Partitiivi", form: "öitä" },
          { label: "Genetiivi", form: "öiden" },
          { label: "Illatiivi", form: "öihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yöllinen",
      en: "nocturnal, nighttime",
      taso: "B1",
      esim: { fi: "Kuulin yöllisen äänen.", en: "I heard a nighttime sound." },
    },
    {
      fi: "yöpyä",
      en: "to stay overnight",
      taso: "B1",
      esim: { fi: "Yövyimme hotellissa.", en: "We stayed overnight in a hotel." },
    },
    {
      fi: "keskiyö",
      en: "midnight",
      taso: "B1",
      esim: { fi: "Juna lähtee keskiyöllä.", en: "The train leaves at midnight." },
    },
  ],
  synonyymit: [
    { fi: "yöaika", en: "nighttime" },
    { fi: "keskiyö", en: "midnight" },
  ],
  esimerkit: {
    A2: { fi: "Hyvää yötä!", en: "Good night!" },
    B1: { fi: "Nukuin huonosti koko yön.", en: "I slept badly all night." },
    B2: {
      fi: "Kesällä yöt ovat pohjoisessa hyvin valoisia.",
      en: "In summer the nights are very bright in the north.",
    },
  },
  updatedAt: "2026-06-04",
};

export default yö;
