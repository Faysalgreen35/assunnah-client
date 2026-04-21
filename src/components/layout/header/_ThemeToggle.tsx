"use client";

import { useTheme } from "@/providers/theme-provider";

export function _ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex flex-col items-center gap-0.5 px-2 py-1 text-body hover:text-primary transition-colors"
      type="button"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        {isDark ? (
          // Sun icon for dark mode (click to go light)
          <>
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </>
        ) : (
          // Moon icon for light mode (click to go dark)
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        )}
      </svg>
      <span className="hidden text-[9px] font-semibold uppercase tracking-[0.07em] text-subtle lg:block">
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
