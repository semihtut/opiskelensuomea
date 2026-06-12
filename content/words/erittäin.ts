import type { Word } from "@/lib/content-types";

// Degree adverb "erittäin" (extremely, very). Invariant. Stronger than hyvin/todella.
const erittain: Word = {
  fi: "erittäin",
  slug: "erittäin",
  pos: "adverbi (asteen adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "extremely, very",
  selitys:
    "Voimakas vahvistus: 'erittäin hyvä' = extremely good. Asteen adverbi, ei taivuteta. Hieman muodollisempi ja vahvempi kuin hyvin tai todella.",
  kuva: { alt: "erittäin – erittäin korkea aste" },

  kielioppi: {
    tyyppi: "asteen adverbi; taipumaton; vahva intensiteetti",
    muodot: [
      { sija: "perusmuoto", muoto: "erittäin", merkitys: "extremely, very" },
      { sija: "vrt.", muoto: "todella / hyvin", merkitys: "really / very" },
      { sija: "vrt.", muoto: "äärimmäisen", merkitys: "extremely (the utmost)" },
    ],
    huom:
      "Aste: melko < hyvin/todella < erittäin < äärimmäisen. 'Erittäin' on hieman kirjakielinen; sopii sekä myönteiseen että kielteiseen ('erittäin huono').",
  },
  johdokset: [
    {
      fi: "äärimmäisen",
      en: "extremely (the utmost)",
      taso: "B2",
      esim: { fi: "Tilanne oli äärimmäisen vaikea.", en: "The situation was extremely difficult." },
    },
    {
      fi: "erityinen",
      en: "special, particular",
      taso: "B1",
      esim: { fi: "Tänään on erityinen päivä.", en: "Today is a special day." },
    },
    {
      fi: "erityisesti",
      en: "especially, particularly",
      taso: "B1",
      esim: { fi: "Pidän erityisesti kesästä.", en: "I especially like summer." },
    },
  ],
  synonyymit: [
    { fi: "todella", en: "really, very" },
    { fi: "äärimmäisen", en: "extremely" },
  ],
  esimerkit: {
    A2: { fi: "Olen erittäin iloinen.", en: "I'm extremely happy." },
    B1: { fi: "Palvelu oli erittäin hyvää.", en: "The service was extremely good." },
    B2: {
      fi: "Hän on erittäin lahjakas muusikko, mutta esiintyy julkisesti vain harvoin.",
      en: "She is an extremely talented musician, but performs publicly only rarely.",
    },
  },
  updatedAt: "2026-06-05",
};

export default erittain;
