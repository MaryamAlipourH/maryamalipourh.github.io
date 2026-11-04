import { profile } from "@/data/profile";
import { ThemeToggle } from "./ThemeToggle";

const nav = [
  { href: "#about", label: "About" },
  { href: "#publications", label: "Publications" },
  { href: "#teaching", label: "Teaching" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="font-serif text-lg font-medium tracking-tight">
          <span className="sm:hidden">{profile.shortName}</span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>
        <nav aria-label="Main" className="flex items-center gap-0.5 sm:gap-1">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 text-sm text-muted transition-colors hover:text-fg sm:px-2.5"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
