import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, stem vuore-.
// Genitive vuoren, partitive vuorta, illative vuoreen, partitive pl vuoria.
const vuori: Word = {
  fi: "vuori",
  slug: "vuori",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "mountain",
  selitys:
    "Korkea kallioinen maamuodostuma: 'korkea vuori'. Tyyppi 26, ei astevaihtelua, vartalo vuore-. Partitiivi vuorta. Vrt. vuoristo (mountain range), vuorikiipeily (mountaineering).",
  kuva: { emoji: "⛰️", alt: "vuori – korkea kallioinen maamuodostuma" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua (vartalo vuore-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "vuoren", merkitys: "of the mountain" },
      { sija: "partitiivi (yks.)", muoto: "vuorta", merkitys: "mountain (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "vuoria", merkitys: "mountains (partitive pl.)" },
    ],
    huom:
      "Loppu-i → vartalo -e-: vuori → vuoren. Partitiivi vuorta (ei *vuoria yksikössä). 'Kiivetä vuorelle' (allatiivi). Vrt. vuoristo = mountain range. Suomessa puhutaan usein tunturista.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "vuori" },
          { label: "Partitiivi", form: "vuorta" },
          { label: "Genetiivi", form: "vuoren" },
          { label: "Inessiivi", form: "vuoressa" },
          { label: "Elatiivi", form: "vuoresta" },
          { label: "Illatiivi", form: "vuoreen" },
          { label: "Adessiivi", form: "vuorella" },
          { label: "Ablatiivi", form: "vuorelta" },
          { label: "Allatiivi", form: "vuorelle" },
          { label: "Essiivi", form: "vuorena" },
          { label: "Translatiivi", form: "vuoreksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "vuoret" },
          { label: "Partitiivi", form: "vuoria" },
          { label: "Genetiivi", form: "vuorten / vuorien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vuoristo",
      en: "mountain range, mountains",
      taso: "B1",
      esim: { fi: "Alpit ovat korkea vuoristo.", en: "The Alps are a high mountain range." },
    },
    {
      fi: "vuorikiipeily",
      en: "mountaineering, mountain climbing",
      taso: "B2",
      esim: { fi: "Vuorikiipeily on vaarallista.", en: "Mountaineering is dangerous." },
    },
    {
      fi: "vuorenhuippu",
      en: "mountain peak, summit",
      taso: "B2",
      esim: { fi: "Saavutimme vuorenhuipun aamulla.", en: "We reached the summit in the morning." },
    },
  ],
  synonyymit: [
    { fi: "tunturi", en: "fell (Nordic mountain)" },
    { fi: "vuorenhuippu", en: "peak" },
  ],
  esimerkit: {
    A2: { fi: "Vuori on hyvin korkea.", en: "The mountain is very high." },
    B1: { fi: "Kiipesimme vuoren huipulle.", en: "We climbed to the top of the mountain." },
    B2: {
      fi: "Vuoren rinteillä kasvaa kasveja, joita ei näe muualla.",
      en: "On the mountain's slopes grow plants you don't see elsewhere.",
    },
  },
  updatedAt: "2026-06-06",
};

export default vuori;
