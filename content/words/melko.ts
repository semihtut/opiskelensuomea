import type { Word } from "@/lib/content-types";

// Degree adverb "melko" (quite, fairly, rather). Invariant.
const melko: Word = {
  fi: "melko",
  slug: "melko",
  pos: "adverbi (asteen adverbi)",
  posClass: "adverbi",
  level: "A2",
  en: "quite, fairly, rather",
  selitys:
    "Kohtalaisen aste: vähemmän kuin 'hyvin' mutta enemmän kuin 'vähän'. Asteen adverbi, ei taivuteta. 'Melko hyvä' = quite good. Synonyymi aika, kohtalaisen.",
  kuva: { alt: "melko – kohtalainen aste" },

  kielioppi: {
    tyyppi: "asteen adverbi; taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "melko", merkitys: "quite, fairly" },
      { sija: "vahvempi", muoto: "melkoinen", merkitys: "considerable (adjective)" },
      { sija: "vrt.", muoto: "aika", merkitys: "quite (colloquial)" },
    ],
    huom:
      "Aste hyvin > erittäin > todella > melko/aika > vähän. 'Melko' on neutraali; puhekielessä usein 'aika'. Älä sekoita sanaan 'melkein' (almost).",
  },
  johdokset: [
    {
      fi: "melkoinen",
      en: "considerable, quite a (something)",
      taso: "B2",
      esim: { fi: "Se oli melkoinen yllätys.", en: "It was quite a surprise." },
    },
    {
      fi: "melkein",
      en: "almost (note: different word)",
      taso: "A2",
      esim: { fi: "Olen melkein valmis.", en: "I'm almost ready." },
    },
    {
      fi: "kohtalaisen",
      en: "fairly, moderately",
      taso: "B1",
      esim: { fi: "Sää on kohtalaisen lämmin.", en: "The weather is fairly warm." },
    },
  ],
  synonyymit: [
    { fi: "aika", en: "quite (colloquial)" },
    { fi: "kohtalaisen", en: "moderately" },
  ],
  esimerkit: {
    A2: { fi: "Tehtävä oli melko helppo.", en: "The task was fairly easy." },
    B1: { fi: "Matka kesti melko kauan.", en: "The trip took quite a long time." },
    B2: {
      fi: "Hotelli oli melko kallis, mutta sijainti aivan keskustassa teki siitä sen arvoisen.",
      en: "The hotel was rather expensive, but the location right in the centre made it worth it.",
    },
  },
  updatedAt: "2026-06-05",
};

export default melko;
