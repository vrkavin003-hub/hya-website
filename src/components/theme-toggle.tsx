"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

const themeChangeEvent = "hya-theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener(themeChangeEvent, callback);
  return () => window.removeEventListener(themeChangeEvent, callback);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

export function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    () => false,
  );

  function toggleTheme() {
    const nextIsDark = !document.documentElement.classList.contains("dark");
    const nextTheme = nextIsDark ? "dark" : "light";
    const root = document.documentElement;

    root.classList.toggle("dark", nextIsDark);
    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    localStorage.setItem("hya-theme", nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
    >
      <Moon
        aria-hidden="true"
        className="theme-icon-light"
        size={18}
        strokeWidth={2}
      />
      <Sun
        aria-hidden="true"
        className="theme-icon-dark"
        size={19}
        strokeWidth={2}
      />
    </button>
  );
}
