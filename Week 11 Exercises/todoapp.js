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

addTodoBtn.addEventListener("click", () => {
    const todoEl = document.createElement("div");
    const radio = document.createElement("input");

    radio.type = "radio";
    todoEl.className = 'todo';
    todoEl.innerText = document.getElementById("inputTodo").value;
    const element = document.getElementById("todoList").appendChild(todoEl);
    element.appendChild(radio);
});

