const tasks = [""]




function addTask(){
 console.log("pressed");
 
}
const taskButtonElement = document.getElementById("taskButton");
taskButtonElement.addEventListener("click", onClickHandler);


const card = document.createElement("li");
const content = document.createTextNode("inputValue")
card.appendChild(content);
const container = document.getElementById("container");
container.appendChild(card);