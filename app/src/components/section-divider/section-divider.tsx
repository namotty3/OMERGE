/** Vertical rhythm line between sections (design-brief.md signature
 * component #2), centered on one glyph from the generated icon set. */
export function SectionDivider({
  icon,
  label,
}: {
  icon: "rose" | "candle" | "thorn" | "cross" | "raven" | "mask" | "seal" | "key";
  label: string;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-20 items-center justify-center bg-om-bg md:h-24"
    >
      <span className="absolute top-0 h-1/2 w-px bg-om-line/30" />
      <span className="absolute bottom-0 h-1/2 w-px bg-om-line/30" />
      <img
        alt=""
        className="relative h-7 w-7 opacity-70 md:h-8 md:w-8"
        loading="lazy"
        src={`/assets/icons/${icon}.png`}
        title={label}
      />
    </div>
  );
}
