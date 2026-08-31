import "./cta.css";

/** Closing-chapter CTA for the scroll-scrub journey: corner brackets close
 * around the label like a viewfinder locking focus. */
export function JourneyCTA({
  href = "#bio",
  label = "物語へ",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <a className="journey-cta" href={href}>
      <span aria-hidden="true" className="journey-cta__corner journey-cta__corner--tl" />
      <span aria-hidden="true" className="journey-cta__corner journey-cta__corner--tr" />
      <span aria-hidden="true" className="journey-cta__corner journey-cta__corner--bl" />
      <span aria-hidden="true" className="journey-cta__corner journey-cta__corner--br" />
      <span className="journey-cta__label">{label}</span>
    </a>
  );
}
