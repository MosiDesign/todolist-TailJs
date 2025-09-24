let inptEl = document.getElementById("inpt");
let btnEl = document.getElementById("btn");
let ulEl = document.getElementById("Ul");

btnEl.addEventListener("click", () => {

    if(inptEl.value === ""){

        alert("Please enter something!");

    }else{

        const liEl = document.createElement("li");
        const textEl = document.createTextNode(inptEl.value);

        liEl.appendChild(textEl);
        ulEl.appendChild(liEl);
        
        inptEl.value = "";
    }
});