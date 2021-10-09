/**
Life or Death
Luca Licatese

This is the love, actually exercise. I decided to take a spin on it and so you have to avoid the circles coming for you which represent death for as long as you. There is a small circle that you have to touch and find to escape for your freedom.
*/

"use strict";


/**
Description of preload
*/
let circle1 = {
  x: undefined,
  y: 500,
  size:150,
  vx:0,
  vy:0,
  speed: 7.5,
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

let circle3 = {
  x:undefined,
  y:1000,
  size: 5,
  vx: 0,
  vy: 0,
  speed:0.5,
  tx: 1000,
  ty: 100
}





let state = `title`; //can be title,simulation, love or sadness
/**
Description of setup
*/
function setup() {
  createCanvas(windowWidth,windowHeight);
  setUpCircles();
}

function setUpCircles() {

    // Position circles seperated from one another
    circle1.x = width / 3;
    circle2.x = 2 * width / 3;

    // Start circles moving in a from random direction
    circle1.vx = random(-circle1.speed,circle1.speed);
    circle1.vy = random(-circle1.speed,circle1.speed);

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
else if (state === `life`) {
  life();
}
else if (state === `death`) {
  death();
  }
  else if (state === `escape`) {
    escape();
  }
}

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`SURVIVE`,width/2,height/2);
  pop();
}


function simulation() {
  move();
  checkOffscreen();
  checkOverlap();
  display();
  reachFreedom();
}

function life() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`Death caught up to you`,width/2,height/2);
  pop();
}

function death() {
  push();
  textSize(64);
  fill(150,150,255);
  textAlign(CENTER,CENTER);
  text(`You can't escape death`,width/2,height/2);
  pop();
}

function escape() {
  push();
  textSize(64);
  fill(240, 252, 3);
  textAlign(CENTER,CENTER);
  text(`You get to live another day`,width/2,height/2);
  pop();
}

function move() {
  // Move the circles
  circle1.x = map(noise(circle1.tx),0,1,0,width);
  circle1.y = map(noise(circle1.ty),0,1,0,height);
  circle1.tx += 0.03;
  circle1.ty += 0.03;

  circle2.x = mouseX;
  circle2.y = mouseY;

  circle3.x = map(noise(circle3.tx),0,1,0,width);
  circle3.y = map(noise(circle3.ty),0,1,0,height);
  circle3.tx += 0.03;
  circle3.ty += 0.03;

}

function checkOffscreen() {
  // Check if the user's circle has gone off-screen
  if (isOffScreen(circle2)) {
    state = `death`;
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
    state = `life`;
  }
}

function reachFreedom() {
  // Check if the circle touches the smaller circle to escape/win
  let d = dist(circle2.x,circle2.y,circle3.x,circle3.y);
  if (d < circle2.size/2 + circle3.size/2) {
    state = `escape`;
  }
}

function display() {
  // Display the circles
  ellipse(circle1.x,circle1.y,circle1.size);
  ellipse(circle2.x,circle2.y,circle2.size);
  ellipse(circle3.x,circle3.y,circle3.size);
  }

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    }
  }
