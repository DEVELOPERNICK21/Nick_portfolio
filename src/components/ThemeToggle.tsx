"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder to prevent hydration mismatch
    return (
      <div className='w-12 h-12 fixed top-6 right-6 z-50' />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className='w-12 h-12 bg-white dark:bg-gray-800 text-dark dark:text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 active:scale-95 fixed top-6 right-6 z-50 border-2 border-gray-200 dark:border-gray-700'
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FaMoon size={18} className='text-gray-700' />
      ) : (
        <FaSun size={18} className='text-yellow-500' />
      )}
    </button>
  );
}

