import type { Word } from "@/lib/content-types";

// Time adverb "jo" (already). Invariant. Opposite vielä (still / not yet).
const jo: Word = {
  fi: "jo",
  slug: "jo",
  pos: "adverbi (ajan adverbi)",
  posClass: "adverbi",
  level: "A1",
  en: "already",
  selitys:
    "Aikaisemmin kuin odotettiin; tähän mennessä. Ajan adverbi, ei taivuteta. 'Olen jo valmis.' Vastakohta 'ei vielä' (not yet).",
  kuva: { alt: "jo – jo tapahtunut" },

  kielioppi: {
    tyyppi: "ajan adverbi; taipumaton",
    muodot: [
      { sija: "perusmuoto", muoto: "jo", merkitys: "already" },
      { sija: "vastakohta", muoto: "ei vielä", merkitys: "not yet" },
      { sija: "vrt.", muoto: "vasta", merkitys: "only (just), not until" },
    ],
    huom:
      "'Jo' = aikaisemmin kuin luuli (Onko jo myöhä?). Vastakohta 'vielä/ei vielä'. Vrt. 'vasta' = myöhemmin/juuri äsken: 'Tulin vasta nyt.'",
  },
  johdokset: [
    {
      fi: "jopa",
      en: "even (as much as)",
      taso: "B1",
      esim: { fi: "Hän odotti jopa kaksi tuntia.", en: "He waited even two hours." },
    },
    {
      fi: "jo nyt",
      en: "already now",
      taso: "A2",
      esim: { fi: "On jo nyt myöhä.", en: "It's already late now." },
    },
    {
      fi: "jolloin",
      en: "at which point",
      taso: "B2",
      esim: { fi: "Heräsin kuudelta, jolloin oli jo valoisaa.", en: "I woke at six, at which point it was already light." },
    },
  ],
  synonyymit: [
    { fi: "jo nyt", en: "already now" },
    { fi: "ennättää (jo)", en: "already manage to" },
  ],
  esimerkit: {
    A2: { fi: "Olen jo syönyt.", en: "I have already eaten." },
    B1: { fi: "Onko bussi jo mennyt?", en: "Has the bus already gone?" },
    B2: {
      fi: "Kun saavuin asemalle, juna oli jo lähtenyt, joten jäin odottamaan seuraavaa.",
      en: "When I arrived at the station, the train had already left, so I stayed to wait for the next one.",
    },
  },
  updatedAt: "2026-06-05",
};

export default jo;
