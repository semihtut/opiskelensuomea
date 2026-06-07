import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, no gradation (st cluster), stem todista-.
// Present minä todistan, hän todistaa; imperfect minä todistin; NUT todistanut.
const todistaa: Word = {
  fi: "todistaa",
  slug: "todistaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to prove; to testify, witness",
  selitys:
    "Osoittaa jokin todeksi tai olla todistajana: 'todistaa väite oikeaksi'. Tyyppi 1 (-aa), Kotus 53/muistaa, ei astevaihtelua (st säilyy). Johdettu sanasta tosi. Vrt. todiste, todistus, todistaja.",
  kuva: { emoji: "⚖️", alt: "todistaa – osoittaa jokin todeksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; ei astevaihtelua; vartalo todista-",
    muodot: [
      { sija: "preesens (minä)", muoto: "todistan", merkitys: "I prove" },
      { sija: "imperfekti (minä)", muoto: "todistin", merkitys: "I proved" },
      { sija: "NUT-partisiippi", muoto: "todistanut", merkitys: "(have) proved" },
    ],
    huom:
      "Ei astevaihtelua – st-yhtymä säilyy (todistan, todistin, todistanut). Kaksi merkitystä: 1) osoittaa todeksi; 2) olla todistajana oikeudessa. Johdettu sanasta tosi. Vrt. todiste = evidence, todistaja = witness.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "todistan" },
          { label: "sinä", form: "todistat" },
          { label: "hän", form: "todistaa" },
          { label: "me", form: "todistamme" },
          { label: "te", form: "todistatte" },
          { label: "he", form: "todistavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en todista" },
          { label: "hän", form: "ei todista" },
          { label: "he", form: "eivät todista" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "todistin" },
          { label: "sinä", form: "todistit" },
          { label: "hän", form: "todisti" },
          { label: "me", form: "todistimme" },
          { label: "te", form: "todistitte" },
          { label: "he", form: "todistivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen todistanut" },
          { label: "hän", form: "on todistanut" },
          { label: "he", form: "ovat todistaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "todista!" },
          { label: "te", form: "todistakaa!" },
          { label: "kielto (sinä)", form: "älä todista" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "todiste",
      en: "evidence, proof",
      taso: "B1",
      esim: { fi: "Tämä on selvä todiste.", en: "This is clear evidence." },
    },
    {
      fi: "todistaja",
      en: "witness",
      taso: "B2",
      esim: { fi: "Todistaja kertoi näkemänsä.", en: "The witness told what they saw." },
    },
    {
      fi: "todistettu",
      en: "proven",
      taso: "B2",
      esim: { fi: "Se on tieteellisesti todistettu.", en: "It is scientifically proven." },
    },
  ],
  synonyymit: [
    { fi: "osoittaa", en: "to show, demonstrate" },
    { fi: "näyttää toteen", en: "to prove true" },
  ],
  esimerkit: {
    A2: { fi: "Hän todisti olevansa oikeassa.", en: "She proved she was right." },
    B1: { fi: "Tutkimus todistaa, että liikunta auttaa.", en: "The study proves that exercise helps." },
    B2: {
      fi: "Syyttäjä ei pystynyt todistamaan väitettään ilman luotettavia todisteita.",
      en: "The prosecutor could not prove their claim without reliable evidence.",
    },
  },
  updatedAt: "2026-06-07",
};

export default todistaa;
