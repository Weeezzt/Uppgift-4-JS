const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("counter");
let count = 0;
const toDoValues = [];



function addTask() {
    if (inputBox.value === "") {
        alert("Du måste skriva något!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        count++;
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        counter.innerHTML = count;
        toDoValues.push(inputBox.value);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        const index = toDoValues.indexOf(e.target.parentElement);
        toDoValues.splice(index, 1);
        count--;
        counter.innerHTML = count;
    }
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
})