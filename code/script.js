// setup

const canvas = document.getElementById('canvas1'); //from html
const ctx = canvas.getContext('2d');
canvas.width = 900; //from css
canvas.height = 600;

// global variables
const cellSize = 100;
const cellGap = 3;
const gameGrid = [];

// game board
const controlsBar = {
    width: canvas.width,
    height: cellSize, 
}
class Cell {
    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.width = cellSize;
        this.height = cellSize;
    }
    draw() {
        ctx.strokeStyle = 'black';
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }
}
function createGrid() {
    for (let y = cellSize; y < canvas.height; y += cellSize) {
        for (let x = 0; x < canvas.width; x += cellSize) {
            gameGrid.push(new Cell(x, y));
        }
    }
}
createGrid();
function handleGameGrid() {
    for (let i = 0; i < gameGrid.length; i++) {
        gameGrid[i].draw();
    }
}
// projectiles
// defenders
// enemies
// resources
// utilities
function animate() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, controlsBar.width, controlsBar.height);
    handleGameGrid();
    requestAnimationFrame(animate);
}

animate();