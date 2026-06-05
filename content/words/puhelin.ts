import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 33/kytkin, no gradation, consonant stem
// (n → m). Genitive puhelimen, partitive puhelinta, illative puhelimeen.
const puhelin: Word = {
  fi: "puhelin",
  slug: "puhelin",
  pos: "substantiivi (tyyppi 33/kytkin)",
  posClass: "substantiivi",
  level: "A1",
  en: "telephone, phone",
  selitys:
    "Laite puheluihin ja viesteihin. Tyyppi 33, ei astevaihtelua, mutta konsonanttivartalo: puhelin → puhelime-. Sanasta puhella + -in.",
  kuva: { emoji: "📱", alt: "puhelin – matkapuhelin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 33/kytkin; ei astevaihtelua, konsonanttivartalo (n → m)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "puhelimen", merkitys: "of the phone" },
      { sija: "partitiivi (yks.)", muoto: "puhelinta", merkitys: "phone (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "puhelimia", merkitys: "phones (partitive pl.)" },
    ],
    huom:
      "Nominatiivi puhelin, mutta vartalo puhelime-: puhelimen, puhelimeen, puhelimessa. Konsonanttivartalo näkyy partitiivissa puhelinta. Sama malli kuin avain.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "puhelin" },
          { label: "Partitiivi", form: "puhelinta" },
          { label: "Genetiivi", form: "puhelimen" },
          { label: "Inessiivi", form: "puhelimessa" },
          { label: "Elatiivi", form: "puhelimesta" },
          { label: "Illatiivi", form: "puhelimeen" },
          { label: "Adessiivi", form: "puhelimella" },
          { label: "Ablatiivi", form: "puhelimelta" },
          { label: "Allatiivi", form: "puhelimelle" },
          { label: "Essiivi", form: "puhelimena" },
          { label: "Translatiivi", form: "puhelimeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "puhelimet" },
          { label: "Partitiivi", form: "puhelimia" },
          { label: "Genetiivi", form: "puhelimien" },
          { label: "Inessiivi", form: "puhelimissa" },
          { label: "Illatiivi", form: "puhelimiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "matkapuhelin",
      en: "mobile phone",
      taso: "A2",
      esim: { fi: "Matkapuhelin on aina mukana.", en: "The mobile phone is always with me." },
    },
    {
      fi: "puhelinnumero",
      en: "phone number",
      taso: "A2",
      esim: { fi: "Anna minulle puhelinnumerosi.", en: "Give me your phone number." },
    },
    {
      fi: "älypuhelin",
      en: "smartphone",
      taso: "B1",
      esim: { fi: "Uusi älypuhelin oli kallis.", en: "The new smartphone was expensive." },
    },
  ],
  synonyymit: [
    { fi: "kännykkä", en: "cellphone (colloquial)" },
    { fi: "luuri", en: "phone (slang)" },
  ],
  esimerkit: {
    A2: { fi: "Puhelin soi koko ajan.", en: "The phone rings all the time." },
    B1: { fi: "Unohdin puhelimen kotiin.", en: "I forgot the phone at home." },
    B2: {
      fi: "Puhelimen akku loppui kesken tärkeän puhelun.",
      en: "The phone's battery died in the middle of an important call.",
    },
  },
  updatedAt: "2026-06-05",
};

export default puhelin;
