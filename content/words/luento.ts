import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, nt:nn gradation, stem luento- ~ luenno-.
// Genitive luennon, partitive luentoa, partitive pl luentoja.
const luento: Word = {
  fi: "luento",
  slug: "luento",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "B1",
  en: "lecture",
  selitys:
    "Yliopiston tai muun oppilaitoksen opetustilaisuus, jossa luennoitsija puhuu aiheesta: 'käydä luennolla'. Tyyppi 1/valo, astevaihtelu nt:nn (luento → luennon). Sanasta lukea + -nto. Vrt. lukea, luennoida, luentosali.",
  kuva: { alt: "luento – oppilaitoksen opetustilaisuus jossa luennoitsija puhuu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; astevaihtelu nt:nn (luento ~ luenno-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "luennon", merkitys: "of the lecture" },
      { sija: "partitiivi (yks.)", muoto: "luentoa", merkitys: "lecture (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "luentoja", merkitys: "lectures (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu nt:nn: vahva luento (nominatiivi, partitiivi luentoa), heikko luenno- (luennon, luennolla). 'Käydä luennolla' = to attend a lecture. Vrt. lukea, luennoida.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "luento" },
          { label: "Partitiivi", form: "luentoa" },
          { label: "Genetiivi", form: "luennon" },
          { label: "Inessiivi", form: "luennossa" },
          { label: "Elatiivi", form: "luennosta" },
          { label: "Illatiivi", form: "luentoon" },
          { label: "Adessiivi", form: "luennolla" },
          { label: "Ablatiivi", form: "luennolta" },
          { label: "Allatiivi", form: "luennolle" },
          { label: "Essiivi", form: "luentona" },
          { label: "Translatiivi", form: "luennoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "luennot" },
          { label: "Partitiivi", form: "luentoja" },
          { label: "Genetiivi", form: "luentojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "luennoida",
      en: "to lecture",
      taso: "B2",
      esim: { fi: "Professori luennoi historiasta.", en: "The professor lectures on history." },
    },
    {
      fi: "luentosali",
      en: "lecture hall",
      taso: "B1",
      esim: { fi: "Luentosali oli täynnä.", en: "The lecture hall was full." },
    },
  ],
  synonyymit: [
    { fi: "esitelmä", en: "presentation, talk" },
  ],
  esimerkit: {
    A2: { fi: "Menen luennolle.", en: "I'm going to a lecture." },
    B1: { fi: "Luento alkaa kello kymmenen.", en: "The lecture starts at ten o'clock." },
    B2: {
      fi: "En ehtinyt luennolle ajoissa, joten lainasin muistiinpanot kaverilta.",
      en: "I didn't make it to the lecture on time, so I borrowed the notes from a friend.",
    },
  },
  updatedAt: "2026-06-07",
};

export default luento;
