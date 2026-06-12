import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 13/katiska, no gradation, stem kollega-.
// Genitive kollegan, partitive kollegaa, illative kollegaan, partitive pl kollegoita/kollegoja.
const kollega: Word = {
  fi: "kollega",
  slug: "kollega",
  pos: "substantiivi (tyyppi 13/katiska)",
  posClass: "substantiivi",
  level: "B1",
  en: "colleague",
  selitys:
    "Työtoveri, saman alan tai työpaikan ihminen: 'luotettava kollega'. Tyyppi 13, ei astevaihtelua. Partitiivin monikko kollegoita tai kollegoja. Vrt. työkaveri (arkisempi synonyymi).",
  kuva: { alt: "kollega – työtoveri" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 13/katiska; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kollegan", merkitys: "of the colleague" },
      { sija: "partitiivi (yks.)", muoto: "kollegaa", merkitys: "colleague (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kollegoita / kollegoja", merkitys: "colleagues (partitive pl.)" },
    ],
    huom:
      "Tyyppi 13: partitiivin monikko -oita tai -oja (kollegoita/kollegoja), genetiivin monikko kollegoiden/kollegojen. Arkisempi synonyymi on työkaveri.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kollega" },
          { label: "Partitiivi", form: "kollegaa" },
          { label: "Genetiivi", form: "kollegan" },
          { label: "Inessiivi", form: "kollegassa" },
          { label: "Elatiivi", form: "kollegasta" },
          { label: "Illatiivi", form: "kollegaan" },
          { label: "Adessiivi", form: "kollegalla" },
          { label: "Ablatiivi", form: "kollegalta" },
          { label: "Allatiivi", form: "kollegalle" },
          { label: "Essiivi", form: "kollegana" },
          { label: "Translatiivi", form: "kollegaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kollegat" },
          { label: "Partitiivi", form: "kollegoita / kollegoja" },
          { label: "Genetiivi", form: "kollegoiden / kollegojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "työkaveri",
      en: "workmate, colleague (colloquial)",
      taso: "A2",
      esim: { fi: "Työkaverit auttoivat minua.", en: "My workmates helped me." },
    },
    {
      fi: "työtoveri",
      en: "co-worker",
      taso: "B1",
      esim: { fi: "Hän on pidetty työtoveri.", en: "He is a well-liked co-worker." },
    },
    {
      fi: "kollegiaalinen",
      en: "collegial",
      taso: "B2",
      esim: { fi: "Ilmapiiri oli kollegiaalinen.", en: "The atmosphere was collegial." },
    },
  ],
  synonyymit: [
    { fi: "työkaveri", en: "workmate" },
    { fi: "työtoveri", en: "co-worker" },
  ],
  esimerkit: {
    A2: { fi: "Hän on minun kollegani.", en: "She is my colleague." },
    B1: { fi: "Tapasin vanhan kollegan kaupungilla.", en: "I met an old colleague in town." },
    B2: {
      fi: "Hyvät suhteet kollegoihin tekevät työpäivästä mukavamman.",
      en: "Good relationships with colleagues make the workday more pleasant.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kollega;
