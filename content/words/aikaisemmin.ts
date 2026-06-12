import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: ajan adverbi (aikainen-adjektiivin komparatiivin adverbi), taipumaton.
const aikaisemmin: Word = {
  fi: "aikaisemmin",
  slug: "aikaisemmin",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "earlier, before, previously",
  selitys:
    "Aiemmin, ennen jotakin hetkeä: 'olen käynyt täällä aikaisemmin'. Adverbin 'aikaisin' komparatiivimuoto, taipumaton. Vastakohta myöhemmin. Synonyymi aiemmin. Vrt. aikainen (early), aikaisin (earliest).",
  kuva: { alt: "aikaisemmin – aiemmin, ennen jotakin hetkeä" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi, komparatiivi); taipumaton",
    muodot: [
      { sija: "perusaste", muoto: "aikaisin", merkitys: "early (adv.)" },
      { sija: "komparatiivi", muoto: "aikaisemmin", merkitys: "earlier" },
      { sija: "vastakohta", muoto: "myöhemmin", merkitys: "later" },
    ],
    huom:
      "Komparatiiviadverbi (-mmin), taipumaton. Sama merkitys kuin 'aiemmin'. Vastakohta myöhemmin. 'Aikaisemmin tänään' = earlier today. Vrt. adjektiivi aikainen = early.",
  },
  johdokset: [
    {
      fi: "aikainen",
      en: "early",
      taso: "B1",
      esim: { fi: "Aikainen lintu madon nappaa.", en: "The early bird catches the worm." },
    },
    {
      fi: "aiempi",
      en: "earlier, previous",
      taso: "B1",
      esim: { fi: "Aiempi kokemus auttoi.", en: "Previous experience helped." },
    },
  ],
  synonyymit: [
    { fi: "aiemmin", en: "earlier, previously" },
    { fi: "ennen", en: "before" },
  ],
  esimerkit: {
    A2: { fi: "Tulin aikaisemmin kuin sinä.", en: "I came earlier than you." },
    B1: { fi: "Olen nähnyt tämän elokuvan aikaisemmin.", en: "I have seen this film before." },
    B2: {
      fi: "Jos olisimme lähteneet aikaisemmin, emme olisi myöhästyneet junasta.",
      en: "If we had left earlier, we wouldn't have missed the train.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aikaisemmin;
