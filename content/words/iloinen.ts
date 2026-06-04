import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation. Genitive iloisen,
// partitive iloista, illative iloiseen, partitive pl iloisia.
const iloinen: Word = {
  fi: "iloinen",
  slug: "iloinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A1",
  en: "happy, glad, cheerful",
  selitys:
    "Tunne, jossa on hyvä ja kevyt olo. Tyyppi 38, ei astevaihtelua. Taivutusvartalo iloas- → ilois-. Juuri substantiivista ilo.",
  kuva: { emoji: "😊", alt: "iloinen – hymyilevä iloinen ihminen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "iloisen", merkitys: "of the happy" },
      { sija: "partitiivi (yks.)", muoto: "iloista", merkitys: "happy (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "iloisia", merkitys: "happy (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -is-: iloinen → iloisen, iloista. 'Olla iloinen jostakin' = be happy about something.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "iloinen" },
          { label: "Partitiivi", form: "iloista" },
          { label: "Genetiivi", form: "iloisen" },
          { label: "Inessiivi", form: "iloisessa" },
          { label: "Illatiivi", form: "iloiseen" },
          { label: "Adessiivi", form: "iloisella" },
          { label: "Essiivi", form: "iloisena" },
          { label: "Translatiivi", form: "iloiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "iloiset" },
          { label: "Partitiivi", form: "iloisia" },
          { label: "Genetiivi", form: "iloisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "iloisempi" },
          { label: "Komparatiivi (gen.)", form: "iloisemman" },
          { label: "Superlatiivi (nom.)", form: "iloisin" },
          { label: "Superlatiivi (gen.)", form: "iloisimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ilo",
      en: "joy, gladness",
      taso: "A2",
      esim: { fi: "Lapsi toi paljon iloa.", en: "The child brought a lot of joy." },
    },
    {
      fi: "iloita",
      en: "to rejoice",
      taso: "B2",
      esim: { fi: "Iloitsemme yhdessä menestyksestä.", en: "We rejoice together at the success." },
    },
    {
      fi: "iloisesti",
      en: "happily, cheerfully",
      taso: "B1",
      esim: { fi: "Hän tervehti iloisesti.", en: "She greeted us cheerfully." },
    },
  ],
  synonyymit: [
    { fi: "onnellinen", en: "happy (content)" },
    { fi: "hilpeä", en: "merry, jolly" },
  ],
  esimerkit: {
    A2: { fi: "Olen iloinen, että tulit.", en: "I'm glad you came." },
    B1: { fi: "Iloiset lapset leikkivät pihalla.", en: "The happy children played in the yard." },
    B2: {
      fi: "Hän oli niin iloinen uutisesta, ettei saanut sanaa suustaan.",
      en: "She was so happy about the news that she couldn't get a word out.",
    },
  },
  updatedAt: "2026-06-04",
};

export default iloinen;
