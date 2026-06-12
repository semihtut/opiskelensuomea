import type { Word } from "@/lib/content-types";

// Invariant interjection / adverb (no inflection). Used to apologize and to get
// someone's attention. Historically a fossilized case form of "anteeksi anto".
const anteeksi: Word = {
  fi: "anteeksi",
  slug: "anteeksi",
  pos: "interjektio / adverbi",
  posClass: "adverbi",
  level: "A1",
  en: "sorry; excuse me",
  selitys:
    "Anteeksipyyntö tai huomion pyytäminen ('Anteeksi, voitko auttaa?'). Taipumaton sana.",
  kuva: { alt: "anteeksi – anteeksipyyntö, kumarrus" },

  kielioppi: {
    tyyppi: "interjektio / adverbi (taipumaton)",
    muodot: [
      { sija: "anteeksipyyntö", muoto: "anteeksi", merkitys: "sorry / excuse me" },
      { sija: "verbi-ilmaus", muoto: "pyytää anteeksi", merkitys: "to apologize" },
      { sija: "substantiivi", muoto: "anteeksipyyntö", merkitys: "an apology" },
    ],
    huom:
      "Ei taivu. 'Anteeksi' aloittaa kohteliaan pyynnön ('Anteeksi, missä on…?') tai pyytää anteeksi. Vahvempi pahoittelu: 'Olen pahoillani.'",
  },
  johdokset: [
    {
      fi: "pyytää anteeksi",
      en: "to apologize",
      taso: "A2",
      esim: { fi: "Pyydän anteeksi myöhästymistä.", en: "I apologize for being late." },
    },
    {
      fi: "anteeksipyyntö",
      en: "apology",
      taso: "B1",
      esim: { fi: "Hän esitti vilpittömän anteeksipyynnön.", en: "He offered a sincere apology." },
    },
    {
      fi: "anteeksiantamaton",
      en: "unforgivable",
      taso: "B2",
      esim: { fi: "Se oli anteeksiantamaton virhe.", en: "It was an unforgivable mistake." },
    },
  ],
  synonyymit: [
    { fi: "sori", en: "sorry (colloquial)" },
    { fi: "pahoittelut", en: "apologies" },
  ],
  esimerkit: {
    A2: { fi: "Anteeksi, missä on asema?", en: "Excuse me, where is the station?" },
    B1: { fi: "Anteeksi, en kuullut mitä sanoit.", en: "Sorry, I didn't hear what you said." },
    B2: {
      fi: "Hän pyysi anteeksi käytöstään koko ryhmältä.",
      en: "He apologized for his behavior to the whole group.",
    },
  },
  updatedAt: "2026-06-04",
};

export default anteeksi;
