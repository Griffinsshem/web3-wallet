"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white shadow-lg transition-colors"
    >
      {isDark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
