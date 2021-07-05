let board = new Array(4);

const box00 = document.getElementById('#b00');
const box01 = document.getElementById('#b01');
const box02 = document.getElementById('#b02');
const box03 = document.getElementById('#b03');
const box10 = document.getElementById('#b10');
const box11 = document.getElementById('#b11');
const box12 = document.getElementById('#b12');
const box13 = document.getElementById('#b13');
const box20 = document.getElementById('#b20');
const box21 = document.getElementById('#b21');
const box22 = document.getElementById('#b22');
const box23 = document.getElementById('#b23');
const box30 = document.getElementById('#b30');
const box31 = document.getElementById('#b31');
const box32 = document.getElementById('#b32');
const box33 = document.getElementById('#b33');

function setBoard() {
    for(let i = 0; i < 4; i ++) {
        board[i] = new Array(4);
    }

    for(let i = 0; i < 4; i ++) {
        for(let j = 0; j < 4; j ++) {
            board[i][j] = 0;
        }
    }
}

function randNumGenerator() {

}

setBoard();
randNumGenerator();

document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if(key === 'ArrowUp') pressDown();
    if(key === 'ArrowDown') pressUp();
    if(key === 'ArrowRight') pressRight();
    if(key === 'ArrowLeft') pressLeft();
});