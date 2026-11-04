import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-2 px-5 py-8 text-sm text-muted sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top" className="transition-colors hover:text-fg">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
