import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem osa-.
// Genitive osan, partitive osaa, partitive pl osia.
const osa: Word = {
  fi: "osa",
  slug: "osa",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "part, portion; some",
  selitys:
    "Kokonaisuuden pala tai jokin määrä siitä: 'osa ihmisistä', 'tärkeä osa'. Tyyppi 10/koira, ei astevaihtelua; partitiivin monikko osia. Vrt. osata, osuus, kokonaisuus.",
  kuva: { emoji: "🧩", alt: "osa – kokonaisuuden pala tai määrä siitä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua (vartalo osa-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "osan", merkitys: "of the part" },
      { sija: "partitiivi (yks.)", muoto: "osaa", merkitys: "part (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "osia", merkitys: "parts (partitive pl.)" },
    ],
    huom:
      "Tyyppi 10/koira: ei astevaihtelua. 'Osa ihmisistä' = some of the people (+ elatiivi). 'Suurin osa' = most. 'Suurimmaksi osaksi' = for the most part. Vrt. osuus, kokonaisuus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "osa" },
          { label: "Partitiivi", form: "osaa" },
          { label: "Genetiivi", form: "osan" },
          { label: "Inessiivi", form: "osassa" },
          { label: "Elatiivi", form: "osasta" },
          { label: "Illatiivi", form: "osaan" },
          { label: "Adessiivi", form: "osalla" },
          { label: "Ablatiivi", form: "osalta" },
          { label: "Allatiivi", form: "osalle" },
          { label: "Essiivi", form: "osana" },
          { label: "Translatiivi", form: "osaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "osat" },
          { label: "Partitiivi", form: "osia" },
          { label: "Genetiivi", form: "osien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "osuus",
      en: "share, proportion",
      taso: "B1",
      esim: { fi: "Hänen osuutensa oli puolet.", en: "His share was a half." },
    },
    {
      fi: "osittain",
      en: "partly, partially",
      taso: "B2",
      esim: { fi: "Olen osittain samaa mieltä.", en: "I partly agree." },
    },
  ],
  synonyymit: [
    { fi: "osuus", en: "share" },
  ],
  esimerkit: {
    A2: { fi: "Osa lapsista nukkuu.", en: "Some of the children are sleeping." },
    B1: { fi: "Tämä on tärkeä osa työtä.", en: "This is an important part of the work." },
    B2: {
      fi: "Suurin osa vastaajista kannatti muutosta.",
      en: "The majority of respondents supported the change.",
    },
  },
  updatedAt: "2026-06-07",
};

export default osa;
