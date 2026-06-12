import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. Genitive matalan,
// partitive matalaa, partitive pl matalia. Comp matalampi, superl matalin.
const matala: Word = {
  fi: "matala",
  slug: "matala",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A1",
  en: "low; shallow",
  selitys:
    "Pystysuunnassa pieni; myös matala vesi (shallow). Tyyppi 10, ei astevaihtelua. Vastakohta korkea (ja syvä).",
  kuva: { alt: "matala – matala taso" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "matalan", merkitys: "of the low" },
      { sija: "partitiivi (yks.)", muoto: "matalaa", merkitys: "low (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "matalia", merkitys: "low (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Vertailu matalampi/matalin. Vastakohta korkea; vedestä vastakohta syvä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "matala" },
          { label: "Partitiivi", form: "matalaa" },
          { label: "Genetiivi", form: "matalan" },
          { label: "Inessiivi", form: "matalassa" },
          { label: "Illatiivi", form: "matalaan" },
          { label: "Adessiivi", form: "matalalla" },
          { label: "Essiivi", form: "matalana" },
          { label: "Translatiivi", form: "matalaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "matalat" },
          { label: "Partitiivi", form: "matalia" },
          { label: "Genetiivi", form: "matalien" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "matalampi" },
          { label: "Komparatiivi (gen.)", form: "matalamman" },
          { label: "Superlatiivi (nom.)", form: "matalin" },
          { label: "Superlatiivi (gen.)", form: "matalimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "madaltaa",
      en: "to lower, make lower",
      taso: "B2",
      esim: { fi: "Aitaa madallettiin.", en: "The fence was lowered." },
    },
    {
      fi: "matalapaine",
      en: "low pressure (weather)",
      taso: "B2",
      esim: { fi: "Matalapaine tuo sadetta.", en: "Low pressure brings rain." },
    },
    {
      fi: "alava",
      en: "low-lying",
      taso: "B2",
      esim: { fi: "Alava maa tulvii keväällä.", en: "The low-lying land floods in spring." },
    },
  ],
  synonyymit: [
    { fi: "matalahko", en: "fairly low" },
    { fi: "loiva", en: "gentle, shallow (slope)" },
  ],
  esimerkit: {
    A2: { fi: "Pöytä on liian matala.", en: "The table is too low." },
    B1: { fi: "Vesi on tässä matalaa.", en: "The water is shallow here." },
    B2: {
      fi: "Hän puhui matalalla äänellä, jotta muut eivät kuulisi.",
      en: "He spoke in a low voice so that others wouldn't hear.",
    },
  },
  updatedAt: "2026-06-05",
};

export default matala;
