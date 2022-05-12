
let taskInputElement = document.getElementById("taskInput").value;
const todoListElement = document.getElementById("todoList");
const taskButtonElement = document.getElementById("taskButton");

let finalList = [];

for (let task of taskInputElement) {
  const divElement = document.createElement("div");
  divElement.innerText = task;
  divElement.classList.add("list") 
  divElement.onclick = addToFinalList;
  todoListElement.appendChild(divElement);
}


function addToFinalList() {
  finalList.push(taskInputElement);

  const listElement = document.createElement("ul");

  const spanElement = document.createElement("span");
  spanElement.innerText = taskInputElement;
  listElement.appendChild(spanElement);

  const removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.onclick = "removeElement()";
  listElement.appendChild(removeButton);

  taskButtonElement.appendChild(listElement);
}
 function removeElement() {
   const element = this.parentNode;
   element.parentNode.removeChild(element);
 }




























/*

let taskButtonElement;
let listElement;
let taskInputElement; 
let currentElement; 

function saveToLocalStorage(textItem) {
  localStorage.taskList = textItem;
} 

function createCurrentElement(textItem) {
  currentElement = document.createElement("div");

  const spanElement = document.createElement("span");
  spanElement.innerText = textItem;
  currentElement.appendChild(spanElement);

  const deleteButtonElement = document.createElement("button");
  deleteButtonElement.innerText = "Delete me";
  deleteButtonElement.addEventListener("click", () => {
    deleteFromLocalStorage();
    currentElement.parentNode.removeChild(currentElement);
    currentElement = undefined;
  });
  currentElement.appendChild(deleteButtonElement);

  containerElement.appendChild(currentElement);
}

function createCurrentElement(textItem) {
  currentElement = document.addTask("div");
  const spanElement = document.createElement("span");
  spanElement.innerText = textItem;
  currentElement.appendChild(spanElement);

  const button = document.createElement("button");
  button.innerText = "remove";
  button.onclick = removeElement;

currentElement.appendChild(deleteButtonElement);

containerElement.appendChild(currentElement);
}

function createElementHandler() {
  const textItem = taskInputElement.value;
  if (textItem === "") {
    alert("Please enter a word");
    return;
  }
  if (currentElement !== undefined) {
    alert("Please delete the current element first");
    return;
  }
  createCurrentElement(textItem);
  saveToLocalStorage(textItem);
  inputElement.value = "";
}

*/































//const taskElement = getElementById="";
/*
const taskListElement = (getElementById = "listElement");

function addTask() {
  var li = document.createElement("li");
  var textInputValue = document.getElementById("taskInput").value;
  var t = document.createTextNode(textInputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("Nothing was written.");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("userInput").Value = "";
}
  var li = document.createElement("li");
  var span = document.createElement("span");
  var text = document.createTextNode("???");
  span.className = "close";
  span.appendChild(text);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

*/




/*
const element = document.getElementById("taskButton");
element.addEventListener(
  "click",
  () => {
    addTask();
  } */

  /*

function addTask(){
 console.log("pressed");
 
}
const taskButtonElement = document.getElementById("taskButton");
taskButtonElement.addEventListener("click", addTask);


const card = document.createElement("li");
const content = document.createTextNode("inputValue")
card.appendChild(content);
const container = document.getElementById("container");
container.appendChild(card); */

