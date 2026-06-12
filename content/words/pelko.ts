import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, k–∅ gradation (lk:l), stem pelko-/pelo-.
// Genitive pelon, partitive pelkoa, illative pelkoon, partitive pl pelkoja.
const pelko: Word = {
  fi: "pelko",
  slug: "pelko",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "fear, dread",
  selitys:
    "Epämiellyttävä tunne uhkan edessä: 'pelko vallassa'. Tyyppi 1, astevaihtelu k:∅ (pelko → pelon). Vrt. pelätä (to fear, verb), pelottava (scary).",
  kuva: { alt: "pelko – tunne uhkan edessä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu k:∅ (lk:l)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pelon", merkitys: "of fear" },
      { sija: "partitiivi (yks.)", muoto: "pelkoa", merkitys: "fear (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pelkoja", merkitys: "fears (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu k katoaa heikossa asteessa: pelko → pelon, pelossa, mutta pelkoa, pelkoon (vahva aste). Vrt. pelätä = to fear, pelottaa = to scare, peloton = fearless.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pelko" },
          { label: "Partitiivi", form: "pelkoa" },
          { label: "Genetiivi", form: "pelon" },
          { label: "Inessiivi", form: "pelossa" },
          { label: "Elatiivi", form: "pelosta" },
          { label: "Illatiivi", form: "pelkoon" },
          { label: "Adessiivi", form: "pelolla" },
          { label: "Ablatiivi", form: "pelolta" },
          { label: "Allatiivi", form: "pelolle" },
          { label: "Essiivi", form: "pelkona" },
          { label: "Translatiivi", form: "peloksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pelot" },
          { label: "Partitiivi", form: "pelkoja" },
          { label: "Genetiivi", form: "pelkojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pelätä",
      en: "to fear, be afraid",
      taso: "A2",
      esim: { fi: "Pelkään pimeää.", en: "I'm afraid of the dark." },
    },
    {
      fi: "pelottava",
      en: "scary, frightening",
      taso: "B1",
      esim: { fi: "Se oli pelottava kokemus.", en: "It was a frightening experience." },
    },
    {
      fi: "peloton",
      en: "fearless",
      taso: "B2",
      esim: { fi: "Hän on peloton johtaja.", en: "She is a fearless leader." },
    },
  ],
  synonyymit: [
    { fi: "kauhu", en: "terror, horror" },
    { fi: "jännitys", en: "tension, suspense" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on korkean paikan pelko.", en: "I have a fear of heights." },
    B1: { fi: "Pelko esti häntä yrittämästä.", en: "Fear stopped him from trying." },
    B2: {
      fi: "Hän voitti pelkonsa ja piti puheen koko yleisön edessä.",
      en: "She overcame her fear and gave a speech in front of the whole audience.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pelko;
