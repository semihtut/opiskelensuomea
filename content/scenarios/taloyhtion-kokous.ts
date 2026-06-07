import type { Scenario } from "@/lib/content-types";

// Narrative, Week 10 (Sujuvuus), B1. A housing-company annual meeting and a vote.
const taloyhtionKokous: Scenario = {
  slug: "taloyhtion-kokous",
  week: 10,
  category: "asuminen",
  format: "kerronta",
  title: "Taloyhtiön kokous",
  titleEn: "The housing company meeting",
  level: "B1",
  topic: "Residents meet to decide on a yard renovation and vote on it.",
  paragraph:
    "Eilen oli [[taloyhtiön|the housing company's]] [[yhtiökokous|annual general meeting]]. Asukkaat kokoontuivat keskustelemaan yhteisistä asioista. Tärkein aihe oli pihan [[remontti|renovation]] ja sen kustannukset. Osa asukkaista [[vastusti|opposed]] korkeita kuluja, mutta enemmistö [[kannatti|supported]] hanketta. Lopulta [[äänestimme|we voted]], ja remontti hyväksyttiin. Kokouksessa sovittiin myös uusista [[järjestyssäännöistä|house rules]].",
  translation:
    "Yesterday was the housing company's annual general meeting. The residents gathered to discuss shared matters. The most important topic was the renovation of the yard and its costs. Some of the residents opposed the high expenses, but the majority supported the project. In the end we voted, and the renovation was approved. At the meeting, new house rules were also agreed on.",
  focus: [
    { fi: "taloyhtiö", en: "housing company" },
    { fi: "yhtiökokous", en: "annual general meeting" },
    { fi: "remontti", en: "renovation" },
    { fi: "äänestää", en: "to vote" },
    { fi: "järjestyssäännöt", en: "house rules" },
  ],
  updatedAt: "2026-06-07",
};

export default taloyhtionKokous;
