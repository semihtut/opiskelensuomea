import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 41/vieras, no gradation. Genitive sairaan,
// partitive sairasta, illative sairaaseen, partitive pl sairaita. Comp sairaampi,
// superl sairain. Works as adjective and noun (a sick person / patient).
const sairas: Word = {
  fi: "sairas",
  slug: "sairas",
  pos: "adjektiivi (tyyppi 41/vieras)",
  posClass: "adjektiivi",
  level: "A2",
  en: "sick, ill; (noun) a sick person",
  selitys:
    "Ei terve; sairauden kourissa. Tyyppi 41, ei astevaihtelua, konsonanttivartalo (sairasta). Voi olla myös substantiivi: 'sairas' = potilas.",
  kuva: { emoji: "🤒", alt: "sairas – sairas ihminen vuoteessa" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 41/vieras; ei astevaihtelua, konsonanttivartalo",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "sairaan", merkitys: "of the sick" },
      { sija: "partitiivi (yks.)", muoto: "sairasta", merkitys: "sick (partitive)" },
      { sija: "komparatiivi", muoto: "sairaampi", merkitys: "sicker" },
    ],
    huom:
      "Vokaalivartalo sairaa-: sairaan, sairaaseen, sairaita. Konsonanttivartalo näkyy partitiivissa sairasta. Vrt. olla sairaana (= be sick, essiivi).",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "sairas" },
          { label: "Partitiivi", form: "sairasta" },
          { label: "Genetiivi", form: "sairaan" },
          { label: "Inessiivi", form: "sairaassa" },
          { label: "Illatiivi", form: "sairaaseen" },
          { label: "Adessiivi", form: "sairaalla" },
          { label: "Essiivi", form: "sairaana" },
          { label: "Translatiivi", form: "sairaaksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "sairaat" },
          { label: "Partitiivi", form: "sairaita" },
          { label: "Genetiivi", form: "sairaiden" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "sairaampi" },
          { label: "Komparatiivi (gen.)", form: "sairaamman" },
          { label: "Komparatiivi (part.)", form: "sairaampaa" },
          { label: "Superlatiivi (nom.)", form: "sairain" },
          { label: "Superlatiivi (gen.)", form: "sairaimman" },
          { label: "Superlatiivi (part.)", form: "sairainta" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "sairaus",
      en: "illness, disease",
      taso: "B1",
      esim: { fi: "Sairaus kesti kaksi viikkoa.", en: "The illness lasted two weeks." },
    },
    {
      fi: "sairaala",
      en: "hospital",
      taso: "A2",
      esim: { fi: "Hänet vietiin sairaalaan.", en: "He was taken to the hospital." },
    },
    {
      fi: "sairastua",
      en: "to fall ill",
      taso: "B1",
      esim: { fi: "Sairastuin flunssaan.", en: "I came down with the flu." },
    },
  ],
  synonyymit: [
    { fi: "kipeä", en: "sick, sore (colloquial)" },
    { fi: "huonovointinen", en: "unwell" },
  ],
  esimerkit: {
    A2: { fi: "Lapsi on sairas tänään.", en: "The child is sick today." },
    B1: { fi: "Hän oli sairaana koko viikon.", en: "She was ill all week." },
    B2: {
      fi: "Mitä sairaammaksi hän tuli, sitä enemmän hän tarvitsi apua.",
      en: "The sicker he became, the more help he needed.",
    },
  },
  updatedAt: "2026-06-04",
};

export default sairas;
