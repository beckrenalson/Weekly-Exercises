import React from "react";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>Welcome to our website! We're glad you're here.</p>
          <img src="src/assets/welcome-image.jpg" alt="Welcome" />
        </section>
        <section id="about">
          <h2>About Us</h2>
          <p>We are a company dedicated to creating amazing web experiences.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit" onClick="alert('Form submitted!')">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
