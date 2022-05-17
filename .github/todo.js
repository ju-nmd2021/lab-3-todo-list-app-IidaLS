let taskInputElement = document.getElementById("taskInput");
const todoListElement = document.getElementById("todoList");
const taskButtonElement = document.getElementById("taskButton");

let addTask = function () {
  if (taskInputElement.value == "") {
    alert("add task");
    return;
  } else {
    var listItem = document.createElement("div");
    listItem.className = "task";
    listItem.innerText = taskInputElement.value;
    todoListElement.appendChild(listItem);
    taskInputElement.value = "";

    var markButton = document.createElement("button");
    markButton.innerText = "Done";
    todoListElement.appendChild(markButton);
    markButton.addEventListener("click", function () {
      listItem.style.textDecoration = "line-through";
    });

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    todoListElement.appendChild(deleteButton);
    deleteButton.addEventListener("click", function () {
      listItem.parentNode.removeChild(listItem);
      deleteButton.parentNode.removeChild(deleteButton);
      markButton.parentNode.removeChild(markButton);
    });
  }
};
taskButton.addEventListener("click", addTask);
