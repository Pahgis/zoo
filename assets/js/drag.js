

const position = { x: 0, y: 0 }
let posX;
let posY;

// DRAG AND DROP

interact('.draggable').draggable({
  listeners: {
    start(event) {
      console.log(event.type, event.target)

    },
    move(event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
    end(event) {
      if (event.relatedTarget === null && event.target === "boom") {
        console.log("ok")
        position.x = 0
        position.y = 0
        event.target.style.transform =
          `translate(${position.x}px, ${position.y}px)`
      }
    }
  }
})


let dropTarget = document.querySelector(".test")
interact(dropTarget)
  .dropzone({
    ondrop: function (event) {

      // ICI FUNCTION CREATION ANIMAUX

    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })




 


