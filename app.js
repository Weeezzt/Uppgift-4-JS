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
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        toDoValues.push(inputBox.value);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN") {
        const liContent = e.target.parentElement.textContent;
        const spanContent = e.target.textContent;
        const liText = liContent.replace(spanContent, "").trim();
        const indexOfText = toDoValues.indexOf(liText);
        console.log(indexOfText);
        if(indexOfText !== -1) {
            toDoValues.splice(indexOfText, 1);
        }
        if(e.target.parentElement.classList.contains("checked")){
            count --;
            counter.innerHTML = count;
        }
        e.target.parentElement.remove();
        
    }
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        if ( e.target.classList.contains("checked")) {
            e.target.classList.remove("checked");
            count--;
        } else {
            e.target.classList.add("checked");
            count++;
        }
        if (count == 0) {
            counter.innerHTML = "";
        }else {
        counter.innerHTML = count; }
    }
    
})