import type { CSSProperties, ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  /** Stagger for the fade-in, in milliseconds. */
  delay?: number;
};

export function Section({ id, title, children, delay = 0 }: Props) {
  const style: CSSProperties | undefined = delay
    ? { animationDelay: `${delay}ms` }
    : undefined;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      style={style}
      className="mt-16 scroll-mt-20 border-t border-border pt-10 motion-safe:animate-fade-up"
    >
      <h2
        id={`${id}-heading`}
        className="font-serif text-2xl font-medium tracking-tight sm:text-3xl"
      >
        {title}
      </h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}
