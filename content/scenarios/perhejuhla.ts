import type { Scenario } from "@/lib/content-types";

// Narrative, Week 13 (Sujuvuus), B1. A grandmother's 80th birthday family celebration.
const perhejuhla: Scenario = {
  slug: "perhejuhla",
  week: 13,
  category: "sosiaalinen",
  format: "kerronta",
  title: "Perhejuhla",
  titleEn: "A family celebration",
  level: "B1",
  topic: "A grandmother's 80th birthday brings three generations of the family together.",
  paragraph:
    "Viime viikonloppuna meillä oli iso [[perhejuhla|family celebration]]. [[Juhlimme|We celebrated]] isoäitini 80-vuotissyntymäpäivää. Koko [[suku|family]] kokoontui yhteen, ja paikalla oli kolme [[sukupolvea|generations]]. Äiti oli leiponut kakun, ja pöytä notkui herkkuja. Isoäiti piti lyhyen [[puheen|speech]] ja kiitti kaikkia. Illalla tanssimme ja muistelimme vanhoja aikoja. Oli ihana päivä, jonka muistamme pitkään.",
  translation:
    "Last weekend we had a big family celebration. We celebrated my grandmother's 80th birthday. The whole family gathered together, and three generations were present. Mum had baked a cake, and the table was loaded with treats. Grandmother gave a short speech and thanked everyone. In the evening we danced and reminisced about old times. It was a wonderful day that we'll remember for a long time.",
  focus: [
    { fi: "perhejuhla", en: "family celebration" },
    { fi: "juhlia", en: "to celebrate" },
    { fi: "suku", en: "family, kin" },
    { fi: "sukupolvi", en: "generation" },
    { fi: "puhe", en: "speech" },
  ],
  updatedAt: "2026-06-07",
};

export default perhejuhla;
