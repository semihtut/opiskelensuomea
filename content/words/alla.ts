import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series alla (static) / alta (separative) /
// alle (directional). Postposition governing the genitive: "pöydän alla".
const alla: Word = {
  fi: "alla",
  slug: "alla",
  pos: "adverbi / postpositio (paikka)",
  posClass: "adverbi",
  level: "A2",
  en: "under, below",
  selitys:
    "Alapuolella. Paikallissarja: alla (missä) – alta (mistä) – alle (mihin). Postpositiona genetiivin kanssa: 'pöydän alla'. Vastakohta päällä.",
  kuva: { alt: "alla – jonkin alapuolella" },

  kielioppi: {
    tyyppi: "paikan adverbi / postpositio (+ genetiivi); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "alla", merkitys: "under" },
      { sija: "mistä", muoto: "alta", merkitys: "from under" },
      { sija: "mihin", muoto: "alle", merkitys: "to under" },
    ],
    huom:
      "Postpositiona genetiivin jälkeen: 'sängyn alla'. Pronominista omistusliite: 'allani', 'alleni'. Vrt. alapuolella; vastakohta päällä / päälle.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "alla" },
          { label: "Mistä?", form: "alta" },
          { label: "Mihin?", form: "alle" },
          { label: "+ omistusliite", form: "allani / alleni" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ala",
      en: "bottom, lower part; field (of work)",
      taso: "B1",
      esim: { fi: "Hän työskentelee teknisellä alalla.", en: "She works in the technical field." },
    },
    {
      fi: "alapuoli",
      en: "underside, lower side",
      taso: "B2",
      esim: { fi: "Pöydän alapuoli on likainen.", en: "The underside of the table is dirty." },
    },
    {
      fi: "alus",
      en: "base, mat; vessel",
      taso: "B2",
      esim: { fi: "Laita lautasen alle alunen.", en: "Put a mat under the plate." },
    },
  ],
  synonyymit: [
    { fi: "alapuolella", en: "below, on the underside" },
    { fi: "alhaalla", en: "down below" },
  ],
  esimerkit: {
    A2: { fi: "Kissa nukkuu pöydän alla.", en: "The cat sleeps under the table." },
    B1: { fi: "Otin laatikon sängyn alta.", en: "I took the box from under the bed." },
    B2: {
      fi: "Hän työnsi matkalaukun sängyn alle, jottei se olisi tiellä.",
      en: "She pushed the suitcase under the bed so it wouldn't be in the way.",
    },
  },
  updatedAt: "2026-06-05",
};

export default alla;
