// setting canvas
const canvas = document.getElementById("canvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// array used for random colors of circles
const color = ["rgba(240,92,63,.7)", "rgba(35,138,155,.7)", "rgba(231,43,142,.7)"];


// listen to click events adding ball for each click
canvas.addEventListener("click", function(){ 
	var randC = color[Math.floor(Math.random() * color.length)];
	var randS = Math.floor(Math.random() * (80 - 30)) + 30;
	circles.add(event.clientX,event.clientY,randC,randS);
});


// draws a circle
function drawCircle(x,y,color,size){
    ctx.fillStyle = color;
    //ctx.setTransform(size/10, 0, 0, size/10, x, y);
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.fill();
}

// this object handles all circles. Circles are stored in the array circles.items
// the function update and draw both return the circles object so that they
// can be chained.
const circles = {
    items : [], // array of circles
    add(x,y,color,size){
        var circle;
        circles.items.push(circle = {
            x,y,color,size,
            dx : 0,  // delta x and y (movement per frame
            dy : 0.9, 
        });
        return circle;
    },
    update(){
        var i,c;
        for(i = 0; i < circles.items.length; i++){
            c = circles.items[i]; // get the circle
            c.x += c.dx;
            c.y += c.dy;
            }
        return circles;
    },
    draw(){
        var i,c;
        for(i = 0; i < circles.items.length; i++){
            c = circles.items[i]; // get the circle
            drawCircle(c.x,c.y,c.color,c.size);
        }
        return circles;
    }
}

// main animation loop called once every 1/60th second (if possible)
// It checks if the widow size matches the canvas and will resize it
// if not.
// Then clears the canvas and updates and draws the circles.
// Then requests the next animation frame
function mainLoop(time){
    if(canvas.width !== innerWidth || canvas.height !== innerHeight){ // resize canvas if window size has changed
        canvas.width = innerWidth;
        canvas.height = innerHeight;
    }
    ctx.setTransform(1,0,0,1,0,0); // set default transform
    ctx.clearRect(0,0,canvas.width,canvas.height); // clear the canvas
    circles.update().draw();
    requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);
