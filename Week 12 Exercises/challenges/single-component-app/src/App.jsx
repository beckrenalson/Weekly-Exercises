import React from "react";
import { Welcome } from "./Welcome";

function App() {
  const name = "React Learner";
  const course = "React Fundamentals";

  return (
    <div className="app">
      <h1>My First React Component</h1>
      <Welcome name={name} course={course} />
    </div>
  );
}

export default App;
