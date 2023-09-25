// Här skapar jag variabeln count som kommer användas för att öka och misnka värdet på countern. Skapar även varaibler av html elementen med diverse ID. Skapar ett object där jag sparar todos och om dom är gjorda eller ej. även en en variabel span med tom string som används till kryssloggan bredvid texten.

const inputBox = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");
const counter = document.getElementById("counter");
let count = 0;
const toDoValues = {};
let span = "";

//Här skapar jag en function som vid tryck på min button körs. Om man inte ifyltt ett värde så kommer en alert. Annars så skapas ett listelement och innehållet får samma innehåll som det man skrev i inputen. Sen skapar jag en variabel som får stringen som li innehöll, det för jag sedan över till vårt object. använder appendchild på listcontainer med vår skapade li ocjh sedan skapar jag en span tag som får värdet av koden till ett kryss. Gör samma sak där och låter det bli child till li. Ger sedan värdet false till vår string som vi lagt till i objektet. Tillsist så tömmer jag vår input.

function addTask() {
    if (inputBox.value === "") {
        alert("Du måste skriva något!");
    } else {
        const li = document.createElement("li");

        li.innerHTML = inputBox.value;
        const boxText = li.innerHTML;

        listContainer.appendChild(li);
        span = document.createElement("span");
        span.classList.add("fa", "fa-trash")
        li.appendChild(span);
        toDoValues[boxText] = false;
    }
    inputBox.value = "";
}

// Om man clickar på spanen (krysset) så tar jag först parentelementets innehåll och ger det till en variabel och sedan tar jag innehållet av vår span och ger det till en annan variabel. Jag ger sedan variabeln litext värdet av licontent - spancontent och kan då ta bort den ur vårt objekt. Om den texten hade klassen checked så minskar vi count med 1.

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

//Om man klickar på själva texten så skapar vi variabler som har värdet av vår span och hela raden och en text - span. om den har klassen checked så tar vi bort klassen checked och minskar count med 1 om den inte har klassen checked så ger vi den det och ökar count med 1. om count är lika med 0 så tömmer ger vi counter ett värde på en tom string. Sen ger vi värdet i counter värdet count så det visas.

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
        if (count == 0) {
            counter.innerHTML = "";
        }else {
        counter.innerHTML = count; }
    }
    
})