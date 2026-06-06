import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation (agent noun), stem kuljettaja-.
// Genitive kuljettajan, partitive kuljettajaa, illative kuljettajaan, partitive pl kuljettajia.
const kuljettaja: Word = {
  fi: "kuljettaja",
  slug: "kuljettaja",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "B1",
  en: "driver",
  selitys:
    "Henkilö, joka ajaa ajoneuvoa: 'bussin kuljettaja'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko kuljettajia. Tekijännimi verbistä kuljettaa. Vrt. ajaja, bussinkuljettaja.",
  kuva: { emoji: "🚌", alt: "kuljettaja – henkilö, joka ajaa ajoneuvoa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua; tekijännimi (-ja)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kuljettajan", merkitys: "of the driver" },
      { sija: "partitiivi (yks.)", muoto: "kuljettajaa", merkitys: "driver (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kuljettajia", merkitys: "drivers (partitive pl.)" },
    ],
    huom:
      "Tekijännimi (-ja) verbistä kuljettaa; ei astevaihtelua (tt säilyy). Partitiivin monikko kuljettajia. Vrt. bussinkuljettaja, rekkakuski (arkinen).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kuljettaja" },
          { label: "Partitiivi", form: "kuljettajaa" },
          { label: "Genetiivi", form: "kuljettajan" },
          { label: "Inessiivi", form: "kuljettajassa" },
          { label: "Elatiivi", form: "kuljettajasta" },
          { label: "Illatiivi", form: "kuljettajaan" },
          { label: "Adessiivi", form: "kuljettajalla" },
          { label: "Ablatiivi", form: "kuljettajalta" },
          { label: "Allatiivi", form: "kuljettajalle" },
          { label: "Essiivi", form: "kuljettajana" },
          { label: "Translatiivi", form: "kuljettajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kuljettajat" },
          { label: "Partitiivi", form: "kuljettajia" },
          { label: "Genetiivi", form: "kuljettajien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kuljettaa",
      en: "to drive, transport, carry",
      taso: "B1",
      esim: { fi: "Hän kuljettaa tavaraa rekalla.", en: "He transports goods by truck." },
    },
    {
      fi: "bussinkuljettaja",
      en: "bus driver",
      taso: "B1",
      esim: { fi: "Bussinkuljettaja oli ystävällinen.", en: "The bus driver was friendly." },
    },
    {
      fi: "kuljetus",
      en: "transport, haulage",
      taso: "B2",
      esim: { fi: "Kuljetus maksaa kymmenen euroa.", en: "The transport costs ten euros." },
    },
  ],
  synonyymit: [
    { fi: "ajaja", en: "driver" },
    { fi: "kuski", en: "driver (colloquial)" },
  ],
  esimerkit: {
    A2: { fi: "Bussin kuljettaja myi liput.", en: "The bus driver sold the tickets." },
    B1: { fi: "Kuljettaja pysähtyi pysäkille.", en: "The driver stopped at the stop." },
    B2: {
      fi: "Ammattikuljettajan on pidettävä riittävästi taukoja.",
      en: "A professional driver must take enough breaks.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kuljettaja;
