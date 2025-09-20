let inptEl = document.getElementById("inpt");
let btnEl = document.getElementById("btn");
let ulEl = document.getElementById("Ul");

btnEl.addEventListener("click", () => {

    if(inptEl.value === ""){

        alert("Please enter something!");

    }else{

        let liEl = document.createElement("li");
        let textEl = document.createTextNode(inptEl.value);

        ulEl.appendchild(liEl);
        liEl.appendChild(textEl);
        inptEl.value = "";
    }
});