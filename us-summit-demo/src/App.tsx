import { useCallback, useState, useEffect } from "react";
import { registerAllModules } from "handsontable/registry";
import { initMIDI } from "./services/midiService";
import { THEME_CLASSES } from "./constants/themes";
import Table from "./components/Table";
import Header from "./components/Header";
import Background from "./components/Background";
import Footer from "./components/Footer";

import "handsontable/styles/handsontable.css";
import "./styles/themes/ht-theme-main.css";
import "./styles/themes/ht-theme-horizon.css";
import "./styles/themes/ht-theme-nostalgia.css";
import "./styles/themes/ht-theme-tablebase.css";

// register Handsontable's modules
registerAllModules();

function App() {
  const [theme, setTheme] = useState("ht-theme-main");

  const handleThemeChange = useCallback((padId: string) => {
    const themeClass = THEME_CLASSES[padId as keyof typeof THEME_CLASSES];

    if (!themeClass) return;

    setTheme(themeClass);
  }, []);

  // Initialize MIDI only once
  const initializeMIDI = useCallback(() => {
    initMIDI(handleThemeChange);
  }, [handleThemeChange]);

  // Initialize MIDI on mount
  useEffect(() => {
    initializeMIDI();
  }, [initializeMIDI]);

  return (
    <div className="container">
      <Background />
      <Header />
      <Table key={theme} themeName={theme} />
      <Footer theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
