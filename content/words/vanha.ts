import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation. Comparison is
// regular: vanha → vanhempi → vanhin. Partitive pl vanhoja, genitive pl vanhojen.
// NOTE: "vanhempi" also means "parent" as a noun.
const vanha: Word = {
  fi: "vanha",
  slug: "vanha",
  pos: "adjektiivi (tyyppi: kala)",
  posClass: "adjektiivi",
  level: "A1",
  en: "old",
  selitys:
    "Pitkään elänyt tai kauan olemassa ollut; uuden vastakohta. Vertailu säännöllinen: vanha – vanhempi – vanhin.",
  kuva: { emoji: "🧓", alt: "vanha – iäkäs henkilö" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 9/kala; ei astevaihtelua; vertailu vanha – vanhempi – vanhin",
    muodot: [
      { sija: "partitiivi (yks.)", muoto: "vanhaa", merkitys: "old (partitive)" },
      { sija: "komparatiivi", muoto: "vanhempi", merkitys: "older" },
      { sija: "superlatiivi", muoto: "vanhin", merkitys: "oldest" },
    ],
    huom:
      "Monikon partitiivi vanhoja, genetiivi vanhojen. HUOM: vanhempi tarkoittaa myös 'parent' (mon. vanhemmat = parents).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "vanha" },
          { label: "Partitiivi", form: "vanhaa" },
          { label: "Genetiivi", form: "vanhan" },
          { label: "Inessiivi", form: "vanhassa" },
          { label: "Illatiivi", form: "vanhaan" },
          { label: "Adessiivi", form: "vanhalla" },
          { label: "Essiivi", form: "vanhana" },
          { label: "Translatiivi", form: "vanhaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vanhat" },
          { label: "Partitiivi", form: "vanhoja" },
          { label: "Genetiivi", form: "vanhojen" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "vanhempi" },
          { label: "Komparatiivi (gen.)", form: "vanhemman" },
          { label: "Komparatiivi (part.)", form: "vanhempaa" },
          { label: "Superlatiivi (nom.)", form: "vanhin" },
          { label: "Superlatiivi (gen.)", form: "vanhimman" },
          { label: "Superlatiivi (part.)", form: "vanhinta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vanhempi",
      en: "parent; older",
      taso: "A2",
      esim: { fi: "Vanhemmat odottivat ulkona.", en: "The parents waited outside." },
    },
    {
      fi: "vanhus",
      en: "elderly person",
      taso: "B1",
      esim: { fi: "Vanhus istui penkillä puistossa.", en: "The elderly person sat on a bench in the park." },
    },
    {
      fi: "vanhentua",
      en: "to age; to expire",
      taso: "B2",
      esim: { fi: "Maito on vanhentunut.", en: "The milk has gone off." },
    },
  ],
  synonyymit: [
    { fi: "iäkäs", en: "aged, elderly" },
    { fi: "ikivanha", en: "ancient, age-old" },
  ],
  esimerkit: {
    A2: { fi: "Tämä talo on hyvin vanha.", en: "This house is very old." },
    B1: { fi: "Isoäitini on jo melko vanha.", en: "My grandmother is already quite old." },
    B2: {
      fi: "Vanhin sisaruksista muutti ensimmäisenä pois kotoa.",
      en: "The oldest of the siblings was the first to move out.",
    },
  },
  updatedAt: "2026-06-04",
};

export default vanha;
