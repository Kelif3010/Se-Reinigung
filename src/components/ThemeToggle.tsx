import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return true; // default dark
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // Set initial class on mount
  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
  }, []);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="p-2 rounded-xl hover:bg-muted/50 transition-colors text-muted-foreground hover:text-primary"
      aria-label={dark ? "Zum Hellmodus wechseln" : "Zum Dunkelmodus wechseln"}
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
