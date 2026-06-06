import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem vaikutukse-.
// Genitive vaikutuksen, partitive vaikutusta, illative vaikutukseen, partitive pl vaikutuksia.
const vaikutus: Word = {
  fi: "vaikutus",
  slug: "vaikutus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "effect, impact, influence",
  selitys:
    "Se, mitä jokin saa aikaan: 'suuri vaikutus'. Tyyppi 39, ei astevaihtelua (s → ks taivutuksessa). Juuri verbistä vaikuttaa. Vrt. seuraus (consequence).",
  kuva: { emoji: "🌊", alt: "vaikutus – se mitä jokin saa aikaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo vaikutukse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vaikutuksen", merkitys: "of the effect" },
      { sija: "partitiivi (yks.)", muoto: "vaikutusta", merkitys: "effect (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vaikutuksia", merkitys: "effects (partitive pl.)" },
    ],
    huom:
      "Loppu -us (verbijohdos) → vartalo -ukse-: vaikutus → vaikutuksen. 'Tehdä vaikutus' = to make an impression. 'Alkoholin vaikutuksen alaisena' = under the influence. Vrt. vaikuttaa = to affect.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vaikutus" },
          { label: "Partitiivi", form: "vaikutusta" },
          { label: "Genetiivi", form: "vaikutuksen" },
          { label: "Inessiivi", form: "vaikutuksessa" },
          { label: "Elatiivi", form: "vaikutuksesta" },
          { label: "Illatiivi", form: "vaikutukseen" },
          { label: "Adessiivi", form: "vaikutuksella" },
          { label: "Ablatiivi", form: "vaikutukselta" },
          { label: "Allatiivi", form: "vaikutukselle" },
          { label: "Essiivi", form: "vaikutuksena" },
          { label: "Translatiivi", form: "vaikutukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vaikutukset" },
          { label: "Partitiivi", form: "vaikutuksia" },
          { label: "Genetiivi", form: "vaikutusten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vaikuttaa",
      en: "to affect, influence; to seem",
      taso: "B1",
      esim: { fi: "Sää vaikuttaa mielialaan.", en: "The weather affects the mood." },
    },
    {
      fi: "sivuvaikutus",
      en: "side effect",
      taso: "B2",
      esim: { fi: "Lääkkeellä on sivuvaikutuksia.", en: "The medicine has side effects." },
    },
    {
      fi: "vaikutusvalta",
      en: "influence, clout",
      taso: "B2",
      esim: { fi: "Hänellä on paljon vaikutusvaltaa.", en: "She has a lot of influence." },
    },
  ],
  synonyymit: [
    { fi: "seuraus", en: "consequence, result" },
    { fi: "teho", en: "effectiveness, potency" },
  ],
  esimerkit: {
    A2: { fi: "Sillä ei ole vaikutusta.", en: "It has no effect." },
    B1: { fi: "Uutisella oli suuri vaikutus.", en: "The news had a big impact." },
    B2: {
      fi: "Päätöksen vaikutukset näkyvät vasta vuosien kuluttua.",
      en: "The effects of the decision will only show after years.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vaikutus;
