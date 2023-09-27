// Här skapar jag variabeln count som kommer användas för att öka och misnka värdet på countern. Skapar även variabler av html elementen med diverse ID. Skapar ett object där jag sparar todos och om dom är gjorda eller ej, true/false. även en variabel span med tom string som används till trashcan-loggan bredvid texten.

const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("counter");
let count = 0;
const toDoValues = {};
let span = "";
const info = document.getElementById("info");

//Här skapar jag en function som vid tryck på min button körs. Om man inte ifyltt ett värde så kommer en alert. Annars så skapas ett listelement och innehållet får samma innehåll som det man skrev i inputen. Sen skapar jag en variabel som får stringen som li innehöll, det för jag sedan över till vårt object. använder appendchild på listcontainer med vår skapade li ocjh sedan skapar jag en span tag som får klassen som länkar den till en icon. Gör samma sak där och låter det bli child till li. Ger sedan värdet false till vår string som vi lagt till i objektet. Tillsist så tömmer jag vår input.
counter.innerHTML = count;

function addTask() {
    if (inputBox.value === "") {
        info.innerText = "Du måste skriva något!";
    } else {
        const li = document.createElement("li");
        info.innerText = "";

        li.innerText = inputBox.value;
        const boxText = li.innerHTML;

        listContainer.appendChild(li);
        span = document.createElement("span");
        span.classList.add("fa", "fa-trash")
        li.appendChild(span);
        toDoValues[boxText] = false;
    }
    inputBox.value = "";
}

//Lagt till eventlistener på inputboxen som lyssnar efter enter keydown.

inputBox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
       addTask();
    }
})

// Om man clickar på spanen (krysset) så tar jag först parentelementets innehåll och ger det till en variabel som jag sedan raderar ur vårt object. Om texten som hörde ihop med soptunne-loggan hade klassen checked så minskar count med 1 sen gör jag så att counter visar värdet av count. Och tar till sist bort texten från sidan. 

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN") {
        const liText = e.target.parentElement.textContent;
    
        delete toDoValues[liText];
        
        if(e.target.parentElement.classList.contains("checked")){
            count --;
            counter.innerHTML = count;
        }
        e.target.parentElement.remove();
        
    }
})

//Om  man klickar på texten så ger jag variabeln input värdet av texten. Om texten hade klassen checked så tar jag bort den och ger den false i vårt object samt minskar count med 1. om den däremot inte hade klassen checked så ger vi den klassen checked och lägger den till true i vårt object och ökar count med 1. sen ger vi counter värdet av count och visar det på sidan.

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        
        const input = e.target.textContent;
        
        if ( e.target.classList.contains("checked")) {
            e.target.classList.remove("checked");
            toDoValues[input] = false;
            count--;
        } else {
            e.target.classList.add("checked");
            toDoValues[input] = true;
            count++;
        }
        counter.innerHTML = count;
    }
    
})