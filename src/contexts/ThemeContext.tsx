"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Force light theme only - always white theme
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      // Clear any dark theme from localStorage
      localStorage.removeItem("theme");
    }
    
    setMounted(true);
    setTheme("light");
  }, []);

  useEffect(() => {
    if (mounted && typeof document !== "undefined") {
      // Always apply light theme
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    // Theme toggle disabled - always light theme
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

