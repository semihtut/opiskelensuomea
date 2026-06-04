import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, consonant stem.
// Genitive pienen, partitive pientä, illative pieneen, partitive pl pieniä.
const pieni: Word = {
  fi: "pieni",
  slug: "pieni",
  pos: "adjektiivi (tyyppi 26/pieni)",
  posClass: "adjektiivi",
  level: "A1",
  en: "small, little",
  selitys:
    "Kooltaan vähäinen; vastakohta iso/suuri. Tyyppi 26, ei astevaihtelua, konsonanttivartalo (pientä). Tämä on koko taivutustyypin mallisana.",
  kuva: { emoji: "🐜", alt: "pieni – pieni, vähäinen koko" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 26/pieni; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pienen", merkitys: "of the small" },
      { sija: "partitiivi (yks.)", muoto: "pientä", merkitys: "small (partitive)" },
      { sija: "komparatiivi", muoto: "pienempi", merkitys: "smaller" },
    ],
    huom:
      "Konsonanttivartalo näkyy partitiivissa pientä. Muuten vartalo piene-: pienen, pieneen, pienessä. Vertailu pienempi/pienin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "pieni" },
          { label: "Partitiivi", form: "pientä" },
          { label: "Genetiivi", form: "pienen" },
          { label: "Inessiivi", form: "pienessä" },
          { label: "Illatiivi", form: "pieneen" },
          { label: "Adessiivi", form: "pienellä" },
          { label: "Essiivi", form: "pienenä" },
          { label: "Translatiivi", form: "pieneksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pienet" },
          { label: "Partitiivi", form: "pieniä" },
          { label: "Genetiivi", form: "pienten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "pienempi" },
          { label: "Komparatiivi (gen.)", form: "pienemmän" },
          { label: "Komparatiivi (part.)", form: "pienempää" },
          { label: "Superlatiivi (nom.)", form: "pienin" },
          { label: "Superlatiivi (gen.)", form: "pienimmän" },
          { label: "Superlatiivi (part.)", form: "pienintä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pienentää",
      en: "to make smaller, reduce",
      taso: "B1",
      esim: { fi: "Pienennä kuvaa hieman.", en: "Make the picture a bit smaller." },
    },
    {
      fi: "pienuus",
      en: "smallness",
      taso: "B2",
      esim: { fi: "Asunnon pienuus haittasi.", en: "The smallness of the flat was a problem." },
    },
    {
      fi: "pikkuinen",
      en: "tiny, little one",
      taso: "B1",
      esim: { fi: "Pikkuinen nukkui sylissä.", en: "The little one slept in my arms." },
    },
  ],
  synonyymit: [
    { fi: "pikkuinen", en: "tiny" },
    { fi: "vähäinen", en: "slight, minor" },
  ],
  esimerkit: {
    A2: { fi: "Asun pienessä asunnossa.", en: "I live in a small apartment." },
    B1: { fi: "Pienempi koira haukkui kovempaa.", en: "The smaller dog barked louder." },
    B2: {
      fi: "Pienikin ele voi merkitä toiselle paljon.",
      en: "Even a small gesture can mean a lot to someone.",
    },
  },
  updatedAt: "2026-06-04",
};

export default pieni;
