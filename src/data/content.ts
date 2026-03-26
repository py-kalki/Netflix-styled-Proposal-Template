/**
 * content.ts — Single source of truth for ALL personal content.
 * No component should hardcode personal strings.
 *
 * Replace placeholder values with real ones before deploying.
 */

// ─── Site Configuration ─────────────────────────────────────────────────────
export const SITE_CONFIG = {
  herName: "Anushka",
  yourName: "Virat",
  birthdayDate: "1988-05-1",
  anniversaryDate: "2017-10-11", // Changed to April 17, 2025
  firstMetDate: "2013-01-11", // Based on your timeline

  siteTitle: "Virushka — A Perfect Love Story",
  heroTagline: "i fall in love with you , but i am falling more and more , day by day",
  siteDescription: "A piece of our memories",
  siteURL: "https://happybirthdaykittu.vercel.app",
  ogImage: "/images/og-preview.jpg",
  introSoundUrl: "/audio/intro-sound.mp3", // Sound to play on intro screen click
};

// ─── Profile Selection ──────────────────────────────────────────────────────
export const PROFILES = [
  {
    id: "Anushka",
    name: SITE_CONFIG.herName,
    emoji: "💖",
    color: "#E91E8C",
    hint: "For you, my love",
    isMain: true,
  },
  {
    id: "me",
    name: SITE_CONFIG.yourName,
    emoji: "🎬",
    color: "#E50914",
    hint: "Virat",
    isMain: false,
  },
];

// ─── Hero Banner ────────────────────────────────────────────────────────────
export const HERO = {
  backgroundImageMobile: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541238/1774540830108_efcwyg.png",
  backgroundImageDesktop: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541238/1774540798169_egyqbt.png",
  title: SITE_CONFIG.herName,
  description: "This is a world built just for you.",
  ctaPrimary: { label: "Watch Our Story", anchor: "#video" },
  ctaSecondary: { label: "Our Memories", anchor: "#memories" },
  stats: [
    { value: "LIVE", label: "Days Together" },
    { value: "∞", label: "Times I love you" },
    { value: "1", label: "Person for me" },
  ],
};

// ─── Memory Gallery Rows ────────────────────────────────────────────────────
export const MEMORY_ROWS = [
  {
    id: "beginnings",
    title: "How It All Began",
    subtitle: "The early days ✨",
    cards: [
      {
        id: "begin-1",
        title: "From this",
        date: "Muhhhaaaaaaa",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541582/54448_m9lekh.jpg",
        message: "Kitniii cutee lag rahi hai yaarr tu ismee",
        tag: "First Photo",
      },
      {
        id: "begin-2",
        title: "Sweetest Face",
        date: "mmuuuhaaaaaa",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541584/54464_gg2lrz.jpg",
        message:
          "Just looking like a white apsaraaaa",
        tag: "Nazar naa lagee🧿",
      },
      {
        id: "begin-3",
        title: "Merii Bacchiii",
        date: "hehehehe",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541584/54446_guqhlh.jpg",
        message:
          "Haayeeeeeee yeh smileeeeee",
        tag: "Thatt smileee",
      },
      {
        id: "begin-4",
        title: "To This...",
        date: "Uffff Yaarrr",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541584/54466_usqdbv.jpg",
        message:
          "Kaha se aagayii itnii khoobsurant bandi meri lifee meinnn",
        tag: "Realisation",
      },
    ],
  },
  {
    id: "adventures",
    title: "Mine Favourites",
    subtitle: "The pictures which lives inside me",
    cards: [
      {
        id: "adv-1",
        title: "Aapki zhulfe",
        date: "Haayee ye adaayein",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541583/54454_yszfba.jpg",
        message:
          "My fav hobby - Taking photos of you",
        tag: "Matching",
      },
      {
        id: "adv-2",
        title: "A rose on my Gulaab",
        date: "That Jhumka",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541584/54449_sdp77a.jpg",
        message:
          "Yeh jhumka kisne diyaaaa",
        tag: "Jhumka",
      },
      {
        id: "adv-3",
        title: "Masoom Aakhein",
        date: "Wallpaper Material",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541584/54455_tei2lm.jpg",
        message:
          "I dont know why i liked this one , but i lovee thiss",
        tag: "Muuhaaaa",
      },
      {
        id: "adv-4",
        title: "Biwi Ji",
        date: "Wify Material",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541585/54467_uhifn8.jpg",
        message:
          "This Saaree speaks alot",
        tag: "Whityyyyy",
      },
    ],
  },
  {
    id: "little-moments",
    title: "Cutie inside You",
    subtitle: "The ones I Love the most 🫶",
    cards: [
      {
        id: "little-1",
        title: "Bacchu inside her",
        date: "Lalla laaa laaa laaa",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541585/54450_dcukuf.jpg",
        message:
          "THe way she walk...",
        tag: "Bacchuu",
      },
      {
        id: "little-2",
        title: "Cutieeeeee",
        date: "Kya dikh rahi hai tuuu",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541585/54459_gd3mw7.jpg",
        message:
          "Aap apni cuteness controll kese karte hoo ??/",
        tag: "Mine",
      },
      {
        id: "little-3",
        title: "The Girl I love",
        date: "Expressions yaarrrr",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541585/54452_ze7and.jpg",
        message:
          "Bus dekhooo issee , kyaa dikh rhii haiii",
        tag: "Dancing",
      },
      {
        id: "little-4",
        title: "Rider Girl",
        date: "Aaja meri Gaadi mein beth jaa",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541585/54463_pw7gfm.jpg",
        message:
          "Side hatt jaoo, madamji driving kar rahi haiiii",
        tag: "Broom broom",
      },
    ],
  },
  {
    id: "favourites",
    title: "Us 😘",
    subtitle: "Our own universe",
    cards: [
      {
        id: "fav-1",
        title: "Bestest",
        date: "All Yours",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541586/54447_pvunsi.jpg",
        message:
          "Matching cloths is my second hobby",
        tag: "Together",
      },
      {
        id: "fav-2",
        title: "Happy Time",
        date: "Just admiring your beauty",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541586/54451_ffgbza.jpg",
        message:
          "The way you care for everyone around you makes me fall in love with you all over again.",
        tag: "Admiring",
      },
      {
        id: "fav-3",
        title: "Timepass",
        date: "Always",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541586/54462_smfvao.jpg",
        message:
          "Baccha in our heart , will never die.",
        tag: "Joy",
      },
      {
        id: "fav-4",
        title: "Chummii samay",
        date: "only you and me",
        image:
          "https://res.cloudinary.com/dadpljanb/image/upload/v1774541586/54453_yilznv.jpg",
        message:
          "Every version of you — brave, silly, gentle, Angry — I choose them all. Every single time.",
        tag: "Everything",
      },
    ],
  },
];

