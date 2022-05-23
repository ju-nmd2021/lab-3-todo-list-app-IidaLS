//variables
const addButton = document.getElementById("addButton");
const taskList = document.getElementsByClassName("todoList");
const input = document.getElementById("taskInput");
let tasks; 

function loadHandler(){
    if(localStorage.tasks === undefined) {
        localStorage.tasks =JSON.stringify([]);
         console.log(localStorage.tasks);
    }
    displayList();
}

function displayList() {
    console.log("view tasks");
    tasks = JSON.parse(localStorage.tasks);
    taskList.innerHTML = "";
}