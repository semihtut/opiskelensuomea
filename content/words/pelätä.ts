import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 73/salata, k:∅ gradation, stem pelkää- ~ pelät- ~ pelän-.
// Present minä pelkään, hän pelkää; imperfect pelkäsin; NUT participle pelännyt.
const pelätä: Word = {
  fi: "pelätä",
  slug: "pelätä",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "A2",
  en: "to fear, be afraid of",
  selitys:
    "Tuntea pelkoa jotakin kohtaan: 'pelätä pimeää'. Tyyppi 4 (-ätä), astevaihtelu k:∅ (pelkään ~ pelätä). NUT-partisiippi pelännyt. Kohde partitiivissa. Vrt. pelko (fear), pelottava (scary).",
  kuva: { alt: "pelätä – tuntea pelkoa jotakin kohtaan" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ätä); astevaihtelu k:∅ (pelkää- ↔ pelät-/pelän-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "pelkään", merkitys: "I fear" },
      { sija: "imperfekti (minä)", muoto: "pelkäsin", merkitys: "I feared" },
      { sija: "NUT-partisiippi", muoto: "pelännyt", merkitys: "(have) feared" },
    ],
    huom:
      "Vahva aste (k) preesensissä ja imperfektissä (pelkään, pelkäsin), heikko aste (ei k:ta) perusmuodossa, NUT-partisiipissa ja te-imperatiivissa (pelätä, pelännyt, pelätkää). Kohde partitiivissa: 'pelätä koiraa'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "pelkään" },
          { label: "sinä", form: "pelkäät" },
          { label: "hän", form: "pelkää" },
          { label: "me", form: "pelkäämme" },
          { label: "te", form: "pelkäätte" },
          { label: "he", form: "pelkäävät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en pelkää" },
          { label: "hän", form: "ei pelkää" },
          { label: "he", form: "eivät pelkää" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "pelkäsin" },
          { label: "sinä", form: "pelkäsit" },
          { label: "hän", form: "pelkäsi" },
          { label: "me", form: "pelkäsimme" },
          { label: "te", form: "pelkäsitte" },
          { label: "he", form: "pelkäsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen pelännyt" },
          { label: "hän", form: "on pelännyt" },
          { label: "he", form: "ovat pelänneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "pelkää!" },
          { label: "te", form: "pelätkää!" },
          { label: "kielto (sinä)", form: "älä pelkää" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "pelko",
      en: "fear",
      taso: "B1",
      esim: { fi: "Pelko katosi vähitellen.", en: "The fear gradually disappeared." },
    },
    {
      fi: "pelottava",
      en: "scary, frightening",
      taso: "B1",
      esim: { fi: "Elokuva oli pelottava.", en: "The film was scary." },
    },
    {
      fi: "pelästyä",
      en: "to get frightened, startle",
      taso: "B2",
      esim: { fi: "Pelästyin kovaa ääntä.", en: "I was startled by the loud noise." },
    },
  ],
  synonyymit: [
    { fi: "kammota", en: "to dread" },
    { fi: "arkailla", en: "to be timid about" },
  ],
  esimerkit: {
    A2: { fi: "Pelkään koiria.", en: "I'm afraid of dogs." },
    B1: { fi: "Älä pelkää, kaikki järjestyy.", en: "Don't be afraid, everything will be fine." },
    B2: {
      fi: "Hän pelkäsi epäonnistuvansa, joten hän ei edes yrittänyt.",
      en: "He was afraid of failing, so he didn't even try.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pelätä;
