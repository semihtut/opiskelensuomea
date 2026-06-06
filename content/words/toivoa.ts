import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem toivo-.
// Present toivon, past toivoin, past participle toivonut.
const toivoa: Word = {
  fi: "toivoa",
  slug: "toivoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to hope (for), to wish",
  selitys:
    "Haluta että jokin hyvä tapahtuu: 'toivon, että…'. Vrt. haluta (tahtoa konkreettisesti), odottaa (vartoa). Substantiivi: toive.",
  kuva: { emoji: "🌠", alt: "toivoa – haluta että jokin hyvä tapahtuu" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa); ei astevaihtelua; vartalo toivo-",
    muodot: [
      { sija: "preesens (minä)", muoto: "toivon", merkitys: "I hope" },
      { sija: "imperfekti (minä)", muoto: "toivoin", merkitys: "I hoped" },
      { sija: "NUT-partisiippi", muoto: "toivonut", merkitys: "(have) hoped" },
    ],
    huom:
      "Usein 'että'-lauseen kanssa: 'Toivon, että tulet.' Toivottavasti = hopefully. Vrt. haluta = tahtoa, toivottaa = to wish (someone something).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "toivon" },
          { label: "sinä", form: "toivot" },
          { label: "hän", form: "toivoo" },
          { label: "me", form: "toivomme" },
          { label: "te", form: "toivotte" },
          { label: "he", form: "toivovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en toivo" },
          { label: "hän", form: "ei toivo" },
          { label: "he", form: "eivät toivo" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "toivoin" },
          { label: "sinä", form: "toivoit" },
          { label: "hän", form: "toivoi" },
          { label: "me", form: "toivoimme" },
          { label: "te", form: "toivoitte" },
          { label: "he", form: "toivoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen toivonut" },
          { label: "hän", form: "on toivonut" },
          { label: "he", form: "ovat toivoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "toivo!" },
          { label: "te", form: "toivokaa!" },
          { label: "kielto (sinä)", form: "älä toivo" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "toive",
      en: "wish, hope",
      taso: "B1",
      esim: { fi: "Minulla on yksi toive.", en: "I have one wish." },
    },
    {
      fi: "toivottavasti",
      en: "hopefully",
      taso: "A2",
      esim: { fi: "Toivottavasti sää on hyvä.", en: "Hopefully the weather is good." },
    },
    {
      fi: "toivoton",
      en: "hopeless",
      taso: "B2",
      esim: { fi: "Tilanne ei ole toivoton.", en: "The situation is not hopeless." },
    },
  ],
  synonyymit: [
    { fi: "haluta", en: "to want" },
    { fi: "odottaa", en: "to expect, await" },
  ],
  esimerkit: {
    A2: { fi: "Toivon sinulle hyvää päivää.", en: "I wish you a good day." },
    B1: { fi: "Toivoin, että hän soittaisi.", en: "I hoped that she would call." },
    B2: {
      fi: "Toivon vain, että kaikki sujuu suunnitelmien mukaan.",
      en: "I just hope that everything goes according to plan.",
    },
  },
  updatedAt: "2026-06-06",
};

export default toivoa;
