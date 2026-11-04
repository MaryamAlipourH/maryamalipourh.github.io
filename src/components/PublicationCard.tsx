import Image from "next/image";
import { Fragment } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import type { Author, Publication } from "@/data/publications";

function AuthorName({ author }: { author: Author }) {
  if (author.me) {
    return <span className="font-semibold text-fg">{author.name}</span>;
  }
  if (author.url) {
    return (
      <a className="link-quiet" href={author.url}>
        {author.name}
      </a>
    );
  }
  return <>{author.name}</>;
}

export function PublicationCard({
  title,
  url,
  authors,
  venue,
  image,
  links,
  summary,
}: Publication) {
  return (
    <article className="group grid gap-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
      {image ? (
        <div className="relative aspect-[4/3] w-full max-w-64 overflow-hidden rounded-lg border border-border bg-subtle sm:max-w-none">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 640px) 160px, 256px"
            className="object-cover transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.04]"
          />
        </div>
      ) : (
        <div aria-hidden className="hidden sm:block" />
      )}

      <div>
        <h3 className="font-medium leading-snug text-fg">
          {url ? (
            <a href={url} className="transition-colors hover:text-accent">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="mt-1.5 text-sm text-muted">
          {authors.map((author, i) => (
            <Fragment key={author.name}>
              {i > 0 && ", "}
              <AuthorName author={author} />
            </Fragment>
          ))}
        </p>
        <p className="mt-1 font-serif text-[0.95rem] italic text-muted">{venue}</p>

        {links && links.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.url}
                  className="inline-flex items-center gap-1 rounded-full bg-subtle px-2.5 py-0.5 text-xs font-medium text-fg/80 transition-colors hover:bg-accent/10 hover:text-accent"
                >
                  {link.label}
                  <FiArrowUpRight aria-hidden className="size-3" />
                </a>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-3 text-sm text-fg/80">{summary}</p>
      </div>
    </article>
  );
}
