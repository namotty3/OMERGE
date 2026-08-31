/**
 * Scene data for the scroll-scrub journey (design-brief.md "Journey").
 *
 * Single-shot: exactly ONE entry in `scenes` — the engine maps one scene's
 * local scroll progress across the FULL duration of its one clip, so a
 * single long band is what actually plays the ~15s take through cleanly
 * end-to-end with no replay/seam artifacts. The brief's four narrative
 * beats (overture / relic / spotlight / threshold) are realized as the
 * headline + body + three tag fragments below, rather than four separate
 * bands, so the film scrubs as one true continuous take.
 *
 * Keep this array a module constant — changing its identity on every render
 * rebuilds the media controller.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#b23052",
  background: "#0d0508",
  ink: "#f2e9e4",
  muted: "#a68a90",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "overture",
    label: "OVERTURE",
    kicker: "OVERTURE",
    title: "90's、蘇演。",
    body: "90年代ヴィジュアル系黄金期への敬意(オマージュ)を胸に、当時の楽曲を現代のオーディエンスに届けることを使命とするコピーバンド。",
    tags: ["薔薇は棘とともに眠る", "光が跡を追う", "物語の幕開け"],
    clip: "/assets/world/journey.mp4",
    mobileClip: "/assets/world/journey-mobile.mp4",
    poster: "/assets/world/journey-poster.png",
    mobilePoster: "/assets/world/journey-mobile-poster.png",
    scroll: 4,
    linger: 0.12,
  },
];
