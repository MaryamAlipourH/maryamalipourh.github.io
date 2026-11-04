export type Author = {
  name: string;
  url?: string;
  /** Set on your own name so it is highlighted. */
  me?: boolean;
};

export type Publication = {
  title: string;
  /** Where the title links to (usually the paper). */
  url?: string;
  authors: Author[];
  venue: string;
  /** Path under /public, e.g. "/images/my-figure.jpg". */
  image?: string;
  links?: { label: string; url: string }[];
  summary: string;
};

const me: Author = { name: "Maryam AlipourHajiagha", me: true };
const julieCarreau: Author = {
  name: "Julie Carreau",
  url: "https://scholar.google.com/citations?user=cLeWQKsAAAAJ&hl=en",
};

// Newest first. To add a paper, copy an entry and edit it.
export const publications: Publication[] = [
  {
    title: "A Probabilistic U-Net Approach to Downscaling Climate Simulations",
    url: "https://arxiv.org/abs/2511.03197",
    authors: [
      me,
      { name: "Pierre-Louis Lemaire", url: "https://pierrelouislemaire.github.io/" },
      {
        name: "Youssef Diouane",
        url: "https://www.polymtl.ca/expertises/en/diouane-youssef/",
      },
      julieCarreau,
    ],
    venue: "NeurIPS 2025 AI4Science",
    image: "/images/prob_net_pic.jpg",
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2511.03197" },
      {
        label: "Code",
        url: "https://github.com/MaryamAlipourH/prob-unet-climate-downscaling",
      },
    ],
    summary:
      "A Probabilistic U-Net to downscale climate data and compare different training losses. Results show MS-SSIM best captures extremes, while afCRPS best models uncertainty and fine-scale details.",
  },
  {
    title: "Explainable Generative Models for Downscaling",
    authors: [
      me,
      julieCarreau,
      {
        name: "B. Gauvin",
        url: "https://www.linkedin.com/in/blaise-gauvin-st-denis-4b43761ab/?originalSubdomain=ca",
      },
    ],
    venue: "To be announced",
    image: "/images/explainable_generative_models.jpg",
    summary: "Details forthcoming.",
  },
];
