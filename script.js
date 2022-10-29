//Setting up initial page
let gridSlider = document.getElementById("gridSlider");
let currentSize = gridSlider.value;
let container = document.querySelector('.container');
let gridSize = document.getElementById('gridSize');
let colorPicker = document.getElementById('colorPicker');
container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
defGridItemCreate();

//Mousedown logic
let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

//Slider logic
gridSlider.onmousemove = defSliderMove;
gridSlider.onclick = defSliderMove;

//Eraser logic
let buttonEraser = document.getElementById('buttonEraser')
let buttonEraserDown = false
buttonEraser.onclick = function(){
    buttonEraserDown = !buttonEraserDown;
    buttonEraserDown.style.backgroundColor = 'black'
}





//Functions

//On change, delete current grid, set the new size, then recreate the grid
function defGridSliderChange(){
    defGridItemDelete();
    currentSize = gridSlider.value;
    defGridItemCreate();
    container.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    return currentSize
};
  
//On mousedown and mouseover, fill the cell
function defMouseDown(e) {
    if (e.type === 'mouseover' && !mouseDown){
    } else {
        if(buttonEraserDown){
            e.target.style.backgroundColor = null; 
        } else{
            e.target.style.backgroundColor = colorPicker.value;
        }
        
    };
};

//Create the grid items, append them in html, and put event listener
function defGridItemCreate(){
    for(let i=1; i <= currentSize * currentSize; i++){        
        let div = document.createElement('div');
        div.setAttribute('class', 'gridItems');
        div.addEventListener('mouseover', defMouseDown);
        div.addEventListener('mousedown', defMouseDown);
        container.appendChild(div);
    };
}; 

//Delete current grid
function defGridItemDelete(){
    let div = document.querySelectorAll('.container > div')
    for(items of div){
        items.remove()
    };
};

//If the slider was changed, update grid size caption and grid itself
function defSliderMove(e){
    if (e.type === 'mousemove' && !mouseDown) {
    } else {
        defGridSliderChange();
        gridSize.innerHTML = 'Grid Size: ' + currentSize + ' x ' + currentSize;
    }
};



