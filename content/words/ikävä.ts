import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem ikävä-.
// Genitive ikävän, partitive ikävää, partitive pl ikäviä.
const ikava: Word = {
  fi: "ikävä",
  slug: "ikävä",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "B1",
  en: "boring, unpleasant; (noun) longing, missing",
  selitys:
    "1) Adjektiivina: ikävä = tylsä tai epämiellyttävä ('ikävä sää'). 2) Substantiivina: ikävä = kaipaus ('minulla on ikävä sinua'). Tyyppi 10/koira, ei astevaihtelua. Vrt. ikävöidä, kaivata, tylsä.",
  kuva: { emoji: "😔", alt: "ikävä – tylsä tai epämiellyttävä; myös kaipaus" },

  kielioppi: {
    tyyppi: "adjektiivi/substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo ikävä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ikävän", merkitys: "of unpleasant / longing" },
      { sija: "partitiivi (yks.)", muoto: "ikävää", merkitys: "unpleasant (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ikäviä", merkitys: "unpleasant (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10 (-ä): partitiivin monikko -iä (ikäviä), ei astevaihtelua. Adjektiivi = boring/unpleasant; substantiivi = longing ('olla ikävä jotakuta'). 'On ikävää, että…' = it's a pity that…. Vrt. ikävöidä = to miss.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ikävä" },
          { label: "Partitiivi", form: "ikävää" },
          { label: "Genetiivi", form: "ikävän" },
          { label: "Inessiivi", form: "ikävässä" },
          { label: "Elatiivi", form: "ikävästä" },
          { label: "Illatiivi", form: "ikävään" },
          { label: "Adessiivi", form: "ikävällä" },
          { label: "Allatiivi", form: "ikävälle" },
          { label: "Translatiivi", form: "ikäväksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ikävät" },
          { label: "Partitiivi", form: "ikäviä" },
          { label: "Genetiivi", form: "ikävien" },
        ],
      },
      {
        title: "Vertailu (adjektiivina)",
        rows: [
          { label: "Positiivi", form: "ikävä" },
          { label: "Komparatiivi", form: "ikävämpi" },
          { label: "Superlatiivi", form: "ikävin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ikävöidä",
      en: "to miss, long for",
      taso: "B2",
      esim: { fi: "Ikävöin kotia.", en: "I miss home." },
    },
    {
      fi: "ikävystyä",
      en: "to get bored",
      taso: "B2",
      esim: { fi: "Lapset ikävystyivät nopeasti.", en: "The children got bored quickly." },
    },
  ],
  synonyymit: [
    { fi: "tylsä", en: "boring" },
    { fi: "epämiellyttävä", en: "unpleasant" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on ikävä sinua.", en: "I miss you." },
    B1: { fi: "Se oli ikävä yllätys.", en: "It was an unpleasant surprise." },
    B2: {
      fi: "On ikävää, että emme ehtineet tavata ennen lähtöäsi.",
      en: "It's a pity that we didn't get to meet before your departure.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ikava;
