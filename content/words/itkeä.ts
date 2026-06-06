import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 58/laskea, no gradation, stem itke-.
// Present minä itken, hän itkee; imperfect minä itkin, hän itki; NUT participle itkenyt.
const itkeä: Word = {
  fi: "itkeä",
  slug: "itkeä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to cry, weep",
  selitys:
    "Vuodattaa kyyneliä surusta tai liikutuksesta: 'itkeä onnesta'. Tyyppi 1 (-eä), tyyppi 58/laskea, ei astevaihtelua (tk säilyy). Vrt. itku (crying), itkettää (to bring to tears).",
  kuva: { emoji: "😢", alt: "itkeä – vuodattaa kyyneliä" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-eä), Kotus 58/laskea; ei astevaihtelua; vartalo itke-",
    muodot: [
      { sija: "preesens (minä)", muoto: "itken", merkitys: "I cry" },
      { sija: "imperfekti (minä)", muoto: "itkin", merkitys: "I cried" },
      { sija: "NUT-partisiippi", muoto: "itkenyt", merkitys: "(have) cried" },
    ],
    huom:
      "Ei astevaihtelua (tk säilyy kaikissa muodoissa: itken, itkin, itkenyt). 'Itkeä jotakin' = to cry over/about. Vrt. itku = crying, itkettää = to make (someone) want to cry.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "itken" },
          { label: "sinä", form: "itket" },
          { label: "hän", form: "itkee" },
          { label: "me", form: "itkemme" },
          { label: "te", form: "itkette" },
          { label: "he", form: "itkevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en itke" },
          { label: "hän", form: "ei itke" },
          { label: "he", form: "eivät itke" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "itkin" },
          { label: "sinä", form: "itkit" },
          { label: "hän", form: "itki" },
          { label: "me", form: "itkimme" },
          { label: "te", form: "itkitte" },
          { label: "he", form: "itkivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen itkenyt" },
          { label: "hän", form: "on itkenyt" },
          { label: "he", form: "ovat itkeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "itke!" },
          { label: "te", form: "itkekää!" },
          { label: "kielto (sinä)", form: "älä itke" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "itku",
      en: "crying, weeping",
      taso: "A2",
      esim: { fi: "Lapsi puhkesi itkuun.", en: "The child burst into tears." },
    },
    {
      fi: "itkettää",
      en: "to bring (someone) to tears",
      taso: "B2",
      esim: { fi: "Surullinen laulu itketti minua.", en: "The sad song brought me to tears." },
    },
    {
      fi: "itkuinen",
      en: "tearful",
      taso: "B2",
      esim: { fi: "Hän oli itkuinen koko aamun.", en: "She was tearful all morning." },
    },
  ],
  synonyymit: [
    { fi: "vollottaa", en: "to bawl" },
    { fi: "nyyhkyttää", en: "to sob" },
  ],
  esimerkit: {
    A2: { fi: "Vauva itkee, koska sillä on nälkä.", en: "The baby is crying because it's hungry." },
    B1: { fi: "Hän itki ilosta saatuaan uutisen.", en: "She cried with joy when she got the news." },
    B2: {
      fi: "Ei kannata itkeä mennyttä; katso eteenpäin.",
      en: "There's no use crying over the past; look ahead.",
    },
  },
  updatedAt: "2026-06-06",
};

export default itkeä;
