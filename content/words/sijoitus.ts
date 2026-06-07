import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem sijoitukse-.
// Genitive sijoituksen, partitive sijoitusta, partitive pl sijoituksia.
const sijoitus: Word = {
  fi: "sijoitus",
  slug: "sijoitus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "investment; placement, ranking",
  selitys:
    "1) Rahan sijoittaminen tuoton toivossa: 'hyvä sijoitus'. 2) Sijoittuminen tai sijainti, esim. kilpailussa. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä sijoittaa. Vrt. sijoittaa, sijoittaja, tuotto.",
  kuva: { emoji: "💰", alt: "sijoitus – rahan sijoittaminen tuoton toivossa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo sijoitukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sijoituksen", merkitys: "of the investment" },
      { sija: "partitiivi (yks.)", muoto: "sijoitusta", merkitys: "investment (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sijoituksia", merkitys: "investments (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Johdettu verbistä sijoittaa. Merkitykset: rahasijoitus JA sijoitus kilpailussa (ranking). Vrt. sijoittaa, tuotto.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sijoitus" },
          { label: "Partitiivi", form: "sijoitusta" },
          { label: "Genetiivi", form: "sijoituksen" },
          { label: "Inessiivi", form: "sijoituksessa" },
          { label: "Elatiivi", form: "sijoituksesta" },
          { label: "Illatiivi", form: "sijoitukseen" },
          { label: "Adessiivi", form: "sijoituksella" },
          { label: "Ablatiivi", form: "sijoitukselta" },
          { label: "Allatiivi", form: "sijoitukselle" },
          { label: "Essiivi", form: "sijoituksena" },
          { label: "Translatiivi", form: "sijoitukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sijoitukset" },
          { label: "Partitiivi", form: "sijoituksia" },
          { label: "Genetiivi", form: "sijoituksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sijoittaa",
      en: "to invest; to place",
      taso: "B1",
      esim: { fi: "Hän sijoittaa osakkeisiin.", en: "He invests in stocks." },
    },
    {
      fi: "sijoittaja",
      en: "investor",
      taso: "B2",
      esim: { fi: "Sijoittajat odottavat tuottoa.", en: "Investors expect a return." },
    },
  ],
  synonyymit: [
    { fi: "investointi", en: "investment" },
    { fi: "panostus", en: "investment, input" },
  ],
  esimerkit: {
    A2: { fi: "Se oli hyvä sijoitus.", en: "It was a good investment." },
    B1: { fi: "Asunto on turvallinen sijoitus.", en: "An apartment is a safe investment." },
    B2: {
      fi: "Pitkäaikainen sijoitus tuottaa yleensä enemmän kuin lyhyt.",
      en: "A long-term investment usually yields more than a short one.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sijoitus;
