import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem kallistu-.
// Present hän kallistuu; imperfect hän kallistui; NUT kallistunut. Intransitive.
const kallistua: Word = {
  fi: "kallistua",
  slug: "kallistua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B1",
  en: "to become more expensive; to tilt, lean",
  selitys:
    "1) Tulla kalliimmaksi: 'ruoka kallistui'. 2) Kallistua eli kallistaa asentoaan. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen. Johdettu sanasta kallis. Vastakohta halventua. Vrt. kallis, kallistaa.",
  kuva: { emoji: "📈", alt: "kallistua – tulla kalliimmaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo kallistu-",
    muodot: [
      { sija: "preesens (se)", muoto: "kallistuu", merkitys: "(it) gets more expensive" },
      { sija: "imperfekti (se)", muoto: "kallistui", merkitys: "(it) got more expensive" },
      { sija: "NUT-partisiippi", muoto: "kallistunut", merkitys: "(has) become more expensive" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Intransitiivinen; hintamerkityksessä useimmiten 3. persoonassa (hinnat kallistuvat). Johdettu sanasta kallis. Vastakohta halventua = to become cheaper. Vrt. kallistaa = to tilt.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / hinta", form: "kallistuu" },
          { label: "ne / hinnat", form: "kallistuvat" },
          { label: "kielto", form: "ei kallistu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / hinta", form: "kallistui" },
          { label: "ne / hinnat", form: "kallistuivat" },
          { label: "kielto", form: "ei kallistunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / hinta", form: "on kallistunut" },
          { label: "ne / hinnat", form: "ovat kallistuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kallis",
      en: "expensive",
      taso: "A2",
      esim: { fi: "Tämä on liian kallis.", en: "This is too expensive." },
    },
    {
      fi: "kallistaa",
      en: "to tilt, tip; to raise the price",
      taso: "B2",
      esim: { fi: "Kallista lasia hieman.", en: "Tilt the glass a little." },
    },
  ],
  synonyymit: [
    { fi: "nousta (hinta)", en: "to rise (price)" },
    { fi: "kohota", en: "to climb, increase" },
  ],
  esimerkit: {
    A2: { fi: "Bensa kallistui taas.", en: "Petrol got more expensive again." },
    B1: { fi: "Asunnot ovat kallistuneet paljon.", en: "Apartments have become much more expensive." },
    B2: {
      fi: "Jos raaka-aineet kallistuvat, myös lopputuotteen hinta nousee.",
      en: "If raw materials get more expensive, the price of the end product rises too.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kallistua;
