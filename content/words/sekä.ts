import type { Word } from "@/lib/content-types";

// Coordinating conjunction "sekä" (and; both...and). Invariant. Often paired:
// "sekä... että" = both... and.
const seka: Word = {
  fi: "sekä",
  slug: "sekä",
  pos: "konjunktio (rinnastuskonjunktio)",
  posClass: "konjunktio",
  level: "A2",
  en: "and; (sekä… että) both… and",
  selitys:
    "Rinnastuskonjunktio, joka yhdistää asioita; usein parina 'sekä… että' = both… and. Ei taivuteta. Hieman muodollisempi kuin ja.",
  kuva: { alt: "sekä – yhdistää kaksi asiaa" },

  kielioppi: {
    tyyppi: "rinnastuskonjunktio; taipumaton; usein pari sekä… että",
    muodot: [
      { sija: "perusmuoto", muoto: "sekä", merkitys: "and, as well as" },
      { sija: "pari", muoto: "sekä… että", merkitys: "both… and" },
      { sija: "vrt.", muoto: "ja", merkitys: "and (neutral)" },
    ],
    huom:
      "'Sekä… että' korostaa, että molemmat pätevät: 'sekä äiti että isä'. Yksin 'sekä' on hieman muodollisempi kuin 'ja'. Ei käytetä kieltolauseessa (siellä 'eikä').",
  },
  johdokset: [
    {
      fi: "sekä… että",
      en: "both… and",
      taso: "B1",
      esim: { fi: "Pidän sekä teestä että kahvista.", en: "I like both tea and coffee." },
    },
    {
      fi: "ynnä",
      en: "plus, and (formal)",
      taso: "B2",
      esim: { fi: "kahvi ynnä muut juomat", en: "coffee plus other drinks" },
    },
    {
      fi: "samoin kuin",
      en: "as well as",
      taso: "B2",
      esim: { fi: "Hän, samoin kuin minä, pitää matkustamisesta.", en: "He, as well as I, likes travelling." },
    },
  ],
  synonyymit: [
    { fi: "ja", en: "and" },
    { fi: "samoin kuin", en: "as well as" },
  ],
  esimerkit: {
    A2: { fi: "Ostin leipää sekä maitoa.", en: "I bought bread and milk." },
    B1: { fi: "Sekä opettaja että oppilaat olivat tyytyväisiä.", en: "Both the teacher and the students were satisfied." },
    B2: {
      fi: "Matka oli sekä pitkä että kallis, mutta silti sen arvoinen.",
      en: "The trip was both long and expensive, but still worth it.",
    },
  },
  updatedAt: "2026-06-05",
};

export default seka;
