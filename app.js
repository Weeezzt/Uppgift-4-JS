const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("counter");
let count = 0;
const toDoValues = {};
let span = "";



function addTask() {
    if (inputBox.value === "") {
        alert("Du måste skriva något!");
    } else {
        const li = document.createElement("li");

        li.innerHTML = inputBox.value;
        const boxText = li.innerHTML;

        listContainer.appendChild(li);
        span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        toDoValues[boxText] = false;
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN") {
        const liContent = e.target.parentElement.textContent;
        const spanContent = e.target.textContent;
        const liText = liContent.replace(spanContent, "").trim();
    
        delete toDoValues[liText];
        
        if(e.target.parentElement.classList.contains("checked")){
            count --;
            counter.innerHTML = count;
        }
        e.target.parentElement.remove();
        
    }
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        const spanContent = span.textContent;
        const inputContent = e.target.textContent;
        const input = inputContent.replace(spanContent, "").trim();

        console.log(input);
        if ( e.target.classList.contains("checked")) {
            e.target.classList.remove("checked");
            toDoValues[input] = false;
            count--;
        } else {
            e.target.classList.add("checked");
            toDoValues[input] = true;
            count++;
        }
        if (count == 0) {
            counter.innerHTML = "";
        }else {
        counter.innerHTML = count; }
    }
    
})