import type { Word } from "@/lib/content-types";

// Fixed polite phrase — imperative of "olla" + "hyvä". Used when handing something
// over and as the reply to "kiitos". Polite/plural form: olkaa hyvä.
const oleHyva: Word = {
  fi: "ole hyvä",
  slug: "ole-hyvä",
  pos: "fraasi",
  posClass: "fraasi",
  level: "A1",
  en: "here you go; you're welcome; please",
  selitys:
    "Kohtelias fraasi, jolla ojennetaan jotakin ('Ole hyvä.') tai vastataan kiitokseen. Teitellen tai monikolle: olkaa hyvä.",
  kuva: { alt: "ole hyvä – ojentava kohtelias ele" },

  kielioppi: {
    tyyppi: "fraasi: olla-verbin imperatiivi + hyvä",
    muodot: [
      { sija: "yksikkö (sinä)", muoto: "ole hyvä", merkitys: "here you go (to one person)" },
      { sija: "monikko / teitittely", muoto: "olkaa hyvä", merkitys: "here you go (polite/plural)" },
      { sija: "vastaus kiitokseen", muoto: "ole hyvä", merkitys: "you're welcome" },
    ],
    huom:
      "Imperatiivi: yksikössä 'ole hyvä', teitellen tai monikolle 'olkaa hyvä'. Käytetään myös merkityksessä 'please' kohteliaassa pyynnössä.",
  },
  johdokset: [
    {
      fi: "kiitos",
      en: "thanks (the natural pair)",
      taso: "A1",
      esim: { fi: "”Kiitos!” – ”Ole hyvä.”", en: "“Thanks!” – “You're welcome.”" },
    },
    {
      fi: "ole kiltti",
      en: "please (be kind)",
      taso: "A2",
      esim: { fi: "Ole kiltti ja auta minua.", en: "Please help me." },
    },
    {
      fi: "eipä kestä",
      en: "don't mention it",
      taso: "B1",
      esim: { fi: "”Kiitos paljon!” – ”Eipä kestä.”", en: "“Thanks a lot!” – “Don't mention it.”" },
    },
  ],
  synonyymit: [
    { fi: "olkaa hyvä", en: "here you go (polite/plural)" },
    { fi: "eipä kestä", en: "you're welcome (response)" },
  ],
  esimerkit: {
    A2: { fi: "”Kiitos!” – ”Ole hyvä.”", en: "“Thanks!” – “You're welcome.”" },
    B1: { fi: "Ole hyvä, tässä on kahvisi.", en: "Here you go, here's your coffee." },
    B2: {
      fi: "Olkaa hyvä ja istukaa, kokous alkaa pian.",
      en: "Please be seated, the meeting starts soon.",
    },
  },
  updatedAt: "2026-06-04",
};

export default oleHyva;
