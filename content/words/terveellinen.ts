import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem terveellise-.
// Genitive terveellisen, partitive terveellistä, illative terveelliseen, partitive pl terveellisiä.
const terveellinen: Word = {
  fi: "terveellinen",
  slug: "terveellinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "healthy, wholesome (good for health)",
  selitys:
    "Terveydelle hyvä: 'terveellinen ruoka'. Tyyppi 38, ei astevaihtelua. HUOM: kuvaa asiaa joka edistää terveyttä (ruoka, elämäntapa) — ihminen on 'terve'. Vrt. terveys (health), epäterveellinen (unhealthy).",
  kuva: { emoji: "🥗", alt: "terveellinen – terveydelle hyvä" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "terveellisen", merkitys: "of the healthy" },
      { sija: "partitiivi (yks.)", muoto: "terveellistä", merkitys: "healthy (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "terveellisiä", merkitys: "healthy (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -se-: terveellinen → terveellisen, terveellistä. HUOM ero: terveellinen = good for health (ruoka), terve = healthy (ihminen). Vrt. epäterveellinen = unhealthy.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "terveellinen" },
          { label: "Partitiivi", form: "terveellistä" },
          { label: "Genetiivi", form: "terveellisen" },
          { label: "Inessiivi", form: "terveellisessä" },
          { label: "Illatiivi", form: "terveelliseen" },
          { label: "Adessiivi", form: "terveellisellä" },
          { label: "Essiivi", form: "terveellisenä" },
          { label: "Translatiivi", form: "terveelliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "terveelliset" },
          { label: "Partitiivi", form: "terveellisiä" },
          { label: "Genetiivi", form: "terveellisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "terveellisempi" },
          { label: "Komparatiivi (gen.)", form: "terveellisemmän" },
          { label: "Superlatiivi (nom.)", form: "terveellisin" },
          { label: "Superlatiivi (gen.)", form: "terveellisimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "terveellisesti",
      en: "healthily, in a healthy way",
      taso: "B1",
      esim: { fi: "Yritän syödä terveellisesti.", en: "I try to eat healthily." },
    },
    {
      fi: "epäterveellinen",
      en: "unhealthy",
      taso: "B2",
      esim: { fi: "Pikaruoka on usein epäterveellistä.", en: "Fast food is often unhealthy." },
    },
    {
      fi: "terveys",
      en: "health",
      taso: "A2",
      esim: { fi: "Terveys on tärkeintä.", en: "Health is the most important thing." },
    },
  ],
  synonyymit: [
    { fi: "terveyttä edistävä", en: "health-promoting" },
    { fi: "ravitseva", en: "nourishing, nutritious" },
  ],
  esimerkit: {
    A2: { fi: "Vihannekset ovat terveellisiä.", en: "Vegetables are healthy." },
    B1: { fi: "Terveellinen ruokavalio antaa energiaa.", en: "A healthy diet gives energy." },
    B2: {
      fi: "Terveelliset elämäntavat vähentävät monien sairauksien riskiä.",
      en: "A healthy lifestyle reduces the risk of many diseases.",
    },
  },
  updatedAt: "2026-06-06",
};

export default terveellinen;
