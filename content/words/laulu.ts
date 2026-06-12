import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem laulu-.
// Genitive laulun, partitive laulua, illative lauluun, partitive pl lauluja.
const laulu: Word = {
  fi: "laulu",
  slug: "laulu",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "song; singing",
  selitys:
    "Sävelletty ja laulettu kappale tai laulaminen: 'kaunis laulu'. Tyyppi 1, ei astevaihtelua. Partitiivin monikko lauluja. Vrt. laulaa (to sing), laulaja (singer), kansanlaulu (folk song).",
  kuva: { alt: "laulu – laulettu kappale" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "laulun", merkitys: "of the song" },
      { sija: "partitiivi (yks.)", muoto: "laulua", merkitys: "song (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "lauluja", merkitys: "songs (partitive pl.)" },
    ],
    huom:
      "Tarkoittaa sekä laulettua kappaletta että laulamista. 'Laulun sanat' = the lyrics. Vrt. laulaa = to sing, laulaja = singer, säkeistö = verse.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "laulu" },
          { label: "Partitiivi", form: "laulua" },
          { label: "Genetiivi", form: "laulun" },
          { label: "Inessiivi", form: "laulussa" },
          { label: "Elatiivi", form: "laulusta" },
          { label: "Illatiivi", form: "lauluun" },
          { label: "Adessiivi", form: "laululla" },
          { label: "Ablatiivi", form: "laululta" },
          { label: "Allatiivi", form: "laululle" },
          { label: "Essiivi", form: "lauluna" },
          { label: "Translatiivi", form: "lauluksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "laulut" },
          { label: "Partitiivi", form: "lauluja" },
          { label: "Genetiivi", form: "laulujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "laulaa",
      en: "to sing",
      taso: "A2",
      esim: { fi: "Hän laulaa kauniisti.", en: "She sings beautifully." },
    },
    {
      fi: "laulaja",
      en: "singer",
      taso: "A2",
      esim: { fi: "Bändin laulaja oli loistava.", en: "The band's singer was excellent." },
    },
    {
      fi: "kansanlaulu",
      en: "folk song",
      taso: "B2",
      esim: { fi: "Opimme vanhan kansanlaulun.", en: "We learned an old folk song." },
    },
  ],
  synonyymit: [
    { fi: "kappale", en: "track, piece" },
    { fi: "sävelmä", en: "tune, melody" },
  ],
  esimerkit: {
    A2: { fi: "Tämä on lempilauluni.", en: "This is my favorite song." },
    B1: { fi: "Lapset lauloivat laulun yhdessä.", en: "The children sang the song together." },
    B2: {
      fi: "Laulun sanat jäivät soimaan päässäni koko päiväksi.",
      en: "The song's lyrics kept playing in my head all day.",
    },
  },
  updatedAt: "2026-06-06",
};

export default laulu;
