import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, t:d gradation, i-stem; stem vaati- ~ vaadi-.
// Present minä vaadin, hän vaatii; imperfect minä vaadin, hän vaati; NUT vaatinut.
const vaatia: Word = {
  fi: "vaatia",
  slug: "vaatia",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "B1",
  en: "to demand, require; to claim",
  selitys:
    "Edellyttää tai pyytää jotakin tiukasti: 'työ vaatii kärsivällisyyttä'. Tyyppi 2 (-tia), Kotus 61/sallia, astevaihtelu t:d (vaadin). Objekti partitiivissa. i-vartalo: minä-muoto sama preesensissä ja imperfektissä (vaadin). Vrt. vaatimus, vaativa.",
  kuva: { emoji: "✊", alt: "vaatia – edellyttää tai pyytää jotakin tiukasti" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-tia), Kotus 61/sallia; astevaihtelu t:d (vaati- ~ vaadi-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vaadin", merkitys: "I demand" },
      { sija: "imperfekti (minä)", muoto: "vaadin", merkitys: "I demanded (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "vaatinut", merkitys: "(have) demanded" },
    ],
    huom:
      "i-vartalo: minä/sinä/me/te-muodot ovat samat preesensissä ja imperfektissä (vaadin), vain hän eroaa (vaatii ↔ vaati). Astevaihtelu t:d: minä vaadin (heikko), hän vaatii (vahva). Objekti partitiivissa: 'vaatia jotakin'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vaadin" },
          { label: "sinä", form: "vaadit" },
          { label: "hän", form: "vaatii" },
          { label: "me", form: "vaadimme" },
          { label: "te", form: "vaaditte" },
          { label: "he", form: "vaativat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vaadi" },
          { label: "hän", form: "ei vaadi" },
          { label: "he", form: "eivät vaadi" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vaadin" },
          { label: "sinä", form: "vaadit" },
          { label: "hän", form: "vaati" },
          { label: "me", form: "vaadimme" },
          { label: "te", form: "vaaditte" },
          { label: "he", form: "vaativat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen vaatinut" },
          { label: "hän", form: "on vaatinut" },
          { label: "he", form: "ovat vaatineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vaadi!" },
          { label: "te", form: "vaatikaa!" },
          { label: "kielto (sinä)", form: "älä vaadi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaatimus",
      en: "demand, requirement",
      taso: "B1",
      esim: { fi: "Heidän vaatimuksensa olivat kohtuullisia.", en: "Their demands were reasonable." },
    },
    {
      fi: "vaativa",
      en: "demanding, challenging",
      taso: "B2",
      esim: { fi: "Se on vaativa tehtävä.", en: "It's a demanding task." },
    },
  ],
  synonyymit: [
    { fi: "edellyttää", en: "to require, presuppose" },
    { fi: "pyytää", en: "to ask, request" },
  ],
  esimerkit: {
    A2: { fi: "Asiakas vaati rahansa takaisin.", en: "The customer demanded their money back." },
    B1: { fi: "Tämä työ vaatii paljon aikaa.", en: "This job requires a lot of time." },
    B2: {
      fi: "Tilanne vaati nopeaa päätöstä, vaikka kaikki tiedot eivät olleet käytössä.",
      en: "The situation demanded a quick decision, even though not all information was available.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaatia;
