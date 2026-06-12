import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem aikuise- ~ aikuis-.
// Genitive aikuisen, partitive aikuista, partitive pl aikuisia. Noun + adjective.
const aikuinen: Word = {
  fi: "aikuinen",
  slug: "aikuinen",
  pos: "substantiivi / adjektiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "A2",
  en: "adult; grown-up",
  selitys:
    "Täysikasvuinen ihminen tai sellaista kuvaava: 'aikuinen ihminen', 'kaksi aikuista'. Tyyppi 38/nainen, ei astevaihtelua. Vastakohta lapsi. Vrt. lapsi, aikuisuus, täysi-ikäinen.",
  kuva: { alt: "aikuinen – täysikasvuinen ihminen" },

  kielioppi: {
    tyyppi: "substantiivi/adjektiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo aikuise-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "aikuisen", merkitys: "of the adult" },
      { sija: "partitiivi (yks.)", muoto: "aikuista", merkitys: "adult (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "aikuisia", merkitys: "adults (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): genetiivi -se-n, partitiivi -s-ta, partitiivin monikko -sia. Sanasta aika. Vastakohta lapsi. Aikuisuus = adulthood, täysi-ikäinen = of legal age. Vrt. lapsi.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "aikuinen" },
          { label: "Partitiivi", form: "aikuista" },
          { label: "Genetiivi", form: "aikuisen" },
          { label: "Inessiivi", form: "aikuisessa" },
          { label: "Elatiivi", form: "aikuisesta" },
          { label: "Illatiivi", form: "aikuiseen" },
          { label: "Adessiivi", form: "aikuisella" },
          { label: "Ablatiivi", form: "aikuiselta" },
          { label: "Allatiivi", form: "aikuiselle" },
          { label: "Essiivi", form: "aikuisena" },
          { label: "Translatiivi", form: "aikuiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "aikuiset" },
          { label: "Partitiivi", form: "aikuisia" },
          { label: "Genetiivi", form: "aikuisten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "aikuisuus",
      en: "adulthood",
      taso: "B2",
      esim: { fi: "Aikuisuus tuo vastuuta.", en: "Adulthood brings responsibility." },
    },
    {
      fi: "aikuistua",
      en: "to grow up, become an adult",
      taso: "B2",
      esim: { fi: "Lapset aikuistuvat nopeasti.", en: "Children grow up fast." },
    },
  ],
  synonyymit: [
    { fi: "täysi-ikäinen", en: "of legal age" },
  ],
  esimerkit: {
    A2: { fi: "Lippu maksaa aikuiselta kymmenen euroa.", en: "A ticket costs ten euros for an adult." },
    B1: { fi: "Aikuisen on otettava vastuu teoistaan.", en: "An adult must take responsibility for their actions." },
    B2: {
      fi: "Tilaisuus on tarkoitettu sekä lapsille että aikuisille.",
      en: "The event is intended for both children and adults.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aikuinen;
