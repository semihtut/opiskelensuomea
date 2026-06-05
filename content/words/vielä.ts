import type { Word } from "@/lib/content-types";

// Time adverb "vielä" (still; yet; more). Invariant. Opposite of jo / enää.
const viela: Word = {
  fi: "vielä",
  slug: "vielä",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "still; yet; (even) more",
  selitys:
    "Edelleen; tähän asti; lisäksi. Ajan adverbi, ei taivuteta. 'Olen vielä töissä.' Kielteisenä 'ei vielä' = not yet. Vrt. enää (kielteinen: not anymore).",
  kuva: { emoji: "⏳", alt: "vielä – edelleen, yhä" },

  kielioppi: {
    tyyppi: "ajan adverbi; taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "vielä", merkitys: "still / yet" },
      { sija: "kielteinen", muoto: "ei vielä", merkitys: "not yet" },
      { sija: "vrt.", muoto: "ei enää", merkitys: "not anymore" },
    ],
    huom:
      "Myönteinen jatkuvuus: 'Sataa vielä.' (still). Kielteinen: 'ei vielä' (not yet) ≠ 'ei enää' (not anymore). Myös 'lisää': 'Otan vielä yhden.'",
  },
  johdokset: [
    {
      fi: "vieläkin",
      en: "still (emphatic), even now",
      taso: "B1",
      esim: { fi: "Hän on vieläkin vihainen.", en: "He is still angry." },
    },
    {
      fi: "vielä kerran",
      en: "once more",
      taso: "A2",
      esim: { fi: "Sano se vielä kerran.", en: "Say it once more." },
    },
    {
      fi: "enää",
      en: "anymore (in negatives)",
      taso: "A2",
      esim: { fi: "En asu siellä enää.", en: "I don't live there anymore." },
    },
  ],
  synonyymit: [
    { fi: "yhä", en: "still, increasingly" },
    { fi: "edelleen", en: "still, continuously" },
  ],
  esimerkit: {
    A2: { fi: "Oletko vielä täällä?", en: "Are you still here?" },
    B1: { fi: "Ruoka ei ole vielä valmista.", en: "The food isn't ready yet." },
    B2: {
      fi: "Vaikka kello oli jo paljon, ulkona oli vielä valoisaa kesäyön ansiosta.",
      en: "Even though it was already late, it was still light outside thanks to the summer night.",
    },
  },
  updatedAt: "2026-06-05",
};

export default viela;
