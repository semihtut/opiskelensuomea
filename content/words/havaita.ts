import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 69/valita, no gradation, -tse- stem; stem havaitse-.
// Present minä havaitsen, hän havaitsee; imperfect minä havaitsin; NUT havainnut.
const havaita: Word = {
  fi: "havaita",
  slug: "havaita",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to observe, perceive, detect, notice",
  selitys:
    "Huomata tai panna merkille aistein tai havainnoiden: 'havaita muutos'. Tyyppi 4 (-aita), Kotus 69/valita, vartalo havaitse-. NUT-partisiippi havainnut (huom!). Vrt. havainto, huomata, huomio.",
  kuva: { alt: "havaita – huomata tai panna merkille" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-aita), Kotus 69/valita; vartalo havaitse- (-tse-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "havaitsen", merkitys: "I observe" },
      { sija: "imperfekti (minä)", muoto: "havaitsin", merkitys: "I observed" },
      { sija: "NUT-partisiippi", muoto: "havainnut", merkitys: "(have) observed" },
    ],
    huom:
      "Tyyppi 69 (-ita): vartalo havaitse- (havaitsen, havaitsin), mutta NUT-partisiippi havainnut (ei *havaitsenut!), kuten valita→valinnut, merkitä→merkinnyt. Vrt. havainto = observation, huomata = to notice.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "havaitsen" },
          { label: "sinä", form: "havaitset" },
          { label: "hän", form: "havaitsee" },
          { label: "me", form: "havaitsemme" },
          { label: "te", form: "havaitsette" },
          { label: "he", form: "havaitsevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en havaitse" },
          { label: "hän", form: "ei havaitse" },
          { label: "he", form: "eivät havaitse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "havaitsin" },
          { label: "sinä", form: "havaitsit" },
          { label: "hän", form: "havaitsi" },
          { label: "me", form: "havaitsimme" },
          { label: "te", form: "havaitsitte" },
          { label: "he", form: "havaitsivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen havainnut" },
          { label: "hän", form: "on havainnut" },
          { label: "he", form: "ovat havainneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "havaitse!" },
          { label: "te", form: "havaitkaa!" },
          { label: "kielto (sinä)", form: "älä havaitse" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "havainto",
      en: "observation, perception",
      taso: "B2",
      esim: { fi: "Tein mielenkiintoisen havainnon.", en: "I made an interesting observation." },
    },
    {
      fi: "havaittavissa",
      en: "perceivable, detectable",
      taso: "B2",
      esim: { fi: "Muutos on selvästi havaittavissa.", en: "The change is clearly detectable." },
    },
  ],
  synonyymit: [
    { fi: "huomata", en: "to notice" },
    { fi: "panna merkille", en: "to take note of" },
  ],
  esimerkit: {
    A2: { fi: "Havaitsin virheen heti.", en: "I noticed the mistake right away." },
    B1: { fi: "Tutkijat havaitsivat selvän yhteyden.", en: "The researchers detected a clear connection." },
    B2: {
      fi: "Mittauksissa havaittiin pieniä mutta merkittäviä poikkeamia.",
      en: "Small but significant deviations were detected in the measurements.",
    },
  },
  updatedAt: "2026-06-07",
};

export default havaita;
