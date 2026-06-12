import type { Word } from "@/lib/content-types";

// Verified against Wiktionary: Kotus type 3/valtio, no gradation, stem video-.
// Genitive videon, partitive videota, illative videoon, partitive pl videoita.
const video: Word = {
  fi: "video",
  slug: "video",
  pos: "substantiivi (tyyppi 3/valtio)",
  posClass: "substantiivi",
  level: "A2",
  en: "video",
  selitys:
    "Liikkuva kuva ja sen tallenne: 'katsoa video'. Tyyppi 3, ei astevaihtelua. Partitiivi videota, partitiivin monikko videoita. Vrt. videoida, videopuhelu, videokamera.",
  kuva: { alt: "video – liikkuva kuva ja sen tallenne" },

  kielioppi: {
    tyyppi: "substantiivi, tyyppi 3/valtio; ei astevaihtelua",
    muodot: [
      { sija: "genetiivi (yks.)", muoto: "videon", merkitys: "of the video" },
      { sija: "partitiivi (yks.)", muoto: "videota", merkitys: "video (partitive)" },
      { sija: "partitiivi (mon.)", muoto: "videoita", merkitys: "videos (partitive pl.)" },
    ],
    huom:
      "Tyyppi 3: partitiivi -ota (videota), partitiivin monikko -oita (videoita). 'Katsoa videota' = to watch a video. Vrt. videopuhelu = video call, videoida = to film.",
  },
  taivutus: {
    sections: [
      {
        title: "Yksikkö (sijat)",
        rows: [
          { label: "Nominatiivi", form: "video" },
          { label: "Partitiivi", form: "videota" },
          { label: "Genetiivi", form: "videon" },
          { label: "Inessiivi", form: "videossa" },
          { label: "Elatiivi", form: "videosta" },
          { label: "Illatiivi", form: "videoon" },
          { label: "Adessiivi", form: "videolla" },
          { label: "Ablatiivi", form: "videolta" },
          { label: "Allatiivi", form: "videolle" },
          { label: "Essiivi", form: "videona" },
          { label: "Translatiivi", form: "videoksi" },
        ],
      },
      {
        title: "Monikko (avainmuodot)",
        rows: [
          { label: "Nominatiivi", form: "videot" },
          { label: "Partitiivi", form: "videoita" },
          { label: "Genetiivi", form: "videoiden" },
        ],
      },
    ],
  },
  johdokset: [
    {
      fi: "videopuhelu",
      en: "video call",
      taso: "B1",
      esim: { fi: "Soitimme videopuhelun mummolle.", en: "We made a video call to grandma." },
    },
    {
      fi: "videoida",
      en: "to film, record video",
      taso: "B2",
      esim: { fi: "Videoin lasten esityksen.", en: "I filmed the children's performance." },
    },
    {
      fi: "musiikkivideo",
      en: "music video",
      taso: "B1",
      esim: { fi: "Bändi julkaisi uuden musiikkivideon.", en: "The band released a new music video." },
    },
  ],
  synonyymit: [
    { fi: "videotallenne", en: "video recording" },
    { fi: "klippi", en: "clip" },
  ],
  esimerkit: {
    A2: { fi: "Katson videoita netistä.", en: "I watch videos online." },
    B1: { fi: "Hän kuvasi videon matkasta.", en: "He filmed a video of the trip." },
    B2: {
      fi: "Lyhyt video voi joskus opettaa enemmän kuin pitkä teksti.",
      en: "A short video can sometimes teach more than a long text.",
    },
  },
  updatedAt: "2026-06-07",
};

export default video;
