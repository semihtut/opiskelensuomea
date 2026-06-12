import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem isä-.
// Partitive sg isää, partitive pl isiä, genitive pl isien.
const isä: Word = {
  fi: "isä",
  slug: "isä",
  pos: "substantiivi (tyyppi: koira)",
  posClass: "substantiivi",
  level: "A1",
  en: "father, dad",
  selitys: "Miespuolinen vanhempi. Vartalo isä-, ei astevaihtelua.",
  kuva: { alt: "isä – miespuolinen vanhempi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "isää", merkitys: "father (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "isän", merkitys: "of the father" },
      { sija: "partitiivi (mon.)", muoto: "isiä", merkitys: "fathers (partitive pl.)" },
    ],
    huom: "Monikossa vartalon ä → i: isät, isiä, isien.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "isä" },
          { label: "Partitiivi", form: "isää" },
          { label: "Genetiivi", form: "isän" },
          { label: "Inessiivi", form: "isässä" },
          { label: "Elatiivi", form: "isästä" },
          { label: "Illatiivi", form: "isään" },
          { label: "Adessiivi", form: "isällä" },
          { label: "Ablatiivi", form: "isältä" },
          { label: "Allatiivi", form: "isälle" },
          { label: "Essiivi", form: "isänä" },
          { label: "Translatiivi", form: "isäksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "isät" },
          { label: "Partitiivi", form: "isiä" },
          { label: "Genetiivi", form: "isien" },
          { label: "Illatiivi", form: "isiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "isänpäivä",
      en: "Father's Day",
      taso: "A2",
      esim: { fi: "Vietämme isänpäivää sunnuntaina.", en: "We celebrate Father's Day on Sunday." },
    },
    {
      fi: "isällinen",
      en: "fatherly, paternal",
      taso: "B1",
      esim: { fi: "Hän antoi isällisen neuvon.", en: "He gave a fatherly piece of advice." },
    },
    {
      fi: "isänmaa",
      en: "fatherland, homeland",
      taso: "B1",
      esim: { fi: "Sotilaat puolustivat isänmaata.", en: "The soldiers defended the homeland." },
    },
  ],
  synonyymit: [
    { fi: "iskä", en: "daddy (colloquial)" },
    { fi: "faija", en: "old man, dad (slang)" },
  ],
  esimerkit: {
    A2: { fi: "Isä tekee ruokaa.", en: "Dad is cooking." },
    B1: { fi: "Isäni opetti minut uimaan.", en: "My father taught me to swim." },
    B2: {
      fi: "Isän rooli perheessä on muuttunut paljon.",
      en: "The father's role in the family has changed a lot.",
    },
  },
  updatedAt: "2026-06-04",
};

export default isä;
