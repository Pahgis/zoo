/*const position = { x: 0, y: 0 }
let posX;
let posY;
interact('.draggable').draggable({
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
    end(event){
      if(event.relatedTarget === null){
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


  // MAP MOVE

  const el = document.querySelector("#module");

  el.addEventListener("mousemove", (e) => {
    el.style.backgroundPositionX = -e.offsetX + "px";
    el.style.backgroundPositionY = -e.offsetY + "px";
  });

*/
  
  