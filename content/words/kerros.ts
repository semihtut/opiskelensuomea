import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem kerrokse-.
// Genitive kerroksen, partitive kerrosta, illative kerrokseen, partitive pl kerroksia.
const kerros: Word = {
  fi: "kerros",
  slug: "kerros",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "floor, storey; layer",
  selitys:
    "Talon kerros tai päällekkäinen taso: 'kolmas kerros'. Tyyppi 39, ei astevaihtelua; vartalo kerrokse-. Partitiivin monikko kerroksia. Vrt. kerrostalo (block of flats), kerroksittain.",
  kuva: { alt: "kerros – talon kerros tai päällekkäinen taso" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo kerrokse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kerroksen", merkitys: "of the floor" },
      { sija: "partitiivi (yks.)", muoto: "kerrosta", merkitys: "floor (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kerroksia", merkitys: "floors (partitive pl.)" },
    ],
    huom:
      "Vartalo kerrokse- (genetiivi kerroksen). 'Kolmannessa kerroksessa' = on the third floor. Kaksi merkitystä: floor/storey ja layer (esim. kakun kerros). Vrt. kerrostalo = apartment building.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "kerros" },
          { label: "Partitiivi", form: "kerrosta" },
          { label: "Genetiivi", form: "kerroksen" },
          { label: "Inessiivi", form: "kerroksessa" },
          { label: "Elatiivi", form: "kerroksesta" },
          { label: "Illatiivi", form: "kerrokseen" },
          { label: "Adessiivi", form: "kerroksella" },
          { label: "Ablatiivi", form: "kerrokselta" },
          { label: "Allatiivi", form: "kerrokselle" },
          { label: "Essiivi", form: "kerroksena" },
          { label: "Translatiivi", form: "kerrokseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kerrokset" },
          { label: "Partitiivi", form: "kerroksia" },
          { label: "Genetiivi", form: "kerrosten / kerroksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kerrostalo",
      en: "apartment building, block of flats",
      taso: "A2",
      esim: { fi: "Asun kerrostalossa.", en: "I live in an apartment building." },
    },
    {
      fi: "kellarikerros",
      en: "basement floor",
      taso: "B2",
      esim: { fi: "Varasto on kellarikerroksessa.", en: "The storage is in the basement floor." },
    },
    {
      fi: "kerroksittain",
      en: "layer by layer, in layers",
      taso: "B2",
      esim: { fi: "Pukeudu kerroksittain talvella.", en: "Dress in layers in winter." },
    },
  ],
  synonyymit: [
    { fi: "taso", en: "level" },
    { fi: "kerrostuma", en: "layer, stratum" },
  ],
  esimerkit: {
    A2: { fi: "Asun kolmannessa kerroksessa.", en: "I live on the third floor." },
    B1: { fi: "Hissi vie ylimpään kerrokseen.", en: "The lift goes to the top floor." },
    B2: {
      fi: "Talossa on kahdeksan kerrosta ja oma pysäköintihalli.",
      en: "The building has eight floors and its own parking garage.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kerros;
