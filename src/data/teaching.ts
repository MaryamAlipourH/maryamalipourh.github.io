type Person = { name: string; url?: string };

export type Course = {
  name: string;
  code?: string;
  instructors: Person[];
};

export type TeachingEntry = {
  role: string;
  /** Optional organization shown after the role, e.g. "CS50x". */
  org?: Person;
  period: string;
  courses?: Course[];
  description?: string;
};

export const teaching: TeachingEntry[] = [
  {
    role: "Graduate Teaching Assistant",
    period: "2025–2026",
    courses: [
      {
        name: "Artificial Intelligence: Probabilistic and Learning Techniques",
        code: "INF8225",
        instructors: [
          { name: "Chris Pal", url: "https://mila.quebec/en/directory/chris-pal" },
        ],
      },
      {
        name: "Fundamentals of Machine Learning",
        code: "IFT6390",
        instructors: [
          {
            name: "Ioannis Mitliagkas",
            url: "https://mila.quebec/en/directory/ioannis-mitliagkas",
          },
          {
            name: "Dhanya Sridhar",
            url: "https://mila.quebec/en/directory/dhanya-sridhar",
          },
        ],
      },
      {
        name: "Unsupervised Learning and Time Series",
        code: "MTH8304",
        instructors: [
          {
            name: "Julie Carreau",
            url: "https://www.polymtl.ca/expertises/en/carreau-julie",
          },
        ],
      },
    ],
  },
  {
    role: "Undergraduate Teaching Assistant",
    period: "2020–2022",
    courses: [
      {
        name: "Numerical Computations",
        instructors: [
          {
            name: "Fatemeh Shakeri",
            url: "https://scholar.google.com/citations?user=35zq7c4AAAAJ&hl=en",
          },
        ],
      },
      {
        name: "Numerical Analysis",
        instructors: [
          {
            name: "Mostafa Shamsi",
            url: "https://scholar.google.com/citations?hl=en&user=5zZa0ekAAAAJ&view_op=list_works",
          },
        ],
      },
      {
        name: "Fundamentals of Programming in C",
        instructors: [
          {
            name: "Mohammad Akbari",
            url: "https://scholar.google.com/citations?user=JU344KEAAAAJ&hl=en",
          },
        ],
      },
    ],
  },
  {
    role: "Teaching Assistant",
    org: { name: "CS50x", url: "https://cs50x.ir/" },
    period: "2020–2022",
    description:
      "Contributed to teaching CS50x, Harvard’s introductory computer science course, for a Persian-speaking audience. Translated and customized course content, and supported TA sessions in the 2020 and 2021 cohorts.",
  },
];
