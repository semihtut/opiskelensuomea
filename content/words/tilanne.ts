import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, nt–nn gradation, stem tilantee-/tilanne-.
// Genitive tilanteen, partitive tilannetta, illative tilanteeseen, partitive pl tilanteita.
const tilanne: Word = {
  fi: "tilanne",
  slug: "tilanne",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "situation, circumstances",
  selitys:
    "Asioiden tila tiettynä hetkenä: 'vaikea tilanne'. Tyyppi 48, astevaihtelu nt:nn (tilanne → tilanteen). Juuri tila + -nne. Vrt. tila (state, space), asema (position).",
  kuva: { emoji: "🎬", alt: "tilanne – asioiden tila tiettynä hetkenä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; astevaihtelu nt:nn",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "tilanteen", merkitys: "of the situation" },
      { sija: "partitiivi (yks.)", muoto: "tilannetta", merkitys: "situation (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "tilanteita", merkitys: "situations (partitive pl.)" },
    ],
    huom:
      "Loppu -e, vartalo pitenee: tilanne → tilanteen. Astevaihtelu nt:nn: nominatiivi tilanne ja partitiivi tilannetta (nn), muu taivutus tilantee- (nt). Vrt. tila = state/space.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "tilanne" },
          { label: "Partitiivi", form: "tilannetta" },
          { label: "Genetiivi", form: "tilanteen" },
          { label: "Inessiivi", form: "tilanteessa" },
          { label: "Elatiivi", form: "tilanteesta" },
          { label: "Illatiivi", form: "tilanteeseen" },
          { label: "Adessiivi", form: "tilanteella" },
          { label: "Ablatiivi", form: "tilanteelta" },
          { label: "Allatiivi", form: "tilanteelle" },
          { label: "Essiivi", form: "tilanteena" },
          { label: "Translatiivi", form: "tilanteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "tilanteet" },
          { label: "Partitiivi", form: "tilanteita" },
          { label: "Genetiivi", form: "tilanteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "hätätilanne",
      en: "emergency",
      taso: "B2",
      esim: { fi: "Soita 112 hätätilanteessa.", en: "Call 112 in an emergency." },
    },
    {
      fi: "tilannekuva",
      en: "situational picture, overview",
      taso: "B2",
      esim: { fi: "Saimme selkeän tilannekuvan.", en: "We got a clear overview of the situation." },
    },
    {
      fi: "tila",
      en: "state, condition; space",
      taso: "B1",
      esim: { fi: "Potilaan tila on vakaa.", en: "The patient's condition is stable." },
    },
  ],
  synonyymit: [
    { fi: "asema", en: "position, status" },
    { fi: "olosuhteet", en: "circumstances, conditions" },
  ],
  esimerkit: {
    A2: { fi: "Tilanne on hyvä.", en: "The situation is good." },
    B1: { fi: "Tilanne muuttui nopeasti.", en: "The situation changed quickly." },
    B2: {
      fi: "Hän osaa pysyä rauhallisena vaikeissakin tilanteissa.",
      en: "She knows how to stay calm even in difficult situations.",
    },
  },
  updatedAt: "2026-06-06",
};

export default tilanne;
