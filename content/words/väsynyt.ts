import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 47/kuollut, no gradation (past active
// participle of väsyä). Genitive väsyneen, partitive väsynyttä, illative
// väsyneeseen, partitive pl väsyneitä, nominative pl väsyneet.
const vasynyt: Word = {
  fi: "väsynyt",
  slug: "väsynyt",
  pos: "adjektiivi (tyyppi 47/kuollut)",
  posClass: "adjektiivi",
  level: "A2",
  en: "tired, weary",
  selitys:
    "Tila, jossa on voimaton ja levon tarpeessa. Tyyppi 47, ei astevaihtelua. Alkujaan verbin väsyä partisiippi (väsynyt = has tired).",
  kuva: { emoji: "😴", alt: "väsynyt – väsynyt, haukotteleva ihminen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 47/kuollut; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "väsyneen", merkitys: "of the tired" },
      { sija: "partitiivi (yks.)", muoto: "väsynyttä", merkitys: "tired (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "väsyneitä", merkitys: "tired (partitive pl.)" },
    ],
    huom:
      "Nominatiivi väsynyt, mutta vartalo väsynee-: väsyneen, väsyneeseen, väsyneet. Partitiivi väsynyttä. Samaa tyyppiä kuin kuollut, tehnyt, mennyt.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "väsynyt" },
          { label: "Partitiivi", form: "väsynyttä" },
          { label: "Genetiivi", form: "väsyneen" },
          { label: "Inessiivi", form: "väsyneessä" },
          { label: "Illatiivi", form: "väsyneeseen" },
          { label: "Adessiivi", form: "väsyneellä" },
          { label: "Essiivi", form: "väsyneenä" },
          { label: "Translatiivi", form: "väsyneeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "väsyneet" },
          { label: "Partitiivi", form: "väsyneitä" },
          { label: "Genetiivi", form: "väsyneiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "väsyneempi" },
          { label: "Komparatiivi (gen.)", form: "väsyneemmän" },
          { label: "Superlatiivi (nom.)", form: "väsynein" },
          { label: "Superlatiivi (gen.)", form: "väsyneimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "väsyä",
      en: "to get tired",
      taso: "B1",
      esim: { fi: "Väsyn helposti illalla.", en: "I get tired easily in the evening." },
    },
    {
      fi: "väsymys",
      en: "fatigue, tiredness",
      taso: "B1",
      esim: { fi: "Väsymys iski iltapäivällä.", en: "Fatigue hit in the afternoon." },
    },
    {
      fi: "uupunut",
      en: "exhausted",
      taso: "B2",
      esim: { fi: "Hän oli täysin uupunut.", en: "He was completely exhausted." },
    },
  ],
  synonyymit: [
    { fi: "uupunut", en: "exhausted" },
    { fi: "poikki", en: "worn out (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Olen tosi väsynyt tänään.", en: "I'm really tired today." },
    B1: { fi: "Väsyneet matkustajat nukahtivat junassa.", en: "The tired passengers fell asleep on the train." },
    B2: {
      fi: "Pitkän työpäivän jälkeen hän oli liian väsynyt laittamaan ruokaa.",
      en: "After the long workday he was too tired to cook.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vasynyt;
