import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem verotukse-.
// Genitive verotuksen, partitive verotusta, partitive pl verotuksia.
const verotus: Word = {
  fi: "verotus",
  slug: "verotus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B2",
  en: "taxation",
  selitys:
    "Verojen kerääminen ja verojärjestelmä kokonaisuutena: 'kireä verotus', 'verotuksen taso'. Tyyppi 39/vastaus, ei astevaihtelua (-us → -ukse-). Johdettu verbistä verottaa. Vrt. vero, verottaa, veronmaksaja.",
  kuva: { alt: "verotus – verojen kerääminen ja verojärjestelmä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo verotukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "verotuksen", merkitys: "of the taxation" },
      { sija: "partitiivi (yks.)", muoto: "verotusta", merkitys: "taxation (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "verotuksia", merkitys: "taxations (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-us): genetiivi -ukse-n, partitiivi -us-ta, partitiivin monikko -uksia. Teonnimi verbistä verottaa. Yleensä yksikössä. Vrt. vero = tax, verottaa = to tax, veroprosentti.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "verotus" },
          { label: "Partitiivi", form: "verotusta" },
          { label: "Genetiivi", form: "verotuksen" },
          { label: "Inessiivi", form: "verotuksessa" },
          { label: "Elatiivi", form: "verotuksesta" },
          { label: "Illatiivi", form: "verotukseen" },
          { label: "Adessiivi", form: "verotuksella" },
          { label: "Ablatiivi", form: "verotukselta" },
          { label: "Allatiivi", form: "verotukselle" },
          { label: "Essiivi", form: "verotuksena" },
          { label: "Translatiivi", form: "verotukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "verotukset" },
          { label: "Partitiivi", form: "verotuksia" },
          { label: "Genetiivi", form: "verotuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "verottaa",
      en: "to tax",
      taso: "B2",
      esim: { fi: "Palkkaa verotetaan progressiivisesti.", en: "Wages are taxed progressively." },
    },
    {
      fi: "veronmaksaja",
      en: "taxpayer",
      taso: "B2",
      esim: { fi: "Veronmaksajat rahoittavat palvelut.", en: "Taxpayers fund the services." },
    },
  ],
  synonyymit: [
    { fi: "verojärjestelmä", en: "tax system" },
  ],
  esimerkit: {
    A2: { fi: "Verotus on Suomessa korkea.", en: "Taxation is high in Finland." },
    B1: { fi: "Verotus rahoittaa julkiset palvelut.", en: "Taxation funds public services." },
    B2: {
      fi: "Oikeudenmukainen verotus jakaa taakkaa maksukyvyn mukaan.",
      en: "Fair taxation distributes the burden according to ability to pay.",
    },
  },
  updatedAt: "2026-06-07",
};

export default verotus;
