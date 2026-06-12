import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem yleisty-.
// Present hän yleistyy; imperfect hän yleistyi; NUT yleistynyt. Intransitive.
const yleistya: Word = {
  fi: "yleistyä",
  slug: "yleistyä",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to become common, become widespread",
  selitys:
    "Tulla yleiseksi tai yleisemmäksi: 'etätyö on yleistynyt'. Tyyppi 1 (-yä), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen. Johdettu sanasta yleinen. Useimmiten 3. persoonassa. Vrt. yleinen, yleensä, harvinaistua.",
  kuva: { alt: "yleistyä – tulla yleiseksi tai yleisemmäksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-yä), Kotus 52/sanoa; ei astevaihtelua; vartalo yleisty-",
    muodot: [
      { sija: "preesens (se)", muoto: "yleistyy", merkitys: "(it) becomes common" },
      { sija: "imperfekti (se)", muoto: "yleistyi", merkitys: "(it) became common" },
      { sija: "NUT-partisiippi", muoto: "yleistynyt", merkitys: "(has) become common" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Intransitiivinen, useimmiten 3. persoonassa (asia yleistyy). Johdettu sanasta yleinen. Vastakohta harvinaistua = to become rare. Vrt. yleinen = common, general.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "yleistyy" },
          { label: "ne / asiat", form: "yleistyvät" },
          { label: "kielto", form: "ei yleisty" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "yleistyi" },
          { label: "ne / asiat", form: "yleistyivät" },
          { label: "kielto", form: "ei yleistynyt" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on yleistynyt" },
          { label: "ne / asiat", form: "ovat yleistyneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "yleinen",
      en: "common, general, public",
      taso: "B1",
      esim: { fi: "Se on yleinen väärinkäsitys.", en: "It's a common misconception." },
    },
    {
      fi: "yleistys",
      en: "generalization",
      taso: "B2",
      esim: { fi: "Vältä liiallisia yleistyksiä.", en: "Avoid excessive generalizations." },
    },
  ],
  synonyymit: [
    { fi: "lisääntyä", en: "to increase" },
    { fi: "levitä", en: "to spread" },
  ],
  esimerkit: {
    A2: { fi: "Sähköautot yleistyvät.", en: "Electric cars are becoming common." },
    B1: { fi: "Etätyö yleistyi nopeasti.", en: "Remote work became common quickly." },
    B2: {
      fi: "Kun tekniikka halpeni, se yleistyi pian myös tavallisissa kodeissa.",
      en: "When the technology got cheaper, it soon became common in ordinary homes too.",
    },
  },
  updatedAt: "2026-06-07",
};

export default yleistya;
