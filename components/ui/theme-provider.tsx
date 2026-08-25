// components/ui/theme-provider.tsx
"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  // Read from the DOM class that the inline <script> in layout.tsx already set.
  // This avoids a race condition with a module-level constant.
  if (document.documentElement.classList.contains("dark")) return "dark";
  if (localStorage.getItem("theme") === "light") return "light";
  if (localStorage.getItem("theme") === "dark") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "light",
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    const next: Theme = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    setTheme(next);
  }, []);

  const contextValue = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}