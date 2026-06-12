import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem sana-.
// Genitive sanan, partitive sanaa, illative sanaan, partitive pl sanoja.
const sana: Word = {
  fi: "sana",
  slug: "sana",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "word",
  selitys:
    "Kielen pienin itsenäinen merkitysyksikkö: 'vaikea sana'. Tyyppi 9, ei astevaihtelua. Partitiivin monikko a → o: sanoja. Vrt. sanoa (to say), sanasto (vocabulary).",
  kuva: { alt: "sana – kielen merkitysyksikkö" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sanan", merkitys: "of the word" },
      { sija: "partitiivi (yks.)", muoto: "sanaa", merkitys: "word (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sanoja", merkitys: "words (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikossa a → o: sanoja. 'Toisin sanoen' = in other words. Vrt. sananlasku (proverb), sanakirja (dictionary).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sana" },
          { label: "Partitiivi", form: "sanaa" },
          { label: "Genetiivi", form: "sanan" },
          { label: "Inessiivi", form: "sanassa" },
          { label: "Elatiivi", form: "sanasta" },
          { label: "Illatiivi", form: "sanaan" },
          { label: "Adessiivi", form: "sanalla" },
          { label: "Ablatiivi", form: "sanalta" },
          { label: "Allatiivi", form: "sanalle" },
          { label: "Essiivi", form: "sanana" },
          { label: "Translatiivi", form: "sanaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sanat" },
          { label: "Partitiivi", form: "sanoja" },
          { label: "Genetiivi", form: "sanojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sanakirja",
      en: "dictionary",
      taso: "A2",
      esim: { fi: "Etsin sanan sanakirjasta.", en: "I looked up the word in the dictionary." },
    },
    {
      fi: "sanasto",
      en: "vocabulary, glossary",
      taso: "B1",
      esim: { fi: "Suomen sanasto on laaja.", en: "Finnish vocabulary is extensive." },
    },
    {
      fi: "sananlasku",
      en: "proverb",
      taso: "B2",
      esim: { fi: "Vanha sananlasku pitää yhä paikkansa.", en: "The old proverb still holds true." },
    },
  ],
  synonyymit: [
    { fi: "termi", en: "term" },
    { fi: "ilmaus", en: "expression" },
  ],
  esimerkit: {
    A2: { fi: "En ymmärrä tätä sanaa.", en: "I don't understand this word." },
    B1: { fi: "Hän selitti asian muutamalla sanalla.", en: "He explained the matter in a few words." },
    B2: {
      fi: "Toisin sanoen sopimus ei sido kumpaakaan osapuolta.",
      en: "In other words, the contract binds neither party.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sana;
