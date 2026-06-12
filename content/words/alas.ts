import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: directional adverb alas (down, to down). Locative series
// alhaalla (static, down there) / alhaalta (from down) / alas (to down). Opposite ylös.
const alas: Word = {
  fi: "alas",
  slug: "alas",
  pos: "adverbi (suunnan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "down (to down), downwards",
  selitys:
    "Alaspäin. Suuntamuoto. Paikallissarja: alhaalla (missä) – alhaalta (mistä) – alas (mihin). Vastakohta ylös. Vrt. istua alas = to sit down.",
  kuva: { alt: "alas – liike alaspäin" },

  kielioppi: {
    tyyppi: "suunnan adverbi; paikallissarja alhaalla / alhaalta / alas",
    muodot: [
      { sija: "missä", muoto: "alhaalla", merkitys: "down (there), below" },
      { sija: "mistä", muoto: "alhaalta", merkitys: "from below" },
      { sija: "mihin", muoto: "alas", merkitys: "down, downwards" },
    ],
    huom:
      "Alas = suunta (mihin): 'tule alas'. Tila 'missä' on alhaalla, 'mistä' alhaalta. Vastakohta ylös / ylhäällä / ylhäältä.",
  },
  taivutus: {
    sections: [
      {
        title: "Suuntasarja",
        rows: [
          { label: "Missä? (alh.)", form: "alhaalla" },
          { label: "Mistä? (alh.)", form: "alhaalta" },
          { label: "Mihin?", form: "alas" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "alhaalla",
      en: "down there, below",
      taso: "B1",
      esim: { fi: "Auto odottaa alhaalla pihalla.", en: "The car is waiting down in the yard." },
    },
    {
      fi: "alempi",
      en: "lower",
      taso: "B1",
      esim: { fi: "Tavarat ovat alemmalla hyllyllä.", en: "The items are on the lower shelf." },
    },
    {
      fi: "alaspäin",
      en: "downwards",
      taso: "B1",
      esim: { fi: "Hissi meni alaspäin.", en: "The lift went downwards." },
    },
  ],
  synonyymit: [
    { fi: "alaspäin", en: "downwards" },
    { fi: "alemmas", en: "(to) lower down" },
  ],
  esimerkit: {
    A2: { fi: "Tule alas, ruoka on valmista!", en: "Come down, the food is ready!" },
    B1: { fi: "Laskin laukun alas lattialle.", en: "I put the bag down on the floor." },
    B2: {
      fi: "Kun katsoin alas vuoren huipulta, koko kaupunki näkyi alhaalla pienenä.",
      en: "When I looked down from the mountain top, the whole city looked tiny below.",
    },
  },
  updatedAt: "2026-06-05",
};

export default alas;
