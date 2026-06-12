import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem lukumäärä-.
// Genitive lukumäärän, partitive lukumäärää, partitive pl lukumääriä.
const lukumaara: Word = {
  fi: "lukumäärä",
  slug: "lukumäärä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B2",
  en: "number, count, quantity",
  selitys:
    "Kuinka monta jotakin on, kappalemäärä: 'osallistujien lukumäärä'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko lukumääriä. Yhdyssana luku + määrä. Vrt. luku, määrä, määrä.",
  kuva: { alt: "lukumäärä – kuinka monta jotakin on" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo lukumäärä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "lukumäärän", merkitys: "of the number" },
      { sija: "partitiivi (yks.)", muoto: "lukumäärää", merkitys: "number (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lukumääriä", merkitys: "numbers (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Yhdyssana luku + määrä. Tarkoittaa kappalemäärää (montako), ei summaa. Vrt. määrä, luku, määrä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "lukumäärä" },
          { label: "Partitiivi", form: "lukumäärää" },
          { label: "Genetiivi", form: "lukumäärän" },
          { label: "Inessiivi", form: "lukumäärässä" },
          { label: "Elatiivi", form: "lukumäärästä" },
          { label: "Illatiivi", form: "lukumäärään" },
          { label: "Adessiivi", form: "lukumäärällä" },
          { label: "Ablatiivi", form: "lukumäärältä" },
          { label: "Allatiivi", form: "lukumäärälle" },
          { label: "Essiivi", form: "lukumääränä" },
          { label: "Translatiivi", form: "lukumääräksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "lukumäärät" },
          { label: "Partitiivi", form: "lukumääriä" },
          { label: "Genetiivi", form: "lukumäärien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luku",
      en: "number; chapter",
      taso: "B1",
      esim: { fi: "Kirjoita luku numeroin.", en: "Write the number in figures." },
    },
    {
      fi: "määrä",
      en: "amount, quantity",
      taso: "B1",
      esim: { fi: "Sokerin määrä on suuri.", en: "The amount of sugar is large." },
    },
  ],
  synonyymit: [
    { fi: "kappalemäärä", en: "number of items" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on opiskelijoiden lukumäärä?", en: "What is the number of students?" },
    B1: { fi: "Hakijoiden lukumäärä kasvoi.", en: "The number of applicants grew." },
    B2: {
      fi: "Vastausten lukumäärä jäi pieneksi, joten tulokset eivät ole luotettavia.",
      en: "The number of responses remained small, so the results are not reliable.",
    },
  },
  updatedAt: "2026-06-07",
};

export default lukumaara;
