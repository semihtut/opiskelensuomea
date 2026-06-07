import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 39/vastaus, no gradation, stem ymmärrykse-.
// Genitive ymmärryksen, partitive ymmärrystä, partitive pl ymmärryksiä.
const ymmarrys: Word = {
  fi: "ymmärrys",
  slug: "ymmärrys",
  pos: "substantiivi (tyyppi 39/vastaus)",
  posClass: "substantiivi",
  level: "B1",
  en: "understanding, comprehension",
  selitys:
    "Kyky käsittää asioita tai myötätuntoinen suhtautuminen: 'syvä ymmärrys', 'osoittaa ymmärrystä'. Tyyppi 39/vastaus, ei astevaihtelua (-ys → -ykse-). Johdettu verbistä ymmärtää. Vrt. ymmärtää, käsitys, yhteisymmärrys.",
  kuva: { emoji: "🧠", alt: "ymmärrys – kyky käsittää asioita" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 39/vastaus; ei astevaihtelua (vartalo ymmärrykse-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "ymmärryksen", merkitys: "of the understanding" },
      { sija: "partitiivi (yks.)", muoto: "ymmärrystä", merkitys: "understanding (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ymmärryksiä", merkitys: "understandings (partitive pl.)" },
    ],
    huom:
      "Tyyppi 39 (-ys): genetiivi -ykse-n, partitiivi -ys-tä, partitiivin monikko -yksiä. Teonnimi verbistä ymmärtää. Yleensä yksikössä. Yhteisymmärrys = mutual understanding. Vrt. ymmärtää, käsitys.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "ymmärrys" },
          { label: "Partitiivi", form: "ymmärrystä" },
          { label: "Genetiivi", form: "ymmärryksen" },
          { label: "Inessiivi", form: "ymmärryksessä" },
          { label: "Elatiivi", form: "ymmärryksestä" },
          { label: "Illatiivi", form: "ymmärrykseen" },
          { label: "Adessiivi", form: "ymmärryksellä" },
          { label: "Ablatiivi", form: "ymmärrykseltä" },
          { label: "Allatiivi", form: "ymmärrykselle" },
          { label: "Essiivi", form: "ymmärryksenä" },
          { label: "Translatiivi", form: "ymmärrykseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ymmärrykset" },
          { label: "Partitiivi", form: "ymmärryksiä" },
          { label: "Genetiivi", form: "ymmärryksien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ymmärtää",
      en: "to understand",
      taso: "A2",
      esim: { fi: "Ymmärrän nyt paremmin.", en: "I understand better now." },
    },
    {
      fi: "yhteisymmärrys",
      en: "mutual understanding, consensus",
      taso: "B2",
      esim: { fi: "Pääsimme yhteisymmärrykseen.", en: "We reached a mutual understanding." },
    },
  ],
  synonyymit: [
    { fi: "käsityskyky", en: "comprehension" },
  ],
  esimerkit: {
    A2: { fi: "Kiitos ymmärryksestä.", en: "Thank you for your understanding." },
    B1: { fi: "Hän osoitti ymmärrystä tilannettani kohtaan.", en: "She showed understanding toward my situation." },
    B2: {
      fi: "Toisen kulttuurin syvempi ymmärrys vaatii aikaa ja avointa mieltä.",
      en: "A deeper understanding of another culture requires time and an open mind.",
    },
  },
  updatedAt: "2026-06-07",
};

export default ymmarrys;
