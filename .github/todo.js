//selectors
const todoInput = document.querySelector(".todoInput");
const todoButton = document.querySelector(".todoButton");
const todoList = document.querySelector(".todoList");

//event listeners
todoButton.addEventListener("click", addTodo);

//functions
function addTodo(event) {
  event.preventDefault();

  //Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = "hey";
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // check
  const completedButton = document.createElement("button");
  completedButton.innerText = "close";
  completedButton.classList.add("completedButton");
  todoDiv.appendChild(completedButton);
//remove
  const removeButton = document.createElement("button");
  removeButton.innerText = "close";
  cremoveButtonn.classList.add("removeButton");
  todoDiv.appendChild(removeButton);
}
}
