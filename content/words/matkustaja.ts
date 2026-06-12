import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation (agent noun), stem matkustaja-.
// Genitive matkustajan, partitive matkustajaa, illative matkustajaan, partitive pl matkustajia.
const matkustaja: Word = {
  fi: "matkustaja",
  slug: "matkustaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "passenger, traveller",
  selitys:
    "Henkilö, joka matkustaa kulkuneuvossa: 'junan matkustajat'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko matkustajia. Tekijännimi verbistä matkustaa. Vrt. matka, matkustaa.",
  kuva: { alt: "matkustaja – henkilö, joka matkustaa kulkuneuvossa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua; tekijännimi (-ja)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "matkustajan", merkitys: "of the passenger" },
      { sija: "partitiivi (yks.)", muoto: "matkustajaa", merkitys: "passenger (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "matkustajia", merkitys: "passengers (partitive pl.)" },
    ],
    huom:
      "Tekijännimi (-ja) verbistä matkustaa; ei astevaihtelua (st säilyy). Partitiivin monikko matkustajia. Vrt. matkailija = tourist/traveller, matkustaa = to travel.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "matkustaja" },
          { label: "Partitiivi", form: "matkustajaa" },
          { label: "Genetiivi", form: "matkustajan" },
          { label: "Inessiivi", form: "matkustajassa" },
          { label: "Elatiivi", form: "matkustajasta" },
          { label: "Illatiivi", form: "matkustajaan" },
          { label: "Adessiivi", form: "matkustajalla" },
          { label: "Ablatiivi", form: "matkustajalta" },
          { label: "Allatiivi", form: "matkustajalle" },
          { label: "Essiivi", form: "matkustajana" },
          { label: "Translatiivi", form: "matkustajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "matkustajat" },
          { label: "Partitiivi", form: "matkustajia" },
          { label: "Genetiivi", form: "matkustajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "matkustaa",
      en: "to travel",
      taso: "A2",
      esim: { fi: "Matkustan junalla töihin.", en: "I travel to work by train." },
    },
    {
      fi: "matkailija",
      en: "tourist, traveller",
      taso: "B1",
      esim: { fi: "Matkailijat ihailivat maisemaa.", en: "The travellers admired the scenery." },
    },
    {
      fi: "matkustajamäärä",
      en: "passenger numbers",
      taso: "B2",
      esim: { fi: "Matkustajamäärä kasvoi kesällä.", en: "Passenger numbers grew in the summer." },
    },
  ],
  synonyymit: [
    { fi: "matkalainen", en: "traveller" },
    { fi: "matkailija", en: "tourist" },
  ],
  esimerkit: {
    A2: { fi: "Juna oli täynnä matkustajia.", en: "The train was full of passengers." },
    B1: { fi: "Matkustaja unohti laukkunsa bussiin.", en: "The passenger forgot her bag on the bus." },
    B2: {
      fi: "Lentoyhtiö korvasi matkustajille viivästyneen lennon.",
      en: "The airline compensated the passengers for the delayed flight.",
    },
  },
  updatedAt: "2026-06-06",
};

export default matkustaja;
