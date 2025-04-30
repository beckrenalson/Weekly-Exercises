# React Todo App Challenge

## Overview

In this exercise, you'll build a simple todo app using React. This project will help you practice working with useState for state management, implementing basic input validation, and using local storage to persist data.

## Learning Objectives

- Use the useState hook to manage component state
- Implement form handling and basic input validation in React
- Utilize the useEffect hook for side effects and lifecycle management
- Utilize local storage to save and retrieve data

## Getting Started

To run this project:

1. Make sure you have [bun installed](https://bun.sh/docs/installation) on your computer.
2. Open a terminal and navigate to the project directory.
3. Run `bun install` to install the necessary dependencies.
4. Run `bun run dev` to start the development server.
5. Check your terminal for the URL, open that URL in your browser.

## Step-by-step Instructions

1. Set up the initial state:

   - In `App.jsx`, import `useState` from React.
   - Create a state variable for the list of todos: `const [todos, setTodos] = useState([]);`
   - Create a state variable for the input value: `const [inputValue, setInputValue] = useState('');`

2. Create the form for adding new todos:

   - Add a form element with an input field and a submit button.
   - Implement `handleInputChange` to update the `inputValue` state as the user types.
   - Implement `handleSubmit` to add a new todo when the form is submitted.

3. Display the list of todos:

   - Use the `map` function to render each todo item as a list item.
   - Include the todo text and a delete button for each item.

   <details>
   <summary>Code snippet example</summary>

   ```jsx
   <ul>
     {todos.map((todo) => (
       <li key={todo.id}>
         {todo.text}
         <button onClick={() => handleDelete(todo.id)}>Delete</button>
       </li>
     ))}
   </ul>
   ```

   </details>

4. Implement delete functionality:

   - Create a `handleDelete` function that removes a todo item based on its id.
   - Add an onClick event to the delete button that calls `handleDelete`.

5. Style your app:

   - Use the provided `styles.css` file to make your app visually appealing.

6. Implement local storage functionality:

   - Import `useEffect` from React.
   - Use `useEffect` to load todos from local storage when the component mounts.
   - Use another `useEffect` to save todos to local storage whenever the todos state changes.

   <details>
   <summary>Code snippet example</summary>

   ```jsx
   // This useEffect runs once when the component mounts
   // It loads the todos from local storage and sets them in the state
   useEffect(() => {
     const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
     setTodos(storedTodos);
   }, []);

   // This useEffect runs whenever the todos state changes
   // It saves the current todos to local storage
   useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
   }, [todos]);
   ```

   </details>

7. Test your app:
   - Verify that you can add new todos.
   - Confirm that you can delete todos.
   - Check that todos persist after page reload.

Remember to refer to the existing `App.jsx` file for guidance on implementing these steps. Good luck with your React Todo App challenge!

## Tips

- Start with the basic functionality (adding and displaying todos) before moving on to more complex features
- Use the useState hook like this: `const [todos, setTodos] = useState([]);`
- For local storage, use `localStorage.setItem()` and `localStorage.getItem()`
- Remember to stringify your data when saving to local storage and parse it when retrieving
- Use the useEffect hook to load data from local storage when the component mounts

## Bonus Challenges

- Add a "mark as complete" feature for todo items
- Implement editing of existing todo items
- Add filtering options (e.g., show all, show active, show completed)

Good luck, and have fun coding!
