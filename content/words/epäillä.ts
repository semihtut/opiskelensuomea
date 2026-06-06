import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 67/tulla, no gradation, stem epäile- ~ epäil-.
// Present minä epäilen, hän epäilee; imperfect minä epäilin; NUT participle epäillyt.
const epäillä: Word = {
  fi: "epäillä",
  slug: "epäillä",
  pos: "verbi (tyyppi 3)",
  posClass: "verbi",
  level: "B1",
  en: "to doubt; to suspect",
  selitys:
    "Olla epävarma jostakin tai pitää jotakin mahdollisena (usein kielteistä): 'epäillä totuutta'. Tyyppi 3 (-llä), ei astevaihtelua; vartalo epäile-. Johdettu sanasta epä-. Vrt. epäilys (doubt), epäilyttää.",
  kuva: { emoji: "🤨", alt: "epäillä – olla epävarma tai pitää jotakin mahdollisena" },

  kielioppi: {
    tyyppi: "tyyppi 3 (-llä); ei astevaihtelua; vartalo epäile- ~ epäil-",
    muodot: [
      { sija: "preesens (minä)", muoto: "epäilen", merkitys: "I doubt / suspect" },
      { sija: "imperfekti (minä)", muoto: "epäilin", merkitys: "I doubted / suspected" },
      { sija: "NUT-partisiippi", muoto: "epäillyt", merkitys: "(have) doubted" },
    ],
    huom:
      "Voi tarkoittaa sekä 'to suspect' (pitää todennäköisenä) että 'to doubt' (pitää epätodennäköisenä); konteksti ratkaisee. NUT-partisiipissa kahdennettu l (epäillyt). Kohde partitiivissa: 'epäillä jotakuta'.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "minä", form: "epäilen" },
          { label: "sinä", form: "epäilet" },
          { label: "hän", form: "epäilee" },
          { label: "me", form: "epäilemme" },
          { label: "te", form: "epäilette" },
          { label: "he", form: "epäilevät" },
        ],
      },
      {
        title: "Preesens · kielto",
        rows: [
          { label: "minä", form: "en epäile" },
          { label: "hän", form: "ei epäile" },
          { label: "he", form: "eivät epäile" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "minä", form: "epäilin" },
          { label: "sinä", form: "epäilit" },
          { label: "hän", form: "epäili" },
          { label: "me", form: "epäilimme" },
          { label: "te", form: "epäilitte" },
          { label: "he", form: "epäilivät" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "minä", form: "olen epäillyt" },
          { label: "hän", form: "on epäillyt" },
          { label: "he", form: "ovat epäilleet" },
        ],
      },
      {
        title: "Imperatiivi",
        rows: [
          { label: "sinä", form: "epäile!" },
          { label: "te", form: "epäilkää!" },
          { label: "kielto (sinä)", form: "älä epäile" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "epäilys",
      en: "doubt, suspicion",
      taso: "B2",
      esim: { fi: "Minulla heräsi epäilys.", en: "A suspicion arose in me." },
    },
    {
      fi: "epäilyttää",
      en: "to seem suspicious, give doubts",
      taso: "B2",
      esim: { fi: "Tarjous epäilyttää minua.", en: "The offer makes me suspicious." },
    },
    {
      fi: "epäilemättä",
      en: "undoubtedly",
      taso: "B2",
      esim: { fi: "Hän on epäilemättä paras.", en: "He is undoubtedly the best." },
    },
  ],
  synonyymit: [
    { fi: "epäröidä", en: "to hesitate" },
    { fi: "kyseenalaistaa", en: "to question" },
  ],
  esimerkit: {
    A2: { fi: "Epäilen, että hän myöhästyy.", en: "I suspect he'll be late." },
    B1: { fi: "En epäile sinua lainkaan.", en: "I don't doubt you at all." },
    B2: {
      fi: "Poliisi epäili miestä varkaudesta, mutta todisteita ei ollut.",
      en: "The police suspected the man of theft, but there was no evidence.",
    },
  },
  updatedAt: "2026-06-06",
};

export default epäillä;
