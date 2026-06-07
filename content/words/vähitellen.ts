import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: tavan adverbi, taipumaton (vähä-sanan vanhasta muodosta).
const vahitellen: Word = {
  fi: "vähitellen",
  slug: "vähitellen",
  pos: "adverbi (tavan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "gradually, little by little",
  selitys:
    "Vähän kerrallaan, asteittain: 'kieli kehittyy vähitellen'. Taipumaton tavan adverbi. Vrt. vähän, asteittain, pikkuhiljaa, yhtäkkiä (vastakohta).",
  kuva: { emoji: "🐌", alt: "vähitellen – vähän kerrallaan, asteittain" },

  kielioppi: {
    tyyppi: "adverbi (tavan adverbi); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "vähitellen", merkitys: "gradually" },
      { sija: "vrt.", muoto: "asteittain", merkitys: "step by step" },
      { sija: "vastakohta", muoto: "yhtäkkiä", merkitys: "suddenly" },
    ],
    huom:
      "Taipumaton adverbi. Ilmaisee, että muutos tapahtuu pikku hiljaa, ei kerralla. Vastakohta yhtäkkiä/äkkiä. Synonyymi pikkuhiljaa. Vrt. vähän = a little, asteittain = in stages.",
  },
  johdokset: [
    {
      fi: "vähä",
      en: "little, scant",
      taso: "B1",
      esim: { fi: "Aikaa on vähän.", en: "There is little time." },
    },
    {
      fi: "asteittain",
      en: "gradually, in stages",
      taso: "B2",
      esim: { fi: "Rajoituksia puretaan asteittain.", en: "Restrictions are lifted gradually." },
    },
  ],
  synonyymit: [
    { fi: "pikkuhiljaa", en: "little by little" },
    { fi: "asteittain", en: "step by step" },
  ],
  esimerkit: {
    A2: { fi: "Sää lämpenee vähitellen.", en: "The weather is warming up gradually." },
    B1: { fi: "Opin uudet sanat vähitellen.", en: "I learn the new words little by little." },
    B2: {
      fi: "Vähitellen huomasin, että asenteeni koko asiaa kohtaan oli muuttunut.",
      en: "Gradually I noticed that my attitude toward the whole thing had changed.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vahitellen;
