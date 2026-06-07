import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: ajan adverbi (jatko-sanan inessiivistä vakiintunut), taipumaton tässä merkityksessä.
const jatkossa: Word = {
  fi: "jatkossa",
  slug: "jatkossa",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "B1",
  en: "in the future, from now on, going forward",
  selitys:
    "Tästä eteenpäin, vastaisuudessa: 'jatkossa toimimme toisin'. Vakiintunut adverbi sanan jatko inessiivimuodosta. Vrt. jatkua (to continue), jatkaa (to continue sth), vastaisuudessa.",
  kuva: { emoji: "⏭️", alt: "jatkossa – tästä eteenpäin, vastaisuudessa" },

  kielioppi: {
    tyyppi: "adverbi (ajan adverbi); vakiintunut sanan jatko inessiivistä",
    muodot: [
      { sija: "perusmuoto", muoto: "jatkossa", merkitys: "in the future" },
      { sija: "vrt.", muoto: "vastaisuudessa", merkitys: "henceforth" },
      { sija: "vrt.", muoto: "jatko", merkitys: "continuation" },
    ],
    huom:
      "Adverbina = tästä lähtien, tulevaisuudessa. Johdettu sanasta jatko (continuation). Vrt. verbit jatkua/jatkaa. 'Jatkossa' viittaa lähitulevaisuuden toimintatapaan, ei kaukaiseen tulevaisuuteen.",
  },
  johdokset: [
    {
      fi: "jatko",
      en: "continuation, sequel",
      taso: "B1",
      esim: { fi: "Odotan tarinan jatkoa.", en: "I'm waiting for the story's continuation." },
    },
    {
      fi: "jatkaa",
      en: "to continue (sth)",
      taso: "A2",
      esim: { fi: "Jatkamme huomenna.", en: "We'll continue tomorrow." },
    },
  ],
  synonyymit: [
    { fi: "vastaisuudessa", en: "henceforth, in future" },
    { fi: "tästä lähtien", en: "from now on" },
  ],
  esimerkit: {
    A2: { fi: "Jatkossa tulen ajoissa.", en: "In the future I'll come on time." },
    B1: { fi: "Jatkossa käytämme uutta ohjelmaa.", en: "Going forward we'll use the new program." },
    B2: {
      fi: "Jatkossa kaikki hakemukset käsitellään sähköisesti.",
      en: "In the future all applications will be processed electronically.",
    },
  },
  updatedAt: "2026-06-07",
};

export default jatkossa;
