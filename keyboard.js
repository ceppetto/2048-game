function pressUp() {
    console.log("up");
}

function pressDown() {
    console.log("down");
}

function pressRight() {
    console.log("right");
}

function pressLeft() {
    console.log("left");
}

// keyboard control 
document.addEventListener('keydown', (event) => {
    const key = event.key;
    
    if(key === 'ArrowUp') pressUp();
    if(key === 'ArrowDown') pressDown();
    if(key === 'ArrowRight') pressRight();
    if(key === 'ArrowLeft') pressLeft();
});