import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series päällä (static) / päältä (separative) /
// päälle (directional). Postposition governing the genitive: "pöydän päällä".
const paalla: Word = {
  fi: "päällä",
  slug: "päällä",
  pos: "adverbi / postpositio (paikka)",
  posClass: "adverbi",
  level: "A2",
  en: "on top (of), on",
  selitys:
    "Yläpuolella, pinnalla. Paikallissarja: päällä (missä) – päältä (mistä) – päälle (mihin). Postpositiona genetiivin kanssa: 'pöydän päällä'. Vastakohta alla.",
  kuva: { alt: "päällä – jonkin pinnalla" },

  kielioppi: {
    tyyppi: "paikan adverbi / postpositio (+ genetiivi); kolmiosainen paikallissarja",
    muodot: [
      { sija: "missä", muoto: "päällä", merkitys: "on top of" },
      { sija: "mistä", muoto: "päältä", merkitys: "from on top of" },
      { sija: "mihin", muoto: "päälle", merkitys: "onto" },
    ],
    huom:
      "Postpositiona genetiivin jälkeen: 'pöydän päällä'. Myös vaatteista: 'takki on päällä' = the coat is on. 'Laittaa päälle' = to put on. Vastakohta alla / alle.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "päällä" },
          { label: "Mistä?", form: "päältä" },
          { label: "Mihin?", form: "päälle" },
          { label: "+ omistusliite", form: "päälläni / päälleni" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "päällimmäinen",
      en: "topmost, uppermost",
      taso: "B2",
      esim: { fi: "Päällimmäinen kirja on minun.", en: "The topmost book is mine." },
    },
    {
      fi: "päällys",
      en: "cover, casing",
      taso: "B2",
      esim: { fi: "Kirjan päällys on värikäs.", en: "The book's cover is colourful." },
    },
    {
      fi: "yllä",
      en: "above; on (clothing)",
      taso: "B1",
      esim: { fi: "Hänellä oli yllään uusi takki.", en: "She had a new coat on." },
    },
  ],
  synonyymit: [
    { fi: "yläpuolella", en: "above, on top" },
    { fi: "pinnalla", en: "on the surface" },
  ],
  esimerkit: {
    A2: { fi: "Kirja on pöydän päällä.", en: "The book is on the table." },
    B1: { fi: "Otin avaimet kaapin päältä.", en: "I took the keys from on top of the cupboard." },
    B2: {
      fi: "Laitoin lämpimän takin päälle, koska ulkona oli kova tuuli.",
      en: "I put on a warm coat, because there was a strong wind outside.",
    },
  },
  updatedAt: "2026-06-05",
};

export default paalla;
