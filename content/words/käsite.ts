import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, tt:t gradation, stem käsittee- ~ käsite-.
// Genitive käsitteen, partitive käsitettä, illative käsitteeseen, partitive pl käsitteitä.
const kasite: Word = {
  fi: "käsite",
  slug: "käsite",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B2",
  en: "concept, notion",
  selitys:
    "Ajatuksellinen yksikkö, jonka mieli ymmärtää: 'abstrakti käsite'. Tyyppi 48/hame, astevaihtelu tt:t (käsitteen vahva, käsite/käsitettä heikko). Johdettu verbistä käsittää. Vrt. käsittää, käsitys, termi.",
  kuva: { alt: "käsite – ajatuksellinen yksikkö jonka mieli ymmärtää" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu tt:t (vartalo käsittee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "käsitteen", merkitys: "of the concept" },
      { sija: "partitiivi (yks.)", muoto: "käsitettä", merkitys: "concept (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "käsitteitä", merkitys: "concepts (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48: nominatiivi käsite (heikko t), vartalo käsittee- vahvistuu (käsitteen, käsitteeseen), partitiivi käsitettä. Johdettu verbistä käsittää. Vrt. käsitys = conception, view; termi = term.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "käsite" },
          { label: "Partitiivi", form: "käsitettä" },
          { label: "Genetiivi", form: "käsitteen" },
          { label: "Inessiivi", form: "käsitteessä" },
          { label: "Elatiivi", form: "käsitteestä" },
          { label: "Illatiivi", form: "käsitteeseen" },
          { label: "Adessiivi", form: "käsitteellä" },
          { label: "Ablatiivi", form: "käsitteeltä" },
          { label: "Allatiivi", form: "käsitteelle" },
          { label: "Essiivi", form: "käsitteenä" },
          { label: "Translatiivi", form: "käsitteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "käsitteet" },
          { label: "Partitiivi", form: "käsitteitä" },
          { label: "Genetiivi", form: "käsitteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käsittää",
      en: "to understand; to comprise",
      taso: "B1",
      esim: { fi: "En käsitä tätä.", en: "I don't get this." },
    },
    {
      fi: "käsitys",
      en: "conception, understanding, view",
      taso: "B1",
      esim: { fi: "Minulla on eri käsitys asiasta.", en: "I have a different understanding of the matter." },
    },
  ],
  synonyymit: [
    { fi: "termi", en: "term" },
    { fi: "idea", en: "idea, notion" },
  ],
  esimerkit: {
    A2: { fi: "Aika on vaikea käsite.", en: "Time is a difficult concept." },
    B1: { fi: "Opettaja selitti uuden käsitteen.", en: "The teacher explained the new concept." },
    B2: {
      fi: "Abstraktit käsitteet on helpompi ymmärtää konkreettisten esimerkkien avulla.",
      en: "Abstract concepts are easier to understand with the help of concrete examples.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kasite;
