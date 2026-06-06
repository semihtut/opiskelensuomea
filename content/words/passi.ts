import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, no gradation, stem passi-.
// Genitive passin, partitive passia, illative passiin, partitive pl passeja.
const passi: Word = {
  fi: "passi",
  slug: "passi",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "passport",
  selitys:
    "Virallinen matkustusasiakirja, joka todistaa henkilöllisyyden ulkomailla: 'voimassa oleva passi'. Tyyppi 5, ei astevaihtelua. Partitiivin monikko passeja. Vrt. passintarkastus, henkilökortti.",
  kuva: { emoji: "🛂", alt: "passi – virallinen matkustusasiakirja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "passin", merkitys: "of the passport" },
      { sija: "partitiivi (yks.)", muoto: "passia", merkitys: "passport (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "passeja", merkitys: "passports (partitive pl.)" },
    ],
    huom:
      "Tyyppi 5, ei astevaihtelua (ss säilyy). Partitiivin monikko passeja (e-vartalo). 'Uusia passi' = to renew a passport. Vrt. passintarkastus = passport control.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "passi" },
          { label: "Partitiivi", form: "passia" },
          { label: "Genetiivi", form: "passin" },
          { label: "Inessiivi", form: "passissa" },
          { label: "Elatiivi", form: "passista" },
          { label: "Illatiivi", form: "passiin" },
          { label: "Adessiivi", form: "passilla" },
          { label: "Ablatiivi", form: "passilta" },
          { label: "Allatiivi", form: "passille" },
          { label: "Essiivi", form: "passina" },
          { label: "Translatiivi", form: "passiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "passit" },
          { label: "Partitiivi", form: "passeja" },
          { label: "Genetiivi", form: "passien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "passintarkastus",
      en: "passport control",
      taso: "B2",
      esim: { fi: "Passintarkastus oli nopea.", en: "Passport control was quick." },
    },
    {
      fi: "henkilökortti",
      en: "ID card",
      taso: "B1",
      esim: { fi: "EU:ssa riittää usein henkilökortti.", en: "In the EU an ID card is often enough." },
    },
    {
      fi: "matkustusasiakirja",
      en: "travel document",
      taso: "B2",
      esim: { fi: "Tarkista matkustusasiakirjat ennen lähtöä.", en: "Check the travel documents before departure." },
    },
  ],
  synonyymit: [
    { fi: "matkustusasiakirja", en: "travel document" },
  ],
  esimerkit: {
    A2: { fi: "Otitko passin mukaan?", en: "Did you bring your passport?" },
    B1: { fi: "Passi on voimassa viisi vuotta.", en: "The passport is valid for five years." },
    B2: {
      fi: "Huomasin lentokentällä, että passini oli vanhentunut.",
      en: "I noticed at the airport that my passport had expired.",
    },
  },
  updatedAt: "2026-06-07",
};

export default passi;