// ─── Timeline Events ────────────────────────────────────────────────────────
export const TIMELINE_EVENTS = [
  {
    id: "tl-1",
    date: "September 2023",
    title: "The Day We Met",
    description:
      "Knowing Eachother from a long time, but never realized that you are the one for me",
    emoji: "💫",
    isSpecial: false,
  },
  {
    id: "tl-2",
    date: "December 2024",
    title: "Living our life",
    description:
      "We were doing good , but then we started doing better after 2025",
    emoji: "🪂",
    isSpecial: false,
  },
  {
    id: "tl-3",
    date: "March 2025",
    title: "I fell Harder for You",
    description:
      "I started falling for you more and more each day",
    emoji: "🗺️",
    isSpecial: false,
  },
  {
    id: "tl-4",
    date: "April 2026",
    title: "Another Year of Us",
    description:
      "we spent a whole year together , and time was running in 5x always felt like yesterday",
     isSpecial: false,
     
  },
  {
    id: "tl-5",
    date: "Today",
    title: `Today — ${SITE_CONFIG.herName}'s Birthday`,
    description: `Happy Birthday, ${SITE_CONFIG.herName}. Today the world celebrates the best thing that ever happened to me. Every candle on your cake carries a wish I've already made — more time with you.`,
    emoji: "🎂",
    isSpecial: true,
  },
];

// ─── Video Section ──────────────────────────────────────────────────────────
export const VIDEO_SECTION = {
  title: "Our Story in Motion",
  subtitle: `A love letter to ${SITE_CONFIG.herName}, frame by frame.`,
  videoUrl: "https://res.cloudinary.com/dadpljanb/video/upload/v1774541514/Anushka_Virat_s_Wedding_Video___The_Wedding_Filmer_w1zovi.mp4",
  posterImage: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541238/1774540798169_egyqbt.png",
  duration: "3:24",
  year: "2021 — Present",
  badge: "Now Playing",
};

// ─── Love Letter ────────────────────────────────────────────────────────────
export const LOVE_LETTER = {
  salutation: `My dearest ${SITE_CONFIG.herName},`,
  paragraphs: [
    `Before you, I thought love was just a word people used when they ran out of better ones. Then you walked into my life and gave it a meaning so deep that every poem I'd ever read suddenly made sense. You didn't just enter my world — you became it.`,
    `I love the way you laugh when you think nobody's watching, the way you fight for the people you care about, and the way you make even the most ordinary Tuesday feel like a celebration. You carry an entire galaxy inside you, and I'm endlessly grateful you let me orbit your light.`,
    `There are a thousand versions of the future I've imagined, and you are in every single one. Not as a chapter, not as a footnote — but as the entire story. You are the plot twist I never saw coming and the happy ending I'll spend my whole life writing.`,
    `So today, on your birthday, I don't just want to give you a gift — I want to give you a promise. A promise that every dawn will start with your name on my lips, every sunset will end with your hand in mine, and every moment in between will be spent making sure you know just how loved you are.`,
  ],
  closing: "All of my love, always,",
  signature: SITE_CONFIG.yourName,
  postscript:
    "P.S. — Click the ♥ five times. I left you something. 🔮",
};

