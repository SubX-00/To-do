let todos = [];

function addTodo() {
  const input = document.getElementById("todoInput");
  const task = input.value.trim();

  if (task === "") {
    alert("Type something first");
    return;
  }

  todos.push({
    text: task,
    done: false
  });

  input.value = "";
  renderTodos();
}

function renderTodos() {
  const body = document.querySelector(".todobody");
  body.innerHTML = "";

  todos.forEach((todo, index) => {
    body.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${todo.text}</td>
        <td>${todo.done ? "Done" : "Pending"}</td>
        <td>
          <button class="finish" onclick="toggleTodo(${index})">Finish</button>
          <button class="delete" onclick="deleteTodo(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  renderTodos();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}
function saveTodos() {
  // Convert the todos array into a string
  localStorage.setItem("todos", JSON.stringify(todos));
  alert("Tasks saved!");
}

window.onload = function () {
  const saved = localStorage.getItem("todos");
  if (saved) {
    // Convert string back into an array
    todos = JSON.parse(saved);
    renderTodos();
  }
};
