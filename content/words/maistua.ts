import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem maistu-.
// Present hän maistuu; imperfect hän maistui; NUT participle maistunut. Intransitive.
const maistua: Word = {
  fi: "maistua",
  slug: "maistua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to taste (like), taste good",
  selitys:
    "Olla joltakin maultaan tai tuntua hyvältä: 'maistua hyvältä'. Tyyppi 1 (-ua), tyyppi 52/sanoa, ei astevaihtelua. Intransitiivinen (jokin maistuu). Johdettu verbistä maistaa. Vrt. maku (taste).",
  kuva: { alt: "maistua – olla joltakin maultaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; intransitiivinen",
    muodot: [
      { sija: "preesens (hän/se)", muoto: "maistuu", merkitys: "it tastes (like)" },
      { sija: "imperfekti (hän/se)", muoto: "maistui", merkitys: "it tasted (like)" },
      { sija: "NUT-partisiippi", muoto: "maistunut", merkitys: "(has) tasted" },
    ],
    huom:
      "Intransitiivinen (jokin maistuu jollekin); vrt. transitiivinen maistaa = 'maistaa jotakin'. Rakenne 'maistua joltakin' (ablatiivi): 'maistuu hyvältä' = tastes good. Käytetään useimmiten 3. persoonassa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "maistun" },
          { label: "sinä", form: "maistut" },
          { label: "hän / se", form: "maistuu" },
          { label: "me", form: "maistumme" },
          { label: "te", form: "maistutte" },
          { label: "he / ne", form: "maistuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "se", form: "ei maistu" },
          { label: "ne", form: "eivät maistu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "hän / se", form: "maistui" },
          { label: "he / ne", form: "maistuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se", form: "on maistunut" },
          { label: "ne", form: "ovat maistuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "maku",
      en: "taste, flavour",
      taso: "A2",
      esim: { fi: "Tällä on outo maku.", en: "This has a strange taste." },
    },
    {
      fi: "maistaa",
      en: "to taste (something)",
      taso: "B1",
      esim: { fi: "Maista tätä keittoa!", en: "Taste this soup!" },
    },
    {
      fi: "maukas",
      en: "tasty, flavourful",
      taso: "B1",
      esim: { fi: "Ruoka oli todella maukasta.", en: "The food was really tasty." },
    },
  ],
  synonyymit: [
    { fi: "tuntua maulta", en: "to taste of" },
    { fi: "olla makuinen", en: "to be flavoured" },
  ],
  esimerkit: {
    A2: { fi: "Ruoka maistuu hyvältä.", en: "The food tastes good." },
    B1: { fi: "Kahvi ei maistunut miltään.", en: "The coffee didn't taste of anything." },
    B2: {
      fi: "Kun on todella nälkä, melkein mikä tahansa maistuu hyvältä.",
      en: "When you're really hungry, almost anything tastes good.",
    },
  },
  updatedAt: "2026-06-07",
};

export default maistua;
