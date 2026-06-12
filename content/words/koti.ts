import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti with t:d gradation. Weak d in
// closed syllables (kodin, kodissa), strong t in open (kotia, kotiin). Note the
// special locative adverbs kotona / kotiin / kotoa used in everyday speech.
const koti: Word = {
  fi: "koti",
  slug: "koti",
  pos: "substantiivi (tyyppi: risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "home",
  selitys:
    "Paikka, jossa ihminen asuu ja tuntee olonsa kotoisaksi. Astevaihtelu t:d (koti → kodin).",
  kuva: { alt: "koti – talo, jossa asutaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu t:d (koti → kodin)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kotia", merkitys: "home (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kodin", merkitys: "of the home" },
      { sija: "partitiivi (mon.)", muoto: "koteja", merkitys: "homes (partitive pl.)" },
    ],
    huom:
      "Arkikielessä käytetään erityisiä paikallismuotoja: kotona (at home), kotiin (to home), kotoa (from home). Heikko d umpitavussa (kodin), vahva t avotavussa (kotia).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "koti" },
          { label: "Partitiivi", form: "kotia" },
          { label: "Genetiivi", form: "kodin" },
          { label: "Inessiivi", form: "kodissa" },
          { label: "Elatiivi", form: "kodista" },
          { label: "Illatiivi", form: "kotiin" },
          { label: "Adessiivi", form: "kodilla" },
          { label: "Ablatiivi", form: "kodilta" },
          { label: "Allatiivi", form: "kodille" },
          { label: "Essiivi", form: "kotina" },
          { label: "Translatiivi", form: "kodiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kodit" },
          { label: "Partitiivi", form: "koteja" },
          { label: "Genetiivi", form: "kotien" },
          { label: "Illatiivi", form: "koteihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kotimaa",
      en: "home country",
      taso: "B1",
      esim: { fi: "Suomi on hänen kotimaansa.", en: "Finland is his home country." },
    },
    {
      fi: "koti-ikävä",
      en: "homesickness",
      taso: "B1",
      esim: { fi: "Minulla oli koti-ikävä ulkomailla.", en: "I was homesick abroad." },
    },
    {
      fi: "kotiutua",
      en: "to settle in, feel at home",
      taso: "B2",
      esim: { fi: "Kotiuduin uuteen kaupunkiin nopeasti.", en: "I settled into the new city quickly." },
    },
  ],
  synonyymit: [
    { fi: "asunto", en: "home, apartment (the dwelling)" },
    { fi: "kotiseutu", en: "home region" },
  ],
  esimerkit: {
    A2: { fi: "Tunnen oloni kotona turvalliseksi.", en: "I feel safe at home." },
    B1: { fi: "Tulen kotiin myöhään illalla.", en: "I'll come home late in the evening." },
    B2: {
      fi: "Koti on enemmän kuin pelkkä rakennus.",
      en: "A home is more than just a building.",
    },
  },
  updatedAt: "2026-06-04",
};

export default koti;
