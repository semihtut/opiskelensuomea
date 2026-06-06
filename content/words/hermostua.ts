import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem hermostu-.
// Present minä hermostun, hän hermostuu; imperfect minä hermostuin; NUT hermostunut.
const hermostua: Word = {
  fi: "hermostua",
  slug: "hermostua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to get nervous, get agitated, lose one's nerve",
  selitys:
    "Alkaa tuntea hermostuneisuutta tai ärtymystä: 'hermostua kokeesta'. Tyyppi 1 (-ua), tyyppi 52/sanoa, ei astevaihtelua. Johdettu sanasta hermo. Vrt. hermostunut (nervous), hermo (nerve).",
  kuva: { emoji: "😰", alt: "hermostua – alkaa tuntea hermostuneisuutta" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo hermostu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "hermostun", merkitys: "I get nervous" },
      { sija: "imperfekti (minä)", muoto: "hermostuin", merkitys: "I got nervous" },
      { sija: "NUT-partisiippi", muoto: "hermostunut", merkitys: "(have) got nervous" },
    ],
    huom:
      "Ei astevaihtelua. Intransitiivinen (-ua/-tua = tulla joksikin). 'Hermostua jostakin' (elatiivi) = to get nervous about. Vrt. hermostunut = nervous, hermostuttaa = to make nervous.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "hermostun" },
          { label: "sinä", form: "hermostut" },
          { label: "hän", form: "hermostuu" },
          { label: "me", form: "hermostumme" },
          { label: "te", form: "hermostutte" },
          { label: "he", form: "hermostuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en hermostu" },
          { label: "hän", form: "ei hermostu" },
          { label: "he", form: "eivät hermostu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "hermostuin" },
          { label: "sinä", form: "hermostuit" },
          { label: "hän", form: "hermostui" },
          { label: "me", form: "hermostuimme" },
          { label: "te", form: "hermostuitte" },
          { label: "he", form: "hermostuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen hermostunut" },
          { label: "hän", form: "on hermostunut" },
          { label: "he", form: "ovat hermostuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "hermostu!" },
          { label: "te", form: "hermostukaa!" },
          { label: "kielto (sinä)", form: "älä hermostu" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hermostunut",
      en: "nervous, agitated",
      taso: "B1",
      esim: { fi: "Hän oli hermostunut ennen esitystä.", en: "She was nervous before the performance." },
    },
    {
      fi: "hermo",
      en: "nerve",
      taso: "B1",
      esim: { fi: "Minulla menivät hermot.", en: "I lost my temper." },
    },
    {
      fi: "hermostuttaa",
      en: "to make (someone) nervous",
      taso: "B2",
      esim: { fi: "Odottaminen hermostuttaa minua.", en: "Waiting makes me nervous." },
    },
  ],
  synonyymit: [
    { fi: "jännittää", en: "to feel tense/anxious" },
    { fi: "ärsyyntyä", en: "to get irritated" },
  ],
  esimerkit: {
    A2: { fi: "Hermostun helposti, kun on kiire.", en: "I get nervous easily when in a hurry." },
    B1: { fi: "Hän hermostui, kun juna oli myöhässä.", en: "He got agitated when the train was late." },
    B2: {
      fi: "Älä hermostu pienistä asioista, ne eivät ole sen arvoisia.",
      en: "Don't get worked up over small things; they're not worth it.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hermostua;
