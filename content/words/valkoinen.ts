import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 38/nainen, no gradation. Genitive
// valkoisen, partitive valkoista, illative valkoiseen, partitive pl valkoisia.
const valkoinen: Word = {
  fi: "valkoinen",
  slug: "valkoinen",
  pos: "adjektiivi (tyyppi 38/nainen)",
  posClass: "adjektiivi",
  level: "A1",
  en: "white",
  selitys:
    "Lumen ja maidon väri. Tyyppi 38, ei astevaihtelua. Taivutusvartalo valkois-: valkoisen, valkoista.",
  kuva: { emoji: "⚪", alt: "valkoinen – valkoinen väri" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 38/nainen; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "valkoisen", merkitys: "of the white" },
      { sija: "partitiivi (yks.)", muoto: "valkoista", merkitys: "white (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "valkoisia", merkitys: "white (partitive pl.)" },
    ],
    huom:
      "Loppu -nen → vartalo -is-: valkoinen → valkoisen, valkoista, valkoiset. Sama malli kuin punainen, sininen, keltainen.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "valkoinen" },
          { label: "Partitiivi", form: "valkoista" },
          { label: "Genetiivi", form: "valkoisen" },
          { label: "Inessiivi", form: "valkoisessa" },
          { label: "Illatiivi", form: "valkoiseen" },
          { label: "Adessiivi", form: "valkoisella" },
          { label: "Essiivi", form: "valkoisena" },
          { label: "Translatiivi", form: "valkoiseksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "valkoiset" },
          { label: "Partitiivi", form: "valkoisia" },
          { label: "Genetiivi", form: "valkoisten" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "valkoisempi" },
          { label: "Komparatiivi (gen.)", form: "valkoisemman" },
          { label: "Superlatiivi (nom.)", form: "valkoisin" },
          { label: "Superlatiivi (gen.)", form: "valkoisimman" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "valkoihoinen",
      en: "white-skinned",
      taso: "B2",
      esim: { fi: "Sana viittaa ihonväriin.", en: "The word refers to skin color." },
    },
    {
      fi: "valkaista",
      en: "to whiten, bleach",
      taso: "B2",
      esim: { fi: "Pyykki valkaistiin.", en: "The laundry was bleached." },
    },
    {
      fi: "lumivalkoinen",
      en: "snow-white",
      taso: "B1",
      esim: { fi: "Seinät olivat lumivalkoiset.", en: "The walls were snow-white." },
    },
  ],
  synonyymit: [
    { fi: "vaalea", en: "light, pale" },
    { fi: "kalpea", en: "pale (of skin)" },
  ],
  esimerkit: {
    A2: { fi: "Minulla on valkoinen paita.", en: "I have a white shirt." },
    B1: { fi: "Lumi peitti kaiken valkoisella.", en: "Snow covered everything in white." },
    B2: {
      fi: "Hän valitsi valkoisen seinävärin, koska se heijastaa valoa.",
      en: "She chose a white wall color because it reflects light.",
    },
  },
  updatedAt: "2026-06-04",
};

export default valkoinen;
