import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 58/laskea, no gradation, stem laske-.
// Present lasken, past laskin, past participle laskenut.
const laskea: Word = {
  fi: "laskea",
  slug: "laskea",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "A2",
  en: "to lower, put down; to count, calculate",
  selitys:
    "Siirtää alaspäin tai laskea numeroita: 'lasken laukun lattialle' / 'lasken kymmeneen'. Tyyppi 58 (laskea on tyypin malliverbi). Vastakohta nostaa.",
  kuva: { alt: "laskea – laskea alas tai laskea numeroita" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-kea); ei astevaihtelua; vartalo laske-",
    muodot: [
      { sija: "preesens (minä)", muoto: "lasken", merkitys: "I lower / count" },
      { sija: "imperfekti (minä)", muoto: "laskin", merkitys: "I lowered / counted" },
      { sija: "NUT-partisiippi", muoto: "laskenut", merkitys: "(have) lowered / counted" },
    ],
    huom:
      "Kaksi päämerkitystä: 1) laskea alas (lower), 2) laskea lukuja (count, calculate). Myös 'hinnat laskevat' (prices fall). Vrt. lasku = bill/descent, laskin = calculator.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "lasken" },
          { label: "sinä", form: "lasket" },
          { label: "hän", form: "laskee" },
          { label: "me", form: "laskemme" },
          { label: "te", form: "laskette" },
          { label: "he", form: "laskevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en laske" },
          { label: "hän", form: "ei laske" },
          { label: "he", form: "eivät laske" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "laskin" },
          { label: "sinä", form: "laskit" },
          { label: "hän", form: "laski" },
          { label: "me", form: "laskimme" },
          { label: "te", form: "laskitte" },
          { label: "he", form: "laskivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen laskenut" },
          { label: "hän", form: "on laskenut" },
          { label: "he", form: "ovat laskeneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "laske!" },
          { label: "te", form: "laskekaa!" },
          { label: "kielto (sinä)", form: "älä laske" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lasku",
      en: "bill, invoice; descent",
      taso: "A2",
      esim: { fi: "Maksoin laskun ajoissa.", en: "I paid the bill on time." },
    },
    {
      fi: "laskin",
      en: "calculator",
      taso: "B1",
      esim: { fi: "Käytin laskinta kokeessa.", en: "I used a calculator in the exam." },
    },
    {
      fi: "laskelma",
      en: "calculation, estimate",
      taso: "B2",
      esim: { fi: "Tein tarkan laskelman kuluista.", en: "I made a precise calculation of the costs." },
    },
  ],
  synonyymit: [
    { fi: "laskeutua", en: "to descend, land" },
    { fi: "luetella", en: "to enumerate" },
  ],
  esimerkit: {
    A2: { fi: "Lapsi osaa jo laskea kymmeneen.", en: "The child can already count to ten." },
    B1: { fi: "Hinnat laskivat kesän aikana.", en: "Prices fell during the summer." },
    B2: {
      fi: "Lasken sen varaan, että saavut ajoissa.",
      en: "I'm counting on you arriving on time.",
    },
  },
  updatedAt: "2026-06-06",
};

export default laskea;
