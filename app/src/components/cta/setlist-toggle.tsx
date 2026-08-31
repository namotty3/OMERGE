import { useId, useState } from "react";

import "./cta.css";

/** Past-live card CTA: the label splits apart like torn paper to reveal the
 * full setlist beneath it, instead of a plain accordion chevron. */
export function SetlistToggle({ setlist }: { setlist: string[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div>
      <button
        aria-controls={panelId}
        aria-expanded={open}
        className="setlist-toggle"
        data-open={open}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className="setlist-toggle__row">
          <span className="setlist-toggle__half setlist-toggle__half--left">
            {open ? "閉じる" : "セットリストを"}
          </span>
          {!open && (
            <span aria-hidden="true" className="setlist-toggle__glyph">
              +
            </span>
          )}
          <span className="setlist-toggle__half setlist-toggle__half--right">
            {open ? "" : "見る"}
          </span>
        </span>
      </button>
      <div className="setlist-panel" data-open={open} id={panelId}>
        <div>
          <ol className="mt-4 space-y-1.5 border-l border-om-line/50 pl-4 font-om-en text-sm text-om-muted">
            {setlist.map((song, i) => (
              <li key={song}>
                <span className="mr-2 text-om-accent-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {song}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
