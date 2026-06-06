import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt:t gradation, stem netti- ~ neti-.
// Genitive netin, partitive nettiä, illative nettiin, partitive pl nettejä.
const netti: Word = {
  fi: "netti",
  slug: "netti",
  pos: "substantiivi (tyyppi 5/risti)",
  posClass: "substantiivi",
  level: "A2",
  en: "the internet, the net",
  selitys:
    "Internet arkikielessä: 'etsiä netistä'. Tyyppi 5, astevaihtelu tt:t (netti → netin). Yleensä yksikössä. Lyhentymä sanasta internet. Vrt. internet (virallisempi), nettisivu, netissä.",
  kuva: { emoji: "🌐", alt: "netti – internet arkikielessä" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 5/risti; astevaihtelu tt:t (netti ↔ neti-)",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "netin", merkitys: "of the internet" },
      { sija: "partitiivi (yks.)", muoto: "nettiä", merkitys: "internet (partitive)" },
      { sija: "inessiivi (yks.)", muoto: "netissä", merkitys: "on the internet" },
    ],
    huom:
      "Heikossa asteessa tt → t: genetiivi netin, inessiivi netissä. Arkikielinen; virallisempi on internet. 'Netissä' = online, 'netistä' = from the net. Vrt. nettisivu = web page.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "netti" },
          { label: "Partitiivi", form: "nettiä" },
          { label: "Genetiivi", form: "netin" },
          { label: "Inessiivi", form: "netissä" },
          { label: "Elatiivi", form: "netistä" },
          { label: "Illatiivi", form: "nettiin" },
          { label: "Adessiivi", form: "netillä" },
          { label: "Ablatiivi", form: "netiltä" },
          { label: "Allatiivi", form: "netille" },
          { label: "Essiivi", form: "nettinä" },
          { label: "Translatiivi", form: "netiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "netit" },
          { label: "Partitiivi", form: "nettejä" },
          { label: "Genetiivi", form: "nettien" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "internet",
      en: "the Internet (formal)",
      taso: "A2",
      esim: { fi: "Internet on hyödyllinen työkalu.", en: "The internet is a useful tool." },
    },
    {
      fi: "nettisivu",
      en: "web page, website",
      taso: "B1",
      esim: { fi: "Kävin yrityksen nettisivulla.", en: "I visited the company's website." },
    },
    {
      fi: "nettiyhteys",
      en: "internet connection",
      taso: "B1",
      esim: { fi: "Nettiyhteys katkesi kesken.", en: "The internet connection cut out." },
    },
  ],
  synonyymit: [
    { fi: "internet", en: "the Internet" },
    { fi: "verkko", en: "the network/web" },
  ],
  esimerkit: {
    A2: { fi: "Etsin tietoa netistä.", en: "I look for information on the net." },
    B1: { fi: "Ostan vaatteet yleensä netistä.", en: "I usually buy clothes online." },
    B2: {
      fi: "Ilman nettiä monet arjen palvelut olisivat nykyään hankalia hoitaa.",
      en: "Without the internet, many everyday services would be hard to handle nowadays.",
    },
  },
  updatedAt: "2026-06-07",
};

export default netti;
