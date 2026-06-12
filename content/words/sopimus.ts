import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem sopimukse-.
// Genitive sopimuksen, partitive sopimusta, illative sopimukseen, partitive pl sopimuksia.
const sopimus: Word = {
  fi: "sopimus",
  slug: "sopimus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "agreement, contract",
  selitys:
    "Osapuolten välinen sitova sopu: 'tehdä sopimus'. Tyyppi 39, ei astevaihtelua. Juuri verbistä sopia. Vrt. työsopimus (employment contract), sopia (to agree).",
  kuva: { alt: "sopimus – osapuolten välinen sitova sopu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo sopimukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sopimuksen", merkitys: "of the contract" },
      { sija: "partitiivi (yks.)", muoto: "sopimusta", merkitys: "contract (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sopimuksia", merkitys: "contracts (partitive pl.)" },
    ],
    huom:
      "Loppu -mus → vartalo -mukse-: sopimus → sopimuksen. 'Tehdä sopimus' = to make a contract, 'allekirjoittaa sopimus' = to sign. Vrt. sopia = to agree, sopu = harmony.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sopimus" },
          { label: "Partitiivi", form: "sopimusta" },
          { label: "Genetiivi", form: "sopimuksen" },
          { label: "Inessiivi", form: "sopimuksessa" },
          { label: "Elatiivi", form: "sopimuksesta" },
          { label: "Illatiivi", form: "sopimukseen" },
          { label: "Adessiivi", form: "sopimuksella" },
          { label: "Ablatiivi", form: "sopimukselta" },
          { label: "Allatiivi", form: "sopimukselle" },
          { label: "Essiivi", form: "sopimuksena" },
          { label: "Translatiivi", form: "sopimukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sopimukset" },
          { label: "Partitiivi", form: "sopimuksia" },
          { label: "Genetiivi", form: "sopimusten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sopia",
      en: "to agree; to suit, fit",
      taso: "B1",
      esim: { fi: "Sovimme tapaamisen.", en: "We agreed on a meeting." },
    },
    {
      fi: "työsopimus",
      en: "employment contract",
      taso: "B2",
      esim: { fi: "Allekirjoitin työsopimuksen.", en: "I signed the employment contract." },
    },
    {
      fi: "sopimaton",
      en: "unsuitable, improper",
      taso: "B2",
      esim: { fi: "Käytös oli täysin sopimatonta.", en: "The behaviour was completely improper." },
    },
  ],
  synonyymit: [
    { fi: "sopu", en: "agreement, harmony" },
    { fi: "kontrakti", en: "contract" },
  ],
  esimerkit: {
    A2: { fi: "Teimme sopimuksen.", en: "We made an agreement." },
    B1: { fi: "Sopimus on voimassa vuoden.", en: "The contract is valid for a year." },
    B2: {
      fi: "Osapuolet pääsivät sopimukseen pitkien neuvottelujen jälkeen.",
      en: "The parties reached an agreement after long negotiations.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sopimus;
