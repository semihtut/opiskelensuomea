import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 64/juoda, no gradation, stem vie- ~ ve-.
// Present minä vien, hän vie; imperfect minä vein, hän vei; NUT vienyt; passive viedään.
const vieda: Word = {
  fi: "viedä",
  slug: "viedä",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "A2",
  en: "to take (away), carry; to export",
  selitys:
    "Kuljettaa jokin pois tai johonkin muualle: 'viedä roskat'. Vastakohta tuoda (kuljettaa tänne). Myös: viedä aikaa. Tyyppi 2 (-dä), Kotus 64/juoda, ei astevaihtelua; imperfektissä vie → ve (vien → vein). Vrt. tuoda, kuljettaa, vienti.",
  kuva: { alt: "viedä – kuljettaa jokin pois tai muualle" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-dä), Kotus 64/juoda; ei astevaihtelua (vartalo vie- ~ ve-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vien", merkitys: "I take" },
      { sija: "imperfekti (minä)", muoto: "vein", merkitys: "I took" },
      { sija: "NUT-partisiippi", muoto: "vienyt", merkitys: "(have) taken" },
    ],
    huom:
      "Tyyppi 64/juoda: preesens vie- (vien, vie), imperfektissä ie → e (vein, vei). NUT vienyt, passiivi viedään. Suunta: viedä = pois, tuoda = tänne. 'Viedä aikaa' = to take time. Vrt. tuoda, vienti = export.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vien" },
          { label: "sinä", form: "viet" },
          { label: "hän", form: "vie" },
          { label: "me", form: "viemme" },
          { label: "te", form: "viette" },
          { label: "he", form: "vievät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vie" },
          { label: "hän", form: "ei vie" },
          { label: "he", form: "eivät vie" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vein" },
          { label: "sinä", form: "veit" },
          { label: "hän", form: "vei" },
          { label: "me", form: "veimme" },
          { label: "te", form: "veitte" },
          { label: "he", form: "veivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vienyt" },
          { label: "hän", form: "on vienyt" },
          { label: "he", form: "ovat vieneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vie!" },
          { label: "te", form: "viekää!" },
          { label: "kielto (sinä)", form: "älä vie" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vienti",
      en: "export",
      taso: "B2",
      esim: { fi: "Vienti on tärkeää taloudelle.", en: "Export is important for the economy." },
    },
    {
      fi: "viedä läpi",
      en: "to carry through, push through",
      taso: "B2",
      esim: { fi: "He veivät uudistuksen läpi.", en: "They pushed the reform through." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Vien koiran ulos.", en: "I'll take the dog out." },
    B1: { fi: "Veitkö roskat eilen?", en: "Did you take out the trash yesterday?" },
    B2: {
      fi: "Projekti vei enemmän aikaa kuin olimme arvioineet.",
      en: "The project took more time than we had estimated.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vieda;
