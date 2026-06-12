import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, kk:k gradation. Genitive takin,
// partitive takkia, illative takkiin, partitive pl takkeja, nom pl takit.
const takki: Word = {
  fi: "takki",
  slug: "takki",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "jacket, coat",
  selitys:
    "Päällysvaate ylävartalolle. Tyyppi 5, astevaihtelu kk:k (takki → takin). Yhdyssanat: talvitakki, sadetakki.",
  kuva: { alt: "takki – takki" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu kk:k",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "takin", merkitys: "of the jacket" },
      { sija: "partitiivi (yks.)", muoto: "takkia", merkitys: "jacket (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "takkeja", merkitys: "jackets (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa kk → k: takin, takissa, takit. Vahva aste säilyy: takkia, takkiin, takkeja.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "takki" },
          { label: "Partitiivi", form: "takkia" },
          { label: "Genetiivi", form: "takin" },
          { label: "Inessiivi", form: "takissa" },
          { label: "Elatiivi", form: "takista" },
          { label: "Illatiivi", form: "takkiin" },
          { label: "Adessiivi", form: "takilla" },
          { label: "Ablatiivi", form: "takilta" },
          { label: "Allatiivi", form: "takille" },
          { label: "Essiivi", form: "takkina" },
          { label: "Translatiivi", form: "takiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "takit" },
          { label: "Partitiivi", form: "takkeja" },
          { label: "Genetiivi", form: "takkien" },
          { label: "Inessiivi", form: "takeissa" },
          { label: "Illatiivi", form: "takkeihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "talvitakki",
      en: "winter coat",
      taso: "A2",
      esim: { fi: "Pue talvitakki, ulkona on kylmä.", en: "Put on your winter coat, it's cold outside." },
    },
    {
      fi: "sadetakki",
      en: "raincoat",
      taso: "B1",
      esim: { fi: "Otin sadetakin mukaan.", en: "I took a raincoat along." },
    },
    {
      fi: "takinkääntäjä",
      en: "turncoat (figurative)",
      taso: "B2",
      esim: { fi: "Poliitikkoa sanottiin takinkääntäjäksi.", en: "The politician was called a turncoat." },
    },
  ],
  synonyymit: [
    { fi: "päällystakki", en: "overcoat" },
    { fi: "jakku", en: "blazer, suit jacket" },
  ],
  esimerkit: {
    A2: { fi: "Missä minun takki on?", en: "Where is my jacket?" },
    B1: { fi: "Riisuin takin sisällä.", en: "I took off my jacket indoors." },
    B2: {
      fi: "Takki oli niin lämmin, ettei pakkanen tuntunut missään.",
      en: "The coat was so warm that the frost wasn't felt at all.",
    },
  },
  updatedAt: "2026-06-04",
};

export default takki;
