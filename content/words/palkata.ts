import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, kk:k gradation, stem palkkaa- ~ palka-.
// Present minä palkkaan, hän palkkaa; imperfect minä palkkasin, hän palkkasi; NUT palkannut.
const palkata: Word = {
  fi: "palkata",
  slug: "palkata",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to hire, employ, recruit",
  selitys:
    "Ottaa joku töihin palkkaa vastaan: 'palkata uusi työntekijä'. Tyyppi 4 (-ata), astevaihtelu kk:k (palkkaan ~ palkata). Johdettu sanasta palkka. Vrt. palkkaus (hiring), työnantaja (employer).",
  kuva: { alt: "palkata – ottaa joku töihin palkkaa vastaan" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ata); astevaihtelu kk:k (palkkaan ↔ palkata); vartalo palkkaa- ~ palka-",
    muodot: [
      { sija: "preesens (minä)", muoto: "palkkaan", merkitys: "I hire" },
      { sija: "imperfekti (minä)", muoto: "palkkasin", merkitys: "I hired" },
      { sija: "NUT-partisiippi", muoto: "palkannut", merkitys: "(have) hired" },
    ],
    huom:
      "Vahva aste kk taipuvissa muodoissa (palkkaan, palkkasin), heikko aste k perusmuodossa ja NUT-partisiipissa (palkata, palkannut). Kohde objektina: 'palkata työntekijä'. Vrt. palkka = salary.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "palkkaan" },
          { label: "sinä", form: "palkkaat" },
          { label: "hän", form: "palkkaa" },
          { label: "me", form: "palkkaamme" },
          { label: "te", form: "palkkaatte" },
          { label: "he", form: "palkkaavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en palkkaa" },
          { label: "hän", form: "ei palkkaa" },
          { label: "he", form: "eivät palkkaa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "palkkasin" },
          { label: "sinä", form: "palkkasit" },
          { label: "hän", form: "palkkasi" },
          { label: "me", form: "palkkasimme" },
          { label: "te", form: "palkkasitte" },
          { label: "he", form: "palkkasivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen palkannut" },
          { label: "hän", form: "on palkannut" },
          { label: "he", form: "ovat palkanneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "palkkaa!" },
          { label: "te", form: "palkatkaa!" },
          { label: "kielto (sinä)", form: "älä palkkaa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "palkkaus",
      en: "hiring; pay arrangement",
      taso: "B2",
      esim: { fi: "Uuden työntekijän palkkaus kesti kauan.", en: "Hiring the new employee took a long time." },
    },
    {
      fi: "palkka",
      en: "salary, wage",
      taso: "A2",
      esim: { fi: "Sain ensimmäisen palkkani.", en: "I got my first salary." },
    },
    {
      fi: "työnantaja",
      en: "employer",
      taso: "B1",
      esim: { fi: "Työnantaja palkkasi kymmenen uutta ihmistä.", en: "The employer hired ten new people." },
    },
  ],
  synonyymit: [
    { fi: "ottaa töihin", en: "to take on (employ)" },
    { fi: "rekrytoida", en: "to recruit" },
  ],
  esimerkit: {
    A2: { fi: "Yritys palkkaa kesätyöntekijöitä.", en: "The company hires summer workers." },
    B1: { fi: "He palkkasivat uuden kokin ravintolaan.", en: "They hired a new cook for the restaurant." },
    B2: {
      fi: "Ennen kuin palkkaat ketään, kannattaa miettiä tarkkaan, millaista osaamista tarvitset.",
      en: "Before you hire anyone, it's worth thinking carefully about what skills you need.",
    },
  },
  updatedAt: "2026-06-06",
};

export default palkata;
