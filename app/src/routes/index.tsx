import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import gsap from "gsap";
import Lenis from "lenis";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";
import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { BioSection } from "@/components/bio/bio-section";
import { SnsSection } from "@/components/sns/sns-section";
import { LiveHistorySection } from "@/components/live-history/live-history-section";
import { UpcomingLivesSection } from "@/components/upcoming-lives/upcoming-lives-section";
import { JourneyCTA } from "@/components/cta/journey-cta";
import { SectionDivider } from "@/components/section-divider/section-divider";

export const Route = createFileRoute("/")({
  // No title/description here on purpose: the home page inherits the site's
  // editable page metadata from the root route (title/favicon/og), so a shared
  // link to "/" shows the owner's values. Add a `head` here only to give a
  // SPECIFIC page its own title/description.
  component: Index,
});

// The whole page opens with the journey: the scrub controller owns the
// hero's media time, while every chapter (and every section below it) stays
// server-rendered in ordinary semantic flow. Compose the site's own nav and
// bespoke CTAs around <ScrollScrub />; the engine deliberately ships no
// header, no shared button system, and no scroll hint.
function Index() {
  const scenes = useMemo(
    () =>
      scrollScrubScenes.map((scene, i) =>
        i === scrollScrubScenes.length - 1
          ? { ...scene, actions: <JourneyCTA href="#bio" /> }
          : scene,
      ),
    [],
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const lenis = new Lenis({ autoRaf: false });
    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return (
    <main id="top">
      <Nav />
      <ScrollScrub scenes={scenes} theme={scrollScrubTheme} />
      <BioSection />
      <SectionDivider icon="thorn" label="薔薇と棘" />
      <SnsSection />
      <SectionDivider icon="candle" label="灯火" />
      <LiveHistorySection />
      <SectionDivider icon="mask" label="仮面" />
      <UpcomingLivesSection />
      <Footer />
    </main>
  );
}
