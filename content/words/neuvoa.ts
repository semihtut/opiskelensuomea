import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem neuvo-.
// Present neuvon, past neuvoin, past participle neuvonut.
const neuvoa: Word = {
  fi: "neuvoa",
  slug: "neuvoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to advise, to give directions",
  selitys:
    "Antaa ohje tai neuvo: 'neuvoa tietä'. Tyyppi 1 (-oa), ei astevaihtelua, vartalo neuvo-. Neuvottava partitiivissa. Vrt. neuvo (advice), neuvotella (to negotiate), neuvosto (council).",
  kuva: { alt: "neuvoa – antaa ohje tai neuvo" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa); ei astevaihtelua; vartalo neuvo-",
    muodot: [
      { sija: "preesens (minä)", muoto: "neuvon", merkitys: "I advise" },
      { sija: "imperfekti (minä)", muoto: "neuvoin", merkitys: "I advised" },
      { sija: "NUT-partisiippi", muoto: "neuvonut", merkitys: "(have) advised" },
    ],
    huom:
      "Neuvottava partitiivissa: 'neuvoin häntä'. Voi neuvoa myös reitin: 'neuvoa tie asemalle'. Vrt. neuvo = advice, neuvotella = to negotiate.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "neuvon" },
          { label: "sinä", form: "neuvot" },
          { label: "hän", form: "neuvoo" },
          { label: "me", form: "neuvomme" },
          { label: "te", form: "neuvotte" },
          { label: "he", form: "neuvovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en neuvo" },
          { label: "hän", form: "ei neuvo" },
          { label: "he", form: "eivät neuvo" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "neuvoin" },
          { label: "sinä", form: "neuvoit" },
          { label: "hän", form: "neuvoi" },
          { label: "me", form: "neuvoimme" },
          { label: "te", form: "neuvoitte" },
          { label: "he", form: "neuvoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen neuvonut" },
          { label: "hän", form: "on neuvonut" },
          { label: "he", form: "ovat neuvoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "neuvo!" },
          { label: "te", form: "neuvokaa!" },
          { label: "kielto (sinä)", form: "älä neuvo" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "neuvo",
      en: "advice, piece of advice",
      taso: "A2",
      esim: { fi: "Anna minulle hyvä neuvo.", en: "Give me a good piece of advice." },
    },
    {
      fi: "neuvotella",
      en: "to negotiate",
      taso: "B2",
      esim: { fi: "Osapuolet neuvottelivat sopimuksesta.", en: "The parties negotiated the contract." },
    },
    {
      fi: "neuvonta",
      en: "advisory service, counseling",
      taso: "B2",
      esim: { fi: "Sain apua opintojen neuvonnasta.", en: "I got help from study counseling." },
    },
  ],
  synonyymit: [
    { fi: "opastaa", en: "to guide" },
    { fi: "ohjata", en: "to direct, instruct" },
  ],
  esimerkit: {
    A2: { fi: "Neuvotko minulle tien asemalle?", en: "Can you give me directions to the station?" },
    B1: { fi: "Lääkäri neuvoi minua lepäämään.", en: "The doctor advised me to rest." },
    B2: {
      fi: "Kokenut kollega neuvoi minua olemaan allekirjoittamatta liian aikaisin.",
      en: "An experienced colleague advised me not to sign too early.",
    },
  },
  updatedAt: "2026-06-06",
};

export default neuvoa;
