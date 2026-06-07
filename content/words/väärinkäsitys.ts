import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem väärinkäsitykse-.
// Genitive väärinkäsityksen, partitive väärinkäsitystä, partitive pl väärinkäsityksiä.
const vaarinkasitys: Word = {
  fi: "väärinkäsitys",
  slug: "väärinkäsitys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "misunderstanding",
  selitys:
    "Tilanne, jossa asia ymmärretään väärin: 'syntyi väärinkäsitys', 'selvittää väärinkäsitys'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Yhdyssana väärin + käsitys. Vrt. käsitys, ymmärtää, selvittää.",
  kuva: { emoji: "🤷", alt: "väärinkäsitys – tilanne jossa asia ymmärretään väärin" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo väärinkäsitykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "väärinkäsityksen", merkitys: "of the misunderstanding" },
      { sija: "partitiivi (yks.)", muoto: "väärinkäsitystä", merkitys: "misunderstanding (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "väärinkäsityksiä", merkitys: "misunderstandings (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Yhdyssana väärin + käsitys. Vrt. käsitys = conception/notion, ymmärtää, selvittää.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "väärinkäsitys" },
          { label: "Partitiivi", form: "väärinkäsitystä" },
          { label: "Genetiivi", form: "väärinkäsityksen" },
          { label: "Inessiivi", form: "väärinkäsityksessä" },
          { label: "Elatiivi", form: "väärinkäsityksestä" },
          { label: "Illatiivi", form: "väärinkäsitykseen" },
          { label: "Adessiivi", form: "väärinkäsityksellä" },
          { label: "Ablatiivi", form: "väärinkäsitykseltä" },
          { label: "Allatiivi", form: "väärinkäsitykselle" },
          { label: "Essiivi", form: "väärinkäsityksenä" },
          { label: "Translatiivi", form: "väärinkäsitykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "väärinkäsitykset" },
          { label: "Partitiivi", form: "väärinkäsityksiä" },
          { label: "Genetiivi", form: "väärinkäsityksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "käsitys",
      en: "conception, notion, understanding",
      taso: "B1",
      esim: { fi: "Minulla on selvä käsitys asiasta.", en: "I have a clear conception of the matter." },
    },
    {
      fi: "ymmärtää väärin",
      en: "to misunderstand",
      taso: "B1",
      esim: { fi: "Ymmärsin sinut väärin.", en: "I misunderstood you." },
    },
  ],
  synonyymit: [
    { fi: "väärinymmärrys", en: "misunderstanding" },
  ],
  esimerkit: {
    A2: { fi: "Tämä oli väärinkäsitys.", en: "This was a misunderstanding." },
    B1: { fi: "Selvitimme väärinkäsityksen heti.", en: "We cleared up the misunderstanding right away." },
    B2: {
      fi: "Suurin osa riidoista johtuu väärinkäsityksistä, ei aidoista erimielisyyksistä.",
      en: "Most quarrels stem from misunderstandings, not from genuine disagreements.",
    },
  },
  updatedAt: "2026-06-07",
};

export default vaarinkasitys;
