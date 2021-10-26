/**
Luca Licatese
Age of Aquariums

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


let school = [];
let schoolSize = 10;

let user = {
  x: 0,
  y: 0,
  size: 100
};

let fish1;

function setup() {
createCanvas(600,600);

 for (let i = 0; i < schoolSize; i++) {
   let fish = createFish(random(0,width), random(0,height));
   school.push(fish);
 }
}

// createFish(x,y)
// creates a new javascript object decribing a fish and returns it
function createFish(x, y) {
let fish = {
  x: x,
  y: y,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2,
  eaten:false
};
return fish;
}


// draw()
// moves and displays our fish
function draw() {
background(0);

// check whether the user has eaten either food
checkFish(fish1);


moveUser();

displayUser();

for (let i = 0; i < school.length; i++) {
  moveFish(school[i]);
  displayFish(school[i]);
  }
}

// moveFish(fish)
// chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    fish.vx = random(-fish.speed, fish.speed);
    fish.vy = random(-fish.speed, fish.speed);
  }

  // move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;

  // constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

function moveUser() {
user.x = mouseX;
user.y = mouseY;
}

function checkFish(fish) {
  if (!fish.eaten) {
    let d = dist(user.x, user.y, fish.x, fish.y);
    if(d < user.size / 2 + fish.size / 2) {
      fish.eaten = true;
    }
  }
}

function displayUser() {
  push();
  fill(255);
  ellipse(user.x, user.y, user.size);
  pop();
}

// displayFish(fish)
// displays the provided fish on the canvas
function displayFish(fish){
  if (!fish.eaten) {
    push();
    fill(255,100,100);
    ellipse(fish.x, fish.y, fish.size);
    pop();
  }
}
