import { Reveal } from "@/components/reveal/reveal";
import { SocialIcon } from "@/components/icons/social-icon";
import { band, members } from "@/data/site-data";

const ARCH_CLIP = "polygon(0% 100%, 0% 32%, 50% 0%, 100% 32%, 100% 100%)";

/** Off-grid editorial band statement + an asymmetric 2x2 member grid, each
 * portrait cropped into an angular gothic-arch frame (design-brief.md
 * "layered image crop frames"). The eyebrow here is the site's 2nd of 2. */
export function BioSection() {
  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-om-bg px-6 py-24 md:scroll-mt-24 md:px-12 md:py-32"
      id="bio"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/assets/textures/velvet-damask.png')] bg-[length:640px_640px] opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="flex items-center gap-2 font-om-en text-xs tracking-[0.35em] text-om-accent-bright">
              <img alt="" aria-hidden="true" className="h-3.5 w-3.5 opacity-80" src="/assets/icons/rose.png" />
              PROFILE
            </p>
            <h2 className="mt-4 font-om-heading text-4xl leading-[1.15] text-om-ink md:text-5xl">
              闇に咲く、
              <br />
              四つの調べ。
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 md:pt-14">
            <p className="max-w-[46ch] text-base leading-loose text-om-muted">
              {band.bio}
            </p>
          </div>
        </div>

        <Reveal className="mt-20" stagger={0.12}>
        <ul className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
          {members.map((member, i) => (
            <li
              className={i % 2 === 1 ? "sm:mt-16" : undefined}
              data-reveal=""
              key={member.id}
            >
              <div
                className="aspect-[4/5] w-full max-w-[280px] overflow-hidden bg-om-panel"
                style={{ clipPath: ARCH_CLIP }}
              >
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  src={member.symbolImage}
                />
              </div>
              <div className="mt-5">
                <p className="font-om-en text-xs tracking-[0.25em] text-om-accent-bright">
                  {member.partJa} {member.part}
                </p>
                <h3 className="mt-1.5 font-om-heading text-2xl text-om-ink">
                  {member.name}
                </h3>
                <p className="mt-3 max-w-[32ch] text-sm leading-relaxed text-om-muted">
                  {member.bio}
                </p>
                <p className="mt-3 font-om-en text-sm italic text-om-line">
                  &ldquo;{member.quote}&rdquo;
                </p>
                {member.sns ? (
                  <a
                    className="mt-3 inline-flex items-center gap-1.5 text-xs tracking-[0.15em] text-om-muted transition-colors hover:text-om-accent-bright"
                    href={member.sns}
                    rel="me noreferrer"
                    target="_blank"
                  >
                    <SocialIcon className="h-3 w-3" icon="x" />
                    {member.sns.replace("https://x.com/", "@")}
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
        </Reveal>
      </div>
    </section>
  );
}
