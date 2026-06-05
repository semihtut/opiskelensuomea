import type { Word } from "@/lib/content-types";

// Coordinating conjunction "joten" (so, therefore). Invariant. Introduces a
// consequence: "Olin väsynyt, joten menin nukkumaan."
const joten: Word = {
  fi: "joten",
  slug: "joten",
  pos: "konjunktio (rinnastuskonjunktio)",
  posClass: "konjunktio",
  level: "A2",
  en: "so, therefore",
  selitys:
    "Rinnastuskonjunktio, joka ilmaisee seurausta tai päätelmää. Ei taivuteta. Edellä pilkku: 'Satoi, joten otin sateenvarjon.' Vrt. siksi.",
  kuva: { emoji: "➡️", alt: "joten – seuraus, siksi" },

  kielioppi: {
    tyyppi: "rinnastuskonjunktio (seuraus); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "joten", merkitys: "so, therefore" },
      { sija: "vrt.", muoto: "siksi", merkitys: "for that reason" },
      { sija: "vrt.", muoto: "joten kuten", merkitys: "somehow, so-so" },
    ],
    huom:
      "Yhdistää syyn ja seurauksen: 'En ehtinyt, joten jäin kotiin.' Edellä pilkku. Älä sekoita ilmaukseen 'joten kuten' (somehow / passably).",
  },
  johdokset: [
    {
      fi: "joten kuten",
      en: "somehow, so-so",
      taso: "B2",
      esim: { fi: "Sain työn tehtyä joten kuten.", en: "I got the work done somehow." },
    },
    {
      fi: "siten",
      en: "thus, in that way",
      taso: "B2",
      esim: { fi: "Säästin rahaa ja siten ostin auton.", en: "I saved money and thus bought a car." },
    },
    {
      fi: "näin ollen",
      en: "consequently, hence",
      taso: "B2",
      esim: { fi: "Sopimus päättyi; näin ollen lähden.", en: "The contract ended; consequently I'm leaving." },
    },
  ],
  synonyymit: [
    { fi: "siksi", en: "therefore" },
    { fi: "sen takia", en: "because of that" },
  ],
  esimerkit: {
    A2: { fi: "Olin väsynyt, joten menin nukkumaan.", en: "I was tired, so I went to sleep." },
    B1: { fi: "Bussi oli myöhässä, joten myöhästyin töistä.", en: "The bus was late, so I was late for work." },
    B2: {
      fi: "Sää näytti epävarmalta, joten otimme varmuuden vuoksi sateenvarjot mukaan.",
      en: "The weather looked uncertain, so we took umbrellas along just in case.",
    },
  },
  updatedAt: "2026-06-05",
};

export default joten;
