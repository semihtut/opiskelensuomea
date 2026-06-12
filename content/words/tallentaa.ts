import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 54/huutaa, nt:nn gradation, imperfect t→s.
// Present minä tallennan, hän tallentaa; imperfect minä tallensin; NUT tallentanut.
const tallentaa: Word = {
  fi: "tallentaa",
  slug: "tallentaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to save, store, record",
  selitys:
    "Säilöä tieto tai tallenne muistiin: 'tallentaa tiedosto'. Tyyppi 1 (-aa), Kotus 54/huutaa, astevaihtelu nt:nn (tallennan) ja imperfektissä t→s (tallensin). Vrt. tallenne, tallennus, säilyttää.",
  kuva: { alt: "tallentaa – säilöä tieto tai tallenne muistiin" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 54/huutaa; astevaihtelu nt:nn + imperfektin t→s",
    muodot: [
      { sija: "preesens (minä)", muoto: "tallennan", merkitys: "I save" },
      { sija: "imperfekti (minä)", muoto: "tallensin", merkitys: "I saved" },
      { sija: "NUT-partisiippi", muoto: "tallentanut", merkitys: "(have) saved" },
    ],
    huom:
      "Tyyppi 54: preesensissä nt:nn (tallennan), mutta imperfektissä vartalon t muuttuu s:ksi (tallensin), kuten lentää→lensin. NUT-partisiippi tallentanut. Vrt. tallennus = saving, tallenne = recording.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tallennan" },
          { label: "sinä", form: "tallennat" },
          { label: "hän", form: "tallentaa" },
          { label: "me", form: "tallennamme" },
          { label: "te", form: "tallennatte" },
          { label: "he", form: "tallentavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tallenna" },
          { label: "hän", form: "ei tallenna" },
          { label: "he", form: "eivät tallenna" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tallensin" },
          { label: "sinä", form: "tallensit" },
          { label: "hän", form: "tallensi" },
          { label: "me", form: "tallensimme" },
          { label: "te", form: "tallensitte" },
          { label: "he", form: "tallensivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen tallentanut" },
          { label: "hän", form: "on tallentanut" },
          { label: "he", form: "ovat tallentaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tallenna!" },
          { label: "te", form: "tallentakaa!" },
          { label: "kielto (sinä)", form: "älä tallenna" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tallennus",
      en: "saving, recording",
      taso: "B2",
      esim: { fi: "Tallennus epäonnistui.", en: "The saving failed." },
    },
    {
      fi: "tallenne",
      en: "recording",
      taso: "B2",
      esim: { fi: "Katsoin ohjelman tallenteena.", en: "I watched the program as a recording." },
    },
  ],
  synonyymit: [
    { fi: "säilyttää", en: "to store, keep" },
    { fi: "äänittää", en: "to record (audio)" },
  ],
  esimerkit: {
    A2: { fi: "Muista tallentaa työsi.", en: "Remember to save your work." },
    B1: { fi: "Tallensin kuvat puhelimeen.", en: "I saved the photos to the phone." },
    B2: {
      fi: "Tiedot tallennetaan automaattisesti pilvipalveluun.",
      en: "The data is saved automatically to a cloud service.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tallentaa;
