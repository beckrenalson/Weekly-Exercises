import Todo from "./Todo"

function TodoList({todos, deleteTodo, selectTodo}) {
    return (
        <>
            <ul>
                {todos.map((todo) => {
                    <Todo
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        selectTodo={selectTodo}
                    />
                })}
            </ul>
        </>
    )
}
export default TodoList