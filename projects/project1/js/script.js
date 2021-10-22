/**
Coulrophobia
Luca Licatese

See how long you can survive in this creepy clown house to reach the highest score. Press any key to play music.
*/

"use strict";


let music;

function preload() {
music = loadSound(`assets/sounds/horrorclown.wav`);
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

// let enemy2 = {
//
// }

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255
};

let state = `title`; //can be title,simulation, or ending
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

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`See how long you can survive the horror clowns`,width/2,height/2);
  pop();
}

function simulation() {
  move();
  checkOverlap();
  display();
}

function ending() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`Looks like you got caught, try again`,width/2,height/2);
  pop();
}

function move() {
  // Move the circles

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
}

function checkOverlap() {
  // Check if the circles overlap
  let d = dist(user.x,user.y,enemy1.x,enemy1.y);
  if (d < enemy1.size/2 + user.size/2) {
    state = `ending`;
  }
}

function display() {
  // Display the circles

  // Display Enemy1
  fill(enemy1.fill.r,enemy1.fill.g,enemy1.fill.b);
  ellipse(enemy1.x,enemy1.y,enemy1.size);

  // Display user
  fill(user.fill);
  ellipse(user.x,user.y,user.size);
  }

function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
    }

}

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



function keyPressed() {
  tryMusic();
}

function tryMusic() {
  if (!music.isPlaying()) {
    music.loop();
  }
}
