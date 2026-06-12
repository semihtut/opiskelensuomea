import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem hunaja-.
// Genitive hunajan, partitive hunajaa, partitive pl hunajia.
const hunaja: Word = {
  fi: "hunaja",
  slug: "hunaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "honey",
  selitys:
    "Mehiläisten tuottama makea aine: 'teetä ja hunajaa'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko hunajia (harvinainen, yleensä yksikössä). Vrt. mehiläinen, sokeri, makea.",
  kuva: { alt: "hunaja – mehiläisten tuottama makea aine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo hunaja-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hunajan", merkitys: "of the honey" },
      { sija: "partitiivi (yks.)", muoto: "hunajaa", merkitys: "honey (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hunajia", merkitys: "honeys (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Ainesana, yleensä yksikössä (partitiivin monikko hunajia harvinainen). Vanha synonyymi mesi. Vrt. mehiläinen, sokeri.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hunaja" },
          { label: "Partitiivi", form: "hunajaa" },
          { label: "Genetiivi", form: "hunajan" },
          { label: "Inessiivi", form: "hunajassa" },
          { label: "Elatiivi", form: "hunajasta" },
          { label: "Illatiivi", form: "hunajaan" },
          { label: "Adessiivi", form: "hunajalla" },
          { label: "Ablatiivi", form: "hunajalta" },
          { label: "Allatiivi", form: "hunajalle" },
          { label: "Essiivi", form: "hunajana" },
          { label: "Translatiivi", form: "hunajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hunajat" },
          { label: "Partitiivi", form: "hunajia" },
          { label: "Genetiivi", form: "hunajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hunajakenno",
      en: "honeycomb",
      taso: "B2",
      esim: { fi: "Hunaja kerätään hunajakennosta.", en: "Honey is collected from the honeycomb." },
    },
    {
      fi: "mehiläinen",
      en: "bee",
      taso: "B1",
      esim: { fi: "Mehiläiset tekevät hunajaa.", en: "Bees make honey." },
    },
  ],
  synonyymit: [
    { fi: "mesi", en: "honey/nectar (archaic)" },
  ],
  esimerkit: {
    A2: { fi: "Laitan teehen hunajaa.", en: "I put honey in my tea." },
    B1: { fi: "Hunaja on terveellisempää kuin sokeri.", en: "Honey is healthier than sugar." },
    B2: {
      fi: "Paikallinen hunaja maistuu erilaiselta vuodenajasta riippuen.",
      en: "Local honey tastes different depending on the season.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hunaja;
