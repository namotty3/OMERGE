import { siInstagram, siTiktok, siX, siYoutube } from "simple-icons";

const PATHS: Record<"x" | "instagram" | "youtube" | "tiktok", string> = {
  x: siX.path,
  instagram: siInstagram.path,
  youtube: siYoutube.path,
  tiktok: siTiktok.path,
};

export function SocialIcon({
  icon,
  className,
}: {
  icon: "x" | "instagram" | "youtube" | "tiktok";
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      role="img"
      viewBox="0 0 24 24"
    >
      <path d={PATHS[icon]} />
    </svg>
  );
}
