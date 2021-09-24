/**
Exercise 1
Luca Licatese

This is the I like to move it exercise(1).
*/

"use strict";

let bg = {
  r: 0,
  g: 0,
  b: 0
};

let circle = {
x: 0,
y: 0,
speed: 1.5,
size: 150,
fill: 140

}



/**
Description of setup
*/
function setup() {
createCanvas(500,500);
}


/**
Description of draw()
*/
function draw() {
background(bg.r,bg.g,bg.b);
  bg.g = bg.g + 1;
    bg.b = bg.b + 1;



circle.x = circle.x + circle.speed;

fill(circle.fill);
ellipse(circle.x, circle.y,circle.size);



  fill(255,0,0);
  rect(random(500),random(250),15,15);

  fill(149, 166, 45);
  triangle(140, 420, 185, 380, 200, 420);
}
