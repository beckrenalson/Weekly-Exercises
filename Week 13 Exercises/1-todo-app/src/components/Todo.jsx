function Todo(todo, onDelete, onSelect) {
    return (
        <>
            <li
            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
            key={todo.id}
            >
                <input 
                type="checkbox" 
                onSelect={onSelect}
                todo={todo}
                />
                <span>
                    {todo.text}
                </span>
                <button
                onClick={() => {onDelete(todo.id)}}
                >Delete</button>
            </li>
        </>
    )
}
export default Todo