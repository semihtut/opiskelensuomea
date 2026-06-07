import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 74/katketa, no gradation, stem eroa- ~ eros-.
// Present minä eroan, hän eroaa; imperfect minä erosin; NUT eronnut. Governs elative.
const erota: Word = {
  fi: "erota",
  slug: "erota",
  pos: "verbi (tyyppi 4)",
  posClass: "verbi",
  level: "B1",
  en: "to differ; to separate, resign, divorce",
  selitys:
    "Olla erilainen kuin jokin muu, tai lähteä/irtautua jostakin: 'mielipiteet eroavat', 'erota työstä'. Tyyppi 4 (-ota), Kotus 74/katketa, ei astevaihtelua. Hallitsee elatiivia ('erota jostakin'). Vrt. ero, erilainen, erottaa.",
  kuva: { emoji: "🔀", alt: "erota – olla erilainen tai irtautua jostakin" },

  kielioppi: {
    tyyppi: "tyyppi 4 (-ota), Kotus 74/katketa; ei astevaihtelua; vartalot eroa- ~ eros-",
    muodot: [
      { sija: "preesens (minä)", muoto: "eroan", merkitys: "I differ / resign" },
      { sija: "imperfekti (minä)", muoto: "erosin", merkitys: "I differed / resigned" },
      { sija: "NUT-partisiippi", muoto: "eronnut", merkitys: "(have) differed / divorced" },
    ],
    huom:
      "Hallitsee elatiivia: 'erota toisistaan' = to differ from each other; 'erota puolisosta' = to divorce; 'erota työstä' = to resign. NUT-partisiippi eronnut. Vrt. ero = difference/divorce, erottaa = to distinguish/dismiss.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "eroan" },
          { label: "sinä", form: "eroat" },
          { label: "hän", form: "eroaa" },
          { label: "me", form: "eroamme" },
          { label: "te", form: "eroatte" },
          { label: "he", form: "eroavat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en eroa" },
          { label: "hän", form: "ei eroa" },
          { label: "he", form: "eivät eroa" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "erosin" },
          { label: "sinä", form: "erosit" },
          { label: "hän", form: "erosi" },
          { label: "me", form: "erosimme" },
          { label: "te", form: "erositte" },
          { label: "he", form: "erosivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen eronnut" },
          { label: "hän", form: "on eronnut" },
          { label: "he", form: "ovat eronneet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "eroa!" },
          { label: "te", form: "erotkaa!" },
          { label: "kielto (sinä)", form: "älä eroa" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ero",
      en: "difference; divorce",
      taso: "B1",
      esim: { fi: "Mikä on näiden ero?", en: "What is the difference between these?" },
    },
    {
      fi: "erottaa",
      en: "to distinguish; to dismiss, fire",
      taso: "B1",
      esim: { fi: "En erota näitä värejä toisistaan.", en: "I can't tell these colours apart." },
    },
    {
      fi: "erilainen",
      en: "different",
      taso: "A2",
      esim: { fi: "Olemme hyvin erilaisia.", en: "We are very different." },
    },
  ],
  synonyymit: [
    { fi: "poiketa", en: "to differ, deviate" },
    { fi: "irtautua", en: "to detach, break away" },
  ],
  esimerkit: {
    A2: { fi: "Nämä kaksi kuvaa eroavat hieman.", en: "These two pictures differ slightly." },
    B1: { fi: "Hän erosi vanhasta työstään keväällä.", en: "He resigned from his old job in the spring." },
    B2: {
      fi: "Murteet eroavat toisistaan sekä sanastoltaan että ääntämykseltään.",
      en: "Dialects differ from one another both in vocabulary and pronunciation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default erota;
