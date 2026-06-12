import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: noun "butter", Kotus type 18/maa, no gradation, stem voi-.
// Genitive voin, partitive voita, illative voihin.
const voi: Word = {
  fi: "voi",
  slug: "voi",
  pos: "substantiivi (tyyppi 18/maa)",
  posClass: "substantiivi",
  level: "A1",
  en: "butter",
  selitys:
    "Maidosta valmistettu rasva, jota käytetään leivän päällä ja ruoanlaitossa: 'voita leivän päälle'. Tyyppi 18/maa, ei astevaihtelua; partitiivi voita. (Eri sana kuin huudahdus 'voi!' ja verbi voida.) Vrt. maito, margariini, voileipä.",
  kuva: { alt: "voi – maidosta valmistettu rasva" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 18/maa; ei astevaihtelua (vartalo voi-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "voin", merkitys: "of the butter" },
      { sija: "partitiivi (yks.)", muoto: "voita", merkitys: "butter (partitive)" },
      { sija: "illatiivi (yks.)", muoto: "voihin", merkitys: "into the butter" },
    ],
    huom:
      "Tyyppi 18/maa: yksitavuinen, partitiivi voita, illatiivi voihin. Ainesana, yleensä yksikössä. ÄLÄ sekoita: voi! (huudahdus), voida (verbi). Vrt. voileipä = sandwich.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "voi" },
          { label: "Partitiivi", form: "voita" },
          { label: "Genetiivi", form: "voin" },
          { label: "Inessiivi", form: "voissa" },
          { label: "Elatiivi", form: "voista" },
          { label: "Illatiivi", form: "voihin" },
          { label: "Adessiivi", form: "voilla" },
          { label: "Ablatiivi", form: "voilta" },
          { label: "Allatiivi", form: "voille" },
          { label: "Essiivi", form: "voina" },
          { label: "Translatiivi", form: "voiksi" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "voileipä",
      en: "sandwich, open sandwich",
      taso: "A2",
      esim: { fi: "Tein voileivän aamiaiseksi.", en: "I made a sandwich for breakfast." },
    },
    {
      fi: "margariini",
      en: "margarine",
      taso: "B1",
      esim: { fi: "Käytän margariinia voin sijaan.", en: "I use margarine instead of butter." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Laita voita leivän päälle.", en: "Put some butter on the bread." },
    B1: { fi: "Paista sipulit voissa.", en: "Fry the onions in butter." },
    B2: {
      fi: "Resepti onnistuu parhaiten oikealla voilla margariinin sijaan.",
      en: "The recipe works best with real butter instead of margarine.",
    },
  },
  updatedAt: "2026-06-07",
};

export default voi;
