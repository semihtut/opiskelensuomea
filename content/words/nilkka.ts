import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, kk:k gradation, stem nilkka- ~ nilka-.
// Genitive nilkan, partitive nilkkaa, partitive pl nilkkoja.
const nilkka: Word = {
  fi: "nilkka",
  slug: "nilkka",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "B1",
  en: "ankle",
  selitys:
    "Jalan ja jalkaterän välinen nivel: 'nyrjäyttää nilkka'. Tyyppi 9/kala, astevaihtelu kk:k (nilkka → nilkan). Vrt. jalka, polvi, nivel.",
  kuva: { alt: "nilkka – jalan ja jalkaterän välinen nivel" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; astevaihtelu kk:k (nilkka ~ nilka-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "nilkan", merkitys: "of the ankle" },
      { sija: "partitiivi (yks.)", muoto: "nilkkaa", merkitys: "ankle (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "nilkkoja", merkitys: "ankles (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu kk:k: vahva nilkka (nominatiivi, partitiivi nilkkaa), heikko nilka- (nilkan, nilkassa). Partitiivin monikko nilkkoja (a → o). Vrt. nilkkaluu, jalka.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "nilkka" },
          { label: "Partitiivi", form: "nilkkaa" },
          { label: "Genetiivi", form: "nilkan" },
          { label: "Inessiivi", form: "nilkassa" },
          { label: "Elatiivi", form: "nilkasta" },
          { label: "Illatiivi", form: "nilkkaan" },
          { label: "Adessiivi", form: "nilkalla" },
          { label: "Ablatiivi", form: "nilkalta" },
          { label: "Allatiivi", form: "nilkalle" },
          { label: "Essiivi", form: "nilkkana" },
          { label: "Translatiivi", form: "nilkaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "nilkat" },
          { label: "Partitiivi", form: "nilkkoja" },
          { label: "Genetiivi", form: "nilkkojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "nilkkaluu",
      en: "ankle bone",
      taso: "B2",
      esim: { fi: "Nilkkaluu murtui kaatumisessa.", en: "The ankle bone broke in the fall." },
    },
    {
      fi: "nyrjähtää",
      en: "to sprain (intransitive)",
      taso: "B2",
      esim: { fi: "Nilkkani nyrjähti portailla.", en: "My ankle sprained on the stairs." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Nilkkani on kipeä.", en: "My ankle hurts." },
    B1: { fi: "Nyrjäytin nilkkani juostessa.", en: "I sprained my ankle while running." },
    B2: {
      fi: "Heikko nilkka kannattaa tukea, jotta vamma ei uusiudu.",
      en: "A weak ankle should be supported so that the injury does not recur.",
    },
  },
  updatedAt: "2026-06-07",
};

export default nilkka;
