import { useCallback, useEffect, useRef, useState } from "react";

/** Shared open/close/step state for an in-page image lightbox, plus the
 * trigger-button refs needed to restore focus to whichever thumbnail was
 * opened when the lightbox closes. */
export function useLightbox(length: number) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastOpened = useRef(0);

  const open = useCallback((index: number) => {
    lastOpened.current = index;
    setOpenIndex(index);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    triggerRefs.current[lastOpened.current]?.focus();
  }, []);

  const step = useCallback(
    (delta: number) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        const next = (i + delta + length) % length;
        lastOpened.current = next;
        return next;
      });
    },
    [length],
  );

  return { close, open, openIndex, step, triggerRefs };
}

/** Full-image overlay: close via the button, the backdrop, or Esc; the
 * visitor lands back at the same scroll position (no new tab, no route
 * change). Prev/next (click or arrow keys) cycle through `images`. */
export function ImageLightbox({
  images,
  openIndex,
  onClose,
  onStep,
  label,
}: {
  images: string[];
  openIndex: number;
  onClose: () => void;
  onStep: (delta: number) => void;
  label: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onStep(-1);
      if (event.key === "ArrowRight") onStep(1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onStep]);

  return (
    <div
      aria-label={label}
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-om-bg/95 p-4"
      data-lenis-prevent=""
      onClick={onClose}
      role="dialog"
    >
      <img
        alt={`${label} ${openIndex + 1}`}
        className="max-h-[calc(100svh-6rem)] max-w-full object-contain"
        onClick={(event) => event.stopPropagation()}
        src={images[openIndex]}
      />

      <button
        className="absolute right-4 top-4 border border-om-line/60 bg-om-bg px-4 py-2 font-om-en text-xs tracking-[0.2em] text-om-ink transition-colors hover:border-om-accent-bright hover:text-om-accent-bright"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        ref={closeRef}
        type="button"
      >
        閉じる ✕
      </button>

      {images.length > 1 ? (
        <>
          <button
            aria-label="前の画像"
            className="absolute left-2 top-1/2 -translate-y-1/2 border border-om-line/60 bg-om-bg/80 px-3 py-4 text-om-ink transition-colors hover:border-om-accent-bright"
            onClick={(event) => {
              event.stopPropagation();
              onStep(-1);
            }}
            type="button"
          >
            &lsaquo;
          </button>
          <button
            aria-label="次の画像"
            className="absolute right-2 top-1/2 -translate-y-1/2 border border-om-line/60 bg-om-bg/80 px-3 py-4 text-om-ink transition-colors hover:border-om-accent-bright"
            onClick={(event) => {
              event.stopPropagation();
              onStep(1);
            }}
            type="button"
          >
            &rsaquo;
          </button>
        </>
      ) : null}
    </div>
  );
}
