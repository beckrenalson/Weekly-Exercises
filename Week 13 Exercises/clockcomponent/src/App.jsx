import { useState, useEffect } from 'react'
import './App.css'

function Clock() {
  const [time, setTime] = useState(new Date());

  // Add your useEffect here
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    });
  });

  return (
    <div>
      <h2>Current time: {time.toLocaleTimeString()}</h2>
      <p>This clock updates every second</p>
    </div>
  );
}

export default Clock