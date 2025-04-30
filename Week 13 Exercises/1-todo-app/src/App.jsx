import { useState } from 'react'
import Header from './components/Header';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

  function App() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (text) => {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      }
    };

    const handleDelete = (id) => {

    };

    const handleSelectTodo = () => {

    };

    return (
      <>
        <Header 
        name="Todo List"
        />
        <TodoInput />

        <TodoList 
        todos={todos}
        />

        <Todo />
      </>
    );
  }

export default App;
