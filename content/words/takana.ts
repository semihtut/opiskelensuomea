import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series takana (static) / takaa (separative) /
// taakse (directional). Postposition governing the genitive: "talon takana".
const takana: Word = {
  fi: "takana",
  slug: "takana",
  pos: "adverbi / postpositio (paikka)",
  posClass: "adverbi",
  level: "A2",
  en: "behind",
  selitys:
    "Takapuolella. Paikallissarja: takana (missä) – takaa (mistä) – taakse (mihin). Postpositiona genetiivin kanssa: 'talon takana'. Vastakohta edessä.",
  kuva: { emoji: "➡️", alt: "takana – jonkin takapuolella" },

  kielioppi: {
    tyyppi: "paikan adverbi / postpositio (+ genetiivi); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "takana", merkitys: "behind" },
      { sija: "mistä", muoto: "takaa", merkitys: "from behind" },
      { sija: "mihin", muoto: "taakse", merkitys: "to behind" },
    ],
    huom:
      "Postpositiona genetiivin jälkeen: 'talon takana'. Pronominista omistusliite: 'takanani'. Vastakohta edessä / eteen.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "takana" },
          { label: "Mistä?", form: "takaa" },
          { label: "Mihin?", form: "taakse" },
          { label: "+ omistusliite", form: "takanani / takanasi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "taka",
      en: "rear, back (in compounds)",
      taso: "B1",
      esim: { fi: "Taka-akkuna on rikki.", en: "The rear window is broken." },
    },
    {
      fi: "takapiha",
      en: "backyard",
      taso: "B1",
      esim: { fi: "Lapset leikkivät takapihalla.", en: "The children play in the backyard." },
    },
    {
      fi: "takaisin",
      en: "back (returning)",
      taso: "A2",
      esim: { fi: "Tulen pian takaisin.", en: "I'll come back soon." },
    },
  ],
  synonyymit: [
    { fi: "takapuolella", en: "on the back side" },
    { fi: "taustalla", en: "in the background" },
  ],
  esimerkit: {
    A2: { fi: "Puisto on talon takana.", en: "The park is behind the house." },
    B1: { fi: "Joku huusi takaani.", en: "Someone shouted from behind me." },
    B2: {
      fi: "Aurinko katosi pilvien taakse, ja ilma muuttui heti viileämmäksi.",
      en: "The sun disappeared behind the clouds, and the air immediately turned cooler.",
    },
  },
  updatedAt: "2026-06-05",
};

export default takana;
