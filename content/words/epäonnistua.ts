import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem epäonnistu-.
// Present minä epäonnistun, hän epäonnistuu; imperfect minä epäonnistuin; NUT epäonnistunut.
const epaonnistua: Word = {
  fi: "epäonnistua",
  slug: "epäonnistua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to fail",
  selitys:
    "Ei onnistua; jäädä tavoitteesta tai mennä pieleen: 'epäonnistua yrityksessä'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Etuliite epä- = ei-. Asiassa inessiivi. Vastakohta onnistua.",
  kuva: { emoji: "💥", alt: "epäonnistua – ei onnistua, mennä pieleen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo epäonnistu-",
    muodot: [
      { sija: "preesens (minä)", muoto: "epäonnistun", merkitys: "I fail" },
      { sija: "imperfekti (minä)", muoto: "epäonnistuin", merkitys: "I failed" },
      { sija: "NUT-partisiippi", muoto: "epäonnistunut", merkitys: "(have) failed" },
    ],
    huom:
      "Etuliite epä- (= ei) + onnistua. Asiassa inessiivi: 'epäonnistua kokeessa'. 3. infinitiivin illatiivi: 'epäonnistuin avaamaan'. Ei astevaihtelua. Vastakohta onnistua.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "epäonnistun" },
          { label: "sinä", form: "epäonnistut" },
          { label: "hän", form: "epäonnistuu" },
          { label: "me", form: "epäonnistumme" },
          { label: "te", form: "epäonnistutte" },
          { label: "he", form: "epäonnistuvat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en epäonnistu" },
          { label: "hän", form: "ei epäonnistu" },
          { label: "he", form: "eivät epäonnistu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "epäonnistuin" },
          { label: "sinä", form: "epäonnistuit" },
          { label: "hän", form: "epäonnistui" },
          { label: "me", form: "epäonnistuimme" },
          { label: "te", form: "epäonnistuitte" },
          { label: "he", form: "epäonnistuivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen epäonnistunut" },
          { label: "hän", form: "on epäonnistunut" },
          { label: "he", form: "ovat epäonnistuneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "älä epäonnistu" },
          { label: "te", form: "älkää epäonnistuko" },
          { label: "huom.", form: "(myönteinen imperatiivi harvinainen)" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "epäonnistunut",
      en: "failed, unsuccessful",
      taso: "B1",
      esim: { fi: "Se oli epäonnistunut kokeilu.", en: "It was a failed experiment." },
    },
    {
      fi: "epäonnistuminen",
      en: "failure",
      taso: "B2",
      esim: { fi: "Epäonnistumisesta voi oppia paljon.", en: "One can learn a lot from failure." },
    },
  ],
  synonyymit: [
    { fi: "mennä pieleen", en: "to go wrong" },
    { fi: "ei onnistua", en: "to not succeed" },
  ],
  esimerkit: {
    A2: { fi: "Yritin, mutta epäonnistuin.", en: "I tried, but I failed." },
    B1: { fi: "Hanke epäonnistui rahapulan takia.", en: "The project failed due to lack of money." },
    B2: {
      fi: "Vaikka ensimmäinen yritys epäonnistui, hän ei luovuttanut.",
      en: "Although the first attempt failed, she did not give up.",
    },
  },
  updatedAt: "2026-06-07",
};

export default epaonnistua;
