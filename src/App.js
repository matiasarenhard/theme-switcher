import { useState } from "react";

import Box from "../src/components/box";

function App() {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = ({ target }) => setTheme(target.checked ? "dark" : "light");

  return <main className={theme}>
    Texto

    <Box />
    <label>
      <input type="checkbox" checked={theme === "dark"} onChange={handleThemeChange}/>Modo escuro
    </label>
  </main>;
}

export default App;
