import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 52/sanoa (verb type 1), no gradation,
// stem puhu-. Present puhun, past puhuin/puhui, past participle puhunut/puhuneet.
const puhua: Word = {
  fi: "puhua",
  slug: "puhua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A1",
  en: "to speak, talk",
  selitys:
    "Käyttää kieltä äänellä; keskustella. Tyyppi 1, vartalo puhu-, ei astevaihtelua. Kieli partitiivissa: 'Puhun suomea.'",
  kuva: { emoji: "🗣️", alt: "puhua – puhuva ihminen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); vartalo puhu-, ei astevaihtelua",
    muodot: [
      { sija: "preesens (minä)", muoto: "puhun", merkitys: "I speak" },
      { sija: "imperfekti (minä)", muoto: "puhuin", merkitys: "I spoke" },
      { sija: "kielto (minä)", muoto: "en puhu", merkitys: "I don't speak" },
    ],
    huom:
      "Kieli partitiivissa: 'Puhun suomea.' 'Puhua jollekulle' = speak to someone (allatiivi); 'puhua jostakin' = talk about (elatiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "puhun" },
          { label: "sinä", form: "puhut" },
          { label: "hän", form: "puhuu" },
          { label: "me", form: "puhumme" },
          { label: "te", form: "puhutte" },
          { label: "he", form: "puhuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en puhu" },
          { label: "sinä", form: "et puhu" },
          { label: "hän", form: "ei puhu" },
          { label: "me", form: "emme puhu" },
          { label: "te", form: "ette puhu" },
          { label: "he", form: "eivät puhu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "puhuin" },
          { label: "sinä", form: "puhuit" },
          { label: "hän", form: "puhui" },
          { label: "me", form: "puhuimme" },
          { label: "te", form: "puhuitte" },
          { label: "he", form: "puhuivat" },
        ],
      },
      {
        title: "Imperfekti · kielto",
        rows: [
          { label: "minä", form: "en puhunut" },
          { label: "sinä", form: "et puhunut" },
          { label: "hän", form: "ei puhunut" },
          { label: "me", form: "emme puhuneet" },
          { label: "te", form: "ette puhuneet" },
          { label: "he", form: "eivät puhuneet" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen puhunut" },
          { label: "sinä", form: "olet puhunut" },
          { label: "hän", form: "on puhunut" },
          { label: "me", form: "olemme puhuneet" },
          { label: "te", form: "olette puhuneet" },
          { label: "he", form: "ovat puhuneet" },
        ],
      },
      {
        title: "Perfekti · kielto",
        rows: [
          { label: "minä", form: "en ole puhunut" },
          { label: "hän", form: "ei ole puhunut" },
          { label: "he", form: "eivät ole puhuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "puhu!" },
          { label: "te", form: "puhukaa!" },
          { label: "kielto (sinä)", form: "älä puhu" },
          { label: "kielto (te)", form: "älkää puhuko" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "puhe",
      en: "speech, talk",
      taso: "B1",
      esim: { fi: "Hänen puheensa oli vaikuttava.", en: "His speech was impressive." },
    },
    {
      fi: "puhelin",
      en: "telephone",
      taso: "A2",
      esim: { fi: "Puhelin soi kesken kokouksen.", en: "The phone rang during the meeting." },
    },
    {
      fi: "puhekieli",
      en: "spoken/colloquial language",
      taso: "B1",
      esim: { fi: "Puhekieli eroaa kirjakielestä.", en: "Spoken language differs from written language." },
    },
  ],
  synonyymit: [
    { fi: "jutella", en: "to chat" },
    { fi: "keskustella", en: "to converse, discuss" },
  ],
  esimerkit: {
    A2: { fi: "Puhutko englantia?", en: "Do you speak English?" },
    B1: { fi: "Puhuimme pitkään puhelimessa.", en: "We talked on the phone for a long time." },
    B2: {
      fi: "Hän puhui niin nopeasti, että oli vaikea pysyä perässä.",
      en: "She spoke so fast that it was hard to keep up.",
    },
  },
  updatedAt: "2026-06-05",
};

export default puhua;
