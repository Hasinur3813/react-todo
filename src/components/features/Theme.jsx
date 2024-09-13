import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Theme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleThemeChange = (theme) => {
    localStorage.setItem("theme", theme);
    setTheme(theme);
  };

  return (
    <label className="dark:text-white">
      Theme
      <select
        onChange={(e) => handleThemeChange(e.target.value)}
        className="bg-slate-200 px-3 rounded-sm border border-pColor ms-1 dark:bg-transparent"
        value={theme === "dark" ? "dark" : "light"}
      >
        <option className="dark:bg-darkMode" value="light">
          Light
        </option>
        <option className="dark:bg-darkMode" value="dark">
          Dark
        </option>
      </select>
    </label>
  );
};

export default Theme;
