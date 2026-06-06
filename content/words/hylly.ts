import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem hylly-.
// Genitive hyllyn, partitive hyllyä, illative hyllyyn, partitive pl hyllyjä.
const hylly: Word = {
  fi: "hylly",
  slug: "hylly",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "shelf",
  selitys:
    "Seinään tai kaappiin kiinnitetty taso tavaroille: 'kirjahylly'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko hyllyjä. Lainasana ruotsista (hylla). Vrt. kirjahylly, seinähylly.",
  kuva: { emoji: "🗄️", alt: "hylly – seinään kiinnitetty taso tavaroille" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hyllyn", merkitys: "of the shelf" },
      { sija: "partitiivi (yks.)", muoto: "hyllyä", merkitys: "shelf (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hyllyjä", merkitys: "shelves (partitive pl.)" },
    ],
    huom:
      "Tyyppi 1, ei astevaihtelua (ll säilyy). 'Hyllyllä' = on the shelf (adessiivi). Vrt. kirjahylly = bookshelf, hyllykkö = shelving unit.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hylly" },
          { label: "Partitiivi", form: "hyllyä" },
          { label: "Genetiivi", form: "hyllyn" },
          { label: "Inessiivi", form: "hyllyssä" },
          { label: "Elatiivi", form: "hyllystä" },
          { label: "Illatiivi", form: "hyllyyn" },
          { label: "Adessiivi", form: "hyllyllä" },
          { label: "Ablatiivi", form: "hyllyltä" },
          { label: "Allatiivi", form: "hyllylle" },
          { label: "Essiivi", form: "hyllynä" },
          { label: "Translatiivi", form: "hyllyksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hyllyt" },
          { label: "Partitiivi", form: "hyllyjä" },
          { label: "Genetiivi", form: "hyllyjen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kirjahylly",
      en: "bookshelf",
      taso: "A2",
      esim: { fi: "Kirjahylly on täynnä kirjoja.", en: "The bookshelf is full of books." },
    },
    {
      fi: "seinähylly",
      en: "wall shelf",
      taso: "B1",
      esim: { fi: "Laitoin seinähyllyn keittiöön.", en: "I put a wall shelf in the kitchen." },
    },
    {
      fi: "hyllyttää",
      en: "to shelve",
      taso: "B2",
      esim: { fi: "Kirjastonhoitaja hyllytti kirjat.", en: "The librarian shelved the books." },
    },
  ],
  synonyymit: [
    { fi: "taso", en: "shelf, level" },
    { fi: "hyllykkö", en: "shelving unit" },
  ],
  esimerkit: {
    A2: { fi: "Laita lautaset hyllylle.", en: "Put the plates on the shelf." },
    B1: { fi: "Ylimmältä hyllyltä on vaikea ottaa mitään.", en: "It's hard to take anything from the top shelf." },
    B2: {
      fi: "Kokosin uuden hyllyn ohjeiden mukaan puolessa tunnissa.",
      en: "I assembled the new shelf according to the instructions in half an hour.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hylly;
