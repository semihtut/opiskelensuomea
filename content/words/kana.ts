import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem kana-.
// Genitive kanan, partitive kanaa, illative kanaan, partitive pl kanoja.
const kana: Word = {
  fi: "kana",
  slug: "kana",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "hen, chicken",
  selitys:
    "Kotieläin, joka munii munia, tai sen liha ruokana: 'paistettu kana'. Tyyppi 9, ei astevaihtelua. Partitiivin monikko kanoja. Vrt. kananmuna (egg), broileri (broiler chicken), kukko (rooster).",
  kuva: { emoji: "🐔", alt: "kana – kotieläin, joka munii munia" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kanan", merkitys: "of the hen" },
      { sija: "partitiivi (yks.)", muoto: "kanaa", merkitys: "chicken (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kanoja", merkitys: "hens (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9, ei astevaihtelua. Partitiivin monikossa a → o: kanoja. Tarkoittaa sekä elävää kanaa että ruokaa (kananliha). Vrt. kananmuna = egg, broileri = broiler.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kana" },
          { label: "Partitiivi", form: "kanaa" },
          { label: "Genetiivi", form: "kanan" },
          { label: "Inessiivi", form: "kanassa" },
          { label: "Elatiivi", form: "kanasta" },
          { label: "Illatiivi", form: "kanaan" },
          { label: "Adessiivi", form: "kanalla" },
          { label: "Ablatiivi", form: "kanalta" },
          { label: "Allatiivi", form: "kanalle" },
          { label: "Essiivi", form: "kanana" },
          { label: "Translatiivi", form: "kanaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kanat" },
          { label: "Partitiivi", form: "kanoja" },
          { label: "Genetiivi", form: "kanojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kananmuna",
      en: "egg (hen's egg)",
      taso: "A2",
      esim: { fi: "Keitin kaksi kananmunaa.", en: "I boiled two eggs." },
    },
    {
      fi: "broileri",
      en: "broiler chicken",
      taso: "B1",
      esim: { fi: "Ostin broileria salaattiin.", en: "I bought broiler chicken for the salad." },
    },
    {
      fi: "kanala",
      en: "henhouse, poultry farm",
      taso: "B2",
      esim: { fi: "Munat tulevat lähikanalasta.", en: "The eggs come from the local poultry farm." },
    },
  ],
  synonyymit: [
    { fi: "broileri", en: "broiler (chicken meat)" },
    { fi: "kananpoika", en: "chick, young chicken" },
  ],
  esimerkit: {
    A2: { fi: "Syömme kanaa ja riisiä.", en: "We're eating chicken and rice." },
    B1: { fi: "Kana pitää kypsentää kunnolla.", en: "Chicken must be cooked thoroughly." },
    B2: {
      fi: "Maatilalla kanat saavat kävellä vapaasti ulkona.",
      en: "On the farm the hens are free to walk outside.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kana;
