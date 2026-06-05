import type { Word } from "@/lib/content-types";

// Subordinating conjunction "jos" (if). Invariant. Introduces a conditional clause,
// often paired with the conditional mood: "Jos sataisi, jäisin kotiin."
const jos: Word = {
  fi: "jos",
  slug: "jos",
  pos: "konjunktio (alistuskonjunktio)",
  posClass: "konjunktio",
  level: "A1",
  en: "if",
  selitys:
    "Alistuskonjunktio, joka ilmaisee ehtoa. Ei taivuteta. Aloittaa ehtolauseen: 'Jos on aikaa, mennään ulos.' Usein konditionaalin kanssa.",
  kuva: { emoji: "🔀", alt: "jos – ehto ja vaihtoehto" },

  kielioppi: {
    tyyppi: "alistuskonjunktio (ehto); taipumaton; aloittaa ehtolauseen",
    muodot: [
      { sija: "perusmuoto", muoto: "jos", merkitys: "if" },
      { sija: "yhdistelmä", muoto: "jos vain", merkitys: "if only" },
      { sija: "vrt.", muoto: "jollei / ellei", merkitys: "if not, unless" },
    ],
    huom:
      "Reaaliehto preesensissä: 'jos sataa, otan sateenvarjon'. Epätodellinen ehto konditionaalissa: 'jos sataisi, jäisin kotiin'. Kielteinen: jollei / ellei.",
  },
  johdokset: [
    {
      fi: "jollei",
      en: "if not, unless",
      taso: "B2",
      esim: { fi: "Jollei sada, lähdemme kävelylle.", en: "Unless it rains, we'll go for a walk." },
    },
    {
      fi: "jos kohta",
      en: "even if, although",
      taso: "B2",
      esim: { fi: "Tulen, jos kohta myöhässä.", en: "I'll come, even if late." },
    },
    {
      fi: "vaikka",
      en: "even though, although",
      taso: "A2",
      esim: { fi: "Lähden, vaikka sataa.", en: "I'll leave, even though it's raining." },
    },
  ],
  synonyymit: [
    { fi: "mikäli", en: "provided that, if (formal)" },
    { fi: "kunhan", en: "as long as, provided" },
  ],
  esimerkit: {
    A2: { fi: "Jos sinulla on aikaa, soita minulle.", en: "If you have time, call me." },
    B1: { fi: "Jos olisin rikas, matkustaisin paljon.", en: "If I were rich, I would travel a lot." },
    B2: {
      fi: "Jos olisin tiennyt, että tulet, olisin laittanut enemmän ruokaa.",
      en: "If I had known you were coming, I would have cooked more food.",
    },
  },
  updatedAt: "2026-06-05",
};

export default jos;
