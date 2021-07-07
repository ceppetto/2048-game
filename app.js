let board = new Array(4);

// set board value to zero
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

// generate a random number (2 or 4)
function randNumGenerator() {
    const randNum = Math.floor(Math.random() * 2);
    if(randNum == 0) return 2;
    if(randNum == 1) return 4;
}

// get a empty box
function randBoxPicker() {
    const randCol = Math.floor(Math.random() * 4);
    const randRow = Math.floor(Math.random() * 4);
    
    if(board[randCol][randRow] !== 0) {
        randBoxPicker();
    } else {
        return [randCol, randRow];
    }
}

function paintBoard() {
    const randNum = randNumGenerator(); // 2 or 4
    const randPos = randBoxPicker();
    const randCol = randPos[0];
    const randRow = randPos[1];
    board[randCol][randRow] = randNum;

    let pickedTr = document.getElementById('tr-' + randCol);
    pickedTr.children[randRow].innerText = randNum;
}

function startGame() {
    setBoard();
    paintBoard();
    paintBoard();
}

startGame();

