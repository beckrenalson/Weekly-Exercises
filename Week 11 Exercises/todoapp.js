const addTodoBtn = document.getElementById("addTodo");

const todo1 = {
    task: "Do Laundry",
    completed: true
};

const todo2 = {
    task: "Learn JavaScript",
    completed: false
};

let todos = [todo1, todo2];

// Render single todo
function renderTodo(todo) {
    const todoElement = document.createElement("div");
    const checkBox = document.createElement("input");

    checkBox.type = "checkbox";
    todoElement.className = 'todo';
    todoElement.textContent = todo.task;
    checkBox.checked = todo.completed;
    const appendElement = document.getElementById("todoList").appendChild(todoElement);
    appendElement.appendChild(checkBox);
};

// Clear existing todos from the DOM and render each todo in the array
function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.replaceChildren();

    todos.forEach((todo) => { renderTodo(todo) });

    console.log(todos);
};

// Add single todo
addTodoBtn.addEventListener("click", () => {
        const todoText = document.getElementById("inputTodo").value;
        const newTodo = {
            task: todoText,
            completed: false
        }

        todos.push(newTodo);
        renderTodos();
    });

