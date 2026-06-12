import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem nais-.
// Partitive sg naista, partitive pl naisia, genitive pl naisten (also naisien).
const nainen: Word = {
  fi: "nainen",
  slug: "nainen",
  pos: "substantiivi (tyyppi: nainen)",
  posClass: "substantiivi",
  level: "A1",
  en: "woman",
  selitys:
    "Aikuinen naispuolinen ihminen. -nen-loppuiset sanat taipuvat vartalolla nais- (partitiivi naista).",
  kuva: { alt: "nainen – aikuinen naispuolinen ihminen" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo nais-)",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "naista", merkitys: "woman (partitive)" },
      { sija: "genetiivi (yks.)", muoto: "naisen", merkitys: "of the woman" },
      { sija: "partitiivi (mon.)", muoto: "naisia", merkitys: "women (partitive pl.)" },
    ],
    huom:
      "-nen → vartalo nais-: naisen, naista, naisia. Monikon genetiivi naisten (myös naisien).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "nainen" },
          { label: "Partitiivi", form: "naista" },
          { label: "Genetiivi", form: "naisen" },
          { label: "Inessiivi", form: "naisessa" },
          { label: "Elatiivi", form: "naisesta" },
          { label: "Illatiivi", form: "naiseen" },
          { label: "Adessiivi", form: "naisella" },
          { label: "Ablatiivi", form: "naiselta" },
          { label: "Allatiivi", form: "naiselle" },
          { label: "Essiivi", form: "naisena" },
          { label: "Translatiivi", form: "naiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "naiset" },
          { label: "Partitiivi", form: "naisia" },
          { label: "Genetiivi", form: "naisten" },
          { label: "Inessiivi", form: "naisissa" },
          { label: "Illatiivi", form: "naisiin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "naisellinen",
      en: "feminine, womanly",
      taso: "B1",
      esim: { fi: "Hänellä on naisellinen tyyli.", en: "She has a feminine style." },
    },
    {
      fi: "naisystävä",
      en: "girlfriend; female friend",
      taso: "B1",
      esim: { fi: "Hän esitteli naisystävänsä.", en: "He introduced his girlfriend." },
    },
    {
      fi: "naispuolinen",
      en: "female (adjective)",
      taso: "B2",
      esim: { fi: "Hakijoista puolet oli naispuolisia.", en: "Half of the applicants were female." },
    },
  ],
  synonyymit: [
    { fi: "rouva", en: "lady, Mrs (polite)" },
    { fi: "naishenkilö", en: "female person (formal)" },
  ],
  esimerkit: {
    A2: { fi: "Tuo nainen on lääkäri.", en: "That woman is a doctor." },
    B1: { fi: "Monet naiset käyvät töissä.", en: "Many women work." },
    B2: {
      fi: "Nainen johti yritystä menestyksekkäästi.",
      en: "The woman led the company successfully.",
    },
  },
  updatedAt: "2026-06-04",
};

export default nainen;
