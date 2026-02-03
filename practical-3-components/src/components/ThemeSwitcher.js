import React, { useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const style = {
    padding: "1rem",
    backgroundColor: isDark ? "#222" : "#fff",
    color: isDark ? "#fff" : "#000",
    border: "1px solid #ccc",
    borderRadius: "6px",
    textAlign: "center",
    margin: "1rem 0",
  };

  return (
    <div style={style}>
      <h2>Theme Switcher</h2>
      <button onClick={toggleTheme}>
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
