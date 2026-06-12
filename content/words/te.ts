import type { Word } from "@/lib/content-types";

// Personal pronoun, 2nd person plural (and polite singular). Verified against
// Wiktionary: genitive teidän, partitive teitä, illative teihin. Singular is "sinä".
const te: Word = {
  fi: "te",
  slug: "te",
  pos: "pronomini (persoonapronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "you (plural / polite)",
  selitys:
    "Monikon 2. persoonan pronomini; myös kohtelias yksikkö (teitittely). Genetiivi teidän = your/yours. Tuttavallinen yksikkö on sinä.",
  kuva: { alt: "te – osoitetaan useaa puhuteltavaa" },

  kielioppi: {
    tyyppi: "persoonapronomini, monikon 2. persoona (myös teitittely)",
    muodot: [
      { sija: "genetiivi", muoto: "teidän", merkitys: "your, yours (pl./polite)" },
      { sija: "partitiivi", muoto: "teitä", merkitys: "you (partitive)" },
      { sija: "allatiivi", muoto: "teille", merkitys: "to you" },
    ],
    huom:
      "Teitittely: kohteliaasti yhdellekin henkilölle 'te' + monikon verbi ('Mitä te haluatte?'). Verbi monikon 2. persoonassa: te menette. Puhekieli: te, teiän.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (monikko)",
        rows: [
          { label: "Nominatiivi", form: "te" },
          { label: "Genetiivi", form: "teidän" },
          { label: "Partitiivi", form: "teitä" },
          { label: "Inessiivi", form: "teissä" },
          { label: "Elatiivi", form: "teistä" },
          { label: "Illatiivi", form: "teihin" },
          { label: "Adessiivi", form: "teillä" },
          { label: "Ablatiivi", form: "teiltä" },
          { label: "Allatiivi", form: "teille" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sinä",
      en: "you (the singular of te)",
      taso: "A1",
      esim: { fi: "Sinä olet oikeassa.", en: "You are right." },
    },
    {
      fi: "teidän",
      en: "your, yours (genitive)",
      taso: "A1",
      esim: { fi: "Onko tämä teidän talonne?", en: "Is this your house?" },
    },
    {
      fi: "teititellä",
      en: "to address politely (with te)",
      taso: "B2",
      esim: { fi: "Vanhempia ihmisiä voi teititellä.", en: "You can address older people politely." },
    },
  ],
  synonyymit: [
    { fi: "te kaikki", en: "all of you" },
    { fi: "sinä", en: "you (informal singular)" },
  ],
  esimerkit: {
    A2: { fi: "Mistä te tulette?", en: "Where do you (all) come from?" },
    B1: { fi: "Voinko auttaa teitä?", en: "Can I help you?" },
    B2: {
      fi: "Teidän kannattaisi varata liput etukäteen.",
      en: "You should book the tickets in advance.",
    },
  },
  updatedAt: "2026-06-05",
};

export default te;
