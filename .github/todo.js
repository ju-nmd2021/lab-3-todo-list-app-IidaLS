//const taskElement = getElementById="";
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
var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}






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

