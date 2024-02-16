let menuButton = document.querySelector(".buttonMenu")
let menu = document.querySelector(".menuTest")
let trigger = false
let buttonAnimal = document.querySelector(".buttonAnimal")
let buttonEmployer = document.querySelector(".buttonEmployer")
let buttonData = document.querySelector(".buttonData")
let employer = document.querySelector(".employer")
let animaux = document.querySelector(".animaux")
let revenu = document.querySelector(".revenu")


menuButton.addEventListener("click", function (e) {
    if (trigger) {
        menu.style.display = "none"
        trigger = false
    } else {
        menu.style.display = "flex"
        trigger = true
    }
})

window.addEventListener("click", function (e) {
    switch (e.target.id) {
        case "buttonAnimal":
            animaux.style.display = "block"
            employer.style.display = "none"
            revenu.style.display = "none"
            break;
        case "buttonEmployer":
            animaux.style.display = "none"
            employer.style.display = "block"
            revenu.style.display = "none"
            break;
        case "buttonData":
            animaux.style.display = "none"
            employer.style.display = "none"
            revenu.style.display = "block"
            break;

    }
})

