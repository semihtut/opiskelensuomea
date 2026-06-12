import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem irtisano-.
// Present minä irtisanon, hän irtisanoo; imperfect minä irtisanoin, hän irtisanoi; NUT irtisanonut.
const irtisanoa: Word = {
  fi: "irtisanoa",
  slug: "irtisanoa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to lay off, dismiss; to give notice, terminate",
  selitys:
    "Päättää työsuhde tai sopimus: työnantaja irtisanoo työntekijän, tai työntekijä irtisanoo itsensä (irtisanoutua). Myös: irtisanoa vuokrasopimus. Tyyppi 1 (-oa), Kotus 52/sanoa, ei astevaihtelua. Yhdysverbi irti + sanoa. Vrt. sanoa, irtisanoutua, irtisanominen.",
  kuva: { alt: "irtisanoa – päättää työsuhde tai sopimus" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-oa), Kotus 52/sanoa; ei astevaihtelua (vartalo irtisano-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "irtisanon", merkitys: "I terminate / give notice" },
      { sija: "imperfekti (minä)", muoto: "irtisanoin", merkitys: "I terminated" },
      { sija: "NUT-partisiippi", muoto: "irtisanonut", merkitys: "(have) terminated" },
    ],
    huom:
      "Tyyppi 52/sanoa: ei astevaihtelua. Transitiivinen: 'työnantaja irtisanoi hänet'. Refleksiivinen muoto irtisanoutua = to resign ('irtisanoudun'). Passiivi irtisanotaan. Vrt. sanoa, irtisanoutua.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "irtisanon" },
          { label: "sinä", form: "irtisanot" },
          { label: "hän", form: "irtisanoo" },
          { label: "me", form: "irtisanomme" },
          { label: "te", form: "irtisanotte" },
          { label: "he", form: "irtisanovat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en irtisano" },
          { label: "hän", form: "ei irtisano" },
          { label: "he", form: "eivät irtisano" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "irtisanoin" },
          { label: "sinä", form: "irtisanoit" },
          { label: "hän", form: "irtisanoi" },
          { label: "me", form: "irtisanoimme" },
          { label: "te", form: "irtisanoitte" },
          { label: "he", form: "irtisanoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen irtisanonut" },
          { label: "hän", form: "on irtisanonut" },
          { label: "he", form: "ovat irtisanoneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "irtisano!" },
          { label: "te", form: "irtisanokaa!" },
          { label: "kielto (sinä)", form: "älä irtisano" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "irtisanoutua",
      en: "to resign, quit (one's job)",
      taso: "B2",
      esim: { fi: "Hän irtisanoutui ja vaihtoi alaa.", en: "She resigned and changed fields." },
    },
    {
      fi: "irtisanominen",
      en: "dismissal, layoff",
      taso: "B2",
      esim: { fi: "Irtisanomiset koskivat kymmentä henkilöä.", en: "The layoffs affected ten people." },
    },
  ],
  synonyymit: [
    { fi: "erottaa", en: "to dismiss, fire" },
  ],
  esimerkit: {
    A2: { fi: "Yritys joutui irtisanomaan työntekijöitä.", en: "The company had to lay off employees." },
    B1: { fi: "Voin irtisanoa vuokrasopimuksen kuukauden varoitusajalla.", en: "I can terminate the lease with a month's notice." },
    B2: {
      fi: "Hänet irtisanottiin tuotannollisista syistä, ei oman työnsä takia.",
      en: "He was laid off for production-related reasons, not because of his own work.",
    },
  },
  updatedAt: "2026-06-07",
};

export default irtisanoa;
