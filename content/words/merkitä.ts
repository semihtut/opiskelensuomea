import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 69/valita, no gradation, -tse- stem; stem merkitse-.
// Present minä merkitsen, hän merkitsee; imperfect minä merkitsin; NUT merkinnyt.
const merkita: Word = {
  fi: "merkitä",
  slug: "merkitä",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to mean, signify; to mark, note down",
  selitys:
    "1) Tarkoittaa, olla merkitykseltään: 'mitä tämä merkitsee?'. 2) Tehdä merkki tai kirjata: 'merkitä muistiin'. Tyyppi 4 (-itä), Kotus 69/valita, vartalo merkitse-. NUT-partisiippi merkinnyt (huom!). Vrt. merkitys, merkki.",
  kuva: { emoji: "✍️", alt: "merkitä – tarkoittaa tai tehdä merkki" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-itä), Kotus 69/valita; vartalo merkitse- (-tse-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "merkitsen", merkitys: "I mean / mark" },
      { sija: "imperfekti (minä)", muoto: "merkitsin", merkitys: "I meant / marked" },
      { sija: "NUT-partisiippi", muoto: "merkinnyt", merkitys: "(have) meant / marked" },
    ],
    huom:
      "Tyyppi 69 (-itä): vartalo merkitse- (merkitsen, merkitsin), mutta NUT-partisiippi on merkinnyt (ei *merkitsenyt!), kuten valita→valinnut, mainita→maininnut. Vrt. merkitys = meaning, merkki = sign, mark.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "merkitsen" },
          { label: "sinä", form: "merkitset" },
          { label: "hän", form: "merkitsee" },
          { label: "me", form: "merkitsemme" },
          { label: "te", form: "merkitsette" },
          { label: "he", form: "merkitsevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en merkitse" },
          { label: "hän", form: "ei merkitse" },
          { label: "he", form: "eivät merkitse" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "merkitsin" },
          { label: "sinä", form: "merkitsit" },
          { label: "hän", form: "merkitsi" },
          { label: "me", form: "merkitsimme" },
          { label: "te", form: "merkitsitte" },
          { label: "he", form: "merkitsivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen merkinnyt" },
          { label: "hän", form: "on merkinnyt" },
          { label: "he", form: "ovat merkinneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "merkitse!" },
          { label: "te", form: "merkitkää!" },
          { label: "kielto (sinä)", form: "älä merkitse" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "merkitys",
      en: "meaning, significance",
      taso: "B1",
      esim: { fi: "Sanan merkitys muuttui.", en: "The word's meaning changed." },
    },
    {
      fi: "merkki",
      en: "sign, mark, brand",
      taso: "A2",
      esim: { fi: "Se on hyvä merkki.", en: "That's a good sign." },
    },
    {
      fi: "merkittävä",
      en: "significant, notable",
      taso: "B2",
      esim: { fi: "Se oli merkittävä saavutus.", en: "It was a significant achievement." },
    },
  ],
  synonyymit: [
    { fi: "tarkoittaa", en: "to mean" },
    { fi: "kirjata", en: "to record, note" },
  ],
  esimerkit: {
    A2: { fi: "Mitä tämä sana merkitsee?", en: "What does this word mean?" },
    B1: { fi: "Merkitsin tapaamisen kalenteriin.", en: "I marked the meeting in the calendar." },
    B2: {
      fi: "Hänelle perhe merkitsee enemmän kuin mikään muu.",
      en: "To her, family means more than anything else.",
    },
  },
  updatedAt: "2026-06-07",
};

export default merkita;
