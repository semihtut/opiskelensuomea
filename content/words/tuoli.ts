import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 6/paperi-like (risti family), no gradation.
// Genitive tuolin, partitive tuolia, illative tuoliin, partitive pl tuoleja.
const tuoli: Word = {
  fi: "tuoli",
  slug: "tuoli",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A1",
  en: "chair",
  selitys:
    "Yhden hengen istuin, jossa on selkänoja. Tyyppi 5, ei astevaihtelua.",
  kuva: { alt: "tuoli – tavallinen tuoli" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tuolin", merkitys: "of the chair" },
      { sija: "partitiivi (yks.)", muoto: "tuolia", merkitys: "chair (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tuoleja", merkitys: "chairs (partitive pl.)" },
    ],
    huom:
      "Ei astevaihtelua. 'Istua tuolilla' = sit on a chair. Vrt. sohva (= sofa) ja penkki (= bench).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tuoli" },
          { label: "Partitiivi", form: "tuolia" },
          { label: "Genetiivi", form: "tuolin" },
          { label: "Inessiivi", form: "tuolissa" },
          { label: "Elatiivi", form: "tuolista" },
          { label: "Illatiivi", form: "tuoliin" },
          { label: "Adessiivi", form: "tuolilla" },
          { label: "Ablatiivi", form: "tuolilta" },
          { label: "Allatiivi", form: "tuolille" },
          { label: "Essiivi", form: "tuolina" },
          { label: "Translatiivi", form: "tuoliksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tuolit" },
          { label: "Partitiivi", form: "tuoleja" },
          { label: "Genetiivi", form: "tuolien" },
          { label: "Inessiivi", form: "tuoleissa" },
          { label: "Illatiivi", form: "tuoleihin" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nojatuoli",
      en: "armchair",
      taso: "A2",
      esim: { fi: "Istuin pehmeään nojatuoliin.", en: "I sat down in a soft armchair." },
    },
    {
      fi: "keinutuoli",
      en: "rocking chair",
      taso: "B1",
      esim: { fi: "Mummo istui keinutuolissa.", en: "Grandma sat in the rocking chair." },
    },
    {
      fi: "pyörätuoli",
      en: "wheelchair",
      taso: "B1",
      esim: { fi: "Hän liikkuu pyörätuolilla.", en: "He gets around in a wheelchair." },
    },
  ],
  synonyymit: [
    { fi: "istuin", en: "seat" },
    { fi: "rahi", en: "stool" },
  ],
  esimerkit: {
    A2: { fi: "Ota tuoli ja istu.", en: "Take a chair and sit down." },
    B1: { fi: "Pöydän ympärillä on neljä tuolia.", en: "There are four chairs around the table." },
    B2: {
      fi: "Tuoli oli niin korkea, etteivät jalkani ylettyneet lattiaan.",
      en: "The chair was so high that my feet didn't reach the floor.",
    },
  },
  updatedAt: "2026-06-05",
};

export default tuoli;
