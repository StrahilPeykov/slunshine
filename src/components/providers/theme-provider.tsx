"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "day" | "night";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "night",
  toggleTheme: () => {},
  mounted: false,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("night");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to 'night'
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const defaultTheme = savedTheme || "night";
    
    setTheme(defaultTheme);
    document.documentElement.setAttribute("data-theme", defaultTheme);
    
    // Store default if none exists
    if (!savedTheme) {
      localStorage.setItem("theme", "night");
    }
    
    // Smooth theme transitions
    const root = document.documentElement;
    root.style.transition = 'background-color 0.3s, color 0.3s';
    
    setMounted(true);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "day" ? "night" : "day";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const value = {
    theme,
    toggleTheme,
    mounted,
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
