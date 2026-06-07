import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 26/pieni, no gradation, stem puole-.
// Genitive puolen, partitive puolta, illative puoleen, partitive pl puolia.
const puoli: Word = {
  fi: "puoli",
  slug: "puoli",
  pos: "substantiivi (tyyppi 26/pieni)",
  posClass: "substantiivi",
  level: "A2",
  en: "half; side",
  selitys:
    "1) Toinen kahdesta yhtä suuresta osasta: 'puoli omenaa'. 2) Sivu tai puoli asiasta: 'toinen puoli'. Tyyppi 26/pieni, ei astevaihtelua; partitiivi puolta. Kellossa 'puoli seitsemän' = 6.30. Vrt. osa, puolet, kumpikin.",
  kuva: { emoji: "◐", alt: "puoli – toinen kahdesta yhtä suuresta osasta tai asian sivu" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 26/pieni; ei astevaihtelua (vartalo puole-, konsonanttivartalo puol-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "puolen", merkitys: "of the half" },
      { sija: "partitiivi (yks.)", muoto: "puolta", merkitys: "half (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "puolia", merkitys: "sides (partitive pl.)" },
    ],
    huom:
      "Tyyppi 26/pieni: vokaalivartalo puole- (puolen, puolella), mutta partitiivi käyttää konsonanttivartaloa puol- → puolta. Monikko puolet = both halves. 'Puoli seitsemän' = 6.30. Vrt. osa, kumpikin.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "puoli" },
          { label: "Partitiivi", form: "puolta" },
          { label: "Genetiivi", form: "puolen" },
          { label: "Inessiivi", form: "puolessa" },
          { label: "Elatiivi", form: "puolesta" },
          { label: "Illatiivi", form: "puoleen" },
          { label: "Adessiivi", form: "puolella" },
          { label: "Ablatiivi", form: "puolelta" },
          { label: "Allatiivi", form: "puolelle" },
          { label: "Essiivi", form: "puolena" },
          { label: "Translatiivi", form: "puoleksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "puolet" },
          { label: "Partitiivi", form: "puolia" },
          { label: "Genetiivi", form: "puolien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "puolet",
      en: "half (of), the halves",
      taso: "B1",
      esim: { fi: "Puolet rahasta on käytetty.", en: "Half of the money has been spent." },
    },
    {
      fi: "puolisko",
      en: "half (one of two parts)",
      taso: "B2",
      esim: { fi: "Leikkasin omenan kahteen puoliskoon.", en: "I cut the apple into two halves." },
    },
  ],
  synonyymit: [],
  esimerkit: {
    A2: { fi: "Otan puolet leivästä.", en: "I'll take half of the bread." },
    B1: { fi: "Asia on hyvä, mutta sillä on kaksi puolta.", en: "The matter is good, but it has two sides." },
    B2: {
      fi: "Kumpikin puoli esitti omat näkemyksensä neuvottelussa.",
      en: "Each side presented its own views in the negotiation.",
    },
  },
  updatedAt: "2026-06-07",
};

export default puoli;
