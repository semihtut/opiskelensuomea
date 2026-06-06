import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem aluee- ~ alue.
// Genitive alueen, partitive aluetta, illative alueeseen, partitive pl alueita.
const alue: Word = {
  fi: "alue",
  slug: "alue",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "A2",
  en: "area, region, zone",
  selitys:
    "Rajattu osa maata tai tilaa: 'asuinalue'. Tyyppi 48, ei astevaihtelua; vartalo aluee-. Partitiivin monikko alueita. Johdettu sanasta ala. Vrt. alueellinen (regional), asuinalue, teollisuusalue.",
  kuva: { emoji: "🗺️", alt: "alue – rajattu osa maata tai tilaa" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua; vartalo aluee-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "alueen", merkitys: "of the area" },
      { sija: "partitiivi (yks.)", muoto: "aluetta", merkitys: "area (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "alueita", merkitys: "areas (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e → -ee-): genetiivi alueen, partitiivi aluetta, illatiivi alueeseen, partitiivin monikko alueita. Vrt. ala = field/area, alueellinen = regional.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "alue" },
          { label: "Partitiivi", form: "aluetta" },
          { label: "Genetiivi", form: "alueen" },
          { label: "Inessiivi", form: "alueessa" },
          { label: "Elatiivi", form: "alueesta" },
          { label: "Illatiivi", form: "alueeseen" },
          { label: "Adessiivi", form: "alueella" },
          { label: "Ablatiivi", form: "alueelta" },
          { label: "Allatiivi", form: "alueelle" },
          { label: "Essiivi", form: "alueena" },
          { label: "Translatiivi", form: "alueeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "alueet" },
          { label: "Partitiivi", form: "alueita" },
          { label: "Genetiivi", form: "alueiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "asuinalue",
      en: "residential area",
      taso: "B1",
      esim: { fi: "Se on rauhallinen asuinalue.", en: "It is a peaceful residential area." },
    },
    {
      fi: "alueellinen",
      en: "regional",
      taso: "B2",
      esim: { fi: "Alueelliset erot ovat suuria.", en: "Regional differences are large." },
    },
    {
      fi: "luonnonsuojelualue",
      en: "nature reserve",
      taso: "B2",
      esim: { fi: "Metsä on luonnonsuojelualuetta.", en: "The forest is a nature reserve." },
    },
  ],
  synonyymit: [
    { fi: "seutu", en: "region, district" },
    { fi: "vyöhyke", en: "zone" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on rauhallinen alue.", en: "This is a quiet area." },
    B1: { fi: "Alueella asuu paljon nuoria perheitä.", en: "Many young families live in the area." },
    B2: {
      fi: "Koko alueella on voimassa sama nopeusrajoitus.",
      en: "The same speed limit applies throughout the entire area.",
    },
  },
  updatedAt: "2026-06-06",
};

export default alue;
