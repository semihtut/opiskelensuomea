import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem keho-.
// Genitive kehon, partitive kehoa, illative kehoon, partitive pl kehoja.
const keho: Word = {
  fi: "keho",
  slug: "keho",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "body (human body)",
  selitys:
    "Ihmisen tai eläimen fyysinen kokonaisuus: 'terve keho'. Tyyppi 1, ei astevaihtelua. Vrt. kehollinen (bodily), vartalo (torso/body), ruumis (body, esp. dead).",
  kuva: { emoji: "🧍", alt: "keho – ihmisen fyysinen kokonaisuus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kehon", merkitys: "of the body" },
      { sija: "partitiivi (yks.)", muoto: "kehoa", merkitys: "body (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kehoja", merkitys: "bodies (partitive pl.)" },
    ],
    huom:
      "Neutraali sana ihmisen keholle. Vrt. vartalo = torso / body shape, ruumis = body (usein eloton). 'Mieli ja keho' = mind and body.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "keho" },
          { label: "Partitiivi", form: "kehoa" },
          { label: "Genetiivi", form: "kehon" },
          { label: "Inessiivi", form: "kehossa" },
          { label: "Elatiivi", form: "kehosta" },
          { label: "Illatiivi", form: "kehoon" },
          { label: "Adessiivi", form: "keholla" },
          { label: "Ablatiivi", form: "keholta" },
          { label: "Allatiivi", form: "keholle" },
          { label: "Essiivi", form: "kehona" },
          { label: "Translatiivi", form: "kehoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kehot" },
          { label: "Partitiivi", form: "kehoja" },
          { label: "Genetiivi", form: "kehojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kehollinen",
      en: "bodily, corporeal",
      taso: "B2",
      esim: { fi: "Tanssi on kehollista ilmaisua.", en: "Dance is bodily expression." },
    },
    {
      fi: "kehonkieli",
      en: "body language",
      taso: "B2",
      esim: { fi: "Hänen kehonkielensä paljasti hermostuneisuuden.", en: "His body language revealed nervousness." },
    },
    {
      fi: "kehonosa",
      en: "body part",
      taso: "B1",
      esim: { fi: "Opettelimme kehonosien nimet.", en: "We learned the names of the body parts." },
    },
  ],
  synonyymit: [
    { fi: "vartalo", en: "body, torso" },
    { fi: "ruumis", en: "body (also corpse)" },
  ],
  esimerkit: {
    A2: { fi: "Liikunta on hyväksi keholle.", en: "Exercise is good for the body." },
    B1: { fi: "Keho tarvitsee lepoa ja ravintoa.", en: "The body needs rest and nutrition." },
    B2: {
      fi: "Hyvä uni auttaa kehoa palautumaan rasituksesta.",
      en: "Good sleep helps the body recover from strain.",
    },
  },
  updatedAt: "2026-06-06",
};

export default keho;
