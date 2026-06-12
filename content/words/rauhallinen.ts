import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem rauhallise-.
// Genitive rauhallisen, partitive rauhallista, partitive pl rauhallisia. Comparative rauhallisempi.
const rauhallinen: Word = {
  fi: "rauhallinen",
  slug: "rauhallinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "calm, peaceful, quiet",
  selitys:
    "Levollinen, kiireetön ja seesteinen: 'rauhallinen ilta'. Tyyppi 38, ei astevaihtelua; vartalo rauhallise-. Partitiivin monikko rauhallisia. Johdettu sanasta rauha. Vastakohta levoton / hermostunut.",
  kuva: { alt: "rauhallinen – levollinen ja kiireetön" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo rauhallise-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rauhallisen", merkitys: "of the calm (one)" },
      { sija: "partitiivi (yks.)", muoto: "rauhallista", merkitys: "calm (partitive)" },
      { sija: "komparatiivi", muoto: "rauhallisempi", merkitys: "calmer" },
    ],
    huom:
      "Vartalo rauhallise- (genetiivi rauhallisen, partitiivi rauhallista). Vertailu rauhallisempi – rauhallisin. Johdettu sanasta rauha (peace). Vastakohta levoton.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "rauhallinen" },
          { label: "Partitiivi", form: "rauhallista" },
          { label: "Genetiivi", form: "rauhallisen" },
          { label: "Inessiivi", form: "rauhallisessa" },
          { label: "Elatiivi", form: "rauhallisesta" },
          { label: "Illatiivi", form: "rauhalliseen" },
          { label: "Adessiivi", form: "rauhallisella" },
          { label: "Ablatiivi", form: "rauhalliselta" },
          { label: "Allatiivi", form: "rauhalliselle" },
          { label: "Essiivi", form: "rauhallisena" },
          { label: "Translatiivi", form: "rauhalliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rauhalliset" },
          { label: "Partitiivi", form: "rauhallisia" },
          { label: "Genetiivi", form: "rauhallisten / rauhallisien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "rauhallinen" },
          { label: "Komparatiivi", form: "rauhallisempi" },
          { label: "Superlatiivi", form: "rauhallisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rauha",
      en: "peace",
      taso: "A2",
      esim: { fi: "Haluan vain rauhaa.", en: "I just want peace." },
    },
    {
      fi: "rauhoittua",
      en: "to calm down",
      taso: "B2",
      esim: { fi: "Rauhoitu, kaikki on hyvin.", en: "Calm down, everything is fine." },
    },
    {
      fi: "rauhallisesti",
      en: "calmly",
      taso: "B1",
      esim: { fi: "Hän puhui rauhallisesti.", en: "He spoke calmly." },
    },
  ],
  synonyymit: [
    { fi: "tyyni", en: "serene, still" },
    { fi: "levollinen", en: "tranquil, at ease" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on rauhallinen paikka.", en: "This is a peaceful place." },
    B1: { fi: "Hän pysyi rauhallisena vaikeassa tilanteessa.", en: "He stayed calm in a difficult situation." },
    B2: {
      fi: "Maaseudun rauhallinen ympäristö auttoi häntä rentoutumaan.",
      en: "The peaceful countryside environment helped him relax.",
    },
  },
  updatedAt: "2026-06-06",
};

export default rauhallinen;
