import { animals } from "./drag.js";
let enclos = document.querySelectorAll(".enclos")
let div = document.createElement("div")
document.body.append(div)
let trigger = false
div.style.display = "none"


div.innerHTML = `
<div class="row">
    <h1 class="text-center">Enclos</h1>
    <div class="col-1"></div>
    <div class="animalEnlosList col-6 pt-5"></div>
</div>

`
let divlist = document.querySelector(".animalEnlosList")


enclos.forEach(e => {
    e.addEventListener("click", function(el){
        let enclosAnimals = []
        if(el.target.classList.contains("enclos4") && trigger === false){
            trigger = true
            div.style.display = "block"
             animals.forEach(e => {
            if(e[0] === 4)
            {
                enclosAnimals.push(e[1])
                
            }})
            ;
            div.classList.add("detailEnclos")
            divlist.innerHTML = ""
            enclosAnimals.forEach(element => {
             console.log(element)
            
             divlist.innerHTML += `
             
             <div class="d-flex flex-row align-items-center justify-content-evenly">
                 <div src='' class="${element+"Enclos"}" ></div>
                 <button class="animalMalade btn btn-warning " style="height:40px">Soigner</button>
                 <button class="animalKill btn btn-danger" style="height:40px">Sup</button>
             </div>
             `
            
            });
        }else{
            trigger = false;
            div.style.display ="none"
          
            
        }
        
      

        
    })
});






