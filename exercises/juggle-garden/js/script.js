/**
Exercise 05: Juggle Garden
Luca Licatese

 This simulation should include another form of user-control, a new class and objects and at least 2 endings.
*/

"use strict";

// Defining force of gravity
let gravityForce = 0.0025;

// Creating arrays and defining items from the classes
let chainsaws = [];
let numChainsaws = 1;
let balls = [];
let numBalls = 1;

let paddle;

// Defining images and sounds
let chainsawImage = undefined;

let ballSFX = undefined;
let chainsawSFX = undefined;

/**
Loading all images and sounds into code
*/
function preload() {
  chainsawImage = loadImage("assets/images/chainsaw.png");

  chainsawSFX = loadSound("assets/sounds/chainsawstart.wav");
  ballSFX = loadSound("assets/sounds/ball.wav");

}

let state = `title`; // Can be either title, simulation, end1, end2

/**
Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);

paddle = new Paddle(300,20)
}


/**
Description of draw()
*/
function draw() {
background(0);



 if (state === `title`) {
   title();
 } else if (state === `simulation`) {
   simulation();
 } else if (state === `end1`) {
   end1();
 } else if (state === `end2`) {
   end2();
 }
}



// Gameplay state
function simulation() {
  paddle.move();
  paddle.display();
  createChainsaws();
  createBalls();
  }

// State that appears if a chainsaw falls out of frame
function end1() {
fill(255);
textSize(32);
textAlign(CENTER,CENTER);
text(`Well that's gonna leave a scratch!`,windowWidth/2,windowHeight/2);
}

// State that appears if a ball falls out of frame
function end2() {
fill(255);
textSize(32);
textAlign(CENTER,CENTER);
text(`Well at least it wasn't a chainsaw, Try Again!`,windowWidth/2,windowHeight/2);
}



}
