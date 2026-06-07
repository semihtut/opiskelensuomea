import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, t:d gradation, stem riitele- ~ riidel-.
// Present minä riitelen, hän riitelee; imperfect minä riitelin; NUT riidellyt. Governs elative.
const riidella: Word = {
  fi: "riidellä",
  slug: "riidellä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to quarrel, argue, fight (verbally)",
  selitys:
    "Olla eri mieltä äänekkäästi, kiistellä: 'riidellä rahasta'. Tyyppi 3 (-llä), Kotus 67/tulla, astevaihtelu t:d (riitelen vahva, riidellä heikko). Hallitsee elatiivia ('riidellä jostakin'). Johdettu sanasta riita. Vrt. riita, kiistellä.",
  kuva: { emoji: "💢", alt: "riidellä – olla eri mieltä äänekkäästi, kiistellä" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä), Kotus 67/tulla; astevaihtelu t:d (riidel- ~ riitele-)",
    muodot: [
      { sija: "preesens (minä)", muoto: "riitelen", merkitys: "I quarrel" },
      { sija: "imperfekti (minä)", muoto: "riitelin", merkitys: "I quarrelled" },
      { sija: "NUT-partisiippi", muoto: "riidellyt", merkitys: "(have) quarrelled" },
    ],
    huom:
      "Astevaihtelu t:d: vahva riitele- (riitelen, riitelin), heikko infinitiivissä ja NUT-muodossa (riidellä, riidellyt). Hallitsee elatiivia: 'riidellä jostakin'. Johdettu sanasta riita. Vrt. kiistellä = to dispute.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "riitelen" },
          { label: "sinä", form: "riitelet" },
          { label: "hän", form: "riitelee" },
          { label: "me", form: "riitelemme" },
          { label: "te", form: "riitelette" },
          { label: "he", form: "riitelevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en riitele" },
          { label: "hän", form: "ei riitele" },
          { label: "he", form: "eivät riitele" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "riitelin" },
          { label: "sinä", form: "riitelit" },
          { label: "hän", form: "riiteli" },
          { label: "me", form: "riitelimme" },
          { label: "te", form: "riitelitte" },
          { label: "he", form: "riitelivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen riidellyt" },
          { label: "hän", form: "on riidellyt" },
          { label: "he", form: "ovat riidelleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "riitele!" },
          { label: "te", form: "riidelkää!" },
          { label: "kielto (sinä)", form: "älä riitele" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "riita",
      en: "quarrel, argument, dispute",
      taso: "B1",
      esim: { fi: "Heillä oli paha riita.", en: "They had a bad quarrel." },
    },
    {
      fi: "riitely",
      en: "quarrelling, bickering",
      taso: "B2",
      esim: { fi: "Jatkuva riitely väsyttää.", en: "Constant quarrelling is tiring." },
    },
  ],
  synonyymit: [
    { fi: "kiistellä", en: "to dispute" },
    { fi: "väitellä", en: "to argue, debate" },
  ],
  esimerkit: {
    A2: { fi: "Lapset riitelevät lelusta.", en: "The children are quarrelling over a toy." },
    B1: { fi: "Emme halua riidellä tästä.", en: "We don't want to argue about this." },
    B2: {
      fi: "Sen sijaan että riitelisimme syyllisestä, keskittykäämme ratkaisuun.",
      en: "Instead of quarrelling about who's to blame, let's focus on the solution.",
    },
  },
  updatedAt: "2026-06-07",
};

export default riidella;
