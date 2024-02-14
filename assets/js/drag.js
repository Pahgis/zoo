
const position2 = { x: 0, y: 0 }
let posX;
let posY;
let triggers = false

// DRAG AND DROP

interact('.draggable')
  .draggable({
    // enable inertial throwing
    
    // keep the element within the area of it's parent
    
    // enable autoScroll
    autoScroll: true,

    listeners: {
      // call this function on every dragmove event
      move: dragMoveListener,
  
      // call this function on every dragend event
      end (event) {
        
          if(triggers){
            event.target.style.transform = 'translate(' + 0 + 'px, ' + 0 + 'px)'
            event.target.setAttribute('data-x', 0)
            event.target.setAttribute('data-y', 0)
            triggers = false
            dropAnimal(event.clientX, event.clientY)
          }
        
        
      }
        
    }
    
  })
function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}
window.dragMoveListener = dragMoveListener
// this function is used later in the resizing and gesture demos

let dropTarget = document.querySelector(".encloszone1")
interact(dropTarget)
  .dropzone({
    ondrop: function (event) {
      console.log(event.clientX)
      // ICI FUNCTION CREATION ANIMAUX
   
     if(event.relatedTarget.id === "menuTest"){
      triggers = false;
     }else{
      
      triggers = true
     }
      
    }
  })
  .on('dropactivate', function (event) {

    event.target.classList.add('drop-activated')
  })








