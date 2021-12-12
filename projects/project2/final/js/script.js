/**
Project 2 Prototype
Luca Licatese

Prototype for Project 2; Final CART 253 Project
*/

"use strict";

let state = `level1`; // Could be level1, level1Fail,level2,level2fail,level3,level3fail,final

// Array to display all 3 dodgeable items: Level 1
let dodgeableItems = [];
let numDodgeballs = 10;
let numWrenches = 5;
let numBricks = 5;

// Declaring all images that will be used: Level 1
let user;
let bground;
let userImage = undefined;
let brickImage = undefined;
let wrenchImage = undefined;
let dodgeballImage = undefined;

/**
Loading all images that will be used in code
*/
function preload() {
  // Loading images to be used in code : Level 1
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

  /* Setup for Level 1 */
setupLevel1();



function setupLevel1() {
  // Displaying user image
 user = new UserL1(userImage);
 // Displaying bricks used for loop
  for (let i = 0; i < numBricks; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let brick = new BrickL1(x, y, brickImage);
    dodgeableItems.push(brick);
  }
  // Displaying dodgeballs used for loop
  for (let i = 0; i < numDodgeballs; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let dodgeball = new DodgeballL1(x, y, dodgeballImage);
    dodgeableItems.push(dodgeball);
  }
  // Displaying wrenches used for loop
  for (let i = 0; i < numWrenches; i++) {
    let x = random(width / 2, width);
    let y = random(0, height);
    let wrench = new WrenchL1(x, y, wrenchImage);
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

  if (state === `level1`) {
    level1();
  } else if (state === `level1Fail`) {
    level1fail();
  } else if (state === `level2`) {
    level2();
  }
}


/* Level 1 state : LEVEL 1 */
function level1() {

  // Display user-controlled image
  user.display();
  // If user gets hit by a dodgeableItem, `level1Fail` state is triggered
  user.notDodged();
  // For loop to create all of the dodgeableItems,with all of the statements from dodgeableItem class
  for (let i = 0; i < dodgeableItems.length; i++) {
    let dodgeableItem = dodgeableItems[i];
    // Adding movement to the dodgeableItems
    dodgeableItem.move();
    /* When a dodgeableItem reaches the other side of screen they will reappear at the starting
    point in a random position */
    dodgeableItem.wrap();
    // Display dodgeableItems
    dodgeableItem.display();
    // dodgeableItems will shake up and down slightly in order to make the overall movement more realistic
    dodgeableItem.wiggle();
    // If the number of dodgeableItems dodged exceeds 50, `level2` state is triggered
    dodgeableItem.numDodges();
    // When a dodgeableItem passes the user, +1 is added to the dodges
    dodgeableItem.checkScreen();
    // Check when dodgeableItem and user overlap
    user.checkCollision(dodgeableItem);
  }
  // User control for UserL1 image
  user.handleInput();
}
// State that appears when user gets hit by a dodgeableItem: level1Fail
function level1Fail() {
  push();
  displayText(`YOU FAILED! NOW GET BACK AND TRY AGAIN!`)
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(0);
  text(string, width / 2, height / 2);
  pop();
}

}
