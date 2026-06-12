import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem köyhyyde- ~ köyhyyte-.
// Genitive köyhyyden, partitive köyhyyttä, partitive pl köyhyyksiä.
const koyhyys: Word = {
  fi: "köyhyys",
  slug: "köyhyys",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B2",
  en: "poverty",
  selitys:
    "Tila, jossa ihmisellä on hyvin vähän rahaa ja varoja: 'elää köyhyydessä', 'torjua köyhyyttä'. Tyyppi 40/kalleus, astevaihtelu t:d (köyhyys → köyhyyden). Ominaisuudennimi adjektiivista köyhä. Vastakohta varallisuus. Vrt. köyhä, varallisuus, eriarvoisuus.",
  kuva: { alt: "köyhyys – tila jossa ihmisellä on hyvin vähän rahaa ja varoja" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (köyhyyte- ~ köyhyyde-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "köyhyyden", merkitys: "of poverty" },
      { sija: "partitiivi (yks.)", muoto: "köyhyyttä", merkitys: "poverty (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "köyhyyksiä", merkitys: "poverties (partitive pl.)" },
    ],
    huom:
      "Tyyppi 40/kalleus (-yys): genetiivi -yyden (t:d), partitiivi -yyttä, partitiivin monikko -yyksiä. Ominaisuudennimi adjektiivista köyhä. Yleensä yksikössä. Vastakohta rikkaus, varallisuus. Vrt. köyhä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "köyhyys" },
          { label: "Partitiivi", form: "köyhyyttä" },
          { label: "Genetiivi", form: "köyhyyden" },
          { label: "Inessiivi", form: "köyhyydessä" },
          { label: "Elatiivi", form: "köyhyydestä" },
          { label: "Illatiivi", form: "köyhyyteen" },
          { label: "Adessiivi", form: "köyhyydellä" },
          { label: "Ablatiivi", form: "köyhyydeltä" },
          { label: "Allatiivi", form: "köyhyydelle" },
          { label: "Essiivi", form: "köyhyytenä" },
          { label: "Translatiivi", form: "köyhyydeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "köyhyydet" },
          { label: "Partitiivi", form: "köyhyyksiä" },
          { label: "Genetiivi", form: "köyhyyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "köyhä",
      en: "poor",
      taso: "B1",
      esim: { fi: "Perhe oli hyvin köyhä.", en: "The family was very poor." },
    },
    {
      fi: "köyhtyä",
      en: "to become poor, be impoverished",
      taso: "B2",
      esim: { fi: "Alue köyhtyi tehtaan sulkemisen jälkeen.", en: "The region became poorer after the factory closed." },
    },
  ],
  synonyymit: [
    { fi: "puute", en: "want, deprivation" },
  ],
  esimerkit: {
    A2: { fi: "Köyhyys on suuri ongelma.", en: "Poverty is a big problem." },
    B1: { fi: "Moni lapsi elää köyhyydessä.", en: "Many children live in poverty." },
    B2: {
      fi: "Köyhyyttä voidaan vähentää koulutuksella ja oikeudenmukaisella verotuksella.",
      en: "Poverty can be reduced through education and fair taxation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default koyhyys;
