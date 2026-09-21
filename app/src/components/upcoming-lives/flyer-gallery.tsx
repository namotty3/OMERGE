import { useCallback, useEffect, useRef, useState } from "react";

/** Flyer thumbnails that open in an in-page lightbox (no new tab), so the
 * visitor closes it and is right back where they were on the schedule. */
export function FlyerGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastOpened = useRef(0);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRefs.current[lastOpened.current]?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        const next = (i + delta + images.length) % images.length;
        lastOpened.current = next;
        return next;
      });
    },
    [images.length],
  );

  const isOpen = openIndex !== null;

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") step(-1);
      if (event.key === "ArrowRight") step(1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  return (
    <>
      <div className="mt-6 grid max-w-[520px] grid-cols-2 gap-3">
        {images.map((src, n) => (
          <button
            aria-label={`${title} フライヤー ${n + 1} を拡大表示`}
            className="block cursor-zoom-in border border-om-line/30 bg-om-panel p-1.5"
            key={src}
            onClick={() => {
              lastOpened.current = n;
              setOpenIndex(n);
            }}
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
        <div
          aria-label={`${title} フライヤー`}
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-om-bg/95 p-4"
          data-lenis-prevent=""
          onClick={close}
          role="dialog"
        >
          <img
            alt={`${title} フライヤー ${openIndex + 1}`}
            className="max-h-[calc(100svh-6rem)] max-w-full object-contain"
            onClick={(event) => event.stopPropagation()}
            src={images[openIndex]}
          />

          <button
            className="absolute right-4 top-4 border border-om-line/60 bg-om-bg px-4 py-2 font-om-en text-xs tracking-[0.2em] text-om-ink transition-colors hover:border-om-accent-bright hover:text-om-accent-bright"
            onClick={(event) => {
              event.stopPropagation();
              close();
            }}
            ref={closeRef}
            type="button"
          >
            閉じる ✕
          </button>

          {images.length > 1 ? (
            <>
              <button
                aria-label="前のフライヤー"
                className="absolute left-2 top-1/2 -translate-y-1/2 border border-om-line/60 bg-om-bg/80 px-3 py-4 text-om-ink transition-colors hover:border-om-accent-bright"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                type="button"
              >
                &lsaquo;
              </button>
              <button
                aria-label="次のフライヤー"
                className="absolute right-2 top-1/2 -translate-y-1/2 border border-om-line/60 bg-om-bg/80 px-3 py-4 text-om-ink transition-colors hover:border-om-accent-bright"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                type="button"
              >
                &rsaquo;
              </button>
            </>
          ) : null}
        </div>
      ) : null}
    </>
  );
}
