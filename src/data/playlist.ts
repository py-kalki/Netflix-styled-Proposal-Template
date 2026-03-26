export interface Track {
  id: string;
  title: string;
  artist: string;
  file: string;
  emoji?: string;
}

export const PLAYLIST: Track[] = [
  {
    id: "track-1",
    title: "Hum tere tere pyaar mein",
    artist: "Lata Mangeshkar",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275874/track-01_mialtt.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "💖",
  },
  {
    id: "track-2",
    title: "Jab tu Sajan",
    artist: "Rochal Kohli",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275861/track-02_ulws6k.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "💕",
  },
  {
    id: "track-3",
    title: "Piya",
    artist: "Khwaab",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275862/track-03_blanab.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "🥰",
  },
  {
    id: "track-4",
    title: "Bairan",
    artist: "Banjaare",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275840/track-04_w9tgsb.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "❤️‍🩹",
  },
  {
    id: "track-5",
    title: "Dill tho bacchan hai",
    artist: "rahat Fateh Ali Khan",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275869/track-05_ximpvi.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "💌",
  },
  {
    id: "track-6",
    title: "Aree Jaa re Hat Natkhat",
    artist: "Asha Bhosle",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275859/track-06_fyd6zn.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "😚",
  },
  {
    id: "track-7",
    title: "Ehsaan Tera Hoga Mujhpar",
    artist: "Lata Mangeshkar",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275844/track-07_ugynrz.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "💝",
  },
  {
    id: "track-8",
    title: "Jahaan Mein Jaati hu",
    artist: "Lata Mangeshkar",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275853/track-08_x4idad.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "😺",
  },
  {
    id: "track-9",
    title: "Aajaa Piya Tohe Pyaar dunn",
    artist: "Lata Mangeshkar",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275860/track-09_xrhyak.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "🥹",
  },
  {
    id: "track-10",
    title: "Chaar Kadam",
    artist: "Shreya Ghoshal",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275877/track-10_vwtboq.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "🤗",
  },
  {
    id: "track-11",
    title: "Piya Tose Naina Laage Re",
    artist: "Lata Mangeshkar",
    file: "https://res.cloudinary.com/dadpljanb/video/upload/v1774275867/track-11_moc6vg.mp3", // <-- Replace with your Cloudinary audio link
    emoji: "👀",
  },
];

export const PLAYLIST_CONFIG = {
  defaultVolume: 0.25,
  autoAdvance: true,
  shuffle: false,
};
