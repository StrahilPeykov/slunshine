"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "day" | "night";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const resolveInitialTheme = (): Theme => {
  if (typeof document !== "undefined") {
    const themeFromAttribute = document.documentElement.getAttribute("data-theme");
    if (themeFromAttribute === "day" || themeFromAttribute === "night") {
      return themeFromAttribute;
    }
  }

  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "day" || savedTheme === "night") {
      return savedTheme;
    }
  }

  return "night";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (root.getAttribute("data-theme") !== theme) {
      root.setAttribute("data-theme", theme);
    }
    if (localStorage.getItem("theme") !== theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "day" ? "night" : "day";
    setTheme(newTheme);
  };

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
