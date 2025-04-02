const addTodoBtn = document.getElementById("addTodo");
// const todo = document.querySelector(".todo");

const todo1 = {
    task: "Do Laundry", 
    completed: false
};

const todo2 = {
    task: "Learn JavaScript",
    completed: false
};

let todos = [todo1, todo2];

// Render single todo
addTodoBtn.addEventListener("click", () => {
    const todoElement = document.createElement("div");
    const radio = document.createElement("input");

    radio.type = "radio";
    todoElement.className = 'todo';
    todoElement.textContent = document.getElementById("inputTodo").value;
    const element = document.getElementById("todoList").appendChild(todoElement);
    element.appendChild(radio);

    renderTodos();
});

// Clear existing todos from the DOM and render each todo in the array
function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.replaceChildren();

    todos.forEach(todo => {
        addTodo(todo);
    });
};

function addTodo(todoText) {
    const newTodo = {
        task: todoText,
        completed: false
    }

    todos.push(newTodo);
    renderTodos();
};

console.log(todos);
