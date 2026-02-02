import checkTheme from "@/util/themeCheck";
import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState<string>("");

  const darkThemeFromStorage =
    typeof window !== "undefined" && window.localStorage.getItem("usehooks-ts-dark-mode");

  useEffect(() => {
    if (darkThemeFromStorage === "true") setTheme("dark");
    else setTheme("light");

    checkTheme();
  }, [darkThemeFromStorage]);

  return theme;
}

export default useTheme;
