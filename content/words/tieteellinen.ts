import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem tieteellise-.
// Genitive tieteellisen, partitive tieteellistä, partitive pl tieteellisiä.
const tieteellinen: Word = {
  fi: "tieteellinen",
  slug: "tieteellinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B2",
  en: "scientific, scholarly",
  selitys:
    "Tieteeseen liittyvä tai tieteen menetelmiä noudattava: 'tieteellinen tutkimus'. Tyyppi 38/nainen, ei astevaihtelua. Johdettu sanasta tiede. Vrt. tiede, tieteellisesti, epätieteellinen.",
  kuva: { emoji: "🧪", alt: "tieteellinen – tieteeseen liittyvä, tieteen menetelmiä noudattava" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo tieteellise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tieteellisen", merkitys: "of scientific" },
      { sija: "partitiivi (yks.)", muoto: "tieteellistä", merkitys: "scientific (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tieteellisiä", merkitys: "scientific (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): vartalo tieteellise-, partitiivi tieteellistä, monikon partitiivi tieteellisiä. Johdettu sanasta tiede. Vastakohta epätieteellinen. Vrt. tieteellisesti = scientifically.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tieteellinen" },
          { label: "Partitiivi", form: "tieteellistä" },
          { label: "Genetiivi", form: "tieteellisen" },
          { label: "Inessiivi", form: "tieteellisessä" },
          { label: "Elatiivi", form: "tieteellisestä" },
          { label: "Illatiivi", form: "tieteelliseen" },
          { label: "Adessiivi", form: "tieteellisellä" },
          { label: "Allatiivi", form: "tieteelliselle" },
          { label: "Translatiivi", form: "tieteelliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tieteelliset" },
          { label: "Partitiivi", form: "tieteellisiä" },
          { label: "Genetiivi", form: "tieteellisten" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Positiivi", form: "tieteellinen" },
          { label: "Komparatiivi", form: "tieteellisempi" },
          { label: "Superlatiivi", form: "tieteellisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tiede",
      en: "science",
      taso: "B1",
      esim: { fi: "Tiede kiinnostaa minua.", en: "Science interests me." },
    },
    {
      fi: "tieteellisesti",
      en: "scientifically",
      taso: "B2",
      esim: { fi: "Se on tieteellisesti todistettu.", en: "It is scientifically proven." },
    },
  ],
  synonyymit: [
    { fi: "akateeminen", en: "academic" },
    { fi: "tutkimukseen perustuva", en: "research-based" },
  ],
  esimerkit: {
    A2: { fi: "Luin tieteellisen artikkelin.", en: "I read a scientific article." },
    B1: { fi: "Väite vaatii tieteellistä näyttöä.", en: "The claim requires scientific evidence." },
    B2: {
      fi: "Tieteellinen menetelmä perustuu havaintoihin ja niiden toistettavuuteen.",
      en: "The scientific method is based on observations and their repeatability.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tieteellinen;
