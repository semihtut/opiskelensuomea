import type { Word } from "@/lib/content-types";

// Quantity adverb. Suppletive comparison vähän – vähemmän – vähiten. Governs the
// partitive: "vähän aikaa". Not inflected itself.
const vahan: Word = {
  fi: "vähän",
  slug: "vähän",
  pos: "adverbi (määrän adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "(a) little, few",
  selitys:
    "Ilmaisee pientä määrää. Vaatii partitiivin: 'vähän aikaa'. Vertailu suppletiivinen: vähän – vähemmän – vähiten. Vastakohta paljon.",
  kuva: { alt: "vähän – pieni määrä sormien välissä" },

  kielioppi: {
    tyyppi: "määrän adverbi; suppletiivinen vertailu, vaatii partitiivin",
    muodot: [
      { sija: "perusmuoto", muoto: "vähän", merkitys: "(a) little" },
      { sija: "komparatiivi", muoto: "vähemmän", merkitys: "less" },
      { sija: "superlatiivi", muoto: "vähiten", merkitys: "the least" },
    ],
    huom:
      "Mittaa mitattavaa: 'vähän rahaa, aikaa' (+ partitiivi). Tarkoittaa myös 'hieman': 'Olen vähän väsynyt.' Vertailu vähän → vähemmän → vähiten.",
  },
  johdokset: [
    {
      fi: "vähemmän",
      en: "less (comparative)",
      taso: "A2",
      esim: { fi: "Syön vähemmän sokeria nykyään.", en: "I eat less sugar these days." },
    },
    {
      fi: "vähiten",
      en: "the least (superlative)",
      taso: "B1",
      esim: { fi: "Tämä vaihtoehto maksaa vähiten.", en: "This option costs the least." },
    },
    {
      fi: "vähentää",
      en: "to reduce, subtract",
      taso: "B1",
      esim: { fi: "Vähennä suolan määrää.", en: "Reduce the amount of salt." },
    },
  ],
  synonyymit: [
    { fi: "hieman", en: "a bit, slightly" },
    { fi: "niukasti", en: "scarcely, sparingly" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on vähän aikaa.", en: "I have a little time." },
    B1: { fi: "Tänä vuonna satoi vähemmän kuin viime vuonna.", en: "This year it rained less than last year." },
    B2: {
      fi: "Mitä vähemmän puhut, sitä paremmin kuuntelet.",
      en: "The less you talk, the better you listen.",
    },
  },
  updatedAt: "2026-06-05",
};

export default vahan;
