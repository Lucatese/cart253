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
x: 0,
y: 250,
size: 100,
vx: 0,
vy: 0,
speed: 2

};



function setup() {
  createCanvas(500,500);
  circle.vx = circle.speed;
  textSize(32);
  textAlign(CENTER,CENTER);
}

let state = `title`; //possible states are title, animation, ending

function draw() {
background(0);

if (state === `title`) {
title();
}
else if (state === `animation`) {
animation();
}
else if (state === `ending`) {
  ending();
}


function title() {
  // Title
  fill(255);
  text(`Life.`,width/2,height/2);
}

function animation() {
  // animation
  circle.x = circle.x + circle.vx;
  circle.y = circle.y + circle.vy;

  if (circle.x > width) {
    state = `ending`;
  }
  ellipse(circle.x,circle.y,circle.size);
}

function ending() {
  // Ending
  fill(127);
  text(`It's all over.`,width/2,height/2);
    }
}


function keyPressed() {
  if (state ===`title`) {
state = `animation`;
  }
}
