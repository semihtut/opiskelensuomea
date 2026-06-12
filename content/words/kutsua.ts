import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem kutsu-.
// Present kutsun, past kutsuin, past participle kutsunut. Governs partitive (kutsua jotakuta).
const kutsua: Word = {
  fi: "kutsua",
  slug: "kutsua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to invite; to call (summon, name)",
  selitys:
    "Pyytää tulemaan tai nimittää jollakin nimellä: 'kutsua vieraita' / 'kutsua jotakuta nimellä'. Tyyppi 1 (-ua), ei astevaihtelua, vartalo kutsu-. Vrt. kutsu (invitation), kutsua paikalle (to summon).",
  kuva: { alt: "kutsua – pyytää tulemaan tai nimittää" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua); ei astevaihtelua; vartalo kutsu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kutsun", merkitys: "I invite" },
      { sija: "imperfekti (minä)", muoto: "kutsuin", merkitys: "I invited" },
      { sija: "NUT-partisiippi", muoto: "kutsunut", merkitys: "(have) invited" },
    ],
    huom:
      "Kutsuttava partitiivissa: 'kutsuin heidät juhliin'. Nimittäminen: 'kutsua jotakin joksikin' (translatiivi): 'tätä kutsutaan onneksi'. Vrt. kutsu = invitation, kutsuvieras = invited guest.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kutsun" },
          { label: "sinä", form: "kutsut" },
          { label: "hän", form: "kutsuu" },
          { label: "me", form: "kutsumme" },
          { label: "te", form: "kutsutte" },
          { label: "he", form: "kutsuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kutsu" },
          { label: "hän", form: "ei kutsu" },
          { label: "he", form: "eivät kutsu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kutsuin" },
          { label: "sinä", form: "kutsuit" },
          { label: "hän", form: "kutsui" },
          { label: "me", form: "kutsuimme" },
          { label: "te", form: "kutsuitte" },
          { label: "he", form: "kutsuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kutsunut" },
          { label: "hän", form: "on kutsunut" },
          { label: "he", form: "ovat kutsuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kutsu!" },
          { label: "te", form: "kutsukaa!" },
          { label: "kielto (sinä)", form: "älä kutsu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kutsu",
      en: "invitation",
      taso: "A2",
      esim: { fi: "Sain kutsun häihin.", en: "I got an invitation to the wedding." },
    },
    {
      fi: "kutsuvieras",
      en: "invited guest",
      taso: "B2",
      esim: { fi: "Juhlissa oli vain kutsuvieraita.", en: "There were only invited guests at the party." },
    },
    {
      fi: "kutsumus",
      en: "calling, vocation",
      taso: "B2",
      esim: { fi: "Opettajan työ on hänelle kutsumus.", en: "Teaching is a calling for her." },
    },
  ],
  synonyymit: [
    { fi: "pyytää", en: "to ask, request" },
    { fi: "nimittää", en: "to call, name" },
  ],
  esimerkit: {
    A2: { fi: "Kutsun sinut syntymäpäivilleni.", en: "I'm inviting you to my birthday party." },
    B1: { fi: "Meidät kutsuttiin illalliselle.", en: "We were invited to dinner." },
    B2: {
      fi: "Tällaista ilmiötä kutsutaan tieteessä itseohjautuvuudeksi.",
      en: "In science this phenomenon is called self-organization.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kutsua;
