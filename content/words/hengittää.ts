import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem hengittä- ~ hengitä-.
// Present minä hengitän, hän hengittää; imperfect minä hengitin; NUT hengittänyt.
const hengittaa: Word = {
  fi: "hengittää",
  slug: "hengittää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to breathe",
  selitys:
    "Vetää ilmaa keuhkoihin ja päästää sitä ulos: 'hengittää syvään'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (hengitän). Johdettu sanasta henki. Vrt. henki, hengitys, hengästyä.",
  kuva: { alt: "hengittää – vetää ilmaa keuhkoihin ja ulos" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (hengitä- ~ hengittä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "hengitän", merkitys: "I breathe" },
      { sija: "imperfekti (minä)", muoto: "hengitin", merkitys: "I breathed" },
      { sija: "NUT-partisiippi", muoto: "hengittänyt", merkitys: "(have) breathed" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva hengittä- (hengittää, hengittänyt), heikko hengitä- (hengitän, hengitin). 'Hengittää sisään/ulos' = to breathe in/out. Johdettu sanasta henki. Vrt. hengitys = breathing.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "hengitän" },
          { label: "sinä", form: "hengität" },
          { label: "hän", form: "hengittää" },
          { label: "me", form: "hengitämme" },
          { label: "te", form: "hengitätte" },
          { label: "he", form: "hengittävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en hengitä" },
          { label: "hän", form: "ei hengitä" },
          { label: "he", form: "eivät hengitä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "hengitin" },
          { label: "sinä", form: "hengitit" },
          { label: "hän", form: "hengitti" },
          { label: "me", form: "hengitimme" },
          { label: "te", form: "hengititte" },
          { label: "he", form: "hengittivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen hengittänyt" },
          { label: "hän", form: "on hengittänyt" },
          { label: "he", form: "ovat hengittäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "hengitä!" },
          { label: "te", form: "hengittäkää!" },
          { label: "kielto (sinä)", form: "älä hengitä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hengitys",
      en: "breathing, respiration",
      taso: "B1",
      esim: { fi: "Hengitys tasaantui.", en: "The breathing calmed down." },
    },
    {
      fi: "henki",
      en: "breath; spirit; life",
      taso: "B1",
      esim: { fi: "Vedä henkeä rauhassa.", en: "Take a breath calmly." },
    },
  ],
  synonyymit: [
    { fi: "vetää henkeä", en: "to draw breath" },
  ],
  esimerkit: {
    A2: { fi: "Hengitä syvään.", en: "Breathe deeply." },
    B1: { fi: "Hänen oli vaikea hengittää.", en: "He had difficulty breathing." },
    B2: {
      fi: "Puhdas ilma, jota on terveellistä hengittää, on yhä harvinaisempaa suurkaupungeissa.",
      en: "Clean air that is healthy to breathe is increasingly rare in big cities.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hengittaa;
