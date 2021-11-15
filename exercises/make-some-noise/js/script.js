/**
Make Some Noise
Luca Licatese

In this exercise, the goal is to experiment using the p5.sound library and play around using oscillators, synthesizers,sound files,audio input/ interaction with the project,etc.
This is a prototype for what I might use in my final project.
*/

"use strict";

let state = `simulation`; // Could be Simulation, Failure or Success

// Array to display all 3 dodgeable items
let dodgeableItems = [];
let numDodgeballs = 10;
let numWrenches = 5;
let numBricks = 5;

// Declaring the user variable
let user;

// Declaring the background image variable
let bground;

// Declaring all images that will be used
let userImage = undefined;

let brickImage = undefined;
let wrenchImage = undefined;
let dodgeballImage = undefined;

/**
Loading all images that will be used in code
*/
function preload() {
    brickImage = loadImage("assets/images/flyingbrick.png");
    dodgeballImage = loadImage("assets/images/dodgeball.png");
    wrenchImage = loadImage("assets/images/wrench.png");

    userImage = loadImage("assets/images/dodgeb.png");

    bground = loadImage("assets/images/gym.png");
}


/**
Creating the canvas to fit the window size
*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  // Displaying user image
 let x = width / 5;
 let y = height / 2;
 user = new User(x, y, userImage);

 // Displaying bricks used for loop
  for (let i = 0; i < numBricks; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let brick = new Brick(x, y, brickImage);
    dodgeableItems.push(brick);
  }

  // Displaying dodgeballs used for loop
  for (let i = 0; i < numDodgeballs; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let dodgeball = new Dodgeball(x, y, dodgeballImage);
    dodgeableItems.push(dodgeball);
  }

  // Displaying wrenches used for loop
  for (let i = 0; i < numWrenches; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let wrench = new Wrench(x, y, wrenchImage);
    dodgeableItems.push(wrench);
  }


// Declaring the direction and speed that the dodgeableItems will move in
 for (let i = 0; i < dodgeableItems.length; i++) {
   let dodgeableItem = dodgeableItems[i];
   dodgeableItem.vx = dodgeableItem.speed;
  }
}

/**
Displays background image and creates the simulation, failure and success states
*/
function draw() {
  background(bground);

  if (state === `simulation`) {
    simulation();
  } else if (state === `failure`) {
    failure();
  } else if (state === `success`) {
    success();
  }
}

// Simulation state
function simulation() {

  // Display user image
  user.display();

  // If user gets hit by a dodgeableItem, `failure` state is triggered
  if (!user.dodged) {
    state = `failure`;
  }

  // For loop to create all of the dodgeableItems along with all statements from DodgeableItem class
  for (let i = 0; i < dodgeableItems.length; i++) {
    let dodgeableItem = dodgeableItems[i];
    dodgeableItem.move();
    dodgeableItem.wrap();
    dodgeableItem.display();
    dodgeableItem.wiggle();
    dodgeableItem.numDodges();
    dodgeableItem.checkScreen();

    // User control
    user.handleInput();
    user.checkCollision(dodgeableItem);
  }
}

// State that appears when user gets hit by a dodgeableItem
function failure() {
  displayText(`YOU FAILED! NOW GET BACK AND TRY AGAIN!`)
}

// State that appears when user has successfully dodged enough dodgeableItems
function success() {
  displayText(`GREAT JOB! NOW GET OUT THERE AND WIN!`)
}

// Characteristics for text which will be used for each text
function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(0);
  text(string, width / 2, height / 2);
  pop();
}
