import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series edessä (static) / edestä (separative) /
// eteen (directional). Postposition governing the genitive: "talon edessä".
const edessa: Word = {
  fi: "edessä",
  slug: "edessä",
  pos: "adverbi / postpositio (paikka)",
  posClass: "adverbi",
  level: "A2",
  en: "in front (of)",
  selitys:
    "Etupuolella. Paikallissarja: edessä (missä) – edestä (mistä) – eteen (mihin). Postpositiona genetiivin kanssa: 'talon edessä'. Vastakohta takana.",
  kuva: { alt: "edessä – jonkin etupuolella" },

  kielioppi: {
    tyyppi: "paikan adverbi / postpositio (+ genetiivi); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "edessä", merkitys: "in front (of)" },
      { sija: "mistä", muoto: "edestä", merkitys: "from (the) front" },
      { sija: "mihin", muoto: "eteen", merkitys: "to (the) front" },
    ],
    huom:
      "Postpositiona genetiivin jälkeen: 'talon edessä'. Pronominista omistusliite: 'edessäni'. Vastakohta takana / taakse.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "edessä" },
          { label: "Mistä?", form: "edestä" },
          { label: "Mihin?", form: "eteen" },
          { label: "+ omistusliite", form: "edessäni / edessäsi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "etu",
      en: "front; advantage",
      taso: "B1",
      esim: { fi: "Auton etu vaurioitui.", en: "The front of the car was damaged." },
    },
    {
      fi: "edellä",
      en: "ahead, in front (moving)",
      taso: "B1",
      esim: { fi: "Hän käveli edellä.", en: "She walked ahead." },
    },
    {
      fi: "etupuoli",
      en: "front side",
      taso: "B2",
      esim: { fi: "Talon etupuoli on aurinkoinen.", en: "The front side of the house is sunny." },
    },
  ],
  synonyymit: [
    { fi: "etupuolella", en: "on the front side" },
    { fi: "edellä", en: "ahead of" },
  ],
  esimerkit: {
    A2: { fi: "Auto on talon edessä.", en: "The car is in front of the house." },
    B1: { fi: "Seisoin sinun edessäsi koko ajan.", en: "I was standing in front of you the whole time." },
    B2: {
      fi: "Hän pysäköi auton suoraan oven eteen, vaikka siinä ei saanut pysäköidä.",
      en: "He parked the car right in front of the door, even though parking wasn't allowed there.",
    },
  },
  updatedAt: "2026-06-05",
};

export default edessa;
