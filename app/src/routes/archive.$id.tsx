import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { Nav } from "@/components/nav/nav";
import { Footer } from "@/components/footer/footer";
import { Reveal } from "@/components/reveal/reveal";
import { ImageLightbox, useLightbox } from "@/components/lightbox/image-lightbox";
import { pastLives } from "@/data/site-data";

export const Route = createFileRoute("/archive/$id")({
  loader: ({ params }) => {
    const live = pastLives.find((l) => l.id === params.id);
    if (!live) throw notFound();
    return live;
  },
  head: ({ loaderData }) =>
    loaderData
      ? { meta: [{ title: `${loaderData.title} | O'MERGE` }] }
      : {},
  component: ArchiveDetail,
});

/** Single past-live archive page: full photo set + complete setlist,
 * reached from a "夜の記録" card on the top page. */
function ArchiveDetail() {
  const live = Route.useLoaderData();
  const { close, open, openIndex, step, triggerRefs } = useLightbox(
    live.photos.length,
  );

  return (
    <main>
      <Nav />
      <section className="scroll-mt-20 bg-om-bg px-6 pb-24 pt-32 md:px-12 md:pt-40">
        <div className="mx-auto max-w-5xl">
          <Link
            className="font-om-en text-xs tracking-[0.2em] text-om-line transition-colors hover:text-om-accent-bright"
            to="/"
            hash="archive"
          >
            &larr; ARCHIVE 一覧へ戻る
          </Link>

          <p className="mt-6 font-om-en text-xs tracking-[0.2em] text-om-accent-bright">
            {live.date} &middot; {live.venue}
          </p>
          <h1 className="mt-2 font-om-heading text-4xl text-om-ink md:text-5xl">
            {live.title}
          </h1>

          <ol className="mt-8 max-w-md space-y-1.5 border-l border-om-line/50 pl-4 font-om-en text-sm text-om-muted">
            {live.setlist.map((song, i) => (
              <li key={song}>
                <span className="mr-2 text-om-accent-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {song}
              </li>
            ))}
          </ol>

          <Reveal
            className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4"
            stagger={0.05}
          >
            {live.photos.map((src, n) => (
              <button
                aria-label={`${live.title} 写真 ${n + 1} を拡大表示`}
                className="block aspect-[4/3] cursor-zoom-in overflow-hidden border border-om-line/25 bg-om-panel"
                data-reveal=""
                key={src}
                onClick={() => open(n)}
                ref={(el) => {
                  triggerRefs.current[n] = el;
                }}
                type="button"
              >
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  src={src}
                />
              </button>
            ))}
          </Reveal>
        </div>
      </section>
      <Footer />

      {openIndex !== null ? (
        <ImageLightbox
          images={live.photos}
          label={`${live.title} 写真`}
          onClose={close}
          onStep={step}
          openIndex={openIndex}
        />
      ) : null}
    </main>
  );
}
