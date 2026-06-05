import type { Word } from "@/lib/content-types";

// Time adverb "pian" (soon). Invariant. Comparative pikemmin (rather/sooner).
const pian: Word = {
  fi: "pian",
  slug: "pian",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "soon",
  selitys:
    "Lähitulevaisuudessa; pian. Ajan adverbi. 'Tulen pian.' Vrt. heti (immediately). Komparatiivi pikemmin tarkoittaa 'mieluummin / pikemminkin'.",
  kuva: { emoji: "🔜", alt: "pian – lähitulevaisuudessa" },

  kielioppi: {
    tyyppi: "ajan adverbi; komparatiivi pikemmin (eri merkitys)",
    muodot: [
      { sija: "perusmuoto", muoto: "pian", merkitys: "soon" },
      { sija: "vrt.", muoto: "heti", merkitys: "immediately" },
      { sija: "komparatiivi", muoto: "pikemmin(kin)", merkitys: "rather, sooner" },
    ],
    huom:
      "'Pian' = soon (lähitulevaisuus); 'heti' = right now (no delay). Komparatiivi 'pikemminkin' tarkoittaa 'rather' eikä 'sooner in time': 'pikemminkin väsynyt kuin sairas'.",
  },
  johdokset: [
    {
      fi: "piakkoin",
      en: "shortly, before long",
      taso: "B2",
      esim: { fi: "Saavumme piakkoin perille.", en: "We'll arrive before long." },
    },
    {
      fi: "pikainen",
      en: "quick, speedy",
      taso: "B1",
      esim: { fi: "Toivotan pikaista paranemista.", en: "I wish a speedy recovery." },
    },
    {
      fi: "pikemminkin",
      en: "rather, more like",
      taso: "B2",
      esim: { fi: "Se ei ole halpa, pikemminkin kallis.", en: "It isn't cheap, rather expensive." },
    },
  ],
  synonyymit: [
    { fi: "piakkoin", en: "shortly" },
    { fi: "kohta", en: "soon, in a moment" },
  ],
  esimerkit: {
    A2: { fi: "Bussi tulee pian.", en: "The bus is coming soon." },
    B1: { fi: "Näemme pian taas, toivottavasti.", en: "We'll see each other again soon, hopefully." },
    B2: {
      fi: "Sää näyttää siltä, että pian alkaa sataa, joten otetaan sateenvarjot mukaan.",
      en: "The weather looks like it'll soon start raining, so let's take umbrellas.",
    },
  },
  updatedAt: "2026-06-05",
};

export default pian;
