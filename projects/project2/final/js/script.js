/**
Project 2 Prototype
Luca Licatese

Prototype for Project 2; Final CART 253 Project
*/

"use strict";

let state = `level1`; // Could be level1, level1Fail,level2,level2Title,level2fail,level3,level3fail,final

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

// The user tring to cross the path
let userL2;

// The snakes(starts at zero)
let snakesL2 = [];

// How often to add a new snake (in frames)
let addSnakeL2Interval = 1 * 60; // one per second
// The timer that will count down to 0 so we'll know
// when to add a new snake
let timer = addSnakeL2Interval;

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

setupLevel2();

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


function setupLevel2() {
  let x = width / 2;
    let y = height;
    userL2 = new UserL2(x, y,image);
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
    level1Fail();
  }
  else if (state === `level2Title`) {
    level2Title();
  }
  else if (state === `level2`) {
   level2();
  }
   else if (state === `level2Fail`) {
    level2Fail();
  }
   else if (state === `level3`) {
    level3();
  }
  else if (state === `level3Fail`) {
    level3Fail();
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

function level2Title() {
  push();
  displayText(`Climb the ssslippery ssslopes to victory! `)
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(0);
  text(string, width / 2, height / 2);
  pop();
}

function level2() {

    //using arrow keys to move userL2
    userL2.handleInput();
    // adds movement to userL2
    userL2.move();
    // displays the userL2
    userL2.display();

    // Go through all the snakes currently in the simulation
    for (let i = 0; i < snakesL2.length; i++) {
      let snakeL2 = snakeL2s[i];
      snakeL2.move();
      snakeL2.wrap();
      snakeL2.display();

      // Check whether it hit the UserL2
      userL2.checkHit(snakesL2);

      // Go through all the snakes  to check whether
      // they collided with each other
      for (let j = 0; j < snakeL2s.length; j++) {
        let otherSnakeL2= snakeL2s[j];
        // Only check for a crash if the other vehicle
        // is a DIFFERENT vehicle from the current one
        if (snakeL2 !== otherSnakeL2) {
          snakeL2.checkCrash(otherSnakeL2);
        }
      }
    }

    // If the userL2 got hit by a snake change state

    if (!userL2.alive) {
      state = `level2Fail`;
    }

    // if userL2 made it to top of canvas progress to next level
    if (userL2.y < 0) {
      state = `level3`;
    }

    //taken from traffic with vehicle collisions exercise

    // Update timer by counting down one frame
    timer -= 1;
    // Check if timer hits zero
    if (timer <= 0) {
      // Choose a random y position
      let y = random(0, height);
      // Generate a random number for probability
      let r = random(0, 1);
    // randomly create a snake
    let snakeL2 = undefined;
    // randomly create one of three snakes
    // always create snake at x; 0 so they start on side of screen
    if (r < 0.33) {
      vehicle = new GreenCobraL2(0, y);
    }
    else if (r < 0.66) {
      vehicle = new PurpleCobraL2(0, y);
    }
    else {
      vehicle = new CobraL2(0, y);
    }

    // Generate another random number to control which direction snake will move in
    r = random(0, 1);
    if (r < 0.75) {
      snakeL2.vx = -snakeL2.speed * random(0.8, 1.3);
    } else {
      snakeL2.vx = snakeL2.speed * random(0.8, 1.3);
    }
    // Add our new snake to the second level
    snakeL2s.push(snake);

    // Reset timer
    timer = addSnakeL2Interval;
  }
}
function level2Fail() {
  push();
  displayText(`You Sssssuck, Try harder next time!`)
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(0);
  text(string, width / 2, height / 2);
  pop();
}


/**
If the key is pressed the switch states
*/
function keyPressed() {
  if (state === `level2Title`) {
    // If we're in the title go to the level
    state = `level2`;
  } else if (state === `level2Fail` || state === `level3`) {
    // If we hit an ending go to either the fail screen or next level
    vehicles = [];
    pedestrian.y = height;
    pedestrian.x = width / 2;
    state = `level2Title`;
  }
}

}

}
