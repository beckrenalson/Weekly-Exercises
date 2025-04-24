import { useEffect, useState } from 'react'
import './App.css'

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  // Add your useEffects here


  useEffect(() => {
    if (localStorage.getItem("isDarkMode") == "true") {
      setIsDarkMode(true)
    } 
  }, []);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? "dark-theme" : "light-theme"}>
      <h2>Theme Toggler</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <p>This content will change appearance based on the theme!</p>
    </div>
  );
}

export default ThemeToggler
