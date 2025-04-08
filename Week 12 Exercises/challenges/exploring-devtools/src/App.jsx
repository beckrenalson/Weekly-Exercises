import React, { useState } from "react";
import UserProfile from "./components/UserProfile";
import HiddenComponent from "./components/HiddenComponent";

function App() {
  const [userData, setUserData] = useState({
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  });

  const updateUserData = () => {
    setUserData({
      name: "Jane Smith",
      age: 28,
      email: "jane@example.com",
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React DevTools Challenge</h1>
      </header>
      <main>
        <UserProfile {...userData} />
        <button onClick={updateUserData}>Update User Data</button>
        <HiddenComponent hidden={true} />
      </main>
    </div>
  );
}

export default App;
