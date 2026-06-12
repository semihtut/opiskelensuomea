import type { Word } from "@/lib/content-types";

// Subordinating conjunction "vaikka" (although, even though). Invariant. Concessive.
const vaikka: Word = {
  fi: "vaikka",
  slug: "vaikka",
  pos: "konjunktio (alistuskonjunktio)",
  posClass: "konjunktio",
  level: "A2",
  en: "although, even though, even if",
  selitys:
    "Alistuskonjunktio, joka ilmaisee myönnytystä tai vastakohtaa odotukselle. Ei taivuteta. 'Lähdin ulos, vaikka satoi.' Puhekielessä myös 'esimerkiksi'.",
  kuva: { alt: "vaikka – myönnytys, vastoin odotusta" },

  kielioppi: {
    tyyppi: "alistuskonjunktio (myönnytys); taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "vaikka", merkitys: "although, even though" },
      { sija: "merkitys 2", muoto: "vaikka", merkitys: "for example, say (colloquial)" },
      { sija: "vrt.", muoto: "vaikkakin", merkitys: "although (more formal)" },
    ],
    huom:
      "Myönnytys: 'Vaikka olin väsynyt, jatkoin työtä.' Puhekielessä myös ehdotuksissa: 'Mennään vaikka elokuviin.' (= let's go to the movies, say).",
  },
  johdokset: [
    {
      fi: "vaikkakin",
      en: "although, albeit",
      taso: "B2",
      esim: { fi: "Hän tuli, vaikkakin myöhässä.", en: "He came, albeit late." },
    },
    {
      fi: "vaikka mitä",
      en: "all sorts of things",
      taso: "B2",
      esim: { fi: "Kaupassa oli vaikka mitä.", en: "The shop had all sorts of things." },
    },
    {
      fi: "siitä huolimatta",
      en: "in spite of that",
      taso: "B1",
      esim: { fi: "Satoi; siitä huolimatta lähdimme.", en: "It rained; in spite of that we left." },
    },
  ],
  synonyymit: [
    { fi: "vaikkakin", en: "albeit" },
    { fi: "siitä huolimatta että", en: "despite the fact that" },
  ],
  esimerkit: {
    A2: { fi: "Lähden kävelylle, vaikka on kylmä.", en: "I'm going for a walk, even though it's cold." },
    B1: { fi: "Vaikka yritin kovasti, en onnistunut.", en: "Although I tried hard, I didn't succeed." },
    B2: {
      fi: "Vaikka hän oli asunut maassa vuosia, hän ei koskaan tuntenut sitä kodikseen.",
      en: "Even though he had lived in the country for years, he never felt it was home.",
    },
  },
  updatedAt: "2026-06-05",
};

export default vaikka;
