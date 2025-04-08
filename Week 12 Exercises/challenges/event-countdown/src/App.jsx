import React from "react";
import { Countdown } from "./Countdown";

function App() {
  return (
    <div className="App">
      <h1>Event Countdown App</h1>
      <Countdown
        eventName = "End of the World"
        eventDate = {new Date('3025-01-01')}
      >
      </Countdown>
    </div>
  );
}

export default App;
