import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem ulkomaalaise-.
// Genitive ulkomaalaisen, partitive ulkomaalaista, partitive pl ulkomaalaisia.
const ulkomaalainen: Word = {
  fi: "ulkomaalainen",
  slug: "ulkomaalainen",
  pos: "substantiivi / adjektiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "B1",
  en: "foreigner; foreign",
  selitys:
    "Toisesta maasta tuleva henkilö, tai ulkomaihin liittyvä: 'ulkomaalainen opiskelija'. Tyyppi 38, ei astevaihtelua; vartalo ulkomaalaise-. Partitiivin monikko ulkomaalaisia. Sanasta ulkomaa. Vrt. ulkomaalainen vs. ulkomainen.",
  kuva: { emoji: "🌏", alt: "ulkomaalainen – toisesta maasta tuleva henkilö" },

  kielioppi: {
    tyyppi: "substantiivi/adjektiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo ulkomaalaise-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ulkomaalaisen", merkitys: "of the foreigner" },
      { sija: "partitiivi (yks.)", muoto: "ulkomaalaista", merkitys: "foreigner (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ulkomaalaisia", merkitys: "foreigners (partitive pl.)" },
    ],
    huom:
      "Vartalo ulkomaalaise- (genetiivi ulkomaalaisen). Henkilöstä ulkomaalainen (a foreigner); esineestä/asiasta usein ulkomainen (foreign). Vrt. ulkomaa = foreign country, ulkomailla = abroad.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ulkomaalainen" },
          { label: "Partitiivi", form: "ulkomaalaista" },
          { label: "Genetiivi", form: "ulkomaalaisen" },
          { label: "Inessiivi", form: "ulkomaalaisessa" },
          { label: "Elatiivi", form: "ulkomaalaisesta" },
          { label: "Illatiivi", form: "ulkomaalaiseen" },
          { label: "Adessiivi", form: "ulkomaalaisella" },
          { label: "Ablatiivi", form: "ulkomaalaiselta" },
          { label: "Allatiivi", form: "ulkomaalaiselle" },
          { label: "Essiivi", form: "ulkomaalaisena" },
          { label: "Translatiivi", form: "ulkomaalaiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ulkomaalaiset" },
          { label: "Partitiivi", form: "ulkomaalaisia" },
          { label: "Genetiivi", form: "ulkomaalaisten / ulkomaalaisien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ulkomainen",
      en: "foreign (of things)",
      taso: "B2",
      esim: { fi: "Ostin ulkomaisen auton.", en: "I bought a foreign car." },
    },
    {
      fi: "ulkomaa",
      en: "foreign country",
      taso: "B1",
      esim: { fi: "Hän matkustaa usein ulkomaille.", en: "He often travels abroad." },
    },
    {
      fi: "maahanmuuttaja",
      en: "immigrant",
      taso: "B2",
      esim: { fi: "Kurssilla on monta maahanmuuttajaa.", en: "There are many immigrants in the course." },
    },
  ],
  synonyymit: [
    { fi: "muukalainen", en: "stranger, foreigner" },
    { fi: "ulkomaan kansalainen", en: "foreign national" },
  ],
  esimerkit: {
    A2: { fi: "Hän on ulkomaalainen.", en: "He is a foreigner." },
    B1: { fi: "Kaupungissa asuu paljon ulkomaalaisia.", en: "Many foreigners live in the city." },
    B2: {
      fi: "Ulkomaalaisen voi olla aluksi vaikea ymmärtää suomalaista huumoria.",
      en: "It can be hard for a foreigner at first to understand Finnish humour.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ulkomaalainen;
