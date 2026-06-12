import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, t:d gradation, stem hoito- ~ hoido-.
// Genitive hoidon, partitive hoitoa, partitive pl hoitoja.
const hoito: Word = {
  fi: "hoito",
  slug: "hoito",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "care, treatment",
  selitys:
    "Huolenpito tai sairauden hoitaminen: 'saada hyvää hoitoa'. Tyyppi 1/valo, astevaihtelu t:d (hoito → hoidon). Johdettu verbistä hoitaa. Vrt. hoitaa, hoitaja, terveydenhoito.",
  kuva: { alt: "hoito – huolenpito tai sairauden hoitaminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu t:d (vartalo hoido-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hoidon", merkitys: "of the care" },
      { sija: "partitiivi (yks.)", muoto: "hoitoa", merkitys: "care (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hoitoja", merkitys: "treatments (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu t:d: nominatiivi hoito (vahva t), genetiivi hoidon (heikko d). Partitiivin monikko hoitoja. Johdettu verbistä hoitaa. 'Saada hoitoa' = to receive care. Vrt. hoitaa = to treat/take care, hoitaja = nurse.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hoito" },
          { label: "Partitiivi", form: "hoitoa" },
          { label: "Genetiivi", form: "hoidon" },
          { label: "Inessiivi", form: "hoidossa" },
          { label: "Elatiivi", form: "hoidosta" },
          { label: "Illatiivi", form: "hoitoon" },
          { label: "Adessiivi", form: "hoidolla" },
          { label: "Ablatiivi", form: "hoidolta" },
          { label: "Allatiivi", form: "hoidolle" },
          { label: "Essiivi", form: "hoitona" },
          { label: "Translatiivi", form: "hoidoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hoidot" },
          { label: "Partitiivi", form: "hoitoja" },
          { label: "Genetiivi", form: "hoitojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hoitaa",
      en: "to treat, take care of",
      taso: "B1",
      esim: { fi: "Lääkäri hoitaa potilasta.", en: "The doctor treats the patient." },
    },
    {
      fi: "hoitaja",
      en: "nurse, carer",
      taso: "B1",
      esim: { fi: "Hoitaja antoi lääkkeen.", en: "The nurse gave the medicine." },
    },
    {
      fi: "terveydenhoito",
      en: "health care",
      taso: "B2",
      esim: { fi: "Terveydenhoito on tärkeää.", en: "Health care is important." },
    },
  ],
  synonyymit: [
    { fi: "huolenpito", en: "care, nurturing" },
    { fi: "hoiva", en: "care, nursing" },
  ],
  esimerkit: {
    A2: { fi: "Hän tarvitsee hoitoa.", en: "She needs care." },
    B1: { fi: "Potilas sai hyvää hoitoa.", en: "The patient received good care." },
    B2: {
      fi: "Varhainen hoito parantaa toipumisen mahdollisuuksia merkittävästi.",
      en: "Early treatment significantly improves the chances of recovery.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hoito;
