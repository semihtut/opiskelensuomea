import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: plurale tantum, no singular. Genitive hautajaisten, partitive hautajaisia,
// illative hautajaisiin. Internal locative cases used (olin hautajaisissa).
const hautajaiset: Word = {
  fi: "hautajaiset",
  slug: "hautajaiset",
  pos: "substantiivi (monikkosana)",
  posClass: "substantiivi",
  level: "B1",
  en: "funeral",
  selitys:
    "Vainajan muistamiseen ja hautaamiseen liittyvä tilaisuus. Monikkosana (plurale tantum): aina monikossa, 'mennä hautajaisiin', 'olla hautajaisissa'. Sanasta hauta. Vrt. hauta, kuolema, muistotilaisuus.",
  kuva: { alt: "hautajaiset – vainajan hautaamiseen liittyvä tilaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, monikkosana (plurale tantum); ei yksikkömuotoa",
    muodot: [
      { sija: "nominatiivi (mon.)", muoto: "hautajaiset", merkitys: "funeral" },
      { sija: "genetiivi (mon.)", muoto: "hautajaisten", merkitys: "of the funeral" },
      { sija: "partitiivi (mon.)", muoto: "hautajaisia", merkitys: "funeral (partitive)" },
    ],
    huom:
      "Monikkosana: ei yksikkömuotoa (kuten häät, kasvot). Käytetään sisäpaikallissijoja: 'olin hautajaisissa' (iness.), 'menen hautajaisiin' (illat.). Sanasta hauta = grave. Vrt. kuolema, hauta.",
  },
  taivutus: {
    sections: [
      {
        title: "Monikko (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hautajaiset" },
          { label: "Partitiivi", form: "hautajaisia" },
          { label: "Genetiivi", form: "hautajaisten" },
          { label: "Inessiivi", form: "hautajaisissa" },
          { label: "Elatiivi", form: "hautajaisista" },
          { label: "Illatiivi", form: "hautajaisiin" },
          { label: "Adessiivi", form: "hautajaisilla" },
          { label: "Ablatiivi", form: "hautajaisilta" },
          { label: "Allatiivi", form: "hautajaisille" },
          { label: "Essiivi", form: "hautajaisina" },
          { label: "Translatiivi", form: "hautajaisiksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hauta",
      en: "grave",
      taso: "B1",
      esim: { fi: "Kävimme haudalla.", en: "We visited the grave." },
    },
    {
      fi: "haudata",
      en: "to bury",
      taso: "B2",
      esim: { fi: "Vainaja haudattiin kotikaupunkiin.", en: "The deceased was buried in their home town." },
    },
  ],
  synonyymit: [
    { fi: "muistotilaisuus", en: "memorial service" },
  ],
  esimerkit: {
    A2: { fi: "Menen huomenna hautajaisiin.", en: "I'm going to a funeral tomorrow." },
    B1: { fi: "Hautajaisissa oli paljon väkeä.", en: "There were many people at the funeral." },
    B2: {
      fi: "Hautajaiset järjestettiin vainajan toiveiden mukaisesti.",
      en: "The funeral was arranged according to the deceased's wishes.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hautajaiset;
