import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem selitykse-.
// Genitive selityksen, partitive selitystä, partitive pl selityksiä.
const selitys: Word = {
  fi: "selitys",
  slug: "selitys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "explanation",
  selitys:
    "Se, mikä tekee asian ymmärrettäväksi: 'antaa selitys', 'looginen selitys'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Johdettu verbistä selittää. Vrt. selittää, selvitys, syy.",
  kuva: { alt: "selitys – se mikä tekee asian ymmärrettäväksi" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo selitykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "selityksen", merkitys: "of the explanation" },
      { sija: "partitiivi (yks.)", muoto: "selitystä", merkitys: "explanation (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "selityksiä", merkitys: "explanations (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Teonnimi verbistä selittää. Ero: selitys = explanation, selvitys = report/clarification. Vrt. selittää, syy.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "selitys" },
          { label: "Partitiivi", form: "selitystä" },
          { label: "Genetiivi", form: "selityksen" },
          { label: "Inessiivi", form: "selityksessä" },
          { label: "Elatiivi", form: "selityksestä" },
          { label: "Illatiivi", form: "selitykseen" },
          { label: "Adessiivi", form: "selityksellä" },
          { label: "Ablatiivi", form: "selitykseltä" },
          { label: "Allatiivi", form: "selitykselle" },
          { label: "Essiivi", form: "selityksenä" },
          { label: "Translatiivi", form: "selitykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "selitykset" },
          { label: "Partitiivi", form: "selityksiä" },
          { label: "Genetiivi", form: "selityksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "selittää",
      en: "to explain",
      taso: "A2",
      esim: { fi: "Selitä asia uudelleen.", en: "Explain the matter again." },
    },
    {
      fi: "selvitys",
      en: "report, account, clarification",
      taso: "B2",
      esim: { fi: "Tein asiasta kirjallisen selvityksen.", en: "I made a written report on the matter." },
    },
  ],
  synonyymit: [
    { fi: "perustelu", en: "justification, reasoning" },
  ],
  esimerkit: {
    A2: { fi: "Tarvitsen selityksen.", en: "I need an explanation." },
    B1: { fi: "Hänen selityksensä kuulosti uskottavalta.", en: "His explanation sounded believable." },
    B2: {
      fi: "Ilmiölle löytyi lopulta yksinkertainen tieteellinen selitys.",
      en: "A simple scientific explanation was eventually found for the phenomenon.",
    },
  },
  updatedAt: "2026-06-07",
};

export default selitys;
