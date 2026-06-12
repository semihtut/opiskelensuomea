import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, no gradation, stem tanssi-.
// Present tanssin, past tanssin (= present for minä), past participle tanssinut.
const tanssia: Word = {
  fi: "tanssia",
  slug: "tanssia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to dance",
  selitys:
    "Liikkua rytmikkäästi musiikin tahtiin: 'tanssia valssia'. Tyyppi 1 (-ia, sallia-tyyppi), ei astevaihtelua, vartalo tanssi-. Johdettu sanasta tanssi. Vrt. tanssija (dancer), tanssi (a dance).",
  kuva: { alt: "tanssia – liikkua rytmikkäästi musiikin tahtiin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ia), sallia-tyyppi; ei astevaihtelua; vartalo tanssi-",
    muodot: [
      { sija: "preesens (minä)", muoto: "tanssin", merkitys: "I dance" },
      { sija: "imperfekti (minä)", muoto: "tanssin", merkitys: "I danced (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "tanssinut", merkitys: "(have) danced" },
    ],
    huom:
      "i-vartalo: preesens ja imperfekti ovat samanlaiset useimmissa persoonissa (minä tanssin = I dance / I danced). Vain hän eroaa: tanssii (preesens) vs. tanssi (imperfekti). Kohde partitiivissa: 'tanssia tangoa'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tanssin" },
          { label: "sinä", form: "tanssit" },
          { label: "hän", form: "tanssii" },
          { label: "me", form: "tanssimme" },
          { label: "te", form: "tanssitte" },
          { label: "he", form: "tanssivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tanssi" },
          { label: "hän", form: "ei tanssi" },
          { label: "he", form: "eivät tanssi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tanssin" },
          { label: "sinä", form: "tanssit" },
          { label: "hän", form: "tanssi" },
          { label: "me", form: "tanssimme" },
          { label: "te", form: "tanssitte" },
          { label: "he", form: "tanssivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tanssinut" },
          { label: "hän", form: "on tanssinut" },
          { label: "he", form: "ovat tanssineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tanssi!" },
          { label: "te", form: "tanssikaa!" },
          { label: "kielto (sinä)", form: "älä tanssi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tanssi",
      en: "dance",
      taso: "A2",
      esim: { fi: "Tämä tanssi on vaikea.", en: "This dance is difficult." },
    },
    {
      fi: "tanssija",
      en: "dancer",
      taso: "B1",
      esim: { fi: "Hän on ammattitanssija.", en: "She is a professional dancer." },
    },
    {
      fi: "tanssiaiset",
      en: "ball, dance (formal event)",
      taso: "B2",
      esim: { fi: "Koulun tanssiaiset olivat juhlavat.", en: "The school's ball was elegant." },
    },
  ],
  synonyymit: [
    { fi: "tanssahdella", en: "to dance about, prance" },
    { fi: "jorata", en: "to dance (slang)" },
  ],
  esimerkit: {
    A2: { fi: "Tanssitaanko?", en: "Shall we dance?" },
    B1: { fi: "Tanssimme koko illan.", en: "We danced all evening." },
    B2: {
      fi: "Hän oppi tanssimaan tangoa jo nuorena.",
      en: "She learned to dance the tango already as a youth.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tanssia;
