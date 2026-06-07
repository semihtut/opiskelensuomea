import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, kk:k gradation, stem joukko- ~ jouko-.
// Genitive joukon, partitive joukkoa, partitive pl joukkoja.
const joukko: Word = {
  fi: "joukko",
  slug: "joukko",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "group, crowd, set; troop",
  selitys:
    "Joukko ihmisiä tai asioita yhdessä: 'suuri joukko'. Matematiikassa joukko = set. Monikossa joukot = (sotilas)joukot. Tyyppi 1/valo, astevaihtelu kk:k (joukko → joukon). Vrt. ryhmä, lauma, väki.",
  kuva: { emoji: "👨‍👩‍👧‍👦", alt: "joukko – ihmisiä tai asioita yhdessä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu kk:k (joukko ~ jouko-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "joukon", merkitys: "of the group" },
      { sija: "partitiivi (yks.)", muoto: "joukkoa", merkitys: "group (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "joukkoja", merkitys: "groups (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu kk:k: vahva joukko (nominatiivi, partitiivi joukkoa), heikko jouko- (joukon, joukossa). 'Joukossa' = among. Monikko joukot = troops. Matematiikassa joukko = set. Vrt. ryhmä, lauma.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "joukko" },
          { label: "Partitiivi", form: "joukkoa" },
          { label: "Genetiivi", form: "joukon" },
          { label: "Inessiivi", form: "joukossa" },
          { label: "Elatiivi", form: "joukosta" },
          { label: "Illatiivi", form: "joukkoon" },
          { label: "Adessiivi", form: "joukolla" },
          { label: "Ablatiivi", form: "joukolta" },
          { label: "Allatiivi", form: "joukolle" },
          { label: "Essiivi", form: "joukkona" },
          { label: "Translatiivi", form: "joukoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "joukot" },
          { label: "Partitiivi", form: "joukkoja" },
          { label: "Genetiivi", form: "joukkojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "joukkue",
      en: "team",
      taso: "B1",
      esim: { fi: "Joukkue voitti ottelun.", en: "The team won the match." },
    },
    {
      fi: "joukossa",
      en: "among, in the midst of",
      taso: "B2",
      esim: { fi: "Hän oli ystävien joukossa.", en: "He was among friends." },
    },
  ],
  synonyymit: [
    { fi: "ryhmä", en: "group" },
  ],
  esimerkit: {
    A2: { fi: "Suuri joukko ihmisiä odotti.", en: "A large group of people was waiting." },
    B1: { fi: "Hän erottuu joukosta.", en: "He stands out from the crowd." },
    B2: {
      fi: "Tutkijoiden joukko esitteli uudet tuloksensa konferenssissa.",
      en: "A group of researchers presented their new results at the conference.",
    },
  },
  updatedAt: "2026-06-07",
};

export default joukko;
