//Adina helped me with the local storage
//variables
let taskInputElement = document.getElementById("taskInput");
const todoListElement = document.getElementById("todoList");
const taskButtonElement = document.getElementById("taskButton");
let taskId = 0;
let tasks = [];

//loading the page
function loadPage() {
  if (localStorage.newTask === undefined) {
    console.log("local storage is undefined");
    localStorage.newTask = JSON.stringify([]);
  }
//alert if input is empty
  let addTask = function () {
    if (taskInputElement.value == "") {
      alert("Please write a task");
      return;
    } else {
      
//add a task
      for (let task of tasks) {
        var listItem = document.createElement("div");
        listItem.className = "task";
        listItem.innerText = taskInputElement.value;
        todoListElement.appendChild(listItem);
        taskInputElement.value = "";
//mark as done button
        var markButton = document.createElement("button");
        markButton.innerText = "Done";
        todoListElement.appendChild(markButton);
        markButton.addEventListener("click", function () {
          listItem.style.textDecoration = "line-through";
        });
//button to delete
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        todoListElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", function () {
          listItem.parentNode.removeChild(listItem);
          deleteButton.parentNode.removeChild(deleteButton);
          markButton.parentNode.removeChild(markButton);
        });
      }
    }
  };
}
taskButton.addEventListener("click", addTask);
window.addEventListener("load", loadPage);

/*
if (localStorage.tasks !== undefined) {
        todoListElement = document.getElementById("taskList");
        tasks = JSON.parse(localStorage.newTask);
      }*/