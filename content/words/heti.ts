import type { Word } from "@/lib/content-types";

// Time adverb "heti" (immediately, right away). Invariant.
const heti: Word = {
  fi: "heti",
  slug: "heti",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "immediately, right away",
  selitys:
    "Ilman viivettä; saman tien. Ajan adverbi, ei taivuteta. 'Tulen heti.' 'Heti kun' = as soon as. Vrt. pian (soon).",
  kuva: { alt: "heti – saman tien, viipymättä" },

  kielioppi: {
    tyyppi: "ajan adverbi; taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "heti", merkitys: "immediately" },
      { sija: "yhdistelmä", muoto: "heti kun", merkitys: "as soon as" },
      { sija: "vrt.", muoto: "pian", merkitys: "soon" },
    ],
    huom:
      "'Heti' = saman tien (no delay); 'pian' = pian tulevaisuudessa (soon). 'Heti kun' aloittaa aikalauseen: 'Soitan heti kun pääsen kotiin.'",
  },
  johdokset: [
    {
      fi: "heti kun",
      en: "as soon as",
      taso: "A2",
      esim: { fi: "Lähden heti kun olen valmis.", en: "I'll leave as soon as I'm ready." },
    },
    {
      fi: "välittömästi",
      en: "immediately (formal)",
      taso: "B2",
      esim: { fi: "Ilmoita siitä välittömästi.", en: "Report it immediately." },
    },
    {
      fi: "heti aluksi",
      en: "right at the start",
      taso: "B1",
      esim: { fi: "Heti aluksi haluan kiittää teitä.", en: "Right at the start, I want to thank you." },
    },
  ],
  synonyymit: [
    { fi: "välittömästi", en: "immediately" },
    { fi: "saman tien", en: "right away" },
  ],
  esimerkit: {
    A2: { fi: "Tule heti tänne!", en: "Come here right away!" },
    B1: { fi: "Vastasin viestiin heti.", en: "I replied to the message immediately." },
    B2: {
      fi: "Heti kun astuin sisään, huomasin, että jotain oli pielessä.",
      en: "As soon as I stepped inside, I noticed that something was wrong.",
    },
  },
  updatedAt: "2026-06-05",
};

export default heti;
