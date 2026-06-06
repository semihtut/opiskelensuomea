import type { Word } from "@/lib/content-types";

// Degree adverb "todella" (really, very). Invariant (originally adessive of tosi/tode-).
const todella: Word = {
  fi: "todella",
  slug: "todella",
  pos: "adverbi (asteen adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "really, very, truly",
  selitys:
    "Vahvistaa sanaa: 'todella hyvä' = really good. Asteen adverbi, ei taivuteta. Pohjana tosi/tode-. Vrt. tosi (puhekielinen), oikein, erittäin.",
  kuva: { emoji: "‼️", alt: "todella – vahvistus, todella paljon" },

  kielioppi: {
    tyyppi: "asteen adverbi; taipumaton (tosi-sanan adessiivi)",
    muodot: [
      { sija: "perusmuoto", muoto: "todella", merkitys: "really, very" },
      { sija: "puhekieli", muoto: "tosi", merkitys: "really (colloquial)" },
      { sija: "vrt.", muoto: "erittäin", merkitys: "extremely" },
    ],
    huom:
      "Vahvistaa adjektiivia tai adverbia: 'todella kaunis'. Voi myös tarkoittaa 'oikeasti' (truly, in fact): 'Tapahtuiko se todella?' Puhekielessä 'tosi'.",
  },
  johdokset: [
    {
      fi: "tosi",
      en: "really (colloquial); true",
      taso: "A2",
      esim: { fi: "Se oli tosi hyvä elokuva.", en: "It was a really good movie." },
    },
    {
      fi: "todellinen",
      en: "real, actual",
      taso: "B1",
      esim: { fi: "Se on todellinen ongelma.", en: "It is a real problem." },
    },
    {
      fi: "todellisuus",
      en: "reality",
      taso: "B2",
      esim: { fi: "Unelma ja todellisuus eroavat.", en: "Dream and reality differ." },
    },
  ],
  synonyymit: [
    { fi: "oikein", en: "really, very" },
    { fi: "erittäin", en: "extremely" },
  ],
  esimerkit: {
    A2: { fi: "Olen todella väsynyt.", en: "I'm really tired." },
    B1: { fi: "Ruoka oli todella maukasta.", en: "The food was really tasty." },
    B2: {
      fi: "En ole varma, halusiko hän todella auttaa vai esittikö hän vain kohteliasta.",
      en: "I'm not sure whether he really wanted to help or was just acting polite.",
    },
  },
  updatedAt: "2026-06-05",
};

export default todella;
