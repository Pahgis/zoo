let posMouseX;
let posMouseY;
const position2 = { x: 0, y: 0 }
let posX;
let posY;
let triggers = false
let revenus = document.querySelector("#revenu")
const fond = document.querySelector(".fondbg")
let toadAll = document.querySelector(".toad")
let enclos1=0;
let enclos2=0;
let enclos3=0;
let enclos4=0;
let posMouseXinit;
let posMouseYinit;
export let animalsMaxMoney = 0;
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
function createToad(x,y, animal){
  setTimeout(() => {
    switch (animal) {
      case "toad":
        animalsMaxMoney += 100;
        break;
        case "slime":
        animalsMaxMoney += 200;
        break;
        case "bat":
        animalsMaxMoney += 300;
        break;
        case "citrouille":
        animalsMaxMoney += 400;
        break;
    
     
        
    }
    let svg = document.querySelector("svg")
  //   let div = document.createElement("div")
  // document.body.append(div)
  // div.classList.add(animal)
  // div.style.transform =
  //     `translate(${parseInt(x)}px, ${parseInt(y)}px)`
  // }, 1000);
  let scrollX = parseInt(document.querySelector('.fondimg').getAttribute("pos-x"))
  let scrollY = parseInt(document.querySelector('.fondimg').getAttribute("pos-y"))
    svg.innerHTML += `<use   href="#${animal}1" x="${x - scrollX}" y="${y - scrollY}"></use>`;
  }, 1000);
}

interact(".enclos4")
  .dropzone({
    ondrop: function (event) {
      
      // ICI FUNCTION CREATION ANIMAUX
     
      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }
      console.log(event.relatedTarget.classList)
      if (event.target.classList.contains("enclos4") && event.relatedTarget.id != "menuTest" && enclos4 < 6 && event.relatedTarget.classList.contains("draggable")) {
        console.log(enclos4)
        enclos4++
        let test = [4, event.relatedTarget.id, posMouseX,posMouseY]
        createToad(test[2] , test[3] , event.relatedTarget.id)
        animals.push(test)
        
      }
      
    }
    
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')

  })

  // ENCLOS 1 ZONE

  interact(".enclos1")
  .dropzone({
    ondrop: function (event) {
      


      // ICI FUNCTION CREATION ANIMAUX

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }

      if (event.target.classList.contains("enclos1") && event.relatedTarget.id != "menuTest" && enclos1<6 && event.relatedTarget.classList.contains("draggable")) {
        enclos1++
        let test = [1, event.relatedTarget.id, posMouseX,posMouseY]
        createToad(test[2] , test[3] , event.relatedTarget.id)
        animals.push(test)
        
      }
      
    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })

  // ENCLOS 2 ZONE 

  interact(".enclos2")
  .dropzone({
    ondrop: function (event) {
      


      // ICI FUNCTION CREATION ANIMAUX

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }

      if (event.target.classList.contains("enclos2") && event.relatedTarget.id != "menuTest" && enclos2 < 6 && event.relatedTarget.classList.contains("draggable")) {
        enclos2++
        let test = [2, event.relatedTarget.id, posMouseX,posMouseY]
        createToad(test[2] , test[3] , event.relatedTarget.id)
        animals.push(test)
       
      }
     
    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })


  // ENCLOS 3 ZONE

  interact(".enclos3")
  .dropzone({
    ondrop: function (event) {
      


      // ICI FUNCTION CREATION ANIMAUX

      if (event.relatedTarget.id === "menuTest") {
        triggers = false;
      } else {

        triggers = true
      }

      if (event.target.classList.contains("enclos3") && event.relatedTarget.id != "menuTest" && enclos3 < 6 && event.relatedTarget.classList.contains("draggable")) {
        enclos++
        let test = [3, event.relatedTarget.id, posMouseX,posMouseY]
        createToad(test[2] , test[3] , event.relatedTarget.id)
        animals.push(test)

      }
      
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
     
      
      
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
     
        event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
        event.target.setAttribute('pos-x', position.x)
        event.target.setAttribute('pos-y', position.y)
      },
     
  }
})


  window.addEventListener("mousemove", function(e){
  
    posMouseX = e.clientX
    posMouseY = e.clientY
    
  })


