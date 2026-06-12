import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 52/sanoa (verb type 1), no gradation,
// stem sano-. Present sanon, past sanoin/sanoi, past participle sanonut/sanoneet.
const sanoa: Word = {
  fi: "sanoa",
  slug: "sanoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to say",
  selitys:
    "Tuottaa sanoja puheena; ilmaista jotakin sanoin. Tyyppi 1, vartalo sano-, ei astevaihtelua. Tämä on koko verbityypin mallisana.",
  kuva: { alt: "sanoa – puhekupla" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa); vartalo sano-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "sanon", merkitys: "I say" },
      { sija: "imperfekti (minä)", muoto: "sanoin", merkitys: "I said" },
      { sija: "kielto (minä)", muoto: "en sano", merkitys: "I don't say" },
    ],
    huom:
      "Erota sanoa (= say, lausua) ja kertoa (= tell, narrate) ja puhua (= speak). Sanottava asia usein partitiivissa tai että-lauseena.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "sanon" },
          { label: "sinä", form: "sanot" },
          { label: "hän", form: "sanoo" },
          { label: "me", form: "sanomme" },
          { label: "te", form: "sanotte" },
          { label: "he", form: "sanovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en sano" },
          { label: "sinä", form: "et sano" },
          { label: "hän", form: "ei sano" },
          { label: "me", form: "emme sano" },
          { label: "te", form: "ette sano" },
          { label: "he", form: "eivät sano" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "sanoin" },
          { label: "sinä", form: "sanoit" },
          { label: "hän", form: "sanoi" },
          { label: "me", form: "sanoimme" },
          { label: "te", form: "sanoitte" },
          { label: "he", form: "sanoivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en sanonut" },
          { label: "sinä", form: "et sanonut" },
          { label: "hän", form: "ei sanonut" },
          { label: "me", form: "emme sanoneet" },
          { label: "te", form: "ette sanoneet" },
          { label: "he", form: "eivät sanoneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen sanonut" },
          { label: "sinä", form: "olet sanonut" },
          { label: "hän", form: "on sanonut" },
          { label: "me", form: "olemme sanoneet" },
          { label: "te", form: "olette sanoneet" },
          { label: "he", form: "ovat sanoneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole sanonut" },
          { label: "hän", form: "ei ole sanonut" },
          { label: "he", form: "eivät ole sanoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "sano!" },
          { label: "te", form: "sanokaa!" },
          { label: "kielto (sinä)", form: "älä sano" },
          { label: "kielto (te)", form: "älkää sanoko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sana",
      en: "word",
      taso: "A1",
      esim: { fi: "En tiedä tämän sanan merkitystä.", en: "I don't know this word's meaning." },
    },
    {
      fi: "sanonta",
      en: "saying, idiom",
      taso: "B1",
      esim: { fi: "Se on vanha suomalainen sanonta.", en: "It's an old Finnish saying." },
    },
    {
      fi: "sanoma",
      en: "message",
      taso: "B2",
      esim: { fi: "Tarinan sanoma on selvä.", en: "The story's message is clear." },
    },
  ],
  synonyymit: [
    { fi: "lausua", en: "to utter, pronounce" },
    { fi: "todeta", en: "to state, remark" },
  ],
  esimerkit: {
    A2: { fi: "Mitä sinä sanoit?", en: "What did you say?" },
    B1: { fi: "Hän sanoi tulevansa myöhemmin.", en: "She said she'd come later." },
    B2: {
      fi: "En osaa sanoa, kumpi vaihtoehto on parempi.",
      en: "I can't say which option is better.",
    },
  },
  updatedAt: "2026-06-05",
};

export default sanoa;
