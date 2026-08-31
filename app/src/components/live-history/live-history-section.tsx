import { SetlistToggle } from "@/components/cta/setlist-toggle";
import { Reveal } from "@/components/reveal/reveal";
import { pastLives } from "@/data/site-data";

/** Poster-stacked storytelling: past shows as slightly offset, rotated
 * flyer cards (design-brief.md "turning polaroid arc" variant). */
export function LiveHistorySection() {
  return (
    <section
      className="relative scroll-mt-20 bg-om-panel px-6 py-24 md:scroll-mt-24 md:px-12 md:py-32"
      id="archive"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-[16ch] font-om-heading text-4xl text-om-ink md:text-5xl">
          夜の記録
        </h2>
        <p className="mt-4 max-w-[48ch] text-sm leading-relaxed text-om-muted">
          幕が下りた夜も、物語は紙の上に残る。これまでの公演の記録。
        </p>

        <Reveal className="mt-16 grid gap-16 sm:grid-cols-2" stagger={0.15}>
          {pastLives.map((live, i) => (
            <article
              className={
                i % 2 === 1
                  ? "sm:mt-14 sm:-rotate-1"
                  : "sm:rotate-1"
              }
              data-reveal=""
              key={live.id}
            >
              <div className="border border-om-line/30 bg-om-bg p-3 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.6)]">
                <img
                  alt=""
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                  src={live.image}
                />
                <div className="p-4">
                  <p className="font-om-en text-xs tracking-[0.2em] text-om-accent-bright">
                    {live.date} &middot; {live.venue}
                  </p>
                  <h3 className="mt-2 font-om-heading text-xl text-om-ink">
                    {live.title}
                  </h3>
                  <div className="mt-5">
                    <SetlistToggle setlist={live.setlist} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
