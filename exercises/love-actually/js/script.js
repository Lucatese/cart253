/**
Love, Actually exercise
Luca Licatese

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
let circle1 = {
  x: undefined,
  y: 500,
  size:100,
  vx:0,
  vy:0,
  speed: 3,
  tx: 0,
  ty: 100
};

let circle2 = {
  x: undefined,
  y: undefined,
  size:100,
  vx:undefined,
  vy:undefined,
  speed: 3
};

let state = `title`; //can be title,simulation, love or sadness
/**
Description of setup
*/
function setup() {
  createCanvas(1000,1000);
  setUpCircles();
}

function setUpCircles() {

    // Position circles seperated from one another
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;

    // Start circles moving in a from random direction
    circle1.vx = random(-circle1.speed,circle1.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);
    //circle2.vx = random(-circle2.speed,circle2.speed);
    //circle2.vy = random(-circle2.speed,circle2.speed);
  }



/**
Description of draw()
*/
function draw() {
background(0);

if (state === `title`) {
title();
}

else if (state === `simulation`) {
  simulation();
}
else if (state === `love`) {
  love();
}
else if (state === `sadness`) {
  sadness();
  }
}

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`,width/2,height/2);
  pop();
}


function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
}

function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`LOVE!`,width/2,height/2);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`:(`,width/2,height/2);
  pop();
}


function move() {
  // Move the circles
  circle1.x = map(noise(circle1.tx),0,1,0,width); //circle1.x + circle1.vx;
  circle1.y = map(noise(circle1.ty),0,1,0,height); //circle1.y + circle1.vy;
  circle1.tx += 0.03;
  circle1.ty += 0.03;

circle2.x = mouseX;
circle2.y = mouseY;
  //circle2.x = circle2.x + circle2.vx;
  //circle2.y = circle2.y + circle2.vy;
}

function checkOffscreen() {
  // Check if the circles have gone offscreen
  if (isOffScreen(circle1) || isOffScreen(circle2)) {
    state = `sadness`;
  }
}

function isOffScreen(circle) {
  if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
    return true;
  }
  else {
    return false;
  }
}

function checkOverlap() {
  // Check if the circles overlap
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = `love`;
  }
}

function display() {
  // Display the circles
  ellipse(circle1.x,circle1.y,circle1.size);
  ellipse(circle2.x,circle2.y,circle2.size);
  }

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    }
  }
