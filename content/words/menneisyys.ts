import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 40/kalleus, t:d gradation, stem menneisyyde-.
// Genitive menneisyyden, partitive menneisyyttä, illative menneisyyteen, partitive pl menneisyyksiä.
const menneisyys: Word = {
  fi: "menneisyys",
  slug: "menneisyys",
  pos: "substantiivi (tyyppi 40/kalleus)",
  posClass: "substantiivi",
  level: "B1",
  en: "the past",
  selitys:
    "Aika, joka on jo mennyt: 'elää menneisyydessä'. Tyyppi 40, astevaihtelu t:d (menneisyys → menneisyyden). Yleensä yksikössä. Johdettu sanasta mennyt. Vastakohta tulevaisuus.",
  kuva: { alt: "menneisyys – aika, joka on jo mennyt" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 40/kalleus; astevaihtelu t:d (vartalo menneisyyde-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "menneisyyden", merkitys: "of the past" },
      { sija: "partitiivi (yks.)", muoto: "menneisyyttä", merkitys: "the past (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "menneisyyteen", merkitys: "into the past" },
    ],
    huom:
      "Tyyppi 40 (-uus/-yys): genetiivi -syyden, partitiivi -syyttä, partitiivin monikko -syyksiä. Yleensä yksikössä. Johdettu sanasta mennyt. Vastakohta tulevaisuus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "menneisyys" },
          { label: "Partitiivi", form: "menneisyyttä" },
          { label: "Genetiivi", form: "menneisyyden" },
          { label: "Inessiivi", form: "menneisyydessä" },
          { label: "Elatiivi", form: "menneisyydestä" },
          { label: "Illatiivi", form: "menneisyyteen" },
          { label: "Adessiivi", form: "menneisyydellä" },
          { label: "Ablatiivi", form: "menneisyydeltä" },
          { label: "Allatiivi", form: "menneisyydelle" },
          { label: "Essiivi", form: "menneisyytenä" },
          { label: "Translatiivi", form: "menneisyydeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "menneisyydet" },
          { label: "Partitiivi", form: "menneisyyksiä" },
          { label: "Genetiivi", form: "menneisyyksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "mennyt",
      en: "past, gone",
      taso: "B1",
      esim: { fi: "Mennyt aika ei palaa.", en: "Time gone by does not return." },
    },
    {
      fi: "lähimenneisyys",
      en: "recent past",
      taso: "B2",
      esim: { fi: "Lähimenneisyydessä on tapahtunut paljon.", en: "A lot has happened in the recent past." },
    },
    {
      fi: "menneet",
      en: "the bygones, past times",
      taso: "B2",
      esim: { fi: "Hän muisteli menneitä.", en: "She reminisced about times gone by." },
    },
  ],
  synonyymit: [
    { fi: "mennyt aika", en: "past time" },
    { fi: "entisyys", en: "the former times" },
  ],
  esimerkit: {
    A2: { fi: "Älä mieti menneisyyttä liikaa.", en: "Don't think about the past too much." },
    B1: { fi: "Hänellä on värikäs menneisyys.", en: "He has a colourful past." },
    B2: {
      fi: "Menneisyydestä voi oppia, mutta siihen ei kannata jäädä kiinni.",
      en: "One can learn from the past, but it's not worth getting stuck in it.",
    },
  },
  updatedAt: "2026-06-06",
};

export default menneisyys;
