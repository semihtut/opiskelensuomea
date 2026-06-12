import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem välttä- ~ vältä-.
// Present minä vältän, hän välttää; imperfect minä vältin; NUT välttänyt.
const valttaa: Word = {
  fi: "välttää",
  slug: "välttää",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to avoid",
  selitys:
    "Pyrkiä siihen, ettei jokin ei-toivottu tapahdu tai ettei joudu johonkin: 'välttää virheitä'. Tyyppi 1 (-ää), Kotus 53/muistaa, astevaihtelu tt:t (vältän). Objekti partitiivissa. Vrt. välttämätön, vältellä.",
  kuva: { alt: "välttää – pyrkiä ettei jokin tapahdu" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ää), Kotus 53/muistaa; astevaihtelu tt:t (vältä- ~ välttä-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "vältän", merkitys: "I avoid" },
      { sija: "imperfekti (minä)", muoto: "vältin", merkitys: "I avoided" },
      { sija: "NUT-partisiippi", muoto: "välttänyt", merkitys: "(have) avoided" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva välttä- (välttää, välttänyt), heikko vältä- (vältän, vältin). Objekti partitiivissa: 'välttää riskejä'. Voi saada myös 3. infinitiivin: 'välttää tekemästä'. Vrt. välttämätön = necessary.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "vältän" },
          { label: "sinä", form: "vältät" },
          { label: "hän", form: "välttää" },
          { label: "me", form: "vältämme" },
          { label: "te", form: "vältätte" },
          { label: "he", form: "välttävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en vältä" },
          { label: "hän", form: "ei vältä" },
          { label: "he", form: "eivät vältä" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "vältin" },
          { label: "sinä", form: "vältit" },
          { label: "hän", form: "vältti" },
          { label: "me", form: "vältimme" },
          { label: "te", form: "vältitte" },
          { label: "he", form: "välttivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen välttänyt" },
          { label: "hän", form: "on välttänyt" },
          { label: "he", form: "ovat välttäneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "vältä!" },
          { label: "te", form: "välttäkää!" },
          { label: "kielto (sinä)", form: "älä vältä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "välttämätön",
      en: "necessary, indispensable",
      taso: "B1",
      esim: { fi: "Vesi on välttämätöntä elämälle.", en: "Water is necessary for life." },
    },
    {
      fi: "vältellä",
      en: "to keep avoiding, dodge",
      taso: "B2",
      esim: { fi: "Hän vältteli vastaamista.", en: "He kept avoiding answering." },
    },
    {
      fi: "välttämättä",
      en: "necessarily; (not) inevitably",
      taso: "B1",
      esim: { fi: "Se ei välttämättä ole totta.", en: "That is not necessarily true." },
    },
  ],
  synonyymit: [
    { fi: "karttaa", en: "to shun, steer clear of" },
    { fi: "kiertää", en: "to go around, circumvent" },
  ],
  esimerkit: {
    A2: { fi: "Vältän makeisia.", en: "I avoid sweets." },
    B1: { fi: "Yritä välttää samoja virheitä.", en: "Try to avoid the same mistakes." },
    B2: {
      fi: "Hyvällä suunnittelulla voi välttää monta turhaa ongelmaa.",
      en: "With good planning you can avoid many unnecessary problems.",
    },
  },
  updatedAt: "2026-06-07",
};

export default valttaa;