// ─── Love Stats ─────────────────────────────────────────────────────────────
export const LOVE_STATS = [
  { value: 365, suffix: "", label: "Days Together", emoji: "🗓️" },
  { value: 1000, suffix: "+", label: "Memories Shared", emoji: "🌍" },
  { value: 247, suffix: "", label: "Photos of Us", emoji: "📸" },
  { value: 13, suffix: "", label: "Nights Together", emoji: "✈️" },
  { value: 99, suffix: "%", label: "Heart Taken", emoji: "💘" },
  { value: 1, suffix: "", label: "Person for Me", emoji: "👑" },
];

// ─── Credits ────────────────────────────────────────────────────────────────
export const CREDITS = {
  title: "A Perfect Story",
  year: "2025 — ∞",
  roles: [
    { role: "Lead Actress & Star of My Life", name: SITE_CONFIG.herName },
    { role: "Director & Hopelessly in Love", name: SITE_CONFIG.yourName },
    { role: "Screenplay", name: "Late Night Conversations" },
    { role: "Cinematography", name: "Stolen Glances & Candid Photos" },
    { role: "Original Soundtrack", name: "Our Playlist on Loop" },
    { role: "Special Effects", name: "Butterflies, Every Single Day" },
  ],
  finalMessage: `${SITE_CONFIG.herName}, you are not just a Story , You are my whole book 💖`,
};

// ─── Floating Petals Config ─────────────────────────────────────────────────
export const PETAL_CONFIG = {
  emojis: ["🌸", "✨", "💕", "🌺", "💫"],
  count: 15,
  minSize: 12,
  maxSize: 22,
  minDuration: 4,
  maxDuration: 8,
};

// ─── Easter Eggs ────────────────────────────────────────────────────────────
export const EASTER_EGGS = {
  konamiMessage:
    "You found the secret! A perfect combination for a perfect person. 💖",
  shakeMessage: "You shook the world! Just like you shook mine. ✨",
};

// ─── Secret "For You" Page Content ──────────────────────────────────────────
export const SECRET_GALLERY = [
  {
    id: "sec-1",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541586/54469_ssvubn.jpg",
    caption: "The day I realised you were my forever.",
    date: "",
  },
  {
    id: "sec-2",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541587/54457_f0xmwi.jpg",
    caption: "Our quiet escape from the world.",
    date: "",
  },
  {
    id: "sec-3",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541586/54456_hsue9y.jpg",
    caption: "Sleepy eyes and Sunday mornings.",
    date: "",
  },
  {
    id: "sec-4",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541587/54468_klk4kv.jpg",
    caption: "Just us, holding on.",
    date: "",
  },
  {
    id: "sec-5",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541587/54461_km8x2k.jpg",
    caption: "When the sky matched how I felt inside.",
    date: "",
  },
  {
    id: "sec-6",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541591/54460_u2mjbo.jpg",
    caption: "Walking through life to your rhythm.",
    date: "",
  },
  {
    id: "sec-7",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541592/54465_gbrtvq.jpg",
    caption: "Stolen moments, etched in my heart.",
    date: "",
  },
  {
    id: "sec-8",
    url: "https://res.cloudinary.com/dadpljanb/image/upload/v1774541592/54458_qadr8t.jpg",
    caption: "You, completely unguarded. My favourite view.",
    date: "",
  },
];

