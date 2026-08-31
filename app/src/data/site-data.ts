/**
 * O'MERGE — single source of truth for editable site content.
 *
 * Everything a band manager would actually need to update later (bio copy,
 * member profiles, social links, live history, upcoming shows) lives in this
 * one file as plain data. No backend/CMS is wired up for this build — swap
 * the sample entries below for real ones and redeploy.
 */

export const band = {
  name: "O'MERGE",
  nameJa: "オマージュ",
  tagline: "闇に捧ぐ、様式美。",
  bio: "2023年、都内のライブハウスで結成。90年代ヴィジュアル系黄金期への敬意(オマージュ)を胸に、当時の楽曲を現代のオーディエンスに届けることを使命とするコピーバンド。過剰なまでの様式美、退廃と耽美が同居するステージングで、あの時代の熱狂を再現する。衣装も演出も一切妥協せず、一夜限りの舞台としてすべてのライブに臨んでいる。",
};

export interface Member {
  id: string;
  part: string;
  partJa: string;
  name: string;
  bio: string;
  quote: string;
  symbolImage: string;
  sns: string | null;
}

export const members: Member[] = [
  {
    id: "shun",
    part: "Vocal",
    partJa: "Vo.",
    name: "しゅん",
    bio: "感情を刃のように操る歌声で、退廃と美を描き出すフロントマン。幼少期からクラシック音楽に親しみ、その素養をヴィジュアル系の様式美に昇華させる。",
    quote: "闇の中でこそ、声は輝く。",
    symbolImage: "/assets/members/shun.jpg",
    sns: "https://x.com/accounts_nana",
  },
  {
    id: "hamoran",
    part: "Guitar",
    partJa: "Gt.",
    name: "HAMORAN",
    bio: "轟音と静寂を自在に操るギタリスト。緻密なアレンジと即興的な崩しを両立させる指使いに定評があり、楽曲の物語性を弦の一音一音に宿す。",
    quote: "弦の一音に、物語を込めて。",
    symbolImage: "/assets/members/hamoran.jpg",
    sns: "https://x.com/mockingbird340x",
  },
  {
    id: "nana",
    part: "Bass",
    partJa: "Ba.",
    name: "那々",
    bio: "重心の低いグルーヴでバンドの土台を支えるベーシスト。ステージ上では多くを語らず、静かな存在感でその音の説得力を伝える。",
    quote: "低音は、闇夜の鼓動。",
    symbolImage: "/assets/members/nana.jpg",
    sns: "https://x.com/nana_bassist",
  },
  {
    id: "sin",
    part: "Drums",
    partJa: "Dr.",
    name: "SiN",
    bio: "手数の多いドラミングと圧倒的なビジュアルでステージを支配するドラマー。テクニカルな楽曲になるほど、その真価を発揮する。",
    quote: "刻むリズムは、儀式のように。",
    symbolImage: "/assets/members/sin.jpg",
    sns: null,
  },
];

export interface SocialLink {
  id: string;
  label: string;
  handle: string;
  href: string | null;
  icon: "x" | "instagram" | "youtube" | "tiktok";
}

/**
 * Central SNS registry. `href: null` renders as a disabled "coming soon"
 * state instead of a link — fill in the URL here and it goes live everywhere
 * this array is used (nav / SNS section / footer) with no other code changes.
 */
export const socialLinks: SocialLink[] = [
  {
    id: "x",
    label: "X",
    handle: "@omerge_official",
    href: "https://x.com/omerge_official",
    icon: "x",
  },
];

export interface PastLive {
  id: string;
  title: string;
  date: string;
  venue: string;
  image: string;
  setlist: string[];
  photos: string[];
}

export const pastLives: PastLive[] = [
  {
    id: "extreme-1st-anniversary",
    title: "西中島EXTREME 1周年記念祭",
    date: "2026.04.26",
    venue: "LIVE HOUSE EXTREME(旧D.Ⅲ)",
    image: "/assets/live/live-20260426.jpg",
    setlist: [
      "QUEEN / ROUAGE",
      "惡の華 / BUCK-TICK",
      "Cureless / L'Arc〜en〜Ciel",
      "I LOVE YOU / BODY",
      "ピンクスパイダー / hide with Spread Beaver",
    ],
    photos: [
      "/assets/live-gallery/extreme-1st-anniversary/01.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/02.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/03.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/04.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/05.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/06.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/07.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/08.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/09.jpg",
      "/assets/live-gallery/extreme-1st-anniversary/10.jpg",
    ],
  },
  {
    id: "rockbar-extreme-half",
    title: "ROCKBAR EXTREME 半周年イベント",
    date: "2025.07.20",
    venue: "西中島D.Ⅲ",
    image: "/assets/live/live-20250720.jpg",
    setlist: [
      "EVE / Laputa",
      "for dear / 黒夢",
      "ENDLESS LOVE / D-SHADE",
      "不滅花 / Raphael",
      "Melty Love / SHAZNA",
    ],
    photos: [
      "/assets/live-gallery/rockbar-extreme-half/01.jpg",
      "/assets/live-gallery/rockbar-extreme-half/02.jpg",
      "/assets/live-gallery/rockbar-extreme-half/03.jpg",
      "/assets/live-gallery/rockbar-extreme-half/04.jpg",
      "/assets/live-gallery/rockbar-extreme-half/05.jpg",
      "/assets/live-gallery/rockbar-extreme-half/06.jpg",
    ],
  },
];

export interface UpcomingLive {
  id: string;
  title: string;
  date: string;
  venue: string;
  openTime: string;
  startTime: string;
  ticketAdvance: string;
  ticketDoor: string;
  detailHref: string;
  bandTime?: string;
}

export const upcomingLives: UpcomingLive[] = [
  {
    id: "bar-shield-10th",
    title: "Bar SHIELD 10周年記念LIVE",
    date: "2026.09.27",
    venue: "神戸クラブ月世界",
    openTime: "12:00",
    startTime: "12:30",
    ticketAdvance: "¥3,500+1D",
    ticketDoor: "¥3,500+1D",
    detailHref: "https://x.com/club_gessekai",
    bandTime: "O'MERGE出演 17:30〜(30分)",
  },
];
