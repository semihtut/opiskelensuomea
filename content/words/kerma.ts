import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem kerma-.
// Genitive kerman, partitive kermaa, partitive pl kermoja.
const kerma: Word = {
  fi: "kerma",
  slug: "kerma",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "cream",
  selitys:
    "Maidon rasvainen osa, jota käytetään ruoanlaitossa ja jälkiruoissa: 'vispata kerma'. Tyyppi 9/kala, ei astevaihtelua; partitiivin monikko kermoja. Kuvaannollisesti: 'seuran kerma' = the elite. Vrt. maito, vispikerma.",
  kuva: { alt: "kerma – maidon rasvainen osa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua (vartalo kerma-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kerman", merkitys: "of the cream" },
      { sija: "partitiivi (yks.)", muoto: "kermaa", merkitys: "cream (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kermoja", merkitys: "creams (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: ei astevaihtelua. Partitiivin monikko kermoja (a → o). Ainesana, yleensä yksikössä. Vispikerma = whipping cream, ruokakerma = cooking cream. Vrt. maito.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kerma" },
          { label: "Partitiivi", form: "kermaa" },
          { label: "Genetiivi", form: "kerman" },
          { label: "Inessiivi", form: "kermassa" },
          { label: "Elatiivi", form: "kermasta" },
          { label: "Illatiivi", form: "kermaan" },
          { label: "Adessiivi", form: "kermalla" },
          { label: "Ablatiivi", form: "kermalta" },
          { label: "Allatiivi", form: "kermalle" },
          { label: "Essiivi", form: "kermana" },
          { label: "Translatiivi", form: "kermaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kermat" },
          { label: "Partitiivi", form: "kermoja" },
          { label: "Genetiivi", form: "kermojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vispikerma",
      en: "whipping cream",
      taso: "B1",
      esim: { fi: "Vatkaa vispikerma vaahdoksi.", en: "Whip the cream until fluffy." },
    },
    {
      fi: "kermainen",
      en: "creamy",
      taso: "B2",
      esim: { fi: "Keitto oli kermaista.", en: "The soup was creamy." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Lisää kahviin kermaa.", en: "Add some cream to the coffee." },
    B1: { fi: "Kastike tehdään kermasta ja juustosta.", en: "The sauce is made from cream and cheese." },
    B2: {
      fi: "Kermaa kannattaa lisätä vasta lopuksi, jottei se kiehu yli.",
      en: "It's best to add the cream only at the end so it doesn't boil over.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kerma;
