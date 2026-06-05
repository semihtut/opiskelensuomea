import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: locative series kaukana (static) / kaukaa (separative) /
// kauas (directional), from root kauko-. Adverb of place.
const kaukana: Word = {
  fi: "kaukana",
  slug: "kaukana",
  pos: "adverbi (paikan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "far (away)",
  selitys:
    "Pitkän matkan päässä. Paikallissarja: kaukana (missä) – kaukaa (mistä) – kauas (mihin). Vastakohta lähellä. Pohjana sana kauko-.",
  kuva: { emoji: "🏔️", alt: "kaukana – pitkän matkan päässä" },

  kielioppi: {
    tyyppi: "paikan adverbi; kolmiosainen paikallissarja (kauko-)",
    muodot: [
      { sija: "missä", muoto: "kaukana", merkitys: "far away" },
      { sija: "mistä", muoto: "kaukaa", merkitys: "from far away" },
      { sija: "mihin", muoto: "kauas", merkitys: "to far away, far off" },
    ],
    huom:
      "Usein elatiivin kanssa: 'kaukana kotoa'. Suuntamuoto kauas: 'mennä kauas'. Vastakohta lähellä / lähelle.",
  },
  taivutus: {
    sections: [
      {
        title: "Paikallissarja",
        rows: [
          { label: "Missä?", form: "kaukana" },
          { label: "Mistä?", form: "kaukaa" },
          { label: "Mihin?", form: "kauas" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kaukainen",
      en: "distant, remote",
      taso: "B1",
      esim: { fi: "Hän muutti kaukaiseen maahan.", en: "She moved to a distant country." },
    },
    {
      fi: "kauko-ohjain",
      en: "remote control",
      taso: "B1",
      esim: { fi: "Missä on television kauko-ohjain?", en: "Where is the TV remote control?" },
    },
    {
      fi: "kaukaisuus",
      en: "distance, remoteness",
      taso: "B2",
      esim: { fi: "Vuoret häämöttivät kaukaisuudessa.", en: "The mountains loomed in the distance." },
    },
  ],
  synonyymit: [
    { fi: "etäällä", en: "at a distance" },
    { fi: "loitolla", en: "far off" },
  ],
  esimerkit: {
    A2: { fi: "Koulu on kaukana kotoa.", en: "The school is far from home." },
    B1: { fi: "Kuulin kaukaa tuttua musiikkia.", en: "I heard familiar music from far away." },
    B2: {
      fi: "Vaikka asumme kaukana toisistamme, soitamme toisillemme joka viikko.",
      en: "Although we live far from each other, we call each other every week.",
    },
  },
  updatedAt: "2026-06-05",
};

export default kaukana;
