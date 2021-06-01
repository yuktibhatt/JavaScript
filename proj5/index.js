const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 20;
let speed = 15 ;
let upPress = false;
let downPress = false;
let leftPress = false;
let rightPress = false;


//game loop
function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundaryCheck();
    drawGreenBlob();
    
}

function boundaryCheck(){
    if ( y< radius) {  //up
        y = radius;
    }
    if(y > canvas.height-radius){    //down
        y = canvas.height-radius; 
    }
    if ( x < radius){            //left
        x = radius;
    }
    if ( x> canvas.width - radius) {    //right
        x = canvas.width - radius;
    }
}


function inputs() {
    if (upPress) {
        y = y- speed;
    }
    if (downPress) {
        y = y + speed;
    }
    if(leftPress) {
        x = x - speed;
    }
    if(rightPress){
        x = x + speed;
    }
}

function drawGreenBlob(){
    ctx.fillStyle = "green";
    if(upPress) {
        ctx.fillStyle = "red";
    }
    if(downPress) {
        ctx.fillStyle = "blue";
    }
    if(rightPress) {
        ctx.fillStyle = "yellow";
    }
    if(leftPress) {
        ctx.fillStyle = "pink";
    }
    ctx.beginPath();
    ctx.arc(x,y, radius, 0, Math.PI *2);
    ctx.fill();

}

function clearScreen() {
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);


function keyDown(event){
    //up
    if(event.keyCode == 38){
        upPress = true;
    }
    //down
    if(event.keyCode == 40) {    //down key is 40
        downPress = true;
    }
    //left
    if(event.keyCode == 37) {    
        leftPress = true;
    }
    //right
    if(event.keyCode == 39) {    
        rightPress = true;
    }

}


function keyUp(event){
    //up
    if(event.keyCode == 38){
        upPress = false;
    }
    //down
    if(event.keyCode == 40) {    //down key is 40
        downPress = false;
    }
    //left
    if(event.keyCode == 37) {   
        leftPress = false;
    }
    //right
    if(event.keyCode == 39) {    
        rightPress = false;
    }
    
}


drawGame();

