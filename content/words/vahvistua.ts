import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus verb type 52/sanoa, no gradation, stem vahvistu-.
// Present hän vahvistuu; imperfect hän vahvistui; NUT vahvistunut. Intransitive.
const vahvistua: Word = {
  fi: "vahvistua",
  slug: "vahvistua",
  pos: "verbi (tyyppi 1)",
  posClass: "verbi",
  level: "B2",
  en: "to strengthen, grow stronger",
  selitys:
    "Tulla vahvemmaksi tai voimakkaammaksi: 'tuuli vahvistui illalla'. Tyyppi 1 (-ua), Kotus 52/sanoa, ei astevaihtelua. Intransitiivinen (transit. vahvistaa). Johdettu sanasta vahva. Vastakohta heikentyä. Vrt. vahva, vahvistaa, voima.",
  kuva: { alt: "vahvistua – tulla vahvemmaksi tai voimakkaammaksi" },

  kielioppi: {
    tyyppi: "tyyppi 1 (-ua), Kotus 52/sanoa; ei astevaihtelua; vartalo vahvistu-",
    muodot: [
      { sija: "preesens (se)", muoto: "vahvistuu", merkitys: "(it) strengthens" },
      { sija: "imperfekti (se)", muoto: "vahvistui", merkitys: "(it) strengthened" },
      { sija: "NUT-partisiippi", muoto: "vahvistunut", merkitys: "(has) strengthened" },
    ],
    huom:
      "Ei astevaihtelua (st säilyy). Intransitiivinen; transitiivinen pari on vahvistaa (= to strengthen; to confirm). Johdettu sanasta vahva. Vastakohta heikentyä. Useimmiten 3. persoonassa.",
  },
  taivutus: {
    sections: [
      {
        title: "Preesens",
        rows: [
          { label: "se / asia", form: "vahvistuu" },
          { label: "ne / asiat", form: "vahvistuvat" },
          { label: "kielto", form: "ei vahvistu" },
        ],
      },
      {
        title: "Imperfekti",
        rows: [
          { label: "se / asia", form: "vahvistui" },
          { label: "ne / asiat", form: "vahvistuivat" },
          { label: "kielto", form: "ei vahvistunut" },
        ],
      },
      {
        title: "Perfekti",
        rows: [
          { label: "se / asia", form: "on vahvistunut" },
          { label: "ne / asiat", form: "ovat vahvistuneet" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vahvistaa",
      en: "to strengthen; to confirm",
      taso: "B2",
      esim: { fi: "Voitko vahvistaa varauksen?", en: "Can you confirm the booking?" },
    },
    {
      fi: "vahva",
      en: "strong",
      taso: "A2",
      esim: { fi: "Hänellä on vahva tahto.", en: "She has a strong will." },
    },
  ],
  synonyymit: [
    { fi: "voimistua", en: "to intensify" },
    { fi: "lisääntyä", en: "to increase" },
  ],
  esimerkit: {
    A2: { fi: "Tuuli vahvistui illalla.", en: "The wind strengthened in the evening." },
    B1: { fi: "Hänen asemansa vahvistui huomattavasti.", en: "His position strengthened considerably." },
    B2: {
      fi: "Käsitys siitä, että muutos oli oikea, vahvistui ajan myötä.",
      en: "The conviction that the change was right grew stronger over time.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vahvistua;
