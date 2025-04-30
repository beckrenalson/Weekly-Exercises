import { useState } from 'react'

function TodoInput(addTodo) {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        addTodo(inputValue);
        setInputValue('');
        console.log(inputValue)
    }

    const handleSubmit = () => {
        e.preventDefault();
    }

    return (
        <>
            <form
            onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder="Add new todo ..."
                    value={inputValue}
                />
                <button type="submit">Add Todo</button>
            </form>
        </>
    )
}
export default TodoInput