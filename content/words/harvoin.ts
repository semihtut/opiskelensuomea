import type { Word } from "@/lib/content-types";

// Frequency adverb "harvoin" (rarely, seldom). Comparative harvemmin. Opposite usein.
const harvoin: Word = {
  fi: "harvoin",
  slug: "harvoin",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "rarely, seldom",
  selitys:
    "Vain muutaman kerran; ei usein. Toistuvuuden adverbi. Vertailu: harvoin – harvemmin – harvimmin. Vastakohta usein. Pohjana adjektiivi harva.",
  kuva: { emoji: "🌙", alt: "harvoin – vain harvoin, harvinaista" },

  kielioppi: {
    tyyppi: "toistuvuuden adverbi; vertailu harvemmin / harvimmin",
    muodot: [
      { sija: "perusmuoto", muoto: "harvoin", merkitys: "rarely" },
      { sija: "komparatiivi", muoto: "harvemmin", merkitys: "less often" },
      { sija: "superlatiivi", muoto: "harvimmin", merkitys: "least often" },
    ],
    huom:
      "Toistuvuusasteikko: aina – usein – joskus – harvoin – ei koskaan. Pohjana harva (sparse, few). 'Yani harvoin' korostaa harvinaisuutta.",
  },
  johdokset: [
    {
      fi: "harva",
      en: "sparse; few (people)",
      taso: "B1",
      esim: { fi: "Harva tietää tämän.", en: "Few people know this." },
    },
    {
      fi: "harvinainen",
      en: "rare",
      taso: "B1",
      esim: { fi: "Se on harvinainen lintu.", en: "It is a rare bird." },
    },
    {
      fi: "harvakseltaan",
      en: "infrequently, sparsely",
      taso: "B2",
      esim: { fi: "Busseja kulkee harvakseltaan.", en: "Buses run infrequently." },
    },
  ],
  synonyymit: [
    { fi: "harvakseltaan", en: "infrequently" },
    { fi: "ei usein", en: "not often" },
  ],
  esimerkit: {
    A2: { fi: "Syön harvoin makeisia.", en: "I rarely eat sweets." },
    B1: { fi: "Näemme toisiamme harvemmin kuin ennen.", en: "We see each other less often than before." },
    B2: {
      fi: "Hän puhuu harvoin itsestään, joten kukaan ei oikein tunne häntä.",
      en: "She rarely talks about herself, so no one really knows her.",
    },
  },
  updatedAt: "2026-06-05",
};

export default harvoin;
