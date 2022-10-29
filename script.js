//Setting up initial page
let gridSlider = document.getElementById("gridSlider");
let currentSize = gridSlider.value;
let container = document.querySelector('.container');
container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
gridItemCreate();

//Events
gridSlider.onchange = gridSliderOnChange


let gridSize = document.getElementById('gridSize');

gridSlider.addEventListener('mouseover', defMouseDownSlider);
gridSlider.addEventListener('mousedown', defMouseDownSlider);


function defMouseDownSlider(e){
    if (e.type === 'mouseover' && !mouseDown){
    } else {
        gridSize.innerHTML = 'Grid Size: ' + currentSize
    };
}

//Setting up fill logic
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//










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
function gridSliderOnChange(){
    gridItemDelete();
    currentSize = gridSlider.value;
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
    };
};

