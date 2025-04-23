import { useEffect, useState } from 'react'
import './App.css'

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  let updateWidth = () => {
    setWidth(window.innerWidth);
  };

  // Add your useEffect here
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  });

  return (
    <div>
      <h2>Window width: {width}px</h2>
      <p>Resize your browser window to see it change!</p>
    </div>
  );
}

export default WindowWidthTracker