import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti with t:d gradation.
// Weak grade d in closed syllables (äidin, äidillä), strong t in open syllables
// (äitiä, äitiin). Partitive pl äitejä, genitive pl äitien.
const äiti: Word = {
  fi: "äiti",
  slug: "äiti",
  pos: "substantiivi (tyyppi: risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "mother, mom",
  selitys:
    "Naispuolinen vanhempi. Astevaihtelu t:d — äiti → äidin. Heikko aste (d) umpitavussa, vahva (t) avotavussa.",
  kuva: { alt: "äiti – naispuolinen vanhempi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu t:d (äiti → äidin)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "äitiä", merkitys: "mother (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "äidin", merkitys: "of the mother" },
      { sija: "partitiivi (mon.)", muoto: "äitejä", merkitys: "mothers (partitive pl.)" },
    ],
    huom:
      "Heikko aste d esiintyy umpitavussa (äidin, äidit, äidillä), vahva t avotavussa (äitiä, äitiin). Monikon genetiivi äitien.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "äiti" },
          { label: "Partitiivi", form: "äitiä" },
          { label: "Genetiivi", form: "äidin" },
          { label: "Inessiivi", form: "äidissä" },
          { label: "Elatiivi", form: "äidistä" },
          { label: "Illatiivi", form: "äitiin" },
          { label: "Adessiivi", form: "äidillä" },
          { label: "Ablatiivi", form: "äidiltä" },
          { label: "Allatiivi", form: "äidille" },
          { label: "Essiivi", form: "äitinä" },
          { label: "Translatiivi", form: "äidiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "äidit" },
          { label: "Partitiivi", form: "äitejä" },
          { label: "Genetiivi", form: "äitien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "äidinkieli",
      en: "mother tongue, native language",
      taso: "A2",
      esim: { fi: "Hänen äidinkielensä on suomi.", en: "His/her mother tongue is Finnish." },
    },
    {
      fi: "äidillinen",
      en: "motherly, maternal",
      taso: "B1",
      esim: { fi: "Opettaja oli hyvin äidillinen.", en: "The teacher was very motherly." },
    },
    {
      fi: "äitienpäivä",
      en: "Mother's Day",
      taso: "A2",
      esim: { fi: "Vietämme äitienpäivää toukokuussa.", en: "We celebrate Mother's Day in May." },
    },
  ],
  synonyymit: [
    { fi: "emo", en: "mother (esp. of animals)" },
    { fi: "mamma", en: "mum, mom (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Äitini on opettaja.", en: "My mother is a teacher." },
    B1: { fi: "Soitan äidilleni joka viikko.", en: "I call my mother every week." },
    B2: {
      fi: "Äidin ja lapsen suhde on ainutlaatuinen.",
      en: "The bond between a mother and child is unique.",
    },
  },
  updatedAt: "2026-06-04",
};

export default äiti;
