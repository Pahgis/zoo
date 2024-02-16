import { animals } from "/assets/js/drag.js";

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


// FUNCTION ENVOI DATA JOURNÉE

function resultat(){
    let  data = "ok"
    fetch("./process/db_add.php" , {
        method:"POST",
        body: data
    })
}

// JOUR SUIVANT

buttonJourSuivant.addEventListener("click", function(e){
    tableauResultat.style.display = "none ";
    resultat()
    //DureJour();

})

// FUNCTION TIMER DE LA JOURNEE

function DureJour(){
    i=0
    setTimeout(() => {
        console.log("fin de journée")
        i++
       console.log(i)
       tableauResultat.style.display = "block ";
       // total = (-enclosEntretien.value) - animalBuy.value + clientBenef.value - animalEntretien.value
    }, 5000);
}

// LANCEMENT DE LA PREMIERE JOURNÉE

//DureJour();

