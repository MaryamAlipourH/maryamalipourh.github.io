# maryamalipour.io

Source for my academic website, [maryamalipour.io](https://maryamalipour.io).

Built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com), exported as a static site and hosted on GitHub Pages.

## Run it locally

You need [Node.js](https://nodejs.org) (LTS).

```sh
npm install
npm run dev       # live-reloading dev server at http://localhost:3000
```

To check the exact files that will be deployed:

```sh
npm run build     # writes the static site to out/
npm run preview   # serves out/ at http://localhost:3000
```

## Update the content

Most edits happen in [`src/data/`](src/data/):

| What | File |
| --- | --- |
| Name, tagline, social links, CV link | [`profile.ts`](src/data/profile.ts) |
| Publications | [`publications.ts`](src/data/publications.ts) |
| Teaching | [`teaching.ts`](src/data/teaching.ts) |
| Bio paragraphs | [`src/components/Hero.tsx`](src/components/Hero.tsx) |

**Add a paper:** put its thumbnail in `public/images/`, then copy an entry in `publications.ts` and edit it. Newest goes first.

**Update the CV:** put the new PDF in `public/data/` and change the `CV` link in `profile.ts`.

Colors and fonts are set at the top of [`src/app/globals.css`](src/app/globals.css), with separate values for light and dark mode.

## Deploy

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `out/` to GitHub Pages. Pull requests are built as a check but not deployed.

In the repo settings, **Pages → Source** must be set to **GitHub Actions**.

## Credits

The original version of this site was based on [Jon Barron's website template](https://github.com/jonbarron/jonbarron.github.io).
