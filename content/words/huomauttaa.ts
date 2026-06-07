import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 53/muistaa, tt:t gradation, stem huomautta- ~ huomauta-.
// Present minä huomautan, hän huomauttaa; imperfect minä huomautin; NUT huomauttanut.
const huomauttaa: Word = {
  fi: "huomauttaa",
  slug: "huomauttaa",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to point out, remark; to reprove",
  selitys:
    "Kiinnittää huomio johonkin sanomalla se ääneen, usein lievä huomautus tai muistutus: 'huomauttaa virheestä'. Tyyppi 1 (-aa), Kotus 53/muistaa, astevaihtelu tt:t (huomautan). Asiasta elatiivi. Vrt. huomautus, huomata.",
  kuva: { emoji: "☝️", alt: "huomauttaa – kiinnittää huomio sanomalla se ääneen" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-aa), Kotus 53/muistaa; astevaihtelu tt:t (huomauta- ~ huomautta-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "huomautan", merkitys: "I point out" },
      { sija: "imperfekti (minä)", muoto: "huomautin", merkitys: "I pointed out" },
      { sija: "NUT-partisiippi", muoto: "huomauttanut", merkitys: "(have) pointed out" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva huomautta- (huomauttaa, huomauttanut), heikko huomauta- (huomautan, huomautin). Asiasta elatiivi: 'huomauttaa virheestä'. Voi olla myös moite. Vrt. huomautus = remark, huomata = to notice.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "huomautan" },
          { label: "sinä", form: "huomautat" },
          { label: "hän", form: "huomauttaa" },
          { label: "me", form: "huomautamme" },
          { label: "te", form: "huomautatte" },
          { label: "he", form: "huomauttavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en huomauta" },
          { label: "hän", form: "ei huomauta" },
          { label: "he", form: "eivät huomauta" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "huomautin" },
          { label: "sinä", form: "huomautit" },
          { label: "hän", form: "huomautti" },
          { label: "me", form: "huomautimme" },
          { label: "te", form: "huomautitte" },
          { label: "he", form: "huomauttivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen huomauttanut" },
          { label: "hän", form: "on huomauttanut" },
          { label: "he", form: "ovat huomauttaneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "huomauta!" },
          { label: "te", form: "huomauttakaa!" },
          { label: "kielto (sinä)", form: "älä huomauta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "huomautus",
      en: "remark, note; reprimand",
      taso: "B1",
      esim: { fi: "Hän sai huomautuksen myöhästymisestä.", en: "She got a reprimand for being late." },
    },
    {
      fi: "huomio",
      en: "attention, notice",
      taso: "B1",
      esim: { fi: "Kiinnitä huomiota yksityiskohtiin.", en: "Pay attention to the details." },
    },
  ],
  synonyymit: [
    { fi: "mainita", en: "to mention" },
    { fi: "muistuttaa", en: "to remind" },
  ],
  esimerkit: {
    A2: { fi: "Hän huomautti, että ovi oli auki.", en: "She pointed out that the door was open." },
    B1: { fi: "Opettaja huomautti virheestä ystävällisesti.", en: "The teacher pointed out the mistake kindly." },
    B2: {
      fi: "Haluan huomauttaa, että aikataulu on jo nyt liian tiukka.",
      en: "I want to point out that the schedule is already too tight.",
    },
  },
  updatedAt: "2026-06-07",
};

export default huomauttaa;
