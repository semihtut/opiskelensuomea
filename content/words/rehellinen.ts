import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation, stem rehellise-.
// Genitive rehellisen, partitive rehellistä, illative rehelliseen, partitive pl rehellisiä.
const rehellinen: Word = {
  fi: "rehellinen",
  slug: "rehellinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "B1",
  en: "honest, truthful",
  selitys:
    "Totta puhuva ja luotettava: 'rehellinen vastaus'. Tyyppi 38, ei astevaihtelua. Vrt. rehellisyys (honesty). Vastakohta epärehellinen, valehteleva.",
  kuva: { emoji: "🫱", alt: "rehellinen – totta puhuva ja luotettava" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "rehellisen", merkitys: "of the honest" },
      { sija: "partitiivi (yks.)", muoto: "rehellistä", merkitys: "honest (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "rehellisiä", merkitys: "honest (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -se-: rehellinen → rehellisen, rehellistä. 'Olla rehellinen jollekin.' Vrt. rehellisesti sanottuna = honestly speaking, rehti = fair/upright.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "rehellinen" },
          { label: "Partitiivi", form: "rehellistä" },
          { label: "Genetiivi", form: "rehellisen" },
          { label: "Inessiivi", form: "rehellisessä" },
          { label: "Illatiivi", form: "rehelliseen" },
          { label: "Adessiivi", form: "rehellisellä" },
          { label: "Essiivi", form: "rehellisenä" },
          { label: "Translatiivi", form: "rehelliseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "rehelliset" },
          { label: "Partitiivi", form: "rehellisiä" },
          { label: "Genetiivi", form: "rehellisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "rehellisempi" },
          { label: "Komparatiivi (gen.)", form: "rehellisemmän" },
          { label: "Superlatiivi (nom.)", form: "rehellisin" },
          { label: "Superlatiivi (gen.)", form: "rehellisimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "rehellisyys",
      en: "honesty",
      taso: "B1",
      esim: { fi: "Rehellisyys on paras tapa.", en: "Honesty is the best policy." },
    },
    {
      fi: "rehellisesti",
      en: "honestly",
      taso: "B1",
      esim: { fi: "Kerro rehellisesti, mitä tapahtui.", en: "Tell honestly what happened." },
    },
    {
      fi: "epärehellinen",
      en: "dishonest",
      taso: "B2",
      esim: { fi: "Se oli epärehellinen teko.", en: "It was a dishonest act." },
    },
  ],
  synonyymit: [
    { fi: "vilpitön", en: "sincere, honest" },
    { fi: "luotettava", en: "reliable, trustworthy" },
  ],
  esimerkit: {
    A2: { fi: "Ole rehellinen minulle.", en: "Be honest with me." },
    B1: { fi: "Arvostan rehellistä palautetta.", en: "I value honest feedback." },
    B2: {
      fi: "Rehellisen ihmisen ei tarvitse muistaa, mitä on sanonut.",
      en: "An honest person doesn't need to remember what they've said.",
    },
  },
  updatedAt: "2026-06-06",
};

export default rehellinen;
