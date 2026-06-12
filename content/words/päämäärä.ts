import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem päämäärä-.
// Genitive päämäärän, partitive päämäärää, illative päämäärään, partitive pl päämääriä.
const paamaara: Word = {
  fi: "päämäärä",
  slug: "päämäärä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "aim, goal, objective (long-term)",
  selitys:
    "Lopullinen tavoite, johon pitkällä aikavälillä pyritään: 'elämän päämäärä'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko päämääriä. Yhdyssana pää + määrä. Vrt. tavoite (lyhyemmän aikavälin), pyrkiä.",
  kuva: { alt: "päämäärä – lopullinen tavoite, johon pyritään" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo päämäärä-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "päämäärän", merkitys: "of the aim" },
      { sija: "partitiivi (yks.)", muoto: "päämäärää", merkitys: "aim (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "päämääriä", merkitys: "aims (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10 (-ä): partitiivin monikko -iä (päämääriä), ei astevaihtelua. Yhdyssana pää + määrä. Painottaa pitkän aikavälin lopputavoitetta; tavoite on usein lyhyemmän aikavälin. 'Päämääränä on…' = the aim is…",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "päämäärä" },
          { label: "Partitiivi", form: "päämäärää" },
          { label: "Genetiivi", form: "päämäärän" },
          { label: "Inessiivi", form: "päämäärässä" },
          { label: "Elatiivi", form: "päämäärästä" },
          { label: "Illatiivi", form: "päämäärään" },
          { label: "Adessiivi", form: "päämäärällä" },
          { label: "Ablatiivi", form: "päämäärältä" },
          { label: "Allatiivi", form: "päämäärälle" },
          { label: "Essiivi", form: "päämääränä" },
          { label: "Translatiivi", form: "päämääräksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "päämäärät" },
          { label: "Partitiivi", form: "päämääriä" },
          { label: "Genetiivi", form: "päämäärien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "määränpää",
      en: "destination",
      taso: "B1",
      esim: { fi: "Saavuimme määränpäähän illalla.", en: "We reached the destination in the evening." },
    },
    {
      fi: "päämäärätietoinen",
      en: "purposeful, determined",
      taso: "B2",
      esim: { fi: "Hän on päämäärätietoinen ihminen.", en: "She is a determined person." },
    },
  ],
  synonyymit: [
    { fi: "tavoite", en: "goal, objective" },
    { fi: "maali", en: "goal, finish" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on sinun päämääräsi?", en: "What is your aim?" },
    B1: { fi: "Meillä on yhteinen päämäärä.", en: "We have a common goal." },
    B2: {
      fi: "Ilman selkeää päämäärää on vaikea tietää, mihin suuntaan edetä.",
      en: "Without a clear aim it's hard to know in which direction to proceed.",
    },
  },
  updatedAt: "2026-06-07",
};

export default paamaara;
