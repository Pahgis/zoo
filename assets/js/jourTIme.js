import { animals, animalsMaxMoney } from "/assets/js/drag.js";

let timer = document.querySelector(".timer")
let tableauResultat = document.querySelector(".tableauResultat")
let buttonJourSuivant = document.querySelector(".joursuivant")
let trigger = false;
let enclosEntretien = document.querySelector(".enclosEntretien")
let animalEntretien = document.querySelector(".animalEntretien")
let animalBuy = document.querySelector(".animalBuy")
let clientBenef = document.querySelector(".client")
let revenus = document.querySelector("#revenu")


let  i = 0;

let total = 0 

setInterval(() => {
    console.log(animalsMaxMoney)
}, 2000);


function createToad(x,y){
    let div = document.createElement("div")
    document.body.append(div)
    div.classList.add("bat")
    div.style.transform =
        `translate(${parseInt(x)}px, ${parseInt(y)}px)`
    
  }


// FUNCTION ENVOI DATA JOURNÉE

function resultat(){
    let  data = new FormData()
    data.append("qsdqd", "sqdqd")
    fetch("./process/db_add.php" , {
        method:"POST",
        body: data
    })
}

// JOUR SUIVANT

/*buttonJourSuivant.addEventListener("click", function(e){
    tableauResultat.style.display = "none ";
    //resultat()
    DureJour();

}

// FUNCTION TIMER DE LA JOURNEE

function DureJour(){
    i=0
    setTimeout(() => {
        
        i++
     
       tableauResultat.style.display = "block ";
       // total = (-enclosEntretien.value) - animalBuy.value + clientBenef.value - animalEntretien.value
    }, 5000);
}

// LANCEMENT DE LA PREMIERE JOURNÉE

DureJour();
)*/