export const FIFTY_REASONS = [
  "1. The way your eyes light up when you talk about something you're passionate about.",
  "2. How you somehow intuitively know exactly when I need a hug without me saying a word.",
  "3. The tiny, almost imperceptible nose scrunch you do when you're concentrating really hard.",
  "4. Your laugh—the loud, completely unguarded one that makes my entire day brighter.",
  "5. How safe and incredibly at peace I feel just sitting in silence next to you.",
  "6. The way you care for your friends—with a fierce, protective loyalty that awes me.",
  "7. Your resilience. You've walked through fire and still kept your heart overwhelmingly soft.",
  "8. How you remember the smallest, most insignificant details about the things I like.",
  "9. The gentle way your fingers trace patterns on my arm when we're watching a movie.",
  "10. Your ambition and the fire in your soul when you set your mind on a goal.",
  "11. The way your hair smells like vanilla and something entirely uniquely 'you'.",
  "12. How you challenge me to be better, not by demanding it, but by inspiring it.",
  "13. Your ridiculous, terrible jokes that somehow make me laugh harder than good ones.",
  "14. The fact that you unapologetically sing completely out of tune in the car with me.",
  "15. How fiercely independent you are, yet how willingly you share your world with me.",
  "16. The way you excitedly drag me to look at the moon or a particularly beautiful sunset.",
  "17. Your kindness to strangers, to waiters, to animals—it shows the pure gold of your heart.",
  "18. How you effortlessly fit into the spaces of my soul I didn't even know were empty.",
  "19. The way you sleep—tangled in the blankets, completely trusting and peaceful.",
  "20. Your stubbornness when you know you're right (and you usually are).",
  "21. How you make mundane things like grocery shopping feel like an absolute adventure.",
  "22. The empathy in your voice when you're listening to someone who's hurting.",
  "23. That specific, warm smile you give me from across a crowded room that says 'I see you'.",
  "24. How you always steal the covers, yet I somehow never mind being cold if you're warm.",
  "25. Your courage to be vulnerable with me with all your fears and insecurities.",
  "26. The way you completely lose track of time when you're reading a good book.",
  "27. How your hand feels perfectly constructed just to hold mine.",
  "28. The adorable little sounds you make when you're stretching in the morning.",
  "29. Your ability to find the silver lining in almost any terrible situation.",
  "30. How passionately you argue over movie plots and character arcs.",
  "31. The way you look at me like I am the only person left on earth.",
  "32. Your patience with me on my absolute worst, most difficult days.",
  "33. How you can communicate an entire paragraph to me with just one raised eyebrow.",
  "34. The feeling of home that washes over me the second I walk through the door and see you.",
  "35. Your completely unhinged sweet tooth and how excited you get over dessert.",
  "36. How deeply you love, holding nothing back, offering your whole heart.",
  "37. The way you softly hum to yourself when you're putting away laundry or cooking.",
  "38. Your absolute inability to lie to me—your face gives you away every single time.",
  "39. How you ground me when my anxiety spirals, tethering me back to reality.",
  "40. The way you fiercely believed in me before I even knew how to believe in myself.",
  "41. How seamlessly our lives merged; I can't remember what the 'before' felt like.",
  "42. Your endless curiosity about the world and how you always want to keep learning.",
  "43. The quiet, sleepy 'I love you's you murmur before drifting off.",
  "44. How you defend the people you love like a lioness.",
  "45. The way your face softens completely when you look at a stray dog.",
  "46. How you are simultaneously my safest harbor and my greatest adventure.",
  "47. The beautiful, chaotic mess you make in the kitchen when you try to bake.",
  "48. Your intellect—the way your mind works is endlessly fascinating to me.",
  "49. The simple, irrefutable fact that you chose me, out of everyone in the world.",
  "50. Because you are ${SITE_CONFIG.herName}. And loving you is the easiest, most natural thing I have ever done."
];

export const SECRET_LETTER = {
  title: "To My Forever,",
  paragraphs: [
    `I don't think I'll ever fully find the right words to explain what happened on Aprill 17, 2025. I thought it was just another day. I thought I was just meeting someone new. I had absolutely no idea that I was looking at the person who would completely rewrite the rest of my life.`,

    `Over these past few years, you haven't just been my partner; you have been my sanctuary. The world outside can be so incredibly loud, demanding, and chaotic, but the moment I am with you, everything just goes quiet. You are the deep breath my soul takes. I used to wonder if that kind of peace actually existed, or if it was just something people wrote about in movies and books. Now I know it does, because I feel it every time your hand is in mine.`,

    `I've watched you grow, watched you fight your battles, watched you triumph, and watched you heal. And with every passing day, my respect for you deepens. You are the strongest, kindest, most radiant person I have ever had the privilege of witnessing. The fact that someone as extraordinary as you looks at me the way you do... it is the greatest honor of my life. I don't know what I did right to deserve you, but I promise I will spend the rest of my days making sure you never regret choosing me.`,

    `This page is hidden because these words aren't for the world. They are just for you. A quiet corner of the internet where I can remind you that you are my favorite person, my best friend, and the absolute love of my life. As we step into another year of your life, I want you to know that my hand is glued to yours. Whatever comes next—the highs, the lows, the mundane Tuesdays, and the spectacular milestones—we face it together.`,

    `Happy Birthday, my beautiful ${SITE_CONFIG.herName}. You are my today, and you are all of my tomorrows.`,
  ],
  signoff: "Forever entirely yours,",
  signature: SITE_CONFIG.yourName
};

