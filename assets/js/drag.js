import { Lapin } from "/assets/js/Lapin.js";
const position2 = { x: 0, y: 0 }
let posX;
let posY;
let triggers = false
let revenus = document.querySelector("#revenu")
const fond = document.querySelector(".fondbg")
export let animals = []
export let totalAnimaux = 0;

// DRAG AND DROP

interact('.draggable')
  .draggable({
    autoScroll: true,
    listeners: {
      move: dragMoveListener,
      end(event) {
        if (triggers) {
          event.target.style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)'
          event.target.setAttribute('data-x', 0)
          event.target.setAttribute('data-y', 0)
          triggers = false
        }
      }
    }
  })
function dragMoveListener(event) {
  var target = event.target
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
window.dragMoveListener = dragMoveListener

// MENU NO RESET DRAG

interact(document.body)
  .dropzone({
    ondrop: function (event) {

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }
    }
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')
  })

// enclos 4 add animals

interact(".enclos4")
  .dropzone({
    ondrop: function (event) {
      console.log(event.clientX)


      // ICI FUNCTION CREATION ANIMAUX

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }

      if (event.target.classList.contains("enclos4")) {
        let test = [4, event.target.id]
        animals.push(test)
        console.log(event.relatedTarget.dataset.cout)
        revenus.dataset.revenu = revenus.dataset.revenu - event.relatedTarget.dataset.cout
        revenus.innerHTML  =  revenus.dataset.revenu
        totalAnimaux += event.relatedTarget.dataset.cout;
      }
      console.log(animals)
    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })

  // ENCLOS 1 ZONE

  interact(".enclos1")
  .dropzone({
    ondrop: function (event) {
      console.log(event.clientX)


      // ICI FUNCTION CREATION ANIMAUX

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }

      if (event.target.classList.contains("enclos1")) {
        let test = [1, event.target.id]
        animals.push(test)
        revenus.dataset.revenu = revenus.dataset.revenu - event.relatedTarget.dataset.cout
        revenus.innerHTML  =  revenus.dataset.revenu
        totalAnimaux += event.relatedTarget.dataset.cout;
      }
      console.log(animals)
    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })

  // ENCLOS 2 ZONE 

  interact(".enclos2")
  .dropzone({
    ondrop: function (event) {
      console.log(event.clientX)


      // ICI FUNCTION CREATION ANIMAUX

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }

      if (event.target.classList.contains("enclos2")) {
        let test = [2, event.target.id]
        animals.push(test)
        revenus.dataset.revenu = revenus.dataset.revenu - event.relatedTarget.dataset.cout
        revenus.innerHTML  =  revenus.dataset.revenu
        totalAnimaux += event.relatedTarget.dataset.cout;
      }
      console.log(animals)
    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })


  // ENCLOS 3 ZONE

  interact(".enclos3")
  .dropzone({
    ondrop: function (event) {
      console.log(event.clientX)


      // ICI FUNCTION CREATION ANIMAUX

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }

      if (event.target.classList.contains("enclos3")) {
        let test = [3, event.target.id]
        revenus.dataset.revenu = revenus.dataset.revenu - event.relatedTarget.dataset.cout
        revenus.innerHTML  =  revenus.dataset.revenu
        totalAnimaux += event.relatedTarget.dataset.cout;
        animals.push(test)

      }
      console.log(animals)
    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })

  let gMouseDownX = 0
  let gMouseDownY = 0

function total(revenu){
  revenus.innerHTML =revenu
}
const position = { x: 0, y: 0 }

interact('.fondimg').draggable({
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'body'
    })
  ],
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
      
        event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    
      },
     
  }
})


