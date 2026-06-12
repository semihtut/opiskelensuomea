import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series lähellä (static) / läheltä (separative) /
// lähelle (directional). Works as adverb and as postposition with the genitive.
const lahella: Word = {
  fi: "lähellä",
  slug: "lähellä",
  pos: "adverbi / postpositio (paikka)",
  posClass: "adverbi",
  level: "A2",
  en: "near, close (by)",
  selitys:
    "Pienen matkan päässä. Paikallissarja: lähellä (missä) – läheltä (mistä) – lähelle (mihin). Postpositiona genetiivin kanssa: 'aseman lähellä'. Vastakohta kaukana.",
  kuva: { alt: "lähellä – pienen matkan päässä" },

  kielioppi: {
    tyyppi: "paikan adverbi / postpositio (+ genetiivi); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "lähellä", merkitys: "near" },
      { sija: "mistä", muoto: "läheltä", merkitys: "from nearby" },
      { sija: "mihin", muoto: "lähelle", merkitys: "to nearby" },
    ],
    huom:
      "Postpositiona genetiivin jälkeen: 'koulun lähellä'. Pohjana adjektiivi lähi-/lähellä oleva. Vastakohta kaukana / kauas.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "lähellä" },
          { label: "Mistä?", form: "läheltä" },
          { label: "Mihin?", form: "lähelle" },
          { label: "+ omistusliite", form: "lähelläni / lähelleni" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "lähinnä",
      en: "nearest; mainly, mostly",
      taso: "B2",
      esim: { fi: "Söin lähinnä vihanneksia.", en: "I ate mainly vegetables." },
    },
    {
      fi: "lähistö",
      en: "vicinity, surroundings",
      taso: "B1",
      esim: { fi: "Lähistöllä on kauppa.", en: "There is a shop in the vicinity." },
    },
    {
      fi: "läheinen",
      en: "close (person/place)",
      taso: "B1",
      esim: { fi: "Hän on läheinen ystäväni.", en: "He is a close friend of mine." },
    },
  ],
  synonyymit: [
    { fi: "vieressä", en: "next to" },
    { fi: "lähistöllä", en: "in the vicinity" },
  ],
  esimerkit: {
    A2: { fi: "Asun koulun lähellä.", en: "I live near the school." },
    B1: { fi: "Hotelli oli mukavasti aseman lähellä.", en: "The hotel was conveniently near the station." },
    B2: {
      fi: "Etsin asuntoa läheltä keskustaa, jotta voisin kävellä töihin.",
      en: "I'm looking for a flat near the city centre so I could walk to work.",
    },
  },
  updatedAt: "2026-06-05",
};

export default lahella;
