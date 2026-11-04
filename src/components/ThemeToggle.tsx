"use client";

import { FiMoon, FiSun } from "react-icons/fi";

// The current theme lives on <html class="dark">, set by the script in layout.tsx.
// Both icons are rendered and CSS shows the right one, so there is no hydration mismatch.
export function ThemeToggle() {
  function toggle() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // Storage can be unavailable (e.g. private mode); the toggle still works for this visit.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="relative grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-subtle hover:text-fg"
    >
      <FiMoon
        aria-hidden
        className="col-start-1 row-start-1 size-[18px] transition-all duration-300 dark:scale-50 dark:-rotate-90 dark:opacity-0 motion-reduce:transition-none"
      />
      <FiSun
        aria-hidden
        className="col-start-1 row-start-1 size-[18px] scale-50 rotate-90 opacity-0 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:opacity-100 motion-reduce:transition-none"
      />
    </button>
  );
}
