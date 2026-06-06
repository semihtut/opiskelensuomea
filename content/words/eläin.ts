import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 33/kytkin, no gradation, stem eläime-.
// Genitive eläimen, partitive eläintä, illative eläimeen, partitive pl eläimiä.
const elain: Word = {
  fi: "eläin",
  slug: "eläin",
  pos: "substantiivi (tyyppi 33/kytkin)",
  posClass: "substantiivi",
  level: "A2",
  en: "animal",
  selitys:
    "Elävä olento, joka ei ole kasvi eikä ihminen (arkikielessä): 'villi eläin'. Tyyppi 33, ei astevaihtelua, vartalo eläime-. Partitiivi eläintä. Johdettu sanasta elää. Vrt. eläinlääkäri (vet), lemmikkieläin (pet).",
  kuva: { emoji: "🐾", alt: "eläin – elävä olento" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 33/kytkin; ei astevaihtelua (vartalo eläime-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "eläimen", merkitys: "of the animal" },
      { sija: "partitiivi (yks.)", muoto: "eläintä", merkitys: "animal (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "eläimiä", merkitys: "animals (partitive pl.)" },
    ],
    huom:
      "Nominatiivi -in, mutta vartalo -ime-: eläin → eläimen, eläimiä. Partitiivi eläintä. Vrt. eläintarha = zoo, kotieläin = domestic animal.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "eläin" },
          { label: "Partitiivi", form: "eläintä" },
          { label: "Genetiivi", form: "eläimen" },
          { label: "Inessiivi", form: "eläimessä" },
          { label: "Elatiivi", form: "eläimestä" },
          { label: "Illatiivi", form: "eläimeen" },
          { label: "Adessiivi", form: "eläimellä" },
          { label: "Ablatiivi", form: "eläimeltä" },
          { label: "Allatiivi", form: "eläimelle" },
          { label: "Essiivi", form: "eläimenä" },
          { label: "Translatiivi", form: "eläimeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "eläimet" },
          { label: "Partitiivi", form: "eläimiä" },
          { label: "Genetiivi", form: "eläinten / eläimien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "eläinlääkäri",
      en: "veterinarian",
      taso: "B1",
      esim: { fi: "Vein kissan eläinlääkäriin.", en: "I took the cat to the vet." },
    },
    {
      fi: "lemmikkieläin",
      en: "pet",
      taso: "B1",
      esim: { fi: "Koira on suosittu lemmikkieläin.", en: "The dog is a popular pet." },
    },
    {
      fi: "eläintarha",
      en: "zoo",
      taso: "B1",
      esim: { fi: "Kävimme eläintarhassa.", en: "We visited the zoo." },
    },
  ],
  synonyymit: [
    { fi: "otus", en: "creature, critter" },
    { fi: "elukka", en: "beast, animal (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on lempieläimesi?", en: "What is your favorite animal?" },
    B1: { fi: "Metsässä elää monenlaisia eläimiä.", en: "Many kinds of animals live in the forest." },
    B2: {
      fi: "Villieläimiä ei saa ruokkia, koska se muuttaa niiden käytöstä.",
      en: "Wild animals must not be fed, because it changes their behavior.",
    },
  },
  updatedAt: "2026-06-06",
};

export default elain;
