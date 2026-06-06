import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, kk:k gradation, stem kukka- ~ kuka-.
// Genitive kukan, partitive kukkaa, illative kukkaan, partitive pl kukkia.
const kukka: Word = {
  fi: "kukka",
  slug: "kukka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "flower",
  selitys:
    "Kasvin värikäs lisääntymiselin tai koristekasvi: 'antaa kukkia'. Tyyppi 9, astevaihtelu kk:k (kukka → kukan). Partitiivin monikko kukkia. Vrt. kukkakauppa (flower shop), kukkia (to bloom).",
  kuva: { emoji: "🌸", alt: "kukka – kasvin värikäs osa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu kk:k (kukka ↔ kuka-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kukan", merkitys: "of the flower" },
      { sija: "partitiivi (yks.)", muoto: "kukkaa", merkitys: "flower (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kukkia", merkitys: "flowers (partitive pl.)" },
    ],
    huom:
      "Heikossa asteessa kk → k: genetiivi kukan, adessiivi kukalla. Vahva aste kk säilyy partitiivissa kukkaa ja monikossa kukkia. Vrt. kukkakimppu = bouquet, kukkia = to bloom.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kukka" },
          { label: "Partitiivi", form: "kukkaa" },
          { label: "Genetiivi", form: "kukan" },
          { label: "Inessiivi", form: "kukassa" },
          { label: "Elatiivi", form: "kukasta" },
          { label: "Illatiivi", form: "kukkaan" },
          { label: "Adessiivi", form: "kukalla" },
          { label: "Ablatiivi", form: "kukalta" },
          { label: "Allatiivi", form: "kukalle" },
          { label: "Essiivi", form: "kukkana" },
          { label: "Translatiivi", form: "kukaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kukat" },
          { label: "Partitiivi", form: "kukkia" },
          { label: "Genetiivi", form: "kukkien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kukkakauppa",
      en: "flower shop, florist",
      taso: "A2",
      esim: { fi: "Ostin ruusuja kukkakaupasta.", en: "I bought roses from the flower shop." },
    },
    {
      fi: "kukkia",
      en: "to bloom, flower",
      taso: "B1",
      esim: { fi: "Omenapuut kukkivat keväällä.", en: "The apple trees bloom in spring." },
    },
    {
      fi: "kukkakimppu",
      en: "bouquet",
      taso: "B1",
      esim: { fi: "Sain kauniin kukkakimpun.", en: "I got a beautiful bouquet." },
    },
  ],
  synonyymit: [
    { fi: "kukkanen", en: "little flower, blossom" },
    { fi: "kukinto", en: "inflorescence, bloom" },
  ],
  esimerkit: {
    A2: { fi: "Annoin äidille kukkia.", en: "I gave my mother flowers." },
    B1: { fi: "Puutarhassa kasvaa kauniita kukkia.", en: "Beautiful flowers grow in the garden." },
    B2: {
      fi: "Keväällä koko niitty peittyy keltaisiin kukkiin.",
      en: "In spring the whole meadow is covered in yellow flowers.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kukka;
