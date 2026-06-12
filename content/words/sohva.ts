import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Genitive sohvan,
// partitive sohvaa, illative sohvaan, partitive pl sohvia.
const sohva: Word = {
  fi: "sohva",
  slug: "sohva",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A1",
  en: "sofa, couch",
  selitys:
    "Pehmeä istuinkaluste usealle hengelle. Tyyppi 9, ei astevaihtelua.",
  kuva: { alt: "sohva – olohuoneen sohva" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sohvan", merkitys: "of the sofa" },
      { sija: "partitiivi (yks.)", muoto: "sohvaa", merkitys: "sofa (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sohvia", merkitys: "sofas (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Istua sohvalla' = sit on the sofa. Monikon partitiivi sohvia.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sohva" },
          { label: "Partitiivi", form: "sohvaa" },
          { label: "Genetiivi", form: "sohvan" },
          { label: "Inessiivi", form: "sohvassa" },
          { label: "Elatiivi", form: "sohvasta" },
          { label: "Illatiivi", form: "sohvaan" },
          { label: "Adessiivi", form: "sohvalla" },
          { label: "Ablatiivi", form: "sohvalta" },
          { label: "Allatiivi", form: "sohvalle" },
          { label: "Essiivi", form: "sohvana" },
          { label: "Translatiivi", form: "sohvaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sohvat" },
          { label: "Partitiivi", form: "sohvia" },
          { label: "Genetiivi", form: "sohvien" },
          { label: "Inessiivi", form: "sohvissa" },
          { label: "Illatiivi", form: "sohviin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sohvapöytä",
      en: "coffee table",
      taso: "B1",
      esim: { fi: "Lehti on sohvapöydällä.", en: "The magazine is on the coffee table." },
    },
    {
      fi: "vuodesohva",
      en: "sofa bed",
      taso: "B2",
      esim: { fi: "Vieras nukkui vuodesohvalla.", en: "The guest slept on the sofa bed." },
    },
    {
      fi: "sohvaryhmä",
      en: "living-room suite",
      taso: "B2",
      esim: { fi: "Ostimme uuden sohvaryhmän.", en: "We bought a new living-room suite." },
    },
  ],
  synonyymit: [
    { fi: "sohvakaluste", en: "couch (furniture)" },
    { fi: "leposohva", en: "lounge sofa" },
  ],
  esimerkit: {
    A2: { fi: "Istutaan sohvalle.", en: "Let's sit on the sofa." },
    B1: { fi: "Sohva on liian iso tähän huoneeseen.", en: "The sofa is too big for this room." },
    B2: {
      fi: "Vietimme illan sohvalla katsellen elokuvia.",
      en: "We spent the evening on the sofa watching movies.",
    },
  },
  updatedAt: "2026-06-05",
};

export default sohva;
