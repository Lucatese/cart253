/**
Coulrophobia
Luca Licatese

See how long you can survive in this creepy clown house to reach the highest score. Press any key to play music. You also have  a special ability to send one of the enemies away by double clicking if you think you're about to get captured.
*/

"use strict";

let clownImage;

let music;

function preload() {
music = loadSound(`assets/sounds/horrorclown.wav`);

clownImage = loadImage(`assets/images/clown.png`);

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
    r: 255,
    g: 0,
    b: 0
  }
};

let enemy2 = {
  x: 0,
  y: 500,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 7,
  fill: {
    r: 255,
    g: 0,
    b: 0
  }
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: {
    r: 0,
    g: 0,
    b: 255
  }
};

let state = `title`; //can be title,simulation, or ending
/**
Sets up canvas at window's width and height. Also made sure that there was no cursor for mouse.
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    noCursor();
}


/**
Draws background and the title, simulation and ending when appropriate.()
*/
function draw() {
background(0);

score ++;
displayScore();

if (state === `title`) {
title();
}

else if (state === `simulation`) {
  simulation();
}
else if (state === `ending`) {
  ending();
  }
}
// title screen + text
function title() {
  push();
  textSize(40);
  fill(255,0,0);
  textAlign(CENTER,CENTER);
  text(`See how long you can survive the horror clowns! Press any key for music`,width/2,height/2);
  pop();
}
// simulation is the gameplay and makes sure everything is displayed correctly
function simulation() {
  move();
  checkOverlap();
  display();

}
//ending screen + text.
function ending() {
  push();
  textSize(64);
  fill(255,0,0);
  textAlign(CENTER,CENTER);
  text(`Looks like you got caught, try again!`,width/2,height/2);
  pop();
}


function move() {
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

  // Enemy2 movement
  if (mouseX < enemy1.x) {
  enemy2.vx = -enemy2.speed;
  }
  else {
    enemy2.vx = enemy2.speed;
  }
  if (mouseY < enemy2.y) {
  enemy2.vy = -enemy2.speed;
  }
  else {
    enemy2.vy = enemy2.speed;
  }
  enemy2.x = enemy2.x + enemy2.vx;
  enemy2.y = enemy2.y + enemy2.vy;

  // User movement
  user.x = mouseX;
  user.y = mouseY;
}

function checkOverlap() {
  // Check if the circles overlap
  let d = dist(user.x,user.y,enemy1.x,enemy1.y);
  if (d < enemy1.size/2 + user.size/2) {
    state = `ending`;
  }
  let d1 = dist(user.x,user.y,enemy2.x,enemy2.y);
  if (d1 < enemy2.size/2 + user.size/2) {
    state = `ending`;
  }
}

function display() {

  // Display clowns  around canvas
  image(clownImage,1000,10,150,150);
  image(clownImage,0,0,150,150);
  image(clownImage,500,500,150,150);

  // Display Enemy1
  fill(enemy1.fill.r,enemy1.fill.g,enemy1.fill.b);
  ellipse(enemy1.x,enemy1.y,enemy1.size);

  // Display Enemy2
  fill(enemy2.fill.r,enemy2.fill.g,enemy2.fill.b);
  ellipse(enemy2.x,enemy2.y,enemy2.size);


  // Display user
  fill(user.fill.r,user.fill.g,user.fill.b);
  ellipse(user.x,user.y,user.size);
  }

//changes title screen to gameplay
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    }
}

// Special power up so if you're about to get captured you can double click to send one of the enemy's away randomly.
function doubleClicked() {
  enemy2.x = random(0,500);
  enemy2.y = random(0.500);
}

// score will display top left and will stop once game is over
function displayScore() {
  push();
  fill(255);
  textAlign(LEFT,TOP);
  textSize(32);
  text(score, width / 8, height / 8);
  pop();
  if(state === `ending`) {
    noLoop();
  }
}

// if a key is pressed music will play and it will loop, won't repeat over its' self
function keyPressed() {
  tryMusic();
}

function tryMusic() {
  if (!music.isPlaying()) {
    music.loop();
  }
}
