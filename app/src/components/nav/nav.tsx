import { socialLinks } from "@/data/site-data";

import "../cta/cta.css";

const SECTIONS = [
  { href: "#bio", label: "BIO" },
  { href: "#sns", label: "SNS" },
  { href: "#archive", label: "ARCHIVE" },
  { href: "#schedule", label: "SCHEDULE" },
];

export function Nav() {
  const x = socialLinks.find((link) => link.id === "x");

  return (
    <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between gap-4 bg-gradient-to-b from-om-bg/85 via-om-bg/40 to-transparent px-4 md:h-20 md:px-8">
      <a
        className="flex items-center text-om-ink"
        href="#top"
        aria-label="O'MERGE トップへ"
      >
        <img alt="O'MERGE" className="h-6 w-auto md:h-7" src="/assets/brand/logo-wordmark.png" />
      </a>

      <nav
        aria-label="サイト内ナビゲーション"
        className="flex items-center gap-5 overflow-x-auto md:gap-8"
      >
        {SECTIONS.map((s) => (
          <a className="nav-link shrink-0" href={s.href} key={s.href}>
            {s.label}
          </a>
        ))}
        {x?.href ? (
          <a
            className="nav-link shrink-0"
            href={x.href}
            rel="me noreferrer"
            target="_blank"
          >
            X
          </a>
        ) : null}
      </nav>
    </header>
  );
}
