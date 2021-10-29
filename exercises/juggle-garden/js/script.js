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
Creating canvas, adding paddle in the simulation, displaying chainsaws and balls in the simulation
*/
function setup() {
createCanvas(windowWidth,windowHeight);

paddle = new Paddle(300,20)

for (let i = 0; i < numChainsaws; i++) {
  let x = random(0, width);
  let y = random(-300, -100);
  let chainsaw = new Chainsaw(x,y,chainsawImage,chainsawSFX);
  chainsaws.push(chainsaw);
}

for (let i = 0; i < numBalls; i++) {
  let x = random(0, width);
  let y = random(-300, -100);
  let ball = new Ball(x,y,ballSFX);
  balls.push(ball);
  }
}


/**
Adding black background and identifying the states
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

  // Title state
  function title() {
    push();
    fill(255);
    textSize(40);
    textAlign(CENTER,CENTER);
    text(`I hope you're a good juggler`,windowWidth/2,windowHeight/5);
    pop();
    textFont('Oswald');
    fill(255);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(`Control the paddle with the mouse to keep juggling the items in the air`, windowWidth / 2, windowHeight / 3.5)
    text(`Press 'C' to add chainsaws     |     Press 'B' to add balls`, windowWidth / 2, windowHeight / 1.7)
    push();
    fill(255);
    textSize(45);
    textAlign(CENTER, CENTER);
    text(`Click to start`, windowWidth / 2, windowHeight / 1.1);
    pop();
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
textFont('Oswald');
text(`Well that's gonna leave a scratch!`,windowWidth/2,windowHeight/2);
}

// State that appears if a ball falls out of frame
function end2() {
fill(255);
textSize(32);
textAlign(CENTER,CENTER);
textFont('Oswald');
text(`Well at least it wasn't a chainsaw, Try Again!`,windowWidth/2,windowHeight/2);
}

// Creating chainsaws and adding the methods which control them
function createChainsaws() {
  for (let i = 0; i < chainsaws.length; i++) {
    let chainsaw = chainsaws[i];
    if (chainsaw.active) {
      chainsaw.gravity(gravityForce);
      chainsaw.move();
      chainsaw.bounce(paddle);
      chainsaw.display();
      chainsaw.check();
      chainsaw.sound();
    }
  }
}

// Creating balls and adding the methods which control them
function createBalls() {
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {
      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();
      ball.check();
    }
  }
}

// Click with the mouse during title state to begin simulation
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    }
  }

// Pressing 'C' key will add a new chainsaw in the mouse position
  function keyPressed() {
    if (keyCode === 67) {
      let x = mouseX;
      let y = mouseY;
      let chainsaw = new Chainsaw(x,y,chainsawImage,chainsawSFX);
      chainsaws.push(chainsaw);
    }

// Pressing 'B' key will add a new ball in the mouse position
      if (keyCode === 66) {
        let x = mouseX;
        let y = mouseY;
        let ball = new Ball(x,y,ballSFX);
        balls.push(ball);
      }
    }
