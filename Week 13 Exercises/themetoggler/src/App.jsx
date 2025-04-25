import { useEffect, useState } from 'react'
import './App.css'

function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  // Add your useEffects here
  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("isDarkMode"));
    if (savedTheme === true) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));

    document.body.classList.toggle("dark-theme", isDarkMode);
    document.body.classList.toggle("light-theme", !isDarkMode);
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
