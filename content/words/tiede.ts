import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, t:d gradation, stem tietee- (NOM weak -de).
// Genitive tieteen, partitive tiedettä, illative tieteeseen, partitive pl tieteitä.
const tiede: Word = {
  fi: "tiede",
  slug: "tiede",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "science, scholarship",
  selitys:
    "Järjestelmällinen tiedon hankkiminen ja tutkimus: 'luonnontiede'. Tyyppi 48/hame, astevaihtelu t:d (nominatiivi tiede heikko, vartalo tietee-). Suomessa kattaa myös humanistiset alat. Vrt. tieteellinen, tutkimus, tietää.",
  kuva: { alt: "tiede – järjestelmällinen tiedon hankkiminen ja tutkimus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu t:d (vartalo tietee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tieteen", merkitys: "of science" },
      { sija: "partitiivi (yks.)", muoto: "tiedettä", merkitys: "science (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tieteitä", merkitys: "sciences (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48: nominatiivi tiede (heikko -de), vartalo tietee- vahvistuu (tieteen, tieteeseen), partitiivi tiedettä. 'Luonnontiede' = natural science; 'tieteet' = the sciences & humanities. Vrt. tieteellinen, tutkimus.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tiede" },
          { label: "Partitiivi", form: "tiedettä" },
          { label: "Genetiivi", form: "tieteen" },
          { label: "Inessiivi", form: "tieteessä" },
          { label: "Elatiivi", form: "tieteestä" },
          { label: "Illatiivi", form: "tieteeseen" },
          { label: "Adessiivi", form: "tieteellä" },
          { label: "Ablatiivi", form: "tieteeltä" },
          { label: "Allatiivi", form: "tieteelle" },
          { label: "Essiivi", form: "tieteenä" },
          { label: "Translatiivi", form: "tieteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tieteet" },
          { label: "Partitiivi", form: "tieteitä" },
          { label: "Genetiivi", form: "tieteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "tieteellinen",
      en: "scientific",
      taso: "B2",
      esim: { fi: "Väite perustuu tieteelliseen tutkimukseen.", en: "The claim is based on scientific research." },
    },
    {
      fi: "tieteilijä",
      en: "scientist, scholar",
      taso: "B2",
      esim: { fi: "Tieteilijät julkaisivat tuloksensa.", en: "The scientists published their results." },
    },
  ],
  synonyymit: [
    { fi: "tutkimusala", en: "field of research" },
    { fi: "oppi", en: "doctrine, study" },
  ],
  esimerkit: {
    A2: { fi: "Pidän tieteestä.", en: "I like science." },
    B1: { fi: "Lääketiede on kehittynyt nopeasti.", en: "Medicine has developed quickly." },
    B2: {
      fi: "Tiede etenee kysymällä, kokeilemalla ja korjaamalla virheitä.",
      en: "Science advances by asking, experimenting and correcting mistakes.",
    },
  },
  updatedAt: "2026-06-07",
};

export default tiede;
