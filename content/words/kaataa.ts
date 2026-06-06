import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 56/kaivaa, t–d gradation, stem kaata-.
// Present kaadan, past kaadoin, hän kaatoi, past participle kaatanut.
const kaataa: Word = {
  fi: "kaataa",
  slug: "kaataa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to pour; to knock over, fell",
  selitys:
    "Kallistaa niin että sisältö valuu, tai kaataa kumoon: 'kaadan kahvia kuppiin' / 'kaadettiin puu'. Astevaihtelu t:d (kaataa → kaadan), tyypin 56 imperfekti -oi-: kaadoin.",
  kuva: { emoji: "🫗", alt: "kaataa – kallistaa niin että sisältö valuu" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-taa, malli kaivaa); astevaihtelu t:d; vartalo kaata-",
    muodot: [
      { sija: "preesens (minä)", muoto: "kaadan", merkitys: "I pour" },
      { sija: "imperfekti (minä)", muoto: "kaadoin", merkitys: "I poured" },
      { sija: "NUT-partisiippi", muoto: "kaatanut", merkitys: "(have) poured" },
    ],
    huom:
      "Astevaihtelu t:d: kaadan, kaadat, kaataa. Tyypin 56 imperfekti -oi-: kaadoin, kaadoit, kaatoi. Vrt. kaatua = to fall over (intransitiivinen), kaatopaikka = dump.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "kaadan" },
          { label: "sinä", form: "kaadat" },
          { label: "hän", form: "kaataa" },
          { label: "me", form: "kaadamme" },
          { label: "te", form: "kaadatte" },
          { label: "he", form: "kaatavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en kaada" },
          { label: "hän", form: "ei kaada" },
          { label: "he", form: "eivät kaada" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "kaadoin" },
          { label: "sinä", form: "kaadoit" },
          { label: "hän", form: "kaatoi" },
          { label: "me", form: "kaadoimme" },
          { label: "te", form: "kaadoitte" },
          { label: "he", form: "kaatoivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen kaatanut" },
          { label: "hän", form: "on kaatanut" },
          { label: "he", form: "ovat kaataneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "kaada!" },
          { label: "te", form: "kaatakaa!" },
          { label: "kielto (sinä)", form: "älä kaada" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kaatua",
      en: "to fall over, topple (intransitive)",
      taso: "B1",
      esim: { fi: "Pyörä kaatui tuulessa.", en: "The bike fell over in the wind." },
    },
    {
      fi: "kaatopaikka",
      en: "landfill, dump",
      taso: "B2",
      esim: { fi: "Jätteet viedään kaatopaikalle.", en: "The waste is taken to the landfill." },
    },
    {
      fi: "kaato",
      en: "felling; a fall",
      taso: "B2",
      esim: { fi: "Metsän kaato kesti viikon.", en: "Felling the forest took a week." },
    },
  ],
  synonyymit: [
    { fi: "läikyttää", en: "to spill" },
    { fi: "kumota", en: "to overturn" },
  ],
  esimerkit: {
    A2: { fi: "Kaadan sinulle lasin vettä.", en: "I'll pour you a glass of water." },
    B1: { fi: "Myrsky kaatoi monta puuta.", en: "The storm knocked down many trees." },
    B2: {
      fi: "Hallitus kaadettiin epäluottamuslauseella.",
      en: "The government was brought down by a vote of no confidence.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kaataa;
