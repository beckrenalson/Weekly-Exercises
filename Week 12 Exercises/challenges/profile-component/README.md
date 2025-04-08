# Profile Component Challenge

In this exercise, you will build a React component called `ProfileCard` that accepts props for name, job title, and bio. This component will display a person's profile information in a card format.

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

Good luck!

## Challenge Instructions

1. Create a new React component called `ProfileCard`:

   - Create a new file called `ProfileCard.js` in the `src` folder.
   - Define a functional component named `ProfileCard`.

2. The `ProfileCard` component should accept the following props:

   - `name` (string): The person's name
   - `jobTitle` (string): The person's job title
   - `bio` (string): A short biography of the person

3. Design the `ProfileCard` component to display the information in an attractive layout:

   - Use appropriate HTML elements to structure the card (e.g., `<div>`, `<h2>`, `<h3>`, `<p>`).

4. In your main `App` component:
   - Import the `ProfileCard` component.
   - Create an array of profile data
   - Use the `map` function to create multiple instances of the `ProfileCard` with different data.

## Example Implementation

Here's a basic example of how your `ProfileCard` component might look:

`ProfileCard.js`

```jsx
import React from "react";

function ProfileCard() {
  // code here
}

export default ProfileCard;
```

`App.js`:

```jsx
import React from "react";
import ProfileCard from "./ProfileCard";

function App() {


  return (
    // code here
  );
}

export default App;
```

## Bonus Challenges

1. Add an `avatar` prop to include a profile picture:

   - Update the `ProfileCard` component to accept an `avatar` prop.
   - Add an `<img>` element to display the avatar.

2. Implement a feature to toggle between showing the full bio and a truncated version:

   - Add a state variable to track whether the full bio is shown.
   - Add a button to toggle between full and truncated bio.
   - Use string manipulation to create a truncated version of the bio.

3. Add a theme prop to allow different color schemes for each card:
   - Update the `ProfileCard` component to accept a `theme` prop.
   - Use conditional styling based on the theme prop.

Remember to use proper React conventions and keep your component reusable!

## Learning Objectives

By completing this challenge, you will:

- Practice creating and using React components
- Learn how to pass and use props in React
- Gain experience with mapping over data to create multiple component instances
- Explore state management (in the bonus challenges)
- Improve your CSS skills by styling the profile cards
