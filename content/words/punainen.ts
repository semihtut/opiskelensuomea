import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation. Genitive
// punaisen, partitive punaista, illative punaiseen, partitive pl punaisia.
const punainen: Word = {
  fi: "punainen",
  slug: "punainen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A1",
  en: "red",
  selitys:
    "Veren ja kypsän tomaatin väri. Tyyppi 38, ei astevaihtelua. Taivutusvartalo punais-.",
  kuva: { emoji: "🔴", alt: "punainen – punainen väri" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "punaisen", merkitys: "of the red" },
      { sija: "partitiivi (yks.)", muoto: "punaista", merkitys: "red (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "punaisia", merkitys: "red (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -is-: punainen → punaisen, punaista. Sama malli kuin valkoinen, sininen, keltainen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "punainen" },
          { label: "Partitiivi", form: "punaista" },
          { label: "Genetiivi", form: "punaisen" },
          { label: "Inessiivi", form: "punaisessa" },
          { label: "Illatiivi", form: "punaiseen" },
          { label: "Adessiivi", form: "punaisella" },
          { label: "Essiivi", form: "punaisena" },
          { label: "Translatiivi", form: "punaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "punaiset" },
          { label: "Partitiivi", form: "punaisia" },
          { label: "Genetiivi", form: "punaisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "punaisempi" },
          { label: "Komparatiivi (gen.)", form: "punaisemman" },
          { label: "Superlatiivi (nom.)", form: "punaisin" },
          { label: "Superlatiivi (gen.)", form: "punaisimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "punastua",
      en: "to blush",
      taso: "B2",
      esim: { fi: "Hän punastui kehusta.", en: "She blushed at the compliment." },
    },
    {
      fi: "punaviini",
      en: "red wine",
      taso: "B1",
      esim: { fi: "Joimme lasin punaviiniä.", en: "We drank a glass of red wine." },
    },
    {
      fi: "tulipunainen",
      en: "fiery red, crimson",
      taso: "B1",
      esim: { fi: "Hänellä oli tulipunainen mekko.", en: "She had a fiery-red dress." },
    },
  ],
  synonyymit: [
    { fi: "punertava", en: "reddish" },
    { fi: "veripunainen", en: "blood-red" },
  ],
  esimerkit: {
    A2: { fi: "Omena on punainen.", en: "The apple is red." },
    B1: { fi: "Liikennevalo paloi punaisena.", en: "The traffic light was red." },
    B2: {
      fi: "Taivas hehkui punaisena auringonlaskun aikaan.",
      en: "The sky glowed red at sunset.",
    },
  },
  updatedAt: "2026-06-04",
};

export default punainen;
