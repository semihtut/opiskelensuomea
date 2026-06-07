import type { Scenario } from "@/lib/content-types";

// Dialogue, Week 9 (Sujuvuus), B1. A disagreement resolved with a compromise.
const erimielisyys: Scenario = {
  slug: "erimielisyys",
  week: 9,
  category: "sosiaalinen",
  format: "dialogi",
  title: "Erimielisyys ja sopu",
  titleEn: "A disagreement and a compromise",
  level: "B1",
  topic: "Two flatmates disagree about a paint colour and reach a compromise.",
  lines: [
    {
      speaker: "Anna",
      fi: "Minusta meidän pitäisi maalata olohuone siniseksi.",
      en: "I think we should paint the living room blue.",
    },
    {
      speaker: "Mikko",
      fi: "En ole samaa mieltä. [[Mielestäni|In my opinion]] vaalea väri olisi parempi.",
      en: "I don't agree. In my opinion a light colour would be better.",
    },
    {
      speaker: "Anna",
      fi: "Ymmärrän [[näkökulmasi|your viewpoint]], mutta sininen on rauhoittava.",
      en: "I understand your viewpoint, but blue is calming.",
    },
    {
      speaker: "Mikko",
      fi: "Totta. Voisimmeko tehdä [[kompromissin|a compromise]]? Yksi seinä sininen, muut vaaleat.",
      en: "True. Could we make a compromise? One wall blue, the others light.",
    },
    {
      speaker: "Anna",
      fi: "Se kuulostaa hyvältä. [[Sovitaan|Let's agree]] niin.",
      en: "That sounds good. Let's agree on that.",
    },
    {
      speaker: "Mikko",
      fi: "Hienoa, että [[pääsimme sopuun|we reached an agreement]] näin helposti.",
      en: "Great that we reached an agreement so easily.",
    },
  ],
  focus: [
    { fi: "erimielisyys", en: "disagreement" },
    { fi: "näkökulma", en: "viewpoint, perspective" },
    { fi: "kompromissi", en: "compromise" },
    { fi: "sopia", en: "to agree" },
    { fi: "päästä sopuun", en: "to reach an agreement" },
  ],
  updatedAt: "2026-06-07",
};

export default erimielisyys;
