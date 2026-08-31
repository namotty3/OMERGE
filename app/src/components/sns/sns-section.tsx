import { FollowXButton } from "@/components/cta/follow-x-button";
import { SocialIcon } from "@/components/icons/social-icon";
import { Reveal } from "@/components/reveal/reveal";
import { socialLinks } from "@/data/site-data";

/** Banner-strip section: a full-bleed black-rose macro photograph is the
 * page's one "second-read moment" (design-brief.md). Symmetric centered
 * composition, real X link plus three honestly-disabled placeholders. */
export function SnsSection() {
  const x = socialLinks.find((link) => link.id === "x");
  const rest = socialLinks.filter((link) => link.id !== "x");

  return (
    <section
      className="relative scroll-mt-20 overflow-hidden bg-om-bg py-24 md:scroll-mt-24 md:py-32"
      id="sns"
    >
      <img
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        loading="lazy"
        src="/assets/textures/macro-rose.jpg"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-om-bg via-om-bg/70 to-om-bg"
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        <h2 className="font-om-heading text-4xl text-om-ink md:text-5xl" data-reveal="">
          楽屋の扉、開く。
        </h2>
        <p className="max-w-[42ch] text-sm leading-relaxed text-om-muted" data-reveal="">
          舞台裏の素顔や最新情報は各SNSで発信中。まずはXをフォローして、次の幕を見届けてほしい。
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4" data-reveal="">
          {x?.href ? <FollowXButton handle={x.handle} href={x.href} /> : null}

          {rest.map((link) => (
            <span
              aria-label={`${link.label} 準備中`}
              className="flex items-center gap-2 border border-dashed border-om-line/40 px-4 py-3 text-om-line"
              key={link.id}
            >
              <SocialIcon className="h-4 w-4" icon={link.icon} />
              <span className="font-om-en text-xs tracking-[0.15em]">
                {link.label}・{link.handle}
              </span>
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
