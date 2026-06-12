import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 62/voida, no gradation, stem arvioi-.
// Present minä arvioin, hän arvioi; imperfect minä arvioin (sama!); NUT arvioinut.
const arvioida: Word = {
  fi: "arvioida",
  slug: "arvioida",
  pos: "verbi (tyyppi 6)",
  posClass: "verbi",
  level: "B1",
  en: "to estimate, evaluate, assess",
  selitys:
    "Muodostaa käsitys jonkin arvosta, määrästä tai laadusta: 'arvioida hinta'. Tyyppi 6 (-oida), Kotus 62/voida, ei astevaihtelua. minä-muoto sama preesensissä ja imperfektissä (arvioin). Vrt. arvio, arviointi, arvostaa.",
  kuva: { alt: "arvioida – muodostaa käsitys arvosta tai määrästä" },

  kielioppi: {
    tyyppi: "tyyppi 6 (-oida), Kotus 62/voida; ei astevaihtelua; vartalo arvioi-",
    muodot: [
      { sija: "preesens (minä)", muoto: "arvioin", merkitys: "I estimate" },
      { sija: "imperfekti (minä)", muoto: "arvioin", merkitys: "I estimated (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "arvioinut", merkitys: "(have) estimated" },
    ],
    huom:
      "Tyyppi 62 (-oida, kuten voida): preesens ja imperfekti ovat samannäköiset useimmissa persoonissa (minä arvioin = I estimate JA I estimated), koska vartalon i sulauttaa imperfektin i:n. NUT-partisiippi arvioinut. Vrt. arvio = estimate.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "arvioin" },
          { label: "sinä", form: "arvioit" },
          { label: "hän", form: "arvioi" },
          { label: "me", form: "arvioimme" },
          { label: "te", form: "arvioitte" },
          { label: "he", form: "arvioivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en arvioi" },
          { label: "hän", form: "ei arvioi" },
          { label: "he", form: "eivät arvioi" },
        ],
      },
      {
        title: "Imperfekti (= preesensin näköinen)",
        rows: [
          { label: "minä", form: "arvioin" },
          { label: "hän", form: "arvioi" },
          { label: "he", form: "arvioivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen arvioinut" },
          { label: "hän", form: "on arvioinut" },
          { label: "he", form: "ovat arvioineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "arvioi!" },
          { label: "te", form: "arvioikaa!" },
          { label: "kielto (sinä)", form: "älä arvioi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "arvio",
      en: "estimate, assessment",
      taso: "B1",
      esim: { fi: "Anna karkea arvio.", en: "Give a rough estimate." },
    },
    {
      fi: "arviointi",
      en: "evaluation, assessment",
      taso: "B2",
      esim: { fi: "Arviointi tehdään keväällä.", en: "The assessment is done in spring." },
    },
  ],
  synonyymit: [
    { fi: "arvostella", en: "to evaluate, grade" },
    { fi: "punnita", en: "to weigh up" },
  ],
  esimerkit: {
    A2: { fi: "Arvioin matkan kestoksi tunnin.", en: "I estimate the trip will take an hour." },
    B1: { fi: "Asiantuntija arvioi vahingot.", en: "The expert assessed the damages." },
    B2: {
      fi: "Hankkeen kustannukset arvioitiin etukäteen liian alhaisiksi.",
      en: "The project's costs were estimated too low in advance.",
    },
  },
  updatedAt: "2026-06-07",
};

export default arvioida;
