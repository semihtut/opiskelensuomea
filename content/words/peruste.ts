import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem perustee-.
// Genitive perusteen, partitive perustetta, illative perusteeseen, partitive pl perusteita.
const peruste: Word = {
  fi: "peruste",
  slug: "peruste",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "grounds, reason, basis",
  selitys:
    "Syy tai perustelu, jonka nojalla jotakin tehdään: 'millä perusteella?'. Tyyppi 48/hame, ei astevaihtelua; vartalo perustee-. Johdettu verbistä perustaa/perustella. Vrt. perustella, perustelu, perusteltu.",
  kuva: { alt: "peruste – syy tai perustelu jonka nojalla toimitaan" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo perustee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "perusteen", merkitys: "of the grounds" },
      { sija: "partitiivi (yks.)", muoto: "perustetta", merkitys: "grounds (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "perusteita", merkitys: "grounds (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e): nominatiivi peruste, vartalo perustee- (perusteen, perusteeseen), partitiivi perustetta. Ei astevaihtelua. 'Millä perusteella?' = on what grounds?; 'perusteella' = on the basis of. Vrt. perustella = to justify.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "peruste" },
          { label: "Partitiivi", form: "perustetta" },
          { label: "Genetiivi", form: "perusteen" },
          { label: "Inessiivi", form: "perusteessa" },
          { label: "Elatiivi", form: "perusteesta" },
          { label: "Illatiivi", form: "perusteeseen" },
          { label: "Adessiivi", form: "perusteella" },
          { label: "Ablatiivi", form: "perusteelta" },
          { label: "Allatiivi", form: "perusteelle" },
          { label: "Essiivi", form: "perusteena" },
          { label: "Translatiivi", form: "perusteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "perusteet" },
          { label: "Partitiivi", form: "perusteita" },
          { label: "Genetiivi", form: "perusteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "perustella",
      en: "to justify, give reasons",
      taso: "B1",
      esim: { fi: "Perustele päätöksesi.", en: "Justify your decision." },
    },
    {
      fi: "perusteeton",
      en: "unfounded, groundless",
      taso: "B2",
      esim: { fi: "Syytös oli perusteeton.", en: "The accusation was groundless." },
    },
  ],
  synonyymit: [
    { fi: "syy", en: "reason" },
    { fi: "perustelu", en: "justification" },
  ],
  esimerkit: {
    A2: { fi: "Millä perusteella valitsit tämän?", en: "On what basis did you choose this?" },
    B1: { fi: "Päätös tehtiin taloudellisin perustein.", en: "The decision was made on economic grounds." },
    B2: {
      fi: "Hakemus hylättiin muodollisin perustein, ei sisällön takia.",
      en: "The application was rejected on formal grounds, not because of its content.",
    },
  },
  updatedAt: "2026-06-07",
};

export default peruste;
