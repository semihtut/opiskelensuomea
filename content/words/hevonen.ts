import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem hevose- ~ hevos-.
// Genitive hevosen, partitive hevosta, partitive pl hevosia.
const hevonen: Word = {
  fi: "hevonen",
  slug: "hevonen",
  pos: "substantiivi (tyyppi 38/nainen)",
  posClass: "substantiivi",
  level: "A2",
  en: "horse",
  selitys:
    "Suuri kotieläin, jolla ratsastetaan ja jota käytetään työhön: 'ratsastaa hevosella'. Tyyppi 38/nainen, ei astevaihtelua. Vrt. ratsastaa, talli, eläin.",
  kuva: { emoji: "🐴", alt: "hevonen – suuri kotieläin jolla ratsastetaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 38/nainen; ei astevaihtelua (vartalo hevose-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "hevosen", merkitys: "of the horse" },
      { sija: "partitiivi (yks.)", muoto: "hevosta", merkitys: "horse (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "hevosia", merkitys: "horses (partitive pl.)" },
    ],
    huom:
      "Tyyppi 38 (-nen): genetiivi -se-n, partitiivi -s-ta, partitiivin monikko -sia. Lapsikielessä heppa, hevoseläimestä ratsu. Vrt. ratsastaa, talli.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "hevonen" },
          { label: "Partitiivi", form: "hevosta" },
          { label: "Genetiivi", form: "hevosen" },
          { label: "Inessiivi", form: "hevosessa" },
          { label: "Elatiivi", form: "hevosesta" },
          { label: "Illatiivi", form: "hevoseen" },
          { label: "Adessiivi", form: "hevosella" },
          { label: "Ablatiivi", form: "hevoselta" },
          { label: "Allatiivi", form: "hevoselle" },
          { label: "Essiivi", form: "hevosena" },
          { label: "Translatiivi", form: "hevoseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "hevoset" },
          { label: "Partitiivi", form: "hevosia" },
          { label: "Genetiivi", form: "hevosten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ratsastaa",
      en: "to ride (a horse)",
      taso: "B1",
      esim: { fi: "Opettelen ratsastamaan.", en: "I'm learning to ride." },
    },
    {
      fi: "talli",
      en: "stable",
      taso: "B1",
      esim: { fi: "Hevoset ovat tallissa.", en: "The horses are in the stable." },
    },
  ],
  synonyymit: [
    { fi: "ratsu", en: "steed, mount" },
  ],
  esimerkit: {
    A2: { fi: "Hevonen syö heinää.", en: "The horse eats hay." },
    B1: { fi: "Lapset ratsastivat hevosella.", en: "The children rode the horse." },
    B2: {
      fi: "Hevonen on herkkä eläin, joka aistii ihmisen mielialan.",
      en: "A horse is a sensitive animal that senses a person's mood.",
    },
  },
  updatedAt: "2026-06-07",
};

export default hevonen;
