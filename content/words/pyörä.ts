import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 10/koira, no gradation, stem pyörä-.
// Genitive pyörän, partitive pyörää, illative pyörään, partitive pl pyöriä.
const pyora: Word = {
  fi: "pyörä",
  slug: "pyörä",
  pos: "substantiivi (tyyppi 10/koira)",
  posClass: "substantiivi",
  level: "A2",
  en: "wheel; bicycle (short for polkupyörä)",
  selitys:
    "Pyörivä osa tai polkupyörä: 'ajaa pyörällä'. Tyyppi 10, ei astevaihtelua. Partitiivin monikko pyöriä. Vrt. polkupyörä (bicycle), pyöriä (to spin), pyöreä (round).",
  kuva: { alt: "pyörä – pyörivä osa tai polkupyörä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 10/koira; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "pyörän", merkitys: "of the wheel/bike" },
      { sija: "partitiivi (yks.)", muoto: "pyörää", merkitys: "wheel/bike (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "pyöriä", merkitys: "wheels/bikes (partitive pl.)" },
    ],
    huom:
      "Arkikielessä 'pyörä' = polkupyörä. 'Ajaa pyörällä' = to ride a bike. Vrt. moottoripyörä = motorcycle, pyörätuoli = wheelchair, ratti = steering wheel.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "pyörä" },
          { label: "Partitiivi", form: "pyörää" },
          { label: "Genetiivi", form: "pyörän" },
          { label: "Inessiivi", form: "pyörässä" },
          { label: "Elatiivi", form: "pyörästä" },
          { label: "Illatiivi", form: "pyörään" },
          { label: "Adessiivi", form: "pyörällä" },
          { label: "Ablatiivi", form: "pyörältä" },
          { label: "Allatiivi", form: "pyörälle" },
          { label: "Essiivi", form: "pyöränä" },
          { label: "Translatiivi", form: "pyöräksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "pyörät" },
          { label: "Partitiivi", form: "pyöriä" },
          { label: "Genetiivi", form: "pyörien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "polkupyörä",
      en: "bicycle",
      taso: "A2",
      esim: { fi: "Ostin uuden polkupyörän.", en: "I bought a new bicycle." },
    },
    {
      fi: "pyöräillä",
      en: "to cycle, bike",
      taso: "B1",
      esim: { fi: "Pyöräilen töihin joka päivä.", en: "I cycle to work every day." },
    },
    {
      fi: "pyörätie",
      en: "bike path, cycle lane",
      taso: "B1",
      esim: { fi: "Aja pyörätietä pitkin.", en: "Ride along the bike path." },
    },
  ],
  synonyymit: [
    { fi: "polkupyörä", en: "bicycle" },
    { fi: "ratas", en: "wheel, cog" },
  ],
  esimerkit: {
    A2: { fi: "Menen kouluun pyörällä.", en: "I go to school by bike." },
    B1: { fi: "Pyörän takarengas on tyhjä.", en: "The bike's rear tire is flat." },
    B2: {
      fi: "Kaupunki rakensi uusia pyöräteitä keskustaan.",
      en: "The city built new bike paths in the city center.",
    },
  },
  updatedAt: "2026-06-06",
};

export default pyora;
