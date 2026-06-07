import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, nt:nn gradation, stem perintee- ~ perinne.
// Genitive perinteen, partitive perinnettä, partitive pl perinteitä.
const perinne: Word = {
  fi: "perinne",
  slug: "perinne",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B2",
  en: "tradition",
  selitys:
    "Sukupolvelta toiselle siirtyvä tapa tai tieto: 'vanha perinne', 'vaalia perinteitä'. Tyyppi 48/hame, astevaihtelu nt:nn (vartalo perintee-, nominatiivi perinne). Johdettu verbistä periä. Vrt. periä, tapa, kulttuuri.",
  kuva: { emoji: "🪔", alt: "perinne – sukupolvelta toiselle siirtyvä tapa tai tieto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu nt:nn (perintee- ~ perinne)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "perinteen", merkitys: "of the tradition" },
      { sija: "partitiivi (yks.)", muoto: "perinnettä", merkitys: "tradition (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "perinteitä", merkitys: "traditions (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48/hame: vahva vartalo perintee- (perinteen, perinteellä, perinteitä), heikko nominatiivissa perinne ja partitiivissa perinnettä. Johdettu verbistä periä. Vrt. perinteinen = traditional, tapa.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "perinne" },
          { label: "Partitiivi", form: "perinnettä" },
          { label: "Genetiivi", form: "perinteen" },
          { label: "Inessiivi", form: "perinteessä" },
          { label: "Elatiivi", form: "perinteestä" },
          { label: "Illatiivi", form: "perinteeseen" },
          { label: "Adessiivi", form: "perinteellä" },
          { label: "Ablatiivi", form: "perinteeltä" },
          { label: "Allatiivi", form: "perinteelle" },
          { label: "Essiivi", form: "perinteenä" },
          { label: "Translatiivi", form: "perinteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "perinteet" },
          { label: "Partitiivi", form: "perinteitä" },
          { label: "Genetiivi", form: "perinteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "perinteinen",
      en: "traditional",
      taso: "B1",
      esim: { fi: "Tämä on perinteinen ruoka.", en: "This is a traditional dish." },
    },
    {
      fi: "periä",
      en: "to inherit",
      taso: "B2",
      esim: { fi: "Hän peri talon vanhemmiltaan.", en: "He inherited the house from his parents." },
    },
  ],
  synonyymit: [
    { fi: "tapa", en: "custom" },
  ],
  esimerkit: {
    A2: { fi: "Joulu on tärkeä perinne.", en: "Christmas is an important tradition." },
    B1: { fi: "Perheessämme on monia perinteitä.", en: "Our family has many traditions." },
    B2: {
      fi: "Vanhat perinteet siirtyvät sukupolvelta toiselle tarinoiden ja juhlien kautta.",
      en: "Old traditions pass from one generation to the next through stories and celebrations.",
    },
  },
  updatedAt: "2026-06-07",
};

export default perinne;
