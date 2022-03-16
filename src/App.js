import { useState } from "react";

import Box from "../src/components/box";

import ThemeContext from "../src/contexts/ThemeContext";

function App() {
  const [theme, setTheme] = useState(() => { 
    const storage_theme = localStorage.getItem("theme");
    return storage_theme || "light";
  });

  const handleThemeChange = ({ target }) => {
    const newTheme = target.checked ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  

  return(
    <ThemeContext.Provider value={theme}>
    <main className={theme}>
      Texto
      <Box />
      <label>
        <input type="checkbox" checked={theme === "dark"} onChange={handleThemeChange}/>Modo escuro
      </label>
    </main>
  </ThemeContext.Provider>);
}

export default App;
