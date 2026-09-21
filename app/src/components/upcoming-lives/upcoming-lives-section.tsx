import { LiveDetailStamp } from "@/components/cta/live-detail-stamp";
import { Reveal } from "@/components/reveal/reveal";
import { upcomingLives } from "@/data/site-data";

/** Structured divide-y rows; the date is shown plainly as yyyy.mm.dd. */
export function UpcomingLivesSection() {
  return (
    <section
      className="scroll-mt-20 bg-om-bg px-6 py-24 md:scroll-mt-24 md:px-12 md:py-32"
      id="schedule"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-om-heading text-4xl text-om-ink md:text-5xl">
          SCHEDULE
        </h2>

        <Reveal
          className="mt-14 divide-y divide-om-line/25 border-t border-om-line/25"
          stagger={0.1}
        >
          {upcomingLives.map((live) => {
            return (
              <div
                className="grid grid-cols-1 items-start gap-4 py-8 md:grid-cols-[11rem_1fr_auto] md:gap-10"
                data-reveal=""
                key={live.id}
              >
                <p className="font-om-display text-2xl leading-none text-om-accent-bright md:pt-1 md:text-3xl">
                  {live.date}
                </p>

                <div>
                  <h3 className="font-om-heading text-xl text-om-ink md:text-2xl">
                    {live.title}
                  </h3>
                  {live.venue ? (
                    <p className="mt-2 text-sm text-om-muted">
                      {live.venue}
                      {live.openTime && live.startTime ? (
                        <>
                          {" "}
                          &nbsp;|&nbsp; 開場 {live.openTime} / 開演 {live.startTime}
                        </>
                      ) : null}
                    </p>
                  ) : null}
                  {live.bandTime ? (
                    <p className="mt-1 text-sm text-om-accent-bright">{live.bandTime}</p>
                  ) : null}
                  {live.ticketAdvance && live.ticketDoor ? (
                    <p className="mt-1 flex items-center gap-1.5 font-om-en text-xs tracking-[0.08em] text-om-line">
                      <img alt="" aria-hidden="true" className="h-3.5 w-3.5 opacity-70" src="/assets/icons/key.png" />
                      前売 {live.ticketAdvance} / 当日 {live.ticketDoor}
                    </p>
                  ) : null}
                  {live.flyers?.length ? (
                    <div className="mt-6 grid max-w-[520px] grid-cols-2 gap-3">
                      {live.flyers.map((src, n) => (
                        <a
                          className="block border border-om-line/30 bg-om-panel p-1.5"
                          href={src}
                          key={src}
                          rel="noreferrer"
                          target="_blank"
                        >
                          <img
                            alt={`${live.title} フライヤー ${n + 1}`}
                            className="h-auto w-full"
                            loading="lazy"
                            src={src}
                          />
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>

                {live.detailHref ? (
                  <div className="md:justify-self-end">
                    <LiveDetailStamp href={live.detailHref} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
