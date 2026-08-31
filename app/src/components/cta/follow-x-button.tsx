import { SocialIcon } from "@/components/icons/social-icon";

import "./cta.css";

/** The real X follow link: a mono readout that decodes into the handle on
 * hover, instead of a generic button fill. */
export function FollowXButton({
  href,
  handle,
  className,
}: {
  href: string;
  handle: string;
  className?: string;
}) {
  return (
    <a
      className={["follow-x", className].filter(Boolean).join(" ")}
      href={href}
      rel="me noreferrer"
      target="_blank"
    >
      <SocialIcon className="follow-x__icon" icon="x" />
      <span className="follow-x__readout">
        <span className="follow-x__label">Xでフォロー</span>
        <span aria-hidden="true" className="follow-x__handle">
          {handle}
        </span>
      </span>
    </a>
  );
}
