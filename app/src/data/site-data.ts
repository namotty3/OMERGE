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
};

export interface Member {
  id: string;
  part: string;
  partJa: string;
  name: string;
  symbolImage: string;
  sns: string | null;
  instagram: string | null;
}

export const members: Member[] = [
  {
    id: "shun",
    part: "Vocal",
    partJa: "Vo.",
    name: "しゅん",
    symbolImage: "/assets/members/shun.jpg",
    sns: "https://x.com/accounts_nana",
    instagram: "https://www.instagram.com/shun_hengen_sm",
  },
  {
    id: "hamoran",
    part: "Guitar",
    partJa: "Gt.",
    name: "HAMORAN",
    symbolImage: "/assets/members/hamoran.jpg",
    sns: "https://x.com/mockingbird340x",
    instagram: "https://www.instagram.com/hiroki.mg340x",
  },
  {
    id: "nana",
    part: "Bass",
    partJa: "Ba.",
    name: "那々",
    symbolImage: "/assets/members/nana.jpg",
    sns: "https://x.com/nana_bassist",
    instagram: "https://www.instagram.com/nam_crisis52",
  },
  {
    id: "sin",
    part: "Drums",
    partJa: "Dr.",
    name: "SiN",
    symbolImage: "/assets/members/sin.jpg",
    sns: null,
    instagram: "https://www.instagram.com/stand_red_cyclone",
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
    id: "mix-tape-festival",
    title: "THE MIX-TAPE FESTIVAL",
    date: "2026.11.08",
    venue: "心斎橋 PANHEAD GROOVE",
    image: "/assets/live/live-20261108.jpg",
    setlist: [
      "Adolf / PIERROT",
      "LIKE A ANGEL / 黒夢",
      "Sadistic Desire / X",
      "Ask for Eyes / Sleep My Dear",
      "JEALOUS / Dir en grey",
    ],
    photos: [
      "/assets/live-gallery/mix-tape-festival/01.jpg",
      "/assets/live-gallery/mix-tape-festival/02.jpg",
      "/assets/live-gallery/mix-tape-festival/03.jpg",
      "/assets/live-gallery/mix-tape-festival/04.jpg",
      "/assets/live-gallery/mix-tape-festival/05.jpg",
      "/assets/live-gallery/mix-tape-festival/06.jpg",
      "/assets/live-gallery/mix-tape-festival/07.jpg",
      "/assets/live-gallery/mix-tape-festival/08.jpg",
      "/assets/live-gallery/mix-tape-festival/09.jpg",
      "/assets/live-gallery/mix-tape-festival/10.jpg",
      "/assets/live-gallery/mix-tape-festival/11.jpg",
      "/assets/live-gallery/mix-tape-festival/12.jpg",
      "/assets/live-gallery/mix-tape-festival/13.jpg",
      "/assets/live-gallery/mix-tape-festival/14.jpg",
      "/assets/live-gallery/mix-tape-festival/15.jpg",
      "/assets/live-gallery/mix-tape-festival/16.jpg",
      "/assets/live-gallery/mix-tape-festival/17.jpg",
      "/assets/live-gallery/mix-tape-festival/18.jpg",
      "/assets/live-gallery/mix-tape-festival/19.jpg",
      "/assets/live-gallery/mix-tape-festival/20.jpg",
      "/assets/live-gallery/mix-tape-festival/21.jpg",
      "/assets/live-gallery/mix-tape-festival/22.jpg",
      "/assets/live-gallery/mix-tape-festival/23.jpg",
      "/assets/live-gallery/mix-tape-festival/24.jpg",
      "/assets/live-gallery/mix-tape-festival/25.jpg",
      "/assets/live-gallery/mix-tape-festival/26.jpg",
      "/assets/live-gallery/mix-tape-festival/27.jpg",
      "/assets/live-gallery/mix-tape-festival/28.jpg",
      "/assets/live-gallery/mix-tape-festival/29.jpg",
      "/assets/live-gallery/mix-tape-festival/30.jpg",
    ],
  },
  {
    id: "bar-shield-10th",
    title: "Bar SHIELD 10周年記念LIVE",
    date: "2026.09.27",
    venue: "神戸クラブ月世界",
    image: "/assets/live/live-20260927.jpg",
    setlist: [
      "火の鳥 / FANATIC◇CRISIS",
      "タッチ / Raphael",
      "MISCAST / hide",
      "With-you / La'cryma Christi",
      "ヴェル・エール〜空白の瞬間の中で〜 / MALICE MIZER",
    ],
    photos: [
      "/assets/live-gallery/bar-shield-10th/01.jpg",
      "/assets/live-gallery/bar-shield-10th/02.jpg",
      "/assets/live-gallery/bar-shield-10th/03.jpg",
      "/assets/live-gallery/bar-shield-10th/04.jpg",
      "/assets/live-gallery/bar-shield-10th/05.jpg",
      "/assets/live-gallery/bar-shield-10th/06.jpg",
      "/assets/live-gallery/bar-shield-10th/07.jpg",
      "/assets/live-gallery/bar-shield-10th/08.jpg",
      "/assets/live-gallery/bar-shield-10th/09.jpg",
      "/assets/live-gallery/bar-shield-10th/10.jpg",
      "/assets/live-gallery/bar-shield-10th/11.jpg",
      "/assets/live-gallery/bar-shield-10th/12.jpg",
      "/assets/live-gallery/bar-shield-10th/13.jpg",
      "/assets/live-gallery/bar-shield-10th/14.jpg",
      "/assets/live-gallery/bar-shield-10th/15.jpg",
      "/assets/live-gallery/bar-shield-10th/16.jpg",
      "/assets/live-gallery/bar-shield-10th/17.jpg",
      "/assets/live-gallery/bar-shield-10th/18.jpg",
      "/assets/live-gallery/bar-shield-10th/19.jpg",
      "/assets/live-gallery/bar-shield-10th/20.jpg",
      "/assets/live-gallery/bar-shield-10th/21.jpg",
      "/assets/live-gallery/bar-shield-10th/22.jpg",
      "/assets/live-gallery/bar-shield-10th/23.jpg",
      "/assets/live-gallery/bar-shield-10th/24.jpg",
      "/assets/live-gallery/bar-shield-10th/25.jpg",
      "/assets/live-gallery/bar-shield-10th/26.jpg",
      "/assets/live-gallery/bar-shield-10th/27.jpg",
      "/assets/live-gallery/bar-shield-10th/28.jpg",
      "/assets/live-gallery/bar-shield-10th/29.jpg",
      "/assets/live-gallery/bar-shield-10th/30.jpg",
      "/assets/live-gallery/bar-shield-10th/31.jpg",
      "/assets/live-gallery/bar-shield-10th/32.jpg",
    ],
  },
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
      "/assets/live-gallery/rockbar-extreme-half/07.jpg",
      "/assets/live-gallery/rockbar-extreme-half/08.jpg",
      "/assets/live-gallery/rockbar-extreme-half/09.jpg",
      "/assets/live-gallery/rockbar-extreme-half/10.jpg",
    ],
  },
];

export interface UpcomingLive {
  id: string;
  title: string;
  date: string;
  /** Details are optional so a date can be announced before anything else is
   * decided (rendered as a bare "COMING SOON" row). */
  venue?: string;
  openTime?: string;
  startTime?: string;
  ticketAdvance?: string;
  ticketDoor?: string;
  detailHref?: string;
  bandTime?: string;
  /** Flyer image paths under /public/assets/flyers/<yyyymmdd>/ (optional). */
  flyers?: string[];
}

export const upcomingLives: UpcomingLive[] = [];
