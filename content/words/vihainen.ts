import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation. Genitive
// vihaisen, partitive vihaista, illative vihaiseen, partitive pl vihaisia.
const vihainen: Word = {
  fi: "vihainen",
  slug: "vihainen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A2",
  en: "angry",
  selitys:
    "Tunne, jossa on kiukkuinen ja ärtynyt olo. Tyyppi 38, ei astevaihtelua. Juuri substantiivista viha.",
  kuva: { emoji: "😠", alt: "vihainen – vihainen, kulmiaan kurtistava ihminen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vihaisen", merkitys: "of the angry" },
      { sija: "partitiivi (yks.)", muoto: "vihaista", merkitys: "angry (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vihaisia", merkitys: "angry (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -is-: vihainen → vihaisen, vihaista. 'Olla vihainen jollekin' = be angry at someone.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "vihainen" },
          { label: "Partitiivi", form: "vihaista" },
          { label: "Genetiivi", form: "vihaisen" },
          { label: "Inessiivi", form: "vihaisessa" },
          { label: "Illatiivi", form: "vihaiseen" },
          { label: "Adessiivi", form: "vihaisella" },
          { label: "Essiivi", form: "vihaisena" },
          { label: "Translatiivi", form: "vihaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vihaiset" },
          { label: "Partitiivi", form: "vihaisia" },
          { label: "Genetiivi", form: "vihaisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "vihaisempi" },
          { label: "Komparatiivi (gen.)", form: "vihaisemman" },
          { label: "Superlatiivi (nom.)", form: "vihaisin" },
          { label: "Superlatiivi (gen.)", form: "vihaisimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "viha",
      en: "hatred, anger",
      taso: "B1",
      esim: { fi: "Hänen äänessään oli vihaa.", en: "There was anger in his voice." },
    },
    {
      fi: "vihastua",
      en: "to get angry",
      taso: "B2",
      esim: { fi: "Hän vihastui kommentista.", en: "She got angry at the comment." },
    },
    {
      fi: "suuttua",
      en: "to get cross, lose one's temper",
      taso: "B1",
      esim: { fi: "Älä suutu minulle.", en: "Don't get angry with me." },
    },
  ],
  synonyymit: [
    { fi: "suuttunut", en: "cross, annoyed" },
    { fi: "kiukkuinen", en: "grumpy, irritable" },
  ],
  esimerkit: {
    A2: { fi: "Miksi olet vihainen?", en: "Why are you angry?" },
    B1: { fi: "Opettaja oli vihainen myöhästymisestä.", en: "The teacher was angry about the lateness." },
    B2: {
      fi: "Hän yritti pysyä rauhallisena, vaikka oli sisältä vihainen.",
      en: "She tried to stay calm even though she was angry inside.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vihainen;
