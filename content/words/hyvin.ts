import type { Word } from "@/lib/content-types";

// Adverb "hyvin" (well; very). Invariant adverb form of hyvä. Comparative paremmin,
// superlative parhaiten (suppletive).
const hyvin: Word = {
  fi: "hyvin",
  slug: "hyvin",
  pos: "adverbi (tavan / asteen adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "well; very",
  selitys:
    "Tavan adverbi (well): 'nukuin hyvin'; asteen adverbi (very): 'hyvin kaunis'. Pohjana hyvä. Vertailu suppletiivinen: hyvin – paremmin – parhaiten.",
  kuva: { alt: "hyvin – hyvä lopputulos" },

  kielioppi: {
    tyyppi: "tavan/asteen adverbi (hyvä); suppletiivinen vertailu",
    muodot: [
      { sija: "perusmuoto", muoto: "hyvin", merkitys: "well / very" },
      { sija: "komparatiivi", muoto: "paremmin", merkitys: "better" },
      { sija: "superlatiivi", muoto: "parhaiten", merkitys: "best" },
    ],
    huom:
      "Kaksi käyttöä: tapa ('Voin hyvin' = I'm well) ja aste ('hyvin iso' = very big). Vertailu on suppletiivinen (vrt. adjektiivi hyvä – parempi – paras).",
  },
  johdokset: [
    {
      fi: "paremmin",
      en: "better",
      taso: "A2",
      esim: { fi: "Nukuin tänään paremmin.", en: "I slept better today." },
    },
    {
      fi: "parhaiten",
      en: "best",
      taso: "B1",
      esim: { fi: "Tämä toimii parhaiten.", en: "This works best." },
    },
    {
      fi: "hyvinvointi",
      en: "well-being, welfare",
      taso: "B2",
      esim: { fi: "Liikunta lisää hyvinvointia.", en: "Exercise increases well-being." },
    },
  ],
  synonyymit: [
    { fi: "oikein", en: "very, really (as intensifier)" },
    { fi: "todella", en: "really, very" },
  ],
  esimerkit: {
    A2: { fi: "Puhut hyvin suomea.", en: "You speak Finnish well." },
    B1: { fi: "Tämä tehtävä on hyvin tärkeä.", en: "This task is very important." },
    B2: {
      fi: "Kaikki sujui hyvin, vaikka olimme valmistautuneet vain vähän aikaa.",
      en: "Everything went well, even though we had prepared for only a short time.",
    },
  },
  updatedAt: "2026-06-05",
};

export default hyvin;
