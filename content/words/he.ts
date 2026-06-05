import type { Word } from "@/lib/content-types";

// Personal pronoun, 3rd person plural (of people). Verified against Wiktionary:
// genitive heidän, partitive heitä, illative heihin. Singular is "hän".
const he: Word = {
  fi: "he",
  slug: "he",
  pos: "pronomini (persoonapronomini)",
  posClass: "pronomini",
  level: "A1",
  en: "they (of people)",
  selitys:
    "Monikon 3. persoonan pronomini ihmisistä. Genetiivi heidän = their/theirs. Yksikkö on hän. Esineistä ja eläimistä käytetään 'ne'.",
  kuva: { emoji: "👫", alt: "he – ryhmä muita ihmisiä" },

  kielioppi: {
    tyyppi: "persoonapronomini, monikon 3. persoona",
    muodot: [
      { sija: "genetiivi", muoto: "heidän", merkitys: "their, theirs" },
      { sija: "partitiivi", muoto: "heitä", merkitys: "them (partitive)" },
      { sija: "allatiivi", muoto: "heille", merkitys: "to them" },
    ],
    huom:
      "'He' viittaa ihmisiin; esineistä ja eläimistä käytetään 'ne'. Puhekielessä ihmisistäkin usein 'ne'. Verbi monikon 3. persoonassa: he menevät.",
  },
  taivutus: {
    sections: [
      {
        title: "Sijamuodot (monikko)",
        rows: [
          { label: "Nominatiivi", form: "he" },
          { label: "Genetiivi", form: "heidän" },
          { label: "Partitiivi", form: "heitä" },
          { label: "Inessiivi", form: "heissä" },
          { label: "Elatiivi", form: "heistä" },
          { label: "Illatiivi", form: "heihin" },
          { label: "Adessiivi", form: "heillä" },
          { label: "Ablatiivi", form: "heiltä" },
          { label: "Allatiivi", form: "heille" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hän",
      en: "he/she (the singular of he)",
      taso: "A1",
      esim: { fi: "Hän on opettaja.", en: "He/she is a teacher." },
    },
    {
      fi: "heidän",
      en: "their, theirs (genitive)",
      taso: "A1",
      esim: { fi: "Tämä on heidän talonsa.", en: "This is their house." },
    },
    {
      fi: "ne",
      en: "they (of things/animals)",
      taso: "A2",
      esim: { fi: "Ostin omenat; ne olivat hyviä.", en: "I bought the apples; they were good." },
    },
  ],
  synonyymit: [
    { fi: "ne", en: "they (colloquial, of people)" },
    { fi: "nämä", en: "these (present people)" },
  ],
  esimerkit: {
    A2: { fi: "He ovat hyviä ystäviä.", en: "They are good friends." },
    B1: { fi: "Annoin heille avaimet.", en: "I gave them the keys." },
    B2: {
      fi: "Heistä tuntui, että matka oli ollut vaivan arvoinen.",
      en: "They felt that the trip had been worth the effort.",
    },
  },
  updatedAt: "2026-06-05",
};

export default he;
