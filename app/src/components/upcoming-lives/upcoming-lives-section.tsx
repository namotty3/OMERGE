import { LiveDetailStamp } from "@/components/cta/live-detail-stamp";
import { Reveal } from "@/components/reveal/reveal";
import { upcomingLives } from "@/data/site-data";

function splitDate(date: string) {
  const [year, month, day] = date.split(".");
  return { year, month, day };
}

/** Swiss grid discipline: structured divide-y rows, a decorative date
 * numeral doing the hierarchy work instead of a card. */
export function UpcomingLivesSection() {
  return (
    <section
      className="scroll-mt-20 bg-om-bg px-6 py-24 md:scroll-mt-24 md:px-12 md:py-32"
      id="schedule"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-om-heading text-4xl text-om-ink md:text-5xl">
          次なる開演
        </h2>

        <Reveal
          className="mt-14 divide-y divide-om-line/25 border-t border-om-line/25"
          stagger={0.1}
        >
          {upcomingLives.map((live) => {
            const { year, month, day } = splitDate(live.date);
            return (
              <div
                className="grid grid-cols-[auto_1fr] items-center gap-6 py-8 md:grid-cols-[7rem_1fr_auto] md:gap-10"
                data-reveal=""
                key={live.id}
              >
                <div className="font-om-display leading-none text-om-accent-bright">
                  <span className="block text-4xl md:text-5xl">{day}</span>
                  <span className="block font-om-en text-xs tracking-[0.2em] text-om-line">
                    {year}.{month}
                  </span>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <h3 className="font-om-heading text-xl text-om-ink md:text-2xl">
                    {live.title}
                  </h3>
                  <p className="mt-2 text-sm text-om-muted">
                    {live.venue} &nbsp;|&nbsp; 開場 {live.openTime} / 開演 {live.startTime}
                  </p>
                  {live.bandTime ? (
                    <p className="mt-1 text-sm text-om-accent-bright">{live.bandTime}</p>
                  ) : null}
                  <p className="mt-1 flex items-center gap-1.5 font-om-en text-xs tracking-[0.08em] text-om-line">
                    <img alt="" aria-hidden="true" className="h-3.5 w-3.5 opacity-70" src="/assets/icons/key.png" />
                    前売 {live.ticketAdvance} / 当日 {live.ticketDoor}
                  </p>
                </div>

                <div className="col-span-2 md:col-span-1 md:justify-self-end">
                  <LiveDetailStamp href={live.detailHref} />
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
