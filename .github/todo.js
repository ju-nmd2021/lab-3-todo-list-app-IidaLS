<<<<<<< HEAD

//Deseada helped with both local storage and marking tasks as done

const addButton = document.getElementById("taskButton");
const taskList = document.getElementsByClassName("todoList");
const inputField = document.getElementById("taskInput");
let tasks; 

function loadHandler(){
  if (localStorage.tasks === undefined) {
    localStorage.tasks = JSON.stringify([]);
  }
  list();
}


function list() {

  tasks = JSON.parse(localStorage.tasks);

  todoList.innerHTML = "";

  for (let taskIndex in tasks) {
    let task = tasks[taskIndex];
    const taskElement = document.createElement("li");
    taskElement.classList.add("task");
    taskElement.innerText = task.name;
    todoList.appendChild(taskElement);

    taskElement.addEventListener("click", function () {
      if (task.completed === false) {
        task.completed = true;
        updateStorage();
        list();
      }
    });
    if (task.completed === true) {
      taskElement.style.textDecoration = "line-through";
      taskElement.style.color = "var(--green)";

      taskElement.addEventListener("click", function () {
        tasks.splice(taskIndex, 1);
        updateStorage();
        list();
      });
    }
  }
}
taskButton.addEventListener("click", function () {
  if (inputField.value == "") {
  alert("Please write a task! :)");
  return;
} else {
  let todo = {
    name: inputField.value,
    completed: false,
  };
  inputField.value = "";

  if (todo.name !== "") {
    tasks.push(todo);
  }

  updateStorage();
  list();
}});

function updateStorage() {
  localStorage.tasks = JSON.stringify(tasks);
}
inputField.addEventListener("keypress", function(event){
  if (event.key === "Enter") {
      event.preventDefault();
      addButton.click();  
  }
});

window.addEventListener("load", loadHandler);

=======
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
>>>>>>> parent of 898c732 (Merge pull request #2 from ju-nmd2021/I'm-starting-over)
