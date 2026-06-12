import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation. Genitive terveen,
// partitive tervettä, illative terveeseen, partitive pl terveitä. Comp terveempi,
// superl tervein. Also a colloquial greeting ("Terve!").
const terve: Word = {
  fi: "terve",
  slug: "terve",
  pos: "adjektiivi (tyyppi 48/hame)",
  posClass: "adjektiivi",
  level: "A2",
  en: "healthy; (greeting) hi",
  selitys:
    "Sairaudeton, hyvävointinen. Tyyppi 48, ei astevaihtelua. Käytetään myös tuttavallisena tervehdyksenä: 'Terve!'",
  kuva: { alt: "terve – terve ja hyvinvoiva ihminen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 48/hame; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "terveen", merkitys: "of the healthy" },
      { sija: "partitiivi (yks.)", muoto: "tervettä", merkitys: "healthy (partitive)" },
      { sija: "komparatiivi", muoto: "terveempi", merkitys: "healthier" },
    ],
    huom:
      "Vartalo tervee-: terveen, terveeseen, terveitä. Tervehdyksenä 'Terve!' on taipumaton. Vrt. terveys (= health), terveellinen (= wholesome).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "terve" },
          { label: "Partitiivi", form: "tervettä" },
          { label: "Genetiivi", form: "terveen" },
          { label: "Inessiivi", form: "terveessä" },
          { label: "Illatiivi", form: "terveeseen" },
          { label: "Adessiivi", form: "terveellä" },
          { label: "Essiivi", form: "terveenä" },
          { label: "Translatiivi", form: "terveeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "terveet" },
          { label: "Partitiivi", form: "terveitä" },
          { label: "Genetiivi", form: "terveiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "terveempi" },
          { label: "Komparatiivi (gen.)", form: "terveemmän" },
          { label: "Komparatiivi (part.)", form: "terveempää" },
          { label: "Superlatiivi (nom.)", form: "tervein" },
          { label: "Superlatiivi (gen.)", form: "terveimmän" },
          { label: "Superlatiivi (part.)", form: "terveintä" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "terveys",
      en: "health",
      taso: "A2",
      esim: { fi: "Terveys on tärkeää.", en: "Health is important." },
    },
    {
      fi: "terveellinen",
      en: "healthy, wholesome",
      taso: "B1",
      esim: { fi: "Salaatti on terveellistä.", en: "Salad is healthy." },
    },
    {
      fi: "tervehtiä",
      en: "to greet",
      taso: "B1",
      esim: { fi: "Hän tervehti kohteliaasti.", en: "He greeted politely." },
    },
  ],
  synonyymit: [
    { fi: "tervemielinen", en: "of sound mind" },
    { fi: "hyväkuntoinen", en: "in good shape" },
  ],
  esimerkit: {
    A2: { fi: "Olen taas terve.", en: "I'm healthy again." },
    B1: { fi: "Terveet elämäntavat kannattavat.", en: "Healthy habits pay off." },
    B2: {
      fi: "Sairauden jälkeen hän tunsi itsensä terveemmäksi kuin koskaan.",
      en: "After the illness she felt healthier than ever.",
    },
  },
  updatedAt: "2026-06-04",
};

export default terve;
