
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

