import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation. Genitive ison,
// partitive isoa, illative isoon, partitive pl isoja. Comp isompi, superl isoin.
const iso: Word = {
  fi: "iso",
  slug: "iso",
  pos: "adjektiivi (tyyppi 1/valo)",
  posClass: "adjektiivi",
  level: "A1",
  en: "big, large",
  selitys:
    "Kooltaan suuri. Tyyppi 1, ei astevaihtelua. Arkinen vastine sanalle suuri; vastakohta pieni.",
  kuva: { emoji: "🐘", alt: "iso – iso, suurikokoinen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ison", merkitys: "of the big" },
      { sija: "partitiivi (yks.)", muoto: "isoa", merkitys: "big (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "isoja", merkitys: "big (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Vertailu isompi/isoin. Vrt. suuri (= great, large, hieman muodollisempi).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "iso" },
          { label: "Partitiivi", form: "isoa" },
          { label: "Genetiivi", form: "ison" },
          { label: "Inessiivi", form: "isossa" },
          { label: "Illatiivi", form: "isoon" },
          { label: "Adessiivi", form: "isolla" },
          { label: "Essiivi", form: "isona" },
          { label: "Translatiivi", form: "isoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "isot" },
          { label: "Partitiivi", form: "isoja" },
          { label: "Genetiivi", form: "isojen" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "isompi" },
          { label: "Komparatiivi (gen.)", form: "isomman" },
          { label: "Komparatiivi (part.)", form: "isompaa" },
          { label: "Superlatiivi (nom.)", form: "isoin" },
          { label: "Superlatiivi (gen.)", form: "isoimman" },
          { label: "Superlatiivi (part.)", form: "isointa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "isäntä",
      en: "host, master (related root iso)",
      taso: "B2",
      esim: { fi: "Talon isäntä toivotti tervetulleeksi.", en: "The host of the house welcomed us." },
    },
    {
      fi: "isovanhemmat",
      en: "grandparents",
      taso: "A2",
      esim: { fi: "Vietän kesät isovanhempien luona.", en: "I spend summers at my grandparents'." },
    },
    {
      fi: "isokokoinen",
      en: "large-sized",
      taso: "B1",
      esim: { fi: "Koira oli isokokoinen.", en: "The dog was large-sized." },
    },
  ],
  synonyymit: [
    { fi: "suuri", en: "great, large" },
    { fi: "valtava", en: "huge, enormous" },
  ],
  esimerkit: {
    A2: { fi: "Heillä on iso talo.", en: "They have a big house." },
    B1: { fi: "Otin isomman annoksen.", en: "I took a bigger portion." },
    B2: {
      fi: "Tämä on kaupungin isoin kauppakeskus.",
      en: "This is the city's biggest shopping center.",
    },
  },
  updatedAt: "2026-06-04",
};

export default iso;
