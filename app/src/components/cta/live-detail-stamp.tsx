import "./cta.css";

/** Upcoming-live row CTA: a wax-seal button that physically imprints on
 * `:active` (skew + scale), not a flat pill. */
export function LiveDetailStamp({
  href,
  label = "詳細",
}: {
  href: string;
  label?: string;
}) {
  return (
    <a className="live-stamp" href={href} rel="noreferrer" target="_blank">
      <span aria-hidden="true" className="live-stamp__seal">
        <img alt="" src="/assets/icons/seal.png" />
      </span>
      {label}
    </a>
  );
}
