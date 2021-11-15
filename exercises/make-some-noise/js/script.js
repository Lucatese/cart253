/**
Make Some Noise
Luca Licatese

In this exercise, the goal is to experiment using the p5.sound library and play around using oscillators, synthesizers,sound files,audio input/ interaction with the project,etc.
This is a prototype for what I might use in my final project.
*/

"use strict";

let state = `simulation`; // Could be Simulation or Failure

let user;


let dodgeableItems = [];
let numDodgeballs = 10;
let numWrenches = 5;
let numBricks = 5;

let mic;



/**

*/
function preload() {

}


/**

*/
function setup() {
  createCanvas(windowWidth,windowHeight);

  mic = new p5.AudioIn();
  mic.start();


 let x = width / 5;
 let y = height / 2;
 user = new User(x, y,);


  for (let i = 0; i < numBricks; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let brick = new Brick(x, y,);
    dodgeableItems.push(brick);
  }


  for (let i = 0; i < numDodgeballs; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let dodgeball = new Dodgeball(x, y,);
    dodgeableItems.push(dodgeball);
  }


  for (let i = 0; i < numWrenches; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let wrench = new Wrench(x, y,);
    dodgeableItems.push(wrench);
  }



 for (let i = 0; i < dodgeableItems.length; i++) {
   let dodgeableItem = dodgeableItems[i];
   dodgeableItem.vx = -dodgeableItem.speed;
  }
}

/**

*/
function draw() {
  background(0);

  if (state === `simulation`) {
    simulation();
  } else if (state === `failure`) {
    failure();
  }
}

// Simulation state

  function simulation() {
  let micLevel = mic.getLevel();
  user.y = map(micLevel,0,3,0,height);

    push();
    textAlign(CENTER,CENTER);
    textSize(30);
    fill(255);
    text(micLevel,width/2,height/2);
    pop();


  user.display();

  user.handleInput();


  if (!user.dodged) {
    state = `failure`;
  }


  for (let i = 0; i < dodgeableItems.length; i++) {
    let dodgeableItem = dodgeableItems[i];
    dodgeableItem.move();
    dodgeableItem.wrap();
    dodgeableItem.display();

    user.checkCollision(dodgeableItem);
  }
}

function failure() {
  displayText(`YOU FAILED! NOW GET BACK AND TRY AGAIN!`)
}

function displayText(string) {
  push();
  textAlign(CENTER, CENTER);
  textSize(40);
  fill(255);
  text(string, width / 2, height / 2);
  pop();
}
