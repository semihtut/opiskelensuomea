import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem käännökse-.
// Genitive käännöksen, partitive käännöstä, partitive pl käännöksiä.
const kaannos: Word = {
  fi: "käännös",
  slug: "käännös",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "translation; turn",
  selitys:
    "1) Tekstin kääntäminen toiselle kielelle tai sen tulos: 'käännös englannista suomeksi'. 2) Suunnan muutos, käännös. Tyyppi 39/vastaus, ei astevaihtelua (-ös → -ökse-). Verbistä kääntää. Vrt. kääntää, kääntäjä, käännöstyö.",
  kuva: { emoji: "🔄", alt: "käännös – tekstin kääntäminen toiselle kielelle tai suunnan muutos" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo käännökse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "käännöksen", merkitys: "of the translation" },
      { sija: "partitiivi (yks.)", muoto: "käännöstä", merkitys: "translation (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "käännöksiä", merkitys: "translations (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ös): genetiivi -ökse-n, partitiivi -ös-tä, partitiivin monikko -öksiä. Teonnimi verbistä kääntää. Myös 'suunnan käännös' = a turn. Vrt. kääntää, kääntäjä.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "käännös" },
          { label: "Partitiivi", form: "käännöstä" },
          { label: "Genetiivi", form: "käännöksen" },
          { label: "Inessiivi", form: "käännöksessä" },
          { label: "Elatiivi", form: "käännöksestä" },
          { label: "Illatiivi", form: "käännökseen" },
          { label: "Adessiivi", form: "käännöksellä" },
          { label: "Ablatiivi", form: "käännökseltä" },
          { label: "Allatiivi", form: "käännökselle" },
          { label: "Essiivi", form: "käännöksenä" },
          { label: "Translatiivi", form: "käännökseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "käännökset" },
          { label: "Partitiivi", form: "käännöksiä" },
          { label: "Genetiivi", form: "käännöksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kääntäjä",
      en: "translator",
      taso: "B1",
      esim: { fi: "Hän työskentelee kääntäjänä.", en: "She works as a translator." },
    },
    {
      fi: "konekäännös",
      en: "machine translation",
      taso: "B2",
      esim: { fi: "Konekäännös ei aina ole tarkka.", en: "Machine translation is not always accurate." },
    },
  ],
  synonyymit: [
    { fi: "suomennos", en: "Finnish translation" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on hyvä käännös.", en: "This is a good translation." },
    B1: { fi: "Luin kirjan suomenkielisenä käännöksenä.", en: "I read the book in its Finnish translation." },
    B2: {
      fi: "Hyvä käännös välittää alkutekstin sävyn, ei vain sanojen merkitystä.",
      en: "A good translation conveys the tone of the original, not just the meaning of the words.",
    },
  },
  updatedAt: "2026-06-07",
};

export default kaannos;
