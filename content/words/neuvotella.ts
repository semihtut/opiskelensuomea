import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem neuvottele- ~ neuvotel-.
// Present minä neuvottelen, hän neuvottelee; imperfect minä neuvottelin; NUT neuvotellut. Governs elative.
const neuvotella: Word = {
  fi: "neuvotella",
  slug: "neuvotella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to negotiate, confer",
  selitys:
    "Keskustella yhdessä päästäkseen sopimukseen tai ratkaisuun: 'neuvotella hinnasta'. Tyyppi 3 (-lla), Kotus 67/tulla, astevaihtelu tt:t (neuvottelen vahva, neuvotella heikko). Asiasta elatiivi. Vrt. neuvottelu, neuvo, neuvotella.",
  kuva: { alt: "neuvotella – keskustella sopimukseen pääsemiseksi" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; astevaihtelu tt:t (neuvotel- ~ neuvottele-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "neuvottelen", merkitys: "I negotiate" },
      { sija: "imperfekti (minä)", muoto: "neuvottelin", merkitys: "I negotiated" },
      { sija: "NUT-partisiippi", muoto: "neuvotellut", merkitys: "(have) negotiated" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva neuvottele- (neuvottelen, neuvottelin), heikko infinitiivissä ja NUT-muodossa (neuvotella, neuvotellut). Asiasta elatiivi: 'neuvotella jostakin', kumppanista 'jonkun kanssa'. Vrt. neuvottelu = negotiation.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "neuvottelen" },
          { label: "sinä", form: "neuvottelet" },
          { label: "hän", form: "neuvottelee" },
          { label: "me", form: "neuvottelemme" },
          { label: "te", form: "neuvottelette" },
          { label: "he", form: "neuvottelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en neuvottele" },
          { label: "hän", form: "ei neuvottele" },
          { label: "he", form: "eivät neuvottele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "neuvottelin" },
          { label: "sinä", form: "neuvottelit" },
          { label: "hän", form: "neuvotteli" },
          { label: "me", form: "neuvottelimme" },
          { label: "te", form: "neuvottelitte" },
          { label: "he", form: "neuvottelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen neuvotellut" },
          { label: "hän", form: "on neuvotellut" },
          { label: "he", form: "ovat neuvotelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "neuvottele!" },
          { label: "te", form: "neuvotelkaa!" },
          { label: "kielto (sinä)", form: "älä neuvottele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "neuvottelu",
      en: "negotiation, talks",
      taso: "B1",
      esim: { fi: "Neuvottelut jatkuvat huomenna.", en: "The negotiations continue tomorrow." },
    },
    {
      fi: "neuvottelija",
      en: "negotiator",
      taso: "B2",
      esim: { fi: "Hän on taitava neuvottelija.", en: "She is a skilled negotiator." },
    },
    {
      fi: "neuvo",
      en: "advice, piece of advice",
      taso: "A2",
      esim: { fi: "Annoin hänelle hyvän neuvon.", en: "I gave him good advice." },
    },
  ],
  synonyymit: [
    { fi: "keskustella", en: "to discuss" },
    { fi: "sopia", en: "to agree, settle" },
  ],
  esimerkit: {
    A2: { fi: "Neuvottelemme hinnasta.", en: "We're negotiating the price." },
    B1: { fi: "Osapuolet neuvottelivat uudesta sopimuksesta.", en: "The parties negotiated a new agreement." },
    B2: {
      fi: "Pitkien neuvottelujen jälkeen päästiin lopulta yhteisymmärrykseen.",
      en: "After long negotiations, an understanding was finally reached.",
    },
  },
  updatedAt: "2026-06-07",
};

export default neuvotella;
