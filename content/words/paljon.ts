import type { Word } from "@/lib/content-types";

// Quantity adverb. Suppletive comparison paljon – enemmän – eniten. Governs the
// partitive: "paljon vettä". Not inflected itself.
const paljon: Word = {
  fi: "paljon",
  slug: "paljon",
  pos: "adverbi (määrän adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "much, a lot",
  selitys:
    "Ilmaisee suurta määrää. Vaatii partitiivin: 'paljon rahaa'. Vertailu on suppletiivinen: paljon – enemmän – eniten. Vastakohta vähän.",
  kuva: { emoji: "💰", alt: "paljon – suuri kasa" },

  kielioppi: {
    tyyppi: "määrän adverbi; suppletiivinen vertailu, vaatii partitiivin",
    muodot: [
      { sija: "perusmuoto", muoto: "paljon", merkitys: "much, a lot" },
      { sija: "komparatiivi", muoto: "enemmän", merkitys: "more" },
      { sija: "superlatiivi", muoto: "eniten", merkitys: "the most" },
    ],
    huom:
      "Mittaa mitattavaa: 'paljon vettä, rahaa, aikaa' (+ partitiivi). Laskettavista käytetään 'monta/moni'. Vertailu paljon → enemmän → eniten.",
  },
  johdokset: [
    {
      fi: "enemmän",
      en: "more (comparative)",
      taso: "A2",
      esim: { fi: "Tarvitsen enemmän aikaa.", en: "I need more time." },
    },
    {
      fi: "eniten",
      en: "the most (superlative)",
      taso: "B1",
      esim: { fi: "Pidän eniten kesästä.", en: "I like summer the most." },
    },
    {
      fi: "paljous",
      en: "abundance, multitude",
      taso: "B2",
      esim: { fi: "Vaihtoehtojen paljous hämmensi.", en: "The abundance of options was confusing." },
    },
  ],
  synonyymit: [
    { fi: "runsaasti", en: "plenty, abundantly" },
    { fi: "tosi paljon", en: "a whole lot (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on paljon työtä.", en: "I have a lot of work." },
    B1: { fi: "Hän puhuu paljon mutta tekee vähän.", en: "He talks a lot but does little." },
    B2: {
      fi: "Sade toi paljon vettä lyhyessä ajassa.",
      en: "The rain brought a lot of water in a short time.",
    },
  },
  updatedAt: "2026-06-05",
};

export default paljon;
