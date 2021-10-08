/**
Template p5 project
Luca Licatese

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/

let circle = {
x: 250,
y: 250,
size: 100,
vx: 0,
vy: 0
}

/**
Description of setup
*/


function setup() {
  createCanvas(500,500);
reset();
}

function draw() {
  background(0);

move();
checkOffscreen();
display();

}

function move() {
circle.x = circle.x + circle.vx;
circle.y = circle.y + circle.vy;
}


function checkOffscreen() {

if (circleIsOffScreen()) {
  reset();
  }
}

function circleIsOffScreen() {
if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
  return true;
  }
  else{
    return false;
  }
}

function display() {
  ellipse(circle.x,circle.y,circle.size);
}

function reset() {
  circle.x = 250,
  circle.y = 250;
  circle.vx = random(-10,10);
  circle.vy = random(-10,10);
}
