import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: directional adverb ylös (up, to up). Locative series
// ylhäällä (static, up there) / ylhäältä (from up) / ylös (to up). Opposite alas.
const ylos: Word = {
  fi: "ylös",
  slug: "ylös",
  pos: "adverbi (suunnan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "up (to up), upwards",
  selitys:
    "Ylöspäin. Suuntamuoto. Paikallissarja: ylhäällä (missä) – ylhäältä (mistä) – ylös (mihin). Vastakohta alas. Vrt. nousta ylös = to get up.",
  kuva: { emoji: "🔼", alt: "ylös – liike ylöspäin" },

  kielioppi: {
    tyyppi: "suunnan adverbi; paikallissarja ylhäällä / ylhäältä / ylös",
    muodot: [
      { sija: "missä", muoto: "ylhäällä", merkitys: "up (there), high up" },
      { sija: "mistä", muoto: "ylhäältä", merkitys: "from up high" },
      { sija: "mihin", muoto: "ylös", merkitys: "up, upwards" },
    ],
    huom:
      "Ylös = suunta (mihin): 'nouse ylös'. Tila 'missä' on ylhäällä, 'mistä' ylhäältä. Vastakohta alas / alhaalla / alhaalta.",
  },
  taivutus: {
    sections: [
      {
        title: "Suuntasarja",
        rows: [
          { label: "Missä? (ylh.)", form: "ylhäällä" },
          { label: "Mistä? (ylh.)", form: "ylhäältä" },
          { label: "Mihin?", form: "ylös" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ylhäällä",
      en: "up there, high up",
      taso: "B1",
      esim: { fi: "Lintu lensi korkealla ylhäällä.", en: "The bird flew high up." },
    },
    {
      fi: "ylempi",
      en: "upper, higher",
      taso: "B1",
      esim: { fi: "Asun ylemmässä kerroksessa.", en: "I live on the upper floor." },
    },
    {
      fi: "ylöspäin",
      en: "upwards",
      taso: "B1",
      esim: { fi: "Tie nousee ylöspäin.", en: "The road climbs upwards." },
    },
  ],
  synonyymit: [
    { fi: "ylöspäin", en: "upwards" },
    { fi: "korkeammalle", en: "(to) higher up" },
  ],
  esimerkit: {
    A2: { fi: "Nouse ylös sängystä!", en: "Get up out of bed!" },
    B1: { fi: "Nostin laatikon ylös hyllylle.", en: "I lifted the box up onto the shelf." },
    B2: {
      fi: "Hän katsoi ylös ja huomasi, että taivas oli muuttunut harmaaksi.",
      en: "She looked up and noticed that the sky had turned grey.",
    },
  },
  updatedAt: "2026-06-05",
};

export default ylos;
