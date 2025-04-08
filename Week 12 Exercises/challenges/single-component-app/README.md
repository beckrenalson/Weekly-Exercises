## Getting Started

### Online classroom

To run this project:

1. Make sure you have [bun installed](https://bun.sh/docs/installation) on your computer
2. Open a terminal and navigate to the project directory
3. Run `bun install` to install the necessary dependencies
4. Run `bun dev` to start the development server
5. Check your terminal for the URL, open that URL in your browser

### Offline classroom

1. Duplicate the `react-boilerplate` folder
2. Rename the folder `react-project-name-challenge`
3. Open a terminal and navigate to the project directory
4. Run `bun dev` in the terminal
5. Hold the `command` key and click on the URL

# Creating Your First React Component

This exercise will guide you through creating your first React component, passing props to it, and using PropTypes for type checking.

## Learning Objectives

- Understand the basic structure of a React component
- Learn how to create and export a functional component
- Practice passing and using props in a component
- Compose components together in a React application
- Apply basic styling to React components

## Instructions

Follow these steps to complete the exercise:

### Step 1: Create the Welcome Component

1. Open the `src/components/Welcome.jsx` file.
2. Create a functional component named `Welcome`.
3. The component should return a simple greeting message.

Example structure (you need to complete the code):

```jsx
import React from 'react';

export function Welcome() {
  return (
    // Your code here
  );
}
```

### Step 2: Use the Welcome Component in App.jsx

1. Open the `src/App.jsx` file.
2. Import the Welcome component.
3. Use the Welcome component inside the App component.

Example structure (you need to complete the code):

```jsx
import React from "react";
import { Welcome } from "./components/Welcome";

export function App() {
  return (
    <div className="app">
      <h1>My First React Component</h1>
      {/* Your code here */}
    </div>
  );
}
```

### Step 3: Add Props to the Welcome Component

1. Modify the Welcome component to accept props for `name` and `course`.
2. Update the component to use these props in the greeting message.
3. Add default props for both `name` and `course`.

Example:

```jsx
export function Welcome({ name = 'Student', course = 'React' }) {
  return (
    // Your updated code here
  );
}
```

### Step 4: Pass Props from App to Welcome

1. In `App.jsx`, pass `name` and `course` props to the Welcome component.

Example:

```jsx
<Welcome name="React Learner" course="React Fundamentals" />
```

### Step 5: Style Your Component

1. Open the `src/styles.css` file.
2. Add some basic styles for your Welcome component.

Example:

```css
.welcome {
  /* Your styles here */
}
```

## Bonus Challenges

1. Create a new prop for `startDate` and update both the Welcome and App components to use it.
2. Implement error handling to display a message if the name prop is not provided.
3. Add a button to the Welcome component that, when clicked, logs a message to the console.

## Example Output

Your final result might look something like this (but feel free to be creative!):

```
My First React Component

Welcome, React Learner!
You're now learning React Fundamentals.
Your course starts on: July 1, 2025
```

Remember, the goal is to understand the concepts and implement them yourself. Don't just copy the examples, use them as a guide to create your own unique component!

Good luck with your first React component!
