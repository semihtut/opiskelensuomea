import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni (kieli), no gradation, stem äidinkiele-.
// Genitive äidinkielen, partitive äidinkieltä, partitive pl äidinkieliä.
const aidinkieli: Word = {
  fi: "äidinkieli",
  slug: "äidinkieli",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "mother tongue, native language",
  selitys:
    "Kieli, jonka ihminen oppii ensimmäisenä lapsena: 'suomi on äidinkieleni'. Myös oppiaine koulussa. Tyyppi 26/pieni, ei astevaihtelua. Yhdyssana äiti (gen. äidin) + kieli. Vrt. kieli, äiti, vieras kieli.",
  kuva: { alt: "äidinkieli – kieli jonka ihminen oppii ensimmäisenä lapsena" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua (vartalo äidinkiele-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "äidinkielen", merkitys: "of the mother tongue" },
      { sija: "partitiivi (yks.)", muoto: "äidinkieltä", merkitys: "mother tongue (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "äidinkieliä", merkitys: "mother tongues (partitive pl.)" },
    ],
    huom:
      "Tyyppi 26/pieni (kuten kieli): genetiivi -kiele-n, partitiivi -kiel-tä (konsonanttivartalo), partitiivin monikko -kieliä. Yhdyssana äidin + kieli. Vrt. kieli, vieras kieli = foreign language.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "äidinkieli" },
          { label: "Partitiivi", form: "äidinkieltä" },
          { label: "Genetiivi", form: "äidinkielen" },
          { label: "Inessiivi", form: "äidinkielessä" },
          { label: "Elatiivi", form: "äidinkielestä" },
          { label: "Illatiivi", form: "äidinkieleen" },
          { label: "Adessiivi", form: "äidinkielellä" },
          { label: "Ablatiivi", form: "äidinkieleltä" },
          { label: "Allatiivi", form: "äidinkielelle" },
          { label: "Essiivi", form: "äidinkielenä" },
          { label: "Translatiivi", form: "äidinkieleksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "äidinkielet" },
          { label: "Partitiivi", form: "äidinkieliä" },
          { label: "Genetiivi", form: "äidinkielten" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "vieras kieli",
      en: "foreign language",
      taso: "B1",
      esim: { fi: "Opiskelen kahta vierasta kieltä.", en: "I study two foreign languages." },
    },
    {
      fi: "kielitaito",
      en: "language skills",
      taso: "B1",
      esim: { fi: "Hänen kielitaitonsa on hyvä.", en: "His language skills are good." },
    },
  ],
  synonyymit: [
    { fi: "oma kieli", en: "one's own language" },
  ],
  esimerkit: {
    A2: { fi: "Mikä on äidinkielesi?", en: "What is your mother tongue?" },
    B1: { fi: "Puhun äidinkielenäni turkkia.", en: "I speak Turkish as my mother tongue." },
    B2: {
      fi: "Vieraan kielen vivahteet oppii harvoin yhtä hyvin kuin äidinkielen.",
      en: "One rarely learns the nuances of a foreign language as well as those of one's mother tongue.",
    },
  },
  updatedAt: "2026-06-07",
};

export default aidinkieli;
