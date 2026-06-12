import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 1/valo, no gradation, stem suru-.
// Genitive surun, partitive surua, illative suruun, partitive pl suruja.
const suru: Word = {
  fi: "suru",
  slug: "suru",
  pos: "substantiivi (tyyppi 1/valo)",
  posClass: "substantiivi",
  level: "A2",
  en: "sorrow, grief, sadness",
  selitys:
    "Raskas, surullinen tunne — usein menetyksestä: 'syvä suru'. Tyyppi 1, vartalo suru-, ei astevaihtelua. Vrt. surullinen (sad), surra (to grieve).",
  kuva: { alt: "suru – raskas surullinen tunne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 1/valo; ei astevaihtelua (vartalo suru-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "surun", merkitys: "of sorrow" },
      { sija: "partitiivi (yks.)", muoto: "surua", merkitys: "sorrow (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "suruja", merkitys: "sorrows (partitive pl.)" },
    ],
    huom:
      "Helppo tyypin 1 sana: suru → surun, surua, suruun. Vastakohta ilo. Vrt. surullinen = sad, surra = to mourn, osanotto = condolences.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "suru" },
          { label: "Partitiivi", form: "surua" },
          { label: "Genetiivi", form: "surun" },
          { label: "Inessiivi", form: "surussa" },
          { label: "Elatiivi", form: "surusta" },
          { label: "Illatiivi", form: "suruun" },
          { label: "Adessiivi", form: "surulla" },
          { label: "Ablatiivi", form: "surulta" },
          { label: "Allatiivi", form: "surulle" },
          { label: "Essiivi", form: "suruna" },
          { label: "Translatiivi", form: "suruksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "surut" },
          { label: "Partitiivi", form: "suruja" },
          { label: "Genetiivi", form: "surujen" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "surullinen",
      en: "sad",
      taso: "A2",
      esim: { fi: "Elokuva oli hyvin surullinen.", en: "The movie was very sad." },
    },
    {
      fi: "surra",
      en: "to grieve, mourn",
      taso: "B2",
      esim: { fi: "He surevat isoäidin kuolemaa.", en: "They are mourning the grandmother's death." },
    },
    {
      fi: "surullisesti",
      en: "sadly",
      taso: "B1",
      esim: { fi: "Hän hymyili surullisesti.", en: "She smiled sadly." },
    },
  ],
  synonyymit: [
    { fi: "murhe", en: "grief, worry" },
    { fi: "kaipaus", en: "longing, yearning" },
  ],
  esimerkit: {
    A2: { fi: "Tunnen suurta surua.", en: "I feel great sorrow." },
    B1: { fi: "Suru hellitti vähitellen.", en: "The grief eased gradually." },
    B2: {
      fi: "Ilo ja suru kulkevat usein käsi kädessä.",
      en: "Joy and sorrow often go hand in hand.",
    },
  },
  updatedAt: "2026-06-06",
};

export default suru;
