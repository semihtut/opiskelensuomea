import type { Word } from "@/lib/content-types";

// Phrase entry. "mitä kuuluu?" literally = "what is heard?"; kuuluu is the 3rd-person
// present of the verb kuulua (to be heard; to belong). The reply is in the partitive.
const heiMitäKuuluu: Word = {
  fi: "hei, mitä kuuluu?",
  slug: "hei-mitä-kuuluu",
  pos: "fraasi",
  posClass: "fraasi",
  level: "A1",
  en: "hi, how are you? (lit. 'what is heard?')",
  selitys:
    "Tavallinen tervehdys ja kuulumisten kysyminen. Vastauksena esim. 'Kiitos, hyvää.' tai 'Ihan hyvää.' (partitiivissa).",
  kielioppi: {
    tyyppi: "fraasi; ei taivuteta kokonaisuutena",
    muodot: [
      { sija: "tervehdys", muoto: "hei", merkitys: "hi, hello" },
      { sija: "kysymys", muoto: "mitä kuuluu?", merkitys: "how are you? (lit. what is heard?)" },
      { sija: "verbi (kuulua)", muoto: "kuuluu", merkitys: "is heard; belongs (3rd person)" },
      { sija: "vastaus", muoto: "kiitos, hyvää", merkitys: "thanks, good (partitive)" },
    ],
    huom:
      "Kirjaimellisesti 'mitä kuuluu?' = 'what is heard?'. 'Kuuluu' on verbin kuulua preesensin 3. persoona. Vastaus annetaan partitiivissa: 'Hyvää.' Epämuodollisempi vaihtoehto: 'Miten menee?'.",
  },
  johdokset: [
    {
      fi: "kuulua",
      en: "to be heard; to belong",
      taso: "A2",
      esim: { fi: "Tämä kirja kuuluu minulle.", en: "This book belongs to me." },
    },
    {
      fi: "kuulumiset",
      en: "news, how things are (with someone)",
      taso: "B1",
      esim: { fi: "Kerro kuulumiset!", en: "Tell me your news!" },
    },
    {
      fi: "Miten menee?",
      en: "How's it going?",
      taso: "A2",
      esim: { fi: "Hei! Miten menee?", en: "Hi! How's it going?" },
    },
  ],
  synonyymit: [
    { fi: "Miten menee?", en: "How's it going?" },
    { fi: "Mitä sinulle kuuluu?", en: "How are you? (to you specifically)" },
    { fi: "Moi", en: "Hi (informal)" },
  ],
  esimerkit: {
    A2: { fi: "Hei, mitä kuuluu? – Kiitos, hyvää!", en: "Hi, how are you? – Thanks, good!" },
    B1: {
      fi: "Hei, pitkästä aikaa! Mitä sinulle kuuluu?",
      en: "Hi, long time no see! How are you?",
    },
    B2: {
      fi: "Mitäs tänne kuuluu – onko kaikki ennallaan?",
      en: "So how are things here – is everything the same as before?",
    },
  },
  updatedAt: "2026-06-04",
};

export default heiMitäKuuluu;
