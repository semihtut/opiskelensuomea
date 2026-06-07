import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem saastu-.
// Present se saastuu; imperfect se saastui; NUT saastunut. Intransitive.
const saastua: Word = {
  fi: "saastua",
  slug: "saastua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to become polluted, get contaminated",
  selitys:
    "Tulla likaiseksi tai myrkyttyä haitallisista aineista: 'vesi saastui'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen (transit. saastuttaa). Johdettu sanasta saaste. Vrt. saaste, saastuttaa.",
  kuva: { emoji: "☣️", alt: "saastua – tulla likaiseksi haitallisista aineista" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo saastu-",
    muodot: [
      { sija: "preesens (se)", muoto: "saastuu", merkitys: "(it) becomes polluted" },
      { sija: "imperfekti (se)", muoto: "saastui", merkitys: "(it) became polluted" },
      { sija: "NUT-partisiippi", muoto: "saastunut", merkitys: "(has) become polluted" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Intransitiivinen; transitiivinen pari saastuttaa. Useimmiten 3. persoonassa (vesi/ilma saastuu). Johdettu sanasta saaste. Vrt. saaste = pollution.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "saastuu" },
          { label: "ne / asiat", form: "saastuvat" },
          { label: "kielto", form: "ei saastu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "saastui" },
          { label: "ne / asiat", form: "saastuivat" },
          { label: "kielto", form: "ei saastunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on saastunut" },
          { label: "ne / asiat", form: "ovat saastuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "saaste",
      en: "pollution, pollutant",
      taso: "B1",
      esim: { fi: "Ilmassa on saasteita.", en: "There are pollutants in the air." },
    },
    {
      fi: "saastuttaa",
      en: "to pollute, contaminate",
      taso: "B2",
      esim: { fi: "Tehdas saastutti joen.", en: "The factory polluted the river." },
    },
    {
      fi: "saastunut",
      en: "polluted, contaminated",
      taso: "B2",
      esim: { fi: "Vesi oli saastunutta.", en: "The water was contaminated." },
    },
  ],
  synonyymit: [
    { fi: "liata", en: "to get dirty" },
    { fi: "pilaantua", en: "to spoil, deteriorate" },
  ],
  esimerkit: {
    A2: { fi: "Järvi saastui.", en: "The lake became polluted." },
    B1: { fi: "Maaperä saastui kemikaaleista.", en: "The soil got contaminated by chemicals." },
    B2: {
      fi: "Jos pohjavesi saastuu, sen puhdistaminen voi kestää vuosikymmeniä.",
      en: "If the groundwater gets contaminated, cleaning it can take decades.",
    },
  },
  updatedAt: "2026-06-07",
};

export default saastua;
