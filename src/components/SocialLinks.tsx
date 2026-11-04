import type { IconType } from "react-icons";
import { FaBluesky, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FiFileText, FiMail } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
import type { Social, SocialIcon } from "@/data/profile";

const icons: Record<SocialIcon, IconType> = {
  email: FiMail,
  linkedin: FaLinkedin,
  github: FaGithub,
  scholar: SiGooglescholar,
  x: FaXTwitter,
  bluesky: FaBluesky,
  cv: FiFileText,
};

export function SocialLinks({ links }: { links: Social[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {links.map(({ label, href, icon }) => {
        const Icon = icons[icon];
        return (
          <li key={label}>
            <a
              href={href}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-sm text-muted transition hover:border-accent/40 hover:bg-subtle hover:text-accent motion-safe:hover:-translate-y-px"
            >
              <Icon aria-hidden className="size-3.5" />
              {label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
