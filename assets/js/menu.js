let menuButton = document.querySelector(".buttonMenu")
let menu = document.querySelector(".menuTest")
let trigger = false
let spawn = document.querySelector(".spawn")
let vache = document.querySelector(".vache")

menuButton.addEventListener("click",function(e){
    if(trigger){
        menu.style.display = "none"
        trigger = false
    }else{
        menu.style.display = "flex"
        trigger = true
    }
})

