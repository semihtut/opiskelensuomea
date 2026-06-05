import type { Word } from "@/lib/content-types";

// Time adverb "sitten" (ago; then, after that). Invariant. With a time expression =
// "ago" (vuosi sitten); sequencing = "then".
const sitten: Word = {
  fi: "sitten",
  slug: "sitten",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "ago; then, after that",
  selitys:
    "Ajanilmauksen kanssa = 'sitten' (ago): 'vuosi sitten'. Järjestyksessä = 'sitten' (then, next): 'ensin… sitten…'. Ei taivuteta. Puhekielessä 'sit'.",
  kuva: { emoji: "⏱️", alt: "sitten – aiemmin (ago) tai seuraavaksi (then)" },

  kielioppi: {
    tyyppi: "ajan adverbi; taipumaton",
    muodot: [
      { sija: "merkitys 1", muoto: "(aika) sitten", merkitys: "ago (vuosi sitten)" },
      { sija: "merkitys 2", muoto: "sitten", merkitys: "then, after that" },
      { sija: "yhdistelmä", muoto: "ensin… sitten…", merkitys: "first… then…" },
    ],
    huom:
      "'Ago' vaatii ajanilmauksen ja sanan jälkeen: 'kaksi viikkoa sitten'. Järjestyksessä: 'Ensin söin, sitten lähdin.' Puhekielinen muoto 'sit'.",
  },
  johdokset: [
    {
      fi: "sitten kun",
      en: "once, when (after)",
      taso: "B1",
      esim: { fi: "Sitten kun olet valmis, lähdetään.", en: "Once you're ready, let's go." },
    },
    {
      fi: "siitä lähtien",
      en: "since then",
      taso: "B2",
      esim: { fi: "Siitä lähtien olen ollut onnellinen.", en: "Since then I have been happy." },
    },
    {
      fi: "sittemmin",
      en: "subsequently, later (formal)",
      taso: "B2",
      esim: { fi: "Hän muutti pois ja sittemmin avioitui.", en: "She moved away and subsequently married." },
    },
  ],
  synonyymit: [
    { fi: "sen jälkeen", en: "after that" },
    { fi: "seuraavaksi", en: "next" },
  ],
  esimerkit: {
    A2: { fi: "Muutin tänne vuosi sitten.", en: "I moved here a year ago." },
    B1: { fi: "Ensin teemme työt, sitten levätään.", en: "First we do the work, then we rest." },
    B2: {
      fi: "Tapasin hänet ensimmäisen kerran kymmenen vuotta sitten, emmekä ole sen jälkeen menettäneet yhteyttä.",
      en: "I met her for the first time ten years ago, and we haven't lost touch since.",
    },
  },
  updatedAt: "2026-06-05",
};

export default sitten;
