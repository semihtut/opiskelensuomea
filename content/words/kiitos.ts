import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem kiitokse-.
// Partitive kiitosta, genitive kiitoksen. Also an interjection: "thank you".
const kiitos: Word = {
  fi: "kiitos",
  slug: "kiitos",
  pos: "substantiivi (tyyppi: vastaus) / interjektio",
  posClass: "substantiivi",
  level: "A1",
  en: "thanks, thank you",
  selitys:
    "Kohtelias sana, jolla osoitetaan kiitollisuutta. Myös substantiivi (kiitos, vartalo kiitokse-). Voi tarkoittaa myös 'kyllä, kiitos' tai 'ei, kiitos'.",
  kuva: { alt: "kiitos – kiitollisuuden ele" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo kiitokse-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "kiitosta", merkitys: "thanks (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "kiitoksen", merkitys: "of the thanks" },
      { sija: "partitiivi (mon.)", muoto: "kiitoksia", merkitys: "thanks (partitive pl.)" },
    ],
    huom:
      "Interjektiona: 'Kiitos!' = Thank you. 'Kiitos paljon' / 'Paljon kiitoksia' = Thank you very much. Substantiivin vartalo kiitokse-.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kiitos" },
          { label: "Partitiivi", form: "kiitosta" },
          { label: "Genetiivi", form: "kiitoksen" },
          { label: "Inessiivi", form: "kiitoksessa" },
          { label: "Elatiivi", form: "kiitoksesta" },
          { label: "Illatiivi", form: "kiitokseen" },
          { label: "Adessiivi", form: "kiitoksella" },
          { label: "Ablatiivi", form: "kiitokselta" },
          { label: "Allatiivi", form: "kiitokselle" },
          { label: "Essiivi", form: "kiitoksena" },
          { label: "Translatiivi", form: "kiitokseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kiitokset" },
          { label: "Partitiivi", form: "kiitoksia" },
          { label: "Genetiivi", form: "kiitosten" },
          { label: "Illatiivi", form: "kiitoksiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kiittää",
      en: "to thank",
      taso: "A2",
      esim: { fi: "Haluan kiittää sinua avusta.", en: "I want to thank you for the help." },
    },
    {
      fi: "kiitollinen",
      en: "grateful, thankful",
      taso: "B1",
      esim: { fi: "Olen kiitollinen tuestasi.", en: "I'm grateful for your support." },
    },
    {
      fi: "kiitollisuus",
      en: "gratitude",
      taso: "B2",
      esim: { fi: "Hän tunsi suurta kiitollisuutta.", en: "He felt great gratitude." },
    },
  ],
  synonyymit: [
    { fi: "kiitoksia", en: "thanks (plural form)" },
    { fi: "kiitti", en: "thanks (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Kiitos avusta!", en: "Thanks for the help!" },
    B1: { fi: "Sain ystävältäni lämpimät kiitokset.", en: "I received warm thanks from my friend." },
    B2: {
      fi: "Hän ansaitsee kiitoksen pitkästä ja uskollisesta työstä.",
      en: "He deserves thanks for long and loyal work.",
    },
  },
  updatedAt: "2026-06-04",
};

export default kiitos;
