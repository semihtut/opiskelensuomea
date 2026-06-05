import type { Word } from "@/lib/content-types";

// Coordinating conjunction "vai" (or, in questions). Invariant. Used only in
// alternative questions; statements use "tai".
const vai: Word = {
  fi: "vai",
  slug: "vai",
  pos: "konjunktio (rinnastuskonjunktio)",
  posClass: "konjunktio",
  level: "A2",
  en: "or (in questions)",
  selitys:
    "Rinnastuskonjunktio, jota käytetään vaihtoehtokysymyksissä. Ei taivuteta. 'Tuletko sinä vai hän?' Väitelauseessa käytetään tai.",
  kuva: { emoji: "❔", alt: "vai – vaihtoehtokysymys" },

  kielioppi: {
    tyyppi: "rinnastuskonjunktio (kysymyksen vaihtoehto); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "vai", merkitys: "or (in a question)" },
      { sija: "vrt.", muoto: "tai", merkitys: "or (in a statement)" },
      { sija: "lopussa", muoto: "vai?", merkitys: "or…? (tag question)" },
    ],
    huom:
      "Käytä VAIN kysymyksessä, jossa on aito valinta: 'Juotko teetä vai kahvia?'. Väitteessä käytä 'tai'. Lauseen lopussa 'vai?' = isn't it? right?",
  },
  johdokset: [
    {
      fi: "vai mitä?",
      en: "or what? right?",
      taso: "B1",
      esim: { fi: "Tämä on hyvä, vai mitä?", en: "This is good, isn't it?" },
    },
    {
      fi: "vaiko",
      en: "or (emphatic, in questions)",
      taso: "B2",
      esim: { fi: "Lähdetkö nyt vaiko myöhemmin?", en: "Are you leaving now or later?" },
    },
    {
      fi: "tai (väitteessä)",
      en: "or (in statements)",
      taso: "A1",
      esim: { fi: "Otan teetä tai kahvia.", en: "I'll have tea or coffee." },
    },
  ],
  synonyymit: [
    { fi: "vaiko", en: "or (emphatic question form)" },
    { fi: "vaiko sittenkin", en: "or after all" },
  ],
  esimerkit: {
    A2: { fi: "Otatko teetä vai kahvia?", en: "Will you have tea or coffee? (choose one)" },
    B1: { fi: "Menemmekö elokuviin vai jäämmekö kotiin?", en: "Shall we go to the movies or stay home?" },
    B2: {
      fi: "En ole varma, oliko hän iloinen vai vain kohtelias, kun kiitin häntä.",
      en: "I'm not sure whether she was happy or just polite when I thanked her.",
    },
  },
  updatedAt: "2026-06-05",
};

export default vai;
