import type { Word } from "@/lib/content-types";

// Time adverb "taas" (again). Invariant. Synonym uudelleen / jälleen.
const taas: Word = {
  fi: "taas",
  slug: "taas",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "again",
  selitys:
    "Uudestaan, uudelleen. Ajan adverbi, ei taivuteta. 'Sataa taas.' Voi myös ilmaista vastakohtaa: 'Minä pidän teestä, hän taas kahvista.'",
  kuva: { alt: "taas – uudestaan" },

  kielioppi: {
    tyyppi: "ajan adverbi; taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "taas", merkitys: "again" },
      { sija: "variantti", muoto: "taasen", merkitys: "again (literary)" },
      { sija: "vrt.", muoto: "uudelleen / jälleen", merkitys: "again, anew" },
    ],
    huom:
      "Toisto: 'Yritän taas.' Vastakkainasettelu: 'Kesällä on lämmintä, talvella taas kylmää.' (whereas). Synonyymit uudelleen, jälleen.",
  },
  johdokset: [
    {
      fi: "jälleen",
      en: "again, once more (formal)",
      taso: "B1",
      esim: { fi: "Tapaamme jälleen ensi vuonna.", en: "We'll meet again next year." },
    },
    {
      fi: "uudelleen",
      en: "again, anew",
      taso: "A2",
      esim: { fi: "Yritä uudelleen.", en: "Try again." },
    },
    {
      fi: "taaskin",
      en: "yet again",
      taso: "B1",
      esim: { fi: "Olet taaskin myöhässä.", en: "You're late yet again." },
    },
  ],
  synonyymit: [
    { fi: "uudelleen", en: "anew" },
    { fi: "jälleen", en: "once more" },
  ],
  esimerkit: {
    A2: { fi: "Sataa taas.", en: "It's raining again." },
    B1: { fi: "Olen taas väsynyt tänään.", en: "I'm tired again today." },
    B2: {
      fi: "Hän muutti pois, mutta vuosien päästä hän palasi taas samaan kaupunkiin.",
      en: "She moved away, but years later she returned again to the same city.",
    },
  },
  updatedAt: "2026-06-05",
};

export default taas;
