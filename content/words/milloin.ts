import type { Word } from "@/lib/content-types";

// Invariant interrogative adverb of time (no inflection). Asks "when".
const milloin: Word = {
  fi: "milloin",
  slug: "milloin",
  pos: "adverbi (kysymyssana)",
  posClass: "adverbi",
  level: "A1",
  en: "when",
  selitys:
    "Kysyy aikaa (when). Taipumaton kysymyssana. Synonyymi 'koska'. Vrt. paikan kysymyssanat missä/mistä/mihin.",
  kuva: { emoji: "🕐", alt: "milloin – kysymys ajankohdasta" },

  kielioppi: {
    tyyppi: "interrogatiivinen adverbi (aika), taipumaton",
    muodot: [
      { sija: "kysymys", muoto: "milloin?", merkitys: "when?" },
      { sija: "synonyymi", muoto: "koska?", merkitys: "when? (also 'because')" },
      { sija: "vastaus", muoto: "esim. huomenna", merkitys: "e.g. tomorrow" },
    ],
    huom:
      "Ei taivu. 'Koska' on synonyymi kysyttäessä, mutta tarkoittaa myös 'because'. Epäsuorassa kysymyksessä: 'En tiedä, milloin hän tulee.'",
  },
  johdokset: [
    {
      fi: "koska",
      en: "when?; because",
      taso: "A2",
      esim: { fi: "Koska juna lähtee?", en: "When does the train leave?" },
    },
    {
      fi: "milloinkaan",
      en: "ever / (not) ever",
      taso: "B1",
      esim: { fi: "En ole milloinkaan käynyt siellä.", en: "I've never been there." },
    },
    {
      fi: "joskus",
      en: "sometime, sometimes",
      taso: "A2",
      esim: { fi: "Käyn siellä joskus.", en: "I go there sometimes." },
    },
  ],
  synonyymit: [
    { fi: "koska", en: "when (question)" },
    { fi: "minä aikana", en: "at what time" },
  ],
  esimerkit: {
    A2: { fi: "Milloin sinä tulet?", en: "When are you coming?" },
    B1: { fi: "Milloin kauppa aukeaa aamulla?", en: "When does the shop open in the morning?" },
    B2: {
      fi: "Kukaan ei tiennyt tarkalleen, milloin kokous alkaisi.",
      en: "No one knew exactly when the meeting would start.",
    },
  },
  updatedAt: "2026-06-05",
};

export default milloin;
