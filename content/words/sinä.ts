import type { Word } from "@/lib/content-types";

// Personal pronoun, 2nd person singular. Verified against Wiktionary: genitive
// sinun, partitive sinua, illative sinuun. Plural / polite counterpart is "te".
const sina: Word = {
  fi: "sinä",
  slug: "sinä",
  pos: "pronomini (persoonapronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "you (singular)",
  selitys:
    "Yksikön 2. persoonan pronomini (puhuteltava). Genetiivi sinun = your/yours. Kohteliaasti tai monikossa: te. Puhekielessä 'sä'.",
  kuva: { emoji: "👉", alt: "sinä – osoitetaan puhuteltavaa" },

  kielioppi: {
    tyyppi: "persoonapronomini, yksikön 2. persoona",
    muodot: [
      { sija: "genetiivi", muoto: "sinun", merkitys: "your, yours" },
      { sija: "partitiivi", muoto: "sinua", merkitys: "you (partitive)" },
      { sija: "allatiivi", muoto: "sinulle", merkitys: "to you" },
    ],
    huom:
      "Teitittely: vieraalle tai kohteliaasti käytetään 'te'. Verbi näyttää persoonan, joten 'sinä' voi jäädä pois: '(Sinä) olet oikeassa.' Puhekieli: sä, sun, sua.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (yksikkö)",
        rows: [
          { label: "Nominatiivi", form: "sinä" },
          { label: "Genetiivi", form: "sinun" },
          { label: "Partitiivi", form: "sinua" },
          { label: "Inessiivi", form: "sinussa" },
          { label: "Elatiivi", form: "sinusta" },
          { label: "Illatiivi", form: "sinuun" },
          { label: "Adessiivi", form: "sinulla" },
          { label: "Ablatiivi", form: "sinulta" },
          { label: "Allatiivi", form: "sinulle" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "te",
      en: "you (plural / polite)",
      taso: "A1",
      esim: { fi: "Mistä te tulette?", en: "Where do you come from?" },
    },
    {
      fi: "sinun",
      en: "your, yours (genitive)",
      taso: "A1",
      esim: { fi: "Onko tämä sinun takkisi?", en: "Is this your jacket?" },
    },
    {
      fi: "sinutella",
      en: "to address informally (with sinä)",
      taso: "B2",
      esim: { fi: "Suomessa sinutellaan helposti.", en: "In Finland people use first names easily." },
    },
  ],
  synonyymit: [
    { fi: "sä", en: "you (colloquial)" },
    { fi: "te", en: "you (polite singular)" },
  ],
  esimerkit: {
    A2: { fi: "Mitä sinä teet tänään?", en: "What are you doing today?" },
    B1: { fi: "Sinun pitäisi levätä enemmän.", en: "You should rest more." },
    B2: {
      fi: "Sinusta tulee vielä hyvä opettaja.",
      en: "You will yet become a good teacher.",
    },
  },
  updatedAt: "2026-06-05",
};

export default sina;
