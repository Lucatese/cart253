/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";




function preload() {


}

let score = 0;


let enemy1 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 0,
    g: 255,
    b: 0
  }
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255
};


/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    enemy1.y = random(0,height);
    enemy1.vx = enemy1.speed;

    noCursor();
}


/**
Description of draw()
*/
function draw() {
background(0);

score ++;

push();
fill(255);
textAlign(LEFT,TOP);
textSize(32);
text(score, width / 8, height / 8);
pop();




// Enemy1 movement

if (mouseX < enemy1.x) {
enemy1.vx = -enemy1.speed;
}
else {
  enemy1.vx = enemy1.speed;
}

if (mouseY < enemy1.y) {
enemy1.vy = -enemy1.speed;
}
else {
  enemy1.vy = enemy1.speed;
}

enemy1.x = enemy1.x + enemy1.vx;
enemy1.y = enemy1.y + enemy1.vy;

// User movement
user.x = mouseX;
user.y = mouseY;

// User color change
if(mouseIsPressed) {
user.fill = (0);
}
else {
user.fill = 255 ;
}

// Check for catching covid19
let d = dist(user.x,user.y,enemy1.x,enemy1.y);
if (d < enemy1.size/2 + user.size/2) {
  noLoop();
}



// Display Enemy1
fill(enemy1.fill.r,enemy1.fill.g,enemy1.fill.b);
ellipse(enemy1.x,enemy1.y,enemy1.size);

// Display user
fill(user.fill);
ellipse(user.x,user.y,user.size);

}
