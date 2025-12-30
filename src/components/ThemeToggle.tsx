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
      <div className='w-10 h-10 md:w-12 md:h-12 fixed bottom-20 md:top-6 right-4 md:right-6 z-40' />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className='w-10 h-10 md:w-12 md:h-12 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full shadow-lg md:shadow-xl flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 active:scale-95 fixed bottom-20 md:top-6 right-4 md:right-6 z-40 border-2 border-gray-200 dark:border-gray-700 backdrop-blur-sm'
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FaMoon size={16} className='md:w-[18px] md:h-[18px] text-gray-700' />
      ) : (
        <FaSun size={16} className='md:w-[18px] md:h-[18px] text-yellow-500' />
      )}
    </button>
  );
}

