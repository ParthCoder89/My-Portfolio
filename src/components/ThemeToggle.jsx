import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-2 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
