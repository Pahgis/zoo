const position = { x: 0, y: 0 }
let posX;
let posY;
interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
      posX = event.dx
      posY = event.dy
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy
        
      event.target.style.transform =
        `translate(${position.x}px, ${position.y}px)`
    },
    end(event){
      if(event.relatedTarget === null){
        console.log("ok")
       
      }
    }
  }
})
let dropTarget = document.querySelector(".test")
interact(dropTarget)
  .dropzone({
    ondrop: function (event) {
      
      // ICI FUNCTION CREATION ANIMAUX
      if(event.relatedTarget === null){
        console.log("ok")
        restoreToOriginalPosition
      }
    }
  })
  .on('dropactivate', function (event) {
   
    event.target.classList.add('drop-activated')
  })

  const restoreToOriginalPosition = (event) => {
    event.relatedTarget.removeAttribute("data-x");
    event.relatedTarget.removeAttribute("data-y");
    event.relatedTarget.style.transform = "translate(0px, 0px)";
  };