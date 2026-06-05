import type { Word } from "@/lib/content-types";

// Subordinating conjunction "että" (that). Invariant. Introduces a content clause:
// "Tiedän, että olet oikeassa."
const etta: Word = {
  fi: "että",
  slug: "että",
  pos: "konjunktio (alistuskonjunktio)",
  posClass: "konjunktio",
  level: "A1",
  en: "that (conjunction)",
  selitys:
    "Alistuskonjunktio, joka aloittaa sivulauseen verbien sanoa, ajatella, tietää jne. jälkeen. Ei taivuteta. Edellä tulee pilkku: 'Luulen, että sataa.'",
  kuva: { emoji: "💬", alt: "että – että-lause" },

  kielioppi: {
    tyyppi: "alistuskonjunktio; taipumaton; aloittaa objekti- tai seurauslauseen",
    muodot: [
      { sija: "perusmuoto", muoto: "että", merkitys: "that" },
      { sija: "yhdistelmä", muoto: "niin että", merkitys: "so that (result)" },
      { sija: "yhdistelmä", muoto: "jotta", merkitys: "in order that (purpose)" },
    ],
    huom:
      "Edellä pilkku: 'Sanoin, että tulen.' Käytetään ajattelu- ja puheverbien kanssa. 'Niin… että' ilmaisee seurausta; 'jotta' tarkoitusta.",
  },
  johdokset: [
    {
      fi: "jotta",
      en: "in order that, so that (purpose)",
      taso: "B1",
      esim: { fi: "Opiskelen, jotta saan työn.", en: "I study so that I get a job." },
    },
    {
      fi: "niin että",
      en: "so that (result)",
      taso: "B1",
      esim: { fi: "Puhuin kovaa, niin että kaikki kuulivat.", en: "I spoke loudly, so that everyone heard." },
    },
    {
      fi: "siksi että",
      en: "because (lit. for that, that)",
      taso: "B2",
      esim: { fi: "Tulin siksi, että halusin nähdä sinut.", en: "I came because I wanted to see you." },
    },
  ],
  synonyymit: [
    { fi: "jotta", en: "in order that" },
    { fi: "kuinka / miten", en: "how (in some clauses)" },
  ],
  esimerkit: {
    A2: { fi: "Tiedän, että olet kotona.", en: "I know that you are home." },
    B1: { fi: "Toivon, että sää paranee huomenna.", en: "I hope that the weather improves tomorrow." },
    B2: {
      fi: "Olin niin väsynyt, että nukahdin heti, kun pääni osui tyynyyn.",
      en: "I was so tired that I fell asleep the moment my head hit the pillow.",
    },
  },
  updatedAt: "2026-06-05",
};

export default etta;
