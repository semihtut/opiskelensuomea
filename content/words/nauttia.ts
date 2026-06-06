import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, tt:t gradation, stem nautti- ~ nauti-.
// Present minä nautin, hän nauttii; imperfect minä nautin, hän nautti; NUT nauttinut.
const nauttia: Word = {
  fi: "nauttia",
  slug: "nauttia",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to enjoy; to ingest, consume",
  selitys:
    "Saada mielihyvää jostakin, tai nauttia ravintoa: 'nauttia auringosta' / 'nauttia lääkettä'. Tyyppi 1 (-ia), astevaihtelu tt:t (nautin ~ nauttii). Vrt. nautinto (pleasure), nautinnollinen.",
  kuva: { emoji: "😌", alt: "nauttia – saada mielihyvää jostakin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ia), Kotus 61/sallia; astevaihtelu tt:t (nautin ↔ nauttii)",
    muodot: [
      { sija: "preesens (minä)", muoto: "nautin", merkitys: "I enjoy" },
      { sija: "imperfekti (minä)", muoto: "nautin", merkitys: "I enjoyed" },
      { sija: "NUT-partisiippi", muoto: "nauttinut", merkitys: "(have) enjoyed" },
    ],
    huom:
      "Heikko aste t minä/sinä/me/te-muodoissa (nautin), vahva aste tt hän/he- ja perusmuodossa (nauttii). HUOM: minä-muoto sama preesensissä ja imperfektissä (nautin); vain hän erottaa (nauttii ↔ nautti). 'Nauttia jostakin' (elatiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "nautin" },
          { label: "sinä", form: "nautit" },
          { label: "hän", form: "nauttii" },
          { label: "me", form: "nautimme" },
          { label: "te", form: "nautitte" },
          { label: "he", form: "nauttivat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en nauti" },
          { label: "hän", form: "ei nauti" },
          { label: "he", form: "eivät nauti" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "nautin" },
          { label: "sinä", form: "nautit" },
          { label: "hän", form: "nautti" },
          { label: "me", form: "nautimme" },
          { label: "te", form: "nautitte" },
          { label: "he", form: "nauttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen nauttinut" },
          { label: "hän", form: "on nauttinut" },
          { label: "he", form: "ovat nauttineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "nauti!" },
          { label: "te", form: "nauttikaa!" },
          { label: "kielto (sinä)", form: "älä nauti" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nautinto",
      en: "pleasure, enjoyment",
      taso: "B2",
      esim: { fi: "Hyvä ateria on puhdas nautinto.", en: "A good meal is a pure pleasure." },
    },
    {
      fi: "nautinnollinen",
      en: "enjoyable, pleasurable",
      taso: "B2",
      esim: { fi: "Vietimme nautinnollisen illan.", en: "We spent an enjoyable evening." },
    },
    {
      fi: "nauttija",
      en: "one who enjoys, hedonist",
      taso: "B2",
      esim: { fi: "Hän on elämästä nauttija.", en: "He is one who enjoys life." },
    },
  ],
  synonyymit: [
    { fi: "iloita", en: "to rejoice in" },
    { fi: "saada mielihyvää", en: "to take pleasure in" },
  ],
  esimerkit: {
    A2: { fi: "Nautin kahvista aamulla.", en: "I enjoy coffee in the morning." },
    B1: { fi: "Nautimme lomasta täysillä.", en: "We enjoyed the holiday to the fullest." },
    B2: {
      fi: "Yritä nauttia matkasta, älä vain kärsi päämäärään pääsemisestä.",
      en: "Try to enjoy the journey, not just endure getting to the destination.",
    },
  },
  updatedAt: "2026-06-06",
};

export default nauttia;
