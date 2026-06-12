import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, nt:nn gradation, stem valinta- ~ valinna-.
// Genitive valinnan, partitive valintaa, partitive pl valintoja.
const valinta: Word = {
  fi: "valinta",
  slug: "valinta",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "choice, selection",
  selitys:
    "Valitseminen tai valittu vaihtoehto: 'tehdä valinta'. Tyyppi 9/kala, astevaihtelu nt:nn (valinta → valinnan), partitiivin monikko valintoja. Johdettu verbistä valita. Vrt. valita, vaihtoehto, valikoima.",
  kuva: { alt: "valinta – valitseminen tai valittu vaihtoehto" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu nt:nn (vartalo valinna-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "valinnan", merkitys: "of the choice" },
      { sija: "partitiivi (yks.)", muoto: "valintaa", merkitys: "choice (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "valintoja", merkitys: "choices (partitive pl.)" },
    ],
    huom:
      "Tyyppi 9/kala: partitiivin monikko -oja (valintoja, a→o). Astevaihtelu nt:nn: nominatiivi valinta (vahva nt), genetiivi valinnan (heikko nn). Johdettu verbistä valita. 'Tehdä valinta' = to make a choice.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "valinta" },
          { label: "Partitiivi", form: "valintaa" },
          { label: "Genetiivi", form: "valinnan" },
          { label: "Inessiivi", form: "valinnassa" },
          { label: "Elatiivi", form: "valinnasta" },
          { label: "Illatiivi", form: "valintaan" },
          { label: "Adessiivi", form: "valinnalla" },
          { label: "Ablatiivi", form: "valinnalta" },
          { label: "Allatiivi", form: "valinnalle" },
          { label: "Essiivi", form: "valintana" },
          { label: "Translatiivi", form: "valinnaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "valinnat" },
          { label: "Partitiivi", form: "valintoja" },
          { label: "Genetiivi", form: "valintojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "valita",
      en: "to choose, select",
      taso: "A2",
      esim: { fi: "Valitse yksi vaihtoehto.", en: "Choose one option." },
    },
    {
      fi: "valinnainen",
      en: "optional, elective",
      taso: "B2",
      esim: { fi: "Kurssi on valinnainen.", en: "The course is optional." },
    },
  ],
  synonyymit: [
    { fi: "valitseminen", en: "choosing" },
    { fi: "vaihtoehto", en: "option" },
  ],
  esimerkit: {
    A2: { fi: "Se oli hyvä valinta.", en: "It was a good choice." },
    B1: { fi: "Tein tietoisen valinnan.", en: "I made a conscious choice." },
    B2: {
      fi: "Jokainen valinta sulkee pois muita vaihtoehtoja.",
      en: "Every choice rules out other options.",
    },
  },
  updatedAt: "2026-06-07",
};

export default valinta;
