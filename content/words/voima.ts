import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem voima-.
// Genitive voiman, partitive voimaa, illative voimaan, partitive pl voimia.
const voima: Word = {
  fi: "voima",
  slug: "voima",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "strength, force, power",
  selitys:
    "Fyysinen tai henkinen kyky vaikuttaa: 'käyttää voimaa'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko voimia (a katoaa). Vrt. voimakas (strong), voimistua (to grow stronger), voida (to be able).",
  kuva: { alt: "voima – kyky vaikuttaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "voiman", merkitys: "of strength" },
      { sija: "partitiivi (yks.)", muoto: "voimaa", merkitys: "strength (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "voimia", merkitys: "forces (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikko voimia (i-vartalo). 'Astua voimaan' = to take effect (laki). 'Kerätä voimia' = to gather strength. Vrt. voimakas = powerful, voimala = power plant.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "voima" },
          { label: "Partitiivi", form: "voimaa" },
          { label: "Genetiivi", form: "voiman" },
          { label: "Inessiivi", form: "voimassa" },
          { label: "Elatiivi", form: "voimasta" },
          { label: "Illatiivi", form: "voimaan" },
          { label: "Adessiivi", form: "voimalla" },
          { label: "Ablatiivi", form: "voimalta" },
          { label: "Allatiivi", form: "voimalle" },
          { label: "Essiivi", form: "voimana" },
          { label: "Translatiivi", form: "voimaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "voimat" },
          { label: "Partitiivi", form: "voimia" },
          { label: "Genetiivi", form: "voimien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "voimakas",
      en: "strong, powerful, intense",
      taso: "B1",
      esim: { fi: "Tuuli oli voimakas.", en: "The wind was strong." },
    },
    {
      fi: "voimistua",
      en: "to grow stronger, intensify",
      taso: "B2",
      esim: { fi: "Myrsky voimistui illalla.", en: "The storm intensified in the evening." },
    },
    {
      fi: "tahdonvoima",
      en: "willpower",
      taso: "B2",
      esim: { fi: "Se vaatii tahdonvoimaa.", en: "It takes willpower." },
    },
  ],
  synonyymit: [
    { fi: "vahvuus", en: "strength" },
    { fi: "teho", en: "power, effectiveness" },
  ],
  esimerkit: {
    A2: { fi: "Minulla ei ole voimia.", en: "I have no strength." },
    B1: { fi: "Hän työnsi ovea kaikin voimin.", en: "He pushed the door with all his strength." },
    B2: {
      fi: "Uusi laki astuu voimaan ensi kuussa.",
      en: "The new law takes effect next month.",
    },
  },
  updatedAt: "2026-06-06",
};

export default voima;
