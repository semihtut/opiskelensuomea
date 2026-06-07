import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem osuude-.
// Genitive osuuden, partitive osuutta, illative osuuteen, partitive pl osuuksia.
const osuus: Word = {
  fi: "osuus",
  slug: "osuus",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "share, proportion, part",
  selitys:
    "Se osa kokonaisuudesta, joka kuuluu jollekin tai jostakin: 'naisten osuus oli 40 %'. Tyyppi 40/kalleus, astevaihtelu t:d (osuus → osuuden). Johdettu sanasta osa. Vrt. osa, prosenttiosuus, osuuskunta.",
  kuva: { emoji: "🥧", alt: "osuus – osa kokonaisuudesta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vartalo osuude-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "osuuden", merkitys: "of the share" },
      { sija: "partitiivi (yks.)", muoto: "osuutta", merkitys: "share (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "osuuksia", merkitys: "shares (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40 (-uus): genetiivi -uden, partitiivi -utta, partitiivin monikko -uksia. Johdettu sanasta osa. Usein prosenteissa: 'osuus kokonaismäärästä'. Vrt. osa = part, osuuskunta = cooperative.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "osuus" },
          { label: "Partitiivi", form: "osuutta" },
          { label: "Genetiivi", form: "osuuden" },
          { label: "Inessiivi", form: "osuudessa" },
          { label: "Elatiivi", form: "osuudesta" },
          { label: "Illatiivi", form: "osuuteen" },
          { label: "Adessiivi", form: "osuudella" },
          { label: "Ablatiivi", form: "osuudelta" },
          { label: "Allatiivi", form: "osuudelle" },
          { label: "Essiivi", form: "osuutena" },
          { label: "Translatiivi", form: "osuudeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "osuudet" },
          { label: "Partitiivi", form: "osuuksia" },
          { label: "Genetiivi", form: "osuuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "osa",
      en: "part, portion",
      taso: "A2",
      esim: { fi: "Osa ihmisistä lähti aikaisin.", en: "Some of the people left early." },
    },
    {
      fi: "markkinaosuus",
      en: "market share",
      taso: "B2",
      esim: { fi: "Yrityksen markkinaosuus kasvoi.", en: "The company's market share grew." },
    },
  ],
  synonyymit: [
    { fi: "osa", en: "part" },
    { fi: "prosenttiosuus", en: "percentage share" },
  ],
  esimerkit: {
    A2: { fi: "Maksoin oman osuuteni laskusta.", en: "I paid my share of the bill." },
    B1: { fi: "Uusiutuvan energian osuus kasvaa.", en: "The share of renewable energy is growing." },
    B2: {
      fi: "Nuorten osuus äänestäjistä oli pienempi kuin odotettiin.",
      en: "The proportion of young people among voters was smaller than expected.",
    },
  },
  updatedAt: "2026-06-07",
};

export default osuus;
