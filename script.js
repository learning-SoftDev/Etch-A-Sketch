//Setting up initial page
let slicer = document.getElementById("slicer");
let currentSize = slicer.value
let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`

gridItemCreate();

//Events
slicer.onchange = slicerOnChange

//Setting up fill logic
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//
let gridSize = document.getElementById('grid-size');









//Functions

//Create the grid items, append them in html, and put event listener
function gridItemCreate(){
    for(let i=1; i <= currentSize * currentSize; i++){        
        let div = document.createElement('div');
        div.setAttribute('class', 'gridItems');
        div.addEventListener('mouseover', defMouseDown);
        div.addEventListener('mousedown', defMouseDown);
        container.appendChild(div);
    };
}; 

//On change, delete current grid, set the new size, then recreate the grid
function slicerOnChange(){
    gridItemDelete();
    currentSize = slicer.value;
    gridItemCreate();
    container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`
    container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`
    
};
  
//Delete current grid
function gridItemDelete(){
    let div = document.querySelectorAll('.container > div')
    for(items of div){
        items.remove()
    };
};

//On mousedown and mouseover, fill the cell
function defMouseDown(e) {
    if (e.type === 'mouseover' && !mouseDown){
    } else {
        e.target.style.backgroundColor = 'red';
        gridSize.innerHTML = 'Grid Size: ' + 'hakdog'
    };
};

