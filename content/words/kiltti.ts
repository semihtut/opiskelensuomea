import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 5/risti, tt–t gradation, stem kiltti-/kilti-.
// Genitive kiltin, partitive kilttiä, illative kilttiin, partitive pl kilttejä.
const kiltti: Word = {
  fi: "kiltti",
  slug: "kiltti",
  pos: "adjektiivi (tyyppi 5/risti)",
  posClass: "adjektiivi",
  level: "A2",
  en: "kind, nice, good (well-behaved)",
  selitys:
    "Hyväntahtoinen ja tottelevainen: 'kiltti lapsi'. Tyyppi 5, astevaihtelu tt:t (kiltti → kiltin). Vrt. ystävällinen (friendly). Lapsista: hyvin käyttäytyvä.",
  kuva: { alt: "kiltti – hyväntahtoinen ja tottelevainen" },

  kielioppi: {
    tyyppi: "adjektiivi, tyyppi 5/risti; astevaihtelu tt:t",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "kiltin", merkitys: "of the kind one" },
      { sija: "partitiivi (yks.)", muoto: "kilttiä", merkitys: "kind (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "kilttejä", merkitys: "kind (partitive pl.)" },
    ],
    huom:
      "Astevaihtelu tt:t: kiltin, kiltissä (heikko), mutta kiltti, kilttiä, kiltteinä (vahva). Lapsille usein: 'Ole kiltti!' = Be good! / Please. Vrt. kiltteys = kindness.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (perusaste)",
        rows: [
          { label: "Nominatiivi", form: "kiltti" },
          { label: "Partitiivi", form: "kilttiä" },
          { label: "Genetiivi", form: "kiltin" },
          { label: "Inessiivi", form: "kiltissä" },
          { label: "Illatiivi", form: "kilttiin" },
          { label: "Adessiivi", form: "kiltillä" },
          { label: "Essiivi", form: "kilttinä" },
          { label: "Translatiivi", form: "kiltiksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "kiltit" },
          { label: "Partitiivi", form: "kilttejä" },
          { label: "Genetiivi", form: "kilttien" },
        ],
      },
      {
        title: "Vertailu (säännöllinen)",
        rows: [
          { label: "Komparatiivi (nom.)", form: "kiltimpi" },
          { label: "Komparatiivi (gen.)", form: "kiltimmän" },
          { label: "Superlatiivi (nom.)", form: "kiltein" },
          { label: "Superlatiivi (gen.)", form: "kilteimmän" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "kiltteys",
      en: "kindness, niceness",
      taso: "B2",
      esim: { fi: "Hänen kiltteytensä yllätti minut.", en: "His kindness surprised me." },
    },
    {
      fi: "kiltisti",
      en: "nicely, obediently",
      taso: "B1",
      esim: { fi: "Lapset leikkivät kiltisti.", en: "The children played nicely." },
    },
    {
      fi: "ole kiltti",
      en: "please (lit. be kind)",
      taso: "A2",
      esim: { fi: "Ole kiltti ja auta minua.", en: "Please help me." },
    },
  ],
  synonyymit: [
    { fi: "ystävällinen", en: "friendly" },
    { fi: "hyväsydäminen", en: "kind-hearted" },
  ],
  esimerkit: {
    A2: { fi: "Hän on todella kiltti.", en: "She is really kind." },
    B1: { fi: "Kiltit lapset auttoivat siivoamaan.", en: "The good children helped clean up." },
    B2: {
      fi: "Älä ole liian kiltti — sinun on myös osattava sanoa ei.",
      en: "Don't be too nice — you also need to be able to say no.",
    },
  },
  updatedAt: "2026-06-06",
};

export default kiltti;
