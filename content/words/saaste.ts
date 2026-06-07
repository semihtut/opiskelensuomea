import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 48/hame, no gradation, stem saastee-.
// Genitive saasteen, partitive saastetta, illative saasteeseen, partitive pl saasteita.
const saaste: Word = {
  fi: "saaste",
  slug: "saaste",
  pos: "substantiivi (tyyppi 48/hame)",
  posClass: "substantiivi",
  level: "B1",
  en: "pollution, pollutant",
  selitys:
    "Ympäristöä likaava tai vahingoittava aine: 'ilman saasteet'. Tyyppi 48/hame, ei astevaihtelua; vartalo saastee-. Usein monikossa saasteet. Johdettu sanasta saastua. Vrt. saastua, saastuttaa, päästö.",
  kuva: { emoji: "🏭", alt: "saaste – ympäristöä likaava tai vahingoittava aine" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 48/hame; ei astevaihtelua (vartalo saastee-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "saasteen", merkitys: "of the pollutant" },
      { sija: "partitiivi (yks.)", muoto: "saastetta", merkitys: "pollution (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "saasteita", merkitys: "pollutants (partitive pl.)" },
    ],
    huom:
      "Tyyppi 48 (-e): nominatiivi saaste, vartalo saastee- (saasteen, saasteeseen), partitiivi saastetta. Ei astevaihtelua. Usein monikossa: saasteet = pollution. Vrt. saastua = to get polluted, päästö = emission.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "saaste" },
          { label: "Partitiivi", form: "saastetta" },
          { label: "Genetiivi", form: "saasteen" },
          { label: "Inessiivi", form: "saasteessa" },
          { label: "Elatiivi", form: "saasteesta" },
          { label: "Illatiivi", form: "saasteeseen" },
          { label: "Adessiivi", form: "saasteella" },
          { label: "Ablatiivi", form: "saasteelta" },
          { label: "Allatiivi", form: "saasteelle" },
          { label: "Essiivi", form: "saasteena" },
          { label: "Translatiivi", form: "saasteeksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "saasteet" },
          { label: "Partitiivi", form: "saasteita" },
          { label: "Genetiivi", form: "saasteiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "saastua",
      en: "to become polluted",
      taso: "B2",
      esim: { fi: "Järvi saastui tehtaan takia.", en: "The lake got polluted because of the factory." },
    },
    {
      fi: "saastuttaa",
      en: "to pollute",
      taso: "B2",
      esim: { fi: "Liikenne saastuttaa ilmaa.", en: "Traffic pollutes the air." },
    },
  ],
  synonyymit: [
    { fi: "lika", en: "dirt" },
    { fi: "päästö", en: "emission" },
  ],
  esimerkit: {
    A2: { fi: "Kaupungissa on paljon saastetta.", en: "There is a lot of pollution in the city." },
    B1: { fi: "Saasteet vahingoittavat luontoa.", en: "Pollutants harm nature." },
    B2: {
      fi: "Liikenteen saasteet heikentävät kaupunki-ilman laatua merkittävästi.",
      en: "Traffic pollution significantly worsens the quality of city air.",
    },
  },
  updatedAt: "2026-06-07",
};

export default saaste;
