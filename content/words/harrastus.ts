import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem harrastukse-.
// Genitive harrastuksen, partitive harrastusta, illative harrastukseen, partitive pl harrastuksia.
const harrastus: Word = {
  fi: "harrastus",
  slug: "harrastus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "hobby, pastime",
  selitys:
    "Vapaa-ajan toiminta huviksi: 'mukava harrastus'. Tyyppi 39, verbijohdos sanasta harrastaa (-us → -ukse-), ei astevaihtelua. Vrt. harrastaa (to do as a hobby), harrastaja (hobbyist).",
  kuva: { emoji: "🎨", alt: "harrastus – vapaa-ajan toiminta huviksi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; verbijohdos (-us → -ukse-); ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "harrastuksen", merkitys: "of the hobby" },
      { sija: "partitiivi (yks.)", muoto: "harrastusta", merkitys: "hobby (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "harrastuksia", merkitys: "hobbies (partitive pl.)" },
    ],
    huom:
      "Vartalo -ukse-: harrastus → harrastuksen, mutta partitiivi harrastusta. 'Mikä on harrastuksesi?' = What is your hobby? Vrt. harrastaa = to pursue (as a hobby).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "harrastus" },
          { label: "Partitiivi", form: "harrastusta" },
          { label: "Genetiivi", form: "harrastuksen" },
          { label: "Inessiivi", form: "harrastuksessa" },
          { label: "Elatiivi", form: "harrastuksesta" },
          { label: "Illatiivi", form: "harrastukseen" },
          { label: "Adessiivi", form: "harrastuksella" },
          { label: "Ablatiivi", form: "harrastukselta" },
          { label: "Allatiivi", form: "harrastukselle" },
          { label: "Essiivi", form: "harrastuksena" },
          { label: "Translatiivi", form: "harrastukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "harrastukset" },
          { label: "Partitiivi", form: "harrastuksia" },
          { label: "Genetiivi", form: "harrastusten / harrastuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "harrastaa",
      en: "to do (as a hobby), pursue",
      taso: "B1",
      esim: { fi: "Harrastan valokuvausta.", en: "Photography is my hobby." },
    },
    {
      fi: "harrastaja",
      en: "hobbyist, amateur enthusiast",
      taso: "B2",
      esim: { fi: "Hän on innokas harrastaja.", en: "He is a keen hobbyist." },
    },
    {
      fi: "harrastuneisuus",
      en: "interest, devotion to a pursuit",
      taso: "B2",
      esim: { fi: "Hänen harrastuneisuutensa musiikkiin on suuri.", en: "His devotion to music is great." },
    },
  ],
  synonyymit: [
    { fi: "ajanviete", en: "pastime" },
    { fi: "vapaa-ajan toiminta", en: "leisure activity" },
  ],
  esimerkit: {
    A2: { fi: "Lukeminen on lempiharrastukseni.", en: "Reading is my favorite hobby." },
    B1: { fi: "Minulla on monta harrastusta.", en: "I have many hobbies." },
    B2: {
      fi: "Uusi harrastus toi hänen elämäänsä paljon uusia ystäviä.",
      en: "The new hobby brought many new friends into his life.",
    },
  },
  updatedAt: "2026-06-06",
};

export default harrastus;
