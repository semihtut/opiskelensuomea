import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem ystävällise-.
// Genitive ystävällisen, partitive ystävällistä, illative ystävälliseen, partitive pl ystävällisiä.
const ystavallinen: Word = {
  fi: "ystävällinen",
  slug: "ystävällinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A2",
  en: "friendly, kind, amicable",
  selitys:
    "Toiset huomioon ottava ja lämmin: 'ystävällinen palvelu'. Tyyppi 38, ei astevaihtelua. Juuri substantiivista ystävä. Vrt. kiltti (kind), kohtelias (polite).",
  kuva: { alt: "ystävällinen – lämmin ja huomioiva" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ystävällisen", merkitys: "of the friendly" },
      { sija: "partitiivi (yks.)", muoto: "ystävällistä", merkitys: "friendly (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ystävällisiä", merkitys: "friendly (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -se-: ystävällinen → ystävällisen, ystävällistä. Kohteliaisuus: 'Olisitko niin ystävällinen ja…' Vrt. ystävä = friend, ystävyys = friendship.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "ystävällinen" },
          { label: "Partitiivi", form: "ystävällistä" },
          { label: "Genetiivi", form: "ystävällisen" },
          { label: "Inessiivi", form: "ystävällisessä" },
          { label: "Illatiivi", form: "ystävälliseen" },
          { label: "Adessiivi", form: "ystävällisellä" },
          { label: "Essiivi", form: "ystävällisenä" },
          { label: "Translatiivi", form: "ystävälliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ystävälliset" },
          { label: "Partitiivi", form: "ystävällisiä" },
          { label: "Genetiivi", form: "ystävällisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "ystävällisempi" },
          { label: "Komparatiivi (gen.)", form: "ystävällisemmän" },
          { label: "Superlatiivi (nom.)", form: "ystävällisin" },
          { label: "Superlatiivi (gen.)", form: "ystävällisimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ystävällisesti",
      en: "kindly, in a friendly way",
      taso: "B1",
      esim: { fi: "Hän vastasi ystävällisesti.", en: "She answered kindly." },
    },
    {
      fi: "ystävyys",
      en: "friendship",
      taso: "B1",
      esim: { fi: "Ystävyys kesti koko elämän.", en: "The friendship lasted a lifetime." },
    },
    {
      fi: "epäystävällinen",
      en: "unfriendly",
      taso: "B2",
      esim: { fi: "Hänen sävynsä oli epäystävällinen.", en: "His tone was unfriendly." },
    },
  ],
  synonyymit: [
    { fi: "kiltti", en: "kind, nice" },
    { fi: "kohtelias", en: "polite" },
  ],
  esimerkit: {
    A2: { fi: "Naapurit ovat hyvin ystävällisiä.", en: "The neighbours are very friendly." },
    B1: { fi: "Kiitos ystävällisestä avusta.", en: "Thank you for the kind help." },
    B2: {
      fi: "Olisitko niin ystävällinen ja sulkisit ikkunan?",
      en: "Would you be so kind as to close the window?",
    },
  },
  updatedAt: "2026-06-06",
};

export default ystavallinen;
