let board = new Array(4);
let totalScore = 0;
const scoreLabel = document.getElementById('score');

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
    if(!isFull) randBoxPicker();
    if(isFull) endGame();

    
    scoreLabel.innerText = `Total Score: ${totalScore}`;

    for(let i = 0; i < 4; i ++) {
        let pickedTr = document.getElementById('tr-' + i);
        for(let j = 0; j < 4; j ++) {
            pickedTr.children[j].innerText = board[i][j];
            if(board[i][j] === 0) {
                pickedTr.children[j].style.backgroundColor = "#CDC1B4";
                pickedTr.children[j].style.color = "#7b766e";
                pickedTr.children[j].innerText = '';
            }
            if(board[i][j] === 2) {
                pickedTr.children[j].style.backgroundColor = "#EEE4DA";
                pickedTr.children[j].style.color = "#7b766e";
            }
            if(board[i][j] === 4) {
                pickedTr.children[j].style.backgroundColor = "#EDE0C8";
                pickedTr.children[j].style.color = "#7b766e";
            }
            if(board[i][j] === 8) {
                pickedTr.children[j].style.backgroundColor = "#F2B179";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 16) {
                pickedTr.children[j].style.backgroundColor = "#F59563";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 32) {
                pickedTr.children[j].style.backgroundColor = "#F67B61";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 64) {
                pickedTr.children[j].style.backgroundColor = "#F65E3B";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 128) {
                pickedTr.children[j].style.backgroundColor = "#EDCF72";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 256) {
                pickedTr.children[j].style.backgroundColor = "#EDCF72";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 512) {
                pickedTr.children[j].style.backgroundColor = "#EDCF72";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 1024) {
                pickedTr.children[j].style.backgroundColor = "#EDCF72";
                pickedTr.children[j].style.color = "white";
            }
            if(board[i][j] === 2048) {
                pickedTr.children[j].style.backgroundColor = "#EDC22E";
                pickedTr.children[j].style.color = "white";
            }
        }
    }
}

function startGame() {
    setBoard();
    paintBoard();
}

function checkFull() {
    let flag = 1;
    for(let i = 0; i < 4; i ++) {
        for(let j = 0; j < 4; j ++) {
            if(board[i][j] === 0) {
                flag = 0;
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
    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 0; i < 3; i ++) {
            for(let j = 0; j < 4; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i+1][j];
                    board[i+1][j] = 0;
                } else if (board[i][j] === board[i+1][j]) {
                    board[i][j] += board[i+1][j];
                    board[i+1][j] = 0;
                    totalScore += board[i][j];
                }
            }
        }
    }
    

    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 0; i < 3; i ++) {
            for(let j = 0; j < 4; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i+1][j];
                    board[i+1][j] = 0;
                }
            }
        }
    }

    paintBoard();
}

function pressDown() {
    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 3; i > 0; i --) {
            for(let j = 0; j < 4; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i-1][j];
                    board[i-1][j] = 0;
                } else if (board[i][j] === board[i-1][j]) {
                    board[i][j] += board[i-1][j];
                    board[i-1][j] = 0;
                    totalScore += board[i][j];
                }
            }
        }
    }

    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 3; i > 0; i --) {
            for(let j = 0; j < 4; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i-1][j];
                    board[i-1][j] = 0;
                } 
            }
        }
    }

    paintBoard();
}

function pressRight() {
    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 0; i < 4; i ++) {
            for(let j = 3; j > 0; j --) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i][j-1];
                    board[i][j-1] = 0;
                } else if (board[i][j] === board[i][j-1]) {
                    board[i][j] += board[i][j-1];
                    board[i][j-1] = 0;
                    totalScore += board[i][j];
                }
            }
        }
    }
    
    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 0; i < 4; i ++) {
            for(let j = 3; j > 0; j --) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i][j-1];
                    board[i][j-1] = 0;
                }
            }
        }
    }

    paintBoard();
}

function pressLeft() {
    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 0; i < 4; i ++) {
            for(let j = 0; j < 3; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i][j+1];
                    board[i][j+1] = 0;
                } else if (board[i][j] === board[i][j+1]) {
                    board[i][j] += board[i][j+1];
                    board[i][j+1] = 0;
                    totalScore += board[i][j];
                }
            }
        }
    }
    for(let loop = 0; loop < 2; loop ++) {
        for(let i = 0; i < 4; i ++) {
            for(let j = 0; j < 3; j ++) {
                if(board[i][j] === 0) {
                    board[i][j] = board[i][j+1];
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

