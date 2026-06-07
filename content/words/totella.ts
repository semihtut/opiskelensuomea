import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem tottele- ~ totel-.
// Present minä tottelen, hän tottelee; imperfect minä tottelin; NUT totellut. Governs partitive.
const totella: Word = {
  fi: "totella",
  slug: "totella",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to obey",
  selitys:
    "Tehdä niin kuin käsketään: 'totella sääntöjä', 'koira tottelee'. Tyyppi 3 (-lla), Kotus 67/tulla, astevaihtelu tt:t (tottelen). Rektio: partitiivi (totella jotakuta/jotakin). Vrt. noudattaa, käsky, tottelematon.",
  kuva: { emoji: "🫡", alt: "totella – tehdä niin kuin käsketään" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-lla), Kotus 67/tulla; astevaihtelu tt:t (tottele- ~ totel-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "tottelen", merkitys: "I obey" },
      { sija: "imperfekti (minä)", muoto: "tottelin", merkitys: "I obeyed" },
      { sija: "NUT-partisiippi", muoto: "totellut", merkitys: "(have) obeyed" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva preesensissä tottele- (tottelen, tottelee), heikko infinitiivissä ja NUT-partisiipissa totel- (totella, totellut). Rektio: partitiivi (totella opettajaa). Vrt. noudattaa = to follow (rules).",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "tottelen" },
          { label: "sinä", form: "tottelet" },
          { label: "hän", form: "tottelee" },
          { label: "me", form: "tottelemme" },
          { label: "te", form: "tottelette" },
          { label: "he", form: "tottelevat" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en tottele" },
          { label: "hän", form: "ei tottele" },
          { label: "he", form: "eivät tottele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "tottelin" },
          { label: "sinä", form: "tottelit" },
          { label: "hän", form: "totteli" },
          { label: "me", form: "tottelimme" },
          { label: "te", form: "tottelitte" },
          { label: "he", form: "tottelivat" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen totellut" },
          { label: "hän", form: "on totellut" },
          { label: "he", form: "ovat totelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "tottele!" },
          { label: "te", form: "totelkaa!" },
          { label: "kielto (sinä)", form: "älä tottele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tottelematon",
      en: "disobedient",
      taso: "B2",
      esim: { fi: "Lapsi oli tottelematon.", en: "The child was disobedient." },
    },
    {
      fi: "noudattaa",
      en: "to follow, comply with",
      taso: "B2",
      esim: { fi: "Noudata ohjeita.", en: "Follow the instructions." },
    },
  ],
  synonyymit: [
    { fi: "noudattaa", en: "to follow (rules)" },
  ],
  esimerkit: {
    A2: { fi: "Koira tottelee hyvin.", en: "The dog obeys well." },
    B1: { fi: "Lasten on toteltava sääntöjä.", en: "Children must obey the rules." },
    B2: {
      fi: "Hän totteli käskyä, vaikka ei ollut siitä samaa mieltä.",
      en: "He obeyed the order even though he did not agree with it.",
    },
  },
  updatedAt: "2026-06-07",
};

export default totella;
