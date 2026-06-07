import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, tt:t gradation, stem päättele- ~ päätel-.
// Present minä päättelen, hän päättelee; imperfect minä päättelin; NUT päätellyt. Governs elative.
const paatella: Word = {
  fi: "päätellä",
  slug: "päätellä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to deduce, infer, conclude",
  selitys:
    "Tehdä johtopäätös tietojen perusteella: 'päätellä jostakin'. Tyyppi 3 (-llä), Kotus 67/tulla, astevaihtelu tt:t (päättelen vahva, päätellä heikko). Hallitsee elatiivia ('päätellä jostakin'). Vrt. johtopäätös, päättää, päätös.",
  kuva: { emoji: "🕵️", alt: "päätellä – tehdä johtopäätös tietojen perusteella" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä), Kotus 67/tulla; astevaihtelu tt:t (päätel- ~ päättele-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "päättelen", merkitys: "I deduce" },
      { sija: "imperfekti (minä)", muoto: "päättelin", merkitys: "I deduced" },
      { sija: "NUT-partisiippi", muoto: "päätellyt", merkitys: "(have) deduced" },
    ],
    huom:
      "Astevaihtelu tt:t: vahva päättele- (päättelen, päättelin), heikko infinitiivissä ja NUT-muodossa (päätellä, päätellyt). Hallitsee elatiivia: 'päätellä jostakin' = to infer from sth. Vrt. johtopäätös = conclusion.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "päättelen" },
          { label: "sinä", form: "päättelet" },
          { label: "hän", form: "päättelee" },
          { label: "me", form: "päättelemme" },
          { label: "te", form: "päättelette" },
          { label: "he", form: "päättelevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en päättele" },
          { label: "hän", form: "ei päättele" },
          { label: "he", form: "eivät päättele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "päättelin" },
          { label: "sinä", form: "päättelit" },
          { label: "hän", form: "päätteli" },
          { label: "me", form: "päättelimme" },
          { label: "te", form: "päättelitte" },
          { label: "he", form: "päättelivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen päätellyt" },
          { label: "hän", form: "on päätellyt" },
          { label: "he", form: "ovat päätelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "päättele!" },
          { label: "te", form: "päätelkää!" },
          { label: "kielto (sinä)", form: "älä päättele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "johtopäätös",
      en: "conclusion",
      taso: "B2",
      esim: { fi: "Tein väärän johtopäätöksen.", en: "I drew a wrong conclusion." },
    },
    {
      fi: "päätelmä",
      en: "inference, deduction",
      taso: "B2",
      esim: { fi: "Päätelmä oli looginen.", en: "The inference was logical." },
    },
  ],
  synonyymit: [
    { fi: "tehdä johtopäätös", en: "to draw a conclusion" },
    { fi: "arvioida", en: "to judge, reckon" },
  ],
  esimerkit: {
    A2: { fi: "Mitä siitä voi päätellä?", en: "What can be deduced from that?" },
    B1: { fi: "Päättelin äänestä, että hän oli väsynyt.", en: "I inferred from his voice that he was tired." },
    B2: {
      fi: "Tuloksista voidaan päätellä, että menetelmä toimii odotetusti.",
      en: "From the results one can conclude that the method works as expected.",
    },
  },
  updatedAt: "2026-06-07",
};

export default paatella;
