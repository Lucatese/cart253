# Template p5 project

This is the README file for the entire project. For more official projects you should write information here about the nature of the project, your name, any special explanations of how the project works, etc.

let user = {
  x: 0,
  y: 0,
  size: 100
};

let school = [];
let schoolSize = 1;

// Foods
let food1;
let food2;
let food3;
let food4;
let food5;
let food6;



/**
Description of preload
*/
function preload() {

}


function setup() {
createCanvas(windowWidth,windowHeight);

for (let i = 0; i < schoolSize; i++) {
  let fish = createFood(random(0,width), random(0,height));
  school.push(food);
}

}

function createFood(x, y) {
let food = {
  x: x,
  y: y,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 2
};
return food;
}


/**
Description of draw()
*/
function draw() {
background(0);


// move the user with the mouse
moveUser();



// check whether the user has eaten either food
checkFood(food1);
checkFood(food2);
checkFood(food3);
checkFood(food4);
checkFood(food5);
checkFood(food6);

// display the user and foods
displayUser();


for (let i = 0; i < school.length; i++) {
  moveFood(school[i]);
  displayFood(school[i]);
  }

}

function moveFood(food) {
  // choose whether to change direction
  let change = random(0, 1);
  if (change < 0.05) {
    food.vx = random(-food.speed, food.speed);
    food.vy = random(-food.speed, food.speed);
  }

  // move the fish
  food.x = food.x + food.vx;
  food.y = food.y + food.vy;

  // constrain the fish to the canvas
  food.x = constrain(food.x, 0, width);
  food.y = constrain(food.y, 0, height);
}
// sets the user position to the mouse position
function moveUser() {
user.x = mouseX;
user.y = mouseY;
}

function checkFood(food) {
  if (!food.eaten) {
    let d = dist(user.x, user.y, food.x, food.y);
    if(d < user.size / 2 + food.size / 2) {
      food.eaten = true;
    }
  }
}


  // draws the user as a circle
  function displayUser() {
    push();
    fill(255);
    ellipse(user.x, user.y, user.size);
    pop();
  }

  function displayFood(food){
    if (!food.eaten) {
      push();
      fill(255,100,100);
      ellipse(food.x, food.y, food.size);
      pop();
