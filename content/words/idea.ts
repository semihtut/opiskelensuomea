import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 12/kulkija, no gradation, stem idea-.
// Genitive idean, partitive ideaa, illative ideaan, partitive pl ideoita.
const idea: Word = {
  fi: "idea",
  slug: "idea",
  pos: "substantiivi (tyyppi 12/kulkija)",
  posClass: "substantiivi",
  level: "A2",
  en: "idea",
  selitys:
    "Uusi ajatus tai oivallus, suunnitelman alku: 'loistava idea'. Tyyppi 12, ei astevaihtelua. Partitiivin monikko ideoita. Vrt. ajatus (thought), idealismi, ideoida (to brainstorm).",
  kuva: { alt: "idea – uusi ajatus tai oivallus" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 12/kulkija; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "idean", merkitys: "of the idea" },
      { sija: "partitiivi (yks.)", muoto: "ideaa", merkitys: "idea (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "ideoita", merkitys: "ideas (partitive pl.)" },
    ],
    huom:
      "Tyyppi 12: partitiivin monikko -oita (ideoita), genetiivin monikko ideoiden. 'Saada idea' = to get an idea. Vrt. ajatus, oivallus. Lähisukulainen ajatukselle mutta korostaa uutuutta.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "idea" },
          { label: "Partitiivi", form: "ideaa" },
          { label: "Genetiivi", form: "idean" },
          { label: "Inessiivi", form: "ideassa" },
          { label: "Elatiivi", form: "ideasta" },
          { label: "Illatiivi", form: "ideaan" },
          { label: "Adessiivi", form: "idealla" },
          { label: "Ablatiivi", form: "idealta" },
          { label: "Allatiivi", form: "idealle" },
          { label: "Essiivi", form: "ideana" },
          { label: "Translatiivi", form: "ideaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "ideat" },
          { label: "Partitiivi", form: "ideoita" },
          { label: "Genetiivi", form: "ideoiden / ideoitten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "ideoida",
      en: "to brainstorm, generate ideas",
      taso: "B2",
      esim: { fi: "Ideoimme yhdessä uusia tuotteita.", en: "We brainstormed new products together." },
    },
    {
      fi: "ideapalaveri",
      en: "brainstorming meeting",
      taso: "B2",
      esim: { fi: "Pidimme ideapalaverin maanantaina.", en: "We held a brainstorming meeting on Monday." },
    },
    {
      fi: "perusidea",
      en: "basic idea, core concept",
      taso: "B1",
      esim: { fi: "Ymmärsin tekstin perusidean.", en: "I understood the basic idea of the text." },
    },
  ],
  synonyymit: [
    { fi: "ajatus", en: "thought" },
    { fi: "oivallus", en: "insight, realization" },
  ],
  esimerkit: {
    A2: { fi: "Sain hyvän idean.", en: "I got a good idea." },
    B1: { fi: "Kenen idea tämä oli?", en: "Whose idea was this?" },
    B2: {
      fi: "Parhaat ideat syntyvät usein silloin, kun et yritä keksiä mitään.",
      en: "The best ideas often arise when you're not trying to come up with anything.",
    },
  },
  updatedAt: "2026-06-06",
};

export default idea;
