import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem otsa-.
// Genitive otsan, partitive otsaa, partitive pl otsia.
const otsa: Word = {
  fi: "otsa",
  slug: "otsa",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "forehead",
  selitys:
    "Kasvojen yläosa silmien yläpuolella: 'hikinen otsa'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko otsia. Vrt. kasvot, otsatukka, ryppy.",
  kuva: { emoji: "😅", alt: "otsa – kasvojen yläosa silmien yläpuolella" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo otsa-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "otsan", merkitys: "of the forehead" },
      { sija: "partitiivi (yks.)", muoto: "otsaa", merkitys: "forehead (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "otsia", merkitys: "foreheads (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. Partitiivin monikko otsia (a katoaa). Otsatukka = bangs/fringe. Vrt. kasvot, otsalamppu.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "otsa" },
          { label: "Partitiivi", form: "otsaa" },
          { label: "Genetiivi", form: "otsan" },
          { label: "Inessiivi", form: "otsassa" },
          { label: "Elatiivi", form: "otsasta" },
          { label: "Illatiivi", form: "otsaan" },
          { label: "Adessiivi", form: "otsalla" },
          { label: "Ablatiivi", form: "otsalta" },
          { label: "Allatiivi", form: "otsalle" },
          { label: "Essiivi", form: "otsana" },
          { label: "Translatiivi", form: "otsaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "otsat" },
          { label: "Partitiivi", form: "otsia" },
          { label: "Genetiivi", form: "otsien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "otsatukka",
      en: "fringe, bangs",
      taso: "B2",
      esim: { fi: "Leikkasin otsatukan.", en: "I cut my fringe." },
    },
    {
      fi: "otsalamppu",
      en: "headlamp",
      taso: "B2",
      esim: { fi: "Otin otsalampun mukaan.", en: "I took a headlamp with me." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Otsani on hikinen.", en: "My forehead is sweaty." },
    B1: { fi: "Hän pyyhki hien otsaltaan.", en: "She wiped the sweat from her forehead." },
    B2: {
      fi: "Otsaan ilmestyi huolen ryppy, kun hän kuuli uutisen.",
      en: "A worried wrinkle appeared on his forehead when he heard the news.",
    },
  },
  updatedAt: "2026-06-07",
};

export default otsa;
