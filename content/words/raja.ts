import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 9/kala, no gradation, stem raja-.
// Genitive rajan, partitive rajaa, illative rajaan, partitive pl rajoja.
const raja: Word = {
  fi: "raja",
  slug: "raja",
  pos: "substantiivi (tyyppi 9/kala)",
  posClass: "substantiivi",
  level: "A2",
  en: "border, boundary; limit",
  selitys:
    "Kahta aluetta erottava viiva tai äärimmäinen kohta: 'maan raja' / 'kärsivällisyyden raja'. Tyyppi 9, ei astevaihtelua. Partitiivin monikko rajoja (a → o). Vrt. rajoittaa (to limit), rajaton (limitless).",
  kuva: { emoji: "🚧", alt: "raja – alueita erottava viiva tai äärikohta" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 9/kala; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rajan", merkitys: "of the border" },
      { sija: "partitiivi (yks.)", muoto: "rajaa", merkitys: "border (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rajoja", merkitys: "borders (partitive pl.)" },
    ],
    huom:
      "Partitiivin monikossa a → o: rajoja. 'Ylittää raja' = to cross the border / to go too far. Vrt. rajoittaa = to limit, raja-arvo = limit value.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "raja" },
          { label: "Partitiivi", form: "rajaa" },
          { label: "Genetiivi", form: "rajan" },
          { label: "Inessiivi", form: "rajassa" },
          { label: "Elatiivi", form: "rajasta" },
          { label: "Illatiivi", form: "rajaan" },
          { label: "Adessiivi", form: "rajalla" },
          { label: "Ablatiivi", form: "rajalta" },
          { label: "Allatiivi", form: "rajalle" },
          { label: "Essiivi", form: "rajana" },
          { label: "Translatiivi", form: "rajaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rajat" },
          { label: "Partitiivi", form: "rajoja" },
          { label: "Genetiivi", form: "rajojen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rajoittaa",
      en: "to limit, restrict",
      taso: "B1",
      esim: { fi: "Nopeutta rajoitetaan koulun lähellä.", en: "Speed is restricted near the school." },
    },
    {
      fi: "rajaton",
      en: "limitless, boundless",
      taso: "B2",
      esim: { fi: "Lapsen mielikuvitus on rajaton.", en: "A child's imagination is limitless." },
    },
    {
      fi: "rajanaapuri",
      en: "neighbouring (bordering) country",
      taso: "B2",
      esim: { fi: "Ruotsi on Suomen rajanaapuri.", en: "Sweden is a bordering neighbour of Finland." },
    },
  ],
  synonyymit: [
    { fi: "raja-aita", en: "boundary, dividing line" },
    { fi: "ääriraja", en: "outer limit" },
  ],
  esimerkit: {
    A2: { fi: "Ylitimme rajan eilen.", en: "We crossed the border yesterday." },
    B1: { fi: "Kaikella on rajansa.", en: "Everything has its limits." },
    B2: {
      fi: "Hän venytti aikataulun rajoja viimeiseen asti.",
      en: "He stretched the limits of the schedule to the very end.",
    },
  },
  updatedAt: "2026-06-06",
};

export default raja;
