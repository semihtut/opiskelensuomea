import type { Word } from "@/lib/content-types";

// Personal pronoun, 1st person plural. Verified against Wiktionary: genitive
// meidän, partitive meitä, illative meihin. Singular counterpart is "minä".
const me: Word = {
  fi: "me",
  slug: "me",
  pos: "pronomini (persoonapronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "we, us",
  selitys:
    "Monikon 1. persoonan pronomini (puhuja + muut). Genetiivi meidän = our/ours. Yksikkö on minä.",
  kuva: { alt: "me – ryhmä, johon puhuja kuuluu" },

  kielioppi: {
    tyyppi: "persoonapronomini, monikon 1. persoona",
    muodot: [
      { sija: "genetiivi", muoto: "meidän", merkitys: "our, ours" },
      { sija: "partitiivi", muoto: "meitä", merkitys: "us (partitive)" },
      { sija: "allatiivi", muoto: "meille", merkitys: "to us" },
    ],
    huom:
      "Verbi taipuu monikon 1. persoonassa: 'Me menemme' tai usein vain 'menemme'. Omistus: meidän + possessiivisuffiksi (meidän talomme). Puhekieli: me, meiän.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (monikko)",
        rows: [
          { label: "Nominatiivi", form: "me" },
          { label: "Genetiivi", form: "meidän" },
          { label: "Partitiivi", form: "meitä" },
          { label: "Inessiivi", form: "meissä" },
          { label: "Elatiivi", form: "meistä" },
          { label: "Illatiivi", form: "meihin" },
          { label: "Adessiivi", form: "meillä" },
          { label: "Ablatiivi", form: "meiltä" },
          { label: "Allatiivi", form: "meille" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "minä",
      en: "I (the singular of me)",
      taso: "A1",
      esim: { fi: "Minä tulen myös.", en: "I'm coming too." },
    },
    {
      fi: "meidän",
      en: "our, ours (genitive)",
      taso: "A1",
      esim: { fi: "Tämä on meidän kotimme.", en: "This is our home." },
    },
    {
      fi: "meikäläinen",
      en: "one of us, our kind",
      taso: "B2",
      esim: { fi: "Hän on meikäläisiä.", en: "He's one of us." },
    },
  ],
  synonyymit: [
    { fi: "meikäläiset", en: "our side, our people" },
    { fi: "me kaikki", en: "all of us" },
  ],
  esimerkit: {
    A2: { fi: "Me asumme samassa talossa.", en: "We live in the same house." },
    B1: { fi: "Meillä on huomenna vapaapäivä.", en: "We have a day off tomorrow." },
    B2: {
      fi: "Meistä tuli nopeasti hyviä ystäviä.",
      en: "We quickly became good friends.",
    },
  },
  updatedAt: "2026-06-05",
};

export default me;
