// Declare some variables and give them values from the html file

const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("counter");
const info = document.getElementById("info");

//Declare variable for to count the amount of todos done, start with 0
let count = 0;
//declare an array to hold the objects
const todoArray = [];
// declare a span and give it the value of an empty string
let span = "";


//Make a function to change status from false to true and vice versa.
function changeStatus(text, completed) {

    // find index
    const index = todoArray.map(t => t.name).indexOf(text);

    // change status

    todoArray[index].status = completed;
}

//a function to find index for removal of object from array
function removeObject(input) {
  // find the index

    const index = todoArray.map(t => t.name).indexOf(input);
    return index;
}

//Make it so that count gets shown on the page at the right spot.
counter.innerHTML = count;
//Function for the creation of the todos
function addTask() {

    //If theres nothing in the inputbox, a text shows up to tell the user.
    if (inputBox.value === "") {
        
        info.classList.add("blinky")
        info.innerText = "Input must not be empty";
        setTimeout(() => {
            info.classList.remove("blinky"); 
        }, 700);
        

    } else {

        //Create new element, a li tag. 

        const li = document.createElement("li");
        li.classList.add("liFade");

        // empty the text that told you to fill in the input
        info.innerText = "";

        // give the innerText of li the value of what was typed in the input. append li to the listcontainer
        li.innerText = inputBox.value;
        const boxText = li.innerText;
        listContainer.appendChild(li);

        //Create a span element, give the span the class for a icon. 
        //append span to the li.

        span = document.createElement("span");
        span.classList.add("fa", "fa-trash-o");
        li.appendChild(span);

        //Create the object for the name of string and status for if its done or not.
        //Give the name a value of the inputvalue via boxText variable.
        //Push that object in to the array


        const toDoValues = {name: "", status: false};
        toDoValues.name = boxText;
        todoArray.push(toDoValues);
        console.log(todoArray);
    }

    //Empty the input
    inputBox.value = "";
}

//Added an eventlistener so that you can use enter as well as your mouse.

inputBox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
       addTask();
    }
})


//Eventlistener that listens for clicks on the Span element.

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN") {

        //Made a variable that gets the TextContent of the parent element of the span -- the li.


        const liText = e.target.parentElement.textContent;
    
        //remove the correct object from the array.
        //Use a function to ge the index, then use splice to remove the correct object.

        const index = removeObject(liText);
        todoArray.splice(index, 1);

        //If the element that was remove had the class checked, remove 1 from count.
        //Give the innerHTML of counter the new value of count.

        if(e.target.parentElement.classList.contains("checked")){
            count --;
            counter.innerHTML = count;
        }

        //Remove the parenet element of the span.
        e.target.parentElement.remove();
        
    }
})

//An eventlistener that listens for click on the li.

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        
        //Declare a variable input and give it the value of the TextContent of the clicked li.

        const input = e.target.textContent;
        
        //If the clicked li has the class of checked, remove checked.

        if ( e.target.classList.contains("checked")) {

            e.target.classList.remove("checked");
            //Change status to false, and remove 1 from count.
            changeStatus(input, false);
            count--;
        } else {
            //Add the class checked to the clicked li.
            e.target.classList.add("checked");
            //change status to true, and add 1 to count.
            changeStatus(input, true);
            count++;
        }

        //Give the innerHTML of counter the new value of count.
        counter.innerHTML = count;
    }
    
})