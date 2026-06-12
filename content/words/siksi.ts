import type { Word } from "@/lib/content-types";

// Adverb "siksi" (therefore, for that reason). Invariant in this use. Marks a
// consequence; pairs with koska (reason) and että (siksi että = because).
const siksi: Word = {
  fi: "siksi",
  slug: "siksi",
  pos: "adverbi (syyn adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "therefore, for that reason",
  selitys:
    "Ilmaisee seurausta tai syytä. 'Satoi, siksi jäin kotiin.' Pari: siksi… koska / siksi että = for the reason that. Pohjana pronomini se (translatiivi).",
  kuva: { alt: "siksi – syy ja seuraus" },

  kielioppi: {
    tyyppi: "syyn adverbi (se-pronominin translatiivi); konjunktioadverbi",
    muodot: [
      { sija: "perusmuoto", muoto: "siksi", merkitys: "therefore, for that reason" },
      { sija: "pari", muoto: "siksi että", merkitys: "because (lit. for that, that)" },
      { sija: "vrt.", muoto: "sen takia / sen vuoksi", merkitys: "because of that" },
    ],
    huom:
      "Seuraus: 'Olin myöhässä, siksi juoksin.' Syyn esittely: 'Tein sen siksi, että halusin auttaa.' Sana on alun perin se-pronominin translatiivi (joksikin → siksi).",
  },
  johdokset: [
    {
      fi: "siksi että",
      en: "because (introducing reason)",
      taso: "B1",
      esim: { fi: "Tulin siksi, että halusin nähdä sinut.", en: "I came because I wanted to see you." },
    },
    {
      fi: "sen takia",
      en: "because of that",
      taso: "B1",
      esim: { fi: "Sen takia en voinut tulla.", en: "Because of that I couldn't come." },
    },
    {
      fi: "siten",
      en: "thus, in that way",
      taso: "B2",
      esim: { fi: "Hän auttoi minua ja siten pelasti päiväni.", en: "He helped me and thus saved my day." },
    },
  ],
  synonyymit: [
    { fi: "sen takia", en: "because of that" },
    { fi: "sen vuoksi", en: "for that reason" },
  ],
  esimerkit: {
    A2: { fi: "Oli kylmä, siksi pukeuduin lämpimästi.", en: "It was cold, therefore I dressed warmly." },
    B1: { fi: "En nukkunut hyvin, siksi olen väsynyt.", en: "I didn't sleep well, therefore I'm tired." },
    B2: {
      fi: "Hän opiskeli ahkerasti juuri siksi, että halusi päästä unelma-ammattiinsa.",
      en: "She studied hard precisely because she wanted to get into her dream profession.",
    },
  },
  updatedAt: "2026-06-05",
};

export default siksi;
