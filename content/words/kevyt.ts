import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 43/ohut, no gradation. Genitive kevyen,
// partitive kevyttä, partitive pl kevyitä. Comp kevyempi, superl kevyin.
const kevyt: Word = {
  fi: "kevyt",
  slug: "kevyt",
  pos: "adjektiivi (tyyppi 43/ohut)",
  posClass: "adjektiivi",
  level: "A2",
  en: "light (not heavy)",
  selitys:
    "Vähän painava; myös helppo tai vähärasvainen. Tyyppi 43, ei astevaihtelua. Vartalo kevye-: kevyen, kevyttä. Vastakohta raskas.",
  kuva: { emoji: "🪶", alt: "kevyt – kevyt sulka" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 43/ohut; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kevyen", merkitys: "of the light" },
      { sija: "partitiivi (yks.)", muoto: "kevyttä", merkitys: "light (partitive)" },
      { sija: "komparatiivi", muoto: "kevyempi", merkitys: "lighter" },
    ],
    huom:
      "Vartalo kevye-: kevyen, kevyeen. Partitiivi kevyttä. Vertailu kevyempi/kevyin. Sama tyyppi kuin lyhyt, ohut. Vastakohta raskas.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "kevyt" },
          { label: "Partitiivi", form: "kevyttä" },
          { label: "Genetiivi", form: "kevyen" },
          { label: "Inessiivi", form: "kevyessä" },
          { label: "Illatiivi", form: "kevyeen" },
          { label: "Adessiivi", form: "kevyellä" },
          { label: "Essiivi", form: "kevyenä" },
          { label: "Translatiivi", form: "kevyeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kevyet" },
          { label: "Partitiivi", form: "kevyitä" },
          { label: "Genetiivi", form: "kevyiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "kevyempi" },
          { label: "Komparatiivi (gen.)", form: "kevyemmän" },
          { label: "Superlatiivi (nom.)", form: "kevyin" },
          { label: "Superlatiivi (gen.)", form: "kevyimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kevyesti",
      en: "lightly",
      taso: "B1",
      esim: { fi: "Kosketin häntä kevyesti olkapäähän.", en: "I touched him lightly on the shoulder." },
    },
    {
      fi: "keventää",
      en: "to lighten",
      taso: "B2",
      esim: { fi: "Kevensin reppua matkalla.", en: "I lightened the backpack on the way." },
    },
    {
      fi: "kevyt liikenne",
      en: "non-motorized traffic (cycling/walking)",
      taso: "B2",
      esim: { fi: "Kevyen liikenteen väylä kulkee rantaa pitkin.", en: "The cycle-and-pedestrian path runs along the shore." },
    },
  ],
  synonyymit: [
    { fi: "keveä", en: "light (variant form)" },
    { fi: "vaivaton", en: "effortless" },
  ],
  esimerkit: {
    A2: { fi: "Tämä laukku on kevyt.", en: "This bag is light." },
    B1: { fi: "Söin kevyen lounaan.", en: "I had a light lunch." },
    B2: {
      fi: "Höyhen on kevyin asia, jonka tiedän.",
      en: "A feather is the lightest thing I know.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kevyt;
