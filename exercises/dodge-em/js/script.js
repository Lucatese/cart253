/**
Dodge-em Exercise
Luca Licatese

This is the dodge-em Exercise
*/

"use strict";

let covidImage;

/**
Loading the covid image inside the window
*/
function preload() {
  covidImage = loadImage("assets/images/covid19facemask.png");

}



let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  fill: {
    r: 0,
    g: 255,
    b: 0
  }
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255
};

let numStatic = 3000;
/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

    covid19.y = random(0,height);
    covid19.vx = covid19.speed;

    noCursor();
}


/**
Description of draw()
*/
function draw() {
background(119, 252, 3);

// Display image in top right
image(covidImage,0,0,200,200);

// Display static
for(let i = 0; i < numStatic; i++) {
  let x = random(0,width);
  let y = random(height,0);
  stroke(255,0,0);
  point(x,y);
}


// Covid 19 movement

if (mouseX < covid19.x) {
covid19.vx = -covid19.speed;
}
else {
  covid19.vx = covid19.speed;
}

if (mouseY < covid19.y) {
covid19.vy = -covid19.speed;
}
else {
  covid19.vy = covid19.speed;
}

covid19.x = covid19.x +covid19.vx;
covid19.y = covid19.y +covid19.vy;

// User movement
user.x = mouseX;
user.y = mouseY;

// User color change
if(mouseIsPressed) {
user.fill = (0);
}
else {
user.fill = 255 ;
}

// Check for catching covid19
let d = dist(user.x,user.y,covid19.x,covid19.y);
if (d < covid19.size/2 + user.size/2) {
  noLoop();
}



// Display covid 19
fill(covid19.fill.r,covid19.fill.g,covid19.fill.b);
ellipse(covid19.x,covid19.y,covid19.size);

// Display user
fill(user.fill);
ellipse(user.x,user.y,user.size);

}
