import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 6/paperi, no gradation, stem kulttuuri-.
// Genitive kulttuurin, partitive kulttuuria, illative kulttuuriin, partitive pl kulttuureita.
const kulttuuri: Word = {
  fi: "kulttuuri",
  slug: "kulttuuri",
  pos: "substantiivi (tyyppi 6/paperi)",
  posClass: "substantiivi",
  level: "B1",
  en: "culture",
  selitys:
    "Kansan tavat, arvot ja taide: 'suomalainen kulttuuri'. Tyyppi 6, ei astevaihtelua. Partitiivin monikko kulttuureita. Lainasana ruotsista (kultur). Vrt. kulttuurinen, korkeakulttuuri.",
  kuva: { emoji: "🎭", alt: "kulttuuri – kansan tavat, arvot ja taide" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 6/paperi; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kulttuurin", merkitys: "of the culture" },
      { sija: "partitiivi (yks.)", muoto: "kulttuuria", merkitys: "culture (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kulttuureita", merkitys: "cultures (partitive pl.)" },
    ],
    huom:
      "Tyyppi 6: partitiivin monikko -eita (kulttuureita). Ei astevaihtelua. Monta merkitystä: kansan kulttuuri, taide-elämä, bakteeriviljelmä. Vrt. kulttuurinen = cultural, korkeakulttuuri = high culture.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kulttuuri" },
          { label: "Partitiivi", form: "kulttuuria" },
          { label: "Genetiivi", form: "kulttuurin" },
          { label: "Inessiivi", form: "kulttuurissa" },
          { label: "Elatiivi", form: "kulttuurista" },
          { label: "Illatiivi", form: "kulttuuriin" },
          { label: "Adessiivi", form: "kulttuurilla" },
          { label: "Ablatiivi", form: "kulttuurilta" },
          { label: "Allatiivi", form: "kulttuurille" },
          { label: "Essiivi", form: "kulttuurina" },
          { label: "Translatiivi", form: "kulttuuriksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kulttuurit" },
          { label: "Partitiivi", form: "kulttuureita" },
          { label: "Genetiivi", form: "kulttuurien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kulttuurinen",
      en: "cultural",
      taso: "B2",
      esim: { fi: "Kyse on kulttuurisista eroista.", en: "It's about cultural differences." },
    },
    {
      fi: "korkeakulttuuri",
      en: "high culture",
      taso: "B2",
      esim: { fi: "Ooppera edustaa korkeakulttuuria.", en: "Opera represents high culture." },
    },
    {
      fi: "monikulttuurinen",
      en: "multicultural",
      taso: "B2",
      esim: { fi: "Kaupunki on monikulttuurinen.", en: "The city is multicultural." },
    },
  ],
  synonyymit: [
    { fi: "sivistys", en: "civilization, refinement" },
    { fi: "perinne", en: "tradition" },
  ],
  esimerkit: {
    A2: { fi: "Pidän suomalaisesta kulttuurista.", en: "I like Finnish culture." },
    B1: { fi: "Matkalla tutustuimme paikalliseen kulttuuriin.", en: "On the trip we got to know the local culture." },
    B2: {
      fi: "Jokainen kulttuuri näkee maailman hieman eri tavalla.",
      en: "Every culture sees the world a little differently.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kulttuuri;
