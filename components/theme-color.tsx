"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeColor() {
  const { theme } = useTheme();

  useEffect(() => {
    let color = "#fffbf5";
    if (theme === "dark") {
      color = "#1b1a19";
    }

    let meta = document.querySelector("meta[name=theme-color]");
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", color);
  }, [theme]);

  return null;
}
