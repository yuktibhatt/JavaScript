var context;
var x= 100;
var y = 200;
var dx = 5;
var dy =5;
function init()
{
    context = myCanvas.getContext('2d');
    setInterval(draw, 10);
    
}

function draw() {
    context.clearRect(0,0, 500, 500);
    context.beginPath();
    context.fillStyle="#0000ff";
    context.arc(x,y,20,0,Math.PI*2,true); //drawing a circle of radius 20
    context.closePath();
    context.fill();

    // Boundary 
    if( x<0 || x>500) dx=-dx; 
    if( y<0 || y>500) dy=-dy; 
    x +=dx;
    y +=dy;
}

