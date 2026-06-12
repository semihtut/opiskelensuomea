import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem jättä- ~ jätä-.
// Present jätän, past jätin, past participle jättänyt.
const jattaa: Word = {
  fi: "jättää",
  slug: "jättää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "A2",
  en: "to leave (behind), to drop off",
  selitys:
    "Olla ottamatta mukaan tai luopua: 'jättää avaimet pöydälle'. Tyyppi 1 (-ää), astevaihtelu tt:t (jätän, mutta jättää). Vrt. jäädä (to stay), jättö (drop-off), jäte (waste).",
  kuva: { alt: "jättää – olla ottamatta mukaan" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää); astevaihtelu tt:t (jättä- ↔ jätä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "jätän", merkitys: "I leave" },
      { sija: "imperfekti (minä)", muoto: "jätin", merkitys: "I left" },
      { sija: "NUT-partisiippi", muoto: "jättänyt", merkitys: "(have) left" },
    ],
    huom:
      "Persoonamuodoissa heikko t (jätän), infinitiivissä vahva tt (jättää). Transitiivi (jättää jokin) ≠ jäädä (intransitiivi, jäädä jonnekin). 'Jättää tekemättä' = to leave undone.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "jätän" },
          { label: "sinä", form: "jätät" },
          { label: "hän", form: "jättää" },
          { label: "me", form: "jätämme" },
          { label: "te", form: "jätätte" },
          { label: "he", form: "jättävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en jätä" },
          { label: "hän", form: "ei jätä" },
          { label: "he", form: "eivät jätä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "jätin" },
          { label: "sinä", form: "jätit" },
          { label: "hän", form: "jätti" },
          { label: "me", form: "jätimme" },
          { label: "te", form: "jätitte" },
          { label: "he", form: "jättivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen jättänyt" },
          { label: "hän", form: "on jättänyt" },
          { label: "he", form: "ovat jättäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "jätä!" },
          { label: "te", form: "jättäkää!" },
          { label: "kielto (sinä)", form: "älä jätä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "jäljellä",
      en: "left, remaining",
      taso: "B1",
      esim: { fi: "Rahaa on enää vähän jäljellä.", en: "There's only a little money left." },
    },
    {
      fi: "jättää väliin",
      en: "to skip, miss out",
      taso: "B1",
      esim: { fi: "Jätin lounaan väliin.", en: "I skipped lunch." },
    },
    {
      fi: "hyvästijättö",
      en: "farewell, goodbye",
      taso: "B2",
      esim: { fi: "Hyvästijättö oli haikea.", en: "The farewell was bittersweet." },
    },
  ],
  synonyymit: [
    { fi: "luopua", en: "to give up" },
    { fi: "hylätä", en: "to abandon" },
  ],
  esimerkit: {
    A2: { fi: "Jätin kirjan kotiin.", en: "I left the book at home." },
    B1: { fi: "Jätä viesti, niin soitan takaisin.", en: "Leave a message and I'll call back." },
    B2: {
      fi: "Hän jätti vanhan työnsä ja aloitti kokonaan uudella alalla.",
      en: "She left her old job and started in a completely new field.",
    },
  },
  updatedAt: "2026-06-06",
};

export default jattaa;
