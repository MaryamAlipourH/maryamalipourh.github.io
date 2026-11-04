export const siteUrl = "https://maryamalipour.io";

export type SocialIcon =
  | "email"
  | "linkedin"
  | "github"
  | "scholar"
  | "x"
  | "bluesky"
  | "cv";

export type Social = {
  label: string;
  href: string;
  icon: SocialIcon;
};

export const profile = {
  name: "Maryam AlipourHajiagha",
  shortName: "MA",
  tagline: "AI Researcher. Generative AI",
  photo: "/images/MaryamAlipour.jpg",
  socials: [
    { label: "Email", href: "mailto:maryamalipour9877@gmail.com", icon: "email" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/maryam-alipourhajiagha/",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/MaryamAlipourH/", icon: "github" },
    {
      label: "Scholar",
      href: "https://scholar.google.ca/citations?hl=en&user=TGcyNRkAAAAJ",
      icon: "scholar",
    },
    { label: "X", href: "https://x.com/MaryamAlipourH", icon: "x" },
    {
      label: "Bluesky",
      href: "https://bsky.app/profile/maryamalipourh.bsky.social",
      icon: "bluesky",
    },
    {
      label: "CV",
      href: "/data/Maryam_Alipourhajiagha_Resume_2026_05_14.pdf",
      icon: "cv",
    },
  ] satisfies Social[],
};
