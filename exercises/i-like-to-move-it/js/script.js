/**
Exercise 1
Luca Licatese

This is the I like to move it exercise(1).
*/

"use strict";
// These are the RGB colors for the background

let bg = {
  r: 0,
  g: 0,
  b: 0
};

// This is the circle and all the characteristics it has

let circle = {
x: 0,
y: 275,
speed: 0.75,
size: 150,
fill: 0

}



/**
Creating the Canvas
*/
function setup() {
createCanvas(500,500);
}


/**
This is the background and I made it change color(mix of blue and green)
*/
function draw() {
background(bg.r,bg.g,bg.b);
  bg.g = bg.g + 1;
    bg.b = bg.b + 1;


// This is the speed for the circle and once it reaches the middle it stops moving
circle.x = circle.x + circle.speed;
circle.x = constrain(circle.x,0, width/2);

//while moving the mouse both horizontally and vertically you can change the size and color
circle.size = map(mouseY,height,0,100,500);
circle.fill = map(mouseX,0,width,0,255);

fill(circle.fill);
ellipse(circle.x, circle.y,circle.size);


// These rectangles are randomly generated across the canvas
fill(255,0,0);
rect(random(width),random(height),15,15);

fill(0,0,255);
rect(random(width),random(height),15,15);

fill(0,255,0);
rect(random(width),random(height),15,15);

//These are lines that cross each other in the middle to look like an X, gives a border to the triangles too
stroke(0);
line(0,0,width,height);

stroke(0);
line(width,0,0,height);

// There are two triangles that are facing towards each other
fill(245, 158, 66);
triangle(0,0,250,250,500,0);

fill(245, 158, 66);
triangle(0,500,250,250,500,500);
}
