import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem ajatukse-.
// Genitive ajatuksen, partitive ajatusta, illative ajatukseen, partitive pl ajatuksia.
const ajatus: Word = {
  fi: "ajatus",
  slug: "ajatus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "A2",
  en: "thought, idea",
  selitys:
    "Mielessä syntyvä idea tai ajattelun tulos: 'hyvä ajatus'. Tyyppi 39, ei astevaihtelua; vartalo ajatukse-. Partitiivin monikko ajatuksia. Johdettu verbistä ajatella.",
  kuva: { alt: "ajatus – mielessä syntyvä idea" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo ajatukse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ajatuksen", merkitys: "of the thought" },
      { sija: "partitiivi (yks.)", muoto: "ajatusta", merkitys: "thought (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ajatuksia", merkitys: "thoughts (partitive pl.)" },
    ],
    huom:
      "Verbijohdos ajatella → -us; vartalo ajatukse- (genetiivi ajatuksen). 'Tulla ajatus' = to have a thought; 'olla samaa mieltä ajatuksesta'. Vrt. ajatella = to think.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ajatus" },
          { label: "Partitiivi", form: "ajatusta" },
          { label: "Genetiivi", form: "ajatuksen" },
          { label: "Inessiivi", form: "ajatuksessa" },
          { label: "Elatiivi", form: "ajatuksesta" },
          { label: "Illatiivi", form: "ajatukseen" },
          { label: "Adessiivi", form: "ajatuksella" },
          { label: "Ablatiivi", form: "ajatukselta" },
          { label: "Allatiivi", form: "ajatukselle" },
          { label: "Essiivi", form: "ajatuksena" },
          { label: "Translatiivi", form: "ajatukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ajatukset" },
          { label: "Partitiivi", form: "ajatuksia" },
          { label: "Genetiivi", form: "ajatusten / ajatuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ajatella",
      en: "to think",
      taso: "A2",
      esim: { fi: "Ajattelen sinua usein.", en: "I think of you often." },
    },
    {
      fi: "ajattelu",
      en: "thinking",
      taso: "B1",
      esim: { fi: "Looginen ajattelu auttaa ongelmissa.", en: "Logical thinking helps with problems." },
    },
    {
      fi: "ajatuksellinen",
      en: "conceptual, thought-related",
      taso: "B2",
      esim: { fi: "Teos on ajatuksellisesti rikas.", en: "The work is conceptually rich." },
    },
  ],
  synonyymit: [
    { fi: "idea", en: "idea" },
    { fi: "mietelmä", en: "reflection, musing" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on yksi ajatus.", en: "I have a thought." },
    B1: { fi: "Se on hyvä ajatus, kokeillaan sitä.", en: "That's a good idea, let's try it." },
    B2: {
      fi: "Pelkkä ajatus esiintymisestä sai hänet hermostumaan.",
      en: "The mere thought of performing made him nervous.",
    },
  },
  updatedAt: "2026-06-06",
};

export default ajatus;
