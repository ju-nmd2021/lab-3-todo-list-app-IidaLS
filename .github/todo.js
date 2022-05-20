let taskInputElement = document.getElementById("taskInput");
const todoListElement = document.getElementById("todoList");
const taskButtonElement = document.getElementById("taskButton");
let taskId = 0;

function loadPage() {
  if (localStorage.newTask === undefined) {
    console.log("undefined local storage");
    localStorage.newTask = JSON.stringify([]);
  }

  let addTask = function () {
    if (taskInputElement.value == "") {
      alert("Please write a task");
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
}
taskButton.addEventListener("click", addTask);
window.addEventListener("load", loadPage);
