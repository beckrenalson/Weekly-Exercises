import { useState, useEffect } from 'react'
import './App.css'

function RugbyScoreboard() {
  const [nzScore, setNZScore] = useState(() => {
    return parseFloat(localStorage.getItem("nzScore") || "0");
  });

  const [ausScore, setAusScore] = useState(() => {
    return parseFloat(localStorage.getItem("ausScore") || "0");
  });
  
  // Add your useEffect hook here to update the document title
  // Whenever either score changes
  useEffect(() => {
    localStorage.setItem("nzScore", nzScore.toString());
    localStorage.setItem("ausScore", ausScore.toString());
    document.title = `NZ ${nzScore} - AUS ${ausScore}`;
  }, [nzScore, ausScore]);
  
  return (
    <div className="rugby-scoreboard">
      <h2>Rugby Match Scoreboard</h2>
      
      <div className="teams">
        <div className="team nz">
          <h3>New Zealand 🇳🇿</h3>
          <div className="score">{nzScore}</div>
          <div className="controls">
            <button onClick={() => setNZScore(nzScore + 5)}>
              Try (5 pts)
            </button>
            <button onClick={() => setNZScore(nzScore + 2)}>
              Conversion (2 pts)
            </button>
          </div>
        </div>
        
        <div className="score-divider">-</div>
        
        <div className="team aus">
          <h3>Australia 🇦🇺</h3>
          <div className="score">{ausScore}</div>
          <div className="controls">
            <button onClick={() => setAusScore(ausScore + 5)}>
              Try (5 pts)
            </button>
            <button onClick={() => setAusScore(ausScore + 2)}>
              Conversion (2 pts)
            </button>
          </div>
        </div>
      </div>
      
      <p className="hint">Check your browser tab to see the score update!</p>
    </div>
  );
}

export default RugbyScoreboard