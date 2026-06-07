import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 61/sallia, k:∅ gradation, i-stem; stem pyrki- ~ pyri-.
// Present minä pyrin, hän pyrkii; imperfect minä pyrin, hän pyrki; NUT pyrkinyt. Governs illative.
const pyrkia: Word = {
  fi: "pyrkiä",
  slug: "pyrkiä",
  pos: "verbi (tyyppi 2)",
  posClass: "verbi",
  level: "B1",
  en: "to strive, aim, seek to",
  selitys:
    "Tehdä työtä päästäkseen johonkin tavoitteeseen tai asemaan: 'pyrkiä yliopistoon'. Tyyppi 2 (-iä), Kotus 61/sallia, astevaihtelu k:∅ (pyrin). Hallitsee illatiivia. i-vartalo: minä-muoto sama preesensissä ja imperfektissä (pyrin). Vrt. pyrkimys.",
  kuva: { emoji: "🧭", alt: "pyrkiä – tehdä työtä päästäkseen tavoitteeseen" },

  kielioppi: {
    tyyppi: "tyyppi 2 (-iä), Kotus 61/sallia; astevaihtelu k:∅ (pyrki- ~ pyri-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "pyrin", merkitys: "I strive" },
      { sija: "imperfekti (minä)", muoto: "pyrin", merkitys: "I strove (sama muoto!)" },
      { sija: "NUT-partisiippi", muoto: "pyrkinyt", merkitys: "(have) striven" },
    ],
    huom:
      "i-vartalo: minä/sinä/me/te-muodot ovat samat preesensissä ja imperfektissä (pyrin), vain hän eroaa (pyrkii ↔ pyrki). Astevaihtelu k:∅: minä pyrin (heikko), hän pyrkii (vahva). Hallitsee illatiivia: 'pyrkiä tavoitteeseen'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pyrin" },
          { label: "sinä", form: "pyrit" },
          { label: "hän", form: "pyrkii" },
          { label: "me", form: "pyrimme" },
          { label: "te", form: "pyritte" },
          { label: "he", form: "pyrkivät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pyri" },
          { label: "hän", form: "ei pyri" },
          { label: "he", form: "eivät pyri" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pyrin" },
          { label: "sinä", form: "pyrit" },
          { label: "hän", form: "pyrki" },
          { label: "me", form: "pyrimme" },
          { label: "te", form: "pyritte" },
          { label: "he", form: "pyrkivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pyrkinyt" },
          { label: "hän", form: "on pyrkinyt" },
          { label: "he", form: "ovat pyrkineet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pyri!" },
          { label: "te", form: "pyrkikää!" },
          { label: "kielto (sinä)", form: "älä pyri" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pyrkimys",
      en: "endeavour, aspiration",
      taso: "B2",
      esim: { fi: "Hänen pyrkimyksensä oli kunnioitettava.", en: "His aspiration was admirable." },
    },
    {
      fi: "pyrkijä",
      en: "applicant, aspirant",
      taso: "B2",
      esim: { fi: "Pyrkijöitä oli paljon.", en: "There were many applicants." },
    },
  ],
  synonyymit: [
    { fi: "tavoitella", en: "to aim for, pursue" },
    { fi: "yrittää", en: "to try" },
  ],
  esimerkit: {
    A2: { fi: "Pyrin parempaan tulokseen.", en: "I strive for a better result." },
    B1: { fi: "Hän pyrkii yliopistoon ensi syksynä.", en: "She is applying to university next autumn." },
    B2: {
      fi: "Yritys pyrkii vähentämään päästöjään merkittävästi lähivuosina.",
      en: "The company strives to cut its emissions significantly in the coming years.",
    },
  },
  updatedAt: "2026-06-07",
};

export default pyrkia;
