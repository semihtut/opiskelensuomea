import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem sisustukse-.
// Genitive sisustuksen, partitive sisustusta, illative sisustukseen, partitive pl sisustuksia.
const sisustus: Word = {
  fi: "sisustus",
  slug: "sisustus",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "interior decoration, furnishings",
  selitys:
    "Huoneen kalusteet ja somisteet kokonaisuutena: 'moderni sisustus'. Tyyppi 39, ei astevaihtelua; vartalo sisustukse-. Partitiivin monikko sisustuksia. Johdettu verbistä sisustaa. Vrt. sisustaa, sisustussuunnittelija.",
  kuva: { alt: "sisustus – huoneen kalusteet ja somisteet" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua; vartalo sisustukse-",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sisustuksen", merkitys: "of the interior decor" },
      { sija: "partitiivi (yks.)", muoto: "sisustusta", merkitys: "interior decor (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "sisustuksia", merkitys: "interiors (partitive pl.)" },
    ],
    huom:
      "Verbijohdos sisustaa → -us; vartalo sisustukse- (genetiivi sisustuksen). 'Vaihtaa sisustusta' = to change the decor. Vrt. sisustaa = to decorate, sisustussuunnittelija = interior designer.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "sisustus" },
          { label: "Partitiivi", form: "sisustusta" },
          { label: "Genetiivi", form: "sisustuksen" },
          { label: "Inessiivi", form: "sisustuksessa" },
          { label: "Elatiivi", form: "sisustuksesta" },
          { label: "Illatiivi", form: "sisustukseen" },
          { label: "Adessiivi", form: "sisustuksella" },
          { label: "Ablatiivi", form: "sisustukselta" },
          { label: "Allatiivi", form: "sisustukselle" },
          { label: "Essiivi", form: "sisustuksena" },
          { label: "Translatiivi", form: "sisustukseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sisustukset" },
          { label: "Partitiivi", form: "sisustuksia" },
          { label: "Genetiivi", form: "sisustusten / sisustuksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sisustaa",
      en: "to decorate, furnish",
      taso: "B1",
      esim: { fi: "Sisustimme olohuoneen uudelleen.", en: "We redecorated the living room." },
    },
    {
      fi: "sisustussuunnittelija",
      en: "interior designer",
      taso: "B2",
      esim: { fi: "Palkkasimme sisustussuunnittelijan.", en: "We hired an interior designer." },
    },
    {
      fi: "sisustuslehti",
      en: "interior design magazine",
      taso: "B2",
      esim: { fi: "Luen mielelläni sisustuslehtiä.", en: "I enjoy reading interior design magazines." },
    },
  ],
  synonyymit: [
    { fi: "kalustus", en: "furnishing" },
    { fi: "somistus", en: "decoration" },
  ],
  esimerkit: {
    A2: { fi: "Pidän kodin sisustuksesta.", en: "I like the home's decor." },
    B1: { fi: "Vaaleat värit tekevät sisustuksesta valoisan.", en: "Light colours make the decor bright." },
    B2: {
      fi: "Sisustus kannattaa suunnitella niin, että huone on sekä kaunis että käytännöllinen.",
      en: "It's worth planning the decor so the room is both beautiful and practical.",
    },
  },
  updatedAt: "2026-06-06",
};

export default sisustus;
