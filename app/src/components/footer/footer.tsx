import { SocialIcon } from "@/components/icons/social-icon";
import { socialLinks } from "@/data/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-om-line/30 bg-om-panel px-6 py-14 text-om-muted md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div className="flex items-start gap-4">
          <img
            alt=""
            aria-hidden="true"
            className="mt-1 h-6 w-6 shrink-0 opacity-60"
            src="/assets/icons/raven.png"
          />
          <div>
            <p className="font-om-display text-lg tracking-[0.3em] text-om-ink">O'MERGE</p>
          </div>
        </div>

        <ul className="flex flex-wrap gap-5">
          {socialLinks.map((link) => (
            <li key={link.id}>
              {link.href ? (
                <a
                  aria-label={link.label}
                  className="flex h-11 w-11 items-center justify-center border border-om-line/50 text-om-muted transition-colors hover:border-om-accent-bright hover:text-om-ink"
                  href={link.href}
                  rel="me noreferrer"
                  target="_blank"
                >
                  <SocialIcon className="h-4 w-4" icon={link.icon} />
                </a>
              ) : (
                <span
                  aria-label={`${link.label} 準備中`}
                  className="flex h-11 w-11 cursor-default items-center justify-center border border-om-line/20 text-om-line/50"
                >
                  <SocialIcon className="h-4 w-4" icon={link.icon} />
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-om-line/20 pt-6 font-om-en text-xs tracking-[0.1em] text-om-line">
        &copy; {year} O'MERGE. All rights reserved.
      </div>
    </footer>
  );
}
