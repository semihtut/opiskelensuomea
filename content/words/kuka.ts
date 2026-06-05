import type { Word } from "@/lib/content-types";

// Interrogative pronoun (people). Verified against Wiktionary: genitive kenen,
// partitive ketä, allative kenelle; plural ketkä/keiden/keitä. Stem ken- in cases.
const kuka: Word = {
  fi: "kuka",
  slug: "kuka",
  pos: "pronomini (interrogatiivipronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "who",
  selitys:
    "Kysyy henkilöä (who). Sijamuodoissa vartalo on ken-: genetiivi kenen (whose), partitiivi ketä. Asioista kysytään mikä.",
  kuva: { emoji: "🤔", alt: "kuka – kysymys henkilöstä" },

  kielioppi: {
    tyyppi: "interrogatiivipronomini (henkilö); taivutusvartalo ken-",
    muodot: [
      { sija: "genetiivi", muoto: "kenen", merkitys: "whose" },
      { sija: "partitiivi", muoto: "ketä", merkitys: "whom (partitive)" },
      { sija: "allatiivi", muoto: "kenelle", merkitys: "to whom" },
    ],
    huom:
      "Nominatiivi kuka, mutta muut sijat vartalosta ken-: kenen, ketä, kenelle, keneen. Monikko ketkä, keiden, keitä. Asioista käytetään mikä.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "kuka" },
          { label: "Genetiivi", form: "kenen" },
          { label: "Partitiivi", form: "ketä" },
          { label: "Inessiivi", form: "kenessä" },
          { label: "Illatiivi", form: "keneen" },
          { label: "Adessiivi", form: "kenellä" },
          { label: "Ablatiivi", form: "keneltä" },
          { label: "Allatiivi", form: "kenelle" },
        ],
      },
      {
        title: "Monikko (ketkä)",
        rows: [
          { label: "Nominatiivi", form: "ketkä" },
          { label: "Genetiivi", form: "keiden" },
          { label: "Partitiivi", form: "keitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kenen",
      en: "whose (genitive)",
      taso: "A1",
      esim: { fi: "Kenen takki tämä on?", en: "Whose jacket is this?" },
    },
    {
      fi: "kukaan",
      en: "anyone / (not) anyone",
      taso: "B1",
      esim: { fi: "Kukaan ei vastannut.", en: "No one answered." },
    },
    {
      fi: "joku",
      en: "someone",
      taso: "A2",
      esim: { fi: "Joku soitti sinulle.", en: "Someone called you." },
    },
  ],
  synonyymit: [
    { fi: "ken", en: "who (poetic/archaic)" },
    { fi: "mikä", en: "what/which (for things)" },
  ],
  esimerkit: {
    A2: { fi: "Kuka sinä olet?", en: "Who are you?" },
    B1: { fi: "Kenelle annoit avaimet?", en: "Who did you give the keys to?" },
    B2: {
      fi: "Kukaan ei tiennyt, kuka oli soittanut.",
      en: "No one knew who had called.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kuka;
