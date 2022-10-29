//Setting up initial page
let gridSlider = document.getElementById("gridSlider");
let currentSize = gridSlider.value;
let container = document.querySelector('.container');
let gridSize = document.getElementById('gridSize');
let colorPicker = document.getElementById('colorPicker');
let currentMode = 'default'
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

//Clear
let buttonClear = document.getElementById('buttonClear');
buttonClear.onclick = defGridReset;

//ColorMode logic
let buttonColor = document.getElementById('buttonColor');
buttonColor.classList.add('active')
buttonColor.onclick = function(){
    currentMode = 'default'; 
    defModeActivate()
} 

//Eraser logic
let buttonEraser = document.getElementById('buttonEraser');
buttonEraser.onclick = function(){
    currentMode = 'eraser'; 
    defModeActivate()
} 

//Rainbow Logic
let buttonRainbow = document.getElementById('buttonRainbow');
buttonRainbow.onclick = function() {
    currentMode = 'rainbow'; 
    defModeActivate()
}

//Color picker logic
colorPicker.onclick = function(){
    currentMode = 'default'; 
    defModeActivate()
} 

//Logic for setting the clicked design of the modes
let buttonArray = [buttonEraser,buttonRainbow,buttonColor]
function defModeActivate(){
    for(items of buttonArray){
        items.classList.remove('active')
    };

    if(currentMode==='eraser'){
        buttonEraser.classList.add('active')
    } else if (currentMode === 'rainbow') {
        buttonRainbow.classList.add('active')
    } else {
        buttonColor.classList.add('active')
    };

};


//Functions

//On change, delete current grid, set the new size, then recreate the grid
function defGridReset(){
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
        if(currentMode === 'eraser'){
            e.target.style.backgroundColor = null; 
        } else if (currentMode === 'rainbow'){
            let rainbowR = Math.floor(Math.random() * 256);
            let rainbowG = Math.floor(Math.random() * 256);
            let rainbowB = Math.floor(Math.random() * 256);
            e.target.style.backgroundColor = `rgb(${rainbowR},${rainbowG},${rainbowB})`
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
        defGridReset();
        gridSize.innerHTML = 'Grid Size: ' + currentSize + ' x ' + currentSize;
    }
};

