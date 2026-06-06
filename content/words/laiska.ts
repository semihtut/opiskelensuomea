import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation (sk stays), stem laiska-.
// Genitive laiskan, partitive laiskaa, illative laiskaan, partitive pl laiskoja.
const laiska: Word = {
  fi: "laiska",
  slug: "laiska",
  pos: "adjektiivi (tyyppi 9/kala)",
  posClass: "adjektiivi",
  level: "B1",
  en: "lazy, idle",
  selitys:
    "Sellainen, joka ei halua tehdä työtä: 'laiska kissa'. Tyyppi 9, ei astevaihtelua (sk säilyy). Vrt. laiskuus (laziness). Vastakohta ahkera.",
  kuva: { emoji: "🦥", alt: "laiska – ei halua tehdä työtä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 9/kala; ei astevaihtelua (sk säilyy)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laiskan", merkitys: "of the lazy" },
      { sija: "partitiivi (yks.)", muoto: "laiskaa", merkitys: "lazy (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "laiskoja", merkitys: "lazy (partitive pl.)" },
    ],
    huom:
      "Monikon partitiivi laiskoja (a → o). Klusteri sk ei vaihtele. Vastakohta ahkera. Vrt. laiskuus = laziness, laiskotella = to laze around.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "laiska" },
          { label: "Partitiivi", form: "laiskaa" },
          { label: "Genetiivi", form: "laiskan" },
          { label: "Inessiivi", form: "laiskassa" },
          { label: "Illatiivi", form: "laiskaan" },
          { label: "Adessiivi", form: "laiskalla" },
          { label: "Essiivi", form: "laiskana" },
          { label: "Translatiivi", form: "laiskaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "laiskat" },
          { label: "Partitiivi", form: "laiskoja" },
          { label: "Genetiivi", form: "laiskojen" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "laiskempi" },
          { label: "Komparatiivi (gen.)", form: "laiskemman" },
          { label: "Superlatiivi (nom.)", form: "laiskin" },
          { label: "Superlatiivi (gen.)", form: "laiskimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laiskuus",
      en: "laziness",
      taso: "B2",
      esim: { fi: "Laiskuus ei johda mihinkään.", en: "Laziness leads nowhere." },
    },
    {
      fi: "laiskotella",
      en: "to laze around, idle",
      taso: "B2",
      esim: { fi: "Vietin sunnuntain laiskotellen.", en: "I spent Sunday lazing around." },
    },
    {
      fi: "laiskanpulskea",
      en: "lazy and content (idiom)",
      taso: "B2",
      esim: { fi: "Kissa makasi laiskanpulskeana.", en: "The cat lay lazy and content." },
    },
  ],
  synonyymit: [
    { fi: "saamaton", en: "ineffectual, unproductive" },
    { fi: "vetelä", en: "sluggish, limp" },
  ],
  esimerkit: {
    A2: { fi: "Älä ole niin laiska!", en: "Don't be so lazy!" },
    B1: { fi: "Laiska aamu sohvalla tuntui hyvältä.", en: "A lazy morning on the sofa felt good." },
    B2: {
      fi: "Häntä pidettiin laiskana, vaikka hän vain teki työt tehokkaasti.",
      en: "He was considered lazy, even though he just did the work efficiently.",
    },
  },
  updatedAt: "2026-06-06",
};

export default laiska;
