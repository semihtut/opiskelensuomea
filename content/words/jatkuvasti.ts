import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: tavan adverbi (jatkuva-adjektiivista -sti), taipumaton.
const jatkuvasti: Word = {
  fi: "jatkuvasti",
  slug: "jatkuvasti",
  pos: "adverbi (tavan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "continuously, constantly, all the time",
  selitys:
    "Koko ajan, taukoamatta: 'puhelin soi jatkuvasti'. Taipumaton tavan adverbi (adjektiivista jatkuva + -sti). Vrt. jatkuva (continuous), jatkua (to continue), koko ajan.",
  kuva: { alt: "jatkuvasti – koko ajan, taukoamatta" },

  kielioppi: {
    tyyppi: "adverbi (tavan adverbi, -sti); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "jatkuvasti", merkitys: "continuously" },
      { sija: "vrt.", muoto: "jatkuva", merkitys: "continuous (adj.)" },
      { sija: "vrt.", muoto: "koko ajan", merkitys: "all the time" },
    ],
    huom:
      "Taipumaton -sti-adverbi, johdettu adjektiivista jatkuva. Ilmaisee keskeytymätöntä tai usein toistuvaa toimintaa. Vrt. verbi jatkua = to continue, adjektiivi jatkuva = continuous.",
  },
  johdokset: [
    {
      fi: "jatkuva",
      en: "continuous, constant",
      taso: "B1",
      esim: { fi: "Kyse on jatkuvasta prosessista.", en: "It is a continuous process." },
    },
    {
      fi: "jatkuvuus",
      en: "continuity",
      taso: "B2",
      esim: { fi: "Palvelun jatkuvuus on turvattava.", en: "The continuity of the service must be secured." },
    },
  ],
  synonyymit: [
    { fi: "koko ajan", en: "all the time" },
    { fi: "lakkaamatta", en: "incessantly" },
  ],
  esimerkit: {
    A2: { fi: "Hän puhuu jatkuvasti.", en: "He talks constantly." },
    B1: { fi: "Hinnat nousevat jatkuvasti.", en: "Prices are rising continuously." },
    B2: {
      fi: "Teknologia kehittyy jatkuvasti, joten taitoja on päivitettävä.",
      en: "Technology develops constantly, so skills must be updated.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jatkuvasti;
