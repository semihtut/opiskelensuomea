import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt:nn gradation, imperfect t→s.
// Present minä tarkennan, hän tarkentaa; imperfect minä tarkensin; NUT tarkentanut.
const tarkentaa: Word = {
  fi: "tarkentaa",
  slug: "tarkentaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to clarify, specify; to focus",
  selitys:
    "Tehdä jokin tarkemmaksi tai täsmällisemmäksi: 'tarkentaa vastaustaan'. Tyyppi 1 (-aa), Kotus 54/huutaa, astevaihtelu nt:nn (tarkennan) ja imperfektissä t→s (tarkensin). Johdettu sanasta tarkka. Vrt. tarkka, tarkennus.",
  kuva: { alt: "tarkentaa – tehdä jokin tarkemmaksi tai täsmällisemmäksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 54/huutaa; astevaihtelu nt:nn + imperfektin t→s",
    muodot: [
      { sija: "preesens (minä)", muoto: "tarkennan", merkitys: "I clarify" },
      { sija: "imperfekti (minä)", muoto: "tarkensin", merkitys: "I clarified" },
      { sija: "NUT-partisiippi", muoto: "tarkentanut", merkitys: "(have) clarified" },
    ],
    huom:
      "Tyyppi 54: preesensissä nt:nn (tarkennan), mutta imperfektissä vartalon t muuttuu s:ksi (tarkensin), kuten lentää→lensin. NUT-partisiippi tarkentanut. Johdettu sanasta tarkka. Vrt. tarkennus = clarification.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tarkennan" },
          { label: "sinä", form: "tarkennat" },
          { label: "hän", form: "tarkentaa" },
          { label: "me", form: "tarkennamme" },
          { label: "te", form: "tarkennatte" },
          { label: "he", form: "tarkentavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tarkenna" },
          { label: "hän", form: "ei tarkenna" },
          { label: "he", form: "eivät tarkenna" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tarkensin" },
          { label: "sinä", form: "tarkensit" },
          { label: "hän", form: "tarkensi" },
          { label: "me", form: "tarkensimme" },
          { label: "te", form: "tarkensitte" },
          { label: "he", form: "tarkensivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tarkentanut" },
          { label: "hän", form: "on tarkentanut" },
          { label: "he", form: "ovat tarkentaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tarkenna!" },
          { label: "te", form: "tarkentakaa!" },
          { label: "kielto (sinä)", form: "älä tarkenna" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tarkennus",
      en: "clarification; focus (camera)",
      taso: "B2",
      esim: { fi: "Pyysin tarkennusta ohjeisiin.", en: "I asked for a clarification of the instructions." },
    },
    {
      fi: "tarkka",
      en: "exact, precise, accurate",
      taso: "B1",
      esim: { fi: "Hän on tarkka yksityiskohdista.", en: "He is precise about details." },
    },
  ],
  synonyymit: [
    { fi: "täsmentää", en: "to specify, make precise" },
    { fi: "selventää", en: "to clarify" },
  ],
  esimerkit: {
    A2: { fi: "Voitko tarkentaa, mitä tarkoitat?", en: "Can you clarify what you mean?" },
    B1: { fi: "Hän tarkensi vastaustaan esimerkein.", en: "She clarified her answer with examples." },
    B2: {
      fi: "Tutkijat tarkensivat arviotaan uusien tietojen perusteella.",
      en: "The researchers refined their estimate based on new data.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tarkentaa;
