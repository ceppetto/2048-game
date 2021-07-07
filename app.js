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

    randBoxPicker();
}

// generate a random number (2 or 4)
function randNumGenerator() {
    const randNum = Math.floor(Math.random() * 2);
    if(randNum == 0) return 2;
    if(randNum == 1) return 4;
}

// get a empty box
function randBoxPicker() {
    let randNum = randNumGenerator();

    const randCol = Math.floor(Math.random() * 4);
    const randRow = Math.floor(Math.random() * 4);
    
    if(board[randCol][randRow] !== 0) {
        randBoxPicker();
    } else {
        board[randCol][randRow] = randNum;
    }
}

function paintBoard() {
    let isFull = checkFull();
    if(isFull) randBoxPicker();

    for(let i = 0; i < 4; i ++) {
        let pickedTr = document.getElementById('tr-' + i);
        for(let j = 0; j < 4; j ++) {
            pickedTr.children[j].innerText = board[i][j];
        }
    }
    
}

function startGame() {
    setBoard();
    paintBoard();
}

function checkFull() {
    let flag = 0;
    for(let i = 0; i < 4; i ++) {
        for(let j = 0; j < 4; j ++) {
            if(board[i][j] === 0) {
                flag = 1;
                return flag;
            }
        }
    }

    return flag;
}

function endGame() {

}

// keyboard controls
function pressUp() {
    for(let loop = 0; loop < 3; loop ++) {
        for(let i = 0; i < 3; i ++) {
            for(let j = 0; j < 4; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i+1][j];
                    board[i+1][j] = 0;
                } else if (board[i][j] === board[i+1][j]) {
                    board[i][j] += board[i+1][j];
                    board[i+1][j] = 0;
                }
            }
        }
    }

    paintBoard();
}

function pressDown() {
    for(let loop = 0; loop < 3; loop ++) {
        for(let i = 3; i > 0; i --) {
            for(let j = 0; j < 4; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i-1][j];
                    board[i-1][j] = 0;
                } else if (board[i][j] === board[i-1][j]) {
                    board[i][j] += board[i-1][j];
                    board[i-1][j] = 0;
                }
            }
        }
    }

    paintBoard();
}

function pressRight() {
    for(let loop = 0; loop < 3; loop ++) {
        for(let i = 0; i < 4; i ++) {
            for(let j = 3; j > 0; j --) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i][j-1];
                    board[i][j-1] = 0;
                } else if (board[i][j] === board[i][j-1]) {
                    board[i][j] += board[i][j-1];
                    board[i][j-1] = 0;
                }
            }
        }
    }

    paintBoard();
}

function pressLeft() {
    for(let loop = 0; loop < 3; loop ++) {
        for(let i = 0; i < 4; i ++) {
            for(let j = 0; j < 3; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i][j+1];
                    board[i][j+1] = 0;
                } else if (board[i][j] === board[i][j+1]) {
                    board[i][j] += board[i][j+1];
                    board[i][j+1] = 0;
                }
            }
        }
    }

    paintBoard();
}

// start a game
startGame();

document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if(key === 'ArrowUp') pressUp();
    if(key === 'ArrowDown') pressDown();
    if(key === 'ArrowRight') pressRight();
    if(key === 'ArrowLeft') pressLeft();
});

