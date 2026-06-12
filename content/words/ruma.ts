import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation. Genitive ruman,
// partitive rumaa, illative rumaan, partitive pl rumia. Comp rumempi, superl rumin.
const ruma: Word = {
  fi: "ruma",
  slug: "ruma",
  pos: "adjektiivi (tyyppi 10/koira)",
  posClass: "adjektiivi",
  level: "A2",
  en: "ugly",
  selitys:
    "Silmää miellyttämätön; vastakohta kaunis. Tyyppi 10, ei astevaihtelua. Voi kuvata myös tekoa: 'ruma teko'.",
  kuva: { alt: "ruma – ruma, epämiellyttävä ulkonäkö" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ruman", merkitys: "of the ugly" },
      { sija: "partitiivi (yks.)", muoto: "rumaa", merkitys: "ugly (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rumia", merkitys: "ugly (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. Monikon partitiivi rumia. Vertailu rumempi/rumin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "ruma" },
          { label: "Partitiivi", form: "rumaa" },
          { label: "Genetiivi", form: "ruman" },
          { label: "Inessiivi", form: "rumassa" },
          { label: "Illatiivi", form: "rumaan" },
          { label: "Adessiivi", form: "rumalla" },
          { label: "Essiivi", form: "rumana" },
          { label: "Translatiivi", form: "rumaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rumat" },
          { label: "Partitiivi", form: "rumia" },
          { label: "Genetiivi", form: "rumien" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "rumempi" },
          { label: "Komparatiivi (gen.)", form: "rumemman" },
          { label: "Komparatiivi (part.)", form: "rumempaa" },
          { label: "Superlatiivi (nom.)", form: "rumin" },
          { label: "Superlatiivi (gen.)", form: "rumimman" },
          { label: "Superlatiivi (part.)", form: "ruminta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rumuus",
      en: "ugliness",
      taso: "B2",
      esim: { fi: "Tarinassa kuvattiin sodan rumuutta.", en: "The story depicted the ugliness of war." },
    },
    {
      fi: "rumasti",
      en: "in an ugly way, badly",
      taso: "B1",
      esim: { fi: "Hän puhui rumasti vieraille.", en: "He spoke rudely to the guests." },
    },
    {
      fi: "rumentaa",
      en: "to make ugly, mar",
      taso: "B2",
      esim: { fi: "Mainokset rumentavat maisemaa.", en: "The ads mar the scenery." },
    },
  ],
  synonyymit: [
    { fi: "epämiellyttävä", en: "unpleasant" },
    { fi: "ruokoton", en: "crude, indecent (of behavior)" },
  ],
  esimerkit: {
    A2: { fi: "Talo on vanha ja vähän ruma.", en: "The house is old and a bit ugly." },
    B1: { fi: "Sää oli ruma koko viikon.", en: "The weather was nasty all week." },
    B2: {
      fi: "Vaikka rakennus on ruma, se on historiallisesti tärkeä.",
      en: "Although the building is ugly, it is historically important.",
    },
  },
  updatedAt: "2026-06-04",
};

export default ruma;
