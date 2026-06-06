import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem hymyile- ~ hymyil-.
// Present minä hymyilen, hän hymyilee; imperfect minä hymyilin; NUT participle hymyillyt.
const hymyillä: Word = {
  fi: "hymyillä",
  slug: "hymyillä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "A2",
  en: "to smile",
  selitys:
    "Ilmaista iloa tai ystävällisyyttä hymyllä: 'hymyillä jollekulle'. Tyyppi 3 (-llä), ei astevaihtelua; vartalo hymyile-. Johdettu sanasta hymy. Vrt. hymy (smile), hymyilevä (smiling).",
  kuva: { emoji: "🙂", alt: "hymyillä – ilmaista iloa tai ystävällisyyttä hymyllä" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä); ei astevaihtelua; vartalo hymyile- ~ hymyil-",
    muodot: [
      { sija: "preesens (minä)", muoto: "hymyilen", merkitys: "I smile" },
      { sija: "imperfekti (minä)", muoto: "hymyilin", merkitys: "I smiled" },
      { sija: "NUT-partisiippi", muoto: "hymyillyt", merkitys: "(have) smiled" },
    ],
    huom:
      "Ei astevaihtelua. NUT-partisiipissa kahdennettu l (hymyillyt), perusmuodossa myös -llä. 'Hymyillä jollekulle' = to smile at someone (allatiivi). Vrt. hymy = a smile.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "hymyilen" },
          { label: "sinä", form: "hymyilet" },
          { label: "hän", form: "hymyilee" },
          { label: "me", form: "hymyilemme" },
          { label: "te", form: "hymyilette" },
          { label: "he", form: "hymyilevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en hymyile" },
          { label: "hän", form: "ei hymyile" },
          { label: "he", form: "eivät hymyile" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "hymyilin" },
          { label: "sinä", form: "hymyilit" },
          { label: "hän", form: "hymyili" },
          { label: "me", form: "hymyilimme" },
          { label: "te", form: "hymyilitte" },
          { label: "he", form: "hymyilivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen hymyillyt" },
          { label: "hän", form: "on hymyillyt" },
          { label: "he", form: "ovat hymyilleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "hymyile!" },
          { label: "te", form: "hymyilkää!" },
          { label: "kielto (sinä)", form: "älä hymyile" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hymy",
      en: "smile",
      taso: "A2",
      esim: { fi: "Hänellä on lämmin hymy.", en: "She has a warm smile." },
    },
    {
      fi: "hymyilevä",
      en: "smiling",
      taso: "B1",
      esim: { fi: "Hymyilevä myyjä toivotti tervetulleeksi.", en: "A smiling clerk welcomed us." },
    },
    {
      fi: "hymyhuulin",
      en: "with a smile (on one's lips)",
      taso: "B2",
      esim: { fi: "Hän vastasi hymyhuulin.", en: "She answered with a smile." },
    },
  ],
  synonyymit: [
    { fi: "virnistää", en: "to grin" },
    { fi: "hymähtää", en: "to give a faint smile" },
  ],
  esimerkit: {
    A2: { fi: "Hymyile kameralle!", en: "Smile at the camera!" },
    B1: { fi: "Hän hymyili minulle ystävällisesti.", en: "He smiled at me kindly." },
    B2: {
      fi: "Vaikka päivä oli rankka, hän hymyili koko ajan asiakkaille.",
      en: "Although the day was tough, she smiled at the customers the whole time.",
    },
  },
  updatedAt: "2026-06-06",
};

export default hymyillä;
