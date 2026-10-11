import { ImageLightbox, useLightbox } from "@/components/lightbox/image-lightbox";

/** Flyer thumbnails that open in an in-page lightbox (no new tab), so the
 * visitor closes it and is right back where they were on the schedule. */
export function FlyerGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const { close, open, openIndex, step, triggerRefs } = useLightbox(
    images.length,
  );

  return (
    <>
      <div className="mt-6 grid max-w-[520px] grid-cols-2 gap-3">
        {images.map((src, n) => (
          <button
            aria-label={`${title} フライヤー ${n + 1} を拡大表示`}
            className="block cursor-zoom-in border border-om-line/30 bg-om-panel p-1.5"
            key={src}
            onClick={() => open(n)}
            ref={(el) => {
              triggerRefs.current[n] = el;
            }}
            type="button"
          >
            <img
              alt=""
              className="h-auto w-full"
              loading="lazy"
              src={src}
            />
          </button>
        ))}
      </div>

      {openIndex !== null ? (
        <ImageLightbox
          images={images}
          label={`${title} フライヤー`}
          onClose={close}
          onStep={step}
          openIndex={openIndex}
        />
      ) : null}
    </>
  );
}
