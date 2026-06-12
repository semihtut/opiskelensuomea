import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem säilyttä- ~ säilytä-.
// Present minä säilytän, hän säilyttää; imperfect minä säilytin; NUT säilyttänyt.
const sailyttaa: Word = {
  fi: "säilyttää",
  slug: "säilyttää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to keep, preserve, store, retain",
  selitys:
    "Pitää tallessa tai muuttumattomana: 'säilyttää ruoka kylmässä'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (säilytän). Johdettu sanasta säilyä. Vrt. säilyä, säilytys, varjella.",
  kuva: { alt: "säilyttää – pitää tallessa tai muuttumattomana" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (säilytä- ~ säilyttä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "säilytän", merkitys: "I keep" },
      { sija: "imperfekti (minä)", muoto: "säilytin", merkitys: "I kept" },
      { sija: "NUT-partisiippi", muoto: "säilyttänyt", merkitys: "(have) kept" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva säilyttä- (säilyttää, säilyttänyt), heikko säilytä- (säilytän, säilytin). Johdettu sanasta säilyä (intransitiivinen). 'Säilyttää malttinsa' = to keep one's composure. Vrt. säilytys = storage.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "säilytän" },
          { label: "sinä", form: "säilytät" },
          { label: "hän", form: "säilyttää" },
          { label: "me", form: "säilytämme" },
          { label: "te", form: "säilytätte" },
          { label: "he", form: "säilyttävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en säilytä" },
          { label: "hän", form: "ei säilytä" },
          { label: "he", form: "eivät säilytä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "säilytin" },
          { label: "sinä", form: "säilytit" },
          { label: "hän", form: "säilytti" },
          { label: "me", form: "säilytimme" },
          { label: "te", form: "säilytitte" },
          { label: "he", form: "säilyttivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen säilyttänyt" },
          { label: "hän", form: "on säilyttänyt" },
          { label: "he", form: "ovat säilyttäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "säilytä!" },
          { label: "te", form: "säilyttäkää!" },
          { label: "kielto (sinä)", form: "älä säilytä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "säilyä",
      en: "to be preserved, last, keep",
      taso: "B2",
      esim: { fi: "Ruoka säilyy jääkaapissa.", en: "The food keeps in the fridge." },
    },
    {
      fi: "säilytys",
      en: "storage, keeping",
      taso: "B2",
      esim: { fi: "Tavarat ovat säilytyksessä.", en: "The items are in storage." },
    },
  ],
  synonyymit: [
    { fi: "pitää tallessa", en: "to keep safe" },
    { fi: "varastoida", en: "to store" },
  ],
  esimerkit: {
    A2: { fi: "Säilytä maito kylmässä.", en: "Keep the milk cold." },
    B1: { fi: "Säilytin vanhat kirjeet.", en: "I kept the old letters." },
    B2: {
      fi: "Vanhat perinteet on tärkeää säilyttää tuleville sukupolville.",
      en: "It is important to preserve old traditions for future generations.",
    },
  },
  updatedAt: "2026-06-07",
};

export default sailyttaa;
