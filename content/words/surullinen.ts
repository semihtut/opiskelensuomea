import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation. Genitive
// surullisen, partitive surullista, illative surulliseen, partitive pl surullisia.
const surullinen: Word = {
  fi: "surullinen",
  slug: "surullinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A2",
  en: "sad, sorrowful",
  selitys:
    "Tunne, jossa on raskas ja murheellinen olo. Tyyppi 38, ei astevaihtelua. Juuri substantiivista suru. Vastakohta iloinen.",
  kuva: { alt: "surullinen – surullinen, itkevä ihminen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "surullisen", merkitys: "of the sad" },
      { sija: "partitiivi (yks.)", muoto: "surullista", merkitys: "sad (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "surullisia", merkitys: "sad (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -is-: surullinen → surullisen, surullista. 'Olla surullinen jostakin' = be sad about something.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "surullinen" },
          { label: "Partitiivi", form: "surullista" },
          { label: "Genetiivi", form: "surullisen" },
          { label: "Inessiivi", form: "surullisessa" },
          { label: "Illatiivi", form: "surulliseen" },
          { label: "Adessiivi", form: "surullisella" },
          { label: "Essiivi", form: "surullisena" },
          { label: "Translatiivi", form: "surulliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "surulliset" },
          { label: "Partitiivi", form: "surullisia" },
          { label: "Genetiivi", form: "surullisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "surullisempi" },
          { label: "Komparatiivi (gen.)", form: "surullisemman" },
          { label: "Superlatiivi (nom.)", form: "surullisin" },
          { label: "Superlatiivi (gen.)", form: "surullisimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "suru",
      en: "sorrow, grief",
      taso: "B1",
      esim: { fi: "Suru painoi mieltä.", en: "Grief weighed on the mind." },
    },
    {
      fi: "surra",
      en: "to mourn, grieve",
      taso: "B2",
      esim: { fi: "He surivat menetystä yhdessä.", en: "They mourned the loss together." },
    },
    {
      fi: "surullisesti",
      en: "sadly",
      taso: "B1",
      esim: { fi: "Hän hymyili surullisesti.", en: "She smiled sadly." },
    },
  ],
  synonyymit: [
    { fi: "murheellinen", en: "sorrowful" },
    { fi: "alakuloinen", en: "melancholy, down" },
  ],
  esimerkit: {
    A2: { fi: "Miksi olet surullinen?", en: "Why are you sad?" },
    B1: { fi: "Elokuvan loppu oli surullinen.", en: "The end of the movie was sad." },
    B2: {
      fi: "Hän vaikutti surulliselta, vaikka yritti hymyillä.",
      en: "He seemed sad, even though he tried to smile.",
    },
  },
  updatedAt: "2026-06-04",
};

export default surullinen;
