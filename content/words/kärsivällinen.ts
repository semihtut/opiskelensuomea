import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem kärsivällise-.
// Genitive kärsivällisen, partitive kärsivällistä, partitive pl kärsivällisiä.
const kärsivällinen: Word = {
  fi: "kärsivällinen",
  slug: "kärsivällinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "patient",
  selitys:
    "Sellainen, joka jaksaa odottaa rauhallisesti ilman ärtymystä: 'kärsivällinen opettaja'. Tyyppi 38, ei astevaihtelua; vartalo kärsivällise-. Johdettu verbistä kärsiä. Vastakohta kärsimätön.",
  kuva: { alt: "kärsivällinen – jaksaa odottaa rauhallisesti" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua; vartalo kärsivällise-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kärsivällisen", merkitys: "of the patient (one)" },
      { sija: "partitiivi (yks.)", muoto: "kärsivällistä", merkitys: "patient (partitive)" },
      { sija: "komparatiivi", muoto: "kärsivällisempi", merkitys: "more patient" },
    ],
    huom:
      "Vartalo kärsivällise- (genetiivi kärsivällisen, partitiivi kärsivällistä). Vertailu kärsivällisempi – kärsivällisin. Johdettu verbistä kärsiä. Vastakohta kärsimätön = impatient.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kärsivällinen" },
          { label: "Partitiivi", form: "kärsivällistä" },
          { label: "Genetiivi", form: "kärsivällisen" },
          { label: "Inessiivi", form: "kärsivällisessä" },
          { label: "Elatiivi", form: "kärsivällisestä" },
          { label: "Illatiivi", form: "kärsivälliseen" },
          { label: "Adessiivi", form: "kärsivällisellä" },
          { label: "Ablatiivi", form: "kärsivälliseltä" },
          { label: "Allatiivi", form: "kärsivälliselle" },
          { label: "Essiivi", form: "kärsivällisenä" },
          { label: "Translatiivi", form: "kärsivälliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kärsivälliset" },
          { label: "Partitiivi", form: "kärsivällisiä" },
          { label: "Genetiivi", form: "kärsivällisten / kärsivällisien" },
        ],
      },
      {
        title: "Vertailu",
        rows: [
          { label: "Perusaste", form: "kärsivällinen" },
          { label: "Komparatiivi", form: "kärsivällisempi" },
          { label: "Superlatiivi", form: "kärsivällisin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kärsivällisyys",
      en: "patience",
      taso: "B2",
      esim: { fi: "Kärsivällisyys on hyve.", en: "Patience is a virtue." },
    },
    {
      fi: "kärsivällisesti",
      en: "patiently",
      taso: "B1",
      esim: { fi: "Hän odotti kärsivällisesti vuoroaan.", en: "She waited patiently for her turn." },
    },
    {
      fi: "kärsimätön",
      en: "impatient",
      taso: "B2",
      esim: { fi: "Lapsi oli kärsimätön jonossa.", en: "The child was impatient in the queue." },
    },
  ],
  synonyymit: [
    { fi: "pitkämielinen", en: "long-suffering, forbearing" },
    { fi: "maltillinen", en: "moderate, level-headed" },
  ],
  esimerkit: {
    A2: { fi: "Ole kärsivällinen!", en: "Be patient!" },
    B1: { fi: "Hyvä opettaja on kärsivällinen.", en: "A good teacher is patient." },
    B2: {
      fi: "Kielten oppiminen vaatii kärsivällistä ja säännöllistä harjoittelua.",
      en: "Learning languages requires patient and regular practice.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kärsivällinen;
