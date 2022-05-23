const addButton = document.getElementById("taskButton");
const taskList = document.getElementsByClassName("todoList");
const inputField = document.getElementById("taskInput");
let tasks; 

function loadHandler(){
  if (localStorage.tasks === undefined) {
    localStorage.tasks = JSON.stringify([]);
  }
  displayList();
}


function displayList() {

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
        displayList();
      }
    });
    if (task.completed === true) {
      taskElement.style.textDecoration = "line-through";
      taskElement.style.color = "var(--green)";

      taskElement.addEventListener("click", function () {
        tasks.splice(taskIndex, 1);
        updateStorage();
        displayList();
      });
    }
  }
}
taskButton.addEventListener("click", function () {
  if (inputField.value == "") {
  alert("add task");
  return;
} else {
  let newTask = {
    name: inputField.value,
    completed: false,
  };
  inputField.value = "";

  if (newTask.name !== "") {
    tasks.push(newTask);
  }

  updateStorage();
  displayList();
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