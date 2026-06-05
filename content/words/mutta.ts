import type { Word } from "@/lib/content-types";

// Coordinating conjunction "mutta" (but). Invariant. Joins two clauses showing
// contrast; a comma precedes it: "Halusin tulla, mutta en ehtinyt."
const mutta: Word = {
  fi: "mutta",
  slug: "mutta",
  pos: "konjunktio (rinnastuskonjunktio)",
  posClass: "konjunktio",
  level: "A1",
  en: "but",
  selitys:
    "Rinnastuskonjunktio, joka ilmaisee vastakohtaa. Ei taivuteta. Edellä tulee pilkku: 'Olen väsynyt, mutta onnellinen.' Vrt. vaan (kielteisen jälkeen).",
  kuva: { emoji: "↔️", alt: "mutta – vastakohta kahden asian välillä" },

  kielioppi: {
    tyyppi: "rinnastuskonjunktio; taipumaton; yhdistää kaksi lausetta",
    muodot: [
      { sija: "perusmuoto", muoto: "mutta", merkitys: "but" },
      { sija: "vrt.", muoto: "vaan", merkitys: "but (rather, after a negative)" },
      { sija: "vrt.", muoto: "kuitenkin", merkitys: "however" },
    ],
    huom:
      "Mutta-lauseen edellä pilkku: 'Pidän kahvista, mutta en teestä.' Älä sekoita: 'vaan' käytetään kielteisen väitteen jälkeen ('ei tee, vaan kahvia').",
  },
  johdokset: [
    {
      fi: "vaan",
      en: "but (rather)",
      taso: "B1",
      esim: { fi: "En halua teetä, vaan kahvia.", en: "I don't want tea, but coffee." },
    },
    {
      fi: "mutta silti",
      en: "but still",
      taso: "B1",
      esim: { fi: "Oli kylmä, mutta silti lähdimme ulos.", en: "It was cold, but we still went out." },
    },
    {
      fi: "ei… mutta",
      en: "not… but",
      taso: "B2",
      esim: { fi: "Se ei ole halpaa, mutta se on laadukasta.", en: "It isn't cheap, but it is high quality." },
    },
  ],
  synonyymit: [
    { fi: "kuitenkin", en: "however" },
    { fi: "silti", en: "still, nonetheless" },
  ],
  esimerkit: {
    A2: { fi: "Haluan tulla, mutta minulla ei ole aikaa.", en: "I want to come, but I don't have time." },
    B1: { fi: "Ruoka oli hyvää, mutta liian kallista.", en: "The food was good, but too expensive." },
    B2: {
      fi: "Yritin soittaa monta kertaa, mutta puhelin oli koko illan kiinni.",
      en: "I tried to call many times, but the phone was switched off all evening.",
    },
  },
  updatedAt: "2026-06-05",
};

export default mutta;
